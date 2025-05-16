import React from "react";
import AboutUsHeroSection from "./section/AboutUsHeroSection";
import CompanyInfoSection from "./section/CompanyInfoSection";
import CompanyPartners from "./section/CompanyPartners";

const page = () => {
  return (
    <div>
      {/* <AboutUsHeroSection /> */}

      <div className="main-container-width global-padding">
        {/* <CompanyInfoSection /> */}
        <CompanyPartners/>
      </div>
    </div>
  );
};

export default page;
