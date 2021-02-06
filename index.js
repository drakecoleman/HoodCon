const express = require("express");
const app = express();
const sendMail = require("./form");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 5000;
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "public/index.html");
});
app.post("/", function (req, res) {
  let email = req.body.email;
  let body = req.body.body;
  let subject = req.body.subject;
  res.sendMail(email, subject, body);
});
app.listen(PORT, () => {
  console.log("Working");
});
