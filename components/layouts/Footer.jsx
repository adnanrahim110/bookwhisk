import { navigation_links } from "@/constants";
import {
  RiBookOpenLine,
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiMailLine,
  RiPhoneLine,
  RiTimeLine,
  RiTwitterXFill,
} from "react-icons/ri";

const socialLinks = [
  { href: "#", label: "Facebook", icon: RiFacebookFill },
  { href: "#", label: "Twitter", icon: RiTwitterXFill },
  { href: "#", label: "Instagram", icon: RiInstagramFill },
  { href: "#", label: "LinkedIn", icon: RiLinkedinFill },
];

const serviceLinks =
  navigation_links
    .find(({ name }) => name === "Services")
    ?.children?.slice(0, 5) ?? [];

const companyLinks = navigation_links.filter(({ name }) => name !== "Services");

const contactItems = [
  {
    label: "Call Us",
    value: "(123) 456-7890",
    href: "tel:+1234567890",
    icon: RiPhoneLine,
  },
  {
    label: "Email Us",
    value: "hello@bookwhisk.com",
    href: "mailto:hello@bookwhisk.com",
    icon: RiMailLine,
  },
  {
    label: "Business Hours",
    value: "Mon-Fri: 9AM - 6PM EST",
    icon: RiTimeLine,
  },
];

const footerLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
];

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-linear-to-br from-orange-500 to-rose-500 rounded-xl flex items-center justify-center">
                <RiBookOpenLine className="text-white text-xl" />
              </div>
              <span className="text-2xl font-serif font-bold">Bookwhisk</span>
            </div>
            <p className="text-slate-300 leading-relaxed mb-6">
              Your trusted partner in self-publishing. We help authors bring
              their stories to life with professional, personalized service.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-slate-700 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map(({ href, name }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-slate-300 hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map(({ href, name }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-slate-300 hover:text-orange-400 transition-colors cursor-pointer"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              {contactItems.map(({ label, value, href, icon: Icon }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 text-slate-300"
                >
                  <Icon className="text-orange-400 mt-1" />
                  <div>
                    <p className="text-sm text-slate-400 mb-1">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="hover:text-orange-400 transition-colors cursor-pointer"
                      >
                        {value}
                      </a>
                    ) : (
                      <p>{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; 2024 Bookwhisk. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              {footerLinks.map(({ href, label, external }) => (
                <a
                  key={label}
                  href={href}
                  {...(external && {
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  className="text-slate-400 hover:text-orange-400 transition-colors cursor-pointer"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
