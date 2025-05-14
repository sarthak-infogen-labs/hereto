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
import { herettoLogo, hamburgerMenu } from "../../../public/images/index";
import { GradientButton } from "../shared/CustomButtons/Buttons";
import { useState } from "react";
import { X } from "lucide-react";

const navItems = [
  {
    id: "ai-frontier",
    type: "text",
    title: "AI Frontier",
    link: "ai-frontier"
  },
  {
    id: "solutions",
    type: "dropdown",
    title: "Solutions",
    items: [
      {
        id: "artificial-intelligence",
        title: "Artificial Intelligence & ML",
        links: [
          {
            id: "generative-ai",
            title: "Generative AI",
            link: "artificial-intelligence/generative-ai"
          },
          {
            id: "natural-language-processing",
            title: "Natural Language Processing(NLP)",
            link: "artificial-intelligence/natural-language-processing"
          },
          {
            id: "computer-vision",
            title: "Computer Vision(CV)",
            link: "artificial-intelligence/computer-vision"
          },
          {
            id: "responsible-ai",
            title: "Responsible AI",
            link: "artificial-intelligence/responsible-ai"
          },
          {
            id: "deep-learning",
            title: "Deep Learning",
            link: "artificial-intelligence/deep-learning"
          },
          {
            id: "mlops",
            title: "MLOps",
            link: "artificial-intelligence/mlops"
          },
          {
            id: "quantum-computing",
            title: "Quantum Computing",
            link: "artificial-intelligence/quantum-computing"
          }
        ],
      },
      {
        id: "data-driven-transformation",
        title: "Data-Driven Transformation",
        links: [
          {
            id: "data-engineering",
            title: "Data Engineering",
            link: "data-driven-transformation/data-engineering"
          },
          {
            id: "data-analytics-bi",
            title: "Data Analytics & BI",
            link: "data-driven-transformation/data-analytics-bi"
          },
          {
            id: "data-science",
            title: "Data Science",
            link: "data-driven-transformation/data-science"
          },
          {
            id: 'cloud-computing',
            title: "Cloud Computing",
            link: "data-driven-transformation/cloud-computing"
          }
        ]
      },
      {
        id: "product-engineering",
        title: "Product Engineering",
        links: [
          {
            id: "app-development",
            title: "App Development",
            link: "product-engineering/app-development"
          },
          {
            id: "web-development",
            title: "Web Development",
            link: "product-engineering/web-development"
          },
          {
            id: "application-modernization",
            title: "Application Modernization",
            link: "product-engineering/application-modernization"
          },
          {
            id: "quality-assurance",
            title: "Quality Assurance(QA)",
            link: "product-engineering/quality-assurance"
          },
          {
            id: "ui/ux-product-design",
            title: "UI/UX Product Design",
            link: "product-engineering/ui/ux-product-design"
          },
          {
            id: "devops",
            title: "DevOps",
            link: "product-engineering/devops"
          },
          {
            id: "staff-augmentation",
            title: "Staff Augmentation",
            link: "product-engineering/staff-augmentation"
          }
        ]
      },
      {
        id: "next-gen-transformation",
        title: "Next-Gen Transformation",
        links: [
          {
            id: "extended-reality",
            title: "Extended Reality (XR)",
            link: "next-gen-transformation/extended-reality"
          },
          {
            id: "embedded-iot-connectivity",
            title: "Embedded IoT & Connectivity",
            link: "next-gen-transformation/embedded-iot-connectivity"
          },
          {
            id: "game-development",
            title: "Game Development",
            link: "next-gen-transformation/game-development"
          },
          {
            id: "media-content-creation",
            title: "Media & Content Creation",
            link: "next-gen-transformation/media-content-creation"
          }
        ]
      }
    ]
  },
  {
    id: "industries",
    type: "text",
    title: "Industries",
    link: "industries"
  },
  {
    id: "portfolio",
    type: "text",
    title: "Portfolio",
    link: "portfolio"
  },
  {
    id: "innovation-labs",
    type: "text",
    title: "Innovation Labs",
    link: "innovation-labs"
  },
  {
    id: "t-insights",
    type: "text",
    title: "T-Insights",
    link: "t-insights"
  },
  {
    id: "about",
    type: "text",
    title: "About",
    link: "about"
  },
  {
    id: "career",
    type: "text",
    title: "Career",
    link: "career"
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
                <h3 className="text-lg font-medium mb-3 text-white h-20 pr-2">
                  {item.title}
                </h3>
                <ul className="space-y-2">
                  {item.links.map((link: any, index: number) => (
                    <li key={index}>
                      <Link
                        href={link.link}
                        className="text-sm text-gray-300 hover:text-white"
                      >
                        {link.title}
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
        <Link href={item.link}>{item.title}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function MobileMenu() {
  return (
    <div className="fixed top-[90px] left-0 right-0 w-full h-full bg-[#070010] text-[#F5F5F5]">
      {
        navItems.map((item, index) => (
          <div className="border-y-1 border-[#332C44]">
            <div className="text-[15px] leading-[24px] py-5 global-padding">
              {item.type === "text" ? <Link href={"/"+item.link}>
                {item.title}
              </Link> : <div>
                {item.title}
              </div>}
            </div>
          </div>
        ))
      }
      
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full bg-[#070010] ">
      <div className="main-container-width flex h-[90px] items-center justify-between py-y global-padding">
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

        <div className="xl:hidden px-1 py-2" onClick={() => setIsOpen(!isOpen)}>
          {
            isOpen ? <div className="flex items-center gap-5.5 text-[#F5F5F5] text-[15px] underline leading-[24px] underline-offset-2">
              <div className="text-white">Contact Us</div>
              <X className="text-white" size={18}/>
            </div> : <Image src={hamburgerMenu} alt="Hamburger Menu" width={23} height={15} />
          }
          
        </div>
        {isOpen && <MobileMenu />}
      </div>
    </div>
  );
}
