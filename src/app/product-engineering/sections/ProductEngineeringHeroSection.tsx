import Hero from "@/components/shared/CustomHero/CustomHeroWIthImage";
import { productEngineeringPageData } from "@/constants/ProductEnginneringPageData";

const productEngineeringHeroImage = {
  path: "/images/data-driven-hero.png",
  alt: "Data Driven Hero Section",
  width: 530,
  height: 423,
};

export default function ProductEngineeringHeroSection() {
  return (
    <div>
      <Hero
        title={productEngineeringPageData.pageData.heroSection.title1}
        gradientTitle={productEngineeringPageData.pageData.heroSection.title2}
        description={productEngineeringPageData.pageData.heroSection.descrition}
        buttonText={productEngineeringPageData.pageData.heroSection.buttonText}
        image={productEngineeringHeroImage}
        link="/product-engineering"
      />
    </div>
  );
}
