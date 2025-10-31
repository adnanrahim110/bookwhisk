"use client";

import Button from "@/components/ui/Button";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

const processSteps = [
  {
    id: "discover",
    title: "Research",
    tagline: "Discover & Align",
    summary:
      "We unpack your manuscript, audience, and competitive space so the plan we build is rooted in data and your unique voice.",
    body: "Every collaboration opens with deep discovery: auditing your manuscript, comparable titles, search intent, and audience insights. We surface strategic opportunities and potential roadblocks before a designer touches a page, ensuring every creative decision is anchored in what readers actually respond to.",
    image: "/imgs/books/14.avif",
    cards: [
      { src: "/imgs/books/1.avif", alt: "Developmental notes on a manuscript" },
      { src: "/imgs/books/3.avif", alt: "Annotated outline for a book launch" },
      { src: "/imgs/books/5.avif", alt: "Brand moodboard with swatches" },
    ],
  },
  {
    id: "design",
    title: "Design & Optimize",
    tagline: "Design & Produce",
    summary:
      "Editors, designers, and production strategists translate the brief into elegant layouts, covers, and assets that sell.",
    body: "With the roadmap locked, our specialists move fast, honing the prose, building immersive interior layouts, crafting magnetic covers, and preparing every format you need. We stress-test typography, pacing, and imagery so the finished book feels premium on-page and in digital storefronts alike.",
    image: "/imgs/books/18.avif",
    cards: [
      {
        src: "/imgs/books/21.avif",
        alt: "Cover design exploration in progress",
      },
      {
        src: "/imgs/books/24.avif",
        alt: "Interior layout spread ready for print",
      },
      { src: "/imgs/books/30.avif", alt: "Production ready export files" },
    ],
  },
  {
    id: "scale",
    title: "Grow & Scale",
    tagline: "Launch & Amplify",
    summary:
      "We orchestrate distribution, marketing, and measurement so your launch builds momentum and keeps compounding.",
    body: "Once the book is polished, we activate campaign strategy: optimizing metadata, planning paid and organic pushes, coordinating reviews, and monitoring performance dashboards. With agile testing and ongoing adjustments, we make sure your launch keeps growing new readership and revenue.",
    image: "/imgs/books/25.avif",
    cards: [
      { src: "/imgs/books/6.avif", alt: "Marketplace analytics dashboard" },
      { src: "/imgs/books/12.avif", alt: "Campaign optimization controls" },
      {
        src: "/imgs/books/33.avif",
        alt: "Sales performance graph climbing upward",
      },
    ],
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.2,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const nextIndex = Math.min(
      processSteps.length - 1,
      Math.floor(latest * processSteps.length)
    );
    setActiveIndex((prev) => (prev === nextIndex ? prev : nextIndex));
  });

  const activeStep = processSteps[activeIndex];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#043D32] py-24 sm:py-32 text-emerald-50"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-1/3 h-[480px] w-[480px] rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-[540px] w-[540px] rounded-full bg-orange-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-emerald-200/80">
            Our Signature Services
          </p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            The Bookwhisk Cadence
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-emerald-100/85">
            We guide authors through a three-part journey: from discovery to
            design to amplification, keeping your story at the center while we
            handle the strategy, creative, and growth mechanics.
          </p>
        </div>

        <div className="space-y-16">
          <div className="space-y-12 lg:hidden">
            {processSteps.map((step, index) => (
              <article
                key={step.id}
                className="overflow-hidden rounded-4xl border border-emerald-500/10 bg-white/5 backdrop-blur"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <div className="space-y-4 px-6 pb-8 pt-6">
                  <span className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-200/80">
                    Step {index + 1}
                  </span>
                  <h3 className="text-2xl font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="text-base leading-relaxed text-emerald-100/90">
                    {step.body}
                  </p>
                  <div className="flex gap-3">
                    {step.cards.map((card) => (
                      <div
                        key={`${step.id}-${card.src}`}
                        className="overflow-hidden rounded-xl border border-white/10 bg-white/10 p-2"
                      >
                        <Image
                          src={card.src}
                          alt={card.alt}
                          width={72}
                          height={96}
                          className="h-24 w-16 rounded-lg object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div
            ref={scrollContainerRef}
            className="hidden lg:block"
            style={{ height: `${processSteps.length * 100}vh` }}
          >
            <div className="sticky top-0 flex h-screen items-center">
              <div className="grid w-full grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-16 rounded-[44px] border border-emerald-400/10 bg-white/5 p-16 shadow-[0_80px_160px_rgba(0,0,0,0.35)] backdrop-blur-lg">
                <div className="relative flex h-full flex-col overflow-hidden rounded-4xl border border-white/10 bg-emerald-950/20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStep.image}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.98,
                        transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={activeStep.image}
                        alt={activeStep.title}
                        fill
                        sizes="(min-width: 1024px) 40vw, 100vw"
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/25 to-transparent" />
                  <div className="relative z-10 flex flex-1 flex-col justify-between p-10">
                    <div className="flex flex-col gap-4">
                      <span className="inline-flex w-max items-center justify-center rounded-full border border-white/20 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-100/80">
                        {activeStep.tagline}
                      </span>
                      <AnimatePresence mode="wait">
                        <motion.h3
                          key={activeStep.id}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.6,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          }}
                          exit={{
                            opacity: 0,
                            y: -16,
                            transition: {
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          }}
                          className="text-4xl font-semibold text-white"
                        >
                          {activeStep.title}
                        </motion.h3>
                      </AnimatePresence>
                      <AnimatePresence mode="wait">
                        <motion.p
                          key={`${activeStep.id}-summary`}
                          initial={{ opacity: 0, y: 12 }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                              duration: 0.6,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          }}
                          exit={{
                            opacity: 0,
                            y: -12,
                            transition: {
                              duration: 0.3,
                              ease: [0.22, 1, 0.36, 1],
                            },
                          }}
                          className="max-w-md text-lg leading-relaxed text-emerald-100/90"
                        >
                          {activeStep.summary}
                        </motion.p>
                      </AnimatePresence>
                    </div>

                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${activeStep.id}-cards`}
                        initial={{ opacity: 0, y: 26 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.6,
                            delay: 0.1,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }}
                        exit={{
                          opacity: 0,
                          y: 20,
                          transition: {
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }}
                        className="flex flex-wrap gap-4"
                      >
                        {activeStep.cards.map((card, cardIndex) => (
                          <motion.div
                            key={`${activeStep.id}-${card.src}`}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{
                              opacity: 1,
                              y: 0,
                              transition: {
                                duration: 0.5,
                                delay: 0.12 + cardIndex * 0.08,
                                ease: [0.22, 1, 0.36, 1],
                              },
                            }}
                            className="overflow-hidden rounded-2xl border border-white/15 bg-white/15 p-3 shadow-lg backdrop-blur"
                          >
                            <Image
                              src={card.src}
                              alt={card.alt}
                              width={96}
                              height={128}
                              className="h-32 w-[76px] rounded-xl object-cover"
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>

                <div className="flex flex-col justify-between">
                  <div className="max-w-xl">
                    <span className="text-sm font-semibold uppercase tracking-[0.4em] text-emerald-200/80">
                      Phase {String(activeIndex + 1).padStart(2, "0")}
                    </span>
                    <AnimatePresence mode="wait">
                      <motion.p
                        key={`${activeStep.id}-body-top`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          transition: {
                            duration: 0.6,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }}
                        exit={{
                          opacity: 0,
                          y: -20,
                          transition: {
                            duration: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                          },
                        }}
                        className="mt-4 text-lg leading-relaxed text-emerald-100/85"
                      >
                        {activeStep.body}
                      </motion.p>
                    </AnimatePresence>
                  </div>

                  <div className="relative mt-12 flex-1">
                    <div className="absolute bottom-0 left-6 top-0 w-px overflow-hidden rounded-full bg-emerald-100/15">
                      <motion.div
                        style={{ scaleY: progress, originY: 0 }}
                        className="absolute inset-0 bg-orange-400/90"
                      />
                    </div>
                    <ul className="flex h-full flex-col justify-between gap-3 pl-16">
                      {processSteps.map((step, index) => {
                        const isActive = index === activeIndex;

                        return (
                          <li key={step.id} className="relative">
                            <button
                              type="button"
                              onClick={() => setActiveIndex(index)}
                              className="group flex w-full items-start gap-6 rounded-2xl px-4 py-5 text-left transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400/70"
                            >
                              <span
                                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold transition-colors ${
                                  isActive
                                    ? "border-orange-400 bg-orange-400 text-[#043D32] shadow-[0_10px_30px_rgba(251,191,36,0.35)]"
                                    : "border-emerald-200/40 text-emerald-100/70"
                                }`}
                              >
                                {index + 1}
                              </span>
                              <div className="flex-1">
                                <p
                                  className={`text-lg font-semibold transition-colors ${
                                    isActive
                                      ? "text-white"
                                      : "text-emerald-100/70"
                                  }`}
                                >
                                  {step.title}
                                </p>
                                <AnimatePresence mode="wait">
                                  {isActive ? (
                                    <motion.p
                                      key={`${step.id}-body`}
                                      initial={{ opacity: 0, y: 12 }}
                                      animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                          duration: 0.45,
                                          ease: [0.22, 1, 0.36, 1],
                                        },
                                      }}
                                      exit={{
                                        opacity: 0,
                                        y: -12,
                                        transition: {
                                          duration: 0.3,
                                          ease: [0.22, 1, 0.36, 1],
                                        },
                                      }}
                                      className="mt-3 text-base leading-relaxed text-emerald-100/80"
                                    >
                                      {step.summary}
                                    </motion.p>
                                  ) : null}
                                </AnimatePresence>
                              </div>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </div>

                  <div className="mt-12 flex items-center gap-6">
                    <Button
                      href="/contact"
                      variant="primary"
                      className="bg-orange-400 text-[#043D32] shadow-lg shadow-orange-400/30 hover:bg-orange-300"
                    >
                      Plan My Launch
                    </Button>
                    <p className="text-sm text-emerald-100/70">
                      Prefer a custom package? We shape services around your
                      publishing goals.
                    </p>
                  </div>
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
