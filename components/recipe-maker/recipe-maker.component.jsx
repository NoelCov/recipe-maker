import React from "react";

import styles from "./recipe-maker.styles.module.scss";

const RecipeMaker = ({ protein, carb, fruit, vegetable, nutOrSeed }) => {
  return (
    <div className={styles.recipeContainer}>
      <div className={styles.recipeProperty}>
        {"PROTEIN:"}
        <span>{protein.toUpperCase()}</span>
      </div>
      <div className={styles.recipeProperty}>
        {"CARBS: "}
        <span>{carb.toUpperCase()}</span>
      </div>
      <div className={styles.recipeProperty}>
        {"FRUITS: "}
        <span>{fruit.toUpperCase()}</span>
      </div>
      <div className={styles.recipeProperty}>
        {"VEGETABLE: "}
        <span>{vegetable.toUpperCase()}</span>
      </div>
      <div className={styles.recipeProperty}>
        {"NUT OR SEED:"}
        <span>{nutOrSeed.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default RecipeMaker;
