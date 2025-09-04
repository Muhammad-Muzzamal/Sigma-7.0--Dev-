let image = document.querySelector("#image");

image.style.height = "400px";

let li = document.querySelectorAll(".box li");

for (let i = 0; i < li.length; i++) {
    li[i].classList.add('inline-block')
    li[i].classList.add('align-top')
}
let button = document.querySelector("#btn");
button.classList.add("h-100");
button.classList.add("bg-red-700");
button.classList.add("animation");
