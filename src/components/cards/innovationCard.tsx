import { ChevronRight } from "lucide-react";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  linkText: string;
  backgroundImage: any;
  pageLink: string;
}

export default function Card({
  title,
  description,
  linkText,
  backgroundImage,
}: CardProps) {
  return (
    <div className="relative min-[1350px]:w-[334px] min-[1350px]:h-[334px] lg:w-[290px] lg:h-[290px] rounded-xl overflow-hidden bg-[#3D2D59]/15 group/card w-[334px] h-[334px]">
      {/* Background Image */}
      <Image
        src={backgroundImage}
        alt="Card background"
        fill
        className="object-cover opacity-100"
        priority // optional: improves loading speed
      />

      {/* Overlay content */}
      <div className="relative z-10 h-full w-full bg-gradient-to-b from-[#0F0525]/80 to-transparent  flex p-5 flex-col justify-between border border-[#322B43] group-hover/card:border-[#00C4CC] group-hover/card:bg-[#070010]/75 rounded-xl transition-all duration-600">
        <div className="flex flex-col gap-2">
          <div className="border-l-2 border-[#00C4CC] px-[18px] h-5 flex items-center">
            <p className="text-[#F5F5F5] text-[18px] leading-[28px] font-semibold max-w-[200px]">
              {title}
            </p>
          </div>
          <div className="px-[18px] opacity-0 group-hover/card:opacity-100">
                <p className="text-[#B2A8BE] text-[16px] leading-[24px] font-normal h-19.5 line-clamp-3">
                {"asdasdasdasdasdasdadasdasdasdasdasdas"+description}
                </p>
            </div>
        </div>

        <div className="px-[18px]  opacity-0 group-hover/card:opacity-100 ">
          <p className="text-[#AC9CC0] text-[16px] leading-[24px] font-normal flex gap-2 items-center group-hover/card:text-[#00C4CC] transition-all duration-600">
            <span>
              Explore <b>{linkText}</b>
            </span>
            <ChevronRight
              size={16}
              className="text-[#AC9CC0]"
              strokeWidth={2}
            ></ChevronRight>
          </p>
        </div>
      </div>
    </div>
  );
}
