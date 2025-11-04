"use client";

import { MotionInView } from "@/utils/motion";
import Image from "next/image";
import React, { useState } from "react";

const GlobalDistribution = ({ title, img, continents }) => {
  const [activeContinent, setActiveContinent] = useState(0);

  const getMarketStrength = (countryName) => {
    const marketData = {
      "United States of America": { strength: 98, label: "Leading Market" },
      Germany: { strength: 92, label: "Strong Market" },
      "United Kingdom": { strength: 95, label: "Prime Market" },
      China: { strength: 88, label: "Growing Market" },
      India: { strength: 85, label: "Emerging Market" },
      Japan: { strength: 90, label: "Strong Market" },
      Poland: { strength: 78, label: "Active Market" },
      Italy: { strength: 82, label: "Active Market" },
      Spain: { strength: 80, label: "Active Market" },
      Brazil: { strength: 75, label: "Growing Market" },
      "South Korea": { strength: 87, label: "Strong Market" },
      Australia: { strength: 83, label: "Active Market" },
      "South Africa": { strength: 72, label: "Emerging Market" },
    };
    return marketData[countryName] || { strength: 70, label: "Active Market" };
  };

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-slate-50/50 via-transparent to-slate-50/50" />

      <div className="container mx-auto px-6 relative z-10">
        <MotionInView>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              {title}
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </MotionInView>

        <MotionInView>
          <div className="max-w-6xl mx-auto mb-12 md:mb-16">
            <div className="relative">
              <div className="relative w-full">
                <Image
                  src={img}
                  alt="Global Distribution Map"
                  width={2113}
                  height={1221}
                  className="w-full"
                  priority
                />
              </div>
            </div>
          </div>
        </MotionInView>

        <MotionInView>
          <div className="max-w-5xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200/50 p-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {continents.map((continent, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveContinent(index)}
                    className={`
                      relative px-6 py-4 rounded-xl font-semibold text-sm md:text-base
                      transition-all duration-300
                      ${
                        activeContinent === index
                          ? "bg-primary text-white shadow-lg shadow-primary/30"
                          : "bg-slate-50 text-slate-700 hover:bg-slate-100"
                      }
                    `}
                  >
                    {continent.name}
                    {activeContinent === index && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-primary rotate-45" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </MotionInView>

        <div className="max-w-6xl mx-auto">
          {continents.map((continent, continentIndex) => (
            <div
              key={continentIndex}
              className={`
                transition-all duration-500
                ${
                  activeContinent === continentIndex
                    ? "opacity-100 block"
                    : "opacity-0 hidden"
                }
              `}
            >
              <MotionInView>
                <div className="text-center mb-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                    {continent.detail.title}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <div className="w-12 h-0.5 bg-primary/50 rounded-full" />
                    <div className="w-3 h-3 bg-primary rounded-full" />
                    <div className="w-12 h-0.5 bg-primary/50 rounded-full" />
                  </div>
                </div>
              </MotionInView>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {continent.detail.country.map((country, countryIndex) => (
                  <MotionInView key={countryIndex} className="group">
                    <div className="h-full flex flex-col bg-white rounded-2xl shadow-lg border border-slate-200/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1">
                      <div className="bg-linear-to-r from-primary/10 via-primary/5 to-transparent p-6 border-b border-slate-100">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <svg
                              className="w-5 h-5 text-primary"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </div>
                          <h4 className="text-xl md:text-2xl font-bold text-slate-900">
                            {country.name}
                          </h4>
                        </div>
                      </div>

                      <div className="p-6 flex flex-col h-full justify-between">
                        <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                          {country.text}
                        </p>

                        <div className="mt-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-semibold text-slate-600">
                              Market Strength
                            </span>
                            <span className="text-xs font-bold text-primary">
                              {getMarketStrength(country.name).strength}%
                            </span>
                          </div>
                          <div className="relative h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-linear-to-r from-primary via-primary/80 to-primary/60 rounded-full transition-all duration-1000 ease-out"
                              style={{
                                width: `${
                                  getMarketStrength(country.name).strength
                                }%`,
                              }}
                            />
                          </div>
                          <div className="mt-2 text-right">
                            <span className="inline-block px-2 py-1 text-xs font-semibold text-primary bg-primary/10 rounded-full">
                              {getMarketStrength(country.name).label}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </MotionInView>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalDistribution;
