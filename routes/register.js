const express = require("express");
const db_connection = require("../database/connection");
const collection = db_connection.collection("login");
const router = express.Router();
// Handle registration request
router.post("/", async(req, res) => {

  const { username, password, email } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await collection.findOne({ username });

    if (existingUser) {
      return res.status(409).json({ message: "Username already exists" });
    }

    // Create a new user document
    const newUser = {
      username,
      password,
      email,
    };

    await collection.insertOne(newUser);

    res.json({ message: "Registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

router.get("/", (req, res) => {
  res.send("Working register API");
});

module.exports = router;
