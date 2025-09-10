const express = require("express");
const app = express();
const path = require("path");

const port = 3000;

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/ig/:username", (req, res) => {
  let { username } = req.params;
  let followers = ["Ahmad", "Raja", "Muhammad", "Ali Murtaza", "Kamal"];
  res.render("instagram.ejs", { username, followers });
});

app.get("/rolldice", (req, res) => {
  let diceValue = Math.floor(Math.random() * (6 + 1));
  console.log(diceValue);
  res.render("rolldice.ejs", { diceValue });
});

app.listen(port, () => {
  console.log(`Litening on the port ${port}`);
});
