import { CustomButton } from "@/components/shared/CustomButtons/Buttons";
import { ArrowRightIcon } from "lucide-react";
import React from "react";

const AIFrontierHero = () => {
  return (
    <div className="mt-[80px] lg:[140px] xl:mt-[175px]">
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

      <div className="">
        <div
          className="absolute blur-[100px] w-full h-[300px] -bottom-[260px] left-1/2 -translate-x-1/2 z-[-1] opacity-60"
          style={{
            background: `radial-gradient(
              circle,
              rgba(125, 42, 232, 0.5) 0%,
              rgba(90, 50, 250, 0.2) 50%,
              rgba(26, 29, 62, 0) 100%
          )`,
          }}
        />
      </div>
    </div>
  );
};

export default AIFrontierHero;
