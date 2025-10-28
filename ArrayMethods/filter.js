console.log("Filter Method");

/*

Filter method return a new array from the array on whch filter is applied on aspecific condition

*/

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(array);

let newArr = array.filter((number) => number % 2 == 0);
console.log(newArr);
console.log(typeof array);

// we can make our customize array function whicj accept callback
// callback return true or false

array.filtering  = function(callback) {
    let result = [];
    for(let el of this) {
        if(callback(el)) {
            result.push(el);
        }
    }
}

let ar = array.filtering((el) => el % 2 === 0);
console.log(ar);


let x = array.map((el) => el * 2);
console.log( "x : ", array);

// If we wan to add custom array method for all array(

Array.prototype.filtering = function (callback) {
    let result = []
    for(let el of this) {
        if(callback(el)) {
            result.push(el);
        }
    }
    return result;
}

let array2 = [1, 2, 3, 4, 5];
let result = array2.filtering(el=> el%2===0 );
console.log(result);
