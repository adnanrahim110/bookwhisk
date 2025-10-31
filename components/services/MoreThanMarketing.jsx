import { MotionInView } from "@/utils/motion";
import React from "react";
import { RiBookOpenLine, RiPrinterLine, RiQuillPenLine } from "react-icons/ri";

const items = [
  {
    title: "Self–Publishing Services",
    body: "Full creative control. Pro results. Everything you need to publish, promote, and sell – without the stress!",
    icon: RiBookOpenLine,
  },
  {
    title: "Book Printing",
    body: "From single copy to bulk runs — premium print, fast turnaround, and formats for every kind of author.",
    icon: RiPrinterLine,
  },
  {
    title: "Ghostwriting",
    body: "Your voice, your story — professionally written and built to publish with confidence and credibility.",
    icon: RiQuillPenLine,
  },
];

const MoreThanMarketing = () => {
  return (
    <section className="py-16 bg-linear-to-b from-white to-primary/5">
      <div className="container mx-auto px-6">
        <MotionInView>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 text-center mb-8">
            More Than Just Marketing
          </h2>
        </MotionInView>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, idx) => {
            const Icon = it.icon;
            return (
              <MotionInView key={idx} className="">
                <article className="relative rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition-shadow border border-transparent hover:border-primary/20">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-linear-to-br from-primary/50 to-primary/30 text-white flex items-center justify-center shadow-md">
                      <Icon className="text-xl" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900">
                        {it.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600">{it.body}</p>

                      <div className="mt-4">
                        <a
                          href="#"
                          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                        >
                          Learn more <span className="ml-2">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              </MotionInView>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MoreThanMarketing;
