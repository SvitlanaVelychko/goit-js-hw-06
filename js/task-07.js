// Напиши скрипт, який реагує на зміну значення input#font - size - control(подія input) і змінює
// інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputRef = document.getElementById("font-size-control");
const textRef = document.querySelector("span");

inputRef.addEventListener("input", onInputTextSize);

function onInputTextSize(event) {
    textRef.style.fontSize = event.currentTarget.value + "px";
}