let express = require("express");
let app = express();
let PORT = process.env.PORT || 5000;
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.sendFile(__dirname + "public/index.html");
});
app.listen(PORT, () => console.log("Working"));
