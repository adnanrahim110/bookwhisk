"use client";

import Button from "@/components/ui/Button";
import { BookOpen, Edit3, Layout, Users } from "lucide-react";
import React from "react";

const features = [
  {
    icon: BookOpen,
    title: "Designed for Authors Who Want More",
    text: "Retain full ownership while getting pro-level editing, design, and distribution tailored to your goals.",
  },
  {
    icon: Edit3,
    title: "Expert Editing & Design",
    text: "Our editors and designers elevate your manuscript to professional standards — without losing your voice.",
  },
  {
    icon: Layout,
    title: "Multi-format Production",
    text: "Print, ebook and audiobook production handled with precision so your book looks great everywhere.",
  },
];

const Badge = ({ num }) => (
  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-400 to-orange-600 text-white flex items-center justify-center font-semibold shadow-lg">
    {num}
  </div>
);

const AboutFeatures = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* decorative shapes */}
      <svg
        className="absolute -right-24 -top-24 opacity-20 w-72 h-72 text-orange-300"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#ffd6a5" />
            <stop offset="100%" stopColor="#ff7b54" />
          </linearGradient>
        </defs>
        <circle cx="100" cy="100" r="100" fill="url(#g1)" />
      </svg>

      <div className="container">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: Hero feature card */}
          <div className="relative">
            <div className="rounded-3xl bg-linear-to-br from-white/60 to-white/40 backdrop-blur-md shadow-2xl p-8 md:p-12 border border-white/40">
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
                What book publishing should be
              </h2>
              <p className="text-lg text-slate-700 mb-6">
                Professional publishing that centers your vision and gives you
                the tools to reach readers — without losing ownership or
                control.
              </p>
              <div className="flex flex-wrap gap-3 items-center">
                <Button href="#" variant="primary">
                  Start your project
                </Button>
                <Button href="#" variant="secondary">
                  Talk to an editor
                </Button>
              </div>
            </div>
            <div className="absolute -left-6 -bottom-6 w-44 h-28 rounded-2xl bg-linear-to-tr from-orange-200 to-orange-400 blur-3xl opacity-40 transform rotate-6" />
          </div>

          {/* Right: Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f, idx) => {
              const Icon = f.icon;
              return (
                <article
                  key={f.title}
                  className="group bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-6 hover:-translate-y-2 transition-transform shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0">
                      <Badge num={idx + 1} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {f.title}
                      </h3>
                      <p className="text-slate-600">{f.text}</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
