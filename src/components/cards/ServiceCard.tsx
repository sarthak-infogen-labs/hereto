import Image from "next/image";
import React from "react";
import { CustomButton } from "../shared/CustomButtons/Buttons";

const ServiceCard = () => {
  return (
    <div className="min-h-[321px] mt-[24px] lg:mt-[30px] xl:mt-[36px] ">
      {/* Flex on large screens, stacked column on small screens */}
      <div className="flex flex-col lg:flex-row gap-6 ">
        {/* Left Section */}
        <div className="flex-1 order-1 lg:order-none ">
          {/* Title - only visible on lg+ */}
          <h2 className="hidden lg:block text-h3 lg:!text-[2rem] text-white">
            Application Development
          </h2>

          {/* Summary paragraph - always visible */}
          <p className="text-white text-body-sm !font-normal">
            Our expert team specializes in developing robust, scalable mobile
            applications that set new industry standards in the mobile-first
            ecosystem, implementing advanced technologies to deliver
            high-performance solutions specific to your business needs
          </p>

          {/* Image - shown earlier on mobile */}
          <div className="mt-[24px] block lg:hidden">
            <Image
              src={"/images/application_dummy.svg"}
              width={472}
              height={262}
              alt=""
              className="w-full max-h-[262px]"
            />
          </div>

          {/* Kotlin items */}
          <div className="flex justify-between lg:justify-start items-center gap-4 mt-[16px] flex-wrap">
            {[1, 2, 3].map((item, index) => (
              <div
                className="flex items-center gap-1 text-white text-sm"
                key={index}
              >
                <Image
                  height={24}
                  width={24}
                  src={"/images/kotlin.svg"}
                  alt="Kotlin"
                />
                <p>Kotlin</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="mt-[24px] lg:mt-[30px] xl:mt-[36px] flex justify-center lg:justify-start">
            <CustomButton className="w-full bg-transparent max-w-[350px] lg:w-auto">{"Explore More"}</CustomButton>
          </div>
        </div>

        {/* Right Section (image for lg+) */}
        <div className="flex-1 hidden lg:flex lg:justify-end lg:items-center">
          <Image
            src={"/images/application_dummy.svg"}
            width={472}
            height={262}
            alt=""
            className="max-h-[262px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
