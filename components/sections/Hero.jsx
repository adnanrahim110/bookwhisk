import Button from "@/components/ui/Button";
import { cn } from "@/utils/cn";
import Image from "next/image";

const stats = [
  { value: "500+", label: "Books Published" },
  { value: "98%", label: "Happy Authors" },
  { value: "1-on-1", label: "Support" },
];

const Hero = () => {
  return (
    <section className="relative bg-white overflow-hidden pt-44 pb-32">
      <div className="absolute lg:w-2/5 lg:h-[500px] -top-5 -left-5 bg-linear-to-br from-primary-200 via-primary-50/50 to-white rounded-br-full blur-2xl" />
      <div className="absolute lg:w-2/5 lg:h-[500px] -top-5 -right-5 bg-linear-to-bl from-secondary-200 via-secondary-50/50 to-white rounded-bl-full blur-2xl" />
      <div className="container relative z-1">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900 leading-tight mb-2">
            Whisk Your Book To Life
          </h1>
          <p className="mx-auto max-w-4xl mb-4">
            A publishing experience crafted for authors who care about quality.
            From the first edit to the final sale, Bookwhisk blends precision
            and passion, all whisked together in one intuitive platform made for
            indie authors.
          </p>
          <div className="flex items-center justify-center">
            <Button
              href="#contact"
              variant="primary"
              className="bg-emerald-400 hover:bg-emerald-500 shadow-emerald-400/30"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <div className="relative w-full mt-20 flex justify-center items-center">
        <div className="relative z-1">
          <Image
            width={653}
            height={370}
            src="/imgs/laptop-1.avif"
            alt="Hero"
          />
        </div>
        <div className="absolute left-1/2 w-full -translate-x-1/2 flex items-center justify-between z-0">
          <div className="absolute top-0 left-0 h-full w-2/5 bg-linear-to-r from-white via-white/20 to-transparent z-8" />
          <div className="absolute top-0 right-0 h-full w-2/5 bg-linear-to-l from-white via-white/20 to-transparent z-8" />
          <div className="md:w-[570px] flex relative items-center flex-nowrap justify-center">
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className={cn(
                  "max-w-full -ml-[2%] overflow-hidden bg-white rounded-[2%_1%_1%_2%]",
                  idx === 0 && "w-[31%] z-1",
                  idx === 1 && "w-[35%] z-2",
                  idx === 2 && "w-[38%] z-3",
                  idx === 3 && "w-[43%] z-4"
                )}
              >
                <Image
                  width={250}
                  height={373}
                  className="object-cover object-top h-full block"
                  src={`/imgs/books/${idx + 1}.avif`}
                  alt={`Book ${idx + 1}`}
                />
              </div>
            ))}
          </div>
          <div className="md:w-[570px] flex relative items-center flex-nowrap justify-center">
            {[...Array(4)].map((_, idx) => (
              <div
                key={idx}
                className={cn(
                  "max-w-full -ml-[2%] overflow-hidden bg-white rounded-[2%_1%_1%_2%]",
                  idx === 0 && "w-[43%] z-4",
                  idx === 1 && "w-[38%] z-3",
                  idx === 2 && "w-[35%] z-2",
                  idx === 3 && "w-[31%] z-1"
                )}
              >
                <Image
                  width={250}
                  height={373}
                  className="object-cover object-top h-full block"
                  src={`/imgs/books/${idx + 5}.avif`}
                  alt={`Book ${idx + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
