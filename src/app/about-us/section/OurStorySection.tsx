"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import InfoCard from "./InfoCard";

const OurStorySection = () => {
  const scrollContainerRef = useRef(null); // Ref for the scrollable container

  const heading1 = "The Questioning Spark (2023)";
  const textContent1 =
    "Herrito wasn’t the result of a polished business strategy or along-drawn product roadmap. It began in 2023 with a single bold question: What if technology partnerships could be more humanOu, more agile, more meaningful?";
  const heading2 = "The Founding Fire";
  const textContent2 =
    "A Team United by Purpose - With that vision, a small group of passionate technologists came together. Not to follow trends, but to build a company rooted in empathy, collaboration, and adaptability. From whiteboard sessions to real-world deployments.";
  const heading3 = "The Building Momentum";
  const textContent3 =
    "Herrito wasn’t the result of a polished business strategy or along-drawn product roadmap. It began in 2023 with a single bold question: What if technology partnerships could be more human, more agile, more meaningful?";

  // Track horizontal scroll progress
  const { scrollXProgress } = useScroll({
    container: scrollContainerRef,
  });

  // Transform scroll progress (0 to 1) to width percentage (0% to 100%)
  const progressWidth = useTransform(scrollXProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className=" px-2">
      <div className="text-[#EEE6FC] text-h1 max-md:text-center ">
        Our Story
      </div>
      <div className="text-[#D6C8EE] text-body-sm mt-6 md:hidden max-md:text-center  ">
        Innovation Lab is a dedicated space where we present our work on new
        technologies, product prototypes, and functional Proof of Concepts
        (POCs).
      </div>
      <div
        className=" w-[100%] md:mt-18 max-md:mt-8 mb-[18px] overflow-x-auto no-scrollbar"
        ref={scrollContainerRef}
      >
        <div className="flex relative gap-3 w-[max-content] ">
          <div className="absolute rounded-full left-1/3 top-10 blur-3xl w-[140px] h-[140px] bg-[linear-gradient(to_right,rgba(28,0,65,1),rgba(103,111,255,1))] opacity-30"></div>
          <div className="absolute rounded-full left-2/3 top-10 blur-3xl w-[140px] h-[140px] bg-[linear-gradient(to_right,rgba(28,0,65,1),rgba(103,111,255,1))] opacity-30"></div>

          <div>
            <InfoCard
              heading={heading1}
              textContent={textContent1}
              icon={"/images/about-us/our-story/question-spark.svg"}
            />
          </div>
          <div>
            <InfoCard
              heading={heading2}
              textContent={textContent2}
              icon={"/images/about-us/our-story/foundation-fire.svg"}
            />
          </div>
          <div>
            <InfoCard
              heading={heading3}
              textContent={textContent3}
              icon={"/images/about-us/our-story/building-momentun.svg"}
            />
          </div>
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
