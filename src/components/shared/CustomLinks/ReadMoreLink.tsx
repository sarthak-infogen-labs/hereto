// components/ReadMoreLink.tsx
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";
import React from "react";

interface ReadMoreLinkProps {
  href: string;
  label?: string;
}

const ReadMoreLink: React.FC<ReadMoreLinkProps> = ({
  href,
  label = "Read More",
}) => {
  return (
    <Link href={href} className="flex gap-1 items-center justify-center group">
      <p className="font-normal text-[16px] leading-6 tracking-[0.032px] text-[#E3E3E3] group-hover:underline">
        {label}
      </p>
      <ArrowRightIcon className="text-[#E3E3E3] w-4 h-4" />
    </Link>
  );
};

export default ReadMoreLink;
