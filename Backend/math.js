const sum = (a, b) => a + b;
const prod = (a, b) => a * b;
const subt = (a, b) => a - b;

// first way to export these content for another file
module.exports = {
  sum: sum,
  prod: prod,
  subt: subt,
};
// 2nd way
/*const obj = {
module.exports = obj;
*/
// 3rd way
// ---------------
/*
exports.sum = (a, b) => {
  return a + b;
exports = 6; // (wrong syntax)