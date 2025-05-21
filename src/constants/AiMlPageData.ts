import {
  chatgpt,
  claude,
  llamaIndex,
  flair,
  standfordNlp,
  yolo,
  tensorFlow,
  pytorch,
  aiFairness,
  fairLearn,
  shap,
  keras,
  kotlin,
  swift,
} from "../../public/images";


export const aiMlCoeTabsData = [
  {
    id: "gen-ai",
    title: "Generative AI",
    summary:
      "We automate complex business workflows and engineer personalized digital experiences. From AI-powered copilots to dynamic content generation, our services are built to accelerate transformation and deliver measurable outcomes across industries.",
    technologies: [
      {
        icon: chatgpt,
        label: "OpenAI GPT",
      },
      {
        icon: llamaIndex,
        label: "LLaMA",
      },
      {
        icon: claude,
        label: "Claude",
      },
    ],
  },
  {
    id: "nlp",
    title: "Natural Language Processing (NLP)",
    summary:
      "We build NLP systems that understand, interpret, and generate human language with precision. From sentiment analysis to conversational AI, we optimize customer interactions, automate workflows, and gain deeper insights from language.",
    technologies: [
      {
        icon: chatgpt,
        label: "OpenAI GPT",
      },
      {
        icon: flair,
        label: "Flair",
      },
      {
        icon: standfordNlp,
        label: "Stanford NLP",
      },
    ],
  },
  {
    id: "computer-vision",
    title: "Computer Vision (CV)",
    summary:
      "Our computer vision solutions process visual data to detect patterns, classify objects, and enable real-time decisions. From image recognition to video analytics, we deploy models that perform in production environments. We help businesses gain visual intelligence at scale.",
    technologies: [
      {
        icon: yolo,
        label: "YOLO",
      },
      {
        icon: tensorFlow,
        label: "TensorFlow",
      },
      {
        icon: pytorch,
        label: "PyTorch",
      },
    ],
  },
  {
    id: "responsible-ai",
    title: "Responsible AI",
    summary:
      "We integrate ethical, transparent, and bias-aware practices across the AI development lifecycle. From model fairness to explainability, we ensure compliance with evolving AI governance standards. Our approach builds trust and accountability into every AI deployment.",
    technologies: [
      {
        icon: aiFairness,
        label: "AI Fairness 360",
      },
      {
        icon: fairLearn,
        label: "Fairlearn",
      },
      {
        icon: shap,
        label: "SHAP",
      },
    ],
  },
  {
    id: "deep-learning",
    title: "Deep Learning (DL)",
    summary:
      "We design deep learning architectures to solve complex tasks involving vision, language, and structured data. We train our models on large-scale datasets for high accuracy and adaptability.",
    technologies: [
      {
        icon: tensorFlow,
        label: "TensorFlow",
      },
      {
        icon: pytorch,
        label: "PyTorch",
      },
      {
        icon: keras,
        label: "Keras",
      },
    ],
  },
  {
    id: "digit-twin",
    title: "Digital Twin",
    summary:
      "We build digital replicas of physical systems to enable real-time monitoring, simulation, and predictive analysis. By integrating sensor data and operational logic, our DT reflects true system behavior. It drives smarter decisions, reduces downtime, and optimizes performance across assets.",
    technologies: [
      {
        icon: kotlin,
        label: "Kotlin",
      },
      {
        icon: swift,
        label: "Swift",
      },
      {
        icon: keras,
        label: "Objective-C",
      },
    ],
  },
];

export const aiMlPageData = {
  id: "ai-ml",
  name: "Artificial Intelligence & ML",
  pageData: {
    heroSection: {
      title1: "Intelligent Engineering",
      title2: "That Accelerates Growth",
      descrition:
        "We build AI solutions that help businesses make smarter decisions, automate operations, and predict outcomes at scale.",
      buttonText: "Consult with AI Expert",
    },
    coeServiceSection: {
      title1: " Automating your intelligent enterprise",
      title2: "route to business success",
      summary:
        "Enabling enterprise-wide cognitive transformation through AI and automation, driving scalable value via integrated digital ecosystems.",
    },
  },
};
