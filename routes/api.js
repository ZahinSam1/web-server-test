const express = require("express");
const app = express();

app.use(express.json());

app.post("/", (req, res) => {
  const { name, email } = req.body;

  console.log(`Received request from ${name} with email ${email}`);

  res.send({
    message: "Success!",
  });
});

app.get("/", (req, res) => {
  res.send("the get api is working");
});

app.listen(3000, () => {
  console.log("App listening on port 3000");
});

module.exports = app;
