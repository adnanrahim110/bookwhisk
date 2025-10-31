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
      "No outsourcing ever. Our full-time editors, designers, and publishing specialists work exclusively on your project to ensure top-tier quality from start to finish.",
    icon: RiTeamLine,
  },
  {
    title: "1-on-1 Author Support",
    description:
      "You’ll never feel lost in the process. Your dedicated project manager guides you through every stage, providing updates, insights, and expert advice making the process seamless, efficient, and enjoyable.",
    icon: RiUserHeartLine,
  },
  {
    title: "Quality Assurance",
    description:
      "If it’s not right, we make it right. Every book undergoes multiple layers of editorial and design review, because your success is our standard.",
    icon: RiShieldCheckLine,
  },
  {
    title: "Fast Turnaround",
    description:
      "We move with purpose and at the client’s pace. Our streamlined process ensures your book is published efficiently without ever compromising quality.",
    icon: RiTimeLine,
  },
  {
    title: "Full Creative Control",
    description:
      "Enjoy the freedom to publish your way. Through our process, as an author you will have complete control and final say on everything that we will do for you",
    icon: RiPriceTag3Line,
  },
  {
    title: "Global Distribution and Marketing",
    description:
      "In any format, eBook, audiobook, or print-on-demand, your book will be distributed and marketed worldwide, with just a few clicks.",
    icon: RiGlobalLine,
  },
];

const highlights = [
  {
    value: "98%",
    label: "Author Satisfaction",
    quote: "Proof that care and craft make all the difference.",
    icon: RiStarFill,
    iconGradient: "from-orange-500 to-rose-500",
  },
  {
    value: "500+",
    label: "Books Published",
    quote:
      "From debut authors to seasoned writers, we’ve helped stories find their audience.",
    icon: RiBook3Fill,
    iconGradient: "from-rose-500 to-pink-500",
  },
  {
    value: "4–8 Weeks",
    label: "Average Timeline",
    quote: "Your timeline leads. We follow always with uncompromising quality.",
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
            <Subtitle>Why Bookwhisk</Subtitle>
            <h2 className="text-4xl md:text-5xl text-slate-800">
              Publishing has never been this effortless. We whisk away the hard
              parts of publishing.
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              Every book deserves a team that believes in it. At Bookwhisk, we
              match each author with editors, designers, and genre-specialist
              artists who understand their story’s soul. It’s a collaborative
              process, guided by expertise, fueled by passion, and driven by one
              shared goal: to make your book the best version of itself.
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
