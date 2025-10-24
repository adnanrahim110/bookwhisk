import Consultation from "@/components/sections/Consultation";
import Hero from "@/components/sections/Hero";
import Partner from "@/components/sections/Partner";
import Process from "@/components/sections/Process";
import Services from "@/components/sections/Services";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <Partner />
      <Team />
      <Testimonials />
      <Consultation />
    </>
  );
}
