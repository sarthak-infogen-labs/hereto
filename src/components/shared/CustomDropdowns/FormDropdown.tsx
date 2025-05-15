"use client";

import React, { useState, useRef, useEffect } from "react";

interface FormDropdownProps {
  label: string;
  options: string[];
  required?: boolean;
  onChange?: (value: string) => void;
}

export const FormDropdown = ({
  label,
  options,
  required = false,
  onChange,
}: FormDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="flex items-center justify-between w-full text-label text-[#9389A0] px-4 py-2.5 rounded-lg border-[1px] border-[#2C2C2C] cursor-pointer bg-[#332C44]/34 backdrop-blur-md"
        onClick={() => setIsOpen(!isOpen)}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-labelledby="dropdown-label"
      >
        <span id="dropdown-label" className="text-white/60 text-nowrap">
          {selectedOption || `${label}${required ? "*" : ""}`}
        </span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M12 14.6537L7.596 10.25H16.404L12 14.6537Z" fill="white" fillOpacity="0.6" />
        </svg>
      </div>

      {isOpen && (
        <ul
          className="absolute z-20 w-full mt-1 bg-[#F9F4FF]/10 backdrop-blur-3xl border border-[rgba(255,255,255,0.15)] rounded-lg shadow-lg max-h-60 overflow-auto"
          role="listbox"
        >
          {options.map((option, index) => (
            <li
              key={index}
              className="px-4 py-3 hover:bg-white/5 cursor-pointer text-white/80"
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={selectedOption === option}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};