import * as React from "react";
import { cn } from "@/lib/utils";

function Input({
  className,
  type = "text",
  required = false,
  placeholder,
  ...props
}: React.ComponentProps<"input">) {
  const modifiedplaceholder =
    required && placeholder ? `${placeholder} *` : placeholder;
  return (
    <input
      type={type}
      data-slot="input"
      placeholder={modifiedplaceholder}
      className={cn(
        "flex w-full h-12 rounded-lg border px-4 py-2 text-base outline-none ",

        "bg-blur-gradient-border !rounded-[12px]",

        "placeholder:text-[#B2A8BE] text-white",

        "focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:border-white/20",
        "aria-invalid:border-red-500 aria-invalid:ring-red-500/20",

        "disabled:opacity-50 disabled:cursor-not-allowed",

        className
      )}
      {...props}
    />
  );
}

export { Input };
