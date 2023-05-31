var express = require("express");

var router = express.Router();

let data;

router.post("/", (req, res) => {
  const { name, email } = req.body;

  data = [{ name: name, email: email }];
  console.log(data);
});

router.get("/", (req, res) => {
  data = [{ name: "name", email: "testemail@g.com" }]
  // res.json(data);
  res.send(data);

  // console.log(res.data);
});


module.exports = router;
