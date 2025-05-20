import { Hero } from "./sections/Hero";
import ContentsSection from "./sections/ContentsSection";
import { ContactSection } from "@/components/forms/contact-form/ContactSection";
export default function Page() {
  return (
    <div>
      <Hero />
      <div className="main-container-width global-padding mt-[140px]">
        <ContentsSection />
      </div>
      <div className="main-container-width global-padding mt-[140px]">
        <ContactSection />
      </div>
    </div>
  );
}
