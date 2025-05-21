import {
  tensorFlow,
  pytorch,
  apacheAirflow,
  snowflake,
  hadoop,
  tableau,
  powerbi,
  looker,
  python,
} from "../../public/images";

export const dataDrivenCoeTabsData = [
  {
    id: "data-engineering",
    title: "Data Engineering",
    summary:
      "We design and implement scalable data infrastructure that streamlines the end-to-end data lifecycle—from ingestion and transformation to integration across systems. Our solutions are optimized for high-throughput, low-latency data pipelines, ensuring data integrity, consistency, and reliability at every stage. ",
    technologies: [
      {
        icon: apacheAirflow,
        label: "Apache Airflow",
      },
      {
        icon: snowflake,
        label: "Snowflake",
      },
      {
        icon: hadoop,
        label: "Hadoop",
      },
    ],
  },
  {
    id: "data-analytics-bi",
    title: "Data Analytics & BI",
    summary:
      "We support businesses across industries in integrating, aggregating, and analyzing diverse data from multiple sources to solve complex challenges at departmental and enterprise scales.",
    technologies: [
      {
        icon: tableau,
        label: "Tableau",
      },
      {
        icon: powerbi,
        label: "Power BI",
      },
      {
        icon: looker,
        label: "Looker",
      },
    ],
  },
  {
    id: "data-science",
    title: "Data Science",
    summary:
      "We turn complex data ecosystems into intelligent narratives. Our data science capabilities help organizations decode uncertainty, engineer predictions, and convert data into a competitive edge across every layer of the enterprise.",
    technologies: [
      {
        icon: python,
        label: "Python",
      },
      {
        icon: tensorFlow,
        label: "TensorFlow",
      },
      {
        icon: pytorch,
        label: "PyTorch",
      },
    ],
  },
];

export const dataDrivenPageData = {
  id: "data-driven-transformation",
  name: "Data-Driven Transformation",
  pageData: {
    heroSection: {
      title1: "Building Data-",
      title2: "Intelligent Enterprise",
      descrition:
        "We help modern enterprises transform from data-bound to data-fueled, enabling them to extract the full value out of their data assets.",
      buttonText: "Consult with Data Expert",
    },
    coeServiceSection: {
      title1: "Turn Data Chaos into Meaningful Insights.",
      summary:
        "From insights to action—our data strategy empowers smarter decisions at every level.",
    },
  },
};
