const totalCategoriesEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategoriesEl.length}`);

const itemEl = totalCategoriesEl.forEach((item) =>
    console.log(`Category: ${item.firstElementChild.textContent}
Elements: ${item.lastElementChild.children.length}`));