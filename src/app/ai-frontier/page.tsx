import React from "react";
import AIFrontierHero from "./sections/AIFrontierHero";
import EnterpriseAutomationComponent from "./sections/EnterpriseAutomationComponent";
import TInsights from "@/components/customCarousels/t-insights/TInsights";
import TechnologiesSection from "./sections/TechnologiesSection";

const page = () => {
  return (
    <div className="main-container-width global-padding">
      <AIFrontierHero />
      <EnterpriseAutomationComponent />
      <div className="mt-[92px] lg:mt-[135px] xl:mt-[170px]">
        <TechnologiesSection />
      </div>
      <div className="mt-[92px] lg:mt-[140px] xl:mt-[264px]">
        <TInsights />
      </div>
    </div>
  );
};

export default page;
