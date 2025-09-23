function savetoDb(data) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  return new Promise((resolve, reject) => {
    if (internetSpeed > 4) {
      resolve("Success : data was saved");
    } else {
      reject("falure : week connection");
    }
  });
}

savetoDb("Muzzamal")
  .then((result) => {
    console.log(`result : ${result}`);
    console.log("Data1 Saved.");
    return savetoDb("Ashraf");
  })
  .then((result) => {
    console.log(`result : ${result}`);
    console.log("Data2 Saved.");
    return savetoDb("Ali Muhammad");
  })
  .then((result) => {
    console.log(`result : ${result}`);
    console.log("Data3 Saved.");
  })
  .catch((error) => {
    console.log(`error : ${error}`);
    console.log("Falure : Data was rejected");
  });
