import { serv_hero } from "@/public";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import Subtitle from "./Subtitle";

const Hero = ({ title = "", text = "", subtitle = "", tagline = "", img }) => {
  return (
    <section className="relative pt-32 pb-20">
      <div className="h-[90%] blur-2xl w-3/5 absolute -top-5 -left-5 bg-linear-to-r from-secondary-50 via-primary-50 to-transparent z-0 pointer-events-none" />
      <div className="container relative z-1">
        <div className="flex items-center justify-between">
          <div className="lg:w-1/2 w-full lg:pr-5">
            <div className="space-y-5">
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
              <div className="space-y-1.5">
                <h1 className="text-2xl lg:text-[44px] font-semibold">
                  {title}
                </h1>
                {tagline && (
                  <h2 className="text-2xl lg:text-3xl font-semibold text-primary">
                    {tagline}
                  </h2>
                )}
              </div>
              <div className="space-y-2">
                {Array.isArray(text) ? (
                  text.map((para, idx) => (
                    <p
                      key={idx}
                      className="xl:text-lg"
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))
                ) : (
                  <p
                    className="xl:text-lg"
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                )}
              </div>
              <div className="mt-8">
                <Button href="/contact">Get Started</Button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full hidden lg:block lg:pl-5">
            <Image
              src={img || serv_hero}
              alt={title}
              layout="responsive"
              className="mix-blend-multiply"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
