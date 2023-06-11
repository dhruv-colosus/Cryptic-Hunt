const express = require("express");
const router = express.Router();
const {
  createUser,
  verifyUser,
  levelUp,
} = require("../controllers/userController");
const protect = require("../middleware/protect");

router.route("/").post(createUser);
router.route("/login").post(verifyUser);
router.route("/levelup").post(protect, levelUp);

module.exports = router;
