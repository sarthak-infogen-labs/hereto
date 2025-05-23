import {
  kotlin,
  swift,
  objectiveC,
  javascript,
  reactjs,
  nodejs,
  docker,
  kubernetes,
  jenkins,
  selenium,
  cypress,
  playwrite,
  figma,
  adobeXD,
  sketch,
  terraform,
  ansible,
  awsCloudformation,
} from "../../public/images";

export const productEngineeringCoeTabsData = [
  {
    id: "app-development",
    title: "Application Development",
    summary:
      "Our expert team specializes in developing robust, scalable mobile applications that set new industry standards in the mobile-first ecosystem, implementing advanced technologies to deliver high-performance solutions specific to your business needs.",
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
        icon: objectiveC,
        label: "Objective-C",
      },
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    summary:
      "Our web development offerings combine your business requirements with advanced technologies to build dynamic, secure, and scalable web applications. We focus on performance optimization, ensuring responsive and high-quality user experiences.",
    technologies: [
      {
        icon: javascript,
        label: "JavaScript",
      },
      {
        icon: reactjs,
        label: "React.js",
      },
      {
        icon: nodejs,
        label: "Node.js",
      },
    ],
  },
  {
    id: "app-modernization",
    title: "Application Modernization",
    summary:
      "We help businesses modernize legacy applications with improved functionality, performance, and security. Our approach includes reengineering systems, integrating new technologies, and ensuring seamless data migration to ensure long-term scalability and reduced maintenance overhead.",
    technologies: [
      {
        icon: docker,
        label: "Docker",
      },
      {
        icon: kubernetes,
        label: "Kubernetes",
      },
      {
        icon: jenkins,
        label: "Jenkins",
      },
    ],
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance (QA)",
    summary:
      "Our QA services encompass end-to-end testing for functionality, performance, security, and usability. We ensure that products meet high-quality standards by using automated and manual testing methodologies.",
    technologies: [
      {
        icon: selenium,
        label: "Selenium",
      },
      {
        icon: cypress,
        label: "Cypress",
      },
      {
        icon: playwrite,
        label: "Playwright",
      },
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Product Design",
    summary:
      "We focus on creating intuitive and user-centric designs that enhance usability and engagement. Our design process combines user research, wireframing, and prototyping to ensure the product delivers both a seamless experience and meets user expectations.",
    technologies: [
      {
        icon: figma,
        label: "Figma",
      },
      {
        icon: adobeXD,
        label: "Adobe XD",
      },
      {
        icon: sketch,
        label: "Sketch",
      },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    summary:
      "We implement DevOps practices to streamline development and operations workflows. By integrating continuous integration and continuous deployment (CI/CD), we enable faster development cycles, enhanced automation, and improved collaboration between development and operations teams.",
    technologies: [
      {
        icon: terraform,
        label: "Terraform",
      },
      {
        icon: ansible,
        label: "Ansible",
      },
      {
        icon: awsCloudformation,
        label: "AWS CloudFormation",
      },
    ],
  },
];

export const productEngineeringPageData = {
  id: "product-engineering",
  name: "Product Engineering",
  pageData: {
    heroSection: {
      title1: "Shaping Ideas into",
      title2: "Market-Ready Solutions",
      descrition:
        "We specialize in end-to-end product development, from architecture to deployment. Our engineering approach emphasizes performance, scalability, and reliability.",
      buttonText: "Consult with Product Expert",
    },
    coeServiceSection: {
      title1: "Building an Intelligent Product for",
      title2: "Business Success.",
      summary:
        "Bringing your vision into reality through engineering of scalable, intelligent products designed & engineered to address core business challenges.",
    },
  },
};
