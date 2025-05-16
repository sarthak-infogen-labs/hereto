import SubTextDisplay from "@/components/shared/SubTextDisplay";
import React from "react";

const AboutUsHeroSection = () => {
  return (
    <div className="min-h-[80vh]  w-full">
      <div className="text-center  w-full mt-[80px] lg:[160px] xl:mt-[223px]">
        <h1 className="text-white text-display ">
          We are <span className="gradient-text">Herrito</span>
        </h1>
        <div className="max-w-[663px] mx-auto">
          <SubTextDisplay text="Enabling enterprise access to top-tier AI expertise, infrastructure, and deployment capabilities." />
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeroSection;
