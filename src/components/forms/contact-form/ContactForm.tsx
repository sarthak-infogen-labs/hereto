"use client";

import React, { useState } from "react";
import { FormInput } from "../../shared/CustomInputs/FormInput";
import { FormDropdown } from "../../shared/CustomDropdowns/FormDropdown";
import { CustomButton } from "../../shared/CustomButtons/Buttons";

interface ContactFormProps {
  onSubmit?: (formData: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  reason: string;
  message: string;
}

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    reason: "",
    message: "",
  });

  const handleInputChange = (
    field: keyof FormData,
    value: string | boolean,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    console.log("Form submitted:", formData);
    setFormData({
      name:"",
      email: "",
      reason: "",
      message: ""
    })
    // Here you would typically send the data to your backend
  };

  const reasonOptions = [
    "Discussing a Future Project",
    "Understanding Harrito’s Capabilities",
    "Exploring Harrito’s AI Frontier Capabilities",
    "Partnership Opportunity",
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6 w-full max-w-[680px] rounded-xl"
    >
      <div className="flex flex-col md:flex-row gap-3 flex-wrap justify-between ">
        {/* Left Side Inputs */}
        <div className="flex-1">
            <FormInput
              type="text"
              placeholder="Name*"
              required
              className=" text-label text-[#F9F4FF] leading-6 px-4 py-2.5 rounded-lg border-[1px] border-[#322B43] outline-none focus:border-white/30 transition-colors placeholder-[#9389A0]"
              action={(e: any) => handleInputChange("name", e.target.value)}
            />
        </div>

        <div className="flex-1">
          <FormInput
            type="email"
            placeholder="Email Id*"
            required
            className="text-label text-[#F9F4FF] leading-6 px-4 py-2.5 rounded-lg border-[1px] border-[#322B43] outline-none focus:border-white/30 transition-colors placeholder-[#9389A0]"
            action={(e: any) => handleInputChange("email", e.target.value)}
          />
        </div>

        <div className="flex-1">
          <FormDropdown
            label="Reason for Contacting"
            options={reasonOptions}
            onChange={(value) => handleInputChange("reason", value)}
          />
        </div>

        {/* Right Side Textarea */}
        <div className="w-full">
          <textarea
            placeholder="Message*"
            required
            rows={3}
            className="bg-[#332C44]/34 backdrop-blur-md w-full h-full text-label text-[#F9F4FF] leading-6 px-4 py-2.5 rounded-lg border-[1px] border-[#322B43] outline-none focus:border-white/30 transition-colors placeholder-[#9389A0] resize-none"
            onChange={(e) => handleInputChange("message", e.target.value)} // Use appropriate state key
          />
        </div>
      </div>

      <div className="max-sm:flex max-sm:justify-center">
          <CustomButton className="max-sm:w-full max-sm:max-w-[250px]">Submit</CustomButton>
      </div>
    </form>
  );
};