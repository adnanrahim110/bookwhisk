import { LoaderLink } from "@/components/ui/NavigationLoader";

const CallToAction = () => {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-orange-500 via-orange-400 to-rose-500 px-10 py-12 shadow-[0_40px_90px_rgba(249,115,22,0.32)]">
        <div className="flex flex-col items-start justify-between gap-6 text-white lg:flex-row lg:items-center">
          <div>
            <span className="rounded-full bg-white/20 px-4 py-1 text-sm font-semibold uppercase tracking-wider">
              Ready To Join?
            </span>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight">
              Ready to Join Our Success Stories?
            </h2>
            <p className="mt-3 max-w-xl text-base text-orange-100">
              Submit your manuscript and unlock a personalized publishing strategy session with our experts.
            </p>
          </div>
          <LoaderLink
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-base font-semibold text-orange-600 shadow-[0_12px_24px_rgba(255,255,255,0.32)] transition-transform hover:-translate-y-0.5"
          >
            Start Your Publishing Journey
          </LoaderLink>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
