"use client";

import Button from "@/components/ui/Button";
import { HeartHandshake, Users } from "lucide-react";
import React from "react";

const miniCards = [
  {
    title: "Editors who listen",
    text: "We protect your voice while sharpening the story.",
  },
  {
    title: "Design that sings",
    text: "Covers and interiors crafted to capture attention and emotion.",
  },
  {
    title: "End-to-end support",
    text: "From first draft to global distribution, we’re at your side.",
  },
];

const AboutCare = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* soft radial background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-white to-orange-50 opacity-80" />

      <div className="container">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left: mosaic/visual cards */}
          <div className="flex flex-col gap-6 items-center lg:items-start">
            <div className="relative w-full max-w-md">
              <div className="rounded-2xl p-6 bg-linear-to-br from-orange-50 to-white shadow-2xl border border-white/40 transform -rotate-3">
                <h4 className="text-sm font-semibold text-orange-600 mb-2">
                  Made by People
                </h4>
                <p className="text-slate-700">
                  Editors, designers & storytellers focused on your book.
                </p>
              </div>
              <div className="absolute -right-6 -bottom-8 w-52 h-36 rounded-2xl bg-linear-to-tr from-amber-200 to-orange-400 opacity-70 transform rotate-6 shadow-lg" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {miniCards.map((m) => (
                <div
                  key={m.title}
                  className="rounded-xl p-4 bg-white/70 backdrop-blur-md border border-white/30 shadow"
                >
                  <h5 className="font-semibold text-slate-900">{m.title}</h5>
                  <p className="text-slate-600 text-sm mt-1">{m.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-serif text-slate-900 mb-4">
              Made by People Who Care
            </h2>
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              We’re a team of editors, designers, engineers, and book lovers who
              believe great stories deserve to be heard. We care about the
              craft, the readers, and the long life of your work — and we’re
              here to help every step of the way.
            </p>

            <div className="flex gap-3 justify-center lg:justify-start">
              <Button href="#" variant="primary">
                Work with us
              </Button>
              <Button href="#" variant="secondary">
                See our process
              </Button>
            </div>

            <div className="mt-8 flex gap-6 items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 shadow">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Care-first</div>
                  <div className="text-xs text-slate-600">
                    Human-centered publishing
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-slate-700 shadow">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Collaborative</div>
                  <div className="text-xs text-slate-600">
                    Editors who work with your voice
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

export default AboutCare;
