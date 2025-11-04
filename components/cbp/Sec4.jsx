"use client";

import { sec4 } from "@/public";
import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const bullets = [
  {
    title: "Concept & Storyboarding",
    text: "We begin by exploring your idea, characters, setting, lesson, tone, and reader age. Together, we storyboard each page or chapter to ensure pacing, visuals, and messaging are clear and captivating.",
  },
  {
    title: "Writing & Illustration Collaboration",
    text: "Our genre-specialist children’s writers craft the manuscript with rhythm, readability, and emotional resonance. Simultaneously, our illustrators develop visual concepts that delight and support comprehension. You review drafts of text and artwork, ensuring your vision shines through.",
  },
  {
    title: "Editing, Revision & Layout",
    text: "Once text and artwork align, we apply professional editing for readability, consistency, and age-appropriateness. Then we format the book for print and eBook, choosing durable materials for board books, interactive layouts for picture books, and reader-friendly designs for chapter and middle-grade titles.",
  },
  {
    title: "Proofing & Publishing Setup",
    text: "Your book is proofed for both visual and text accuracy. We prepare final files and set up print-on-demand (POD) and digital distribution channels so your book is available globally, even before releasing into school and library markets.",
  },
  {
    title: "Launch & Beyond",
    text: "With your book live, we offer optional marketing and distribution support designed for children’s books, social media posts parents engage with, school/library reach strategies, and press materials that capture attention in the market of young readers.",
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
                className="w-full h-auto block"
              />
            </div>
          </div>

          <div className="text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Our Children’s Book Workflow
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
