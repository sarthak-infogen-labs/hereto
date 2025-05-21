"use client";

import Image from "next/image";
import React from "react";

type Logo = {
  icon: string; // URL or imported asset
  label: string;
};

type Props = {
  logos: Logo[];
  variant?:string;
};

const LogosInfiniteScroll = ({ logos , variant}: Props) => {
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos]; // Repeat for scroll effect

  return (
    <div className="overflow-hidden w-full py-6">
      <div className="flex w-full space-x-2 animate-scroll">
        {repeatedLogos.map((logo, index) => (
          <div
            key={index}
            className={`flex w-auto gap-2 px-6 py-4 flex-row items-center justify-center ${variant==='card'? " bg-[#332C44]/15 border border-[#332C44]":''} rounded-xl `}
          >
            <Image
              src={logo.icon}
              alt={logo.label}
              width={28}
              height={24}
              className="object-contain inline-block "
            />
            <div className=" text-[#EEE6FC] text-nowrap  ">{logo.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogosInfiniteScroll;
