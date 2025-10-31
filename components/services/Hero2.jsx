import React from "react";
import Button from "../ui/Button";
import Subtitle from "../ui/Subtitle";

const Hero2 = () => {
  return (
    <section className="relative pt-40 pb-28 bg-cover bg-right bg-no-repeat bg-[url(/imgs/child-banner.avif)] h-dvh max-h-[760px]">
      <div className="absolute inset-0 z-0 bg-linear-to-tr from-black/50 via-black/20 to-transparent" />
      <div className="container">
        <div className="w-full lg:w-8/12">
          <div className="space-y-4">
            <Subtitle>Children's Book Publishing</Subtitle>
            <h1 className="text-2xl lg:text-5xl font-semibold text-white">
              Enhance creative potential with our professional children's
              book-writing services
            </h1>
            <div className="space-y-2">
              <p className="text-white xl:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
                iure assumenda accusamus nesciunt magni nulla ut enim mollitia,
                expedita corrupti harum eligendi perferendis incidunt ad et
                veniam sint earum molestiae? Voluptate enim distinctio
                consequatur possimus. Laudantium sapiente iusto illum voluptate.
              </p>
              <p className="text-white xl:text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
                iure assumenda accusamus nesciunt magni nulla ut enim mollitia,
                expedita corrupti harum eligendi perferendis incidunt
              </p>
            </div>
            <div>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
