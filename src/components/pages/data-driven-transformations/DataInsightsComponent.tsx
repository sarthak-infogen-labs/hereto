"use-client";

import DataInsightsCard from "@/components/cards/DataInsightsCard";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useCallback, useEffect, useState } from "react";

type CardItem = {
  percentageHighlight: string;
  subHighlight: string;
  platform: string;
  industry: string;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
};

type DataInsightsComponentProps = {
   sectionTitle:string, 
  cardData: CardItem[];
};

const DataInsightsComponent: React.FC<DataInsightsComponentProps> = ({
    sectionTitle,
  cardData,
}) => {
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

  return (<div className="w-full flex flex-col items-center">
      <div className="text-h1-semibold !font-semibold max-w-[722px] text-center text-[#EEE6FC">
       {sectionTitle}
      </div>
      <Carousel className="w-full  md:p-12 max-md:pt-8 flex flex-row justify-between items-center " setApi={setApi}>
        <CarouselContent className="flex w-full ">
          {cardData.map((card, index) => (
            <CarouselItem key={index}>
              <DataInsightsCard {...card} />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className=" bg-[#F5F5F5]/20 w-[44px] h-[44px] !text-[#817995] rounded-full top-1/2 -translate-y-1/2 !left-0  !border-none  max-md:hidden " />
        <CarouselNext className=" bg-[#F5F5F5]/20 w-[44px] h-[44px] rounded-full top-1/2 -translate-y-1/2  !right-0 !border-none max-md:hidden" />
      </Carousel>

      <div className=" flex items-center gap-2 justify-center max-md:hidden">
          {cardData.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={` h-2.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-gradient-to-b from-[#AC83E1] to-[#543280] w-[20px]"
                  : "bg-[#332C44] w-2.5"
              }`}
            />
          ))}
        </div>
    </div>);
};

export default DataInsightsComponent;
