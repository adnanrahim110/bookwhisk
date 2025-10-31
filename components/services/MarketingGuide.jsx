import { MotionInView } from "@/utils/motion";
import React from "react";

const steps = [
  {
    title: "Prepare Your Marketing Plan",
    body: "Define your target audience, goals, and budget. Identify key platforms and strategies that align with your <a class='text-primary underline'>book genre</a> and audience preferences to ensure a focused and effective campaign.",
  },
  {
    title: "Create a Professional Author Platform",
    body: "Build a strong online presence with an author website and active social media accounts. Share engaging content like behind-the-scenes insights, book updates, and interactive posts to connect with readers.",
  },
  {
    title: "Optimize Your Book Listing",
    body: "Ensure your book’s online listing has an <a class='text-primary underline'>eye-catching cover</a>, compelling description, and relevant keywords. Tailor listings on platforms like Amazon to improve search visibility.",
  },
  {
    title: "Design Marketing Materials",
    body: "Create visually appealing promotional assets, including social media posts, email banners, and digital ads. Use templates or professional design tools to ensure your materials look polished and professional.",
  },
  {
    title: "Launch Paid Advertising Campaigns",
    body: "Use platforms like Amazon, Google Ads, and Meta to run targeted ad campaigns. Leverage data-driven algorithms to reach potential readers and optimize campaigns for maximum ROI.",
  },
  {
    title: "Use Email Marketing",
    body: "Build an email list of subscribers and send newsletters with book updates, exclusive offers, and engaging content. Include clear calls-to-action to encourage book purchases or reviews.",
  },
  {
    title: "Engage with Readers",
    body: "Interact with your audience on social media, respond to reviews, and participate in book clubs or forums. Hosting Q&A sessions or live readings can help build stronger connections with readers.",
  },
  {
    title: "Leverage Influencers and Reviews",
    body: "Collaborate with book bloggers, influencers, and reviewers in your genre to gain credibility and reach. Positive reviews can significantly boost your book’s visibility and reputation.",
  },
  {
    title: "Track Campaign Performance",
    body: "Monitor metrics like impressions, clicks, and sales to assess the effectiveness of your marketing efforts. Adjust strategies based on data to continuously improve results.",
  },
  {
    title: "Launch Promotions and Events",
    body: "Host limited-time discounts, giveaways, or book launch events to create buzz and attract readers. Use these opportunities to engage with your audience and build long-term loyalty.",
  },
];

const MarketingGuide = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-2 block">
            Step-by-Step Guide
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How to Market Your Book Effectively
          </h2>
          <p className="text-base md:text-lg text-slate-600">
            Follow these 10 essential steps to maximize your book's reach,
            connect with your ideal audience, and drive sales.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2 lg:sticky lg:top-40">
            <MotionInView>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200/80">
                <img
                  src="/imgs/books/1.avif"
                  alt="Book Marketing Guide"
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 md:p-8">
                  <div className="text-sm font-semibold text-primary mb-2">
                    Free Short Guide
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 leading-snug">
                    Self-Publishing Success
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">
                    A concise walkthrough of the essential steps you need to
                    market and launch your book with impact.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-primary text-white shadow-md shadow-primary/30 font-semibold text-center transition-all hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30"
                    >
                      Start Marketing
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full border border-primary text-primary bg-white/60 font-semibold text-center transition-all hover:bg-primary/10"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </MotionInView>
          </div>

          <div className="lg:col-span-3 order-first lg:order-last">
            <div className="relative">
              <div
                className="absolute left-5 top-5 bottom-5 w-0.5 bg-slate-200"
                aria-hidden="true"
              />

              <div className="space-y-6">
                {steps.map((s, i) => (
                  <MotionInView
                    key={i}
                    className="relative flex items-start gap-4"
                  >
                    <div className="relative z-10 shrink-0">
                      <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold shadow-md ring-4 ring-slate-50">
                        {i + 1}
                      </div>
                    </div>

                    <div className="flex-1 bg-white rounded-xl shadow-lg border border-slate-200/80 overflow-hidden transition-all hover:shadow-xl hover:border-primary/30">
                      <div className="p-5 md:p-6">
                        <h3 className="text-base md:text-lg font-semibold text-slate-900">
                          {s.title}
                        </h3>
                        <p
                          className="mt-2 text-sm text-slate-700 leading-relaxed"
                          dangerouslySetInnerHTML={{ __html: s.body }}
                        />
                      </div>
                    </div>
                  </MotionInView>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingGuide;
