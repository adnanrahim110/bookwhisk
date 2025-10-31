"use client";

import { cn } from "@/utils/cn";
import React, { useRef, useState } from "react";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import {
  Autoplay,
  EffectCoverflow,
  Keyboard,
  Navigation,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([Autoplay, Navigation, Keyboard, EffectCoverflow]);

const illustrations = [
  "/imgs/ill/1.avif",
  "/imgs/ill/2.avif",
  "/imgs/ill/3.avif",
  "/imgs/ill/4.avif",
  "/imgs/ill/5.avif",
  "/imgs/ill/6.avif",
  "/imgs/ill/7.avif",
  "/imgs/ill/8.avif",
];

const Sec5 = () => {
  const [active, setActive] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24 bg-white">
      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl text-slate-800">
              Illustrations Showcase
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
              A curated collection of large-format illustrations. Drag, tap, or
              use arrows — experience each piece up close.
            </p>
          </div>

          <div className="relative">
            <div className="absolute top-0 left-0 h-full w-28 bg-linear-to-r from-white via-white/50 to-transparent z-2" />
            <div className="absolute top-0 right-0 h-full w-28 bg-linear-to-l from-white via-white/50 to-transparent z-2" />
            <Swiper
              onSwiper={(sw) => (swiperRef.current = sw)}
              onSlideChange={(sw) => setActive(sw.realIndex)}
              loop={true}
              centeredSlides={true}
              slidesPerView={1.2}
              spaceBetween={24}
              speed={900}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              keyboard={{ enabled: true }}
              effect={"coverflow"}
              coverflowEffect={{
                rotate: 0,
                stretch: 80,
                depth: 220,
                modifier: 1,
                slideShadows: false,
              }}
              navigation={{
                nextEl: ".ill-next",
                prevEl: ".ill-prev",
              }}
              breakpoints={{
                640: { slidesPerView: 1.2 },
                1024: { slidesPerView: 1.3 },
                1280: { slidesPerView: 1.5 },
              }}
              className="illustration-swiper"
            >
              {illustrations.map((src, i) => (
                <SwiperSlide
                  key={src}
                  className="flex! justify-center items-center pb-36"
                >
                  <div className="relative w-full">
                    <img
                      src={src}
                      alt={`Illustration ${i + 1}`}
                      className={cn(
                        "w-auto min-h-dvh h-[680px] transition-all duration-300 ease-in-out rounded-2xl",
                        active !== i && "opacity-70"
                      )}
                      loading="lazy"
                    />
                    {(() => {
                      const len = illustrations.length;
                      const raw = Math.abs(i - active);
                      const dist = Math.min(raw, len - raw);
                      const opacity = dist === 0 ? 1 : dist === 1 ? 0.35 : 0;
                      const translateY = dist === 0 ? 0 : 8;
                      return (
                        <div
                          className="w-full h-5 absolute -bottom-16 left-0 rounded-full bg-radial from-black to-transparent blur-xl pointer-events-none"
                          style={{
                            opacity,
                            transform: `translateY(${translateY}px)`,
                            transitionProperty: "opacity, transform",
                            transitionTimingFunction:
                              "cubic-bezier(0.2, 0.9, 0.2, 1)",
                            transitionDuration: `900ms`,
                          }}
                        />
                      );
                    })()}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button
              className="ill-prev absolute left-2 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:scale-105 transition"
              aria-label="Previous illustration"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="#0f172a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              className="ill-next absolute right-2 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white/90 flex items-center justify-center shadow-md hover:scale-105 transition"
              aria-label="Next illustration"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 6l6 6-6 6"
                  stroke="#0f172a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-linear-to-r from-white to-transparent opacity-80" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-linear-to-l from-white to-transparent opacity-80" />
    </section>
  );
};

export default Sec5;
