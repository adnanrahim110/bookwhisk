"use client";

import Image from "next/image";
import { useCallback, useMemo } from "react";
import "swiper/css/effect-coverflow";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio = () => {
  const images = useMemo(() => {
    return Array.from({ length: 26 }, (_, i) => `/imgs/books/${i + 9}.avif`);
  }, []);

  const renderSlide = useCallback((src, idx) => {
    return (
      <SwiperSlide key={src}>
        <div className="relative w-60 h-auto mx-auto">
          <Image
            width={250}
            height={373}
            src={src}
            alt={`Book cover ${idx + 1}`}
            className="relative"
            priority
          />
        </div>
      </SwiperSlide>
    );
  }, []);

  return (
    <section className="py-20 bg-white relative">
      <div className="container text-center">
        <h2 className="text-4xl md:text-5xl text-slate-800 mb-1">
          Premium Book Portfolio
        </h2>
        <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
          A curated selection of recent covers and designs — swipe to explore.
        </p>
      </div>

      <div className="w-full mt-20">
        <Swiper
          modules={[EffectCoverflow, Autoplay]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          speed={900}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          coverflowEffect={{
            rotate: 18,
            stretch: 0,
            depth: 220,
            modifier: 1,
            slideShadows: false,
          }}
          className="py-8"
          breakpoints={{
            320: { slidesPerView: 1.3 },
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.6 },
            1280: { slidesPerView: 4.4 },
          }}
        >
          {images.map((src, idx) => renderSlide(src, idx))}
        </Swiper>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-56 bg-linear-to-r from-white via-white/50 to-transparent z-3 hidden lg:block" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-56 bg-linear-to-l from-white via-white/50 to-transparent z-3 hidden lg:block" />
      </div>
    </section>
  );
};

export default Portfolio;
