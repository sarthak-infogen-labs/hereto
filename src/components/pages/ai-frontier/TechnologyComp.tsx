"use client";
import Tabs from "@/components/tabs/Tabs";
import { useEffect, useState } from "react";
import TechnologyCompTabContent from "./TechnologyCompTabContent";
import CustomDropdown from "@/components/shared/CustomDropdown/CustomDropdown";
import { aiOptions } from "@/constants/options";
import { aiTechnologiesData } from "@/constants/AIFrontierPageData";

export default function TechnologyComp() {
  const selectedTechId = aiOptions[0].id;
  const [selected, setSelected] = useState(selectedTechId);
  const [selectedTechnologyData, setTechnologyData] = useState(
    aiTechnologiesData.find((item) => item.id == selectedTechId)
  );

  useEffect(() => {
    setTechnologyData(aiTechnologiesData.find((item) => item.id == selected));
  }, [selected]);

  return (
    <div className="flex justify-center items-center flex-col">
      {/* Tab buttons */}

      <div className="block lg:hidden">
        <CustomDropdown
          options={aiOptions}
          value={selected}
          onChange={setSelected}
          label="Frontend Framework"
          placeholder="Choose a framework"
        />
      </div>
      <div className="hidden lg:block">
        <Tabs
          data={aiOptions}
          value={selected}
          onChange={(id) => setSelected(id)}
        />
      </div>

      {/* Tab content */}
      <div className="container mx-auto mt-[36px]">
        <TechnologyCompTabContent />
      </div>
    </div>
  );
}
