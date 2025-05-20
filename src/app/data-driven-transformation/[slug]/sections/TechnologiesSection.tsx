import TabContent from "@/components/pages/data-driven-transformations/TechnologyComponent";

const technologies = [
  {
    name: "Airflow",
    src: "/images/data-driven-transformation/technologies/airflow.svg",
  },
  {
    name: "Snowflake",
    src: "/images/data-driven-transformation/technologies/snowflake.svg",
  },
  {
    name: "Redshift",
    src: "/images/data-driven-transformation/technologies/redshift.svg",
  },
  {
    name: "Google BigQuery",
    src: "/images/data-driven-transformation/technologies/google_bigquery.svg",
  },
  {
    name: "Azure Synapse",
    src: "/images/data-driven-transformation/technologies/azure_synapse.svg",
  },
  {
    name: "Apache Spark",
    src: "/images/data-driven-transformation/technologies/apache_spark.svg",
  },
  {
    name: "Hadoop",
    src: "/images/data-driven-transformation/technologies/hadoop.svg",
  },
  {
    name: "Kafka",
    src: "/images/data-driven-transformation/technologies/kafka.svg",
  },
  {
    name: "Flink",
    src: "/images/data-driven-transformation/technologies/flink.svg",
  },
  {
    name: "Informatica",
    src: "/images/data-driven-transformation/technologies/informatica.svg",
  },
  {
    name: "MongoDB",
    src: "/images/data-driven-transformation/technologies/mongodb.svg",
  },
];

export default function TechnologiesSection() {
  return (
    <div>
      <div className="text-center text-h1">
        <h2>Partners & Technologies</h2>
      </div>
      <div className="md:mt-[72px] sm:mt-[48px] mt-[24px]">
        <TabContent technologies={technologies} />
      </div>
    </div>
  );
}
