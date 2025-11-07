const math = require("./math");
const fruits = require("./Fruits");
// if i want a single file from anther directory e.g Controller directory
const userController = require("./Controller/userController.js");

// for mltiple
const { userController, systeController } = require("./Controller");

console.log(userController);

// console.log(fruits);
