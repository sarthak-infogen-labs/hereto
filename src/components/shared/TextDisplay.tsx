import React from "react";

interface TextDisplayProps {
  title: string;
  gradientTitle: string;
}

const TextDisplay: React.FC<TextDisplayProps> = ({ title, gradientTitle }) => {
  return (
    <div className="text-display">
      <h1 className="font-semibold text-[#F5F5F5]">{title}</h1>
      <h1 className="bg-gradient-to-r from-[#00C4CC] to-[#7D2AE8] bg-clip-text text-transparent">
        {gradientTitle}
      </h1>
    </div>
  );
};

export default TextDisplay;
