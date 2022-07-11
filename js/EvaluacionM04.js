const input = document.querySelector(".input");
const addButton = document.querySelector(".boton-agregar");
const container = document.querySelector(".item-input");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

addButton.addEventListener("click", (e) => {
  e.preventDefault();

  const text = input.value;

  if (text !== "") {
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteButton());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";
  }
});

function addDeleteButton() {
  const deleteButton = document.createElement("button");

  deleteButton.textContent = "X";
  deleteButton.className = "btn-delete";

  deleteButton.addEventListener("click", (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }
  });

  return deleteButton;
}