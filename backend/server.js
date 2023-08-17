const express = require("express");
const bodyParser = require("body-parser");
const rateLimit = require("express-rate-limit");
const https = require("https");

const app = express();

const path = require("path");
const port = 3001;
const cors = require("cors");

const { connectToMongoDB } = require("./db");
require("dotenv").config();

const limiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 300, // Limit each IP to 300 requests per windowMs
});

app.use(limiter);

app.use(
  cors({
    origin: "*",
  })
);

const mainRoute = require("./routes/mainRoute");
const questionRoute = require("./routes/questionRoute");
const teamRoute = require("./routes/teamRoute");
const Team = require("./models/teamModel");
const User = require("./models/userModel");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectToMongoDB();

app.use("/api/users", mainRoute);
app.use("/api/questions", questionRoute);
app.use("/api/team", teamRoute);

app.get("/", (req, res) => {
  res.send("Restrcited USE !!!!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
