const formEl = document.querySelector(".login-form");
const inputEmailEl = document.querySelector('input[name="email"]');
const inputPasswordEl = document.querySelector('input[name="password"]');

const dataFormObj = {};

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  if (inputEmailEl.value.trim() === "" || inputPasswordEl.value.trim() === "") {
    alert("All form fields must be filled in");
    return;
  }
  dataFormObj[event.target.elements.email.name] =
    event.target.elements.email.value;
  dataFormObj[event.target.elements.password.name] =
    event.target.elements.password.value;
  console.log(dataFormObj);
  event.target.reset();
});
