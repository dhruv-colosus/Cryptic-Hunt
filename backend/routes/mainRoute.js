const express = require("express");
const router = express.Router();
const {
  createUser,
  verifyUser,
  levelUp,
  leaderboard,
  secretupdate,
} = require("../controllers/userController");
const protect = require("../middleware/protect");

router.route("/").post(createUser);
router.route("/login").post(verifyUser);
router.route("/leaderboard").get(leaderboard);
router.route("/levelup").post(protect, levelUp);
router.route("/secretupdate").get(protect, secretupdate);

module.exports = router;
