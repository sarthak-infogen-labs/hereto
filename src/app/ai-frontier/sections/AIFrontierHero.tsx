import { CustomButton } from "@/components/shared/CustomButtons/Buttons";
import React from "react";
import Image from "next/image";
import AnimatedSvg from "../../../components/animatedAssets/AnimatedSvg";

const AIFrontierHero = () => {
  return (
    <div className="relative mt-[80px] lg:[140px] xl:mt-[175px]  pb-[120px] lg:pb-[180px]  xl:pb-[234px] ">
      <div className="absolute w-full h-full ">
        <Image
          src="/images/ai-frontier-hero-section/grid-png.png"
          alt="Borderlines"
          fill
          className="object-cover mask-radial-fade  opacity-40"
        />

        <div
          className="absolute blur-[70px] top-[80%] w-full h-[259px] rounded-full left-1/2 -translate-x-1/2 z-[-1] "
          style={{
            background: `radial-gradient(50.98% 52.49% at 50.1% 34.98%, rgba(125, 42, 232, 0.9) 0%, rgba(33, 18, 72, 0.2) 50%, rgba(26, 29, 62, 0.4) 100%)`,
          }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 bottom-15
             max-md:w-[150px] max-md:h-[96px] 
             max:w-[105.31px] max:h-[67.07px] 
             max-sm:bottom-[40px]
             max-md:opacity-60"
        >
          <AnimatedSvg />
        </div>

        <Image
          src="/images/ai-frontier-hero-section/Vector 245.svg"
          alt="Borderlines"
          width={1440}
          height={100}
          className="absolute top-[92%] left-0 "
        />
      </div>
      <div className=" ">
        <div className=" text-center">
          <div className="">
            <h1 className="text-display text-white wrap-break-word">
              Accelerate Enterprise{" "}
              <span className="whitespace-nowrap">Productivity with</span>
              <span className="bg-gradient-to-r from-[#00C4CC] to-[#7D2AE8] bg-clip-text text-transparent whitespace-nowrap">
                {" "}
                Futuristic AI.
              </span>
            </h1>
          </div>

          <div className="w-full flex justify-center mt-[36px]">
            <p className="text-[#D6C8EE]  text-body leading-6 tracking-[0.36px]  w-full">
              We engineer solutions that integrate context-aware intelligence
              into every layer of your operations
            </p>
          </div>

          <div className="mt-[39px]">
            <CustomButton className="bg-transparent backdrop-blur-md">
              {"Consult with Data Expert"}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFrontierHero;
