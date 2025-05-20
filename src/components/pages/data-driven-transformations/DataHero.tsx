import LinkHeader from "@/components/headers/LinkHeader";
import { CustomButton } from "@/components/shared/CustomButtons/Buttons";
import Image from "next/image";
interface HeroSectionProps {
  title: string;
  description: string;
  buttonText: string;
  image: {
    path: string;
    alt: string;
    width: number;
    height: number;
  };
}

export function DataEngineeringHeroSection({
  title,
  description,
  buttonText,
  image,
}: HeroSectionProps) {
  return (
    <div className="">
      <div className="md:mt-20 p-0 hidden md:block ">
        <LinkHeader
          items={[
            {
              label: "Data-Driven Transformation",
              href: "/data-driven-transformation",
            },
            {
              label: "Data Engineering",
              href: "data-driven-transformation/data-engineering",
            },
          ]}
          activeIndex={0}
        />
      </div>
      <div className="relative max-w-[1180px] mx-auto md:mt-15 mt-10 ">
        <div className="grid grid-cols-12 max-sm:gap-y-8 md:gap-5">
          <div className="col-span-12 sm:col-span-7  flex flex-col justify-center ">
            <h1 className="text-display-title">{title}</h1>
            <div className="mt-[36px] w-full max-w-[640px]">
              <p className="text-body-sm leading-[28px] text-[#B2A8BE]">
                {description}
              </p>
            </div>
            <div className="mt-[36px] ">
              <CustomButton>{buttonText}</CustomButton>
            </div>
          </div>
          <div className="col-span-12 sm:col-span-5 ">
            <div className=" w-full h-full flex justify-center items-center">
              <Image
                src={image.path}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="w-full h-full object-fill"
              />
            </div>
          </div>
        </div>

        {/* <div className="absolute top-[15%] -left-80 z-[-1] blur-2xl">
          <div
            className="w-[960px] h-[172px] [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] opacity-50"
            style={{
              background:
                "radial-gradient(circle, #7D2AE8E5, #5A32FA4D, #1A1D3E66)",
            }}
          ></div>
        </div> */}
      </div>
    </div>
  );
}
