"use client";

import { cn } from "@/utils/cn";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useRef, useState } from "react";
import Button from "../ui/Button";

const services = [
  {
    title: "Manuscript Review & Editing",
    description:
      "Professional editors refine your story, ensuring clarity, flow, and polish. From developmental editing to line editing, we perfect every word.",
    iconGradient: "from-orange-500 to-rose-500",
    image: "/imgs/sr1.webp",
  },
  {
    title: "Proofreading",
    description:
      "Catch every typo, grammatical error, and formatting inconsistency. Our eagle-eyed proofreaders ensure your book is flawless.",
    iconGradient: "from-rose-500 to-pink-500",
    image: "/imgs/sr2.webp",
  },
  {
    title: "Book Cover & Interior Design",
    description:
      "Stunning covers that capture attention and professional interior layouts that enhance readability. First impressions matter.",
    iconGradient: "from-orange-500 to-amber-500",
    image: "/imgs/sr3.webp",
  },
];

const Services = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const clampedProgress = Math.min(Math.max(value, 0), 0.999999);
    const nextIndex = Math.min(
      services.length - 1,
      Math.floor(clampedProgress * services.length)
    );

    setActiveIndex((current) => (current === nextIndex ? current : nextIndex));
  });

  const activeService = services[activeIndex];

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: `calc(${services.length + 1.3} * 100vh)` }}
    >
      <div className="sticky top-0 h-dvh py-32">
        <div className="container">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
            <div className="lg:w-5/12 w-full">
              <div className="relative h-full">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeService.image}
                    src={activeService.image}
                    alt={activeService.title}
                    className=""
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </AnimatePresence>
              </div>
            </div>
            <div className="lg:w-7/12 w-full">
              <div className="relative">
                <div className="p-[45px_100px_2px] overflow-hidden">
                  {services.map((serv, idx) => {
                    const isActive = idx === activeIndex;

                    return (
                      <div
                        key={idx}
                        className={cn(
                          "relative not-last:pb-5",
                          "not-last:after:w-[1.5px] not-last:after:h-full not-last:after:absolute not-last:after:-left-[46px] not-last:after:top-6 not-last:after:bg-primary-300"
                        )}
                        aria-current={isActive}
                      >
                        <span
                          className={cn(
                            "absolute rounded-full z-1",
                            isActive
                              ? "text-2xl font-medium text-white size-[45px] bg-primary -left-[68px] flex items-center justify-center outline-10 outline-white shadow-[0_0_0_10px_#ffc46d,0_0_0_11.5px_#ffc46d] top-0"
                              : "-left-[52.5px] top-2 size-4 bg-primary-300"
                          )}
                        >
                          {isActive && idx + 1}
                        </span>
                        <h3
                          className={cn(
                            "text-2xl font-semibold transition-colors sm:text-[28px]",
                            !isActive && idx < services.length - 1 && "mb-4",
                            isActive ? "text-primary mb-4" : "text-neutral-700"
                          )}
                        >
                          {serv.title}
                        </h3>
                        {isActive && (
                          <p className="text-lg text-neutral-700 sm:text-xl">
                            {serv.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-10 ml-[100px]">
                  <Button variant="secondary">View all services</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
