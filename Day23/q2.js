function concat(array) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result += array[i]; 
  }
  return result;
}

let array = ['Hello', 'Muzzamal'];
console.log(concat(array));
