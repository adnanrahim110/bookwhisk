import { child_banner } from "@/public";
import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import Subtitle from "../ui/Subtitle";

const Hero2 = () => {
  return (
    <section className="relative pt-40 pb-28 h-dvh max-h-[760px]">
      <Image
        src={child_banner}
        width={2864}
        height={1200}
        priority
        alt=""
        className="absolute inset-0 size-full object-cover object-right"
      />
      <div className="absolute inset-0 z-0 bg-linear-to-r from-black/40 via-black/20 to-black/1" />
      <div className="container">
        <div className="w-full lg:w-8/12">
          <div className="space-y-4">
            <Subtitle>Children’s Book Publishing Services</Subtitle>
            <h1 className="text-2xl lg:text-5xl font-semibold text-white">
              Where young imaginations meet professional publishing
            </h1>
            <div className="space-y-2">
              <p className="text-white xl:text-lg">
                Your story has the power to spark curiosity, light a smile, and
                become a treasured memory in a child’s bookshelf. At BookWhisk,
                we help you bring that story to life, with heart, artistry, and
                premium publishing expertise designed especially for children's
                books.
              </p>
              <p className="text-white xl:text-lg">
                From story books and picture books to early-reader chapter books
                and middle-grade adventures, we tailor every step of the journey
                to suit young readers and their grown-ups alike.
              </p>
            </div>
            <div>
              <Button href="/contact">Get Started</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
