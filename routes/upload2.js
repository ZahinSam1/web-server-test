const express = require("express");
const fileUploader = require("express-fileupload");
const cacheController = require("express-cache-controller");
const db_connection = require("../database/connection");
const filesPayloadExists = require("../middleware/filesPayloadExists");
const fileExtLimiter = require("../middleware/fileExtLimiter");
const fileSizeLimiter = require("../middleware/fileSizeLimiter");
const ObjectId = require("mongodb").ObjectId;

const router = express.Router();

const collection = db_connection.collection("test2");

router.use(cacheController({ maxAge: 60 }));

// Handle file upload
router.post(
  "/",
  fileUploader({ createParentPath: true }),
  // fileSizeLimiter,
  // filesPayloadExists,
  async (req, res) => {
    var file = req.files.file;
    if (!file) {
      // console.log(file);
      return res.status(400).json({ message: "No file uploaded" });
    }

    try {
      await collection.insertOne({ file: file });

      res.json({ message: "File uploaded successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "An error occurred" });
    }
  }
);

router.get("/data", async (req, res) => {
  try {
    res.set("Cache-Control", "public, max-age=60");
    const data = await collection.find().toArray();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving data" });
  }
});

router.delete("/delete/:id", async (req, res, next) => {
  const fileID = req.params.id;

  try {
    const file = await collection.findOne({ _id: new ObjectId(fileID) });
    if (!file) {
      return res.status(404).json({ message: "File Does not exist" });
    }

    await collection.deleteOne({ _id: new ObjectId(fileID) });
    res.json({ message: "File deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ message: "File Already deleted" });
  }
});

module.exports = router;