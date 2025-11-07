const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const path = require('path');
const app = express();
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
const PORT = 8000;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "complete",
  password: "101325",
});

app.get("/", (req, res) => {
  // querry to count all the user from teh user table
  let q = `SELECT COUNT(*) AS "total_users" FROM user`;
  try {
    connection.query(q, (err, result) => {
      if (err) {
        throw err;
      }

      res.render("homePage.ejs", { total_users: result[0]["total_users"] });
      //   res.json({
      //     message: "Sucessfull fetch data",
      //     total_users: result[0]["total_users"],
      //   });
    });
  } catch (err) {
    res.render("homePage.ejs", {
      error: err,
    });
  }
});

app.listen(PORT, () => {
  console.log(`App is listening on http://localhost:${PORT}`);
});

// function createRandomUser() {
//   return [faker.internet.username(), faker.string.numeric(6)];
// }

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "complete",
//   password: "101325",
// });

// let data = [];
// for (let i = 0; i < 100; i++) {
//   data[i] = createRandomUser();
// }
// console.log(data);

// let q = `INSERT INTO user(name, roll_no) VALUES ?`;

// try {
//   connection.query(q, [data], (err, result) => {
//     if (err) {
//       throw err;
//     }
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// app.listen(8000, () => {
//   console.log(`App is listen on http://localhost:8000`);
// });

// app.get("/user", (req, res) => {
//   let q = `SELECT * FROM user`;
//   try {
//     connection.query(q, (err, result) => {
//       if (err) {
//         throw err;
//       }
//       return res.json({
//         message: result,
//       });
//     });
//   } catch (err) {
//     console.log(err);
//   }
// });
