let inputBox = document.querySelector("#input");
let buttons = document.querySelectorAll("button");

let string = "";

let array = Array.from(buttons);
array.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
    }
  });
});
