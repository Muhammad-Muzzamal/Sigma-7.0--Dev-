const express = require("express");
const app = express();

app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString();
  console.log(req.method, req.time);
  next();
});
app.use("/random", (req, res, next) => {
  console.log("I am middleware that is only for ramdom route");
  next();
});
// app.use("/api", (req, res, next) => {
//   let { token } = req.query;
//   if (token === "giveaccess") {
//     next();
//   }
//   res.send("ACCESS DENIED");
// });

let checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  res.send("ACCESS DENIED");
};
app.get("/api", checkToken, (req, res) => {
  res.send("Data");
});

app.get("/", (req, res) => {
  res.send("I am root");
});

app.get("/random", (req, res) => {
  res.send("I am ramdom route");
});
// 404 page
app.use((req, res) => {
  res.status(404).send("Page is not found");
});

app.listen(8080, () => {
  console.log(`App is listening on teh port http://localhost:${8080}`);
});
