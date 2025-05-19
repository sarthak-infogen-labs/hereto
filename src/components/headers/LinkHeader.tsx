"use client";
import React from "react";
import Link from "next/link";

interface LinkItem {
  label: string;
  href: string;
}

interface LinkHeaderProps {
  items: LinkItem[]; // List of nav items like [{ label: 'Insights', href: '/insights' }]
  activeIndex?: number; // Which item should be highlighted
}

const LinkHeader: React.FC<LinkHeaderProps> = ({ items, activeIndex = 0 }) => {
  return (
    <div className="h-[32px] inline-block">
      <div className="text-[#B2A8BE] rounded-[24px] border border-[#332C44] px-3 py-1 flex items-center space-x-1 text-[13px] font-medium">
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <Link
              href={item.href}
              className={index === activeIndex ? "text-[#05999F]" : ""}
            >
              {item.label}
            </Link>
            {index < items.length - 1 && <span>/</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default LinkHeader;
