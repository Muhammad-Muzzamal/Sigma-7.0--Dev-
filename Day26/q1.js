let array = [100, 200];

console.log(
  array.every((e) => {
    return e % 10 === 0 && e % 10 === 0;
  })
);

let min = array.reduce((min, el) => {
  if (min < el) {
    return min;
  } else {
    return el;
  }
});

console.log(min);
