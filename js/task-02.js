const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const allIngredients = document.querySelector('#ingredients')

const array = []

ingredients.map(ingredient => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = ingredient
  ingredientsEl.classList.add('item');
  array.push(ingredientsEl)
  console.log(ingredientsEl)

})

allIngredients.append(...array);



