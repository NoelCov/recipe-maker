const recipes = [
  {
    name: "Shrimp Orzo Salad",
    url: "https://www.hearthealthygreek.com/mediterranean-shrimp-orzo-salad/",
    ingredients: [
      "orzo",
      "shrimp",
      "tomatoes",
      "cucumber",
      "green onions",
      "olive oil",
      "chickpeas",
      "fresh dill",
      "feta cheese",
    ],
  },
  {
    name: "Lemon Garlic Baked Chicken Drumsticks",
    url: "https://www.themediterraneandish.com/baked-chicken-drumsticks/",
    ingredients: [
      "chicken drumsticks",
      "oregano",
      "black pepper",
      "coriander",
      "sweet paprika",
      "cumin",
      "lemon juice",
      "lemon zest",
      "garlic",
      "onion",
    ],
  },
  {
    name: "Mediterranean Garlic Shrimp Pasta Recipe",
    url: "https://www.themediterraneandish.com/shrimp-pasta-recipe/",
    ingredients: [
      "thin spaguetti",
      "sea salt",
      "extra virgin olive oil",
      "shrimp",
      "black pepper",
      "onion",
      "garlic",
      "oregano",
      "red pepper flakes",
      "pinot grigio",
      "lemon",
      "parsley",
      "tomatoes",
      "parmesan cheese",
    ],
  },
  {
    name: "Italian Baked Chicken Breast Recipe",
    url: "https://www.themediterraneandish.com/easy-italian-baked-chicken-recipe/",
    ingredients: [
      "chicken breast",
      "salt and pepper",
      "oregano",
      "fresh thyme",
      "sweet paprika",
      "garlic",
      "extra virgin olive oil",
      "lemon",
      "red onion",
      "campari tomatoes",
      "parsley",
      "basil leaves",
    ],
  },
  {
    name: "Sheet-Pan Mediterranean Shrimp",
    url: "https://gardeninthekitchen.com/sheet-pan-mediterranean-shrimp/",
    ingredients: [
      "shrimp",
      "asparagus",
      "olive oil",
      "garlic",
      "red onion",
      "oregano and smoked paprika",
      "sea salt and ground black pepper",
      "lemon",
      "black olives",
      "feta cheese",
      "cilantro or parsley",
    ],
  },
  {
    name: "Avocado Caprese Salad",
    url: "https://www.foodiecrush.com/avocado-caprese-salad-plus-5-crunchy-avocado-salads/#recipe",
    ingredients: [
      "arugula",
      "tomatoes",
      "avocado",
      "mozzarella cheese",
      "fresh basil leaves",
      "extran virgin olive oil",
      "balsamic vinegar",
      "honey",
      "salt and black pepper",
    ],
  },
];

const pickRandom = (recipes) => {
  return recipes[Math.floor(Math.random() * recipes.length)];
};

const getRecipe = (recipes) => {
  return pickRandom(recipes);
};

export const getRecipes = () => {
  const recipesData = [];
  for (let i = 0; i < 5; i++) {
    recipesData.push(getRecipe(recipes));
  }

  return recipesData;
}
