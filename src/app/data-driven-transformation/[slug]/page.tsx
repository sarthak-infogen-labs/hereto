"use client";

import { useParams } from "next/navigation";
import { HeroSection } from "./sections/HeroSection";
import ServiceInfoSection from "./sections/ServiceInfoSection";
import OperationsChallengesSection from "./sections/OperationChallengesSection";
import TechnologiesSection from "./sections/TechnologiesSection";
import EngineeringServicesSection from "./sections/EngineeringServicesSection";
import DataInsightsSection from "./sections/DataInsightsSection";
export default function Page() {
  const params = useParams();
  return (
    <div className="main-container-width global-padding text-white">
      <div className="">
        <HeroSection />
      </div>
      <div className="md:mt-[200px] sm:mt-[140px] mt-[92px]">
        <ServiceInfoSection />
      </div>

      <div className="mt-[92px] lg:mt-[170px] md:mt-[120px]">
        <EngineeringServicesSection/>
      </div>

      <div className="md:mt-[170px] sm:mt-[130px] mt-[92px]">
        <OperationsChallengesSection />
      </div>
      <div className="md:mt-[170px] sm:mt-[130px] mt-[92px]">
        <TechnologiesSection />
      </div>

      <div className="mt-[92px] md:mt-[170px] sm:mt-[130px]">
        <DataInsightsSection/>
      </div>
    </div>
  );
}
