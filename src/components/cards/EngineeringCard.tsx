"use client";
import Image from "next/image";

interface EngineeringCardProps {
  data: {
    description: string;
    tags: string[];
    imagePath: string;
  };
}

const EngineeringCard: React.FC<EngineeringCardProps> = ({ data }) => {
  const { description, tags, imagePath } = data;

  return (
    <div className=" rounded-lg flex flex-col items-center space-y-6 max-w-full px-8">
      {/* Description */}
      <p className="text-body-sm text-[#C7C1D2] leading-relaxed min-h-[100px] max-md:text-center">
        {description}
      </p>

      {/* Tags */}
      <div className="xl:h-[130px] max-md:hidden ">
        <div className="flex flex-wrap gap-3 ">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-[#3D2D59]/30  text-[#DAD2E9] px-4 py-2 !font-normal text-sm rounded-md whitespace-nowrap "
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className=" relative w-full h-[278px]  max-sm:w-[386px] max-sm:h-[250px]">
        <Image
          src={`/${imagePath}`}
          alt="Engineering service"
          fill
          className="object-cover rounded-lg border w-[569px] h-[278px] border-[#332C44]"
          priority
        />
      </div>
    </div>
  );
};

export default EngineeringCard;
