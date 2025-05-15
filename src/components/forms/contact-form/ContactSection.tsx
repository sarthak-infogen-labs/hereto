"use client";
import Image from "next/image";
import React from "react";
import { ContactForm } from "./ContactForm";
import { map } from "../../../../public/images/index";
export const ContactSection: React.FC = () => {
  return (
    <section className=" mx-auto mt-[130px]  max-w-[1320px] ">
     <div className=" gradient-border-mask py-[60px] flex flex-row w-full justify-between gap-10 px-2 md:px-15 relative backdrop-blur-lg rounded-3xl overflow-x-hidden  bg-blur-gradient" >
        <div className=" space-y-[32px] md:space-y-[36px]  ">
            <div className="space-y-[24px]">
              <h2 className="text-h1-semibold text-[#EEE6FC] leading-15 text-center md:text-left">
              Turn Your Idea Into Reality
              </h2>
              <p className="text-body-sm text-[#D6C8EE] tracking-[0.36px] leading-6 max-w-[600px] md:text-left text-center">
              Collaborate with experts to architect intelligent systems that bring
              your vision to life.
              </p>
            </div>
        
            <ContactForm
                onSubmit={(data) => {
                console.log("Contact form submitted:", data);
                }}
            />
        </div>
        
        <div className="z-[-1] hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2">
            <Image src={map} alt="Map" width={645} height={355}></Image>
        </div>
        
     </div>
    </section>
  );
};