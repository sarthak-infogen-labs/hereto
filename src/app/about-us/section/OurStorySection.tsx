"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import InfoCard from "./InfoCard";
import { aboutUsPageData } from "@/constants/AboutUsPageData";

const OurStorySection = () => {
  const scrollContainerRef = useRef(null);
  const { ourStorySection } = aboutUsPageData;

  const { scrollXProgress } = useScroll({
    container: scrollContainerRef,
  });

  const progressWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="px-2">
      <div className="text-[#EEE6FC] text-h1 max-md:text-center">
        {ourStorySection.title}
      </div>
      <div className="text-[#D6C8EE] text-body-sm mt-6 md:hidden max-md:text-center">
        {ourStorySection.description}
      </div>
      <div
        className="w-[100%] md:mt-18 max-md:mt-8 mb-[18px] overflow-x-auto no-scrollbar"
        ref={scrollContainerRef}
      >
        <div className="flex relative gap-3 w-[max-content]">
          <div className="absolute rounded-full left-1/3 top-10 blur-3xl w-[140px] h-[140px] bg-[linear-gradient(to_right,rgba(28,0,65,1),rgba(103,111,255,1))] opacity-30"></div>
          <div className="absolute rounded-full left-2/3 top-10 blur-3xl w-[140px] h-[140px] bg-[linear-gradient(to_right,rgba(28,0,65,1),rgba(103,111,255,1))] opacity-30"></div>

          {ourStorySection.cards.map((card, index) => (
            <div key={index}>
              <InfoCard
                heading={card.heading}
                textContent={card.text}
                icon={card.icon}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="w-[100%] h-1 rounded-fulloverflow-hidden">
        <motion.div
          className="h-full"
          style={{
            borderRadius: "10px",
            width: progressWidth,
            background: "linear-gradient(-90deg, #AC83E1 0%, #543280 100%)",
          }}
        />
      </div>
    </div>
  );
};

export default OurStorySection;
