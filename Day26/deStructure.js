let names = ["Muzzamal", "Imran", "Kamal", "Faisal", "Sharjeel"];

// let winner = names[0];
// let runnerUp = names[1];

let [winner, runnerUp, ...others] = names;

console.log(winner);
console.log(runnerUp);

console.log(others);

let student = {
  name: "Muzzamal",
  roll_no: 110837,
  dicipline: "BS IT",
  semester: 5,
  age: 20,
};

let { name, roll_no } = student; // it search key in the object same as variable 
console.log(`${name}\n${roll_no}`);

let {Name, RollNO} = student; // It shows an error because there is no valiable of Nama and RollNo in student object 

// If we want to use another name of valriable wee can use following syntax

let {name: StudentName, roll_no: StudentRollNo} = student;
console.log(StudentName);
console.log(StudentRollNo);
