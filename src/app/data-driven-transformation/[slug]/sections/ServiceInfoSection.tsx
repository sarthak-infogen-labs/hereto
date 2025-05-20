import { ServiceInformationComponent } from "@/components/pages/data-driven-transformations/ServiceInformationComponent";

export default function ServiceInfoSection() {
  return (
    <section>
      <ServiceInformationComponent
        heading="Data Intelligence to Inform Strategic Decisions"
        paragraphs={[
          "Fragmented data architectures, insufficient internal capabilities, and inconsistent data quality often impede timely, data-driven decision-making. Our comprehensive data engineering services address these challenges by optimizing data management across the entire lifecycle",
          "We enable seamless data ingestion, transformation, and AI-driven analytics through scalable, reliable pipelines. As your data engineering partner, Intellias accelerates time-to-insight, enhances data fidelity, and supports system-wide integration to maximize operational efficiency and informed decision-making.",
        ]}
        buttonText="Connect with Data Expert"
      />
    </section>
  );
}
