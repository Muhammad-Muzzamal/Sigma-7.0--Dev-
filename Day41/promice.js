function greet(name, callback) {
  console.log(`Hello ${name}`);
  callback();
}

greet("Muzzamal", () => {
  console.log("Hello Boss");
});

setTimeout(() => {
  console.log(`Step 1 Completed`);
  setTimeout(() => {
    console.log(`Step 2 Complete`);
    setTimeout(() => {
      console.log("Step 3 Complete");
    }, 2000);
  }, 2000);
}, 2000);

function step(msg) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
    }, 1000);
  });
}

function checkNumber(num) {
  return new Promise((resolve, reject) => {
    if (num % 2 == 0) {
      resolve(`Even Number ${num}`);
    } else {
      reject(`Odd Number is Not Allowed ${num}`);
    }
  });
}

checkNumber(11)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
