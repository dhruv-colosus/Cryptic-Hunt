const mongoose = require("mongoose");

// Define the User schema
const questionSchema = mongoose.Schema({
  level: {
    type: Number,
    required: true,
    unique: true,
  },
  question: {
    type: String,
    required: false,
  },
  answer: {
    type: String,
    required: false,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create the User model
const Questions = mongoose.model("Questions", questionSchema);

module.exports = Questions;
