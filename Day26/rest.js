function sum(a, b, c, d) {
  console.log(arguments);
}

sum(1, 2, 3, 5);

const min = (msg, ...args) => {
  console.log(msg);
  return args.reduce((min, el) => {
    if (min > el) {
      return el;
    } else {
      return min;
    }
  });
};
console.log(min(11, 1, 2, 3, 4, 5, 6, 7));
console.log(min("Hello World", 1, 2, 3, 4, 5, 6, 7));

