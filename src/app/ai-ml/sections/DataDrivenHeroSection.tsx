import Hero from "../../../components/shared/CustomHero/CustomHeroWIthImage";

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
                title="Engineering Immersive"
                gradientTitle="Experiences at Scale"
                description="We engineer AI solutions that help businesses make smarter decisions, automate operations, and predict outcomes at scale."
                buttonText="Consult with AI Expert"
                image={dataDrivenHeroImage}
                link="/data-driven-transformation"
            />
        </div>
    );
}