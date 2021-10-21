import styles from "./recipe-finder.styles.module.scss";

import React from "react";

const RecipeFinder = ({ ingredients, link, title }) => {
  return (
    <div className={styles.recipeContainer}>
      <span className={styles.recipeTitle}>{title.toUpperCase()}</span>
      <span className={styles.recipeIngredients}>
        <div className={styles.recipeIngredientProperty}>
          {"Ingredients needed: "}
        </div>
        {ingredients.map((ingredient, index) => {
          return <div className={styles.recipeIngredient} key={index}>{`"${ingredient}"`}</div>;
        })}
      </span>
      <span className={styles.recipeLink}>
        {"Recipe Guide: "}
        <a href={link} target="_blank" rel="noopener noreferrer">
          Click Me
        </a>
      </span>
    </div>
  );
};

export default RecipeFinder;
