import TInsightCard from "@/components/cards/TInsightCard";
import { title } from "process";

const cardsData = [
  {
    type: "Article",
    title: "Driving conversions with the fastest search engine in the world.",
    tags: ["eCommerce", "AI/ML"],
    author: "John Doe",
    publishedDate: "2024-01-01",
    image: {
      url: "/images/t-insights/insightCard1.png",
      alt: "Insight Card 1",
    },
  },
];

export function Hero() {
  return (
    <section className="w-full max-w-[1320px] md:h-[700px] h-[500px] mx-auto flex flex-col justify-center">
      <div className="">
        <div className="flex sm:pl-2.5 pl-0 ">
          <div className="bg-[#05999F]/14 border-[0.4px] border-[#05999F]/60 rounded-[24px] px-3 text-sm font-medium leading-6 text-[#05999F]">
            Latest Insights
          </div>
        </div>
        <div className="md:mt-8 mt-4">
          <TInsightCard card={cardsData[0]} />
        </div>

        <div className="md:mt-8 mt-[42px] flex items-center gap-2 justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-b from-[#AC83E1] to-[#543280]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#332C44]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-[#332C44]"></div>
        </div>
      </div>
    </section>
  );
}
