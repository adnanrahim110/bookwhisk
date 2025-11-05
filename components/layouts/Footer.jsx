import { BadgeCheck, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import { LoaderLink } from "@/components/ui/NavigationLoader";
import { navigation_links, services } from "@/constants";
import { ae, d, logo, mc, pp, s, v } from "@/public";
import { cn } from "@/utils/cn";

const companyLinks = navigation_links.filter(
  ({ name }) =>
    name !== "Services" && name !== "Home" && !name.startsWith("Child")
);

const AnchorLink = ({ href, children, neutral = false }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const textColor = neutral
    ? "text-neutral-700 hover:text-black"
    : "text-neutral-800 hover:text-primary";

  return (
    <LoaderLink
      href={href}
      className={cn(
        "inline-block relative transition-all duration-300 ease-in-out",
        "before:absolute before:top-full before:left-0 before:h-px before:transition-all before:duration-250 before:ease-linear",
        neutral
          ? "before:bg-black text-sm font-medium"
          : "before:bg-primary text-sm xl:text-base",
        isActive
          ? "before:w-full text-primary before:bg-primary!"
          : `before:w-0 hover:before:w-full ${textColor}`
      )}
    >
      {children}
    </LoaderLink>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pb-5">
      <div className="container">
        <div className="rounded-2xl border border-primary-200 overflow-hidden">
          <div className="px-5 pt-12 pb-8 xl:px-10 xl:pb-14 xl:pt-20 bg-linear-to-r from-secondary-50 via-white to-white">
            <div className="flex flex-wrap justify-between items-start">
              <div className="w-full md:w-1/2 lg:w-[23%] xl:w-[21%] -mt-4 xl:-mt-7">
                <div className="flex flex-col gap-2">
                  <LoaderLink href="/">
                    <Image
                      width={400}
                      height={150}
                      src={logo}
                      alt="Bookwhisk"
                      className="w-full h-auto"
                    />
                  </LoaderLink>
                  <p className="text-[13px] xl:text-[15px]">
                    At BookWhisk, we make self-publishing simple, transparent,
                    and empowering. From writing and editing to design,
                    publishing, and global distribution, we help authors turn
                    their ideas into beautifully published books.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[12%]">
                <h4 className="text-xl font-semibold text-slate-700 mb-3">
                  Company
                </h4>
                <ul className="xl:space-y-1.5 text-slate-600">
                  {companyLinks.map((c) => (
                    <li key={c.name}>
                      <AnchorLink href={c.href}>{c.name}</AnchorLink>
                    </li>
                  ))}
                  <li>
                    <AnchorLink href="/how-it-works">How it works</AnchorLink>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-[38%] xl:w-[35%]">
                <div className="flex flex-wrap justify-between items-end">
                  <div className="w-2/5">
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
                  <div className="w-3/5">
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
                    <div className="flex items-start gap-1.5 text-sm xl:text-base">
                      <div className="shrink-0">
                        <Mail size={16} className="mt-1 text-secondary" />
                      </div>
                      <div className="text-slate-800 font-medium">
                        info@bookwhisk.com
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5 text-sm xl:text-base">
                      <div className="shrink-0">
                        <Phone size={16} className="mt-1 text-secondary" />
                      </div>
                      <div className="text-slate-800 font-medium">
                        Support: +1 (407) 966-9398
                      </div>
                    </div>
                    <div className="flex items-start gap-1.5 text-sm xl:text-base">
                      <div className="shrink-0">
                        <MapPin size={16} className="mt-1 text-secondary" />
                      </div>
                      <div>
                        <div className="text-slate-800 font-medium">
                          4700 Millenia Blvd
                        </div>
                        <div className="text-slate-500 text-xs">
                          Orlando, FL 32839, USA
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-t-primary-200 bg-linear-to-l from-primary-50 via-white to-white">
            <div className="px-5 py-7 xl:p-10">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start lg:w-[65%]">
                  <div className="flex items-start gap-2">
                    <div className="shrink-0 text-secondary">
                      <ShieldCheck size={40} />
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-slate-900">
                        SSL Secure payment
                      </div>
                      <div className="text-neutral-600 text-sm">
                        Your information is protected by 256-bit SSL encryption
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="shrink-0 text-secondary">
                      <BadgeCheck size={40} />
                    </div>
                    <div>
                      <div className="text-xl font-semibold text-slate-900">
                        100% hassle-free
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:w-[35%] flex flex-col md:items-end md:justify-center">
                  <div className="flex items-center gap-4">
                    {[mc, v, pp, s].map((c, idx) => (
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
                    © {new Date().getFullYear()} BookWhisk | All rights
                    reserved.
                  </div>
                  <div className="flex items-center justify-end">
                    <AnchorLink href="/privacy-policy" neutral>
                      Privacy Policy
                    </AnchorLink>
                    <div className="w-px h-3 bg-radial from-neutral-600 to-transparent mx-2" />
                    <AnchorLink href="/terms-of-service" neutral>
                      Terms of Service
                    </AnchorLink>
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
