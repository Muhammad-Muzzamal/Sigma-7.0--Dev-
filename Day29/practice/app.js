let button = document.querySelector("#btn");
let container = document.querySelector(".container");
let clearButton = document.querySelector("#clearBtn");
let bgColor = document.querySelector("#bgColor");
let body = document.querySelector("body");

let random = (val) => {
  return Math.random() * (val + 1);
};

button.addEventListener("click", () => {
  let para = document.createElement("p");
  para.innerText = "You click the button!";
  container.appendChild(para);
});

clearButton.addEventListener("click", () => {
  container.innerHTML = "";
});

bgColor.addEventListener("click", () => {
  body.style.backgroundColor = `rgb(${random(255)}, ${random(255)}, ${random(
    255
  )})`;

});
