import { Info, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | BookWhisk - Self-Publishing Facilitators",
};

const ContactPage = () => {
  return (
    <>
      <section className="py-20 md:py-28 relative overflow-hidden bg-linear-to-br from-primary-50/30 via-white to-secondary-50/20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-neutral-900 mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              We Would Be Happy to Help
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 md:gap-8">
            <Link
              href="tel:+14079669398"
              className="block bg-white border border-neutral-200 rounded-2xl p-8 md:p-10 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900 mb-3">
                  Talk to our
                </h2>
                <h3 className="text-2xl font-bold text-primary-700 mb-6">
                  Publishing Experts
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  Our experts will guide you through the process, help you find
                  the right plan, and answer any publishing-related inquiries.
                </p>
              </div>
            </Link>

            <Link
              href="/signup"
              className="block bg-white border border-neutral-200 rounded-2xl p-8 md:p-10 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-primary-700 mb-3">
                  Chat with Our
                </h2>
                <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                  General Inquiries Team
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  For questions about our services, partnerships, or other
                  non-publishing topics, our team is here to assist you.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
