const express = require("express");
const router = express.Router();
const db_connection = require("../database/connection");
const collection = db_connection.collection("login");

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await collection.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    res.json({ message: "Login successful", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred" });
  }
});

router.get("/", (req, res) => {
  res.send("working login API");
});

module.exports = router;
