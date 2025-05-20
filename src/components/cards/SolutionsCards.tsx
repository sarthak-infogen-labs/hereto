import React from "react";
import FeatureBadge from "../badge/FeaturedBadge";
import { ArrowRightIcon } from "lucide-react";

interface SolutionsCardProps {
  title: string;
  description: string;
  badges: string[];
  onReadMore?: () => void;
}

const SolutionsCard: React.FC<SolutionsCardProps> = ({
  title,
  description,
  badges,
  onReadMore,
}) => {
  return (
    <div className="group/coetab relative p-7.5 space-y-6 bg-[#3D2D59]/12 rounded-xl backdrop-blur-sm max-w-[555px] flex-1">
      {/* Masked Border */}
      <div
        className="absolute left-0 top-0 w-full h-full border-[1px] border-[#473F5A] rounded-xl"
        style={{
          maskImage:
            "radial-gradient(500px 500px at 60% 50%, black, transparent)",
        }}
      />

      {/* Title + Description */}
      <div className="space-y-2 max-w-[460px]">
        <h2 className="text-[#00C4CC] text-[18px] font-semibold leading-[46px]">
          {title}
        </h2>
        <p className="font-normal text-[16px] leading-6 tracking-[0.032px] text-[#E3E3E3]">
          {description}
        </p>
      </div>

      {/* Badges */}
      <div className="max-w-[470px]">
        <div className="flex flex-row flex-wrap gap-2">
          {badges?.map((badge, index) => (
            <FeatureBadge key={index} text={badge} index={index} />
          ))}
        </div>
      </div>

      {/* Read More Button */}
      <div>
        <button
          onClick={onReadMore}
          className="text-[#D6C8EE] flex flex-row items-center gap-2 font-regular text-[16px] leading-[22px]"
        >
          Read more
          <ArrowRightIcon
            className="w-4.5 h-4.5 group-hover/coetab:visible invisible"
            strokeWidth={1.5}
          />
        </button>
      </div>
    </div>
  );
};

export default SolutionsCard;
