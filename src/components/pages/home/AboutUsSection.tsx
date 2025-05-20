import { CustomButton } from "@/components/shared/CustomButtons/Buttons";
import BGGridGradientComponent from "@/components/shared/BGGridGradientComponent";
import { landingPageData } from "@/constants/LandingPageData";

export default function AboutUsSection() {
  return (
    <section className="md:h-[456px] relative">
      <BGGridGradientComponent />

      <div className="pt-[80px] px-30 pb-[118px]">
        <p className="text-[#D6C8EE] text-h3-medium !font-medium text-center leading-[32px] tracking-[0.36px] max-w-[1068px] mx-auto">
          {landingPageData.aboutUsSection.title}
        </p>

        <div className="flex justify-center mt-9">
          <CustomButton>About Us</CustomButton>
        </div>
      </div>
    </section>
  );
}
