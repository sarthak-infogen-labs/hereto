import Image from "next/image";

const InfoCard = ({
  heading,
  textContent,
  icon,
}: {
  heading: string;
  textContent: string;
  icon: string;
}) => {
  return (
    <div className="flex flex-col w-[344px] md:w-[545px]">
      <div className="flex items-center px-6 space-x-4  h-[82px] bg-[#4C4364]/14 backdrop-blur  rounded-[12px] border-solid border-1 border-[#332C44] ">
        <div className="w-6 h-6 sm:w-6 sm:h-6 lg:w-8 lg:h-8 relative ">
          <Image src={icon} alt="Icon" fill className="object-contain" />
        </div>
        <div className=" text-[#EEE6FC] !font-semibold text-h6 leading-[58px] tracking-[0.4px]">
          {heading}
        </div>
      </div>
      <div className="min-h-[178px] max-md:h-[225px]  mt-2 pl-10 p-6 sm:p-7  bg-[#4C4364]/14 backdrop-blur rounded-[12px] border-solid border-1 border-[#332C44] flex relative">
        <div>
          <p className="text-[#D6C8EE] text-body-sm !font-normal lg:!text-[1rem]">{textContent}</p>
          <div className="w-[1px] h-[17px] absolute top-7 left-7 bg-[#00C4CC] max-md:block sm:hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
