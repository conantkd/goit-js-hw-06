const categoriesList = document.querySelector("#categories");
const categoriesItem = categoriesList.querySelectorAll("li.item");
console.log("Number of Categories:", categoriesItem.length);
categoriesItem.forEach((categorieItem) => {
  const categoryName = categorieItem.querySelector("h2").textContent;
  const categoryItemsList = categorieItem.querySelectorAll("ul li");
  console.log("Category:", categoryName);
  console.log("Elements:", categoryItemsList.length);
});
