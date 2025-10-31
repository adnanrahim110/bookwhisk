"use client";

import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import { Globe, TrendingUp } from "lucide-react";
import { useState } from "react";
import Subtitle from "../ui/Subtitle";

const steps = [
  {
    label: "Free Consultation",
    title: "Discuss Your Book Idea",
    description: [
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laboriosam neque porro eos animi necessitatibus sequi ut,",
        icon: Globe,
      },
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laboriosam neque",
        icon: TrendingUp,
      },
    ],
  },
  {
    label: "Custom Plan",
    title: "Discuss Your Book Idea",
    description: [
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laboriosam neque porro eos animi necessitatibus sequi ut,",
        icon: Globe,
      },
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laboriosam neque",
        icon: TrendingUp,
      },
    ],
  },
  {
    label: "Expert Execution",
    title: "Discuss Your Book Idea",
    description: [
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laboriosam neque porro eos animi necessitatibus sequi ut,",
        icon: Globe,
      },
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laboriosam neque",
        icon: TrendingUp,
      },
    ],
  },
  {
    label: "Publishing & Launch",
    title: "Discuss Your Book Idea",
    description: [
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laboriosam neque porro eos animi necessitatibus sequi ut,",
        icon: Globe,
      },
      {
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores laboriosam neque",
        icon: TrendingUp,
      },
    ],
  },
];

const Process = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute z-0 top-1/2 -translate-y-1/2 -right-1/4 h-full aspect-square bg-radial from-primary-200 via-primary-50/50 to-white rounded-full blur-3xl" />
      <div className="container relative z-1">
        <div className="text-center mb-16">
          <Subtitle>The Bookwhisk Process</Subtitle>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From first conversation to published book, we make the journey
            smooth and stress-free.
          </p>
        </div>
        <div className="bg-white rounded-2xl border border-neutral-100 p-8 shadow-sm">
          <div className="size-full grid grid-cols-1 gap-14">
            <div className="w-full flex items-center justify-between gap-10">
              {steps.map((step, idx) => (
                <button
                  onClick={() => setActive(idx)}
                  key={idx}
                  className={cn(
                    "flex flex-col items-start relative group/active",
                    "before:left-0 before:absolute before:top-full before:h-0.5 before:transition-all before:duration-300 before:ease-linear",
                    active === idx
                      ? "before:bg-primary before:w-full"
                      : "before:bg-black before:w-0 hover:before:w-full"
                  )}
                >
                  <span
                    className={cn(
                      "xl:text-xl",
                      active === idx ? "text-primary" : "text-neutral-400"
                    )}
                  >
                    Step {idx + 1}
                  </span>
                  <h3
                    className={cn(
                      "text-[22px] transition-colors duration-300 mb-1",
                      active === idx
                        ? "text-black"
                        : "text-black/65 group-hover/active:text-neutral-900"
                    )}
                  >
                    {step.label}
                  </h3>
                </button>
              ))}
            </div>
            <div className="w-full flex justify-between">
              <div className="lg:w-[33%]">
                <div className="flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    <h3 className="text-neutral-900 text-3xl">
                      {steps[active].title}
                    </h3>
                    <div className="space-y-4">
                      {steps[active].description.map((item, idx) => {
                        const Icon = item.icon;
                        return (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="shrink-0 mt-1 text-primary">
                              <Icon />
                            </div>
                            <div className="text-neutral-700">{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <Button className="*:text-sm shadow-none">
                      Get Started
                    </Button>
                  </div>
                </div>
              </div>
              <div className="lg:w-[62%]">
                <img src="/imgs/s2.avif" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
