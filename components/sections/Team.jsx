const projectManagerHighlights = [
  "Regular progress updates",
  "Direct communication channel",
  "Coordination with all specialists",
];

const Team = () => {
  return (
    <section id="team" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-orange-50 via-amber-50 to-rose-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(244,63,94,0.1),transparent_50%)]" />

      <div className="container relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-orange-800 px-6 py-2.5 rounded-full text-sm font-semibold mb-6 shadow-lg border border-orange-100">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Meet Our Team
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-3">
            Experts Who Care About
            <span className="block bg-linear-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
              Your Success
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Our in-house team brings decades of combined experience in editing,
            design, publishing, and marketing. Every member is dedicated to
            making your book the best it can be.
          </p>
        </div>

        <div className="">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-orange-400 via-rose-400 to-pink-400 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-500" />

            <div className="relative bg-white/90 backdrop-blur-xl p-10 md:p-14 lg:p-10 rounded-3xl shadow-2xl border border-white/20">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-rose-500 rounded-2xl blur-2xl opacity-30" />
                  <div className="relative w-20 h-20 bg-linear-to-br from-orange-500 to-rose-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <svg
                      className="w-10 h-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Your Dedicated Project Manager
                </h3>
                <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                  Every author gets a personal project manager who coordinates
                  all aspects of your publishing journey. <br /> One point of
                  contact, seamless communication, and peace of mind.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mt-12">
                {projectManagerHighlights.map((highlight, index) => (
                  <div key={highlight} className="group/item relative">
                    <div className="absolute inset-0 bg-linear-to-br from-orange-100 to-rose-100 rounded-2xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />

                    <div className="relative p-3 rounded-2xl border border-slate-200 bg-white/50 backdrop-blur-sm transition-all duration-300 group-hover/item:border-orange-300 group-hover/item:shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="shrink-0 size-7 bg-linear-to-br from-orange-500 to-rose-500 rounded-lg flex items-center justify-center shadow-lg group-hover/item:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold">
                            {index + 1}
                          </span>
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-800 font-medium leading-relaxed">
                            {highlight}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex items-center justify-center gap-3 text-sm text-slate-600">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-linear-to-br from-orange-400 to-rose-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                      >
                        {i}
                      </div>
                    ))}
                  </div>
                  <span className="font-medium">
                    Trusted by 1,000+ authors worldwide
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
