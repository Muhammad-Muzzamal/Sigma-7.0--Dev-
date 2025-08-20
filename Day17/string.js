let str1 = "HellO World";
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());

let str2 = "  n        Hello   ";
console.log(
  `trim() function remove white spaces from he sides not inside of words\n 
  ${str2.trim()}`
);

let str3 = "IloveCoding";
console.log(str3.indexOf(""));

// Method chaining

console.log(str2.trim().toUpperCase());
console.log(str1.toUpperCase().indexOf("W"));


// Slice
// It returns the part of the orgnal string 

let str4 = 'ILovePakistan';
console.log(str4.slice(1)); // startind index = 1, ending index = length
console.log(str4.slice(1, 5));
console.log(str4.slice(-1)); // reverve index strart fro the last of the string 


// Replace Method



