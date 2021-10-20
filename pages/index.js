import styles from "../styles/Home.module.scss";

import Button from "../components/button/button.component";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1 className={styles.title}>Mediterranean Recipe Builder</h1>
      <div className={styles.buttonsContainer}>
        <Button>Create Recipe</Button>
        <Button>Random Recipe</Button>
      </div>
      <footer>

      </footer>
    </div>
  );
}
