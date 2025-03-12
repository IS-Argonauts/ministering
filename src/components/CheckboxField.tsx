import React from "react";

interface CheckboxFieldProps {
  label: string;
  className?: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
  label,
  className = "",
}) => {
  return (
    <div className={`flex gap-1 items-start ${className}`}>
      <div className="p-1 w-12 h-12">
        <div className="flex justify-center items-center p-3 rounded-[100px]">
          <div
            className="rounded-sm border-2 border-solid border-zinc-700 h-[18px] w-[18px]"
            role="checkbox"
            aria-checked="false"
            tabIndex={0}
          />
        </div>
      </div>
      <label className="text-xl leading-6 text-black max-w-[237px]">
        {label}
      </label>
    </div>
  );
};

export default CheckboxField;
