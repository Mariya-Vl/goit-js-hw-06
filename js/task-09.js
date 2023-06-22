function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundColor = document.querySelector(".color");
const btnChangeColor = document.querySelector(".change-color");

btnChangeColor.addEventListener("click", changeColor);

function changeColor(event) {
  const color = getRandomHexColor();
  backgroundColor.textContent = color;
  document.body.style.backgroundColor = `${color}`;
}
