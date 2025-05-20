import { DataEngineeringHeroSection } from "@/components/pages/data-driven-transformations/DataHero";

export function HeroSection() {
  return (
    <section className="">
      <DataEngineeringHeroSection
        title="Data Engineering Services"
        description="Transform Your Data into Your Most Valuable Business Asset."
        buttonText="Consult with Experts"
        image={{
          path: "/images/data-driven-transformation/data-eng-hero.png",
          alt: "Data Engineering",
          width: 430,
          height: 290,
        }}
      />
    </section>
  );
}
