import { aiMlPageData } from "@/constants/AiMlPageData";
import Hero from "../../../components/shared/CustomHero/CustomHeroWIthImage";

const dataDrivenHeroImage = {
  path: "/images/data-driven-hero.png",
  alt: "Data Driven Hero Section",
  width: 530,
  height: 423,
};

export default function DataDrivenHeroSection() {
  return (
    <div>
      <Hero
        title={aiMlPageData.pageData.heroSection.title1}
        gradientTitle={aiMlPageData.pageData.heroSection.title2}
        description={aiMlPageData.pageData.heroSection.descrition}
        buttonText={aiMlPageData.pageData.heroSection.buttonText}
        image={dataDrivenHeroImage}
        link="/data-driven-transformation"
      />
    </div>
  );
}
