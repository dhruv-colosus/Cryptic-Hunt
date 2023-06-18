const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const generateToken = require("../middleware/generateToken");

const User = require("../models/userModel");
const Questions = require("../models/questionModel");

const createUser = asyncHandler(async (req, res) => {
  const { name, username, email, password } = req.body;

  const userExists = await User.findOne({ email });
  const userExists2 = await User.findOne({ username });

  if (userExists || userExists2) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({ name, username, email, password: hashedPassword });

  await newUser.save();
  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      isAdmin: newUser.isAdmin,
      username: newUser.username,
      level: newUser.level,
      score: newUser.score,
      token: generateToken(newUser._id),
    });
  } else {
    res.status(400);
    throw new Error("User Not Found");
  }
});

const verifyUser = asyncHandler(async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).send("User not found");
    }

    // Compare the entered password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send("Invalid password");
    } else {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        username: user.username,
        level: user.level,
        score: user.score,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    res.status(500).send("Error verifying user");
  }
});

const levelUp = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.level = req.body.level + 1 || user.level + 1;
    user.score = req.body.score * 2 || (1 + user.score) * 2;

    const updatedUser = await user.save();
    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      username: updatedUser.username,

      level: updatedUser.level,
      score: updatedUser.score,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

// Questions Controllers Start Here

const getQuestion = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { level } = req.user;
    const question = await Questions.findOne({ level });

    res.json({
      _id: question._id,
      name: question.question,
      username: question.answer,
    });
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

const checkQuestion = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  console.log(user);

  if (user) {
    const { answer } = req.body;
    const { level } = user;
    const question = await Questions.findOne({ level: level });

    if (!question) {
      res.status(404);
      throw new Error("Question not found");
    }

    const isAnswerCorrect = question.answer === answer;

    if (isAnswerCorrect) {
      user.level = req.body.level + 1 || user.level + 1;
      user.score = req.body.score * 2 || (1 + user.score) * 2;
    }
    const updatedUser = await user.save();

    const response = {
      _id: updatedUser ? updatedUser._id : user._id,
      username: updatedUser ? updatedUser.username : user.username,
      questionId: question._id,
      isAnswerCorrect: isAnswerCorrect ? true : false,
    };

    res.json(response);
  } else {
    res.status(404);
    throw new Error("User Not Found");
  }
});

const addQuestion = asyncHandler(async (req, res) => {
  const { level, question, answer } = req.body;
  const levelExists = await Questions.findOne({ level });

  const newQuestions = new Questions({ level, question, answer });

  if (levelExists) {
    res.status(400);
    throw new Error("Level Already Exists");
  }

  await newQuestions.save();
  if (newQuestions) {
    res.status(201).json({
      level: newQuestions.level,
      question: newQuestions.question,
      answer: newQuestions.answer,
    });
  } else {
    res.status(400);
    throw new Error("User Not Found");
  }
});

const leaderboard = asyncHandler(async (req, res) => {
  try {
    const users = await User.find().sort({ score: -1 });
    const formattedUsers = users.map((user) => ({
      name: user.username,
      score: user.score,
    }));
    res.json(formattedUsers);
  } catch {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = {
  createUser,
  verifyUser,
  getQuestion,
  addQuestion,
  checkQuestion,
  leaderboard,
  levelUp,
};
