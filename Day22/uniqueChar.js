uniqueChar = (str) => {
  let ansStr = "";
  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j--) {
      if (str[i] == str[j]) {
        count++;
      }
    }
    if (count > 1) {
      ansStr += str[i];
    }
  }
  return ansStr;
};

console.log(uniqueChar('Hello World'));
