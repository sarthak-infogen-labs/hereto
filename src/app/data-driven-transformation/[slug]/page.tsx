"use client";

import { useParams } from "next/navigation";
import { HeroSection } from "./sections/HeroSection";
export default function Page() {
  const params = useParams();
  return (
    <div className="main-container-width global-padding text-white">
      <h1>{params.slug}</h1>
      <HeroSection />
    </div>
  );
}
