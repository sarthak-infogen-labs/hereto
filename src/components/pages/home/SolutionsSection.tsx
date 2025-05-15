import React from "react";

const SolutionsSection = () => {
  return (
    <div className="min-h-screen border-test">
      <div className="">
        <div className="flex flex-col items-center max-w-[1440px] mx-auto">
          <div className="">
            <p className="text-[#EEE6FC] text-5xl leading-[60px] font-semibold max-w-[930px] text-center">
              Engineering-First
              <br />
              Excellence Across Every Domain
            </p>
          </div>

          <div className="mt-6">
            <p className="text-[#D6C8EE] text-[18px] leading-[26px] font-normal max-w-[806px] tracking-[0.036px] text-center">
              Our solutions accelerate innovation and ensure consistency by
              standardizing best practices. We leverage domain knowledge and
              emerging tech to support collaborative execution.
            </p>
          </div>

          <div className="mt-19 w-full max-w-[1440px]">{/* <CoETabs /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default SolutionsSection;
