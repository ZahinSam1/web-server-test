const express = require("express");
const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");
const mongoose = require("mongoose");

const router = express.Router();
const conn = require("../database/connection");

// Create a Mongoose model for the file schema
// const File = mongoose.model("File", {
//   name: String,
//   desc: String,
//   file: {
//     data: Buffer,
//     contentType: String,
//   },
// });

// Create GridFS storage engine
const storage = new GridFsStorage({
  db: conn,
  file: (req, file) => {
    return {
      filename: file.originalname,
      bucketName: "test2", // Specify the name of your MongoDB collection
    };
  },
});

const upload = multer({ storage });

router.post("/", upload.single("file"), (req, res) => {
  res.json({ message: "File uploaded successfully" });
});

router.get("/", (req, res) => {
  res.send("Working API");
});

module.exports = router;
