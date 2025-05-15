import GraphicsCard from "@/components/cards/GraphicsCard";
import MainHeader from "@/components/headers/MainHeader";
import React from "react";
import {
  create,
  kickoff,
  kickoffbase,
  createbase,
  build,
  buildbase,
  deliver,
  deliverbase,
} from "../../../../public/images";
import { CustomButton } from "@/components/shared/CustomButtons/Buttons";

export const GraphicsComponent = () => {
  return (
    <div className="flex flex-row items-center justify-center space-x-2">
      <GraphicsCard
        title="Kickoff"
        topImage={kickoff}
        bottomImage={kickoffbase}
        listItems={[
          "Set Clear Goals",
          "Clarify Team Roles",
          "Outline Key Milestones",
        ]}
      />
      <GraphicsCard
        title="Create"
        topImage={create}
        bottomImage={createbase}
        listItems={[
          "Brainstorm Bold Ideas",
          "Build Prototypes",
          "Iterate with Feedback",
        ]}
      />
      <GraphicsCard
        title="Build"
        topImage={build}
        bottomImage={buildbase}
        listItems={[
          "Work in Sprints",
          "Daily Sync Meetings",
          "Boost Efficiency Tools",
        ]}
      />
      <GraphicsCard
        title="Deliver"
        topImage={deliver}
        bottomImage={deliverbase}
        listItems={[
          "Polish Final Product",
          "Assess Project Impact",
          "Capture Key Insights",
        ]}
      />
      {/* <Image src={graphicsImage} alt="graphics" /> */}
    </div>
  );
};

const ScalableSolutionsSection = () => {
  return (
    <div className="relative ">
      <div>
        <div
          className="rounded-[100%] z-[-1] absolute top-30 left-1/2 -translate-x-1/2 w-[1018px] h-[220px] blur-[100px] "
          style={{
            background:
              "radial-gradient(circle, rgba(90, 50, 250, 0.3) 0%, #070010 100%)",
          }}
        ></div>
        <MainHeader
          title1="Transforming Businesses"
          title2="Through Scalable Solutions"
          summary="We build reliable, scalable systems that help businesses grow efficiently, adapt faster, and deliver consistent value."
          hideSmallerDeviceSummary={false}
        />
        <div className="mt-[72px] hidden lg:block">
          <GraphicsComponent />
        </div>
        <div className=" lg:hidden mt-[24px] mx-auto flex  justify-center  items-center">
          <CustomButton className="w-full max-w-[314px] mx-auto justify-center">
            {"About Us"}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default ScalableSolutionsSection;
