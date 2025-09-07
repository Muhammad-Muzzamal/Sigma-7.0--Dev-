let button = document.querySelector("#btn");
let box = document.querySelector("#box");
let input = document.querySelector("#input");
let counter = document.querySelector("#counter");
let result = document.querySelector("#result");

let countVal = 0;

function random(val) {
    return Math.random() * (val + 1);
}

let string = "";


button.addEventListener("click", () => {
    box.style.backgroundColor = `rgb(${random(255)},${random(255)}, ${random(255)})`
    counter.innerText = `${++countVal}`;
});

box.addEventListener("mouseenter", () => {
    alert("You hover over the box");
})

input.addEventListener("keydown", (e) => {
    string += e.key;
    result.innerText = "You press the" + e.key;

})