"use client";

import {
  RiBook3Fill,
  RiGlobalLine,
  RiPriceTag3Line,
  RiShieldCheckLine,
  RiStarFill,
  RiTeamLine,
  RiTimeFill,
  RiTimeLine,
  RiUserHeartLine,
} from "react-icons/ri";
import Subtitle from "../ui/Subtitle";

const benefits = [
  {
    title: "In-House Experts",
    description:
      "No outsourcing. Our full-time team of editors, designers, and publishing specialists work exclusively on your project.",
    icon: RiTeamLine,
  },
  {
    title: "1-on-1 Support",
    description:
      "Your dedicated project manager guides you through every step, answering questions and keeping you informed.",
    icon: RiUserHeartLine,
  },
  {
    title: "Quality Guaranteed",
    description:
      "We stand behind our work. If you're not satisfied, we'll make it right. Your success is our success.",
    icon: RiShieldCheckLine,
  },
  {
    title: "Fast Turnaround",
    description:
      "Efficient processes and dedicated teams mean your book gets published faster without sacrificing quality.",
    icon: RiTimeLine,
  },
  {
    title: "Transparent Pricing",
    description:
      "Clear, upfront pricing with no hidden fees. You know exactly what you're paying for from day one.",
    icon: RiPriceTag3Line,
  },
  {
    title: "Wide Distribution",
    description:
      "Your book reaches readers everywhere-Amazon, Apple Books, Kobo, and more. Maximum visibility, maximum sales.",
    icon: RiGlobalLine,
  },
];

const highlights = [
  {
    value: "98%",
    label: "Author Satisfaction",
    quote:
      '"The most professional and caring publishing team I\'ve worked with."',
    icon: RiStarFill,
    iconGradient: "from-orange-500 to-rose-500",
  },
  {
    value: "500+",
    label: "Books Published",
    quote: '"From first-time authors to bestsellers, we\'ve helped them all."',
    icon: RiBook3Fill,
    iconGradient: "from-rose-500 to-pink-500",
  },
  {
    value: "4-8 Weeks",
    label: "Average Timeline",
    quote: '"Fast, efficient, and never rushed. Quality always comes first."',
    icon: RiTimeFill,
    iconGradient: "from-amber-500 to-orange-500",
  },
];

const Partner = () => {
  return (
    <section className="py-24 bg-primary-50/50">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:col-span-2 text-center">
            <Subtitle>The Bookwhisk Advantage</Subtitle>
            <h2 className="text-4xl md:text-5xl text-slate-800">
              Your Publishing Partner, Not Just a Service
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              We're not a platform or a marketplace. We're a dedicated team that
              treats your book like it's our own. Here's what makes us
              different:
            </p>
          </div>
          <div>
            <div className="space-y-6">
              {benefits.map(({ title, description, icon: Icon }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-rose-500 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <Icon className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-1">
                      {title}
                    </h3>
                    <p className="text-slate-600">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-8 -right-8 w-80 h-80 bg-orange-200 rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-80 h-80 bg-rose-200 rounded-full blur-3xl opacity-30 -z-10"></div>
            <div className="bg-linear-to-br from-orange-50 to-rose-50 p-12 rounded-3xl border border-orange-200 shadow-xl">
              <div className="space-y-8">
                {highlights.map(
                  ({ value, label, quote, icon: Icon, iconGradient }) => (
                    <div
                      key={value}
                      className="bg-white p-6 rounded-2xl shadow-md"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-12 h-12 bg-linear-to-br ${iconGradient} rounded-full flex items-center justify-center`}
                        >
                          <Icon className="text-white text-xl" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-slate-800">
                            {value}
                          </div>
                          <div className="text-sm text-slate-600">{label}</div>
                        </div>
                      </div>
                      <p className="text-slate-600 text-sm italic">{quote}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
