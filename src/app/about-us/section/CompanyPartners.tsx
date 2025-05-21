import LogosInfiniteScroll from "@/components/InfiniteScrollItems/LogosInfiniteScrol";
import TechnologyCompTabContent from "@/components/pages/ai-frontier/TechnologyCompTabContent";
import { logo } from "@/constants/AIFrontierPageData";
import React from "react";
import { IndustryPartners } from "@/constants/AboutUsPageData";


const CompanyPartners = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h5 className="text-h4 text-white text-center">
        Partnering with the best technology partners in the industry.
      </h5>
      <div className="mt-[24px]">
        <LogosInfiniteScroll
          logos={IndustryPartners.industryPartnersLogos}
          page='about-us'
        />
      </div>
    </div>
  );
};

export default CompanyPartners;
