import React from "react";
import GraphicsCard from "@/components/cards/GraphicsCard";
import MainHeader from "@/components/headers/MainHeader";
import { CustomButton } from "@/components/shared/CustomButtons/Buttons";
import { landingPageData } from "@/constants/LandingPageData";
import {
  create,
  kickoff,
  kickoffbase,
  createbase,
  build,
  buildbase,
  deliver,
  deliverbase,
} from "../../../../public/images";



// ✅ GraphicsCard component rendering loop
export const GraphicsComponent = () => (
  <div className="flex flex-row items-center justify-center space-x-2">
    {landingPageData.scalableSolutionsSection.graphicCardData.map((card, index) => (
      <GraphicsCard
        key={index}
        title={card.title}
        topImage={card.topImage}
        bottomImage={card.bottomImage}
        listItems={card.listItems}
      />
    ))}
  </div>
);

// ✅ Main Section
const ScalableSolutionsSection = () => {
  return (
    <div className="relative">
      <div
        className="rounded-[100%] z-[-1] absolute top-30 left-1/2 -translate-x-1/2 w-[1018px] h-[220px] blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(90, 50, 250, 0.3) 0%, #070010 100%)",
        }}
      ></div>

      <MainHeader
        title1={landingPageData.scalableSolutionsSection.header.title1}
        title2={landingPageData.scalableSolutionsSection.header.title2}
        summary={landingPageData.scalableSolutionsSection.summary}
        hideSmallerDeviceSummary={false}
      />

      {/* Desktop */}
      <div className="mt-[72px] hidden lg:block">
        <GraphicsComponent />
      </div>

      {/* Mobile */}
      <div className="lg:hidden mt-[24px] mx-auto flex justify-center items-center">
        <CustomButton className="w-full max-w-[314px] mx-auto justify-center">
          About Us
        </CustomButton>
      </div>
    </div>
  );
};

export default ScalableSolutionsSection;
