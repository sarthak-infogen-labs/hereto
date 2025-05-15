"use client";
import Tabs from "@/components/tabs/Tabs";
import { useState } from "react";
import TechnologyCompTabContent from "./TechnologyCompTabContent";
import CustomDropdown from "@/components/shared/CustomDropdown/CustomDropdown";

export default function TechnologyComp() {
  const [activeTab, setActiveTab] = useState("ai_agents");
  const [selected, setSelected] = useState("vue");

  const options = [
    { id: "1", label: "React", value: "react" },
    { id: "2", label: "Vue", value: "vue" },
    { id: "3", label: "Next-Gen Transformation", value: "angular" },
  ];

  const data = [
    {
      id: "ai-agents",
      label: "AI Agents",
    },
    {
      id: "mcp-a2a",
      label: "MCP & A2A",
    },
    {
      id: "rag",
      label: "RAG",
    },
    {
      id: "ipa",
      label: "IPA",
    },
  ];
  return (
    <div className="flex justify-center items-center flex-col">
      {/* Tab buttons */}

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
        <Tabs data={data} />
      </div>

      {/* Tab content */}
      <div className="container mx-auto mt-[36px]">
        <TechnologyCompTabContent />
      </div>
    </div>
  );
}
