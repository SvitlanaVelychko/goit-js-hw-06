// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// 1. Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// 2. Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// 3. Оновлюй інтерфейс новим значенням змінної counterValue.

const buttonDecrementRef = document.querySelector('button[data-action="decrement"]');
const buttonIncrementRef = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    value.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

buttonDecrementRef.addEventListener('click', decrement);
buttonIncrementRef.addEventListener('click', increment);
