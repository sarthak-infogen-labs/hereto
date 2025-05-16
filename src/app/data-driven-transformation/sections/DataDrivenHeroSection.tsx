import Hero from "../../../components/shared/CustomHero/CustomHeroWIthImage";

interface DataDrivenHeroSectionProps {
    title: string;
    gradientTitle: string;
    description: string;
    buttonText: string;
    image: {
        path: string;
        alt: string;
        width: number;
        height: number;
    };
    link: string;
}

const dataDrivenHeroImage = {
    path: "/images/data-driven-hero.png",
    alt: "Data Driven Hero Section",
    width: 530,
    height: 423
}

export default function DataDrivenHeroSection() {
    return (
        <div>
            <Hero
                title="Building Data-"
                gradientTitle="Intelligent Enterprise"
                description="We help modern enterprises transform from data-bound to data-fueled, enabling them to extract the full value out of their data assets."
                buttonText="Consult with Data Expert"
                image={dataDrivenHeroImage}
                link="/data-driven-transformation"
            />
        </div>
    );
}