import Image from "next/image";


export default function GraphicsCard({
    title,
    topImage,
    bottomImage,
    listItems,
}: {
    title: string;
    topImage: string;
    bottomImage: string;
    listItems: string[];
}) {
    return (
        <div className="flex flex-col items-center justify-center w-[300px]">
            <div className="w-[80px] h-[80px] bg-[#332C44]/15 rounded-full border border-[#332C44] flex items-center justify-center">
                <p className="text-[#E0E0E0] text-[16px] font-normal leading-[24px]">{title}</p>
            </div>

            <div className="w-[234px] mt-[37px] bg-[#332C44]/15 rounded-xl border border-[#332C44] flex flex-col items-center justify-center px-2.5 py-5 space-y-4">
                <div className="flex items-center justify-center w-[51px] h-[51px]">
                    <Image src={topImage} alt={"topimage"} width={30} height={38} />
                </div>

                <div>
                    <ul className="list-disc space-y-2 text-[#E0E0E0] text-[15px] font-normal leading-[24px] pl-5">
                        {listItems?.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="mt-[37px] w-[70px] h-[70px] bg-[#332C44]/34 rounded-full flex items-center justify-center">
                <Image src={bottomImage} alt="base" width={40} height={40} />
            </div>
            
            <p className="mt-3 text-[#E0E0E0] text-[16px] font-normal leading-[24px]">Aligned team vision</p>
        </div>
    );
}