import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { aifrontierSectionData } from "@/constants/LandingPageData";

export function AIAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full max-w-[580px]"
      defaultValue="agentic-ai"
    >
      {aifrontierSectionData.map((item, index) => (
        <AccordionItem
          key={item.id}
          value={item.id}
          // className={`my-2 border-b ${
          //   index === aifrontierSectionData.length - 1
          //     ? "border-b-0"
          //     : "border-[#1a1a2e]"
          // }`}

          className="my-[12px]"
        >
          <AccordionTrigger className="text-[#00C4CC] hover:text-[#0CD3C9] hover:no-underline cursor-pointer mb-[10px]">
            <div className="text-[16px] font-[600]  leading-[28px]">
              {" "}
              {item.data.title}
            </div>
          </AccordionTrigger>
          <AccordionContent className=" text-[#F5F5F5] mt-2 ">
            <div className="text-body-sm  leading-[26px] text-[#D6C8EE]">
              {" "}
              {item.data.description}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
