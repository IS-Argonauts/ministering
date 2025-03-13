"use client";

import React, { useState } from "react";
import { InputField } from "./InputField";
import styles from "./ServiceRequestForm.module.css";

export const ServiceRequestForm = () => {
  const [isCoordinationRequired, setIsCoordinationRequired] = useState(false);

  return (
    <form className={styles.form}>
      <div className={styles.checkboxContainer}>
        <label className={styles.checkboxWrapper}>
          <div className={styles.checkbox}>
            <input
              type="checkbox"
              checked={isCoordinationRequired}
              onChange={(e) => setIsCoordinationRequired(e.target.checked)}
              className={styles.checkboxInput}
            />
          </div>
          <span className={styles.checkboxLabel}>
            Coordination (materials, access to location) required?
          </span>
        </label>
      </div>

      <InputField label="Name of reciever" placeholder="Name" />

      <InputField
        label="Phone number of receiver"
        type="tel"
        placeholder="Phone"
        description="Include if receiver should be contacted"
      />

      <InputField
        label="Suggested date"
        type="text"
        placeholder="Select Date"
      />

      <div className={styles.submitContainer}>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </div>
    </form>
  );
};
