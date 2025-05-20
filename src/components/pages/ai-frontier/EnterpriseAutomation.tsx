import MainHeader from "@/components/headers/MainHeader";
import React from "react";
import { FeatureSection } from "./FeatureSection";
import { aiFrontierPageData } from "@/constants/AIFrontierPageData";

export const EnterpriseAutomation: React.FC = () => {
  const title1 = aiFrontierPageData.enterpriseAutomationSection.header.title1;
  const title2 = aiFrontierPageData.enterpriseAutomationSection.header.title2;
  const sectionDescription =
    aiFrontierPageData.enterpriseAutomationSection.sectionDescription;

  return (
    <section
      className="bg-[#070010]/12 border overflow-hidden px-10 py-[24px] lg:py-[55px] xl:py-[80px] rounded-3xl border-[#322B43] max-md:px-5  backdrop-blur-2xl "
      aria-labelledby="enterprise-automation-title"
    >
      <MainHeader
        title1={title1}
        title2={title2}
        summary={sectionDescription}
      />

      <div className="flex flex-col space-y-[72px] mt-[52px] lg:[90px] lg:mt-[122px]">
        {aiFrontierPageData.enterpriseAutomationSection.features.map(
          (feature, index) => (
            <FeatureSection
              key={index}
              title={feature.title}
              description={feature.description}
              imageSrc={feature.imageSrc}
              isReversed={feature.isReversed}
            />
          )
        )}
      </div>
    </section>
  );
};
