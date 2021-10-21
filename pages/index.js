import { useState } from "react";

import styles from "../styles/Home.module.scss";

import Button from "../components/button/button.component";
import RecipeMaker from "../components/recipe-maker/recipe-maker.component";
import RecipeFinder from "../components/recipe-finder/recipe-finder.component";

import { buildRecipes } from "../buildRecipe";
import { getRecipes } from "../randomRecipe";

export default function Home() {
  const [createRecipes, setCreateRecipes] = useState([]);
  const [findRecipes, setFindRecipes] = useState([]);

  const createNewRecipes = () => {
    setFindRecipes([]);
    setCreateRecipes(buildRecipes());
  };

  const findNewRecipes = () => {
    setCreateRecipes([]);
    setFindRecipes(getRecipes());
  };
  return (
    <>
      <div className={styles.homeContainer}>
        <h1 className={styles.title}>Mediterranean Recipe Builder</h1>
        <div className={styles.buttonsContainer}>
          <Button onClick={() => createNewRecipes()}>Create Recipe</Button>
          <Button onClick={() => findNewRecipes()}>Random Recipe</Button>
        </div>

        <div className={styles.recipesContainer}>
          {createRecipes.length > 0
            ? createRecipes.map((recipe, index) => {
                return (
                  <RecipeMaker
                    key={index}
                    protein={recipe.protein}
                    carb={recipe.carb}
                    fruit={recipe.fruit}
                    vegetable={recipe.vegetable}
                    nutOrSeed={recipe.nutsAndSeed}
                  />
                );
              })
            : null}

          {findRecipes.length > 0
            ? findRecipes.map((recipe, index) => {
                return (
                  <RecipeFinder
                    key={index}
                    ingredients={recipe.ingredients}
                    link={recipe.url}
                    title={recipe.name}
                  />
                );
              })
            : null}
        </div>
      </div>
      <footer className={styles.footer}>
        <span>
          Created by <a href="https://www.noelcodes.dev/">Noel Codes</a>
        </span>
      </footer>
    </>
  );
}
