import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { aiFrontierSection } from "@/constants/AIFrontierSectionData";
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
          className={`my-2 border-b ${
            index === aifrontierSectionData.length - 1
              ? "border-b-0"
              : "border-[#1a1a2e]"
          }`}
        >
          <AccordionTrigger className="text-[#00C4CC] hover:text-[#0CD3C9] hover:no-underline cursor-pointer">
            <h6 className="text-h6  leading-[28px]"> {item.data.title}</h6>
          </AccordionTrigger>
          <AccordionContent className=" text-[#F5F5F5] mt-2">
            <h6 className="text-h6  leading-[26px]">
              {" "}
              {item.data.description}
            </h6>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
