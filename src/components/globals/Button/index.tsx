import { cn } from "@/lib/utils";
import React from "react";

interface HeroButtonProps extends React.ComponentProps<"a"> {
  children: React.ReactNode;
  variant?: "primary" | "outline";
}

export function HeroButton({ children, className, variant = "primary", ...props }: HeroButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-sm px-8 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-200 cursor-pointer",
        variant === "primary" && "bg-[#E51515] text-white hover:bg-[#c41212] shadow-lg",
        variant === "outline" && "border-2 border-white text-white hover:bg-white hover:text-gray-900",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
