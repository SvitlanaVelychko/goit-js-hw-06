const totalCategoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategoriesEl.length}`);

const itemEl = [...totalCategoriesEl].forEach((element) =>
    console.log(`Category: ${element.firstElementChild.textContent}
Elements: ${element.lastElementChild.children.length}`));