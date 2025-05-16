"use client";
import ServiceCard from "@/components/cards/ServiceCard";
import MainHeader from "@/components/headers/MainHeader";
import CustomDropdown from "@/components/shared/CustomDropdown/CustomDropdown";
import Tabs from "@/components/tabs/Tabs";
import React, { useState } from "react";

const ServiceSectionComponent = () => {
  const [activeTab, setActiveTab] = useState("ai_agents");
  const [selected, setSelected] = useState("vue");

  const options = [
    { id: "1", label: "React", value: "react" },
    { id: "2", label: "Vue", value: "vue" },
    { id: "3", label: "Next-Gen Transformation", value: "angular" },
  ];
  const tabData = [
    {
      id: "sas",
      label: "Application Developement",
    },
    {
      id: "sssas",
      label: "Web Developement",
    },
    {
      id: "saaas",
      label: "Application Modernization",
    },
    {
      id: "saffs",
      label: "Quality Assurance",
    },
    {
      id: "safdddfs",
      label: "UI/UX Product Designing",
    },
    {
      id: "safqqqfs",
      label: "DevOps",
    },
  ];
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <MainHeader
          title1="Building an Intelligent Product for"
          title2="Business Success."
          summary="Bringing your vision into reality through engineering of scalable, intelligent products designed & engineered to address core business challenges."
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
            <Tabs data={tabData} />
          </div>
        </div>

        <div className="max-w-[1180px] mx-auto">
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};

export default ServiceSectionComponent;
