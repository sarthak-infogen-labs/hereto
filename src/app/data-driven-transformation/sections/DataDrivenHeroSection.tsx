import { dataDrivenPageData } from "@/constants/DataDrivenPageData";
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
        title={dataDrivenPageData.pageData.heroSection.title1}
        gradientTitle={dataDrivenPageData.pageData.heroSection.title2}
        description={dataDrivenPageData.pageData.heroSection.descrition}
        buttonText={dataDrivenPageData.pageData.heroSection.buttonText}
        image={dataDrivenHeroImage}
        link="/data-driven-transformation"
      />
    </div>
  );
}
