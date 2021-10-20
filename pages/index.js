import styles from "../styles/Home.module.scss";

import Button from "../components/button/button.component";
import Recipe from "../components/recipe/recipe.component";

export default function Home() {
  return (
    <>
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Mediterranean Recipe Builder</h1>
      <div className={styles.buttonsContainer}>
        <Button>Create Recipe</Button>
        <Button>Random Recipe</Button>
      </div>

      <section className={styles.recipesContainer}>
        <Recipe
          title="Chicken Broth"
          ingredients={"Potatoes, Chicken, Salt"}
          link="https://www.noelcodes.dev/"
        />

        <Recipe
          title="Chicken Broth"
          ingredients={"Potatoes, Chicken, Salt"}
          link="https://www.noelcodes.dev/"
        />

        <Recipe
          title="Chicken Broth"
          ingredients={"Potatoes, Chicken, Salt"}
          link="https://www.noelcodes.dev/"
        />
      </section>
    </div>
    <footer className={styles.footer}>
        <span>
          Created by <a href="https://www.noelcodes.dev/">Noel Codes</a>
        </span>
      </footer>
    </>
  );
}
