"use client";

import { services } from "@/constants";
import { Check, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const Cards = () => {
  return (
    <section className="relative py-24">
      <div className="absolute -top-20 -left-5 bg-linear-to-r from-secondary-50 via-primary-50 to-transparent h-4/6 w-3/5 z-0 blur-2xl opacity-60" />
      <div className="absolute bottom-10 -right-5 bg-linear-to-l from-secondary-50 via-primary-50 to-transparent h-2/5 w-3/5 z-0 blur-2xl opacity-60" />
      <div className="container relative z-1 space-y-16">
        {["Publish Your Book with Confidence", "Launch and Grow Your Book"].map(
          (title, colIdx) => {
            const chunk = services.slice(colIdx * 9, colIdx * 9 + 9);
            return (
              <Fragment>
                <div className="text-center max-w-5xl mx-auto">
                  <h2 className="text-2xl md:text-5xl">{title}</h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                  {chunk.map((srv, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl bg-transparent relative h-full"
                    >
                      <div className="absolute inset-0 bg-linear-to-r from-primary-200 to-neutral-200 blur-[2px] rounded-2xl" />
                      <div className="bg-white border border-transparent rounded-2xl relative z-1 p-5 flex flex-col justify-between gap-5 h-full cursor-pointer hover:-translate-y-1 hover:border-neutral-200 transition-all duration-300 ease-linear">
                        <div className="space-y-3">
                          <div>
                            <Image
                              width={512}
                              height={512}
                              src={srv.card.icon}
                              alt={srv.card.title}
                              className="w-14"
                            />
                          </div>
                          <h3 className="text-2xl">
                            <Link
                              href={srv.href}
                              className="hover:text-primary pb-1 transition-all duration-300 ease-in-out relative inline-block before:h-0.5 before:w-0 before:absolute before:top-full before:left-0 before:bg-primary hover:before:w-full before:transition-all before:duration-200 before:ease-linear"
                            >
                              {srv.card.title}
                            </Link>
                          </h3>
                          <p className="text-neutral-800">{srv.card.text}</p>
                          <ul className="space-y-2">
                            {srv.card.points.map((point, pIdx) => (
                              <li
                                key={pIdx}
                                className="flex items-center gap-1"
                              >
                                <div className="shrink-0 text-primary">
                                  <Check size={20} strokeWidth={3} />
                                </div>
                                <span className="text-neutral-700">
                                  {point}
                                </span>
                              </li>
                            ))}
                          </ul>
                          <div className="mt-4 pt-3 border-t border-t-neutral-200">
                            <Link
                              href={srv.href}
                              className="inline-flex text-lg pl-2 items-end leading-none font-semibold group/link justify-start text-black hover:text-primary-700 transition-all duration-300 ease-in-out"
                            >
                              <span>Learn more</span>
                              <span className="shrink-0 inline-flex items-center">
                                <ChevronRight
                                  size={16}
                                  strokeWidth={3}
                                  className="group-hover/link:translate-x-0.5 transition-all duration-300 ease-in-out"
                                />
                                <ChevronRight
                                  size={16}
                                  strokeWidth={3}
                                  className="-translate-x-2.5 opacity-0 group-hover/link:-translate-x-2 group-hover/link:opacity-100 transition-all duration-300 ease-in-out"
                                />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Fragment>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Cards;
