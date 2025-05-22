"use client";
import Image from "next/image";
import Chip from "../ui/chip";

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
    <div className=" rounded-lg flex flex-col items-center justify-center space-y-6 max-w-full px-8">
      {/* Description */}
      <p className="text-body-sm text-[#C7C1D2] leading-relaxed min-h-[100px] max-md:text-center">
        {description}
      </p>

      

      {/* Image */}
      <div className=" relative w-full h-[278px]   max-sm:h-[250px]">
        <Image
          src={`/${imagePath}`}
          alt="Engineering service"
          fill
          className="object-cover rounded-lg border w-[569px] h-[278px] border-[#332C44]"
          priority
        />
      </div>

      {/* Tags */}
      <div className="xl:h-[130px]">
        <div className="flex flex-wrap gap-[10px]  ">
          {tags.map((tag, index) => (
            <Chip key={index} content={tag} bgColor="rgba(61, 45, 89, 0.3)" />
              
 
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngineeringCard;
