"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  FileEdit,
  Globe,
  Layout,
  Megaphone,
  MessageSquare,
  Palette,
  Users,
} from "lucide-react";
import Subtitle from "../ui/Subtitle";

const steps = [
  {
    number: "01",
    title: "Consultation & Kickoff",
    icon: MessageSquare,
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    description:
      "We begin with an in-depth conversation to understand your manuscript, your goals, and your audience. We'll map out the best path to publish your book—print, digital, audio, or all three—and set expectations, timeline, and deliverables.",
  },
  {
    number: "02",
    title: "Manuscript Onboarding & Team Assignment",
    icon: Users,
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    description:
      "Once you're on board, we collect your manuscript materials and details. You'll be assigned a dedicated project manager who will serve as your primary point of contact from start to finish. A full in-house team of editors, designers, formatters, marketers, and QA specialists is brought into your project, ensuring every aspect of your book is covered by the right expert.",
  },
  {
    number: "03",
    title: "Editorial Assessment",
    icon: FileEdit,
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50",
    description:
      "Our editorial experts refine your manuscript through developmental, line, and proofreading stages, enhancing clarity, flow, and tone while ensuring your story aligns with international publishing standards and remains authentically yours.",
  },
  {
    number: "04",
    title: "Design",
    icon: Palette,
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
    description:
      "Our design team crafts a visually stunning experience through custom covers, layout design, and illustrations that reflect your story's essence, ensuring your book stands out across print and digital formats.",
  },
  {
    number: "05",
    title: "Formatting",
    icon: Layout,
    color: "from-indigo-500 to-purple-500",
    bgColor: "from-indigo-50 to-purple-50",
    description:
      "We format your manuscript for print and eBook compatibility on all major platforms. Every detail—fonts, margins, and structure—is fine-tuned to ensure your book looks professional and reads seamlessly everywhere.",
  },
  {
    number: "06",
    title: "Finalization",
    icon: CheckCircle,
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
    description:
      "At this stage, we finalize your book in all required formats—print, digital, and if committed, audiobook—ensuring each version adheres to international publishing guidelines and technical standards, ready for seamless publishing and distribution.",
  },
  {
    number: "07",
    title: "Distribution Setup & Publishing Launch",
    icon: Globe,
    color: "from-blue-500 to-indigo-500",
    bgColor: "from-blue-50 to-indigo-50",
    description:
      "With your final files approved, we move your book into publication. We handle the technical setup on relevant publishing platforms and marketplaces, global POD systems, and more. Your book becomes available to readers worldwide, while you retain full rights and royalties.",
  },
  {
    number: "08",
    title: "Marketing, Support & Beyond",
    icon: Megaphone,
    color: "from-pink-500 to-rose-500",
    bgColor: "from-pink-50 to-rose-50",
    description:
      "Your book's launch isn't the end—it's the beginning. We offer post-publication support: marketing strategy, distribution amplification, author brand building, and ongoing consultation to help you build a lasting presence.",
  },
];

const PublishingSteps = () => {
  return (
    <section className="py-24 bg-linear-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <Subtitle>Step-by-Step Process</Subtitle>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">
            Your Publishing Journey
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From first conversation to global distribution, every step is
            designed to make your publishing experience seamless and successful.
          </p>
        </div>

        <div>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-linear-to-b from-slate-300 to-transparent -z-10 hidden md:block" />
              )}

              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="shrink-0">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-linear-to-br ${step.color} flex items-center justify-center shadow-lg relative`}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-xs font-bold text-slate-700 shadow-md">
                      {step.number}
                    </div>
                  </div>
                </div>

                <div
                  className={`flex-1 p-8 rounded-2xl bg-linear-to-br ${step.bgColor} border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300`}
                >
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-white rounded-2xl border-2 border-primary-200 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-slate-700">
                Start
              </span>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse animation-delay-1000" />
              <span className="text-sm font-semibold text-slate-700">
                Process
              </span>
            </div>
            <ArrowRight className="w-5 h-5 text-slate-400" />
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse animation-delay-2000" />
              <span className="text-sm font-semibold text-slate-700">
                Published
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 0.5s;
        }
        .animation-delay-2000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default PublishingSteps;
