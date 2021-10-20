import React from "react";

import styles from "./button.styles.module.scss";

const ButtonComponent = ({ onClick, children }) => (
  <span className={styles.buttonContainer} onClick={onClick}>{children}</span>
);

export default ButtonComponent;
