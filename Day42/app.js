async function greet() {
  return "Hello";
}

let name = async (name) => {
  if (name === "Muzzamal") {
    throw "Name is noت Muzzamal";
  }
  return name;
};

// greet()
//   .then((result) => {
//     console.log("Promise Fullfilled");
//     console.log("result is : ", result);
//   })
//   .catch((e) => {
//     console.log("error is : ", e);
//   });

// name("Muzzamal")
//   .then((result) => {
//     console.log("Promise resolved");
//     console.log("Name is : ", result);
//   })
//   .catch((e) => {
//     console.log("Error : ", e);
//   });

function number() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log("Number : ", num);
      resolve(num);
    }, 2000);
  });
}

async function getNumber() {
  await number();
  await number();
  await number();
}

let h1 = document.querySelector("h1");

randomColor = () => {
  let red = Math.floor(Math.random() * 255) + 1;
  let green = Math.floor(Math.random() * 255) + 1;
  let blue = Math.floor(Math.random() * 255) + 1;
  h1.style.color = `rgb(${red}, ${green}, ${blue})`;
};

function changeColor(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      if (num > 4) {
        reject("Error Rejected");
      }
      randomColor();
      console.log(`Color Changed`);
      resolve("color changed");
    }, delay);
  });
}

async function demo() {
  try {
    await changeColor(1000);
    await changeColor(1000);
    await changeColor(1000);
    await changeColor(1000);
  } catch (err) {
    console.log("Error : ", err);
  }
  
}
