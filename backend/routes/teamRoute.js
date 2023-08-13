const express = require("express");
const router = express.Router();
const protect = require("../middleware/protect");
const { createNewTeam, updateTeam, deleteTeam, getTeam, addMember, kickMember } = require("../controllers/teamController");

router.route("/")
    .get(getTeam)
    .post(protect, createNewTeam)
    .put(protect, updateTeam)
    .delete(protect, deleteTeam);

router.route("/member")
    .post(protect, addMember)
    .delete(protect, kickMember);

module.exports = router;
