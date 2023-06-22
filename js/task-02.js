const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul");

const markup = ingredients.map((ingredient) => {
  const ingredientName = document.createElement("li");
  ingredientName.textContent = `${ingredient}`;
  ingredientName.classList.add("item");
  return ingredientName;
});

list.append(...markup);
