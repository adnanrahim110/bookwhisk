"use client";

import { MotionInView } from "@/utils/motion";
import {
  RiBarChart2Line,
  RiCalendarCheckLine,
  RiFileList2Line,
  RiHeadphoneLine,
  RiLayoutMasonryLine,
} from "react-icons/ri";
import { TbBrandZapier } from "react-icons/tb";

const FEATURES = [
  {
    title: "AI-Driven Campaign Management",
    desc: "Launch smart, data-backed ad campaigns in minutes. The tool automatically manages creatives, bidding strategies, and audience targeting based on your genre.",
    icon: TbBrandZapier,
  },
  {
    title: "Real-Time Budget Optimization",
    desc: "Spines tracks performance and redistributes your daily budget across platforms in real time so your ad dollars go where they perform best.",
    icon: RiBarChart2Line,
  },
  {
    title: "Transparent Analytics & Reports",
    desc: "Get clear insights into impressions, clicks, conversions, and sales with easy-to-understand dashboards and exportable reports.",
    icon: RiFileList2Line,
  },
  {
    title: "Marketing 101 & Author Courses",
    desc: "Access beginner-friendly guides and short courses to help you get started with book marketing and build long-term reach.",
    icon: RiCalendarCheckLine,
  },
  {
    title: "Templates That Convert",
    desc: "Use proven ad templates, landing pages, and email sequences tailored to book promotion to save time and increase ROI.",
    icon: RiLayoutMasonryLine,
  },
  {
    title: "Dedicated Author Support",
    desc: "Receive hands-on assistance from our marketing experts — from strategy to campaign analysis, we guide you every step of the way.",
    icon: RiHeadphoneLine,
  },
];

const FeatureCard = ({ feature }) => {
  const { icon: Icon, title, desc } = feature;
  return (
    <div className="bg-white h-full rounded-2xl shadow-md p-6 flex gap-4 items-start hover:shadow-lg transition-shadow duration-300">
      <div className="shrink-0 mt-1">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white text-xl shadow-md">
          <Icon />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

const ServiceFeatures = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="absolute -top-14 -left-5 h-full w-1/2 blur-2xl bg-linear-to-r from-secondary-50 via-primary-50 to-white" />
      <div className="container">
        <MotionInView
          className="text-center mb-10"
          v={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
          }}
        >
          <h2 className="text-4xl md:text-5xl text-slate-800">
            Comprehensive Book Marketing for Authors
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed max-w-5xl mx-auto mt-1">
            Everything you need to reach readers: automated campaigns, budget
            optimization, analytics, courses, templates, and real human support.
          </p>
        </MotionInView>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <MotionInView className="h-full" key={f.title}>
              <FeatureCard feature={f} />
            </MotionInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatures;
