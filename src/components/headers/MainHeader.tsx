import { cn } from "@/lib/utils";
import React from "react";

const MainHeader = ({
  title1,
  title2,
  summary,
  hideSmallerDeviceSummary = false,
}: {
  title1: string;
  title2: string;
  summary: string;
  hideSmallerDeviceSummary?: boolean;
}) => {
  return (
    <div className="flex flex-col items-center mx-auto">
      <div className="">
        <p className="text-[#EEE6FC] text-h1 font-semibold max-w-[930px] text-center">
          {title1}
          <br />
          {title2}
        </p>
      </div>

      <div
        className={cn(
          "mt-[36px]",
          hideSmallerDeviceSummary && "hidden md:block"
        )}
      >
        <p className="text-[#D6C8EE] text-[18px] leading-[26px] font-normal max-w-[806px] tracking-[0.036px] text-center">
          {summary}
        </p>
      </div>
    </div>
  );
};

export default MainHeader;
