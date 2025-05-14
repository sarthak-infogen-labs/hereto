// "use client";
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
import { herettoLogo, hamburgerMenu } from "../../../public/images/index";
import { GradientButton } from "../shared/Buttons";

const navLinks = [
  "Industries",
  "Portfolio",
  "Innovation Labs",
  "T-Insights",
  "About",
  "Career",
];


const navItems = [
  {
    id: "ai-frontier",
    type: "text",
    title: "AI frontied",
  },
  {
    id: "coe",
    type: "dropdown",
    title: "CoE",
    items: [
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
    ]
  },
  {
    id: "industries",
    type: "text",
    title: "Industries",
  },
  {
    id: "portfolio",
    type: "text",
    title: "Portfolio",
  },
  {
    id: "innovation-labs",
    type: "text",
    title: "Innovation Labs",
  },
  {
    id: "t-insights",
    type: "text",
    title: "T-Insights",
  },
  {
    id: "about",
    type: "text",
    title: "About",
  },
  {
    id: "career",
    type: "text",
    title: "Career",
  }
];

function navItem(item: any) {
  if(item.type === "dropdown") {
    return (
      <NavigationMenuItem className="">
        <NavigationMenuTrigger className="px-3 py-2 bg-transparent text-[16px] leading-[24px] font-medium text-[#ADA1BB] hover:bg-[#1a1a2a] hover:text-white">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="w-full ">
          <div className=" w-[850px] px-12.5 py-10 md:grid md:grid-cols-4 gap-5 bg-[#3D2D59]/15 backdrop-blur-3xl rounded-3xl border border-[#2C1E43]">
            {item.items.map((item: any, idx: number) => (
              <div key={idx}>
                <h3 className="text-lg font-medium mb-3 text-white">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.links.map((link: any, index: number) => (
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
    );
  }

  return (
    <NavigationMenuItem key={item.id}>
      <NavigationMenuLink
        asChild
        className={cn(
          navigationMenuTriggerStyle(),
          " px-3 py-2 bg-transparent text-[16px] leading-[24px] font-medium text-[#ADA1BB] hover:bg-[#1a1a2a] hover:text-white"
        )}
      >
        <Link href="#">{item.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}
export function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-[#070010] global-padding">
      <div className="main-container-width flex h-[90px] items-center justify-between py-y ">
        {/* Logo */}
        <Link href="/" className=" ">
          <Image className="md:w-[136px] md:h-[45px] w-[100px] h-[30px] "
            src={herettoLogo}
            alt="Logo"
            
          ></Image>
        </Link>

        {/* Navigation */}
        <NavigationMenu className="hidden xl:flex  relative">
          <NavigationMenuList className="gap-2.5 px-5">
            {/* Direct Single Link */}
            {navItems.map((item, index) => (
                <div key={index}>
                  {navItem(item)}
                </div>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Contact Button */}
        <div className="hidden xl:flex">
          <GradientButton
            text="Contact Us"
            link="/contact"
          ></GradientButton>
        </div>

        <div className="xl:hidden px-1 py-2">
          <Image src={hamburgerMenu} alt="Hamburger Menu" width={23} height={15} />
        </div>
      </div>
    </div>
  );
}
