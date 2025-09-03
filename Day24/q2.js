const arrayAverage = (array) => {
  let arraySum = 0;
  for (let i = 0; i < array.length; i++) {
    arraySum += array[i];
  }
  return arraySum / array.length;
};

let array = [1, 2, 3, 4, 5, 6];
console.log(arrayAverage(array));