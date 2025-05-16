import MainHeader from "@/components/headers/MainHeader";
import React from "react";
import { FeatureSection } from "./FeatureSection";

interface FeatureData {
  title: string;
  description: string;
  imageSrc: string;
  iconSrc: string;
  isReversed?: boolean;
}

export const EnterpriseAutomation: React.FC = () => {
  const title1 = "Next-Gen Enterprise Automation";
  const title2 = "with Distributed Intelligent Agents";
  const sectionDescription =
    "We build agent-based systems for autonomous task execution, inter-agent coordination, and adaptive process optimization across enterprise workflows.";

  const features: FeatureData[] = [
    {
      title: "Agentic AI",
      description:
        "We build autonomous agents that can reason, plan, and act across complex workflows and environments. They integrate with tools, APIs, and systems to execute tasks with minimal human intervention.",
      imageSrc: "images/ai-fronntier.svg",
      iconSrc: "",
      isReversed: false,
    },
    {
      title: "Agent2Agent Protocol \n(A2A)",
      description:
        "A2A protocol enables multiple AI agents to collaborate, delegate, and communicate seamlessly. With A2A, agents can negotiate roles, share context, and complete multi-agent workflows efficiently. This supports decentralized problem-solving across distributed systems.",
      imageSrc: "images/ai-fronntier.svg",
      iconSrc: "",
      isReversed: true,
    },
    {
      title: "Model Context Protocol \n(MCP)",
      description:
        "We implement MCP to manage and inject dynamic, task-specific context into foundation models. It enables consistent behavior, multi-turn understanding, and memory across interactions & supports structured agent behavior and long-horizon use cases.",
      imageSrc: "images/ai-fronntier.svg",

      iconSrc: "",
      isReversed: false,
    },
    {
      title: "Retrieval Augmented Generation (RAG)",
      description:
        "Our RAG solutions combine retrieval systems with language models to generate context-aware, accurate responses. It reduces hallucinations by grounding outputs in trusted data sources.",
      imageSrc: "images/ai-fronntier.svg",

      iconSrc: "",
      isReversed: true,
    },
    {
      title: "Intelligent Process Automation (IPA)",
      description:
        "We integrate AI with traditional RPA to handle unstructured inputs and make rule-based workflows adaptive. IPA brings cognitive capabilities to document processing, decision-making, and task routing.",
      imageSrc: "images/ai-fronntier.svg",

      iconSrc: "",
      isReversed: false,
    },
  ];

  return (
    <section
      className="bg-[#070010]/12 border overflow-hidden px-10 py-[24px] lg:py-[55px] xl:py-[80px] rounded-3xl border-[#322B43] max-md:px-5  backdrop-blur-2xl "
      aria-labelledby="enterprise-automation-title"
    >
      <MainHeader
        title1={title1}
        title2={title2}
        summary={sectionDescription}
      />

      <div className="flex flex-col space-y-[72px] mt-[52px] lg:[90px] lg:mt-[122px]">
        {features.map((feature, index) => (
          <FeatureSection
            key={index}
            title={feature.title}
            description={feature.description}
            imageSrc={feature.imageSrc}
            isReversed={feature.isReversed}
          />
        ))}
      </div>
    </section>
  );
};
