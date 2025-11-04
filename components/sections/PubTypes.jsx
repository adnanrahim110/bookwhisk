"use client";

import { cn } from "@/utils/cn";

const types = [
  {
    title: "Traditional",
    label: "Publishing",
    points: [
      "Long approval timelines and rejections",
      "Limited author creative control of freedom",
      "Royalities often below 10% cutting profits",
    ],
  },
  {
    title: "Hybrid",
    label: "Publishing",
    points: [
      "High upfront costs for publishing services",
      "Shared ownership and reduced royalty splits",
      "Hidden fees and unclear contractual terms",
    ],
  },
  {
    title: "BookWhisk",
    label: "Self-Publishing",
    points: [
      "Retain 100% rights and royalties from sales",
      "Full ownership of your work and success",
      "Quick and efficient turnaround with no delays",
    ],
  },
];

const PubTypes = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Choose Your Publishing Path
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Compare traditional methods with BookWhisk's revolutionary approach
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-0 relative">
            {types.map((type, index) => {
              const isBookWhisk = type.title === "BookWhisk";
              const isTraditional = type.title === "Traditional";

              return (
                <div
                  key={index}
                  className={cn(
                    "relative group transition-all duration-500",
                    isBookWhisk
                      ? "lg:scale-105 lg:z-20"
                      : "lg:scale-100 lg:z-10"
                  )}
                >
                  <div
                    className={cn(
                      "relative h-full p-8 backdrop-blur-sm transition-all duration-500",
                      isBookWhisk &&
                        "bg-linear-to-br from-green-500 via-emerald-500 to-teal-600 text-white shadow-2xl shadow-green-500/30 rounded-2xl",
                      isTraditional &&
                        "after:absolute after:right-0 after:top-0 after:h-full after:w-px after:bg-radial after:from-neutral-300 after:via-transparent after:to-transparent"
                    )}
                  >
                    <div className="mb-4 text-center">
                      <h3
                        className={cn(
                          "text-3xl md:text-4xl font-bold mb-1",
                          isBookWhisk ? "text-white" : "text-slate-900"
                        )}
                      >
                        {type.title}
                      </h3>
                      <p
                        className={cn(
                          "text-lg md:text-xl font-medium",
                          isBookWhisk
                            ? "text-green-100"
                            : isTraditional
                            ? "text-red-600"
                            : "text-orange-600"
                        )}
                      >
                        {type.label}
                      </p>
                    </div>

                    <div
                      className={cn(
                        "w-[75%] h-1 mx-auto bg-radial mb-4 rounded-full",
                        isBookWhisk
                          ? "from-white via-transparent to-transparent"
                          : isTraditional
                          ? "from-secondary via-transparent to-transparent"
                          : "from-primary via-transparent to-transparent"
                      )}
                    />

                    <ul className="space-y-5">
                      {type.points.map((point, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-3 group/item"
                        >
                          <div
                            className={cn(
                              "shrink-0 mt-1 w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold transition-transform duration-300 group-hover/item:scale-110",
                              isBookWhisk
                                ? "bg-white/20 text-white"
                                : isTraditional
                                ? "bg-red-200 text-red-700"
                                : "bg-orange-200 text-orange-700"
                            )}
                          >
                            {isBookWhisk ? "✓" : "×"}
                          </div>
                          <span
                            className={cn(
                              "text-sm",
                              isBookWhisk ? "text-white" : "text-slate-700"
                            )}
                          >
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {isBookWhisk && (
                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-tl-full blur-2xl" />
                    )}
                  </div>

                  {isBookWhisk && (
                    <div className="absolute inset-0 -z-10 bg-linear-to-br from-green-400 to-teal-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PubTypes;
