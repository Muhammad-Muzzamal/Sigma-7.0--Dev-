const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    name: "Muzzamal",
    content: "I am Hard working boy Boy",
  },
  {
    name: "Ali",
    content: "Learning JavaScript today!",
  },
  {
    name: "Sara",
    content: "Frontend development is fun!",
  },
  {
    name: "Ahmed",
    content: "I just solved a DSA problem!",
  },
  {
    name: "Hina",
    content: "React is awesome ",
  },
  {
    name: "Bilal",
    content: "Working on a MERN project.",
  },
  {
    name: "Ayesha",
    content: "CSS is tricky but interesting!",
  },
  {
    name: "Zain",
    content: "Debugging code feels like detective work.",
  },
  {
    name: "Fatima",
    content: "I love solving algorithms ",
  },
  {
    name: "Hamza",
    content: "100 days of coding challenge started!",
  },
];

app.get("/", (req, res) => {
  res.send("Server is Working well");
});
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});
app.get("/posts/new", (req, res) => {
  res.render("newPostForm.ejs");
});
app.post("/posts", (req, res) => {
  posts.push(req.body);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`Listening to the post : ${port}`);
});
