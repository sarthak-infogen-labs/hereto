import WaveAnimation from "@/components/animatedAssets/WaveAnimation";
import DropdownSelectionCard from "@/components/cards/DropdownSelectionCard";
import AIFrontierSection from "@/components/pages/home/AIFrontierSection";
import Hero from "@/components/pages/home/Hero";
import SolutionsSection from "@/components/pages/home/SolutionsSection";

export default function Home() {
  return (
    <div className="relative">
      <div className="hidden lg:block absolute top-[-100px] left-[-700px]">
        {/* <WaveAnimation /> */}
      </div>
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
        <div className="mt-[92px] lg:mt-[130px] xl:mt-[190px]">
          <SolutionsSection />
        </div>
      </div>
    </div>
  );
}
