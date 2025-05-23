"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { StaticImageData } from "next/image";

const LeadershipTeamCard = ({
  member,
}: {
  member: {
    name: string;
    image: StaticImageData;
    designation: string;
  };
}) => {
  return (
    <Card
      className="min-w-[237px] min-h-[168px] p-[24px] flex justify-between rounded-[8px] border-[1.2px] bg-[#332C4424] backdrop-blur-[100px]"
      style={{
        borderStyle: "solid",
        borderColor: "transparent",
        backgroundClip: "padding-box",
        position: "relative",
        zIndex: 0,
      }}
    >
      <div
        className="absolute inset-0 rounded-[8px] pointer-events-none z-[-1]"
        style={{
          padding: "1.2px",
          background:
            "radial-gradient(29.7% 43.61% at 38.31% 2.28%, #DACBFF 0%, #291E44 100%)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <CardContent className="p-0 w-full h-full flex justify-between flex-col items-start">
        <div className="">
          <Avatar className="h-[64px] w-[64px]">
            <AvatarImage src={member.image.src} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="mt-[35px]">
          <div>
            <h6 className="text-h6 text-white !font-semibold">{member.name}</h6>
          </div>
          <div>
            <p className="text-[14px] md:text-[16px] text-[#D6C8EE99]">
              {member.designation}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LeadershipTeamCard;
