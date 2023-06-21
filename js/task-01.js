const categories = document.querySelectorAll(".item");
console.log(`Number of categories: ${categories.length}`);

categories.forEach((category) => {
  const categoryName = category.firstElementChild.textContent;
  console.log(`Category: ${categoryName}`);
  const elements = category.lastElementChild.querySelectorAll("li");
  console.log(`Elements: ${elements.length}`);
});
