const db = require("./connection");

if (!db) throw new Error();
console.log("db connected");

const gridFS = require("gridfs");

const folderPath = "../Test";

const files = fs.readDirSync(folderPath);

files.forEach((file) => {
  try {
    const filePath = path.join(folderPath, file);
    gridFS.upload(filePath, file);
    console.log("files uploaded!!");
  } catch (err) {
    console.error(err);
  }
});
