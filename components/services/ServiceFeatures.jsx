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

const icons = [
  RiBarChart2Line,
  RiCalendarCheckLine,
  RiFileList2Line,
  RiHeadphoneLine,
  TbBrandZapier,
  RiLayoutMasonryLine,
];

const FeatureCard = ({ feature }) => {
  const { title, text } = feature;
  const Icon = icons[Math.floor(Math.random() * icons.length)];
  return (
    <div className="bg-white h-full rounded-2xl shadow-md p-6 flex flex-col gap-3 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-2">
        <div className="shrink-0 mt-1">
          <div className="inline-flex items-center justify-center size-10 rounded-lg bg-secondary text-white text-xl shadow-md">
            <Icon />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      </div>
      <div>
        <p
          className="mt-2 text-sm text-slate-600 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </div>
  );
};

const ServiceFeatures = ({ title, text, features }) => {
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
          <h2 className="text-4xl md:text-5xl text-slate-800">{title}</h2>
          <p
            className="text-lg text-slate-600 max-w-5xl mx-auto mt-1"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        </MotionInView>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 content-center">
          {features.map((f, i) => (
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
