function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const initialColor = getRandomHexColor();
const body = document.querySelector('body');
const colorSelection = document.querySelector('span');
const changeColorButton = document.querySelector('button');

colorSelection.textContent = initialColor;

changeColorButton.addEventListener('click', () =>
{
  body.style.backgroundColor = initialColor;
  const newColor = getRandomHexColor();
  colorSelection.textContent = newColor;
  body.style.backgroundColor = newColor;

}
)
 