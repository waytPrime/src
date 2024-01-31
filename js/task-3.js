const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");
inputEl.addEventListener("input", (event) => {
  console.log(event);
  spanEl.textContent = inputEl.value.trim();
  if (inputEl.value.trim() === "") {
    spanEl.textContent = "Anonimous";
    console.log(spanEl.textContent);
  }
});
console.log(inputEl.value);
