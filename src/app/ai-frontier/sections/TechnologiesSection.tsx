import TechnologyComp from "@/components/pages/ai-frontier/TechnologyComp";
import React from "react";

const TechnologiesSection = () => {
  return (
    <section className=" w-full">
      <div className="flex flex-col items-center ">
        <h2 className="text-white text-center text-h1">
          Technologies Building Intelligent Agents
        </h2>
        <div className="mt-[24px] md:mt-[50px] xl:mt-[72px]">
          <TechnologyComp />
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
