"use client";
import { use, useState } from "react";
import { ArrowUpIcon } from "lucide-react";
export default function ChatInput() {
  const [msg, setMsg] = useState("How does Heretto enhance productivity?");
  const [isActive, setActive] = useState(false);

  const handleClick = async () => {
    setActive(true);
    const messageToSend = msg;
    const response = await new Promise((r) => setTimeout(r, 2000));
    console.log("messageToSend", messageToSend);
    return messageToSend;
  };

  return (
    <div className="flex flex-col items-center w-full">
      {!isActive ? (
        <div className="rounded-xl border border-[#322B43] flex gap-3 items-center w-full relative p-1">
          <div className=" font-normal text-[#F5F5F5] tracking-[0.04px] text-[20px] leading-[24px] w-full rounded-xl ">
            <input
              type="text"
              value={msg}
              className="w-full px-3 bg-[#0A0318] py-2.5 pl-5 pr-3.5 rounded-xl text-h6"
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>

          <div className="mr-2.5">
            <button
              onClick={handleClick}
              className="bg-[#F5F5F5] text-[#0A0318] font-medium text-[18px] leading-[21px] rounded-xl w-10 h-10 flex items-center justify-center"
            >
              <ArrowUpIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      ) : (
        <></>
      )}
      {!isActive && (
        <p className="mt-4.5 text-[#ADA1BB] text-[13px] font-extralight leading-[19px] tracking-wide">
          This chatbot is powered by Heretto. AI-generated responses may be
          inaccurate, please double-check information. This chat is not intended
          to process Personal Data. Information regarding our processing of
          Personal Data is available in our
          <a href="#" className="text-[#F5F5F5]">
            {" "}
            Privacy Policy.
          </a>
        </p>
      )}
    </div>
  );
}
