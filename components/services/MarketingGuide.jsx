"use client";

import { MotionInView } from "@/utils/motion";
import React from "react";
import Button from "../ui/Button";

const MarketingGuide = ({ title, text, points }) => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-base md:text-lg text-slate-600">{text}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-36">
            <MotionInView>
              <div>
                <img
                  src="/imgs/services/1.avif"
                  alt="Book Marketing Guide"
                  className="w-full h-[460px] object-cover object-center rounded-2xl"
                />
                <div className="pt-4 flex items-center justify-center">
                  <Button href="/signup">Let's Get Started</Button>
                </div>
              </div>
            </MotionInView>
          </div>

          <div className="lg:col-span-3 order-first lg:order-last">
            <div className="relative">
              <div
                className="absolute left-5 top-5 bottom-5 w-0.5 bg-slate-200"
                aria-hidden="true"
              />

              <div className="space-y-6">
                {points.map((s, i) => (
                  <MotionInView
                    key={i}
                    className="relative flex items-start gap-4"
                  >
                    <div className="relative z-10 shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md ring-4 ring-slate-50">
                        {i + 1}
                      </div>
                    </div>

                    <div className="flex-1 bg-white rounded-xl shadow-lg border border-slate-200/80 overflow-hidden transition-all hover:shadow-xl hover:border-primary/30">
                      <div className="p-5 md:p-6">
                        <h3 className="text-base md:text-lg font-semibold text-slate-900">
                          {s.title}
                        </h3>
                        <p
                          className="mt-2 text-sm text-slate-700 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: s.text }}
                        />
                      </div>
                    </div>
                  </MotionInView>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingGuide;
