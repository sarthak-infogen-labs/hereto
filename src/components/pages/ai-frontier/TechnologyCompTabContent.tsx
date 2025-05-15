import React from "react";

interface TechItemProps {
  name: string;
  imageUrl: string;
}

export const TechItem = ({ name, imageUrl }: TechItemProps) => {
    return (
      <div className="flex items-center gap-2.5 p-0.5">
        <img
          src={imageUrl}
          alt={`${name} logo`}
          className="aspect-[1] object-contain w-[34px]"
        />
        <div className="text-[#B2A8BE] text-[18px] font-semibold leading-[26px] tracking-[0.36px]">
          {name}
        </div>
      </div>
    );
  };

  
export default function TechnologyCompTabContent() {
    const images = [
      { name: "openai", src: "images/dummy.svg" },
      { name: "claude", src: "images/dummy.svg" },
      { name: "mistral", src: "images/dummy.svg" },
      { name: "cohere", src: "images/dummy.svg" },
      { name: "pinecone", src: "images/dummy.svg" },
      { name: "weaviate", src: "images/dummy.svg" },
      { name: "faiss", src: "images/dummy.svg" },
      { name: "chroma", src: "images/dummy.svg" },
    ];
  
    return (
      <section
        aria-label="Supported Technologies"
        className="flex flex-col items-center justify-center py-6 text-[#B2A8BE] text-lg font-semibold tracking-[0.36px]"
      >
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-6 w-full max-w-screen-xl px-4">
          {images.map((tech, index) => (
            <TechItem key={index} name={tech.name} imageUrl={tech.src} />
          ))}
        </div>
      </section>
    );
  }
  