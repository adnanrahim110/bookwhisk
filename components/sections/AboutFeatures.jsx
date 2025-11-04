"use client";

import Button from "@/components/ui/Button";
import {
  BookOpen,
  Edit3,
  Globe,
  Headphones,
  Image,
  Laptop,
  Share2,
  ShieldCheck,
  Users,
} from "lucide-react";
import React from "react";

const features = [
  {
    icon: Edit3,
    title: "Editorial Experts",
    text: "Our editors are experienced with children's literature, helping you craft age-appropriate language, pacing, and emotional beats.",
  },
  {
    icon: Image,
    title: "Design & Layout Artists",
    text: "Illustration-friendly design and layout that make your story come alive both in print and eBook formats.",
  },
  {
    icon: BookOpen,
    title: "Children's Book Specialists",
    text: "Specialized consultants for picture books, early readers, and chapter books to ensure the right format and tone.",
  },
  {
    icon: Headphones,
    title: "Audiobook Producers & Narrators",
    text: "Professional narrators and production services to turn your book into a high-quality audiobook experience.",
  },
  {
    icon: Globe,
    title: "Marketing & Distribution Strategists",
    text: "We build targeted campaigns and distribution plans to reach schools, libraries, and parents.",
  },
  {
    icon: Laptop,
    title: "Web & Author Branding Team",
    text: "Author websites, branding, and online presence tailored to children's authors and their audiences.",
  },
  {
    icon: Share2,
    title: "Social Media & Advertising Managers",
    text: "Campaigns crafted for parent communities and book-buying audiences across social platforms.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    text: "Multiple-step QA to ensure print, ebook and audiobook files meet retailer and library specifications.",
  },
  {
    icon: Users,
    title: "Seamless Communication & Project Management",
    text: "Clear milestones, regular updates, and a dedicated project manager to keep everything on track.",
  },
];

const AboutFeatures = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="absolute top-40 right-0 w-72 h-72 bg-primary-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-96 h-96 bg-secondary-50/40 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-semibold text-primary-700">
              Meet Our Expert Team
            </span>
          </div>

          <h2 className="text-xl md:text-3xl lg:text-6xl text-neutral-900 mb-2 leading-tight">
            The <span className="text-primary">Whisk</span> Behind the Words
          </h2>

          <p className="text-xl text-neutral-600 max-w-5xl mx-auto">
            A world-class collective of specialists dedicated to transforming
            your manuscript into a masterpiece
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {features.map((f, idx) => {
              const Icon = f.icon;
              const isPrimary = idx % 3 === 0;

              return (
                <article
                  key={f.title}
                  className="group relative bg-white border border-neutral-200 rounded-2xl p-6 md:p-8 hover:border-primary-200 transition-all duration-300 hover:shadow-lg hover:shadow-primary-100/50"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-primary-50/0 to-secondary-50/0 group-hover:from-primary-50/50 group-hover:to-secondary-50/30 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100" />

                  <div className="relative z-10 flex flex-col h-full justify-between gap-3">
                    <div className="mb-6 flex items-start justify-between">
                      <div className="relative">
                        <div
                          className={`w-12 h-12 rounded-xl ${
                            isPrimary ? "bg-primary" : "bg-neutral-900"
                          } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon
                            className="w-6 h-6 text-white"
                            strokeWidth={2}
                          />
                        </div>
                      </div>

                      <span className="text-xs font-semibold text-neutral-300 group-hover:text-primary transition-colors duration-300">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors duration-300">
                      {f.title}
                    </h3>

                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {f.text}
                    </p>

                    <div className="h-0.5 w-12 bg-neutral-200 group-hover:w-full group-hover:bg-linear-to-r group-hover:from-primary group-hover:to-secondary transition-all duration-500" />
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-16 md:mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button href="/contact" variant="primary">
              Start Your Project
            </Button>
            <Button href="/signup" variant="secondary">
              Schedule a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeatures;
