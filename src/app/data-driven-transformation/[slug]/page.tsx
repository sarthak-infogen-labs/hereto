"use client";

import { useParams } from "next/navigation";
import { HeroSection } from "./sections/HeroSection";
import ServiceInfoSection from "./sections/ServiceInfoSection";

export default function Page() {
  const params = useParams();
  return (
    <div className="main-container-width global-padding text-white">
      <div className="">
        <HeroSection />
      </div>
      <div className="md:mt-[200px] sm:mt-[140px] mt-[92px]">
        <ServiceInfoSection />
      </div>
    </div>
  );
}
