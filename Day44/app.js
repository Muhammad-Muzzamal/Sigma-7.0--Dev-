function greet(name) {
  console.log(`Hello ${name} !`);
}

function add(a, b) {
  return a + b;
}

greet("Muzzamal");
console.log(add(5, 10));

let studentInfo = [];

let name = document.querySelector("#name");
let age = document.querySelector("#age");
let major = document.querySelector("#major");
let btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  if (name.value && age.value && major.value) {
    let newStudent = {
      name: name.value,
      age: parseInt(age.value),
      major: major.value,
    };
    studentInfo.push(newStudent);
    console.log(studentInfo);

    // Clear input fields
    name.value = "";
    age.value = "";
    major.value = "";

    // ✅ Display new student on the page
    let studentDiv = document.createElement("div");
    studentDiv.innerHTML = `
      <h1>Name: ${newStudent.name}</h1>
      <h1>Age: ${newStudent.age}</h1>
      <h1>Major: ${newStudent.major}</h1>
    `;
    infoDiv.appendChild(studentDiv);
  } else {
    alert("Please fill all fields");
  }
});

let infoDiv = document.querySelector("#info");

studentInfo.forEach((student) => {
  let studentDiv = document.createElement("div");
  studentDiv.innerHTML = `
    <h1>Name: ${student.name}</h1>
    <h1>Age: ${student.age}</h1>
    <h1>Major: ${student.major}</h1>
  `;
  infoDiv.appendChild(studentDiv);
});

let btn1 = document.querySelector("#btn1");
let box = document.querySelector("#box");

btn1.addEventListener("click", () => {
  box.classList.toggle("move");
});
