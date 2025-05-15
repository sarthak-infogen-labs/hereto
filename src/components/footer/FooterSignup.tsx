"use client";

import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "lucide-react";

export const FooterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (isSuccess) {
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }
    if(error){
      setTimeout(() => {
        setError("");
      }, 3000);
    }
  }, [isSuccess,error]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsSuccess(true);
      setEmail("");
    } catch (err) {
      setError("Failed to subscribe. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border-[0.6px] border-[#888888]/40 rounded-lg  bg-[#3D2D59]/11 p-5 max-w-[356px] min-w-[256px] backdrop-blur-2xl">
      <h3 className="text-[#F5F5F5] text-lg font-semibold leading-[28px] mb-2.5">
        Sign up
      </h3>
      <div className="text-body-sm">
        <p className="text-[#B2A8BE] mb-4 leading-[21px]">
          Get the latest Heretto Updates, News, Articles, Resources, and
          Inspiration.
        </p>

        {isSuccess && (
          <div className="text-[#F5F5F5]/70 font-medium pb-2">
            Thank you for subscribing!
          </div>
        )}
          <form onSubmit={handleSubmit}>
            <div className="relative ">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=""
                className="w-full bg-[#F9F4FF]/4 border border-[#2C2C2C] rounded-lg px-4 py-3 text-[#938BA0] focus:outline-none focus:border-[#B2A8BE] transition-colors"
              />

              <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-[calc(2%)] top-[calc(50%)] -translate-y-1/2 bg-[#F5F5F5] text-white p-2 rounded-xl transition-colors"
                >
                <ArrowRightIcon className="w-6 h-6 text-[#565ADF]" />
              </button>
            </div>

            

            {error && (
              <div className="mt-2 text-red-400 text-xs">{error}</div>
            )}
          </form>
      </div>
    </div>
  );
};