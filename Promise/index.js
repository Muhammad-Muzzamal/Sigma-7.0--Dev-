console.log("Program Started");

// let data = fetch("https://api.github.com/users");

// let data2 = data.then((res) => {
//   return res.json();
// });

// data2.then((res)=> console.log(res));

// fetch("https://api.github.com/users")
// .then((res) => res.json())
// .then(data => console.log(data));


let user ={
    name : "Muzzamal",
    age : 20,
    role : undefined,
}

let jsonFormat = JSON.stringify(user);
console.log(jsonFormat);
console.log(typeof jsonFormat); // string
// Json ak asa format hoa=ta ha jo har language ko samaj a jata ha is lya is main unddefine ko add nai kiya jata 
// stringify sirf data ko string main convert karta ha


// ager hmary pass json format main data ho to usy wapis object main convert karna ho to hum JSON.parse ka use kartay hain
let obj = JSON.parse(jsonFormat);
console.log(obj);

console.log("Program Ended");
