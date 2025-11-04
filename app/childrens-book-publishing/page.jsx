import Sec2 from "@/components/cbp/Sec2";
import Sec3 from "@/components/cbp/Sec3";
import Sec4 from "@/components/cbp/Sec4";
import Sec5 from "@/components/cbp/Sec5";
import CTA from "@/components/sections/CTA";
import FAQs from "@/components/sections/FAQs";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Hero2 from "@/components/services/Hero2";
import React from "react";

export const metadata = {
  title: "Childrens Book Publishing | BookWhisk - Self-Publishing Facilitators",
};

const ChildrensPage = () => {
  return (
    <>
      <Hero2 />
      <Sec2 />
      <Sec3 />
      <Sec4 />
      <Sec5 />
      <Portfolio />
      <Testimonials />
      <CTA
        title="Ready to Create a Book That Kids Will Love and Parents Will Trust?"
        text="Let’s whisk your imagination into a story that children will cherish and parents will believe in, a timeless tale that inspires wonder on every page. "
        btnText="Start Now"
      />
      <FAQs />
    </>
  );
};

export default ChildrensPage;
