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
                description="We build immersive, connected, and intelligent systems across XR, Embedded IoT, gaming, and media."
                buttonText="Consult with Next-Gen Expert"
                image={dataDrivenHeroImage}
                link="/data-driven-transformation"
            />
        </div>
    );
}