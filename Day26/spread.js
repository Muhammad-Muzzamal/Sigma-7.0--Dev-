let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(...array);

console.log(Math.min(...array));

let name = "Muzzamal";
console.log(...name);


let newArr = [...array];
newArr.push(11);
console.log(...newArr);


let newName = [...name];
console.log(...newName);

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10, 12, 14, 16];

let combineArr = [...odd, ...even];
console.log(...combineArr);


let obj = {
    name : "Muzzamal",
    roll_no : 110837
}

console.log(obj);
obj = {...obj, id : 1};
console.log(obj);

let obj1 = {...array}
console.log(obj1);
let obj3 = {...name};
console.log(obj3);
