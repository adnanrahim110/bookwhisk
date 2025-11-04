"use client";

import Button from "@/components/ui/Button";

const CTA = ({ title = "", text = "", btnText = "" }) => {
  return (
    <section className="py-16 md:py-20">
      <div className="container">
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-orange-200 via-amber-200 to-rose-200 rounded-3xl blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          <div className="absolute -inset-0.5 bg-linear-to-r from-orange-100 via-amber-100 to-rose-100 rounded-3xl blur-xl opacity-70" />

          <div className="relative bg-linear-to-br from-orange-50 via-white to-rose-50 p-12 md:p-10 rounded-3xl text-center shadow-2xl overflow-hidden border border-orange-100">
            <div className="absolute top-0 left-0 w-64 h-64 bg-linear-to-br from-orange-100 to-transparent rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-tl from-rose-100 to-transparent rounded-full blur-3xl opacity-40 translate-x-1/3 translate-y-1/3" />

            <div className="absolute top-10 right-10 w-20 h-20 border-2 border-orange-200 rounded-2xl rotate-12 hidden md:block animate-spin [animation-duration:10s]" />
            <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-rose-200 rounded-full hidden md:block" />

            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #000 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            <div className="relative z-10 mx-auto max-w-4xl">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent mb-2 leading-tight">
                {title || "Ready to Join Our Success Stories?"}
              </h3>

              <p className="text-lg md:text-xl text-slate-700 mb-8 leading-relaxed">
                {text || (
                  <>
                    Let's turn your manuscript into a published book that
                    readers will love. <br /> Your story deserves to be shared
                    with the world.
                  </>
                )}
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button href="/signup" variant="primary">
                  {btnText || "Start Your Publishing Journey"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
