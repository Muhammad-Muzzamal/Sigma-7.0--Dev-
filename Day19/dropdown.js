let button = document.querySelector(".button");
let content = document.querySelector(".content");

button.addEventListener("click", () => {
  if (content.style.display == "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
});

window.addEventListener("click", (e) => {
  if (!button.contains(e.target) && !content.contains(e.target)) {
    content.style.display = "none";
  }
});
