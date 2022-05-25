// Напиши скрипт, який для кожного елемента масиву ingredients:

// 1. Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// 2. Додасть назву інгредієнта як його текстовий вміст.
// 3. Додасть елементу клас item.
// 4. Після чого, вставить усі <li> за одну операцію у список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector("ul");
listEl.classList.add("ingredients");

const makeListElements = ingredients => {
  return ingredients.map(ingredient => {
    const itemEl = document.createElement("li");
    itemEl.textContent = ingredient;
    itemEl.classList.add("item");

    return itemEl;
  });
};

const elements = makeListElements(ingredients);
listEl.append(...elements);