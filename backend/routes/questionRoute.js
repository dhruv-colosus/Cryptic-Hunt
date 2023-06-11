const express = require("express");
const router = express.Router();
const {} = require("../controllers/userController");
const protect = require("../middleware/protect");

const {
  getQuestion,
  addQuestion,
  checkQuestion,
} = require("../controllers/userController");

router.route("/").get(protect, getQuestion);
router.route("/add").post(addQuestion);
router.route("/check").post(protect, checkQuestion);

module.exports = router;
