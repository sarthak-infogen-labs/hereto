import ConsultSection from "./sections/ConsultSection";
import ProductEngineeringHeroSection from "./sections/ProductEngineeringHeroSection";
import TInsights from "@/components/customCarousels/t-insights/TInsights";
export default function Page() {
    return (
        <div className="main-container-width global-padding">
            <ProductEngineeringHeroSection />

            <div className="mt-[92px] lg:mt-[135px] xl:mt-[170px]">
                <TInsights />
            </div>
            <div className="md:mt-[92px] mt-10">
                <ConsultSection />
            </div>
        </div>
    );
}