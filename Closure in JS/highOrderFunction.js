// function hello(name) {
//     console.log(`Hello ${name}`);
// }

// function userInput(callback, name) {
//     return hello(name);
// }
// userInput(hello, "Muzzamal");


function double(num) {
    return function execute(value) {
        return num * value;
    }
}

let n = double(3); // it return reference of execute function
console.log(n);
console.log(n(3));


// it also look lke this
let m = double(20)(10);
console.log(m);