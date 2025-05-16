
"use client";
import React, { useState } from "react";
import BlogCard from "@/components/cards/BlogCard";
import FilterTabs, { FilterType } from "./FilterTabs";
import { CustomButton, GradientButtonWithAnimation } from "@/components/shared/CustomButtons/Buttons";
import { ArrowRightIcon } from "lucide-react";
import { blogImage1 } from "../../../../public/images/index";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CustomDropdown from "@/components/shared/CustomDropdown/CustomDropdown";

const dropdownOptions = [
  {
    id: "all",
    label: "All",
    value: "all",
  },{
    id: "blogs",
    label: "Blogs",
    value: "blogs",
  },{
    id: "articles",
    label: "Articles",
    value: "articles",
  },{
    id: "whitepaper",
    label: "Whitepaper",
    value: "whitepaper",
  }
];

// Sample blog data
const blogData = [
  {
    id: 1,
    image: blogImage1,
    author: "Damon Salvatore",
    readTime: "9 min read",
    title: "Driving conversions with the fastest search engine in the world.",
    tags: ["AI/ML", "eCommerce"],
    excerpt:
      "The fastest search engine in the world empowers users to find what they need instantly, reducing bounce ...",
    type: "blogs",
  },
  {
    id: 2,
    image: blogImage1,
    author: "Damon Salvatore",
    readTime: "9 min read",
    title: "Driving conversions with the fastest search engine in the world.",
    tags: ["AI/ML", "eCommerce"],
    excerpt:
      "The fastest search engine in the world empowers users to find what they need instantly, reducing bounce ...",
    type: "whitepaper",
  },
  {
    id: 3,
    image: blogImage1,
    author: "Damon Salvatore",
    readTime: "9 min read",
    title: "Driving conversions with the fastest search engine in the world.",
    tags: ["AI/ML", "eCommerce"],
    excerpt:
      "The fastest search engine in the world empowers users to find what they need instantly, reducing bounce ...",
    type: "articles",
  },
  {
    id: 4,
    image: blogImage1,
    author: "Damon Salvatore",
    readTime: "9 min read",
    title: "Driving conversions with the fastest search engine in the world.",
    tags: ["AI/ML", "eCommerce"],
    excerpt:
      "The fastest search engine in the world empowers users to find what they need instantly, reducing bounce ...",
    type: "articles",
  },
  {
    id: 5,
    image: blogImage1,
    author: "Damon Salvatore",
    readTime: "9 min read",
    title: "Driving conversions with the fastest search engine in the world.",
    tags: ["AI/ML", "eCommerce"],
    excerpt:
      "The fastest search engine in the world empowers users to find what they need instantly, reducing bounce ...",
    type: "blogs",
  },
  {
    id: 6,
    image: blogImage1,
    author: "Damon Salvatore",
    readTime: "9 min read",
    title: "Driving conversions with the fastest search engine in the world.",
    tags: ["AI/ML", "eCommerce"],
    excerpt:
      "The fastest search engine in the world empowers users to find what they need instantly, reducing bounce ...",
    type: "whitepaper",
  },
  {
    id: 7,
    image: blogImage1,
    author: "Damon Salvatore",
    readTime: "9 min read",
    title: "Driving conversions with the fastest search engine in the world.",
    tags: ["AI/ML", "eCommerce"],
    excerpt:
      "The fastest search engine in the world empowers users to find what they need instantly, reducing bounce ...",
    type: "articles",
  },
  {
    id: 8,
    image: blogImage1,
    author: "Damon Salvatore",
    readTime: "9 min read",
    title: "Driving conversions with the fastest search engine in the world.",
    tags: ["AI/ML", "eCommerce"],
    excerpt:
      "The fastest search engine in the world empowers users to find what they need instantly, reducing bounce ...",
    type: "articles",
  }
];

function TInsights() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  const filteredBlogs =
    activeFilter === "all"
      ? blogData
      : blogData.filter((blog) => blog.type === activeFilter);

  return (
    <section className="flex flex-col items-center pb-22.5">
      <div className=" w-full ">
        <div className="flex flex-row items-center justify-between  px-2 ">
          <FilterTabs
            activeFilter={activeFilter}
            onFilterChange={handleFilterChange}
            className="hidden md:flex"
          />
          <div className="max-md:block hidden">
            <CustomDropdown
              options={dropdownOptions}
              value={activeFilter}
              onChange={(value) => handleFilterChange(value as FilterType)}
              label="Filter"
              placeholder="Select an option"
            />
          </div>
          <div >
            <CustomButton>T-Insights</CustomButton>
          </div>
        </div>


        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full mx-auto py-9" 
        >
          <CarouselContent>
              {filteredBlogs.map((blog) => (
                <CarouselItem key={blog.id} className=" sm:basis-[60%] lg:basis-[40%] xl:basis-[30%]">
                  <div className="">
                    <BlogCard
                      key={blog.id}
                      image={blog.image}
                      author={blog.author}
                      readTime={blog.readTime}
                      title={blog.title}
                      tags={blog.tags}
                      excerpt={blog.excerpt}
                    />
                  </div>
                  
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-[#F5F5F5]" />
          <CarouselNext className="bg-[#F5F5F5]" />
        </Carousel>
        {/* <InsightsCarousel /> */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {filteredBlogs.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              author={blog.author}
              readTime={blog.readTime}
              title={blog.title}
              tags={blog.tags}
              excerpt={blog.excerpt}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default TInsights;
