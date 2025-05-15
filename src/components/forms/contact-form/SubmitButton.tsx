"use client";

import React from "react";

interface SubmitButtonProps {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  label,
  onClick,
  type = "submit",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`self-start font-bold text-base text-[#13002C] bg-white hover:bg-white/90 px-8 py-3 rounded-lg transition-colors ${className}`}
    >
      {label}
    </button>
  );
};
