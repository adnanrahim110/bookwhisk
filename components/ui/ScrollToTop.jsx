"use client";

import { cn } from "@/utils/cn";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage =
        (scrollTop / (documentHeight - windowHeight)) * 100;

      setShowScrollTop(scrollTop > 300);
      setScrollProgress(Math.min(Math.max(scrollPercentage, 0), 100));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 w-14 h-14 group",
        "transition-all duration-300",
        showScrollTop
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <div className="relative w-full h-full">
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 100 100"
        >
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-slate-200"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="text-primary-500 transition-all"
            style={{
              strokeDasharray: "283",
              strokeDashoffset: 283 - (283 * scrollProgress) / 100,
            }}
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center bg-white rounded-full shadow-lg shadow-slate-900/10 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-primary-500/20 group-hover:scale-105">
          <ArrowUp className="w-5 h-5 text-primary-600 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </button>
  );
};

export default ScrollToTop;
