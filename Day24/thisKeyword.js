let student = {
  name: "Muzzamal",
  rollNo: 110837,
  math: 90,
  english: 95,
  urdu: 80,
  getAverage() {
    let avg = (this.math + this.english + this.urdu) / 3;
    // console.log(avg);
    return avg;
  },
};

console.log(student.getAverage());
console.log();
