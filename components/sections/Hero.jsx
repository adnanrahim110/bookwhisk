import Image from "next/image";
import Button from "@/components/ui/Button";

const stats = [
  { value: "500+", label: "Books Published" },
  { value: "98%", label: "Happy Authors" },
  { value: "1-on-1", label: "Support" },
];

const Hero = () => {
  return (
    <section className="relative bg-linear-to-br from-amber-50 via-orange-50 to-rose-50 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-400 rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-orange-100 text-orange-800 px-5 py-2 rounded-full text-sm font-medium mb-6">
              ✨ Your Publishing Partner
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-slate-800 leading-tight mb-6">
              Bring Your Story to Life
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              From manuscript to marketplace, we handle every detail of your
              self-publishing journey. Professional, personal, and stress-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button href="#contact" variant="primary">
                Get Started Today
              </Button>
              <Button href="#services" variant="secondary">
                Explore Services
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  500+
                </div>
                <div className="text-sm text-slate-600">Books Published</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  98%
                </div>
                <div className="text-sm text-slate-600">Happy Authors</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  1-on-1
                </div>
                <div className="text-sm text-slate-600">Support</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-orange-200 rounded-3xl -z-10 rotate-6"></div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-rose-200 rounded-3xl -z-10 -rotate-6"></div>
            <img
              alt="Author workspace"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
              src="/imgs/hero-img.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
