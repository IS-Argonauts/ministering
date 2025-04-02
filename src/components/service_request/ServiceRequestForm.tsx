"use client";

import { useState } from "react";
import { InputField } from "./InputField";
import styles from "./ServiceRequestForm.module.css";
import { useNavigate } from "react-router-dom";
import { DateInput } from "./DateInput";

export const ServiceRequestForm = () => {
  const [isCoordinationRequired, setIsCoordinationRequired] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/submit");
  };

  return (
    <div className={styles.formWrapper}>
      <h2 className={styles.heading}>Service Request</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Coordination checkbox */}
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

        {/* Input fields */}
        <InputField label="Name of receiver" placeholder="Full name" />
        <InputField
          label="Phone number of receiver"
          type="tel"
          placeholder="(123) 456-7890"
          description="Include if the receiver should be contacted"
        />
        <DateInput />
        <InputField label="Service Request Details" placeholder="Coordinate dinners for the family" />

        {/* Submit button */}
        <div className={styles.submitContainer}>
          <button type="submit" className={styles.submitButton}>
            Submit Request
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServiceRequestForm;
