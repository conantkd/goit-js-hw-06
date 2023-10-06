const emailInput = document.querySelector('[type="email"]');
const passwordInput = document.querySelector('[type="password"]');
const loginForm = document.querySelector("form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = event.target.elements.email.value;
  const passwordInput = event.target.elements.password.value;

  if (emailInput.length < 1 || passwordInput.length < 1) {
    alert(`Todos los espacios deben ser rellenados`);
  } else {
    console.log(`email: ${emailInput}, password: ${passwordInput}`);
    loginForm.reset();
  }
});
