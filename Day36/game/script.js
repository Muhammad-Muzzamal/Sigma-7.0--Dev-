let gameSeq = [];
let userSeq = [];
let colors = ["yellow", "red", "green", "blue"];

let started = false;
let level = 0;
let levelDisplay = document.querySelector("#level-display");

document.addEventListener("keypress", () => {
  if (started === false) {
    console.log("Game Started");
    started = true;
    levelUp();
  }
});
const btnFlash = (btn) => {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 250);
};
const userFlash = (btn) => {
  btn.classList.add("pink");
  setTimeout(() => {
    btn.classList.remove("pink");
  }, 250);
};
const levelUp = () => {
  level++;
  levelDisplay.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * (3 + 1));
  let randColor = colors[randIdx];
  let randButton = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFlash(randButton);
};

function btnPress() {
  let btn = this;
  userFlash(btn)
  console.log(btn);
};

let allBtn = document.querySelectorAll(".body-box");
for (btn of allBtn) {
  btn.addEventListener("click", btnPress);
}
