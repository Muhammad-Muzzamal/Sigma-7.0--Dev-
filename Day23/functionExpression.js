let hello = function () {
  console.log("Hello World");
};
let sayHello = function (name) {
  console.log(`Hell ${name}`);
};

hello();
sayHello("Muzzamal");

// Higher Order Function
// 1. Take one or multiple functions as an argument
// 2. Retrns a function

let greet = function () {
  console.log("Hello");
};

function multipleGreet(func, n) {
  for (let i = 0; i < n; i++) {
    greet();
  }
}

multipleGreet(greet, 4);
