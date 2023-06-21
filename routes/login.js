const express = require("express");
const router = express.Router();
const db_connection = require("../database/connection");
const collection = db_connection.collection("login");

router.post("/", async (req, res) => {
  const { loginUsername, password } = req.body;
  // console.log("The userName and pass", loginUsername, password);
  try {
    const user = await collection.findOne({ username: loginUsername });

    if (!user) {
      // console.log("Couldn't find the username");
      return res.send({ message: "Invalid username or password" });
    }

    if (user.password !== password) {
      // console.log("Password is incorrect");
      return res.send({ message: "Invalid username or password" });
    }
    // console.log("Logged in successfully");
    res.send({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    res.send({ message: "An error occurred" });
  }
});

router.get("/", (req, res) => {
  res.send("working login API");
});

module.exports = router;
