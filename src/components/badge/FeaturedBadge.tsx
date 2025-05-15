"use client"

import { motion } from "framer-motion"

export default function FeatureBadge({ text, index }: { text: string, index: number }) {
  return (
    <motion.span
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.2 }}
      className="px-3 py-1.5 rounded-md bg-[#3D2D59]/30 text-[#D7CDE4] leading-6 tracking-[0.045px] text-[15px] font-normal "
    >
      {text}
    </motion.span>
  )
}