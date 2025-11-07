const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
app.use(express.json());

function createRandomUser() {
  return [faker.internet.username(), faker.string.numeric(6)];
}

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "complete",
  password: "101325",
});

let data = [];
for (let i = 0; i < 100; i++) {
  data[i] = createRandomUser();
}
console.log(data);

let q = `INSERT INTO user(name, roll_no) VALUES ?`;

try {
  connection.query(q, [data], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
  });
} catch (err) {
  console.log(err);
}

app.listen(8000, () => {
  console.log(`App is listen on http://localhost:8000`);
});

app.get("/user", (req, res) => {
  let q = `SELECT * FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) {
        throw err;
      }
      return res.json({
        message: result,
      });
    });
  } catch (err) {
    console.log(err);
  }
});
