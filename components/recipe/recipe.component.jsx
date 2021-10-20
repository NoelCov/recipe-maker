import styles from "./recipe.styles.module.scss";

import React from "react";

const RecipeComponent = ({ title, ingredients, link }) => (
  <div className={styles.recipeContainer}>
    <span className={styles.recipeTitle}>{title.toUpperCase()}</span>
    <span className={styles.recipeIngredients}>
      Ingredients needed: {ingredients}
    </span>
    <span className={styles.recipeLink}>
      {"Recipe Guide: "}
      <a href={link} target="_blank" rel="noopener noreferrer">
        Click Me
      </a>
    </span>
  </div>
);

export default RecipeComponent;
