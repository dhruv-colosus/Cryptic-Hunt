//   .get(getTeam)

//router.route("/addMember").post(protect, addMember);

const asyncHandler = require("express-async-handler");
const Team = require("../models/teamModel");
const { genCode } = require("../utils");
const mongoose = require("mongoose");
const User = require("../models/userModel");

const MAX_MEMBER_COUNT = 3;

const createNewTeam = asyncHandler(async (req, res) => {
  const user = req.user;

  if (user.teamId) {
    res.status(400).json({
      error: "User already in a team.",
    });
    return;
  }

  const { teamName, teamSize } = req.body;

  if (!teamName || !teamSize) {
    res.status(400).json({
      error: "Invalid or missing parameters",
    });
    return;
  }

  const existingTeam = await Team.findOne({ name: teamName });

  if (existingTeam) {
    res.status(400).json({
      error: "Team name already exists.",
    });
    return;
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const code = await genCode();
    const newTeam = new Team({
      name: teamName,
      members: [user._id],
      teamOwner: user._id,
      teamCode: code,
    });

    await newTeam.save({ session: session });

    await User.findByIdAndUpdate(
      user._id,
      { $set: { teamId: newTeam._id } },
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    return res.status(201).json({
      ...newTeam._doc,
    });
  } catch (error) {
    console.error(error);
    await session.abortTransaction();
    session.endSession();
    return res.status(500).json({ error: "Internal server error." });
  }
});

const updateTeam = asyncHandler(async (req, res) => {
  const user = req.user;
  const { teamId, newTeamName } = req.body;

  console.log(user);

  if (!user.teamId) {
    res.status(405).json({
      error: "User is not in a team",
    });
    return;
  }

  if (!teamId || !newTeamName) {
    res.status(400).json({
      error: "Invalid parameters.",
    });
    return;
  }

  const existingTeam = await Team.findOne({ _id: teamId }).exec();

  if (!existingTeam) {
    res.status(404).json({
      error: "Team not found.",
    });
    return;
  }

  if (existingTeam.teamOwner.toString() !== user._id.toString()) {
    res.status(405).json({
      error: "User does not own the team.",
    });
    return;
  }

  existingTeam.name = newTeamName;
  await existingTeam.save();

  res.status(200).json({
    ...existingTeam._doc,
  });
});

const deleteTeam = asyncHandler(async (req, res) => {
  const { teamId } = req.query;

  if (!teamId) {
    return res.status(400).json({
      error: "Invalid parameters.",
    });
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const existingTeam = await Team.findById(teamId).session(session);

    if (!existingTeam) {
      await session.abortTransaction();
      session.endSession();
      return res.status(404).json({ error: "Team not found." });
    }

    // Update all member's teamId field to null
    await User.updateMany(
      { _id: { $in: existingTeam.members } },
      { $set: { teamId: null } }
    ).session(session);

    await existingTeam.deleteOne({ session });

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({ ...existingTeam._doc });
  } catch (error) {
    console.error(error);
    await session.abortTransaction();
    session.endSession();
    return res.status(500).json({ error: "Internal server error." });
  }
});

const getTeam = asyncHandler(async (req, res) => {
  const { teamId } = req.query;

  if (!teamId) {
    return res.status(400).json({
      error: "Invalid parameters.",
    });
  }

  const existingTeam = await Team.findById(teamId).populate(
    "members",
    "-password"
  );

  if (!existingTeam) {
    return res.status(404).json({
      error: "Team not found.",
    });
  }

  return res.status(200).json({
    ...existingTeam._doc,
  });
});

const addMember = asyncHandler(async (req, res) => {
  const user = req.user;
  const { code } = req.body;

  let memberId = user._id;
  if (!memberId || !code) {
    return res.status(400).json({
      error: "Invalid parameters.",
    });
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    const existingTeam = await Team.findOne({
      $or: [{ teamCode: code }, { _id: user.teamId }],
    }).session(session);

    if (!existingTeam) {
      await session.abortTransaction();
      return res.status(404).json({ error: "Team not found." });
    }

    if (
      existingTeam.members.find((id) => id.toString() === memberId.toString())
    ) {
      await session.abortTransaction();
      return res.status(400).json({
        error: "User already in team.",
      });
    }

    if (existingTeam.members.length == MAX_MEMBER_COUNT) {
      await session.abortTransaction();
      return res.status(405).json({
        error: `Max ${MAX_MEMBER_COUNT} members are allowed`,
      });
    }

    existingTeam.members.push(memberId);
    await existingTeam.save({ session: session });

    await User.findByIdAndUpdate(
      memberId,
      { $set: { teamId: existingTeam._id } },
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({ ...existingTeam._doc });
  } catch (error) {
    console.error(error);
    await session.abortTransaction();
    session.endSession();
    return res.status(500).json({ error: "Internal server error." });
  }
});

const kickMember = asyncHandler(async (req, res) => {
  const user = req.user;
  const { memberId, teamId } = req.query;

  if (!memberId || !teamId) {
    return res.status(400).json({
      error: "Invalid parameters.",
    });
  }

  const existingTeam = await Team.findById(teamId);

  if (!existingTeam) {
    res.status(404).json({
      error: "Team not found.",
    });
    return;
  }

  if (user._id.toString() !== existingTeam.teamOwner.toString()) {
    res.status(405).json({
      error: "User does not own the team.",
    });
    return;
  }

  if (!existingTeam.members.includes(memberId)) {
    res.status(404).json({
      error: "User not found in team.",
    });
    return;
  }

  const session = await mongoose.startSession();
  session.startTransaction();

  try {
    existingTeam.members.pull(memberId);
    await existingTeam.save({ session: session });

    await User.findByIdAndUpdate(
      memberId,
      { $set: { teamId: null } },
      { session }
    );

    await session.commitTransaction();
    session.endSession();

    return res.status(200).json({
      ...existingTeam._doc,
    });
  } catch (error) {
    console.error(error);
    await session.abortTransaction();
    session.endSession();
    return res.status(500).json({ error: "Internal server error." });
  }
});

module.exports = {
  createNewTeam,
  updateTeam,
  deleteTeam,
  getTeam,
  addMember,
  kickMember,
};
