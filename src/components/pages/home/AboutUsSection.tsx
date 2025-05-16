import { CustomButton } from "@/components/shared/CustomButtons/Buttons";
import BGGridGradientComponent from "@/components/shared/BGGridGradientComponent";

export default function AboutUsSection() {
    return (
        <section className="md:h-[456px] relative">
            <BGGridGradientComponent />

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