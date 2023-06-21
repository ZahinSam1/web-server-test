const mongoose = require("mongoose");

const uri = "mongodb+srv://ZahinSam:Raiden17%21@studytest.aazmrxi.mongodb.net/?retryWrites=true&w=majority";

// this can be used in multiple cases
// can be localhhost or web server
// const uri = "mongodb://127.0.0.1:27017/test";
// const uri = "mongodb://localhost:27017/test";

// this function is used to connect to the database
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db_connection = mongoose.connection;

// Event listener for successful connection
db_connection.on("connected", () => {
  console.log("Connected successfully");
});

// Event listener for connection error
db_connection.on("error", (error) => {
  console.log("Connection error:", error);
});

// Event listener for disconnected state
db_connection.on("disconnected", () => {
  console.log("Disconnected from database");
});

module.exports = db_connection;
