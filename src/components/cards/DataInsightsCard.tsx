"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react"

export interface DataInsightsCardProps {
  percentageHighlight: string;
  subHighlight: string;
  platform: string;
  industry: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

const DataInsightsCard: React.FC<DataInsightsCardProps> = ({
  percentageHighlight,
  subHighlight,
  platform,
  industry,
  title,
  description,
  ctaText,
  ctaLink,
  backgroundImage,
}) => {
  return (
    <div className="relative w-[100%] h-[540px] max-md:h-[558px] flex items-end justify-center mx-auto">
      <div className="absolute inset-0 -z-10 ">
        <Image  
          src={backgroundImage}
          alt="Case Study Background"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-70 rounded-xl"
          priority
        />
      </div>

      <div className="bg-[#070010]/40 backdrop-blur-2xl rounded-lg md:p-8 max-md:p-5 md:border-[0.7px] max-md:border-t-[0.7px] border-[#B2A8BE]  w-full md:m-8 ">
        <div className=" flex justify-between gap-4 text-[#EEE6FC]">
          <div className="max-lg:hidden w-1/4 flex flex-col items-center justify-between ">
            <div className="text-display font-bold mb-2 flex items-center justify-center h-4/5 ">
              {percentageHighlight}
            </div>
            <div className="text-base text-center">{subHighlight}</div>
          </div>
          <div className=" w-3/4 max-lg:w-full">
            <div className="flex gap-2 lg:hidden !font-medium text-body-sm mb-4 ">
              <span>{percentageHighlight}</span>
              <span>{subHighlight}</span>
            </div>
            <div className="flex max-lg:flex-col max-lg:gap-3 justify-between text-body-sm mb-4 ">
              <span>{platform}</span>
              <span>{industry}</span>
            </div>
            <div className=" my-6 text-h5 gap-2 flex flex-col">
              <h2 className=" font-semibold">{title}</h2>
              <p className="text-body-sm !font-normal  leading-[26px] ">{description}</p>
            </div>
            <Link
              href={ctaLink}
              className=" hover:underline text-[16px] flex items-center gap-1"
            >
              {ctaText} <ArrowRight className="w-[20px]"/>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default DataInsightsCard;
