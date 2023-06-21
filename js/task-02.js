const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("ul");

ingredients.forEach((ingredient) => {
  const ingredientName = document.createElement("li");
  ingredientName.textContent = `${ingredient}`;
  ingredientName.classList.add("item");
  list.append(ingredientName);
});

// ANOTHER WAY:
// const markup = ingredients
// .map((ingredient) => `<li class="item">${ingredient}</li>`)
// .join("");
// list.innerHTML = markup;
