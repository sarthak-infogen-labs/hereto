"use client";
import React from "react";
import { ArrowRightIcon } from "lucide-react";
import Card from "@/components/cards/innovationCard";
import { graceImg, boForgeImg, thitoImg } from "@/../public/images/index";
import {
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Carousel } from "@/components/ui/carousel";
import BlogCard from "@/components/cards/BlogCard";
import { CustomButton } from "@/components/shared/CustomButtons/Buttons";
import { landingPageData } from "@/constants/LandingPageData";

const InnovationLabs = () => {
  return (
    <section className="mt-[130px] w-full flex flex-col items-center justify-start ">
      <div className="lg:h-[819px] h-auto w-full relative grid grid-cols-9 py-15">
        <div className="md:col-span-4 p-5 my-auto col-span-9">
          <h2 className="text-[#EEE6FC] text-h1-semibold leading-[62px] max-md:text-center">
            {landingPageData.innovationLabSection.header.title}
          </h2>

          <p className="w-full max-w-[490px] mt-9 text-[#D6C8EE] text-body-sm leading-[24px] tracking-[0.36px] max-md:text-center max-md:mx-auto">
            {landingPageData.innovationLabSection.summary}
          </p>

          <div className="mt-13 max-md:flex max-md:justify-center">
            <CustomButton className="">
              {landingPageData.innovationLabSection.btnTitle}
            </CustomButton>
          </div>
        </div>

        <div className="md:col-span-5 my-auto col-span-9 min-[1130px]:h-full w-full">
          <div className="h-full w-full min-[1130px]:block hidden rounded-lg relative">
            <div className="absolute -top-5">
              <Card
                title= {landingPageData.innovationLabSection.data[0].innovationName}
                description={landingPageData.innovationLabSection.data[0].innovationDescription}
                linkText={landingPageData.innovationLabSection.data[0].innovationName}
                backgroundImage={graceImg}
                pageLink={landingPageData.innovationLabSection.data[0].navLink}
              />
            </div>

            <div className="absolute bottom-0 left-5">
              <Card
                 title= {landingPageData.innovationLabSection.data[1].innovationName}
                 description={landingPageData.innovationLabSection.data[1].innovationDescription}
                 linkText={landingPageData.innovationLabSection.data[1].innovationName}
                backgroundImage={boForgeImg}
                pageLink={landingPageData.innovationLabSection.data[1].navLink}
              />
            </div>

            <div className="absolute left-1/2 translate-x-[20px] top-30">
              <Card
               title= {landingPageData.innovationLabSection.data[2].innovationName}
               description={landingPageData.innovationLabSection.data[2].innovationDescription}
               linkText={landingPageData.innovationLabSection.data[2].innovationName}
                backgroundImage={thitoImg}
                pageLink={landingPageData.innovationLabSection.data[2].navLink}

              />
            </div>
          </div>

          <div className="min-[1130px]:hidden ">
            <Carousel
              opts={{
                align: "start",
              }}
              className="w-full mx-auto py-9"
            >
              <CarouselContent className="">
                <CarouselItem className="max-[550px]:pl-[calc((100%-334px)/2)] min-[550px]:basis-[70%]  md:basis-[90%] lg:basis-[60%]">
                  <Card
                    title="Grace"
                    description="Our innovative e-learning platform is designed for children aged 4 to 5. It offers an engaging, interactive experience."
                    linkText="Grace"
                    backgroundImage={graceImg}
                    pageLink="/"
                  />
                </CarouselItem>

                <CarouselItem className="max-[550px]:pl-[calc((100%-334px)/2)] min-[550px]:basis-[70%] md:basis-[90%] lg:basis-[60%]">
                  <Card
                    title="Grace"
                    description="Our innovative e-learning platform is designed for children aged 4 to 5. It offers an engaging, interactive experience."
                    linkText="Grace"
                    backgroundImage={graceImg}
                    pageLink="/"
                  />
                </CarouselItem>

                <CarouselItem className="max-[550px]:pl-[calc((100%-334px)/2)] min-[550px]:basis-[70%] md:basis-[80%] lg:basis-[60%]">
                  <Card
                    title="Grace"
                    description="Our innovative e-learning platform is designed for children aged 4 to 5. It offers an engaging, interactive experience."
                    linkText="Grace"
                    backgroundImage={graceImg}
                    pageLink="/"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="bg-[#F5F5F5] !text-[#5B54E0] " />
              <CarouselNext className="bg-[#F5F5F5] !text-[#5B54E0]" />
            </Carousel>
          </div>
        </div>

        {/* <div>
            <div className="absolute w-[1005px] h-[370px] rounded-[100%] blur-[100px] opacity-100 pointer-events-none z-[-1] bg-[conic-gradient(from_90deg_at_50%_50%,_rgba(41,25,105,0.5)_25%,_rgba(76,54,166,0.5)_75%)] top-20 left-1/2 -translate-x-1/2"></div>
        </div> */}
      </div>
    </section>
  );
};

export default InnovationLabs;
