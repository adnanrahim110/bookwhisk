import { navigation_links, services } from "@/constants";
import { ae, d, logo, mc, pp, s, v } from "@/public";
import { cn } from "@/utils/cn";
import { BadgeCheck, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const companyLinks = navigation_links.filter(
  ({ name }) =>
    name !== "Services" && name !== "Home" && !name.startsWith("Child")
);

const footerLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
];

const AnchorLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "inline-block xl:text-base relative transition-all duration-300 ease-in-out",
        "before:absolute before:top-full before:left-0 before:h-px before:bg-primary before:transition-all before:duration-250 before:ease-linear",
        isActive
          ? "before:w-full text-primary"
          : "before:w-0 hover:before:w-full text-neutral-800 hover:text-primary"
      )}
    >
      {children}
    </Link>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pb-5">
      <div className="container">
        <div className="rounded-2xl border border-primary-200 overflow-hidden">
          <div className="px-10 py-14 bg-linear-to-r from-secondary-50 via-white to-white">
            <div className="flex flex-wrap justify-between items-start">
              <div className="w-full md:w-1/2 lg:w-1/4">
                <div className="flex flex-col gap-2">
                  <Link href="/">
                    <Image
                      width={400}
                      height={150}
                      src={logo}
                      alt="Bookwhisk"
                      className="h-16 w-auto"
                    />
                  </Link>
                  <p className="text-sm xl:text-[15px]">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Voluptatem est quo deserunt explicabo quibusdam voluptatum
                    repellat, beatae nam ratione! Totam.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[15%]">
                <h4 className="text-xl font-semibold text-slate-700 mb-3">
                  Company
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  {companyLinks.map((c) => (
                    <li key={c.name}>
                      <AnchorLink href={c.href}>{c.name}</AnchorLink>
                    </li>
                  ))}
                </ul>
                <h4 className="text-xl font-semibold text-slate-700 my-3">
                  legal
                </h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  {footerLinks.map((f) => (
                    <li key={f.label}>
                      <AnchorLink href={f.href}>{f.label}</AnchorLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full lg:w-[25%]">
                <div className="flex flex-wrap justify-between items-end">
                  <div className="w-1/2">
                    <h4 className="text-xl font-semibold text-slate-700 mb-3">
                      Services
                    </h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {services.slice(0, 5).map((c, idx) => (
                        <li key={idx}>
                          <AnchorLink href={c.href}>{c.title}</AnchorLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-1/2">
                    <ul className="space-y-2 text-sm text-slate-600">
                      {services.slice(6).map((c, idx) => (
                        <li key={idx}>
                          <AnchorLink href={c.href}>{c.title}</AnchorLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-[22%]">
                <div>
                  <h4 className="text-xl font-semibold text-slate-700 mb-3">
                    Get in Touch
                  </h4>
                  <div className=" text-slate-600 space-y-3">
                    <div className="flex items-start gap-1.5">
                      <div className="shrink-0">
                        <Mail size={16} className="mt-1 text-secondary" />
                      </div>
                      <div className="text-slate-800 font-medium">
                        info@bookwhisk.com
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <div className="shrink-0">
                        <Phone size={16} className="mt-1 text-secondary" />
                      </div>
                      <div className="text-slate-800 font-medium">
                        Support: +1 (561) 810–3364
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <div className="shrink-0">
                        <MapPin size={16} className="mt-1 text-secondary" />
                      </div>
                      <div>
                        <div className="text-slate-800 font-medium">
                          1500 Gateway Blvd STE 220
                        </div>
                        <div className="text-slate-500 text-xs">
                          Boynton Beach, FL 33426, USA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-t-primary-200 bg-linear-to-l from-primary-50 via-white to-white">
            <div className="p-10">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-2">
                    <div className="shrink-0 mt-0.5 text-secondary">
                      <BadgeCheck size={40} />
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-slate-900">
                        100% hassle-free
                      </div>
                      <div className="text-neutral-600">
                        7-day money-back guarantee
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <div className="shrink-0 text-secondary">
                      <ShieldCheck size={40} />
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-slate-900">
                        SSL Secure payment
                      </div>
                      <div className="text-neutral-600">
                        Your information is protected by 256-bit SSL encryption
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col md:items-end md:justify-center">
                  <div className="flex items-center gap-4">
                    {[d, mc, ae, v, pp, s].map((c, idx) => (
                      <Image
                        key={idx}
                        width={100}
                        height={80}
                        src={c}
                        alt=""
                        className={cn("w-auto", idx !== 5 ? "h-4" : "h-6")}
                      />
                    ))}
                  </div>

                  <div className="mt-4 text-sm text-neutral-500">
                    © 2025 Spines | All rights reserved.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
