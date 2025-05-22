import React from "react";

const Chip = ({
  content,
  bgColor,
}: {
  content: string;
  bgColor: string;
}) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className="max-md:text-[12px]  !rounded-3xl text-[16px] font-normal text-[#D6C8EE] py-2 px-3.5 box-border"
     >
      {content}
    </div>
  );
};

export default Chip;
