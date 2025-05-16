import { grid } from "../../../public/images";
import Image from "next/image";

export default function BGGridGradientComponent() {
    return (
        <div>
            <div className="absolute inset-0 z-[-10] border-test">
                <div className="relative w-full h-full">
                    <Image src={grid} alt="grid" className="w-full h-full object-cover" />
                    <div 
                        className="absolute inset-0"
                        style={{
                            background: 'radial-gradient(circle at center, transparent 0%, rgba(7, 0, 16, 1) 35%, rgba(7, 0, 16, 0.95) 100%)',
                            mixBlendMode: 'multiply'
                        }}
                    />
                </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center z-[-1] blur-2xl border-test">
                <div
                    className="w-[1300px] h-[162px] border-test [clip-path:polygon(50%_0%,_0%_100%,_100%_100%)] opacity-20"
                    style={{
                        background: 'radial-gradient(circle, #7D2AE8E5, #5A32FA4D, #1A1D3E66)'
                    }}
                ></div>
            </div>

            <div
                className="absolute w-[1400px] h-[200px] top-15 blur-3xl left-1/2 -translate-x-1/2 z-[-1] opacity-20 rounded-[100%]"
                style={{
                    background: 'radial-gradient(circle, #7D2AE8E5, #5A32FA4D, #1A1D3E66)'
                // background: `radial-gradient(
                //     circle,
                //     rgba(125, 42, 232, 0.5) 0%,
                //     rgba(90, 50, 250, 0.2) 50%,
                //     rgba(26, 29, 62, 0) 100%
                // )`,
                }}
            />
        </div>
    );
}