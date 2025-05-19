"use client";

import { motion } from "framer-motion";

// Shared animation base configuration
const baseAnimation = {
  scale: [1, 1.1, 1], // Default pulse scale
  opacity: [1, 0.6, 1], // Default opacity pulse
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// Individual animation configurations with unique movements
const animations = [
  {
    filter: "url(#filter0_f_1519_5101)",
    cx: 47.5,
    cy: 80.5,
    r: 5.5,
    strokeR: 5,
    animate: { y: [0, -10, 0], x: [0, -20, 0], scale: [1, 1.1, 1], opacity: [1, 0.6, 1] },
    transition: { ...baseAnimation.transition, delay: 0 },
  },
  {
    filter: "url(#filter0_f_1519_5101)",
    cx: 47.5,
    cy: 80.5,
    r: 5.5,
    strokeR: 5,
    animate: { y: [0, 5, 0], x: [0, 20, 0], scale: [1, 1.4, 1], opacity: [1, 0.6, 1] },
    transition: { ...baseAnimation.transition, delay: 0.2 },
  },
  {
    filter: "url(#filter1_f_1519_5101)",
    cx: 157.5,
    cy: 60.5,
    r: 5.5,
    strokeR: 5,
    animate: { y: [0, 40, 0], x: [0, 40, 0], scale: [1, 1.6, 1], opacity: [1, 1, 1] },
    transition: { ...baseAnimation.transition, delay: 0.4 },
  },
  {
    filter: "url(#filter2_f_1519_5101)",
    cx: 67.5,
    cy: 110.5,
    r: 5.5,
    strokeR: 5,
    animate: { y: [0, -3, 0], x: [0, -40, 0], scale: [1, 1.1, 1], opacity: [1, 0.6, 1] },
    transition: { ...baseAnimation.transition, delay: 0.6 },
  },
  {
    filter: "url(#filter3_f_1519_5101)",
    cx: 116,
    cy: 89,
    r: 4,
    fill: "url(#paint0_radial_1519_5101)",
    animate: { y: [0, 40, 0], scale: [1, 2, 1], opacity: [1, 0.6, 1] },
    transition: { ...baseAnimation.transition, delay: 0.8 },
  },
  {
    filter: "url(#filter4_f_1519_5101)",
    cx: 6,
    cy: 129,
    r: 4,
    fill: "url(#paint1_radial_1519_5101)",
    animate: { y: [0, -50, 0], scale: [1, 1.1, 1], opacity: [1, 0.6, 1] },
    transition: { ...baseAnimation.transition, delay: 1 },
  },
  {
    filter: "url(#filter5_f_1519_5101)",
    cx: 199,
    cy: 121,
    r: 4,
    fill: "url(#paint2_radial_1519_5101)",
    animate: { y: [0, -50, 0], x: [0, -20, 0], scale: [1, 1.1, 1], opacity: [1, 0.6, 1] },
    transition: { ...baseAnimation.transition, delay: 1.2 },
  },
  {
    filter: "url(#filter6_f_1519_5101)",
    cx: 93,
    cy: 50,
    r: 4,
    fill: "url(#paint3_radial_1519_5101)",
    animate: { y: [0, -30, 0], x: [0, -20, 0], scale: [1, 1.1, 1], opacity: [1, 0.6, 1] },
    transition: { ...baseAnimation.transition, delay: 1.4 },
  },
  {
    filter: "url(#filter7_f_1519_5101)",
    cx: 170,
    cy: 81,
    r: 4,
    fill: "url(#paint4_radial_1519_5101)",
    animate: { y: [0, -5, 0], x: [0, -20, 0], scale: [1, 2, 1], opacity: [1, 0.6, 1] },
    transition: { ...baseAnimation.transition, delay: 1.6 },
  },
  {
    filter: "url(#filter8_f_1519_5101)",
    cx: 109,
    cy: 12,
    r: 7,
    strokeR: 5.5,
    strokeWidth: 3,
    animate: { y: [0, 50, 0], x: [0, 2, 0], scale: [1, 1.4, 1], opacity: [1, 0.6, 1] },
    transition: { ...baseAnimation.transition, delay: 1.8 },
  },
];

const AnimatedSvg = () => {
  return (
    <div>
      <svg
        width="205"
        height="135"
        viewBox="0 0 205 135"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {animations.map((anim, index) => (
          <motion.g
            key={index}
            filter={anim.filter}
            animate={anim.animate}
            transition={anim.transition}
          >
            <circle
              cx={anim.cx}
              cy={anim.cy}
              r={anim.r}
              fill={anim.fill || "#BB98EF"}
            />
            {anim.strokeR && (
              <circle
                cx={anim.cx}
                cy={anim.cy}
                r={anim.strokeR}
                stroke="#381B79"
                strokeWidth={anim.strokeWidth || 1}
              />
            )}
          </motion.g>
        ))}

        <defs>
          <filter
            id="filter0_f_1519_5101"
            x="38"
            y="71"
            width="19"
            height="19"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="2"
              result="effect1_foregroundBlur_1519_5101"
            />
          </filter>
          <filter
            id="filter1_f_1519_5101"
            x="148"
            y="51"
            width="19"
            height="19"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="2"
              result="effect1_foregroundBlur_1519_5101"
            />
          </filter>
          <filter
            id="filter2_f_1519_5101"
            x="58"
            y="101"
            width="19"
            height="19"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="2"
              result="effect1_foregroundBlur_1519_5101"
            />
          </filter>
          <filter
            id="filter3_f_1519_5101"
            x="110"
            y="83"
            width="12"
            height="12"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_1519_5101"
            />
          </filter>
          <filter
            id="filter4_f_1519_5101"
            x="0"
            y="123"
            width="12"
            height="12"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_1519_5101"
            />
          </filter>
          <filter
            id="filter5_f_1519_5101"
            x="193"
            y="115"
            width="12"
            height="12"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_1519_5101"
            />
          </filter>
          <filter
            id="filter6_f_1519_5101"
            x="87"
            y="44"
            width="12"
            height="12"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_1519_5101"
            />
          </filter>
          <filter
            id="filter7_f_1519_5101"
            x="164"
            y="75"
            width="12"
            height="12"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="1"
              result="effect1_foregroundBlur_1519_5101"
            />
          </filter>
          <filter
            id="filter8_f_1519_5101"
            x="97"
            y="0"
            width="24"
            height="24"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="2.5"
              result="effect1_foregroundBlur_1519_5101"
            />
  </filter>
          <radialGradient
            id="paint0_radial_1519_5101"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(116 89) rotate(90) scale(4)"
          >
            <stop stopColor="#A987F6" />
            <stop offset="1" stopColor="#391C7D" />
          </radialGradient>
          <radialGradient
            id="paint1_radial_1519_5101"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(6 129) rotate(90) scale(4)"
          >
            <stop stopColor="#A987F6" />
            <stop offset="1" stopColor="#391C7D" />
          </radialGradient>
          <radialGradient
            id="paint2_radial_1519_5101"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(199 121) rotate(90) scale(4)"
          >
            <stop stopColor="#A987F6" />
            <stop offset="1" stopColor="#391C7D" />
          </radialGradient>
          <radialGradient
            id="paint3_radial_1519_5101"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(93 50) rotate(90) scale(4)"
          >
            <stop stopColor="#A987F6" />
            <stop offset="1" stopColor="#391C7D" />
          </radialGradient>
          <radialGradient
            id="paint4_radial_1519_5101"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(170 81) rotate(90) scale(4)"
          >
            <stop stopColor="#A987F6" />
            <stop offset="1" stopColor="#391C7D" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
};

export default AnimatedSvg;