"use client";

import React from "react";
import styles from "./InputField.module.css";

interface InputFieldProps {
  label: string;
  type?: "text" | "tel" | "date";
  placeholder: string;
  description?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder,
  description,
}) => {
  return (
    <div className={styles.fieldContainer}>
      <label className={styles.label}>{label}</label>
      {description && <p className={styles.description}>{description}</p>}
      <div className={styles.inputWrapper}>
        <input type={type} placeholder={placeholder} className={styles.input} />
      </div>
    </div>
  );
};

export default InputField;
