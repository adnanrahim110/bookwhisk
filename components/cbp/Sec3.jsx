"use client";

import Button from "../ui/Button";

const points = [
  {
    label: "Age-Appropriate Storytelling",
    text: "Speaks the language of its age group, inviting curiosity, comfort, and wonder through age-appropriate vocabulary and pacing.",
  },
  {
    label: "Story-Driven Illustrations",
    text: "Aligns illustrations and text seamlessly, so that every visual detail complements the storytelling and keeps young readers engaged.",
  },
  {
    label: "Professionally Published Quality",
    text: "Meets professional publishing standards for both digital and print formats, ensuring durability, readability, and quality presentation across all platforms.",
  },
  {
    label: "Building Your Author Brand",
    text: "Builds your author brand in the children’s market, positioning your story among those that nurture young minds and spark lifelong readers.",
  },
];

const Icon = ({ id }) => {
  switch (id) {
    case 0:
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M3 6a1 1 0 0 1 1-1h12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 6v12a2 2 0 0 0 2 2h12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21 6v12a2 2 0 0 1-2 2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 1:
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M21 15v4a1 1 0 0 1-1 1h-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 9l9-6 9 6-9 6-9-6z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 2:
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.05 12h19.9"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M3 9h18"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};

const Sec3 = () => {
  return (
    <section className="relative overflow-hidden bg-cover bg-center bg-no-repeat bg-[url(/imgs/child-sec3.avif)] py-20 lg:py-28">
      <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/25 to-black/45 pointer-events-none" />

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
            Why Children’s Books Need Special Care
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/90">
            Creating a children’s book isn’t just about writing a story and
            adding illustrations, it’s about crafting an experience that shapes
            young imaginations and leaves a lasting impression. Every word,
            color, and character matters because children’s books are often a
            child’s first introduction to the magic of reading.
          </p>
          <p className="mt-2 text-base sm:text-lg md:text-xl text-white/90">
            A successful children’s book captures hearts on multiple levels, it
            speaks directly to kids while also resonating with parents,
            teachers, and librarians who bring these stories to life in homes,
            classrooms, and libraries. At BookWhisk, we understand that balance
            deeply.
          </p>
        </div>

        <div className="mt-28 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {points.map((p, idx) => (
            <article
              key={p.label}
              className="relative bg-black/20 border border-white/20 backdrop-blur-md rounded-2xl p-6 flex flex-col transform-3d perspective-[2000px] hover:animate-swing origin-[center_top]"
              aria-labelledby={`sec3-${idx}-title`}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="size-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm sm:text-base shadow-md">
                  <span className="size-8 rounded-full shadow-[inset_0_0_5px] shadow-black/40" />
                </div>
              </div>

              <div className="mt-7 flex-1 flex flex-col">
                <div className="flex items-center gap-2">
                  <div className="shrink-0 flex items-center justify-center h-11 w-11 rounded-md bg-black/12 border border-black/10 text-white shadow-inner">
                    <Icon id={idx} />
                  </div>
                  <h3
                    id={`sec3-${idx}-title`}
                    className="text-[21px] font-semibold text-white"
                  >
                    {p.label}
                  </h3>
                </div>
                <p className="mt-4 pl-2 text-white/80">{p.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-20">
          <div className="text-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Get Started With Your Book Today!
              </h2>
              <p className="text-base md:text-lg text-neutral-100">
                With BookWhisk, you’re not just creating a book, you’re building
                a world child will love to return to. Our mission is to combine
                creative magic with publishing precision, so your story not only
                shines but becomes a cherished part of childhood memories.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <Button href="/contact">Get Started</Button>
        </div>
      </div>

      <div className="absolute -left-24 bottom-10 w-72 h-72 rounded-full bg-linear-to-tr from-amber-400/20 to-rose-400/8 blur-3xl opacity-80 pointer-events-none" />
      <div className="absolute -right-28 top-16 w-56 h-56 rounded-full bg-linear-to-br from-indigo-400/10 to-sky-400/6 blur-3xl opacity-70 pointer-events-none" />
    </section>
  );
};

export default Sec3;
