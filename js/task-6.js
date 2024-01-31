function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreateEl = document.querySelector("button[data-create]");
console.log(btnCreateEl);
const btnDestrEl = document.querySelector("button[data-destroy]");
console.log(btnDestrEl);
const divEl = document.querySelector("#boxes");
console.log(divEl);
const inputEl = document.querySelector('input[type="number"]');
console.log(inputEl);
const arrDiv = [];

// inputEl.addEventListener("input", (event) => {
//   const value = event.target.value;
//   if (value > 100 || value < 0) {
//     event.target.value = 0;
//   }

btnCreateEl.addEventListener("click", () => {
  for (let i = 0; i < inputEl.value; i += 1) {
    let divSize = 30;
    arrDiv.push(document.createElement("div"));
    arrDiv[i].style.width = `${divSize + i * 10}px`;
    arrDiv[i].style.height = `${divSize + i * 10}px`;
    arrDiv[i].style.backgroundColor = getRandomHexColor();
  }
  divEl.append(...arrDiv);
});

btnDestrEl.addEventListener("click", () => {
  divEl.innerHTML = "";
});
// });
