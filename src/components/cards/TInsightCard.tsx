import Image from "next/image";

interface TInsightCardProps {
  card: {
    type: string;
    title: string;
    tags: string[];
    author: string;
    publishedDate: string;
    image: {
      url: string;
      alt: string;
    };
  };
}

export default function TInsightCard({ card }: TInsightCardProps) {
  return (
    <div className="h-full w-full  md:px-10 md:py-10 sm:px-5 sm:py-5 px-5 py-5 bg-blur-gradient-border">
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[70px] gap-6">
        <div className="flex flex-col md:space-y-4 space-y-5 md:py-5 py-0  max-md:order-last">
          <div className="max-md:space-y-3 space-y-2.5">
            <p className="text-sm font-normal text-[#B2A8BE] leading-[22px] uppercase">
              {card.type}
            </p>
            <h2 className="md:font-medium font-semibold md:leading-[50px] max-md:text-[1.5rem] text-[2.375rem] leading-[34px] text-[#F5F5F5]">
              {card.title}
            </h2>
          </div>
          <div className="flex items-center gap-2.5 flex-wrap">
            {card.tags.map((tag, idx) => (
              <div
                key={idx}
                className="bg-[#332C44] border border-[#332C44] rounded-[14px] px-3 py-[3px] text-[16px] font-normal leading-6 text-[#D6C8EE]"
              >
                {tag}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[16px] font-normal leading-6 text-[#B2A8BE]">
              {card.author}
            </p>
            <p className="text-[16px] font-normal leading-6 text-[#B2A8BE]">
              {new Date(card.publishedDate).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className=" md:rounded-[12px] rounded-t-[20px] overflow-hidden min-h-[215px]">
          <Image
            src={card.image.url}
            alt={card.image.alt}
            width={582}
            height={324}
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </div>
  );
}
