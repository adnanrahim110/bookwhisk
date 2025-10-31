import { serv_hero } from "@/public";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import Subtitle from "./Subtitle";

const Hero = ({ title = "", text = "", subtitle = "", img }) => {
  return (
    <section className="relative pt-40 pb-20">
      <div className="h-[90%] blur-2xl w-3/4 absolute -top-5 -right-5 bg-linear-to-l from-secondary-50 via-primary-50 to-transparent z-0 pointer-events-none" />
      <div className="container relative z-1">
        <div className="flex items-center justify-between">
          <div className="lg:w-1/2 w-full lg:pr-5">
            <div className="space-y-8">
              {subtitle && <Subtitle>{subtitle}</Subtitle>}
              <h1 className="text-2xl lg:text-5xl font-semibold">{title}</h1>
              <div className="space-y-2">
                {Array.isArray(text) ? (
                  text.map((para, idx) => (
                    <p
                      key={idx}
                      className="xl:text-xl"
                      dangerouslySetInnerHTML={{ __html: para }}
                    />
                  ))
                ) : (
                  <p
                    className="xl:text-xl"
                    dangerouslySetInnerHTML={{ __html: text }}
                  />
                )}
              </div>
              <div>
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full hidden lg:block lg:pl-5">
            <Image src={img || serv_hero} alt={title} layout="responsive" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
