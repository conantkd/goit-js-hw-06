const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsUnorganizedList = document.getElementById("ingredients");
ingredients.forEach((ingredient) => {
  const ingredientList = document.createElement("li");
  ingredientList.textContent = ingredient;
  ingredientList.className = "item";
  ingredientsUnorganizedList.appendChild(ingredientList);
});
