const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.use((req, res) => {
//   console.log("Request Received");
//   let code = "Hello World";
//   res.send(code);
// });

app.get("/", (req, res) => {
  console.log("Slash Request Received");
  res.send({
    name: "Muzzamal",
    rollNo: 10837,
  });
});

app.get("/fruits", (req, res) => {
  console.log("Frits Requist Recieved");
  res.send([
    {
      name: "mango",
      color: "yellow",
    },
    {
      name: "Apple",
      color: "red",
    },
  ]);
});

app.get("/student", (req, res) => {
  console.log("Student");
});
app.get("/:name", (req, res) => {
  let name = req.params.name;
  let html = `<h1>Hello ${name}</h1>`;
  res.send(html);
});
