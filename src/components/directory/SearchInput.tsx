"use client";
import * as React from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search..."
        className="px-4 py-2 w-full text-gray-900 rounded-lg bg-slate-100"
        aria-label="Search directory"
      />
      <div className="absolute right-3 top-2/4 -translate-y-2/4">
        <i className="ti ti-search text-gray-400" />
      </div>
    </div>
  );
};
