import React from "react";
import styles from "./components.module.css";

export const AddEventButton: React.FC = () => {
  return (
    <div className={styles.buttonWrapper}>
      <button className={styles.addButton}>Add Event</button>
    </div>
  );
};
