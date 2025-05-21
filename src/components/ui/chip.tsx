import React from "react";

const Chip = ({ content }: { content: string }) => {
  return (
    <div className=" max-md:text-[12px]  !rounded-3xl text-[16px] font-normal text-[#D6C8EE] py-2 px-3.5 box-border !bg-[#332C44] ">
      {content}
    </div>
  );
};

export default Chip;
