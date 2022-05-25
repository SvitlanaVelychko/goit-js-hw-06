// Напиши скрипт, який:

// 1. Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// 2. Для кожного элемента li.item у спику ul#categories, знайде і виведе в консоль текст заголовку
//    елемента(тегу < h2 >) і кількість елементів в категорії(усіх < li >, вкладених в нього).

const totalCategoriesEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategoriesEl.length}`);

totalCategoriesEl.forEach((category) =>
    console.log(`Category: ${category.firstElementChild.textContent}
Elements: ${category.lastElementChild.children.length}`));