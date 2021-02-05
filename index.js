let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
let PORT = process.env.PORT || 5000;
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "public/index.html");
});
app.post("/", function (req, res) {
  let num1 = req.body.num1;
  let num2 = req.body.num2;
  res.send(num1 + num2);
});
app.listen(PORT, () => {
  console.log("Working");
});
