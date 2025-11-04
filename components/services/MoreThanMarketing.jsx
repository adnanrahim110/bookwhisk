"use client";

import { MotionInView } from "@/utils/motion";
import React, { Fragment } from "react";

const benefits = [
  {
    title: "Unlimited Revisions, Guaranteed Satisfaction",
    description:
      "Your satisfaction is our priority, which is why we offer unlimited revisions to get everything just right.",
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "100% Retention of Copyrights & Ownership Rights",
    description:
      "We help you publish, but your copyrights and ownership remain fully yours.",
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
  },
  {
    title: "100% Retention of Net Royalties",
    description:
      "You keep 100% of your net royalties—Books Publishing Company takes no cut from your book sales, ever.",
    icon: (
      <svg
        className="w-full h-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

const MoreThanMarketing = () => {
  return (
    <section className="py-20 md:py-24 bg-linear-to-b from-primary-50 via-white to-secondary-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-50 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr_auto_1fr]">
          {benefits.map((benefit, idx) => (
            <Fragment key={idx}>
              <MotionInView>
                <div className="group relative h-full even:px-3">
                  <article className="relative h-full px-5">
                    <div className="flex flex-col h-full">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="shrink-0">
                          <div className="size-12 p-2 rounded-2xl bg-linear-to-br from-primary to-primary/70 text-white flex items-center justify-center">
                            {benefit.icon}
                          </div>
                        </div>

                        <h3 className="text-lg font-bold text-slate-900 leading-tight">
                          {benefit.title}
                        </h3>
                      </div>
                      <div className="flex-1">
                        <p className="text-neutral-700 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </article>
                </div>
              </MotionInView>
              {idx < benefits.length - 1 && (
                <div className="h-full w-px bg-radial from-secondary-300 via-transparent to-transparent" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreThanMarketing;
