function savetoDb(data = "data", success, failure) {
  let internetSpeed = Math.floor(Math.random() * 10) + 1;
  if (internetSpeed > 4) {
    success();
  } else {
    failure();
  }
}

savetoDb(
  "Muzzamal",
  () => {
    console.log(`Success : Your data was saved`);
    savetoDb(
      "Ashraf",
      () => {
        console.log("success2 : data saved");
      },
      () => {
        console.log("falure2 : data not saved due to weak connection");
      }
    );
  },
  () => {
    console.log(` falure : weak connection, data was not saved`);
  }
);
