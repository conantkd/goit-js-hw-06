const rangeControl = document.getElementById("font-size-control");
const textMark = document.querySelector("#text");

rangeControl.addEventListener("input", (event) => {
  const sizeControl = event.target.value + "px";
  textMark.style.fontSize = sizeControl;
});
