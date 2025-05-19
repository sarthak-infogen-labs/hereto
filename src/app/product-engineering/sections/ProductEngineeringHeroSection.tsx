import Hero from "@/components/shared/CustomHero/CustomHeroWIthImage";

const productEngineeringHeroImage = {
    path: "/images/data-driven-hero.png",
    alt: "Data Driven Hero Section",
    width: 530,
    height: 423
}

export default function ProductEngineeringHeroSection() {
    return (
        <div>
            <Hero
                title="Engineering Purpose-"
                gradientTitle="Built Platforms"
                description="We specialize in end-to-end product development, from architecture to deployment. Our engineering approach emphasizes performance, scalability, and reliability."
                buttonText="Consult with Product Expert"
                image={productEngineeringHeroImage}
                link="/product-engineering"
            />
        </div>
    );
}