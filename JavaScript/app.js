let body = document.querySelector("body");
let button = document.querySelector("button");
let root = document.querySelector("#root");
let count = 0;

button.addEventListener("click", () => {
  console.log("Button was Clicked");
  body.style.background = "red";
  let content = document.createElement("h1");
  content.innerText = ` ${count++} : Helo World`;
  content.style.color = "pink";
  root.appendChild(content);
});
