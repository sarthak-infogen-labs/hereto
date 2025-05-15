import React from "react";

interface FormInputProps {
  placeholder: string;
  className?: string;
  required?: boolean;
  type?: string;
  action?: (e: any) => void;
}

export const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  className = "",
  required = false,
  type = "text",
  action = () => {},
}) => {
  return (
    <input
      type={type}
      placeholder={`${placeholder}`}
      className={`bg-[#332C44]/34 backdrop-blur-md w-full font-normal text-sm text-[#9389A0] px-[15px] py-2.5 rounded-lg border-[0.6px] border-solid border-[#2C2C2C] max-sm:text-xs outline-none focus:border-[#9389A0] transition-colors ${className}`}
      required={required}
      onChange={action}
    />
  );
};
