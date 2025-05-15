import { CustomButton } from "@/components/shared/CustomButtons/Buttons";
import { cn } from "@/lib/utils";
import React from "react";

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
        "flex justify-center flex-1 max-md:w-full ",
        isReversed ? "md:justify-start" : "md:justify-end"
      )}
    >
      <img
        src={imageSrc}
        className="w-full max-w-[475px] rounded-xl object-contain"
        alt={title}
      />
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
