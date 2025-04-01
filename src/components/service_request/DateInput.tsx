// DateInput.tsx
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./DateInput.module.css"; // Optional, if you want to style it later

export const DateInput = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className={styles.container}>
      <label className={styles.label}>Suggested Date</label>
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        dateFormat="yyyy/MM/dd"
        placeholderText="Select a date"
        className={styles.datepicker}
      />
    </div>
  );
};
