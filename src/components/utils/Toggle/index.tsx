"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={styles.container} onClick={() => setDarkMode(!darkMode)}>
        <div className={styles.icon}>🌚</div>
        <div className={styles.icon}>🌞 </div>
        <div
          className={styles.ball}
          style={darkMode ? { left: "3px" } : { right: "3px" }}
        />
      </div>
    </>
  );
};

export default Toggle;
