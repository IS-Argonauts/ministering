"use client";

import { useState } from "react";
import { InputField } from "./InputField";
import styles from "./ServiceRequestForm.module.css";
import { useNavigate } from "react-router-dom";
import { DateInput } from "./DateInput";

export const ServiceRequestForm = () => {
  const [isCoordinationRequired, setIsCoordinationRequired] = useState(false);

  const navigate = useNavigate(); // ✅

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent page refresh
    navigate("/submit");
  };
  return (
    <div className={styles.container}>
      {/* Header Section */}
      <h2>Service Request</h2>

      {/* Form Section */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.checkboxContainer}>
          <label className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              checked={isCoordinationRequired}
              onChange={(e) => setIsCoordinationRequired(e.target.checked)}
              className={styles.checkboxInput}
            />
            <span className={styles.checkboxLabel}>
              Coordination (materials, access to location) required?
            </span>
          </label>
        </div>

        <InputField label="Name of receiver" placeholder="Name" />

        <InputField
          label="Phone number of receiver"
          type="tel"
          placeholder="Phone"
          description="Include if receiver should be contacted"
        />

        <DateInput />

        <div className={styles.submitContainer}>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceRequestForm;
