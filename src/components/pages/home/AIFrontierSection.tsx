import { ArrowRightIcon } from "lucide-react";
import { AIAccordion } from "@/components/shared/CustomAccordions/AIAccordion";
import { aiFrontierSection } from "@/constants/AIFrontierSectionData";
import { CustomButton } from "@/components/shared/CustomButtons/Buttons";

export default function AIFrontierSection() {
  return (
    <div className="w-full">
      <div>
        <div className="py-20 px-10  flex flex-row bg-blur-gradient-border">
          {/* Left Column */}
          <div className="flex flex-col justify-between p-5 h-100">
            <h2 className="text-[#EEE6FC] text-h1  font-semibold max-w-[550px]" style={{lineHeight:'58px'}}>
              {aiFrontierSection.title}
            </h2>
            <div>
              <CustomButton> {aiFrontierSection.btnName}</CustomButton>
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
