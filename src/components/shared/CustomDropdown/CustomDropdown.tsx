"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

type DropdownOption = {
  id: string;
  label: string;
  value: string;
};

type CustomDropdownProps = {
  options: DropdownOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  placeholder?: string;
};

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  value,
  onChange,
  label,
  placeholder = "Select an option",
}) => {
  const selectedOption = options.find((opt) => opt.value === value);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`bg-[#1e1e1e] text-white border-[0.6px] border-[rgba(245,245,245,1)]
          px-[18px] py-[5px] rounded-[26px] flex items-center justify-center gap-2
          shadow-[1px_1px_8px_0px_rgba(137,133,168,0.4)_inset,2px_2px_4px_0px_rgba(22,19,38,0.18)]
          hover:bg-gray-800
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0
          `}
        >
          <span>{selectedOption ? selectedOption.label : placeholder}</span>
          <ChevronDown size={16} className="text-white" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="center"
        className="w-56 mt-2 bg-[#1e1e1e] text-white border-[0.6px] border-[rgba(245,245,245,1)]
        rounded-[26px] p-2 shadow-[1px_1px_8px_0px_rgba(137,133,168,0.4)_inset,2px_2px_4px_0px_rgba(22,19,38,0.18)]"
      >
        {options.map((option) => (
          <DropdownMenuItem
            key={option.id}
            onClick={() => onChange(option.value)}
            className="px-3 py-2 rounded-[18px] hover:bg-gray-700 transition-colors cursor-pointer"
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropdown;
