const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

console.log(`Brand : ${car.brand}`);
console.log(`Model : ${car.model}`);
console.log(`Year : ${car.year}`);

car.getDetail = () => {
  console.log(`This car is a ${car.brand} ${car.model} from ${car.year}`);
};

console.log(car.getDetail());

// Question 3

const person = {
  name: "Ali",
  age: 21,
  adress: {
    city: "Sheikhupura",
    country: "Pakistan",
  },
};

for (let p in car) {
  console.log(`${p} : ${car[p]}`);
}

// Question 4

const student = {
  name: "Muzzamal",
  rollno: 110837,
  class: "BS IT (4th Sem)",
  marks: 3.15,
};

// for(let key in student) {
//     console.log(`${key} : ${student[key]}`);
// }

console.log(`name : ${student["name"]}`);
console.log(`Name : ${student.name}`);

student.getSummary = function () {
  return `Student ${student.name} (Roll No: ${student.rollno}) of class ${student.class} has scored ${student.marks} marks`;
};

console.log(student.getSummary());

// Question

const laptop = {
  brand: "Hp",
  model: "pivolion",
  specs: {
    ram: 16,
    storage: 500,
    processor: "cor2do",
  },
};

console.log(laptop.specs.ram);
console.log(laptop.specs.storage);
console.log(laptop.specs.processor);

for (let key in laptop) {
  if (typeof laptop[key] === "object") {
    for (let subkey in laptop[key]) {
      console.log(`${subkey} : ${laptop[key][subkey]}`);
    }
  } else {
    console.log(`${key} : ${laptop[key]}`);
  }
}
