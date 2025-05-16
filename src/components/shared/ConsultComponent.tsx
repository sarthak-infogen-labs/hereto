import { CustomButton } from "./CustomButtons/Buttons";

interface ConsultSectionProps {
    title1: string;
    title2: string;
    description: string;
    buttonText: string;
}

export default function ConsultComponent({title1, title2, description, buttonText} : ConsultSectionProps) {
    return (
        <section className="">
            <div className=" relative max-w-[1320px] mx-auto rounded-3xl bg-gradient-to-b from-[#0700101F] to-[#070010] backdrop-blur-2xl">
                {/* <div className="absolute inset-0 border-2 rounded-3xl border-[#7E6CA9]  " 
                    style={{
                        WebkitMaskImage: "linear-gradient(to top, black, transparent)",
                        maskImage: "linear-gradient(to top, black, transparent)"
                    }}>

                </div> */}
                <div className="gradient-border-mask md:py-[70px] py-5 rounded-3xl ">
                    <div className="relative z-10 flex flex-col items-center">
                        <h2 className="text-[#EEE6FC] text-h1-semibold text-center leading-[60px]">
                            {title1}
                            {title2 && (<>
                                <br />
                                {title2}
                            </>)}
                        </h2>

                        <p className="text-[#D6C8EE] text-body-sm leading-[24px] tracking-[0.036px] text-center md:mt-9 mt-6 px-2">
                            {description}
                        </p>

                        <div className="md:mt-9 mt-8">
                            <CustomButton>
                                {buttonText}
                            </CustomButton>
                        </div>
                    </div>
                </div>
                
            </div>
        </section>
    );
}