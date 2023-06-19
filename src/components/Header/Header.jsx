import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <p className={styles.title}>Clients browse</p>
      <button className={styles.button}>
        <span className={styles.icon}>+</span>New
      </button>
    </div>
  );
}
