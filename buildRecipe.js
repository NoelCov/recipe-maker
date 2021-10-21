const carbs = [
  "brown rice",
  "whole grain pasta",
  "whole oats",
  "whole wheat",
  "pinto beans",
  "black beans",
  "green beans",
  "kidney beans",
  "lima beans",
  "lentils",
  "peas",
  "chickpeas",
  "quinoa",
  "sweet potatoes",
];

const proteins = [
  "chicken",
  "ground chicken",
  "ground turkey",
  "shrimp",
  "tuna",
  "eggs",
  "salmon",
  "turkey",
];

const vegetables = [
  "carrots",
  "broccoli",
  "tomatoes",
  "kale",
  "spinach",
  "onions",
  "cauliflower",
  "cucumbers",
  "avocado",
  "asparagus",
  "peas",
];

const fruits = [
  "strawberries",
  "oranges",
  "grapes",
  "apples",
  "bananas",
  "pears",
  "strawberries",
  "dates",
  "melons",
  "peaches",
  "cantaloupes",
];

const nutsAndSeeds = [
  "almonds",
  "walnuts",
  "hazelnuts",
  "cashews",
  "pumpkin seeds",
  "sunflower seeds",
  "pecans",
];

const getRandom = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};

const buildRecipe = (proteins, carbs, vegetables, fruits, nutsAndSeeds) => {
  let protein = getRandom(proteins);
  let carb = getRandom(carbs);
  let vegetable = getRandom(vegetables);
  let fruit = getRandom(fruits);
  let nutsAndSeed = getRandom(nutsAndSeeds);

  return {
    protein,
    carb,
    vegetable,
    fruit,
    nutsAndSeed,
  };
};

export const buildRecipes = () => {
  const recipes = [];

  for (let i = 0; i < 5; i++) {
    recipes.push(
      buildRecipe(proteins, carbs, vegetables, fruits, nutsAndSeeds)
    );
  }
  console.log(recipes);
  return recipes;
};


