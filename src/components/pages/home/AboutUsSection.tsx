import { CustomButton } from "@/components/shared/CustomButtons/Buttons";
import Image from "next/image";
import { grid } from "../../../../public/images/index";
export default function AboutUsSection() {
    return (
        <section className="md:h-[456px] relative">
            <div className="absolute inset-0 z-[-10]">
                <div className="relative w-full h-full">
                    <Image src={grid} alt="grid" className="w-full h-full object-cover" />
                    <div 
                        className="absolute inset-0"
                        style={{
                            background: 'radial-gradient(circle at center, transparent 0%, rgba(7, 0, 16, 0.9) 30%, rgba(7, 0, 16, 0.95) 100%)',
                            mixBlendMode: 'multiply'
                        }}
                    />
                </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-[-1] blur-2xl">
                <div
                    className="w-[900px] h-[262px] [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] blur-4xl opacity-25"
                    style={{
                        background: 'radial-gradient(circle, #7D2AE8E5, #5A32FA4D, #1A1D3E66)'
                    }}
                ></div>
            </div>

            <div className="pt-[80px] px-30 pb-[118px]">
                <p className="text-[#D6C8EE] text-h4 text-center leading-[32px] tracking-[0.36px] max-w-[1068px] mx-auto">
                We are a group of tech enthusiasts passionate about early adoption of 
                next-generation technologies and engineering top-scale products to tackle the 
                pressing problems within diverse industries.
                </p>

                <div className="flex justify-center mt-9">
                    <CustomButton>
                        About Us
                    </CustomButton>
                </div>
            </div>
        </section>
    );
}