const mongoose = require("mongoose");

// const uri = "mongodb+srv://ZahinSam:Raiden17%21@studytest.aazmrxi.mongodb.net/?retryWrites=true&w=majority";

// this can be used in multiple cases
// can be localhhost or web server
const uri = "mongodb://127.0.0.1:27017/test";

// this function is used to connect to the database
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected successfully to atlas");
    // sendDoc();
  } catch (error) {
    console.log(Error);
  }
}

// this function is used to send data to the database
async function sendDoc() {
  // mongodbb takes document or JSON format of the data
  const doc = {
    name: "shonila",
    email: "shonila2@gmail.com",
  };

  // returns the connection to the server
  // and .connection is not a function
  const db = await mongoose.connection;
  // choosing the collection
  const collection = db.collection("test2");

  await collection.insertOne(doc);
  console.log("1 Doc inserted successfully");
}

// this function is used for executing the send command
function send() {
  connect().then(sendDoc);
}

module.exports = send;
