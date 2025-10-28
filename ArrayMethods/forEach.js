const array = [10, 20, 30, 40, 50];
console.log(array);

let sum = 0;

array.forEach((number, index, arr) => {
  return (sum += number);
});

console.log(sum);

/*

*For each has a callback in it parameter and its internal function perform a task.
it accept the number which indicate each value on each index
second parameter indicate the index of each number 
and the third parameter returns the whole array.

but the main thing is that number is mendatory next two are optional means it can be ignore


*/
