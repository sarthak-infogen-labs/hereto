"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ShowProfiles = () => {
  const profileImages = [
    "profile1.jpg",
    "profile2.jpg",
    "profile3.jpg",
    "profile4.jpg",
    "profile5.jpg",
  ];

  const positions = [
    { top: "5%", left: "10%" },
    { top: "10%", left: "80%" },
    { top: "50%", left: "1%" },
    { top: "65%", left: "92%" },
    { top: "90%", left: "40%" },
  ];
  return (
    <>
      <div className="absolute top-0   left-0 w-full h-full max-md:hidden pointer-events-none">
        {profileImages.map((img, index) => {
          const position = positions[index];
          return (
            <motion.div
              key={index}
              className="w-16 h-16 rounded-full border border-[#D9BFF9] overflow-hidden flex items-center justify-center absolute"
              style={{ top: position.top, left: position.left }}
              animate={{
                y: [0, 15, 0],
                x: [0, 15, 0],
                scale: [1, 1.05, 1],
                opacity: [1, 1, 1],
              }}
              transition={{
                duration: 3+ index, // unique timing per image
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                src={`/images/about-us/profiles/${img}`}
                alt={`Profile ${index + 1}`}
                width={80}
                height={80}
                className="rounded-full z-30 object-cover"
              />
            </motion.div>
          );
        })}
      </div>
      <div className="md:hidden flex items-center justify-center py-8">
        {profileImages.map((img, index) => (
          <div
            key={index}
            className={`w-11 h-11 rounded-full border-1 border-[#D9BFF9] overflow-hidden flex items-center justify-center
            ${index !== 0 ? "-ml-3" : ""} 
          `}
          >
            <Image
              src={`/images/about-us/profiles/${img}`}
              alt={`Profile ${index + 1}`}
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ShowProfiles;
