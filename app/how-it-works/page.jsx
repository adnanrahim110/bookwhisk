import FinalCTA from "@/components/how-it-works/FinalCTA";
import HowItWorksHero from "@/components/how-it-works/HowItWorksHero";
import MissionStatement from "@/components/how-it-works/MissionStatement";
import PublishingSteps from "@/components/how-it-works/PublishingSteps";
import WhyThisMatters from "@/components/how-it-works/WhyThisMatters";
import FAQs from "@/components/sections/FAQs";

export const metadata = {
  title: "How It Works - BookWhisk",
  description:
    "Your publishing journey, clearly mapped. Discover how BookWhisk makes independent publishing effortless, professional, and rewarding.",
};

const HowItWorksPage = () => {
  return (
    <>
      <HowItWorksHero />
      <MissionStatement />
      <PublishingSteps />
      <WhyThisMatters />
      <FinalCTA />
      <FAQs />
    </>
  );
};

export default HowItWorksPage;
