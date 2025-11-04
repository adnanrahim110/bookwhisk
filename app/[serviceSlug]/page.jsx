import CTA from "@/components/sections/CTA";
import FAQs from "@/components/sections/FAQs";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import BookstoreInsight from "@/components/services/BookstoreInsight";
import GlobalDistribution from "@/components/services/GlobalDistribution";
import MarketingGuide from "@/components/services/MarketingGuide";
import MoreThanMarketing from "@/components/services/MoreThanMarketing";
import ServiceFeatures from "@/components/services/ServiceFeatures";
import Hero from "@/components/ui/Hero";
import { services } from "@/constants";
import { notFound } from "next/navigation";
import React from "react";

export async function generateStaticParams() {
  return services.map(({ href }) => ({
    serviceSlug: href.replace(/^\//, ""),
  }));
}

export async function generateMetadata({ params }) {
  const { serviceSlug } = await params;
  const service = services.find((s) => s.href.replace("/", "") === serviceSlug);

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested service post could not be found.",
    };
  }
  return {
    title: service.title,
  };
}

const ServicePage = async ({ params }) => {
  const { serviceSlug } = await params;
  console.log(serviceSlug);
  const service = services.find((s) => s.href.replace("/", "") === serviceSlug);

  if (!service) return notFound();
  return (
    <>
      <Hero
        title={service.hero.title}
        tagline={service.hero.tagline && service.hero.tagline}
        subtitle={service.hero.subtitle}
        text={service.hero.text}
        img={service.hero.img}
      />

      <ServiceFeatures
        title={service.sec1.title}
        text={
          service.sec1.text && service.sec1.text !== "" && service.sec1.text
        }
        features={service.sec1.cards}
      />

      {service.sec2 && (
        <MarketingGuide
          title={service.sec2.title}
          text={
            service.sec2.text && service.sec2.text !== "" && service.sec2.text
          }
          points={service.sec2.points}
        />
      )}

      {service.sec3 && (
        <BookstoreInsight
          title={service.sec3.title}
          tagline={service.sec3.tagline}
          text={service.sec3.text}
        />
      )}

      {service.sec4 && (
        <GlobalDistribution
          title={service.sec4.title}
          img={service.sec4.img}
          continents={service.sec4.continents}
        />
      )}

      <MoreThanMarketing />
      <Portfolio />
      <Testimonials />
      <CTA
        title={
          service.cta.title && service.cta.title !== "" && service.cta.title
        }
        text={service.cta.text && service.cta.text !== "" && service.cta.text}
        btnText={
          service.cta.btnText &&
          service.cta.btnText !== "" &&
          service.cta.btnText
        }
      />
      <FAQs />
    </>
  );
};

export default ServicePage;
