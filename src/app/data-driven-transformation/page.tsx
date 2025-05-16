import TInsights from "@/components/customCarousels/t-insights/TInsights";
import ConsultSection from "./sections/ConsultSection";
import DataDrivenHeroSection from "./sections/DataDrivenHeroSection";

export default function Page() {
    return (
        <div className="main-container-width global-padding">
            <DataDrivenHeroSection />
            
            <div className="mt-[92px] lg:mt-[135px] xl:mt-[170px]">
                
            </div>
            <div className="mt-[92px] lg:mt-[140px] xl:mt-[264px]">
                <TInsights />
            </div>
            <div className="md:mt-[92px] mt-10"> 
                <ConsultSection />
            </div>
        </div>
    );
}