"use client";

import React, { useEffect, useState } from "react";
import ServiceCard from "@/components/cards/ServiceCard";
import MainHeader from "@/components/headers/MainHeader";
import CustomDropdown from "@/components/shared/CustomDropdown/CustomDropdown";
import Tabs from "@/components/tabs/Tabs";
import { aiMlCoeTabsData, aiMlPageData } from "@/constants/AiMlPageData";
import {
  dataDrivenCoeTabsData,
  dataDrivenPageData,
} from "@/constants/DataDrivenPageData";
import { aiCoeOptions, dataDrivenCoeOptions } from "@/constants/options";

const ServiceSectionComponent = ({ id }: { id: string }) => {
  const serverSectionData = [
    {
      id: "ai-ml",
      options: aiCoeOptions,
      title1: aiMlPageData.pageData.coeServiceSection.title1,
      title2: aiMlPageData.pageData.coeServiceSection.title2,
      summary: aiMlPageData.pageData.coeServiceSection.summary,
      tabsData: aiMlCoeTabsData,
    },
    {
      id: "data-driven-transformation",
      options: dataDrivenCoeOptions,
      title1: dataDrivenPageData.pageData.coeServiceSection.title1,
      title2: "",
      summary: dataDrivenPageData.pageData.coeServiceSection.summary,
      tabsData: dataDrivenCoeTabsData,
    },
  ];

  const sectionData = serverSectionData.find((item) => item.id === id);

  const tabsData = sectionData?.tabsData || [];
  const options = sectionData?.options || [];

  // ✅ Fix: initialize selected with the first tab ID
  const [selected, setSelected] = useState(() => tabsData[0]?.id || "");
  const [selectedData, setSelectedData] = useState(() =>
    tabsData.find((item) => item.id === selected)
  );

  useEffect(() => {
    const updatedData = tabsData.find((item) => item.id === selected);
    setSelectedData(updatedData);
  }, [selected, tabsData]);

  if (!sectionData) return null; // Or render fallback/error UI

  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <MainHeader
          title1={sectionData.title1}
          title2={sectionData.title2}
          summary={sectionData.summary}
          hideSmallerDeviceSummary={true}
        />

        <div className="mt-[41px] lg:mt-[58px] xl:mt-[78px]">
          <div className="block lg:hidden">
            <CustomDropdown
              options={options}
              value={selected}
              onChange={setSelected}
              label="Frontend Framework"
              placeholder="Choose a framework"
            />
          </div>
          <div className="hidden lg:block">
            <Tabs
              data={options}
              value={selected}
              onChange={(id) => setSelected(id)}
            />
          </div>
        </div>

        <div className="max-w-[1180px] mx-auto">
          <ServiceCard
            title={selectedData?.title || ""}
            summary={selectedData?.summary || ""}
            technologies={selectedData?.technologies || []}
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceSectionComponent;
