const totalCategories = document.querySelectorAll('.item');
console.log(`Number of categories: ${totalCategories.length}`);

const itemEl = [...totalCategories]
.map(category => `Category: ${category.firstElementChild.textContent}
Elements: ${category.lastElementChild.children.length}`
).
join('\r\n');
console.log(itemEl);