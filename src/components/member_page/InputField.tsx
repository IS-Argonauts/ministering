"use client";
import React, { useState } from "react";

interface InputFieldProps {
  label: string;
  placeholder?: string;
  description?: string;
  className?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder = "",
  description,
  className = "",
}) => {
  const [value, setValue] = useState("");

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-base font-medium leading-6 text-stone-900">
        {label}
      </label>
      {description && (
        <p className="text-base leading-6 text-neutral-500">{description}</p>
      )}
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className="px-4 py-3 text-base bg-white rounded border border-solid border-neutral-200 text-stone-900"
      />
    </div>
  );
};

export default InputField;
