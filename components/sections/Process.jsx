import Button from "@/components/ui/Button";
import {
  RiChatSmile3Line,
  RiFileList3Line,
  RiTeamLine,
  RiRocket2Line,
} from "react-icons/ri";

const steps = [
  {
    title: "Free Consultation",
    description:
      "Share your vision with us. We discuss your goals, timeline, and the best path forward for your book.",
    icon: RiChatSmile3Line,
  },
  {
    title: "Custom Plan",
    description:
      "Receive a tailored publishing plan with clear timelines, pricing, and deliverables. No surprises.",
    icon: RiFileList3Line,
  },
  {
    title: "Expert Execution",
    description:
      "Our team gets to work-editing, designing, formatting. You stay informed every step of the way.",
    icon: RiTeamLine,
  },
  {
    title: "Publishing & Launch",
    description:
      "We publish your book across all platforms and support your launch with marketing strategies.",
    icon: RiRocket2Line,
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="py-24 bg-linear-to-br from-orange-50 via-rose-50 to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-white text-orange-800 px-5 py-2 rounded-full text-sm font-medium mb-4 shadow-sm">
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From first conversation to published book, we make the journey
            smooth and stress-free.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ title, description, icon: Icon }, index) => (
            <div key={title} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-linear-to-r from-orange-300 to-rose-300 -z-10"></div>
              )}
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 h-full">
                <div className="w-16 h-16 bg-linear-to-br from-orange-500 to-rose-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <Icon className="text-2xl text-white" />
                </div>
                <div className="text-5xl font-bold text-orange-200 mb-4">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">
                  {title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button href="#contact" variant="primary" className="px-10 py-4 text-lg">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Process;
