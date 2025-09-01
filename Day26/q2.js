let array = [1, 2, 3, 4, 5, 6];

let square = array.map((el) => {
  return el * el;
});

let sum = array.reduce((acc, curr) => {
  return acc + curr;
});

let average = sum / array.length;

console.log(average);
