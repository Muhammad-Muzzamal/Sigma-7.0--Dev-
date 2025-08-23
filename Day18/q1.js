let month = ['Januarary', 'july', 'march', 'august'];
month.shift();
month.shift();
console.log(month);
month.unshift('june');
month.unshift('july');
console.log(month);


console.log(month.includes('july'));


console.log(month.reverse());
console.log(month);


let newArr = month.concat(month.reverse());
console.log(newArr);