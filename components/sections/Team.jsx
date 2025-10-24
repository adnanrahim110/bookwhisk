import { RiCheckLine } from "react-icons/ri";

const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Senior Editor",
    specialty: "Fiction & Memoir",
    image: {
      alt: "Sarah Mitchell",
      src: "t1.jpg",
    },
  },
  {
    name: "Marcus Chen",
    role: "Book Designer",
    specialty: "Cover & Interior Design",
    image: {
      alt: "Marcus Chen",
      src: "t2.jpg",
    },
  },
  {
    name: "Emily Rodriguez",
    role: "Publishing Specialist",
    specialty: "Distribution & Platforms",
    image: {
      alt: "Emily Rodriguez",
      src: "t3.jpg",
    },
  },
  {
    name: "David Thompson",
    role: "Marketing Director",
    specialty: "Book Launch & Promotion",
    image: {
      alt: "David Thompson",
      src: "t4.jpg",
    },
  },
];

const projectManagerHighlights = [
  "Regular progress updates",
  "Direct communication channel",
  "Coordination with all specialists",
];

const Team = () => {
  return (
    <section
      id="team"
      className="py-24 bg-linear-to-br from-orange-50 via-amber-50 to-rose-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-white text-orange-800 px-5 py-2 rounded-full text-sm font-medium mb-4 shadow-sm">
            Meet Our Team
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-slate-800 mb-6">
            Experts Who Care About Your Success
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our in-house team brings decades of combined experience in editing,
            design, publishing, and marketing. Every member is dedicated to
            making your book the best it can be.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {teamMembers.map(({ name, role, specialty, image }) => (
            <div key={name} className="group">
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
                <div className="relative overflow-hidden">
                  <img
                    alt={image.alt}
                    className="w-full h-80 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    src={`/imgs/${image.src}`}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-1">
                    {name}
                  </h3>
                  <p className="text-orange-600 font-semibold mb-2">{role}</p>
                  <p className="text-sm text-slate-600">{specialty}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white p-10 rounded-3xl shadow-xl border border-orange-200">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-serif text-slate-800 mb-4">
                Your Dedicated Project Manager
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Every author gets a personal project manager who coordinates all
                aspects of your publishing journey. One point of contact,
                seamless communication, and peace of mind.
              </p>
              <div className="space-y-4">
                {projectManagerHighlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-linear-to-br from-orange-500 to-rose-500 rounded-lg flex items-center justify-center">
                      <RiCheckLine className="text-white" />
                    </div>
                    <span className="text-slate-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-40 -z-10"></div>
              <img
                alt="Project Manager"
                className="rounded-2xl shadow-xl w-full h-auto"
                src="/imgs/teams-sec.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
