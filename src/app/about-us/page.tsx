import React from "react";

// Sections
import AboutUsHeroSection from "./section/AboutUsHeroSection";
import CompanyInfoSection from "./section/CompanyInfoSection";
import CompanyPartners from "./section/CompanyPartners";
import LeaderShipTeamSection from "./section/LeaderShipTeamSection";
import TestimonialsSection from "./section/TestimonialsSection";

// Forms
import { ContactSection } from "@/components/forms/contact-form/ContactSection";
import OurStorySection from "./section/OurStorySection";

// Utility wrapper to handle section spacing
const SectionWrapper = ({
  children,
  spacing = "mt-[92px] lg:mt-[120px] xl:mt-[152px]",
}: {
  children: React.ReactNode;
  spacing?: string;
}) => <div className={spacing}>{children}</div>;

const Page = () => {
  return (
    <div>
      <AboutUsHeroSection />

      <div className="main-container-width global-padding">
        <SectionWrapper>
          <OurStorySection />
        </SectionWrapper>

        <SectionWrapper spacing="mt-[36px] lg:mt-[48px] xl:mt-[62px]">
          <CompanyInfoSection />
        </SectionWrapper>

        <SectionWrapper spacing="mt-[92px] lg:mt-[140px] xl:mt-[195px]">
          <CompanyPartners />
        </SectionWrapper>

        <SectionWrapper>
          <LeaderShipTeamSection />
        </SectionWrapper>

        <SectionWrapper spacing="mt-[92px] lg:mt-[145px] xl:mt-[200px]">
          <TestimonialsSection />
        </SectionWrapper>

        <SectionWrapper spacing="mt-[92px] lg:mt-[110px] xl:mt-[135px]">
          <ContactSection />
        </SectionWrapper>
        {/* <CompanyInfoSection /> */}
        {/* <CompanyPartners/> */}
        {/* <LeaderShipTeamSection/> */}
      </div>
    </div>
  );
};

export default Page;
