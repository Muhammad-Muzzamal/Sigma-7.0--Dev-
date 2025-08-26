let students = [
  {
    name: "Muzzamal",
    rollno: 110837,
    marks: 3.15,
  },
  {
    name: "Kashif",
    rollno: 110855,
    marks: 3.01,
  },
  {
    name: "Hassan",
    rollno: 110800,
    marks: 4.0,
  },
];

console.log(students);
students[2].name = "Ali Haider";
console.log(students);

for (let i = 0; i < students.length; i++) {
    console.log(`${i}`);
    for(let key in students[i]) {
        console.log(`${key} : ${students[i][key]}`);
    }
}

students[3] = {
    name : 'Imran Ali',
    rollno : 110855,
    marks : 3.25,
}

console.log(students[3]);

delete students[3];

console.log(Math.PI);
console.log(Math.E);


console.log(Math.abs(12));
console.log(Math.pow(2, 3));

console.log(Math.floor(4.66));

console.log(Math.ceil(4.01));

console.log(Math.random());



