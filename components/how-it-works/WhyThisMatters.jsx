"use client";

import { motion } from "framer-motion";
import { CheckCircle, Crown, Eye, HeartHandshake } from "lucide-react";
import Subtitle from "../ui/Subtitle";

const benefits = [
  {
    icon: Eye,
    title: "Full Transparency",
    description:
      "You always know where your book is in the workflow and who's doing what. Clear milestones, regular updates, and complete visibility throughout the entire process.",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Crown,
    title: "Full Control",
    description:
      "The book is yours. Every step is driven by your vision, and you retain full rights and royalties. Your story, your ownership, your success.",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: HeartHandshake,
    title: "Full Support",
    description:
      "An in-house team behind you—from editors to QA specialists—means higher quality, fewer surprises, and a smoother journey from manuscript to marketplace.",
    color: "from-emerald-500 to-teal-500",
    bgColor: "bg-emerald-50",
  },
];

const WhyThisMatters = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <Subtitle icon={CheckCircle}>Why This Process Matters</Subtitle>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
            Built on Three Core Principles
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our process isn't just about publishing—it's about empowering you
            with complete transparency, control, and professional support.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-2xl bg-white border-2 border-slate-200">
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-linear-to-br ${benefit.color} flex items-center justify-center shadow-lg`}
                  >
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisMatters;
