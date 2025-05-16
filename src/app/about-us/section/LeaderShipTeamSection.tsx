import LeadershipTeamCard from "@/components/cards/LeadershipTeamCard";
import MainHeader from "@/components/headers/MainHeader";
import React from "react";

const mockTeam = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
  { id: 4, name: "Diana" },
  // Add as many as needed
];

const LeaderShipTeamSection = () => {
  return (
    <div>
      <MainHeader
        title1="Meet Our Leadership Team"
        summary="Our team combines deep expertise, extensive experience, and genuine passion to make your digital journey seamless and successful."
      />
      <div className="flex justify-center mt-[32px] md:mt-[50px]  lg:mt-[72px]">
        <div className="flex gap-4 overflow-x-auto scroll-hidden py-4 px-2">
          {mockTeam.map((member) => (
            <LeadershipTeamCard key={member.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderShipTeamSection;
