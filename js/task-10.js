// Напиши скрипт створення і очищення колекції елементів.
// 1. Користувач вводить кількість елементів в input і 
// натискає кнопку Створити, після чого рендериться колекція.
// 2. Натисненням на кнопку Очистити, колекція елементів очищається.
// 3. Створи функцію createBoxes(amount), яка приймає один параметр - число.Функція створює стільки < div >, скільки 
// вказано в amount і додає їх у div#boxes.

// 4. Розміри найпершого <div> - 30px на 30px.
// 5. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 6. Всі елементи повинні мати випадковий колір фону у форматі HEX.Використовуй готову функцію getRandomHexColor 
// для отримання кольору.
// 7. Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const refs = {
  inputValue: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxesEl: document.getElementById("boxes"),
}

const amount = refs.inputValue.value;
// const inputValue = document.querySelector("input");
// const createBtn = document.querySelector("button[data-create]");
// const destroyBtn = document.querySelector("button[data-destroy]");
// const boxesEl = document.getElementById("boxes");

refs.createBtn.addEventListener("click", createBoxes);
//refs.destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
