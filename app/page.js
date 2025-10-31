import Consultation from "@/components/sections/Consultation";
import FAQs from "@/components/sections/FAQs";
import Hero from "@/components/sections/Hero";
import Partner from "@/components/sections/Partner";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Process />
      <Services />
      <Partner />
      <Portfolio />
      <Team />
      <Testimonials />
      <Consultation />
      <FAQs />
    </>
  );
}
