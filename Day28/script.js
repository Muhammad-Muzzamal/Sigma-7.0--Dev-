// let image = document.querySelector("#image");
// let li = document.querySelectorAll(".box li");
// let button = document.querySelector("#btn");
// let box1 = document.querySelector(".box1");

// image.style.height = "400px";

// for (let i = 0; i < li.length; i++) {
//   li[i].classList.add("inline-block");
//   li[i].classList.add("align-top");
// }
// button.classList.add("h-10", "w-full", "text-white");
// button.classList.add("bg-red-700");
// button.classList.add("animation");
// let ul = document.querySelector("ul");

// if (box1.childElementCount === 0) {
//   box1.classList.add("hidden");
//   console.log("Box has been hide due to 0 child");
// }
// let i = 1;
// let para = "Button";

// button.addEventListener("click", () => {
//   let cild = document.createElement("button");
//   let cross = document.createElement("div");
//   cross.classList.add(`cross${i}`, "h-8", "w-8", "bg-black", "rounded-full");
//   cild.innerText = `${para}_${i}`;
//   cild.appendChild(cross);
//   cild.classList.add(
//     "bg-blue-500",
//     "text-white",
//     "p-2",
//     "m-2",
//     "rounded",
//     "flex",
//     "flex-row",
//     "inline",
//     `cild${i}`
//   );
//   box1.appendChild(cild);
//   box1.classList.remove("hidden");

//   document.querySelector(`.cross${i}`).addEventListener("click", () => {
//     document.querySelector(`.cross${i}`).remove();
//   });

//   i++;
// });

let btn2 = document.querySelector("#btn2");
let section = document.querySelector("#exm1");
if (section.childElementCount <= 1) {
  let emptyMsg = document.createElement("p");
  emptyMsg.innerText = "List is empty";
  emptyMsg.id = "emptyMsg";
  section.appendChild(emptyMsg);
}

btn2.addEventListener("click", () => {
  let emptyMsg = document.querySelector("#emptyMsg");
  if (emptyMsg) emptyMsg.remove();
  let newDiv = document.createElement("div");
  newDiv.classList.add(
    "bg-green-200",
    "hover:bg-green-300",
    "w-full",
    "h-12",
    "flex",
    "items-center",
    "pl-8",
    "mb-3"
  );
  newDiv.innerText = "Hello World";
  section.appendChild(newDiv);
});
