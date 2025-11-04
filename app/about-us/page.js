import Wdu from "@/components/about/Wdu";
import AboutFeatures from "@/components/sections/AboutFeatures";
import CTA from "@/components/sections/CTA";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Hero from "@/components/ui/Hero";

export const metadata = {
  title: "About | BookWhisk - Self-Publishing Facilitators",
};

const AboutPage = () => {
  return (
    <>
      <Hero
        subtitle="About BookWhisk"
        title="Where Your Story Finds Its Perfect Team"
        text={[
          "At BookWhisk, we believe every author has a story worth sharing, and that the journey from idea to bookshelf should feel just as inspiring as the book itself. We’re more than a publishing service, we’re your creative and strategic partner, helping you bring your story to life with personalized collaboration, care, and craftsmanship. As we believe that every author deserves more than a service, they deserve a full team of dedicated professionals who bring their vision to life with creativity, care, and publishing precision. From your first draft to global distribution, we’re by your side, every step of the way.",
          "Whether you’re writing your first book or growing your author brand, our in-house experts work collaboratively to give your story the craftsmanship it needs to succeed, no outsourcing, no disconnects, just one cohesive team aligned with your goals.",
        ]}
      />
      <AboutFeatures />
      <Wdu />
      <Portfolio />
      <Testimonials />
      <CTA
        title="The BookWhisk Promise"
        text="You’re not just another client, you’re a creator, a storyteller, and a brand we believe in. Our goal is to make your publishing journey clear, collaborative, and creatively fulfilling."
        btnText="Partner With BookWhisk Now"
      />
    </>
  );
};

export default AboutPage;
