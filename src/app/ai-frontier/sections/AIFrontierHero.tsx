import { CustomButton } from "@/components/shared/CustomButtons/Buttons";
import React from "react";
import Image from "next/image";

const AIFrontierHero = () => {
  return (
    <div className="relative mt-[80px] lg:[140px] xl:mt-[175px]  pb-[120px] lg:pb-[180px]  xl:pb-[234px] ">
      <div className="absolute w-full h-full ">
        <Image
          src="/images/grid.svg"
          alt="Borderlines"
          fill
          className="object-cover  mask-radial-fade"
        />

        <div
          className="absolute blur-[100px] top-1/2 w-full h-[300px]  left-1/2 -translate-x-1/2 z-[-1] opacity-60"
          style={{
            background: `radial-gradient(
              circle,
              rgba(125, 42, 232, 0.5) 0%,
              rgba(90, 50, 250, 0.2) 50%,
              rgba(26, 29, 62, 0) 100%
              )`,
          }}
        />
        <Image
          src="/images/ai-frontier-hero-section/Group 244.svg"
          alt="Borderlines"
          width={201}
          height={128}
          className="absolute left-1/2 -translate-x-1/2 bottom-15
             max-md:w-[150px] max-md:h-[96px] 
             max:w-[105.31px] max:h-[67.07px] 
             max-sm:bottom-[40px]
             max-md:opacity-60"
        />

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
            <CustomButton className="bg-transparent">
              {"Consult with Data Expert"}
            </CustomButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFrontierHero;
