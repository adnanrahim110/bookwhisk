"use client";

import { MotionInView } from "@/utils/motion";
import React from "react";

const BookstoreInsight = ({ title, tagline, text }) => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container z-10">
        <div className="">
          <MotionInView>
            <div className="bg-white rounded-3xl border border-primary-200/50 overflow-hidden mb-12">
              <div className="bg-linear-to-r from-secondary-50 to-transparent p-8 md:p-12 border-b border-primary-200">
                <div className="flex items-start justify-center gap-2.5 mb-4">
                  <div className="shrink-0 mt-1">
                    <svg
                      className="w-8 h-8 md:w-10 md:h-10 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl text-center lg:text-4xl font-bold text-slate-900 leading-tight">
                      {title}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-12 text-center">
                <div className="inline-block mb-6">
                  <span className="px-5 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm md:text-base">
                    {tagline}
                  </span>
                </div>

                <div className="space-y-6">
                  {text.map((paragraph, index) => (
                    <MotionInView key={index}>
                      <div className="relative">
                        <p className="text-base md:text-lg text-slate-700 leading-relaxed relative">
                          {paragraph}
                        </p>
                      </div>
                    </MotionInView>
                  ))}
                </div>
              </div>
            </div>
          </MotionInView>
        </div>
      </div>
    </section>
  );
};

export default BookstoreInsight;
