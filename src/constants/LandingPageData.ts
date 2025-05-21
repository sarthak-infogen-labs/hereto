import {
  nextGenSolutionImage,
  aiMlSolutionImage,
  dataDrivenSolutionImage,
  aproductEnginneringSolutionImage,
  kickoff,
  kickoffbase,
  create,
  createbase,
  build,
  buildbase,
  deliver,
  deliverbase,
  smeeple,
  mitsubishi,
  thito,
  wagoneer,
  medisimLab,
  shivajiUniversity,
} from "../../public/images";

export const aifrontierSectionData = [
  {
    id: "agentic-ai",
    data: {
      title: "Agentic AI",
      description:
        "We design and build intelligent AI agents that can autonomously execute tasks based on predefined goals. This allows businesses to automate repetitive processes & accelerate work efficiency with hyper-productivity.",
    },
  },
  {
    id: "agent2agent-protocol-a2a",
    data: {
      title: "Agent2Agent Protocol (A2A)",
      description:
        "Enable structured communication between autonomous agents through a standardized Agent-to-Agent (A2A) interaction framework. It allows multiple intelligent agents to seamlessly collaborate, delegate responsibilities.",
    },
  },
  {
    id: "model-context-protocol-mcp",
    data: {
      title: "Model Context Protocol (MCP)",
      description:
        "It enables intelligent agents to understand, recall, and act based on evolving operational context. MCP enhances decision-making accuracy, reduces model drift, and streamlines agent collaboration in complex systems.",
    },
  },
  {
    id: "retrieval-augmented-generation-rag",
    data: {
      title: "Retrieval-Augmented Generation (RAG)",
      description:
        "Combine the power of LLM with real-time data retrieval to generate accurate, context-rich responses. RAG reduces hallucinations and improves factual consistency. It's ideal for dynamic applications like question answering, chatbots, and document summarization.",
    },
  },
  {
    id: "intelligent-process-automation",
    data: {
      title: "Intelligent Process Automation (IPA)",
      description:
        "Intelligent Process Automation (IPA) integrates robotic process automation (RPA) with AI technologies to enables the automation of complex, decision-based tasks that traditionally required human judgment. IPA improves operational efficiency, reduces errors, and allows businesses to scale processes intelligently.",
    },
  },
];

export const solutionsSectionData = [
  {
    id: "ai-ml",
    data: {
      title: "Artificial Intelligence & ML",
      description:
        "We help businesses evaluate and adopt ethical AI solution approaches to modernize workflows and drive efficiency. Build systems that are scalable, transparent, and aligned with both regulatory standards and organizational values.",
      badges: [
        "Natural Language Processing (NLP)",
        "Computer Vision (CV)",
        "Generative AI",
      ],
      image: aiMlSolutionImage,
      readMoreLink: "#",
    },
  },
  {
    id: "data-driven-transformation",
    data: {
      title: "Data-Driven Transformation",
      description:
        "We help organizations make smarter, faster decisions by building scalable data infrastructure. Expertise in turning complex, high-volume data into concise, actionable intelligence that supports enterprises to make informed decisions.",
      badges: ["Data Engineering", " Data Analytics & BI", " Data Science"],
      image: dataDrivenSolutionImage,
      readMoreLink: "#",
    },
  },
  {
    id: "product-engineering",
    data: {
      title: "Product Engineering",
      description:
        "Driven by a strong product engineering DNA, we help enterprises accelerate product development through end-to-end agile engineering. Our approach ensures speed, flexibility, and efficiency across the entire product lifecycle.",
      badges: [
        "App Development",
        "Web Apps",
        "Application Modernization",
        "Product Designing ",
      ],
      image: aproductEnginneringSolutionImage,
      readMoreLink: "#",
    },
  },
  {
    id: "next-gen-transformation",
    data: {
      title: "Next-Gen Transformation",
      description:
        " Next-Gen Transformation focuses on building spatially aware XR (AR/VR/MR) applications, intelligent edge-connected environments using embedded IoT, and real-time simulation engines. It also develops interactive content pipelines for 2D/3D media and hyper-casual games.",
      badges: [
        "Digital Twin",
        " Augmented Reality (AR)",
        " Virtual Reality (VR)",
        "Embedded IoT, Media & Content Creation",
      ],
      image: nextGenSolutionImage,
      readMoreLink: "#",
    },
  },
];

export const landingPageData = {
  header: {
    title1: "Innovation Beyond",
    title2: "Imagination",
  },
  disclaimer: {
    text: `This chatbot is powered by Heretto. AI-generated responses may be inaccurate, please double-check information. This chat is not intended to process Personal Data. Information regarding our processing of Personal Data is available in our`,
    linkText: "Privacy Policy.",
    linkHref: "#",
  },
  aifrontierSection: {
    title: "Reimagine Business Transformation with Intelligent Automation.",
    btnName: "AI Frontier",
    data: aifrontierSectionData,
  },
  solutionSection: {
    header: {
      title1: "Engineering-First",
      title2: "Excellence Across Every Domain",
    },
    summary: `Our solutions accelerate innovation and ensure consistency by
    standardizing best practices. We leverage domain knowledge and
    emerging tech to support collaborative execution.`,
    data: solutionsSectionData,
  },
  scalableSolutionsSection: {
    header: {
      title1: "Transforming Businesses",
      title2: "Through Scalable Solutions",
    },
    summary: `We build reliable, scalable systems that help businesses grow efficiently, adapt faster, and deliver consistent value.`,
    graphicCardData: [
      {
        title: "Kickoff",
        topImage: kickoff,
        bottomImage: kickoffbase,
        listItems: [
          "Set Clear Goals",
          "Clarify Team Roles",
          "Outline Key Milestones",
        ],
      },
      {
        title: "Create",
        topImage: create,
        bottomImage: createbase,
        listItems: [
          "Brainstorm Bold Ideas",
          "Build Prototypes",
          "Iterate with Feedback",
        ],
      },
      {
        title: "Build",
        topImage: build,
        bottomImage: buildbase,
        listItems: [
          "Work in Sprints",
          "Daily Sync Meetings",
          "Boost Efficiency Tools",
        ],
      },
      {
        title: "Deliver",
        topImage: deliver,
        bottomImage: deliverbase,
        listItems: [
          "Polish Final Product",
          "Assess Project Impact",
          "Capture Key Insights",
        ],
      },
    ],
  },
  industriesInnovateSection: {
    header: {
      title1: "Industries We Innovate",
    },
    summary:
      "Our engineers and experts have enabled businesses across sectors to meet critical goals. With deep technical experience and a tested methodology, we support your success at every stage. ",
    logoLabel: [
      {
        icon: smeeple,
        label: "Smeeple",
      },
      {
        icon: mitsubishi,
        label: "Mitsubishi",
      },
      {
        icon: thito,
        label: "THITO",
      },
      {
        icon: shivajiUniversity,
        label: "Shivaji University",
      },
      {
        icon: wagoneer,
        label: "Wagoneer",
      },
      {
        icon: medisimLab,
        label: "MedisimLAB",
      },
    ],
  },
  aboutUsSection: {
    title: `We are a group of tech enthusiasts passionate about early adoption of 
                next-generation technologies and engineering top-scale products to tackle the 
                pressing problems within diverse industries.`,
  },
  innovationLabSection: {
    header: {
      title: "Innovating With Purpose and Precision",
    },
    summary:
      "Innovation Lab is a dedicated space where we present our work on new technologies, product prototypes, and functional Proof of Concepts (POCs). It reflects our ongoing focus on solving real-world problems through practical engineering and modern tech adoption.",
    btnTitle: "Innovation Labs",
    data: [
      {
        innovationName: "Grace",
        innovationDescription:
          "Our innovative e-learning platform is designed for children aged 4 to 5. It offers an engaging, interactive experience",
        navLink: "#",
        image: "",
      },
      {
        innovationName: "Thito",
        innovationDescription:
          "Our innovative e-learning platform is designed for children aged 4 to 5. It offers an engaging, interactive experience",
        navLink: "#",
        image: "",
      },
      {
        innovationName: "BOForge",
        innovationDescription:
          "Our innovative e-learning platform is designed for children aged 4 to 5. It offers an engaging, interactive experience",
        navLink: "#",
        image: "",
      },
    ],
  },
};
