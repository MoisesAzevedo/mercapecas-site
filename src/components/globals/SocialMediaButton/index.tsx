import React from "react";
import { cn } from "@/lib/utils";

interface SocialMediaButtonProps extends React.ComponentProps<"a"> {
  href: string;
  ariaLabel: string;
  icon: React.ReactNode;
  hoverBgClass: string;
}

export function SocialMediaButton({
  href,
  ariaLabel,
  icon,
  hoverBgClass,
  className,
  ...props
}: SocialMediaButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-zinc-300 transition-all hover:text-white",
        hoverBgClass,
        className
      )}
      {...props}
    >
      {icon}
    </a>
  );
}
