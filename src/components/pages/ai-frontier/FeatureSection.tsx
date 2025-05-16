import { CustomButton } from "@/components/shared/CustomButtons/Buttons";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  isReversed?: boolean;
}

export const FeatureSection = ({
  title,
  description,
  imageSrc,
  isReversed = false,
}: FeatureSectionProps) => {
  const contentSection = (
    <div className="flex flex-col justify-center gap-6 flex-1  py-6 ">
      <h2 className="text-[#EEE6FC] text-h4">{title}</h2>
      <p className="text-[#D6C8EE] max-w-[480px]">{description}</p>
      <div>
        <CustomButton>{"Explore More"}</CustomButton>
      </div>
    </div>
  );

  const imageSection = (
    <div
      className={cn(
        "flex justify-center flex-1 max-md:w-full",
        isReversed ? "md:justify-start" : "md:justify-end"
      )}
    >
      <div className="relative w-full max-w-[475px]">
        <div
          className="absolute w-[300px] h-[300px]  left-20 bottom-20 blur-[100px] z-[-1] opacity-90 "
          style={{
            background: `radial-gradient(
          circle,
          rgba(147, 110, 226, 1) 0%,
          rgba(90, 50, 250, 0.2) 50%,
          rgba(26, 29, 62, 0) 100%
        )`,
          }}
        />

        <Image
          src={imageSrc}
          width={475} 
          height={291} // Add appropriate height (adjust as needed)
          className="w-full max-w-[475px] rounded-xl object-contain"
          alt={title}
        />
      </div>
    </div>
  );

  return (
    <div className="w-full">
      <div
        className={cn(
          "flex flex-col md:flex-row items-center  justify-between",
          isReversed && "md:flex-row-reverse"
        )}
      >
        {contentSection}
        {imageSection}
      </div>
    </div>
  );
};
