const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const path = require("path");
const port = 3001;
const cors = require("cors");

const { connectToMongoDB } = require("./db");
require("dotenv").config();

app.use(cors());

const mainRoute = require("./routes/mainRoute");
const questionRoute = require("./routes/questionRoute");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

connectToMongoDB();

app.use("/api/users", mainRoute);
app.use("/api/questions", questionRoute);

app.get("/", (req, res) => {
  res.send("Restrcited USE !!!!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
