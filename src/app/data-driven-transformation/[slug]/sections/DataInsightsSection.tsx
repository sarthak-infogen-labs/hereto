
import DataInsightsComponent from "@/components/pages/data-driven-transformations/DataInsightsComponent";


const DataInsightsSection = () => {
  const sectionTitle='How Data Insights Accelerated Our Client’s Business Growth'
  const cardData = [
    {
      percentageHighlight: "42%",
      subHighlight: "Faster Data Processing",
      platform: "Omnichannel retail analytics platform",
      industry: "Retail & eCommerce",
      title: "Enhancing Customer Retention with Real-Time Analytics",
      description:
        "Shoplytics streamlined data from siloed systems into a unified, real-time platform—reducing manual effort and enabling faster, insight-driven decisions.",
      ctaText: "Read Case Study",
      ctaLink: "#",
      backgroundImage:
        "/images/data-driven-transformation/carousel/carousel1.jpg", // Replace with your actual path
    },
    {
      percentageHighlight: "42%",
      subHighlight: "Faster Data Processing",
      platform: "Omnichannel retail analytics platform",
      industry: "Retail & eCommerce",
      title: "Enhancing Customer Retention with Real-Time Analytics",
      description:
        "Shoplytics streamlined data from siloed systems into a unified, real-time platform—reducing manual effort and enabling faster, insight-driven decisions.",
      ctaText: "Read Case Study",
      ctaLink: "#",
      backgroundImage:
        "/images/data-driven-transformation/carousel/carousel2.jpg", // Replace with your actual path
    },
    {
      percentageHighlight: "42%",
      subHighlight: "Faster Data Processing",
      platform: "Omnichannel retail analytics platform",
      industry: "Retail & eCommerce",
      title: "Enhancing Customer Retention with Real-Time Analytics",
      description:
        "Shoplytics streamlined data from siloed systems into a unified, real-time platform—reducing manual effort and enabling faster, insight-driven decisions.",
      ctaText: "Read Case Study",
      ctaLink: "#",
      backgroundImage:
        "/images/data-driven-transformation/carousel/carousel3.jpg", // Replace with your actual path
    },
  ];
  return (
   
    <section>
      <DataInsightsComponent sectionTitle={sectionTitle} cardData={cardData}/>
    </section>
  );
};

export default DataInsightsSection;
