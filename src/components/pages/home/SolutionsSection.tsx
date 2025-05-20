"use client";
import SolutionsCards from "@/components/cards/SolutionsCards";
import MainHeader from "@/components/headers/MainHeader";
import Tabs from "@/components/tabs/Tabs";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FeatureBadge from "@/components/badge/FeaturedBadge";
import CustomDropdown from "@/components/shared/CustomDropdown/CustomDropdown";
import ReadMoreLink from "@/components/shared/CustomLinks/ReadMoreLink";
import {
  landingPageData,
  solutionsSectionData,
} from "@/constants/LandingPageData";
import { solutionsOptions } from "@/constants/options";

const options = [
  { id: "1", label: "React", value: "react" },
  { id: "2", label: "Next-Gen Transformation", value: "vue" },
  { id: "3", label: "Agentic AI", value: "angular" },
];

const SolutionsSection = () => {
  const initialSolutionId = solutionsOptions[0].id;

  const [selectedSolutions, setSelectedSolutions] = useState(initialSolutionId);

  const [selectedSolutionsData, selectedSolutionData] = useState(
    solutionsSectionData.find((item) => item.id == initialSolutionId)
  );

  useEffect(() => {
    selectedSolutionData(
      solutionsSectionData.find((item) => item.id == selectedSolutions)
    );
  }, [selectedSolutions]);

  return (
    <div>
      <div className="">
        <div className="flex flex-col items-center mx-auto">
          <MainHeader
            title1={landingPageData.solutionSection.header.title1}
            title2={landingPageData.solutionSection.header.title2}
            summary={landingPageData.solutionSection.summary}
            hideSmallerDeviceSummary={true}
          />
          <div className="hidden md:block">
            <div className="mt-19 w-full flex justify-center flex-col items-center">
              <Tabs
                data={solutionsOptions}
                value={selectedSolutions}
                onChange={(id) => setSelectedSolutions(id)}
              />

              <div className="mt-[56px]">
                <motion.div
                  key={0}
                  className="max-w-[1180px] mx-auto cursor-pointer"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                  <div className="w-full flex gap-2 relative">
                    <div className="absolute z-[1] w-[278px] h-[278px] rounded-[100%] blur-[100px] bg-[radial-gradient(circle_at_center,_rgba(28,0,65,0.7)_0%,_rgba(103,111,255,0.7)_100%)] opacity-70 top-15 left-[calc(50%-330px)]"></div>
                    <SolutionsCards
                      title={selectedSolutionsData?.data.title || ""}
                      badges={selectedSolutionsData?.data.badges || []}
                      description={
                        selectedSolutionsData?.data.description || ""
                      }
                    />

                    <div className="col-span-1 flex items-start justify-center flex-1">
                      <Image
                        src={selectedSolutionsData?.data.image}
                        alt="CoE"
                        width={535}
                        height={410}
                        className="max-h-[300px]"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <div className="flex flex-col justify-center items-center text-center">
              <div className="mt-[40px]">
                <CustomDropdown
                  options={solutionsOptions}
                  value={selectedSolutions}
                  onChange={(id) => {
                    console.log(id);
                    setSelectedSolutions(id);
                  }}
                  label="Frontend Framework"
                  placeholder="Choose a framework"
                />
              </div>
              <p className="font-normal text-[16px] leading-6 tracking-[0.032px] text-[#E3E3E3] mt-[24px]">
                {selectedSolutionsData?.data.description}
              </p>
              <div className="mt-[12px]">
                <ReadMoreLink
                  href={selectedSolutionsData?.data.readMoreLink || "#"}
                />
                ;
              </div>
              <div className="mt-[24px]">
                <Image
                  src={selectedSolutionsData?.data.image}
                  alt="CoE"
                  width={535}
                  height={410}
                  className="max-h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
