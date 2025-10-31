import Sec2 from "@/components/cbp/Sec2";
import Sec3 from "@/components/cbp/Sec3";
import Sec4 from "@/components/cbp/Sec4";
import Sec5 from "@/components/cbp/Sec5";
import Consultation from "@/components/sections/Consultation";
import FAQs from "@/components/sections/FAQs";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Hero2 from "@/components/services/Hero2";
import React from "react";

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
      <Consultation />
      <FAQs />
    </>
  );
};

export default ChildrensPage;
