import Button from "@/components/ui/Button";
import {
  RiEditLine,
  RiFileTextLine,
  RiMegaphoneLine,
  RiPaletteLine,
  RiRocketLine,
  RiSearchEyeLine,
} from "react-icons/ri";

const services = [
  {
    title: "Manuscript Review & Editing",
    description:
      "Professional editors refine your story, ensuring clarity, flow, and polish. From developmental editing to line editing, we perfect every word.",
    icon: RiEditLine,
    iconGradient: "from-orange-500 to-rose-500",
  },
  {
    title: "Proofreading",
    description:
      "Catch every typo, grammatical error, and formatting inconsistency. Our eagle-eyed proofreaders ensure your book is flawless.",
    icon: RiSearchEyeLine,
    iconGradient: "from-rose-500 to-pink-500",
  },
  {
    title: "Book Cover & Interior Design",
    description:
      "Stunning covers that capture attention and professional interior layouts that enhance readability. First impressions matter.",
    icon: RiPaletteLine,
    iconGradient: "from-orange-500 to-amber-500",
  },
  {
    title: "eBook & Print Formatting",
    description:
      "Perfect formatting for all platforms-Kindle, Apple Books, print, and more. Your book looks professional everywhere.",
    icon: RiFileTextLine,
    iconGradient: "from-amber-500 to-yellow-500",
  },
  {
    title: "Publishing & Distribution",
    description:
      "We handle the technical side of publishing to Amazon, Apple Books, Kobo, and other platforms. You focus on writing.",
    icon: RiRocketLine,
    iconGradient: "from-rose-500 to-orange-500",
  },
  {
    title: "Marketing & Promotion",
    description:
      "Strategic marketing support to help your book reach its target audience. From launch strategies to ongoing promotion.",
    icon: RiMegaphoneLine,
    iconGradient: "from-pink-500 to-rose-500",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-800 px-5 py-2 rounded-full text-sm font-medium mb-4">
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6">
            Complete Publishing Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to transform your manuscript into a
            professionally published book, all under one roof.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ title, description, icon: Icon, iconGradient }) => (
            <div
              key={title}
              className="group bg-linear-to-br from-orange-50 to-rose-50 p-8 rounded-3xl hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-300"
            >
              <div
                className={`w-16 h-16 bg-linear-to-br ${iconGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <Icon className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
              <p className="text-slate-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button href="/contact" variant="primary" className="px-10 py-4 text-lg">
            See How We Can Help You Publish
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
