"use client";
import React, { useState } from "react";

interface DateFieldProps {
  label: string;
  className?: string;
}

const DateField: React.FC<DateFieldProps> = ({ label, className = "" }) => {
  const [date, setDate] = useState("");

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-base font-medium leading-6 text-stone-900">
        {label}
      </label>
      <button
        className="px-4 py-3 text-base bg-white rounded border border-solid border-neutral-200 text-stone-900 text-left"
        onClick={() => {
          // In a real implementation, this would open a date picker
          console.log("Open date picker");
        }}
      >
        Select Date
      </button>
    </div>
  );
};

export default DateField;
