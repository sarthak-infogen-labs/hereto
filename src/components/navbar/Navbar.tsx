"use client";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
// import { GradientButton } from "@/components/ui/Buttons";

const navLinks = [
  "Industries",
  "Portfolio",
  "Innovation Labs",
  "T-Insights",
  "About",
  "Career",
];

const solutionsSections = [
  {
    title: "Next-Gen Transformation",
    links: [
      "Extended Reality (XR)",
      "Embedded IoT & Connectivity",
      "Game Development",
      "Media & Content Creation",
    ],
  },
  {
    title: "Intelligent Process Automation (IPA)",
    links: [
      "Robotic Process Automation (RPA)",
      "LCNC Development",
      "Cognitive Automation Development",
    ],
  },
  {
    title: "Data-Driven Transformation",
    links: ["Data Engineering", "Data Analytics & BI", "Data Science"],
  },
  {
    title: "Product Engineering",
    links: [
      "App Development",
      "Web Development",
      "LCNC App Development",
      "Application Modernization",
      "Product Design Development",
    ],
  },
];

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-[#070010]">
      <div className="max-w-[1440px] mx-auto flex h-20 items-center justify-between py-y px-20">
        {/* Logo */}
        <Link href="/" className="flex items-center  min-w-30">
          <Image
            src={"/logos/Heretto_Nav_logo.png"}
            alt="Logo"
            width={136}
            height={57}
          ></Image>
        </Link>

        {/* Navigation */}
        <NavigationMenu className="hidden xl:flex  relative">
          <NavigationMenuList className="gap-2.5 px-5">
            {/* Direct Single Link */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  " px-3 py-2 bg-transparent text-[16px] leading-[24px] font-medium text-[#ADA1BB] hover:bg-[#1a1a2a] hover:text-white"
                )}
              >
                <Link href="#">AI Frontier</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Dropdown: CoE */}
            <NavigationMenuItem className="">
              <NavigationMenuTrigger className="px-3 py-2 bg-transparent text-[16px] leading-[24px] font-medium text-[#ADA1BB] hover:bg-[#1a1a2a] hover:text-white">
                CoE
              </NavigationMenuTrigger>
              <NavigationMenuContent className="w-full ">
                <div className=" w-[850px] px-12.5 py-10 md:grid md:grid-cols-4 gap-5 bg-[#3D2D59]/15 backdrop-blur-3xl rounded-3xl border border-[#2C1E43]">
                  {solutionsSections.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="text-lg font-medium mb-3 text-white">
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.links.map((link, index) => (
                          <li key={index}>
                            <Link
                              href="#"
                              className="text-sm text-gray-300 hover:text-white"
                            >
                              {link}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Direct Link Items */}
            {navLinks.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink
                  asChild
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "px-3 py-2 bg-transparent text-[16px] leading-[24px] font-medium text-[#ADA1BB] hover:bg-[#1a1a2a] hover:text-white"
                  )}
                >
                  <Link href="#">{item}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact Button */}
        {/* <GradientButton
          text="Contact Us"
          handleClick={() => {
            console.log("Contact us button clicked");
          }}
        ></GradientButton> */}
      </div>
    </div>
  );
}
