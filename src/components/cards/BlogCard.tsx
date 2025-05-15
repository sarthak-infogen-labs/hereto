
import Image from "next/image";
import React from "react";

export interface BlogCardProps {
  image: any;
  overlayImage?: string;
  author: string;
  readTime: string;
  title: string;
  tags: string[];
  excerpt: string;
}

const BlogCard= ({
  image,
  author,
  readTime,
  title,
  tags,
  excerpt,
}: BlogCardProps) => {
  return (
    <article className="bg-[#3D2D59]/12 backdrop-blur-sm w-[338px]  overflow-hidden h-auto pb-[30px] rounded-[20px] transition-all duration-300 hover:scale-[1.02] cursor-pointer border-[#C1C1C1]/33 border-[0.5px]">
      <div className="relative flex w-full flex-col overflow-hidden">
        <Image
          src={image}
          className="aspect-[1.85] object-cover w-full"
          alt="blog image"
        />
        <div className="bg-white absolute z-0 text-[11px] text-[#1D142A] font-medium leading-[22px] px-[8px] py-0 rounded-md left-4 top-4">
          Blog
        </div>
      </div>
      <div className="w-full px-5 mt-5">
        <div className="flex items-center gap-2 text-sm text-[#C1C1C1] font-normal text-[12px] leading-6">
          <span>{author}</span>
          <span className="font-bold">|</span>
          <span>{readTime}</span>
        </div>
        <div className="mt-1">
          <h3 className="text-[16px] text-[#F5F5F5] font-semibold leading-6">{title}</h3>
          <div className="flex gap-1 mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 text-[12px] bg-[#0E041D] text-[#F5F5F5] rounded-sm border border-[#C1C1C1]/33 leading-6"
              >
                {tag}
              </span>
            ))}
          </div>
          <button className="text-[#C1C1C1]/60 text-[14px] leading-[22px] mt-4.5 hover:text-white transition-colors mb-7.5">
            Read More
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
