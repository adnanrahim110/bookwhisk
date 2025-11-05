import Consultation from "@/components/sections/Consultation";
import FAQs from "@/components/sections/FAQs";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Cards from "@/components/services/Cards";
import Hero from "@/components/ui/Hero";
import { serv_hero } from "@/public";

export const metadata = {
  title: "Services | BookWhisk - Self-Publishing Facilitators",
};

const servicesPage = () => {
  return (
    <>
      <Hero
        title="Explore BookWhisk Services"
        tagline="From Concept to Publication and Beyond"
        text="At BookWhisk, we offer a full range of services to bring your book to life, from editing and design to distribution and marketing. Our expert solutions are built to support every step of your publishing journey with creativity, precision, and care at every stage."
        img={serv_hero}
      />
      <Cards />
      <Portfolio />
      <Testimonials />
      <Consultation />
      <FAQs />
    </>
  );
};

export default servicesPage;
