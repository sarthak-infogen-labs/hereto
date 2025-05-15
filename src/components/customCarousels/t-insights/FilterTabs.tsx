
import { cn } from "@/lib/utils";
import React from "react";

export type FilterType = "all" | "blogs" | "articles" | "whitepaper";

interface FilterTabsProps {
  className?: string;
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
}

function FilterTabButton({
  label,
  filter,
  onFilterChange,
  activeFilter,
}: {
  label: string;
  filter: string;
  onFilterChange: (filter: FilterType) => void;
  activeFilter: FilterType;
}) {
  return (
    <button 
        onClick={() => onFilterChange(filter as FilterType)}
        className={` font-normal text-[15px] leading-6 px-4.5 py-1.5 rounded-full  hover:bg-[#1B192A] hover:shadow-[inset_0_1px_4px_rgba(137,133,168,0.4),inset_0_-1px_2px_rgba(137,133,168,0.4)]
            ${filter === activeFilter ? "border-[0.6px] border-[#F5F5F5] bg-[#1B192A] text-[#F5F5F5] shadow-[inset_0_1px_4px_rgba(137,133,168,0.4),inset_0_-1px_2px_rgba(137,133,168,0.4)]" : "bg-transparent text-[#B2A8BE]"}
        `} >
        {label}
    </button>
  );
}

const FilterTabs = ({
  className,
  activeFilter,
  onFilterChange,
}: FilterTabsProps) => {
  return (
    <div className={cn("bg-[#070010] backdrop-blur-sm flex items-center gap-5 p-1.5 rounded-full border border-[#322B43]", className)}>
        <FilterTabButton
            label="All Insights"
            filter="all"
            onFilterChange={onFilterChange}
            activeFilter={activeFilter}
        />
        
      
        <FilterTabButton
            label="Blogs"
            filter="blogs"
            onFilterChange={onFilterChange}
            activeFilter={activeFilter}
        />
      

        <FilterTabButton
            label="Articles"
            filter="articles"
            onFilterChange={onFilterChange}
            activeFilter={activeFilter}
        />
      

        <FilterTabButton
            label="Whitepaper"
            filter="whitepaper"
            onFilterChange={onFilterChange}
            activeFilter={activeFilter}
        />
      
    </div>
  );
};

export default FilterTabs;
