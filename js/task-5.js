function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const spanEl = document.querySelector(".color");
const btnBackGrColor = document.querySelector(".change-color");

btnBackGrColor.addEventListener("click", (event) => {
  document.body.style.backgroundColor = getRandomHexColor();
  spanEl.textContent = `${document.body.style.backgroundColor}`;
});
