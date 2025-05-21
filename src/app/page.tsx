import Hero from "@/components/pages/home/Hero";
import AIFrontierSection from "@/components/pages/home/AIFrontierSection";
import SolutionsSection from "@/components/pages/home/SolutionsSection";
import ScalableSolutionsSection from "@/components/pages/home/ScalableSolutionsSection";
import DropdownSelectionCard from "@/components/cards/DropdownSelectionCard";
import TInsights from "@/components/customCarousels/t-insights/TInsights";
import { ContactSection } from "@/components/forms/contact-form/ContactSection";

const sectionSpacing = "mt-[92px] lg:mt-[130px] xl:mt-[190px]";
import InnovationLabsSection from "@/components/pages/home/InnovationLabsSection";
import AboutUsSection from "@/components/pages/home/AboutUsSection";
import InnovateIndustries from "@/components/pages/home/InnovateIndustries";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Background decoration (optional) */}
      {/* <div className="hidden lg:block absolute top-[-100px] left-[-700px] overflow-hidden w-full">
        <WaveAnimation />
      </div> */}

      <div className="main-container-width global-padding">
        <Hero />

        <div className="mt-[92px] lg:mt-[160px] xl:mt-[260px]">
          <div className="block lg:hidden">
            <DropdownSelectionCard />
          </div>
          <div className="hidden lg:block">
            <AIFrontierSection />
          </div>
        </div>

        <div className={sectionSpacing}>
          <SolutionsSection />
        </div>

        <div className={sectionSpacing}>
          <ScalableSolutionsSection />
        </div>
        <div className={sectionSpacing}>
          <InnovateIndustries />
        </div>

        <div className="mt-[92px] lg:mt-[130px] xl:mt-[190px]">
          <AboutUsSection />
        </div>

        <div className="mt-[92px] lg:mt-[130px] xl:mt-[190px]">
          <InnovationLabsSection />
        </div>
        <div className="mt-[92px] lg:mt-[130px] xl:mt-[190px]">
          <TInsights />
        </div>

        <div className={sectionSpacing}>
          <ContactSection />
        </div>
      </div>
    </div>
  );
}
