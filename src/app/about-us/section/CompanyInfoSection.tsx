import { aboutUsPageData } from "@/constants/AboutUsPageData";
import React from "react";


const CompanyInfoCard = ({
  count,
  title,
}: {
  count: number;
  title: string;
}) => {
  const [firstWord, ...restWords] = title.split(" ");
  const rest = restWords.join(" ");

  return (
    <div>
      <div className="flex items-center lg:items-start gap-4">
        <div className="text-lg text-secondary font-bold">{count}+</div>
        <div className="text-[1rem]  font-medium  text-white leading-tight">
          {/* Small screens: show title normally */}
          <span className="block lg:hidden">{title}</span>

          {/* Large screens: first word on one line, rest on next line */}
          <span className="hidden lg:block">
            {firstWord}
            <br />
            {rest}
          </span>
        </div>
      </div>
    </div>
  );
};

const CompanyInfoSection = () => {
  return (
    <div>
      <div
        className="
            min-h-[132px]
            px-[22px]
            py-[22px]
            lg:py-[42px]
            rounded-[8px]
            border
            border-[#332C44]
            backdrop-blur-[54px]
            bg-[#4C436424]
            flex
            flex-col md:flex-row
            gap-4
            justify-between
            flex-wrap
            items-center md:items-start
            text-center md:text-left
          "
      >
        {aboutUsPageData.companyData.map((item, index) => {
          return (
            <CompanyInfoCard
              count={item.count}
              title={item.title}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CompanyInfoSection;
