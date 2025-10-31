import Consultation from "@/components/sections/Consultation";
import FAQs from "@/components/sections/FAQs";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import MarketingGuide from "@/components/services/MarketingGuide";
import MoreThanMarketing from "@/components/services/MoreThanMarketing";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import Hero from "@/components/ui/Hero";
import React from "react";

const ServicePage = () => {
  return (
    <>
      <Hero
        title="Reach More Readers with Targeted Book Marketing"
        subtitle="Book Marketing Service"
        text={[
          "Promoting your book shouldn’t be complicated. With Spines Marketing Tool, you can automatically launch high-impact advertising campaigns across Amazon, Google, and Meta, without needing a marketing degree.",
          "Set your budget, customize your goals, and let Spines handle the rest – it’s marketing simplified.",
        ]}
      />
      <ServiceFeatures />
      <MarketingGuide />
      <MoreThanMarketing />
      <Portfolio />
      <Testimonials />
      <Consultation />
      <FAQs />
    </>
  );
};

export default ServicePage;
