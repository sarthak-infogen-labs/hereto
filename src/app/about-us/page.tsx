import React from "react";
import AboutUsHeroSection from "./section/AboutUsHeroSection";
import CompanyInfoSection from "./section/CompanyInfoSection";
import CompanyPartners from "./section/CompanyPartners";
import LeaderShipTeamSection from "./section/LeaderShipTeamSection";
import TestimonialsSection from "./section/TestimonialsSection";

const page = () => {
  return (
    <div>
      {/* <AboutUsHeroSection /> */}

      <div className="main-container-width global-padding">
        <CompanyInfoSection />
        <CompanyPartners />
        <LeaderShipTeamSection />
      </div>
      <div className="main-container-width global-padding mt-[75px]">
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default page;
