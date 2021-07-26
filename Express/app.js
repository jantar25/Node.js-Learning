const express = require("express");
const path = require("path");
const app = express();

app.use("./public", express.static(path.join(__dirname, "Exemple")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "Exemple", "index.html"));
});
app.get("/about", (req, res) => {
  res.send("Hello ABOUT Jantar's World");
});

app.get("/about/:name/:age", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params.name + " : " + req.params.age);
});
app.listen(5000);
