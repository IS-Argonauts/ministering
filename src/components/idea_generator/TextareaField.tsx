import React from "react";
import styles from "./TextareaField.module.css";

interface TextareaFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className={styles.fieldContainer}>
      <label className={styles.label}>{label}</label>
      <div className={styles.textareaWrapper}>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={styles.textarea}
        />
      </div>
    </div>
  );
};
