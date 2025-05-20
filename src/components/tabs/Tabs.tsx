"use client";
import React, { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TabButton from "./TabButton";
import { IOptions } from "@/interface/Ioption.interface";

const Tabs = ({
  data,
  value,
  onChange,
}: {
  data: IOptions[];
  value: string;
  onChange: (id: string) => void;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  // Scroll amount per click
  const scrollAmount = 150;

  // Scroll handler
  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    if (direction === "left") {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Check if scroll is needed and update arrow visibility
  const updateArrowsVisibility = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    // If scrollLeft > 0, show left arrow, else hide
    setShowLeftArrow(scrollLeft > 0);

    // If scrollLeft + clientWidth < scrollWidth, show right arrow, else hide
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
  };

  // Run on mount and on window resize to check for overflow
  useEffect(() => {
    updateArrowsVisibility();

    // Update on scroll
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", updateArrowsVisibility);
    window.addEventListener("resize", updateArrowsVisibility);

    return () => {
      el.removeEventListener("scroll", updateArrowsVisibility);
      window.removeEventListener("resize", updateArrowsVisibility);
    };
  }, [data]);

  return (
    <div className="flex items-center space-x-2">
      {/* Left Arrow */}
      {/* {showLeftArrow && (
        <button
          onClick={() => scroll("left")}
          className="p-2 rounded-full hover:bg-gray-700 active:bg-gray-600 cursor-pointer"
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} color="white" />
        </button>
      )} */}
      {/* Scrollable Tabs */}

      <div
        ref={scrollRef}
        className="flex flex-row gap-5 overflow-x-auto scrollbar-hide no-scrollbar  border border-[#322B43] rounded-full p-1.5 whitespace-nowrap"
        style={{ scrollBehavior: "smooth", maxWidth: "80vw" }}
      >
        {data.map((tab) => (
          <TabButton
            key={tab.id}
            id={tab.id}
            label={tab.label}
            isActive={tab.id == value}
            onClick={() => onChange(tab.id)}
          />
        ))}
      </div>
      {/* Right Arrow */}
      {/* {showRightArrow && (
        <button
          onClick={() => scroll("right")}
          className="p-2 rounded-full hover:bg-gray-700 active:bg-gray-600 cursor-pointer"
          aria-label="Scroll right"
        >
          <ChevronRight size={20} color="white" />
        </button>
      )} */}
    </div>
  );
};

export default Tabs;
