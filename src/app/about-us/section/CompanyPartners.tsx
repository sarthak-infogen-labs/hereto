import LogosInfiniteScroll from "@/components/InfiniteScrollItems/LogosInfiniteScrol";
import TechnologyCompTabContent from "@/components/pages/ai-frontier/TechnologyCompTabContent";
import { logo } from "@/constants/AIFrontierPageData";
import React from "react";

const CompanyPartners = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <h5 className="text-h4 text-white text-center">
        Partnering with the best technology partners in the industry.
      </h5>
      <div className="mt-[24px]">
        <LogosInfiniteScroll
          images={[logo, logo, logo, logo, logo, logo, logo, logo]}
        />
      </div>
    </div>
  );
};

export default CompanyPartners;
