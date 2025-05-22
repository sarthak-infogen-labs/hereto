"use client";

import EngineeringSevicesComponent from "@/components/pages/data-driven-transformations/EngineeringSevicesComponent";

const EngineeringServicesSection = () => {
  const sectionTitle='We Provide End-to-End Data Engineering Offerings'
  const dataEngineeringOfferings = [
    {
      key: "ETL / ELT / Integration",
      value: {
        description:
          "We extract and transform historical data from diverse sources, including REST APIs, FTP, databases, and legacy systems with proprietary protocols.",
        tags: [
          "ETL/ELT development",
          "Batch & real-time stream processing",
          "Scalable data pipelines",
          "Data integration solutions",
        ],
        imagePath:
          "images/data-driven-transformation/engineering-services/image.png",
      },
    },
    {
      key: "Data warehouse",
      value: {
        description:
          "Our data architects design and manage robust ecosystems that centralize and organize structured quality data, enabling complex querying, reporting, and analytics.",
        tags: [
          "Data modeling & schema design",
          "Metadata management",
          "Data source integration",
          "Data process automation",
          "DWH migration & optimization",
          "Analytics & reporting",
        ],
        imagePath:
          "images/data-driven-transformation/engineering-services/image.png",
      },
    },
    {
      key: "Data lake & Data Lakehouse",
      value: {
        description:
          "Our data lake solutions will help you store, safeguard, and analyze vast datasets and data types from various sources across your enterprise.",
        tags: [
          "Data lake design & implementation",
          "Data ingestion & integration",
          "Data governance & security",
          "Data catalog & metadata management",
          "Advanced analytics & machine learning",
        ],
        imagePath:
          "images/data-driven-transformation/engineering-services/image.png",
      },
    },
    {
      key: "Data Fabric",
      value: {
        description:
          "Our data integration engineering services create a unified virtual data layer for centralized data management, governance, and self-service access across distributed environments.",
        tags: [
          "Augmented data catalog",
          "Knowledge graph",
          "Metadata activation",
          "DataOps",
        ],
        imagePath:
          "images/data-driven-transformation/engineering-services/image.png",
      },
    },
    {
      key: "Data Mesh",
      value: {
        description:
          "We implement data mesh architectures that empower your domain experts by distributing data ownership within a scalable framework.",
        tags: [
          "Data ingestion",
          "Data transformation",
          "Data preparation",
          "Federated learning",
        ],
        imagePath:
          "images/data-driven-transformation/engineering-services/image.png",
      },
    },
    {
      key: "Big Data Solutions",
      value: {
        description:
          "With our big data engineering services, we build cloud-native, cloud-agnostic, and on-premises platforms for smoothly handling your large-scale data processing needs.",
        tags: [
          "Data ingestion & storage",
          "Data processing & cleaning",
          "Data integration & transformation",
          "Big data analytics & visualization",
          "Data pipeline orchestration",
        ],
        imagePath:
          "images/data-driven-transformation/engineering-services/image.png",
      },
    },
  ];

  return (
    <section>
      <EngineeringSevicesComponent sectionTitle={sectionTitle} dataEngineeringOfferings={dataEngineeringOfferings}/> 
    </section>
  );
};

export default EngineeringServicesSection;
