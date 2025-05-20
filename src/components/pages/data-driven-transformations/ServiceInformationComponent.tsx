import { CustomButton } from "@/components/shared/CustomButtons/Buttons";
import React from "react";

interface ServiceInfoSectionProps {
  heading: string;
  paragraphs: string[];
  buttonText: string;
  onButtonClick?: () => void;
}

export const ServiceInformationComponent = ({
  heading,
  paragraphs,
  buttonText,
}: ServiceInfoSectionProps) => {
  return (
    <section className="">
      <div className="w-full max-w-[1180px] mx-auto rounded-xl bg-[#332C44]/14 backdrop-blur-md border border-[#332C44] md:px-25 md:py-[50px] sm:py-[30px] sm:px-10 px-2 py-[30px] flex flex-col items-center text-center">
        <h2 className="text-[24px] md:text-[32px] leading-[34px] font-bold text-[#EEE6FC] mb-13">
          {heading}
        </h2>
        <div className="md-13">
          {paragraphs.map((text, idx) => (
            <p
              key={idx}
              className={`text-body-sm text-[#EEE6FC] mb-4 ${
                idx === paragraphs.length - 1 ? "mb-10" : ""
              }`}
            >
              {text}
            </p>
          ))}
        </div>
        <CustomButton> {buttonText} </CustomButton>
      </div>
    </section>
  );
};
