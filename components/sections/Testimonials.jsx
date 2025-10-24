import Button from "@/components/ui/Button";
import { RiBook3Line, RiStarFill } from "react-icons/ri";

const testimonials = [
  {
    name: "Jennifer Adams",
    genre: "Contemporary Fiction",
    quote: `"Bookwhisk made my dream of becoming a published author come true. The team was professional, patient, and genuinely cared about my story. My book looks absolutely stunning!"`,
    bookTitle: "The Last Summer",
    rating: 5,
    image: {
      alt: "Jennifer Adams",
      src: "rw-w1.jpg",
    },
  },
  {
    name: "Michael Torres",
    genre: "Self-Help",
    quote: `"As a first-time author, I was overwhelmed by the publishing process. Bookwhisk handled everything with expertise and kept me informed every step. Highly recommend!"`,
    bookTitle: "Building Resilience",
    rating: 5,
    image: {
      alt: "Michael Torres",
      src: "rw-m1.jpg",
    },
  },
  {
    name: "Lisa Chen",
    genre: "Mystery",
    quote: `"The editing team at Bookwhisk elevated my manuscript beyond what I imagined. The cover design is gorgeous, and the marketing support helped me reach thousands of readers."`,
    bookTitle: "Whispers in the Garden",
    rating: 5,
    image: {
      alt: "Lisa Chen",
      src: "rw-w2.jpg",
    },
  },
  {
    name: "Robert Williams",
    genre: "Business",
    quote: `"Professional, efficient, and transparent. Bookwhisk delivered exactly what they promised, on time and on budget. My book is now selling on all major platforms."`,
    bookTitle: "Startup Secrets",
    rating: 5,
    image: {
      alt: "Robert Williams",
      src: "rw-m2.jpg",
    },
  },
  {
    name: "Amanda Foster",
    genre: "Memoir",
    quote: `"Writing my memoir was emotional, and the Bookwhisk team treated my story with such care and respect. They helped me share my journey with the world beautifully."`,
    bookTitle: "Journey to Healing",
    rating: 5,
    image: {
      alt: "Amanda Foster",
      src: "rw-w3.jpg",
    },
  },
  {
    name: "David Park",
    genre: "Tech Thriller",
    quote: `"From manuscript to marketplace in just 6 weeks! The Bookwhisk team is incredibly efficient without sacrificing quality. My book looks and reads like it came from a major publisher."`,
    bookTitle: "Code & Coffee",
    rating: 5,
    image: {
      alt: "David Park",
      src: "rw-m3.jpg",
    },
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-800 px-5 py-2 rounded-full text-sm font-medium mb-4">
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6">
            Authors Love Working With Us
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what published authors have
            to say about their Bookwhisk experience.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(
            ({ name, genre, quote, bookTitle, rating, image }) => (
              <div
                key={name}
                className="bg-linear-to-br from-orange-50 to-rose-50 p-8 rounded-3xl border border-orange-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    alt={image.alt}
                    className="w-16 h-16 rounded-full object-cover object-top border-2 border-orange-300"
                    src={`/imgs/${image.src}`}
                  />
                  <div>
                    <h4 className="font-bold text-slate-800">{name}</h4>
                    <p className="text-sm text-slate-600">{genre}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: rating }).map((_, index) => (
                    <RiStarFill key={index} className="text-orange-500" />
                  ))}
                </div>
                <p className="text-slate-700 leading-relaxed mb-4 italic">
                  {quote}
                </p>
                <div className="pt-4 border-t border-orange-200">
                  <p className="text-sm font-semibold text-orange-700">
                    <RiBook3Line className="inline text-base mr-2 align-middle" />
                    {bookTitle}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
        <div className="mt-16 bg-linear-to-br from-orange-500 to-rose-500 p-12 rounded-3xl text-center shadow-2xl">
          <h3 className="text-3xl font-serif text-white mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's turn your manuscript into a published book that readers will
            love.
          </p>
          <Button
            href="#contact"
            variant="tertiary"
            className="px-10 py-4 text-lg"
          >
            Start Your Publishing Journey
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
