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
    title: "Built for Indie Authors",
    description:
      "We started BookWhisk with one goal, to give every author the freedom to publish their story with confidence and pride. Whether you're a first-time writer or an experienced storyteller, we help transform your vision into a beautifully crafted, globally available book that feels truly yours.",
    iconGradient: "from-orange-500 to-rose-500",
    image: "/imgs/ser_1.avif",
  },
  {
    title: "Experts Under One Roof",
    description:
      "Behind every great book is a great team, and ours works as one. From editors and designers to marketers and distribution specialists, all led by your dedicated project manager, our in-house experts guide your journey with precision, communication, and care. Every detail is handled under one roof to make your publishing experience smooth, personal, and stress-free.",
    iconGradient: "from-rose-500 to-pink-500",
    image: "/imgs/ser_2.avif",
  },
  {
    title: "Turning Stories Into Legacies",
    description:
      "We don't just publish books, we help build author brands and lasting impressions. Every story we touch is refined, elevated, and positioned to reach the right readers, ensuring your voice resonates far beyond the final page. With BookWhisk, you're not just launching a book, you're starting something that lasts.",
    iconGradient: "from-orange-500 to-amber-500",
    image: "/imgs/ser_3.webp",
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
      className="relative bg-primary-50"
      style={{ height: `calc(${services.length + 1.5} * 100vh)` }}
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
                    className="rounded-2xl"
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
                <div className="pl-[75px]">
                  <h3 className="text-4xl xl:text-5xl text-slate-800 font-bold">
                    Who We Are
                  </h3>
                  <p className="lg:text-lg xl:text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                    Your Self-Publishing Partners
                  </p>
                </div>
                <div className="pt-6 pb-0.5 pl-20 overflow-hidden">
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
                              ? "text-2xl font-medium text-white size-[45px] bg-primary -left-[68px] flex items-center justify-center outline-10 outline-primary-50 shadow-[0_0_0_10px_#ffc46d,0_0_0_11.5px_#ffc46d] top-0"
                              : "-left-[52.5px] top-2 size-4 bg-primary-300"
                          )}
                        >
                          {isActive && idx + 1}
                        </span>
                        <h3
                          className={cn(
                            "text-2xl font-semibold transition-colors xl:text-[28px]",
                            !isActive && idx < services.length - 1 && "mb-4",
                            isActive
                              ? "text-primary mb-2.5"
                              : "text-neutral-700"
                          )}
                        >
                          {serv.title}
                        </h3>
                        {isActive && (
                          <p className="xl:text-lg text-neutral-700">
                            {serv.description}
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>
                <div className="mt-10 ml-20 flex items-center flex-wrap">
                  <Button href="/contact" className="text-sm">
                    Begin Your BookWhisk Journey
                  </Button>
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
