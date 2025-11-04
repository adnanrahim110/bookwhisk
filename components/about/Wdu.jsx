import React from "react";

const points = [
  {
    title: "Author-Centric Approach",
    text: "Your story is the heart of everything we do. We take the time to understand your voice, your goals, and your vision, ensuring that every step, from concept to completion, reflects your creative intent. At BookWhisk, authors aren't just clients, they're collaborators.",
  },
  {
    title: "Honesty in Every Chapter",
    text: "We believe trust is built through honesty and clear communication. Every detail, every cost, every timeline is shared openly, so you always know where your book stands and how it's progressing. No hidden agendas, just genuine partnership.",
  },
  {
    title: "Creativity in Motion",
    text: "Publishing evolves, and so do we. From design to distribution, our team embraces new tools and ideas that enhance storytelling, streamline publishing, and keep your book ahead of the curve. Innovation, for us, is never about flash, it's about meaningful impact.",
  },
  {
    title: "Diversity in Storytelling",
    text: "Stories shape the world, and every voice matters. We welcome authors from all backgrounds, genres, and perspectives, fostering a creative environment built on empathy, diversity, and respect. Every book adds a new color to the literary landscape.",
  },
  {
    title: "Commitment to Craft",
    text: "Good isn't good enough. We refine, polish, and perfect every manuscript, illustration, and layout until it shines. Excellence at BookWhisk means precision, passion, and a refusal to settle, because your story deserves nothing less.",
  },
  {
    title: "Ownership & Accountability",
    text: "We take responsibility for every project as if it were our own. From deadlines to quality control, we stay accountable and proactive, ensuring your journey stays smooth, transparent, and successful. When your book thrives, we've done our job right.",
  },
];

const Wdu = () => {
  return (
    <section className="py-20 relative bg-primary-50">
      <div className="container">
        <div className="flex flex-wrap *:w-full justify-center gap-y-10">
          <div className="lg:w-10/12 text-center">
            <h2 className="text-4xl md:text-5xl text-slate-800 mb-6">
              What Drives Us
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              Championing creativity, trust, and excellence in every story we
              publish.
            </p>
          </div>
          <div>
            <div className="grid lg:grid-cols-3 gap-x-14 gap-y-14">
              {points.map((value, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col gap-5 relative text-center ${
                    idx !== 2 && idx !== 5
                      ? "lg:after:absolute lg:after:w-px lg:after:h-full lg:after:bg-primary-200 lg:after:top-0 lg:after:-right-7"
                      : ""
                  } ${
                    idx <= 2
                      ? "lg:before:absolute lg:before:-bottom-7 lg:before:w-full lg:before:h-px lg:before:bg-primary-200"
                      : idx < 5 &&
                        "lg:before:size-10 lg:before:bg-primary-200/70 lg:before:rounded-full lg:before:absolute lg:before:-top-12 lg:before:-right-12"
                  } max-lg:after:-bottom-7 max-lg:after:w-full max-lg:after:h-px max-lg:after:bg-primary-200 max-lg:after:absolute max-lg:left-0`}
                >
                  <h4 className="text-xl text-secondary-700">{value.title}</h4>
                  <p className="text-sm">{value.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wdu;
