const inputBox = document.querySelector("#validation-input");

inputBox.addEventListener("blur", () => {
  const inputLength = inputBox.value.length;
  const requiredLength = parseInt(inputBox.getAttribute("data-length"));

  if (inputLength === requiredLength) {
    inputBox.classList.remove("invalid");
    inputBox.classList.add("valid");
  } else {
    inputBox.classList.remove("valid");
    inputBox.classList.add("invalid");
  }
});
