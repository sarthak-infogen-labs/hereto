import ChatInput from "@/components/shared/CustomInputs/ChatInput";
import TextDisplay from "@/components/shared/TextDisplay";
import { Input } from "@/components/ui/input";
import { landingPageData } from "@/constants/LandingPageData";

export default function Hero() {
  return (
    <div className="mt-[60px] md:mt-[160px]">
      <div className="">
        <div className="">
          <TextDisplay
            title={landingPageData.header.title1}
            gradientTitle={landingPageData.header.title2}
          />
          <div className="mt-[42px] md:mt-[102px] ww-full max-w-[850px]">
            <ChatInput />
          </div>
        </div>
      </div>

      <div className="">
        <div
          className="absolute blur-[100px] w-full h-[300px] -bottom-60 left-1/2 -translate-x-1/2 z-[-1] opacity-60"
          style={{
            background: `radial-gradient(
                        circle,
                        rgba(125, 42, 232, 0.5) 0%,
                        rgba(90, 50, 250, 0.2) 50%,
                        rgba(26, 29, 62, 0) 100%
                    )`,
          }}
        />
      </div>
    </div>
  );
}
