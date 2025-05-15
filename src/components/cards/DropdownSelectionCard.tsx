"use client";
import React, { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { CustomButton } from "../shared/CustomButtons/Buttons";
import CustomDropdown from "../shared/CustomDropdown/CustomDropdown";

const options = [
  { id: "1", label: "React", value: "react" },
  { id: "2", label: "Vue", value: "vue" },
  { id: "3", label: "Next-Gen Transformation", value: "angular" },
];

const DropdownSelectionCard = () => {
  const [selected, setSelected] = useState("vue");
  return (
    <Card className="min-h-[401px] bg-blur-gradient-border py-[24px] px-[16px] px flex flex-col justify-around items-center">
      <div>
        <h1 className=" text-white text-center text-title-mobile">
          Advancing Towards Artificial General Intelligence
        </h1>
      </div>
      <div>
        <CustomDropdown
          options={options}
          value={selected}
          onChange={setSelected}
          label="Frontend Framework"
          placeholder="Choose a framework"
        />
      </div>
      <div>
        <h5 className="text-subtitle text-white text-center leading-[24px]">
          We design and develop intelligent agent systems that can autonomously
          execute tasks based on predefined goals. These systems are built with
          capabilities like memory, contextual awareness, and adaptive
          reasoning, allowing them to make informed decisions and dynamically
          adjust actions in real time.
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
