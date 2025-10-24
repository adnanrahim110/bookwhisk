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
    <section
      id="contact"
      className="py-24 bg-linear-to-br from-orange-50 via-rose-50 to-amber-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-white text-orange-800 px-5 py-2 rounded-full text-sm font-medium mb-6 shadow-sm">
              Let's Get Started
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6">
              Ready to Publish Your Book?
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Schedule a free consultation with our team. We'll discuss your
              project, answer your questions, and create a custom publishing
              plan just for you.
            </p>
            <div className="space-y-6 mb-8">
              {consultationBenefits.map(
                ({ title, description, icon: Icon, iconGradient }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div
                      className={`w-12 h-12 bg-linear-to-br ${iconGradient} rounded-xl flex items-center justify-center shrink-0`}
                    >
                      <Icon className="text-xl text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">{title}</h3>
                      <p className="text-slate-600">{description}</p>
                    </div>
                  </div>
                )
              )}
            </div>
            <div className="bg-white p-6 rounded-2xl border border-orange-200 shadow-md">
              <p className="text-slate-700 mb-4">
                <span className="font-bold text-orange-600">Questions?</span>{" "}
                Call us directly:
              </p>
              <a
                href={`tel:${phoneLink}`}
                className="text-2xl font-bold text-slate-800 hover:text-orange-600 transition-colors cursor-pointer inline-flex items-center"
              >
                <RiPhoneLine className="mr-2" />
                {phoneDisplay}
              </a>
            </div>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-orange-200">
            <h3 className="text-2xl font-serif text-slate-800 mb-6">
              Get Your Free Consultation
            </h3>
            <form data-readdy-form="true" id="contact-form">
              <div className="space-y-5">
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
                    { value: "ready-to-publish", label: "Ready to Publish" },
                    { value: "just-starting", label: "Just Starting Out" },
                  ]}
                />
                <Textarea
                  label="Tell Us About Your Book"
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={500}
                  placeholder="Share a brief description of your book and what services you're interested in..."
                  helperText="0/500 characters"
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full rounded-xl"
                >
                  Schedule Free Consultation
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
