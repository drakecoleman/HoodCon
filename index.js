let express = require("express");
let app = express();
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
let PORT = process.env.PORT || 5000;
app.use(express.static("public"));
app.get("/", (req, res) => {
  alert("Working");
  res.sendFile(__dirname + "/public/index.html");
});
app.post("/", function (req, res) {
  console.log(req.body.num1);
  res.send("Working");
});
app.listen(PORT, () => {
  console.log("Working");
});
