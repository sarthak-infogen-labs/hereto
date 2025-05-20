"use client";
import React, { useEffect, useState } from "react";
import { Card, CardContent } from "../ui/card";
import { CustomButton } from "../shared/CustomButtons/Buttons";
import CustomDropdown from "../shared/CustomDropdown/CustomDropdown";
import { aiFrontierOptions } from "@/constants/options";
import {
  aifrontierSectionData,
  landingPageData,
} from "@/constants/LandingPageData";

const DropdownSelectionCard = () => {
  const initialValue = aiFrontierOptions[0].value;
  const [selected, setSelected] = useState(initialValue);
  const [selectedData, setSelectedData] = useState(
    aifrontierSectionData.find((item) => item.id == initialValue)
  );


  useEffect(() => {
    setSelectedData(aifrontierSectionData.find((item) => item.id == selected));
  }, [selected]);

  return (
    <Card className="min-h-[401px] bg-blur-gradient-border py-[24px] px-[16px] px flex flex-col justify-around items-center">
      <div>
        <h1 className=" text-white text-center text-title-mobile">
          {landingPageData.aifrontierSection.title}
        </h1>
      </div>
      <div>
        <CustomDropdown
          options={aiFrontierOptions}
          value={selected}
          onChange={setSelected}
          label="Frontend Framework"
          placeholder="Choose a framework"
        />
      </div>
      <div>
        <h5 className="text-subtitle text-white text-center leading-[24px]">
          {selectedData?.data?.description}
        </h5>
      </div>
      <div className="w-full flex justify-center items-center">
        <CustomButton className="w-full max-w-[314px] mx-auto justify-center">
          {"AI Frontier"}
        </CustomButton>
      </div>
    </Card>
  );
};

export default DropdownSelectionCard;
