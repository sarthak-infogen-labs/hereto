// components/cards/ServiceCard.tsx
import Image from "next/image";
import React from "react";
import { CustomButton } from "../shared/CustomButtons/Buttons";

interface Technology {
  icon: string;
  label: string;
}

interface ServiceCardProps {
  title: string;
  summary: string;
  technologies: Technology[];
  image?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  summary,
  technologies,
  image = "/images/application_dummy.svg", // fallback image
}) => {
  return (
    <div className="min-h-[321px] mt-[24px] lg:mt-[30px] xl:mt-[36px]">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section */}
        <div className="flex-1 order-1 lg:order-none">
          {/* Title - only visible on lg+ */}
          <h2 className="hidden lg:block text-h3 lg:!text-[2rem] text-white">
            {title}
          </h2>

          {/* Summary paragraph */}
          <p className="text-white text-body-sm !font-normal">{summary}</p>

          {/* Mobile Image */}
          <div className="mt-[24px] block lg:hidden">
            <Image
              src={image}
              width={472}
              height={262}
              alt={title}
              className="w-full max-h-[262px]"
            />
          </div>

          {/* Technologies */}
          <div className="flex justify-between lg:justify-start items-center gap-4 mt-[16px] flex-wrap">
            {technologies.map((tech, index) => (
              <div
                className="flex items-center gap-2 text-white text-sm "
                key={index}
              >
                <Image height={24} width={24} src={tech.icon} alt={tech.label} />
                <p className="text-body-sm text-white !font-semibold">{tech.label}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-[24px] lg:mt-[30px] xl:mt-[36px] flex justify-center lg:justify-start">
            <CustomButton className="w-full bg-transparent max-w-[350px] lg:w-auto">
              Explore More
            </CustomButton>
          </div>
        </div>

        {/* Desktop Image */}
        <div className="flex-1 hidden lg:flex lg:justify-end lg:items-center">
          <Image
            src={image}
            width={472}
            height={262}
            alt={title}
            className="max-h-[262px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
