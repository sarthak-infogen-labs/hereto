import {
  swift,
  objectiveC,
  webXR,
  arKit,
  arCore,
  rots,
  mqtt,
  ble,
  zigbee,
  unity3D,
  unrealEngine,
  photonEngine,
  adobeAfterEffects,
  adobePremierepro,
  adobePhotoshopCinema4D,
} from "../../public/images";

export const nextGenTecnologyCoeTabsData = [
  {
    id: "extended-reality",
    title: "Extended Reality (XR)",
    summary:
      "We build AR, VR, and MR applications using spatial computing frameworks and hardware-specific SDKs. Our solutions focus on intuitive interaction design, sensor integration, and real-time rendering. From industrial training simulation to product visualization, we engineer XR systems aligned with enterprise workflows.",
    technologies: [
      {
        icon: webXR,
        label: "WebXR",
      },
      {
        icon: arKit,
        label: "ARKit",
      },
      {
        icon: arCore,
        label: "ARCore",
      },
    ],
  },
  {
    id: "embedded-iot",
    title: "Embedded IoT & Connectivity",
    summary:
      "We develop firmware and edge-level integrations for low-power, connected devices using protocols like MQTT, BLE, and LoRa. Our approach emphasizes real-time data acquisition, secure communication, and remote diagnostics. Solutions span industrial automation, smart environments, and custom sensor networks.",
    technologies: [
      {
        icon: rots,
        label: "ROTS",
      },
      {
        icon: mqtt,
        label: "MQTT",
      },
      {
        icon: ble,
        label: "BLE",
      },
      {
        icon: zigbee,
        label: "Zigbee",
      },
    ],
  },
  {
    id: "game-development",
    title: "Game Development",
    summary:
      "We create multi-platform games using real-time engines like Unity and Unreal, optimized for performance and scalability. Our expertise spans gameplay logic, networking, physics simulation, and asset pipeline integration. We deliver both entertainment-focused and serious games with structured development workflows.",
    technologies: [
      {
        icon: unity3D,
        label: "Unity3D",
      },
      {
        icon: unrealEngine,
        label: "Unreal Engine",
      },
      {
        icon: photonEngine,
        label: "Photon Engine",
      },
    ],
  },
  {
    id: "media-content",
    title: "Media & Content Creation",
    summary:
      "We produce 2D/3D content, animation, and post-production assets using professional-grade tools and pipelines. Our media workflows are optimized for real-time engines, virtual production, and interactive platforms. Deliverables include high-fidelity assets for XR, simulation, branding, and educational content.",
    technologies: [
      {
        icon: adobeAfterEffects,
        label: "Adobe After Effects",
      },
      {
        icon: adobePremierepro,
        label: "Adobe Premiere Pro",
      },
      {
        icon: adobePhotoshopCinema4D,
        label: "Adobe PhotoshopCinema 4D",
      },
    ],
  },
];

export const nextEngineeringPageData = {
  id: "next-gen-transformation",
  name: "Next-Gen Transformation",
  pageData: {
    heroSection: {
      title1: "Engineering Immersive",
      title2: "Experience at Scale",
      descrition:
        "We build immersive, connected, and intelligent systems across XR, IoT, gaming, and content. Our solutions integrate real-time data, edge computing, and interactive design to enable next-gen digital experiences.",
      buttonText: "Consult with Next-Gen Expert",
    },
    coeServiceSection: {
      title1: "Enabling Immersive Experience",
      title2: "Across Interfaces.",
      summary:
        "We design and develop intelligent, 3D interactive experiences. By combining spatial computing, real-time connectivity, and edge intelligence, we deliver deeply immersive experiences across digital and physical touchpoints. ",
    },
  },
};
