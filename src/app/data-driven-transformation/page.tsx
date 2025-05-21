import TInsights from "@/components/customCarousels/t-insights/TInsights";
import ConsultSection from "./sections/ConsultSection";
import DataDrivenHeroSection from "./sections/DataDrivenHeroSection";
import ServiceSectionComponent from "@/components/pages/solutions/ServiceSectionComponent";
export default function Page() {
    return (
        <div className="main-container-width global-padding">
            <DataDrivenHeroSection />
            <div className="mt-[92px] lg:mt-[135px] xl:mt-[250px]">
                <ServiceSectionComponent id="data-driven-transformation"/>
            </div>
            <div className="mt-[92px] lg:mt-[140px] xl:mt-[264px]">
                <TInsights />
            </div>
            <div className="md:mt-[92px] mt-20"> 
                <ConsultSection />
            </div>
        </div>
    );
}