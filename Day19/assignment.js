let arr = [1, 2, 3, 4, 5, 6, 7];

let n = 5;

function getFirst(num, array) {
  console.log(array.slice(0, num));
}
function getLast(num, array) {
  console.log(array.slice(-num));
}
function isBlank(string) {
  if (string.length == 0) {
    console.log("String is Blank");
  } else {
    console.log("String is not Blank");
  }
}
function isLowerCase(character) {
  if (character >= "a" && character <= "z") {
    console.log("Character is Lover Case");
    return;
  } else {
    console.log("Character Is Upper case");
    return;
  }
}

// getLast(4, arr);
// isBlank("Hello");
isLowerCase('A');
