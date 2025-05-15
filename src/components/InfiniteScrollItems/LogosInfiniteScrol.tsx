"use client";

import Image from "next/image";
import React from "react";

type Props = {
  images: string[];
};

const LogosInfiniteScroll = ({ images }: Props) => {
  const repeatedImages = [...images, ...images,...images,...images]; // Duplicate for seamless scroll

  return (
    <div className="overflow-hidden w-full py-6">
      <div className="flex animate-scroll gap-8">
        {repeatedImages.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Logo ${index}`}
            width={100}
            height={100}
            loading={index < 4 ? "eager" : "lazy"}
            priority={index < 4}
            className="object-contain inline-block w-[46px] h-[41px]"
          />
        ))}
      </div>
    </div>
  );
};

export default LogosInfiniteScroll;
