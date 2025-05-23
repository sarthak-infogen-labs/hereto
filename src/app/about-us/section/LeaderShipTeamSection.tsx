import LeadershipTeamCard from "@/components/cards/LeadershipTeamCard";
import MainHeader from "@/components/headers/MainHeader";
import { aboutUsPageData } from "@/constants/AboutUsPageData";
import React from "react";
import {
  steveJohnsom,
  emilyCarter,
  davilPatel,
} from "../../../../public/images";

const mockTeam = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
  // Add as many as needed
];

const leadershipTeamMemberData = [
  {
    name: "Steve Johnson",
    image: steveJohnsom,
    designation: "Product Manager",
  },
  {
    name: "David Patel",
    image: davilPatel,
    designation: "Product Manager",
  },
  {
    name: "Emily Carter",
    image: emilyCarter,
    designation: "Operational Manager",
  },
];

const LeaderShipTeamSection = () => {
  return (
    <div>
      <MainHeader
        title1={aboutUsPageData.leaderShipTeamSection.header.title1}
        summary={aboutUsPageData.leaderShipTeamSection.header.description}
      />
      <div className="flex justify-center mt-[32px] md:mt-[50px]  lg:mt-[72px]">
        <div className="flex gap-4 overflow-x-auto scroll-hidden py-4 px-2">
          {leadershipTeamMemberData.map((member,index) => (
            <LeadershipTeamCard key={index} member={member}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderShipTeamSection;
