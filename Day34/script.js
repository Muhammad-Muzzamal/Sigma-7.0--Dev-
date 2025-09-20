let button = document.querySelector("#submit");
let input = document.querySelector("#input");
let listBox = document.querySelector("#list-box");


button.addEventListener("click", () => {
  if (input.value.trim() === "") {
    return;
  }
  let list = document.createElement("div");
  list.classList.add("list-item");
  list.innerHTML = `
  ${input.value}
 <div class="btn">
          <button class="deleteBtn">Delete</button>
          <button class="editBtn">Edit</button>
        </div>
`;
  listBox.appendChild(list);
  input.value = "";
});
let deleteBtn = document.querySelector(".deleteBtn");
let editBtn = document.querySelector(".editBtn");

deleteBtn.addEventListener("click", (e) => {
  e.target.parentElement.parentElement.remove();
});
