import Image from "next/image";

const highlights = [
  {
    title: "Weekly checkpoints",
    description: "Stay aligned with progress dashboards and milestone reviews.",
  },
  {
    title: "Single point of contact",
    description: "Your project manager orchestrates editors, designers, and marketers.",
  },
  {
    title: "Post-launch momentum",
    description: "Analytics, media opportunities, and optimization to sustain sales.",
  },
];

const ProjectManager = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-rose-50/60">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 pb-24 pt-24 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="space-y-6 rounded-[2.5rem] border border-orange-100 bg-white p-10 shadow-[0_35px_80px_rgba(15,23,42,0.14)]">
          <h2 className="font-heading text-4xl font-semibold text-slate-900 sm:text-5xl">
            Your Dedicated Project Manager
          </h2>
          <p className="text-lg text-slate-600">
            Every author is paired with a seasoned project manager who turns complex timelines into a calm, collaborative experience.
          </p>
          <ul className="space-y-4 text-slate-600">
            {highlights.map((highlight) => (
              <li key={highlight.title} className="flex items-start gap-3">
                <span className="mt-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-orange-600 shadow-[0_10px_24px_rgba(249,115,22,0.25)]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="h-4 w-4 text-white"
                  >
                    <path d="m5 10 3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-slate-900">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-slate-600">{highlight.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-[2.5rem] border border-orange-100 bg-white shadow-[0_35px_80px_rgba(15,23,42,0.18)]">
          <Image
            src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80"
            alt="Project manager smiling while working at a desk."
            width={900}
            height={900}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectManager;
