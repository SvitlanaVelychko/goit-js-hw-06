// Напиши скрипт, який змінює кольори фону елемента < body > через інлайн - стиль по кліку на button.change - color 
// і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const bodyEl = document.querySelector("body");
const buttonRef = document.querySelector(".change-color");
const textColorEl = document.querySelector(".color");

buttonRef.addEventListener("click", onChangeColor);

function onChangeColor() {
  const hexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = hexColor;
  textColorEl.textContent = hexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}