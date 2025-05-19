import React from "react";
import { FooterLogo } from "./FooterLogo";
import { FooterNavigation } from "./FooterNavigation";
import { FooterSignup } from "./FooterSignup";
import Image from "next/image";
import { linkedinLogo, xLogo, facebookLogo, gmailLogo } from "../../../public/images/index";
export const Footer: React.FC = () => {
  const quickLinks = [
    { text: "Portfolio", href: "/portfolio" },
    { text: "Innovation Labs", href: "/innovation-labs" },
    { text: "T-insights", href: "/t-insights" },
    { text: "About", href: "/about-us" },
    { text: "Collaboration", href: "/collaboration" },
  ];

  const coeLinks = [
    { text: "Next-Gen Engineering", href: "/next-gen-transformation" },
    { text: "Data-driven Transformation", href: "/data-driven-transformation" },
    { text: "Artificial Intelligence & ML", href: "/ai-ml" },
    { text: "Full Stack Engineering", href: "/product-engineering" },
    { text: "Consulting & Advisory", href: "/consulting" },
  ];

  return (
    <footer className=" md:px-5 lg:px-21 mt-[130px] pt-5 pb-10 ">
      <div className=" max-w-[1270px] w-full flex flex-col lg:flex-row flex-wrap gap-10 items-center lg:items-start mx-auto py-[40px]">
        
        {/* Logo */}
        <div className="flex-1 flex justify-center lg:justify-start  max-w-90">
          <FooterLogo />
        </div>

        {/* Links + CoE */}
        <div className=" flex flex-col-reverse md:flex-row items-center md:items-start gap-[38px] flex-1 justify-center lg:justify-start">
          <div className="px-4 flex flex-row items-start gap-[38px] flex-1 justify-center lg:justify-start pt-4">
            <FooterNavigation
              title="Quick links"
              links={quickLinks}
              className="max-w-[162px] md:items-start md:justify-start justify-center "
            />
            <FooterNavigation
              title="CoE"
              links={coeLinks}
              className="min-w-[150px] md:items-start md:justify-start justify-center "
            />
          </div>

          {/* Signup */}
          <div className=" flex-1 flex justify-center w-full lg:justify-end pt-2">
            <FooterSignup />
          </div>
        </div>

      </div>

      <div className="mt-8">
          <div className=" py-8 border-t-[0.4px] border-[#F5F5F5]/40 w-full max-w-[1270px] mx-auto flex items-center justify-center flex-col lg:justify-between lg:flex-row">
              <span className="text-label text-[#B2A8BE] ">© 2025 All rights reserved</span>
              <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                  <a href="javascript:;"  className=" flex justify-center items-center ">
                    <Image src={linkedinLogo} alt="LinkedIn" width={24} height={24} />
                  </a>
                  <a href="javascript:;"  className=" flex justify-center items-center ">
                    <Image src={xLogo} alt="Twitter" width={24} height={24} />
                  </a>
                  <a href="javascript:;"  className=" flex justify-center items-center ">
                    <Image src={gmailLogo} alt="gmail" width={24} height={24} />
                  </a>
                  <a href="javascript:;"  className=" flex justify-center items-center ">
                      <Image src={facebookLogo} alt="facebook" width={24} height={24} />
                          
                  </a>
              </div>
          </div>
      </div>
    </footer>

  );
};