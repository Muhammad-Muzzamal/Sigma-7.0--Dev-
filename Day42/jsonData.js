let jsonResp =
  '{"activity":"Make a scrapbook with pictures of your favorite memories","availability":0.1,"type":"diy","participants":1,"price":0.1,"accessibility":"Few to no challenges","duration":"hours","kidFriendly":true,"link":"","key":"5554174"}';

let correctResp = JSON.parse(jsonResp);
console.log(correctResp);

let student = {
  name: "Muzzamal",
  cgpa: 3.34,
};

// Convert object into json format
let jsonStudent = JSON.stringify(student);
console.log(jsonStudent);