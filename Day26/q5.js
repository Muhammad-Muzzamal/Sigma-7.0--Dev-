let doubleAndReturnArgs = (arr, ...agrs) => {
  return (newArr = [...arr, ...agrs.map((e) => e * 2)]);
};

console.log(doubleAndReturnArgs([1, 2, 4, 5, 6], 4, 5, 6));
