const express = require("express");
const router = express.Router();
const {
  createUser,
  verifyUser,
  levelUp,
  leaderboard,
} = require("../controllers/userController");
const protect = require("../middleware/protect");

router.route("/").post(createUser);
router.route("/login").post(verifyUser);
router.route("/leaderboard").get(leaderboard);
// router.route("/levelup").post(protect, levelUp);

module.exports = router;
