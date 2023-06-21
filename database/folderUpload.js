const express = require("express");
const multer = require("multer");

const router = express.Router();
// const upload = multer({ dest: "uploads/" });

router.post("/", (req, res) => {
  // Access the uploaded files through req.files
  // Handle the files as needed (e.g., save to database, process, etc.)

  // Return a response indicating successful upload
  res.json({ message: "Files uploaded successfully" });
});

router.get("/", (req, res) => {
  res.send("The upload API working");
});
module.exports = router;
