function print() {
  console.log("button was clicked");
}

let button = document.querySelector("#btn");
button.addEventListener("click", () => {
    console.log("Special button Clicked");
});


let hover = document.querySelector('#hover');
hover.addEventListener('mouseenter', ()=> {
    console.log("I am hover Button");
})