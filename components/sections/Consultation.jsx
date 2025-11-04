import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import {
  RiCalendarCheckLine,
  RiFileList3Line,
  RiPhoneLine,
  RiTimeLine,
} from "react-icons/ri";

const consultationBenefits = [
  {
    title: "Free Consultation",
    description: "30-minute call to discuss your book and goals",
    icon: RiCalendarCheckLine,
    iconGradient: "from-orange-500 to-rose-500",
  },
  {
    title: "Custom Quote",
    description: "Transparent pricing tailored to your needs",
    icon: RiFileList3Line,
    iconGradient: "from-rose-500 to-pink-500",
  },
  {
    title: "Quick Response",
    description: "We'll get back to you within 24 hours",
    icon: RiTimeLine,
    iconGradient: "from-amber-500 to-orange-500",
  },
];

const phoneDisplay = "(123) 456-7890";
const phoneLink = "+1234567890";

const Consultation = () => {
  return (
    <section id="contact" className="relative overflow-hidden bg-primary-50">
      <div className="flex flex-wrap flex-col lg:flex-row">
        <div className="w-full lg:w-[45%] bg-linear-to-br from-orange-500 via-rose-500 to-pink-600 p-8 md:p-14 flex flex-col justify-between relative overflow-hidden min-h-[500px] lg:min-h-[600px]">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-white/30">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
              Let's Get Started
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Ready to Publish Your Book?
            </h2>

            <p className="text-base md:text-lg text-white/90 mb-8">
              Schedule a free consultation with our team. We'll discuss your
              project, answer your questions, and create a custom publishing
              plan just for you.
            </p>

            <div className="space-y-4">
              {consultationBenefits.map(
                ({ title, description, icon: Icon }) => (
                  <div key={title} className="flex items-start gap-3 group">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center shrink-0 border border-white/30 group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                      <Icon className="text-lg text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-white mb-0.5 text-base">
                        {title}
                      </h3>
                      <p className="text-white/80 text-sm leading-snug">
                        {description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="relative z-10 mt-6">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
              <p className="text-white/90 mb-3 text-sm font-medium">
                Have questions? Call us directly:
              </p>
              <a
                href={`tel:${phoneLink}`}
                className="text-2xl font-bold text-white hover:text-white/80 transition-colors inline-flex items-center gap-2 group/phone"
              >
                <RiPhoneLine className="text-xl" />
                {phoneDisplay}
                <svg
                  className="w-5 h-5 opacity-0 group-hover/phone:opacity-100 group-hover/phone:translate-x-1 transition-all"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
        </div>

        <div className="w-full lg:w-[55%] bg-primary-50/20 p-8 md:p-14 flex items-center">
          <div className="w-full">
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                Get Your Free Consultation
              </h3>
              <p className="text-slate-600">
                Fill out the form and we'll get back to you within 24 hours
              </p>
            </div>

            <form data-readdy-form="true" id="contact-form">
              <div className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <Input
                    label="Your Name *"
                    id="name"
                    name="name"
                    placeholder="John Smith"
                    required
                    type="text"
                  />
                  <Input
                    label="Email Address *"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    type="email"
                  />
                  <Input
                    label="Phone Number"
                    id="phone"
                    name="phone"
                    placeholder="(123) 456-7890"
                    type="tel"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <Select
                    label="Book Genre *"
                    id="bookGenre"
                    name="bookGenre"
                    required
                    defaultValue=""
                    placeholder="Select a genre"
                    options={[
                      { value: "fiction", label: "Fiction" },
                      { value: "non-fiction", label: "Non-Fiction" },
                      { value: "memoir", label: "Memoir" },
                      { value: "self-help", label: "Self-Help" },
                      { value: "business", label: "Business" },
                      { value: "children", label: "Children's Book" },
                      { value: "poetry", label: "Poetry" },
                      { value: "other", label: "Other" },
                    ]}
                  />
                  <Select
                    label="Project Stage *"
                    id="projectStage"
                    name="projectStage"
                    required
                    defaultValue=""
                    placeholder="Where are you in the process?"
                    options={[
                      {
                        value: "manuscript-complete",
                        label: "Manuscript Complete",
                      },
                      { value: "needs-editing", label: "Needs Editing" },
                      {
                        value: "ready-to-publish",
                        label: "Ready to Publish",
                      },
                      { value: "just-starting", label: "Just Starting Out" },
                    ]}
                  />
                </div>
                <Textarea
                  label="Tell Us About Your Book"
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={500}
                  placeholder="Share a brief description of your book and what services you're interested in..."
                  helperText="0/500 characters"
                />
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Consultation;
