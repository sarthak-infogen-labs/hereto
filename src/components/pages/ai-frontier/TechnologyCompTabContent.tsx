import Image from "next/image";
import React from "react";
interface Technology {
  name: string;
  logo: string
}

interface TechnologyCompTabContentProps {
  technology: Technology[];
}


export const TechItem = ( data : Technology) => {
    return (
      <div className="flex items-center gap-2.5 p-0.5">
        <Image
          src={data.logo}
          alt={`logo`}
          width={30}
          height={30}
          className="aspect-[1] object-contain"
        />
        <div className="text-[#B2A8BE] text-[18px] font-semibold leading-[26px] tracking-[0.36px]">
          {data.name}
        </div>
      </div>
    );
  };

  
export default function TechnologyCompTabContent({
  technology,
}: TechnologyCompTabContentProps) {
    
    return (
      <section
        aria-label="Supported Technologies"
        className=" flex flex-col items-center justify-center py-6 text-[#B2A8BE] text-lg font-semibold tracking-[0.36px]"
      >
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 w-full max-w-screen-xl px-4 ">
          {technology.map((tech, index) => (
            <TechItem key={index}  {...tech} />
          ))}
        </div>
      </section>
    );
  }
  