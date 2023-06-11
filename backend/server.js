const express = require("express");
const app = express();
const path = require("path");
const port = 3000;
const cors = require("cors");

const { connectToMongoDB } = require("./db");

app.use(cors());

const exampleRoute = require("./routes/exampleRoute");

connectToMongoDB();

app.use("/", exampleRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
