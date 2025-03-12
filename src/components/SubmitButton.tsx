import React from "react";
import { ArrowRightIcon } from "./icons";

interface SubmitButtonProps {
  label: string;
  onClick?: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  label,
  onClick = () => console.log("Form submitted"),
}) => {
  return (
    <button
      className="inline-flex gap-2 justify-center items-center p-3 text-base bg-sky-800 rounded cursor-pointer text-neutral-100"
      onClick={onClick}
    >
      <span>{label}</span>
      <ArrowRightIcon />
    </button>
  );
};

export default SubmitButton;
