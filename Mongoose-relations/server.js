const connectDb = require("./lib/mongodb.js");
const express = require("express");
const User = require("./models/user.js");
const app = express();

const addUser = async () => {
  let user1 = new User({
    name: "Muzzamal",
    addresses: [{ location: "Pakistan", city: "Farooq Abad" }],
  });
  user1.addresses.push({ location: "Pakistan", city: "Farooq Abad" });
  let result = await user1.save();

  console.log(result);
};


// addUser();

app.listen(3000, () => {
  console.log(`Server is runngin on http://localhost:3000`);
  connectDb()
    .then(() => {
      console.log("Data base is connected successfully");
    })
    .catch((error) => {
      console.log("Error in connecting Database : ", error);
    });
});
