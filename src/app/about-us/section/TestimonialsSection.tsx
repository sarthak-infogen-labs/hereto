"use client";

import MainHeader from "@/components/headers/MainHeader";
import { smeeple, thito, wagoneer, shivajiUniversity, mitsubishi, medisimLab } from "../../../../public/images";
import Image from "next/image";
import { useState } from "react";

const testimonialsData = [
    {
        id: "smeeple",
        title: "Smeeple",
        content: "Working with Herrito was a game-changer. Their team understood our challenges from day one and delivered a solution that not only worked—but scaled effortlessly. Their blend of technical depth and human-first thinking is rare in the industry.",
        logo: smeeple,
        author: "Alex Romero, CTO, Smeeple"
    },
    {
        id: "thito",
        title: "Thito",
        content: "Working with Herrito was a game-changer. Their team understood our challenges from day one and delivered a solution that not only worked—but scaled effortlessly. Their blend of technical depth and human-first thinking is rare in the industry.",
        logo: thito,
        author: "Alex Romero, CTO, Smeeple"
    },
    {
        id: "wagoneer",
        title: "Wagoneer",
        content: "Working with Herrito was a game-changer. Their team understood our challenges from day one and delivered a solution that not only worked—but scaled effortlessly. Their blend of technical depth and human-first thinking is rare in the industry.",
        logo: wagoneer,
        author: "Alex Romero, CTO, Smeeple"
    },
    {
        id: "shivajiUniversity",
        title: "Shivaji University",
        content: "Working with Herrito was a game-changer. Their team understood our challenges from day one and delivered a solution that not only worked—but scaled effortlessly. Their blend of technical depth and human-first thinking is rare in the industry.",
        logo: shivajiUniversity,
        author: "Alex Romero, CTO, Smeeple"
    },
    {
        id: "mitsubishi",
        title: "Mitsubishi",
        content: "Working with Herrito was a game-changer. Their team understood our challenges from day one and delivered a solution that not only worked—but scaled effortlessly. Their blend of technical depth and human-first thinking is rare in the industry.",
        logo: mitsubishi,
        author: "Alex Romero, CTO, Smeeple"
    },
    {
        id: "medisimLab",
        title: "Medisim Lab",
        content: "Working with Ciklum was a game-changer. Their team understood our challenges from day one and delivered a solution that not only worked—but scaled effortlessly. Their blend of technical depth and human-first thinking is rare in the industry.",
        logo: medisimLab,
        author: "Sarthak Naik, CTO, Smeeple"
    }
]

function TabButton({
    id,
    logo,
    buttonText,
    isActive,
    onClick
}: {
    id: string;
    logo: any;
    buttonText: string;
    isActive: boolean;
    onClick: () => void;
}) {
    
    return (
        <div>
            <button className={`px-5 py-3 flex rounded-xl border-[0.4px] border-[#332C44] bg-[#484364]/8 backdrop-blur-lg items-center gap-4 ${!isActive ? "text-[#B2A8BE]" : "text-[#EEE6FC]"}`} onClick={onClick}>
                <div className={`w-[30px] h-[30px] ${!isActive ? "grayscale opacity-50" : ""}`}>
                    <Image src={logo} alt={id} width={30} height={30}/>
                </div>
                <p className="text-[16px] font-medium leading[58px]">{buttonText}</p>
            </button>
        </div>
    )
}

function Tabs() {
    const [activeTab, setActiveTab] = useState(testimonialsData[0].id);

    return (
        <div className="w-full max-w-[1200px] mx-auto ">
            <div className="flex flex-row gap-2 flex-wrap justify-center">
                {testimonialsData.map((testimonial) => (
                    <TabButton key={testimonial.id} id={testimonial.id} logo={testimonial.logo} buttonText={testimonial.title} isActive={activeTab === testimonial.id} onClick={() => setActiveTab(testimonial.id)} />
                ))}
            </div>

            <div className="flex flex-col items-center">
                <p className="max-w-[1000px] leading-[32px] text-[#EEE6FC] text-center text-body-sm !font-medium mt-8">
                    {testimonialsData.find(testimonial => testimonial.id === activeTab)?.content}
                </p>

                <p className="text-[#B2A8BE] text-center text-body-sm !font-medium mt-4 leading-[38px]">
                    {"- "+testimonialsData.find(testimonial => testimonial.id === activeTab)?.author}
                </p>
            </div>
        </div>
    )
}

export default function TestimonialsSection() {
    return (
        <div className="py-15">
            <div className="">
                <MainHeader
                    title1="Customer Success Is"
                    title2="The True Reflection Of Our Efforts"
                    summary=""
                />
            </div>
            <div className="mt-[72px]">
                <Tabs />
            </div>
        </div>
    );
}