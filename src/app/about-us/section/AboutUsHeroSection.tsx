import SubTextDisplay from "@/components/shared/SubTextDisplay";
import React from "react";
import ShowProfiles from "./ShowProfiles";
import Image from "next/image";

const AboutUsHeroSection = () => {
  return (
    <div className="min-h-[80vh] relative border-1 border-transparent 0 w-full">
      <div className=" text-center w-full mt-[80px] lg:[160px] xl:mt-[223px]">
        <h1 className="text-white text-display ">
          We are <span className="gradient-text">Herrito</span>
        </h1>
        <div className="max-w-[663px] mx-auto">
          <SubTextDisplay text="Enabling enterprise access to top-tier AI expertise, infrastructure, and deployment capabilities." />
        </div>
      </div>
       <div className="absolute w-full h-full top-0">
        <Image
          src="/images/ai-frontier-hero-section/grid-png.png"
          alt="Borderlines"
          fill
          className="object-cover mask-radial-fade  opacity-30"
        />

        <div
          className="absolute blur-[70px] top-[40%] w-full h-[259px] rounded-full left-1/2 -translate-x-1/2 z-[-1] "
          style={{
            background: `radial-gradient(50.98% 52.49% at 50.1% 34.98%, rgba(33, 18, 72, 0.9) 0%, rgba(90, 50, 250, 0.3) 50%, rgba(26, 29, 62, 0.4) 100%)`,
          }}
        />
        
      </div>
      <ShowProfiles/>
    </div>
  );
};

export default AboutUsHeroSection;
