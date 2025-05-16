import { CustomButton } from "@/components/shared/CustomButtons/Buttons";
import TextDisplay from "@/components/shared/TextDisplay";
import Image from "next/image";


interface DataDrivenHeroSectionProps {
  title: string;
  gradientTitle: string;
  description: string;
  buttonText: string;
  image: {
      path: string;
      alt: string;
      width: number;
      height: number;
  };
  link: string;
}

export default function CustomHeroWithImage({
  title,
  gradientTitle,
  description,
  buttonText,
  image,
  link,
}: DataDrivenHeroSectionProps) {
  return (
    <div className="mt-[60px] md:mt-[160px] relative">
      <div className="grid sm:grid-cols-12 grid-cols-1  max-sm:gap-8">
        <div className="col-span-12 sm:col-span-7  flex flex-col justify-center">
          <TextDisplay title={title} gradientTitle={gradientTitle} />
          <div className="mt-[36px] ww-full max-w-[640px]">
            <p className="text-body-sm leading-[28px] text-[#B2A8BE]">
              {description}
            </p>
          </div>
          <div className="mt-[36px]">
            <CustomButton>{buttonText}</CustomButton>
          </div>
        </div>
        <div className="col-span-12 sm:col-span-5 ">
          <div className=" w-full h-full flex justify-center items-center ">
            <Image src={image.path} alt={image.alt} width={image.width} height={image.height} />
          </div>
        </div>
      </div>

      
      <div className="absolute top-[15%] -translate-x-1/3 border-test blur-2xl z-[-1]">
        <div
            className="w-[960px] h-[172px]  [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] opacity-50"
            style={{
                background: 'radial-gradient(circle, #7D2AE8E5, #5A32FA4D, #1A1D3E66)'
          }}
        ></div>
      </div>
    </div>
  );
}
