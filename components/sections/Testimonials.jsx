"use client";

import { reviews } from "@/constants";
import { Star } from "lucide-react";
import Image from "next/image";
import { TbQuoteFilled } from "react-icons/tb";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-[26px] md:text-4xl lg:text-5xl font-serif text-slate-800 mb-2">
            Authors Love Working With Us
          </h2>
          <p className="lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what published authors have
            to say about their Bookwhisk experience.
          </p>
        </div>
      </div>
      <div className="grid gap-3.5 grid-cols-1 w-full relative">
        <div className="h-full w-20 lg:w-56 absolute top-0 -left-5 bg-linear-to-r from-white to-transparent z-2 pointer-events-none" />
        <div className="h-full w-20 lg:w-56 absolute top-0 -right-5 bg-linear-to-l from-white to-transparent z-2 pointer-events-none" />
        {[...Array(2)].map((_, colIdx) => {
          const chunk = reviews.slice(colIdx * 10, colIdx * 10 + 10);
          return (
            <div key={colIdx} className="relative w-full">
              <Swiper
                modules={[Autoplay]}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  reverseDirection: colIdx === 1,
                }}
                loop
                speed={10000}
                slidesPerView="auto"
                spaceBetween={14}
                className="overflow-clip! *:ease-linear!"
              >
                {chunk.map((review, idx) => (
                  <SwiperSlide key={idx} className="w-auto! h-full!">
                    <div className="bg-primary-50 border border-primary-100 px-5 py-4 flex flex-col justify-between rounded-2xl w-xs h-72 md:w-[450px] md:h-[278px]">
                      <p className="font-medium text-neutral-800">
                        {review.comment}
                      </p>
                      <div className="flex justify-between items-end w-full">
                        <div className="flex items-center gap-2">
                          <div className="shrink-0 size-12 rounded-full overflow-hidden">
                            <Image
                              objectFit="cover"
                              width={60}
                              height={60}
                              src={review.avatar}
                              alt={review.author}
                              className="overflow-hidden"
                            />
                          </div>
                          <div className="space-y-0.5">
                            <h6 className="font-sans tracking-wide">
                              Author {review.author}
                            </h6>
                            <div className="inline-flex gap-0.5 items-center justify-start text-primary-400">
                              {[...Array(5)].map((_, starIdx) => (
                                <Star
                                  key={starIdx}
                                  size={16}
                                  className="fill-primary-400"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="text-5xl opacity-30">
                          <TbQuoteFilled />
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
