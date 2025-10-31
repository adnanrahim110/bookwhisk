"use client";

import { sec4 } from "@/public";
import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const bullets = [
  {
    title: "Expert Storytelling:",
    text: "Our seasoned children's book writers craft engaging narratives that capture young imaginations and bring your vision to life with charm and creativity.",
  },
  {
    title: "Full-Service Publishing:",
    text: "From initial concept and detailed outlining to seamless editing, flawless formatting, invigorating illustrations and strategic marketing, we handle every step of your book's journey.",
  },
  {
    title: "Editorial Excellence:",
    text: "Our dedicated children's book editors provide professional insights, refining your manuscript for clarity, engagement, and readability.",
  },
  {
    title: "Tailored to Your Vision:",
    text: "Every book is unique, and we match you with a writer and illustrator who align with your style, ensuring your story is brought to life exactly as you envisioned.",
  },
  {
    title: "Hassle-Free Publishing:",
    text: "We navigate the self-publishing process for you, ensuring your book lands in top online stores and reaches young readers across the globe.",
  },
];

const Sec4 = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center justify-center md:justify-start">
            <div className="w-[420px] sm:w-[520px] md:w-[560px] -ml-4 md:ml-0">
              <Image
                width={720}
                height={1080}
                src={sec4}
                alt="Children's book illustration"
                className="w-full h-auto block rounded-2xl shadow-[0_30px_60px_rgba(2,6,23,0.12)]"
              />
            </div>
          </div>

          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Comprehensive Children's Book Publishing Services
            </h2>

            <ul className="space-y-4 text-slate-700">
              {bullets.map((b) => (
                <li key={b.title} className="flex gap-4">
                  <span className="shrink-0 mt-1 text-primary font-semibold">
                    •
                  </span>
                  <div>
                    <strong className="block text-slate-900">{b.title}</strong>
                    <p className="mt-1 text-sm md:text-base">{b.text}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button href="/contact">Contact Us</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec4;
