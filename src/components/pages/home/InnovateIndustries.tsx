import Image from "next/image";
import React from "react";
import {
  learningIcon,
  fintechIcon,
  gamingIcon,
  industryIcon,
  logisticsIcon,
  healthIcon,
  highTech,
} from "../../../../public/images";
import LogosInfiniteScroll from "@/components/InfiniteScrollItems/LogosInfiniteScrol";
import { logo } from "@/constants/AIFrontierPageData";
import { landingPageData } from "@/constants/LandingPageData";


const industries = [
  { icon: healthIcon, label: "Healthcare" },
  { icon: fintechIcon, label: "BFSI" },
  { icon: logisticsIcon, label: "Retail" },
  { icon: learningIcon, label: "Ed-Tech" },
  { icon: industryIcon, label: "Manufacturing" },
  { icon: gamingIcon, label: "Media & Entertainment" },
  { icon: highTech, label: "Hi-Tech" },
];



const InnovateIndustries = () => {
  const firstRow = industries.slice(0, 4);
  const secondRow = industries.slice(4);

  const boxClasses =
    "bg-[#332C44]/15 border border-[#332C44] flex gap-2.5 items-center justify-center px-[22px] py-[28px] rounded-xl xl:min-w-[257px]";

  return (
    <div className="relative py-10 w-full">
      <h2 className="text-center text-white text-h3-medium   leading-[52px]">
        {landingPageData.industriesInnovateSection.header.title1}
      </h2>

      <p className="text-center text-[#D6C8EE] text-body-sm leading-[24px] tracking-[0.36px] mt-6">
        {landingPageData.industriesInnovateSection.summary}
      </p>

      {/* Background Blur */}
      <div
        className="rounded-full z-[-1] absolute top-30 left-1/2 -translate-x-1/2 w-[1018px] h-[110px] blur-[100px] opacity-50"
        style={{
          background:
            "radial-gradient(circle, rgba(90, 50, 250, 1) 0%, #070010 100%)",
        }}
      />

      {/* Grid Layout */}
      <div className="mt-9 space-y-4">
        {/* First Row - 4 items */}
        {/* First Row - 4 items on lg, 2 on md, 1 on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-[1122px] mx-auto">
          {firstRow.map((industry, index) => (
            <div key={index} className={boxClasses}>
              <Image
                src={industry.icon}
                alt={industry.label.toLowerCase()}
                className="w-6 h-6"
              />
              <p className="text-[16px] leading-6 tracking-[0.048px] text-[#D6C8EE]">
                {industry.label}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - 3 items centered */}
        <div className="flex flex-col md:flex-row justify-center gap-4 flex-wrap">
          {secondRow.map((industry, index) => (
            <div key={index} className={boxClasses}>
              <Image
                src={industry.icon}
                alt={industry.label.toLowerCase()}
                className="w-6 h-6"
              />
              <p className="text-[16px] leading-6 tracking-[0.048px] text-[#D6C8EE]">
                {industry.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex w-full  flex-col mt-18">
        <LogosInfiniteScroll
          logos={landingPageData.industriesInnovateSection.logoLabel}
          variant='card'
        />
        {/* <PartnersSection /> */}
      </div>
    </div>
  );
};

export default InnovateIndustries;
