const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  addresses: [{ _id: false, location: String, city: String }],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
