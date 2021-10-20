carbs = [
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

proteins = [
  "chicken",
  "ground chicken",
  "ground turkey",
  "shrimp",
  "tuna",
  "eggs",
  "salmon",
  "turkey",
];

vegetables = [
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

fruits = [
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

nutsAndSeeds = [
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

  return `Protein: ${protein}, Carbs: ${carb}, Vegetables: ${vegetable}, Fruit: ${fruit}, NutsOrSeeds: ${nutsAndSeed}
  -----------------------------------------------------------------------------------------------------------\n`;
};

for (let i = 0; i <= 10; i++) {
  console.log(buildRecipe(proteins, carbs, vegetables, fruits, nutsAndSeeds));
}

