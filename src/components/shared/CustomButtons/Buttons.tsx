"use client";

import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export const GradientButton = ({
  text,
  link,
}: {
  text: string;
  link: string;
}) => {
  return (
    <div className="inline-flex flex-none">
      <Link
        href={link}
        className="relative bg-[#F5F5F5] text-[#2C2C2C] font-semibold text-lg leading-6 px-7 py-2 rounded-md overflow-hidden transition-colors duration-500 hover:text-[#F5F5F5] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#00C4CC] before:to-[#7D2AE8] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 active:opacity-70"
      >
        <span className="relative z-10">{text}</span>
      </Link>
    </div>
  );
};

export const GradientBGButton = ({ text }: { text: string }) => {
  return (
    <div className="inline-flex">
      <div className="relative group rounded-md bg-transparent p-[0.5px] shadow-[0_0_15px_rgba(0,196,204,0.51)] transition-all duration-300  hover:shadow-none ">
        <button className="relative z-10  bg-[#000000] text-[#F5F5F5] font-semibold text-lg leading-6 px-11 py-2 rounded-md overflow-hidden ">
          <span className="">{text}</span>
        </button>

        <div className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 bg-gradient-to-r from-[#00C4CC] to-[#7D2AE8] transition-opacity duration-300 pointer-events-none z-0" />
      </div>
    </div>
  );
};

export const GradientButtonWithAnimation = ({ text }: { text: string }) => {
  return (
    <div className="">
      <button className="group relative rounded-full pl-5 pr-2.5 py-1.5 text-[#F5F5F5] flex flex-row items-center gap-2 font-normal text-[16px] leading-6 transition-all duration-500 overflow-hidden hover:text-white">
        {/* Gradient Background Layer */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#00C4CC] to-[#7D2AE8] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full z-0" />

        {/* Content */}
        <span className="relative z-10">{text}</span>

        <span className="relative z-10 text-[#9747FF] p-1.5 rounded-full bg-[#F5F5F5] group-hover:bg-transparent group-hover:text-[#F5F5F5] transition-all duration-500">
          <ArrowRight size={20} />
        </span>
      </button>
    </div>
  );
};

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "h-10 inline-flex items-center justify-center gap-2 pl-5 pr-2.5 bg-[#19082E] border border-[#F5F5F5] rounded-md text-[#F5F5F5] text-[16px] leading-[24px] font-normal cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
        <ArrowRightIcon className="w-5 h-5 text-[#F5F5F5]" strokeWidth={1} />
      </button>
    );
  }
);
