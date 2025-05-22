import { ArrowRightIcon } from "lucide-react";
import { AIAccordion } from "@/components/shared/CustomAccordions/AIAccordion";
import {
  CustomButton,
  GradientBGButton,
  GradientButton,
  GradientButtonWithAnimation,
} from "@/components/shared/CustomButtons/Buttons";
import { landingPageData } from "@/constants/LandingPageData";

export default function AIFrontierSection() {
  return (
    <div className="w-full">
      <div>
        <div className="py-20 px-10  flex flex-row bg-blur-gradient-border">
          {/* Left Column */}
          <div className="flex flex-col justify-between p-5 h-100">
            <h2
              className="text-[#EEE6FC] text-h1  font-semibold max-w-[550px]"
              style={{ lineHeight: "58px" }}
            >
              {landingPageData.aifrontierSection.title}
            </h2>
            <div className="inline-block p-[1px] rounded-md bg-[#F5F5F5] hover:bg-gradient-to-r hover:from-[#00C4CC] hover:to-[#7D2AE8]  max-w-max transition-all duration-1000 ease-in-out shrink-0">
              <CustomButton className=" border border-transparent hover:border-transparent whitespace-nowrap hover:bg-gradient-to-r hover:from-[#00C4CC17] hover:to-[#0E007666] transition-all duration-1000 ease-in-out">
                {landingPageData.aifrontierSection.btnName}
              </CustomButton>
            </div>
          </div>
          {/* Right Column */}
          <div className=" w-full max-w-[665px] p-5">
            <AIAccordion />
          </div>
        </div>

        <div
          className="z-[-1] absolute -bottom-10 left-0 w-[1218px] h-75 blur-[100px] "
          style={{
            background:
              "radial-gradient(circle, rgba(90, 50, 250, 0.3) 0%, #070010 100%)",
          }}
        ></div>
      </div>
    </div>
  );
}
