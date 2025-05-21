import EngineeringCard from "@/components/cards/EngineeringCard";
import CustomDropdown from "@/components/shared/CustomDropdown/CustomDropdown";
import React , {useState} from "react";

interface DataEngineeringOffering {
  key: string;
  value: {
    description: string;
    tags: string[];
    imagePath: string;
  };
}

interface EngineeringServicesProps {
  dataEngineeringOfferings: DataEngineeringOffering[];
}

const EngineeringSevicesComponent: React.FC<EngineeringServicesProps> = ({
  dataEngineeringOfferings,
}) => {
  const [hoveredContentIndex, setHoveredcontentIndex] = useState(0);

  const options = dataEngineeringOfferings.map((item, index) => ({
    id: index.toString(),
    label: item.key,
    value: item.key,
  }));

  const selectedOption = options[hoveredContentIndex];


  return <div className="relative  w-full  flex flex-col items-center">
      <div className="text-h1-semibold !font-semibold max-w-[666px] text-center text-[#EEE6FC">
        We Provide End-to-End Data Engineering Offerings
      </div>

      <div
        className="absolute blur-[70px] top-20 md:w-[851px] max-md:w-[602px] h-[222px] rounded-full left-1/2 -translate-x-1/2 z-[-1] "
        style={{
          background: `radial-gradient(50.98% 52.49% at 50.1% 34.98%, rgba(90, 50, 250, 0.3) 30%, rgba(26, 29, 62, 0.4) 100%)`,
        }}
      />

      <div className=" flex flex-col  mt-8 px-4 md:hidden">
        <CustomDropdown
          options={options}
          value={selectedOption?.value}
          onChange={(selected) => {
            const selectedIndex = options.findIndex(
              (option) => option.value === selected
            );
            setHoveredcontentIndex(selectedIndex);
          }}
          label="Select a service"
          placeholder="Choose a service"
        />
      </div>

      <div className="max-md:mt-[24px] mt-[42px] lg:mt-[82px] w-full flex  ">
        <div className="w-1/2 flex flex-col space-y-[54px] max-md:hidden ">
          {dataEngineeringOfferings.map((item, index) => (
            <div key={index} onMouseEnter={() => setHoveredcontentIndex(index)} className="cursor-pointer">
              <li
                className={`list-none text-h5 font-semibold ${
                  hoveredContentIndex === index
                    ? "text-[#EEE6FC]"
                    : "text-[#B2A8BE]"
                }`}
              >
                {item.key}{" "}
              </li>
            </div>
          ))}
        </div>

        <div className="w-1/2 max-md:w-full  ">
          <EngineeringCard
            data={dataEngineeringOfferings[hoveredContentIndex].value}
          />
        </div>
      </div>
    </div>;
};

export default EngineeringSevicesComponent;
