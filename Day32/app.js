let form = document.querySelector("form");
let name = document.querySelector("#name");
let password = document.querySelector("#password");
let result = document.querySelector("#result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(name.value);
  console.log(password.value);
  let resultName = document.createElement("h1");
  let resultPassword = document.createElement("h1");
  resultName.innerHTML = `Name : ${name.value}`;
  resultPassword.innerHTML = `Password : ${password.value}`;

  result.appendChild(resultName);
  result.appendChild(resultPassword);
});
