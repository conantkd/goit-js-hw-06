const inputBox = document.querySelector("#name-input");
const nameBox = document.querySelector("#name-output");

inputBox.addEventListener("input", (event) => {
  const name = event.target.value;
  if (name.length > 0) {
    nameBox.textContent = name;
  } else {
    nameBox.textContent = "Anonymus";
  }
});
