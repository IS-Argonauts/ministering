import React from "react";
import styles from "./AddEventButton.module.css"; // Adjust the path if the CSS module file is located elsewhere

export const AddEventButton: React.FC = () => {
  const [showForm, setShowForm] = React.useState(false);

  return (
    <>
      <div className={styles.buttonWrapper}>
        <button
          className={styles.addButton}
          onClick={() => setShowForm((prev) => !prev)}
        >
          {showForm ? "Close Form" : "Add Event"}
        </button>
      </div>

      {showForm && (
        <div className={styles.formContainer}>
          <textarea className={styles.textarea} placeholder="Describe the event..." />
          <input className={styles.input} placeholder="Event Date" />
          <button className={styles.submitButton}>Submit</button>
        </div>
      )}
    </>
  );
};
