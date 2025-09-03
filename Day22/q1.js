printArray = (array, num) => {
  let ans = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > num) {
      ans.push(array[i]);
    }
  }
  return ans;
};

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(printArray(array, 6));