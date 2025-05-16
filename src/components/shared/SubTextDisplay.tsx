import { cn } from "@/lib/utils";
import React from "react";

type SubTextDisplayProps = {
  text: string;
  className?: string;
};

const SubTextDisplay = ({ text, className }: SubTextDisplayProps) => {
  return (
    <div>
      <p
        className={
          "text-[#D6C8EE] text-body leading-6 tracking-[0.36px] w-full"
        }
      >
        {text}
      </p>
    </div>
  );
};

export default SubTextDisplay;
