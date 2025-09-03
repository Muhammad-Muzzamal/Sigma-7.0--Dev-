console.log("Hello Muzzamal");

let id = setInterval(() => {
  console.log("Hello Coder");
}, 1000);

setTimeout(() => {
  clearInterval(id);
}, 4000);
