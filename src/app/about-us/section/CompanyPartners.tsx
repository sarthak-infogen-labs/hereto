import LogosInfiniteScroll from "@/components/InfiniteScrollItems/LogosInfiniteScrol";
import React from "react";
import { IndustryPartners } from "@/constants/AboutUsPageData";


const CompanyPartners = () => {
  return (
    <div className="relative flex justify-center items-center flex-col ">
       <div
        className="absolute blur-[70px] top- md:w-[851px] max-md:w-[602px] h-[57px] rounded-full left-1/2 -translate-x-1/2 z-[-1] "
        style={{
          background: `radial-gradient(50.98% 52.49% at 50.1% 34.98%, rgba(90, 50, 250, 0.3) 50%, rgba(26, 29, 62, 0.4) 100%)`,
        }}
      />
      <h5 className="text-h3-medium text-white text-center">
        Partnering with the best technology partners in the industry.
      </h5>
      <div className="mt-[24px] main-container-width">
        <LogosInfiniteScroll
          logos={IndustryPartners.industryPartnersLogos}
          
        />
      </div>
    </div>
  );
};

export default CompanyPartners;
