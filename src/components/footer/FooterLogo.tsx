import React from "react";
import Image from "next/image";
import { herettoLogo } from "../../../public/images/index";

export const FooterLogo: React.FC = () => {
  return (
    <div className="flex flex-col">
      <Image
        src={herettoLogo}
        alt="Heretto Logo"
        width={150}
        height={45}
      />
    </div>
  );
};
