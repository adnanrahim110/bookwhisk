"use client";

import Button from "@/components/ui/Button";
import { s1, s2, s3, s4 } from "@/public";
import { cn } from "@/utils/cn";
import {
  CheckCircle,
  Clipboard,
  FileText,
  Globe,
  Layout,
  Megaphone,
  MessageSquare,
  PenTool,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Subtitle from "../ui/Subtitle";

const steps = [
  {
    label: "Share Your Vision With Us",
    title: "Free Consultation & Custom Publishing Plan",
    image: s1,
    description: [
      {
        text: "Your journey begins with a one-on-one consultation. Tell us about your book, your goals, and the audience you want to reach. Our publishing experts listen carefully and evaluate every detail, from your manuscript’s current stage to your ideal publishing timeline.",
        icon: MessageSquare,
      },
      {
        text: "From there, we create a tailored publishing plan designed just for you, outlining the complete process, clear timelines, deliverables, and transparent pricing. No hidden costs, no surprises, just a roadmap to bring your book to life confidently.",
        icon: Clipboard,
      },
    ],
  },
  {
    label: "Editorial Excellence",
    title: "Editing & Manuscript Perfection",
    image: s2,
    description: [
      {
        text: "Once your plan is approved, our editorial specialists take your manuscript through a meticulous editing process, including developmental, line, and proofing stages as needed. Every edit aligns with international publishing standards and Amazon guidelines, ensuring your story is clear, polished, and ready to shine.",
        icon: FileText,
      },
      {
        text: "You’ll review and approve each milestone so your authentic voice always leads the way.",
        icon: CheckCircle,
      },
    ],
  },
  {
    label: "Design & Formatting",
    title: "Design, Formatting & Finalization",
    image: s3,
    description: [
      {
        text: "Next, our creative and technical teams step in to shape your book’s identity. We design a stunning, genre-appropriate cover and ensure the interior layout is beautiful, accessible, and publication-ready.",
        icon: PenTool,
      },
      {
        text: "Your manuscript is then formatted for both digital and print editions, fully compliant with industry standards. We finalize every element to guarantee your book performs flawlessly across all major platforms.",
        icon: Layout,
      },
    ],
  },
  {
    label: "Publish, Distribute & Grow",
    title: "Publish, Distribute & Grow",
    image: s4,
    description: [
      {
        text: "With everything perfected, your book is published under your name, with full ownership and royalties retained by you. We distribute your work globally across leading online retailers and marketplaces, setting up your metadata, categories, and keywords for optimal discoverability.",
        icon: Globe,
      },
      {
        text: "Once live, our marketing and promotional team helps you build visibility and reach the readers who matter most.",
        icon: Megaphone,
      },
    ],
  },
];

const Process = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="pt-24 relative overflow-hidden">
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
            <div className="w-full flex items-center justify-between gap-5">
              {steps.map((step, idx) => (
                <button
                  onClick={() => setActive(idx)}
                  key={idx}
                  className={cn(
                    "flex flex-col items-start text-left relative group/active",
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
                <div className="flex flex-col justify-between h-full gap-5">
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
                <Image
                  width={894}
                  height={494}
                  src={steps[active].image}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
