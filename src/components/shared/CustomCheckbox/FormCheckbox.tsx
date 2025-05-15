"use client";
import React, { useState } from "react";

interface FormCheckboxProps {
  label: string;
  initialChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const FormCheckbox: React.FC<FormCheckboxProps> = ({
  label,
  initialChecked = false,
  onChange,
}) => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = () => {
    const newValue = !checked;
    setChecked(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="flex gap-x-5">
      <div
        onClick={handleChange}
        className={`w-[24px] h-[23px] rounded border pt-[1px] overflow-hidden ${
          checked ? "bg-white border-white" : "border-white/30"
        } cursor-pointer transition-colors`}
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
      >
        {checked && (
          <svg
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.6 13.8538L15.323 7.13075L14.2693 6.077L8.6 11.7463L5.75 8.89625L4.69625 9.95L8.6 13.8538Z"
              fill="#13002C"
            />
          </svg>
        )}
      </div>
      <div className="font-normal text-[14px] text-[#D7CDE4] leading-6">
        {label}
      </div>
    </div>
  );
};