const { MongoClient } = require("mongodb");

// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "cryptichunt";

// Create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// Connect to the MongoDB server
async function connectToMongoDB() {
  try {
    // Connect to the client
    await client.connect();
    console.log("Connected to the MongoDB server");

    // Select the database
    const db = client.db(dbName);

    // Perform database operations
    // ...
  } catch (error) {
    console.error("Error connecting to the MongoDB server:", error);
  }
}

module.exports = { connectToMongoDB };
