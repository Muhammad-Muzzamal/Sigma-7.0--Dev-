import express from "express";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";
import { data } from "./data.js";
let app = express();
let PORT = 8000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

let registerData = [];

app.get("/", (req, res) => {
  let data = [
    {
      id: 1,
      name: "Muzzamal",
      age: 22,
    },
    {
      id: 2,
      name: "Ali",
      age: 23,
    },
  ];
  console.log(data);
  res.render("index.ejs", { data });
});
app.get("/data", (req, res) => {
  let data = {
    name: "Muzzamal",
  };
  res.send(data);
});
app.get("/dice", (req, res) => {
  let diceValue = Math.floor(Math.random() * 6) + 1;
  if (diceValue === 6) {
    diceValue = `You got 6! <br> <b>Congratulations! You win a role dice game.</b>`;
  } else {
    diceValue = `You got ${diceValue}. <br> <b>Sorry! You lose the role dice game. Try again.</b>`;
  }
  res.render("roleDice.ejs", { diceValue });
});
app.get("/instagram/:name/:id", (req, res) => {
  let { name, id } = req.params;
  let follower = ["Ali Murtaza", "Ali Ahmad", "Imran Ali"];
  res.render("instagram.ejs", { name, id, follower });
});
app.get("/home", (req, res) => {
  res.render("home.ejs");
});
app.get("/about", (req, res) => {
  res.render("about.ejs");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});
app.get("/register", (req, res) => {
  res.render("register", { registerData });
});
app.post("/register", (req, res) => {
  let data = req.body;
  registerData.push(data);
  res.redirect("/register");
});

app.get("/listings", (req, res) => {
  res.render("listings", { data });
});
