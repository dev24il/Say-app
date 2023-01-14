const express = require("express");
const bodyParser = require("body-parser");
const say = require("say");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const text = req.body.text;

  say.speak(text, "Good News", 1.0, (err) => {
    if (err) {
      return console.error(err);
    }

    console.log("Text has been spoken.");
  });
});

app.listen(3000, function (req, res) {
  console.log("Server started on port 3000!");
});
