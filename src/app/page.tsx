import WaveAnimation from "@/components/animatedAssets/WaveAnimation";
import Hero from "@/components/pages/home/Hero";

export default function Home() {
  return (
    <div className="relative">
      <div className="hidden lg:block absolute top-[-100px] left-[-700px]">
        <WaveAnimation />
      </div>
      <div className="main-container-width global-padding">
        <Hero />
      </div>
    </div>
  );
}
