let container = document.querySelector("#container");

let p = document.createElement("p");
p.innerText = "Hey! I'm red!";
p.style.color = "red";
container.appendChild(p);

let h3 = document.createElement("h3");
h3.innerText = "I'am a blue h3!";
h3.style.color = "blue";
container.appendChild(h3);

let div = document.createElement("div");
div.style.borderWidth = "2px";
div.style.borderColor = "black";
div.style.borderStyle = "solid";
container.appendChild(div);

let h1 = document.createElement("h1");
h1.innerText = "I am inside Div";
div.insertAdjacentElement("afterbegin", h1);

let p2 = document.createElement("p");
p2.innerText = "ME TOO!";
div.insertAdjacentElement("beforeend", p2);
