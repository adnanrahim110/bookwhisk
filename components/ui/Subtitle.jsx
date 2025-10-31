"use client";

import { cn } from "@/utils/cn";
import { Sparkle } from "lucide-react";

const Subtitle = ({
  children,
  className,
  icon = Sparkle,
  white = false,
  ...props
}) => {
  const Icon = icon;
  return (
    <div
      className={cn(
        "inline-flex items-center justify-center px-5 py-2 rounded-full text-sm font-medium mb-4 shadow-sm",
        white ? "bg-white text-primary" : "bg-primary-100 text-primary-800",
        className
      )}
    >
      <span className="mr-2">
        <Icon size={16} />
      </span>
      {children}
    </div>
  );
};

export default Subtitle;
