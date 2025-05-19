"use client";
import TInsightCard from "@/components/cards/TInsightCard";
import { useState, useCallback, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

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
  {
    type: "Blog",
    title: "Driving conversions with the fastest search engine in the world.",
    tags: ["eCommerce", "AI/ML"],
    author: "John Doe",
    publishedDate: "2024-01-01",
    image: {
      url: "/images/t-insights/insightCard1.png",
      alt: "Insight Card 1",
    },
  },
  {
    type: "Whitepaper",
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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  const onSelect = useCallback((api: CarouselApi) => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!api) return;

    onSelect(api);
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <section className="w-full max-w-[1320px] md:h-[700px] h-auto mx-auto flex flex-col justify-center">
      <div className="">
        <div className="flex sm:pl-2.5 pl-0 max-md:justify-center ">
          <div className="bg-[#05999F]/14 border-[0.4px] border-[#05999F]/60 rounded-[24px] px-3 text-sm font-medium leading-6 text-[#05999F]">
            Latest Insights
          </div>
        </div>
        <div className="md:mt-8 mt-4 px-2">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
            setApi={setApi}
          >
            <CarouselContent>
              {cardsData.map((card, index) => (
                <CarouselItem key={index} className="px-2">
                  <TInsightCard card={card} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="md:mt-8 mt-[42px] flex items-center gap-2 justify-center">
          {cardsData.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-gradient-to-b from-[#AC83E1] to-[#543280]"
                  : "bg-[#332C44]"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
