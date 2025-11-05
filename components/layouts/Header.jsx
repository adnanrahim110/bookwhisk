"use client";

import { LoaderLink } from "@/components/ui/NavigationLoader";
import { navigation_links } from "@/constants";
import { logo } from "@/public";
import { cn } from "@/utils/cn";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const navItems = navigation_links;
  const isDark = pathname === "/childrens-book-publishing";
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const currentScrollY = window.scrollY ?? 0;
      setIsAtTop(currentScrollY < 50);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleClickOutside = (event) => {
      if (!isMenuOpen) return;

      const target = event.target;
      if (!(target instanceof Node)) return;

      if (menuRef.current?.contains(target)) return;
      if (toggleButtonRef.current?.contains(target)) return;

      setIsMenuOpen(false);
    };

    window.addEventListener("pointerdown", handleClickOutside);
    return () => window.removeEventListener("pointerdown", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className="fixed w-full top-4 lg:top-7 z-50">
      <div className="container">
        <div
          className={cn(
            "flex flex-col border gap-3 px-4 py-3 rounded-2xl shadow-[0_0_30px_10px] shadow-black/7 transition-all duration-250 ease-in-out md:flex-row md:items-center md:gap-6",
            isDark && isAtTop
              ? "bg-black/35 backdrop-blur-xs border-white/20"
              : " bg-white border-transparent"
          )}
        >
          <div className="flex w-full items-center justify-between gap-4 md:gap-6">
            <LoaderLink href="/" className="flex items-center gap-3">
              <Image
                width={400}
                height={80}
                src={logo}
                alt="Bookwhisk"
                className="h-10 2lg:h-14 w-auto"
              />
            </LoaderLink>
            <div className="flex lg:w-full justify-between items-center gap-3 md:gap-5">
              <nav className="hidden items-center gap-10 md:flex w-full justify-center">
                {navItems.slice(0, -1).map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <LoaderLink
                      key={item.name}
                      href={item.href}
                      className={cn(
                        "text-base font-medium inline-block relative",
                        isActive
                          ? "text-primary"
                          : isDark && isAtTop
                          ? "text-neutral-100 hover:text-white"
                          : "text-slate-700 hover:text-black",
                        "before:absolute before:top-full before:left-0 before:h-0.5 before:transition-all before:duration-250 before:ease-linear",
                        isActive
                          ? "before:w-full before:bg-primary"
                          : isDark && isAtTop
                          ? "before:w-0 before:bg-white hover:before:w-full"
                          : "before:w-0 before:bg-black hover:before:w-full"
                      )}
                    >
                      {item.name}
                    </LoaderLink>
                  );
                })}
              </nav>
              <LoaderLink
                href="/signup"
                className="hidden items-center justify-center rounded-lg bg-orange-500 px-6 py-2.5 text-base font-semibold text-white shadow-[0_3px_10px_rgba(249,115,22,0.3)] transition-colors hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500 md:inline-flex"
              >
                Sign-Up Now
              </LoaderLink>
              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                className={cn(
                  "inline-flex items-center justify-center rounded-lg border px-3 py-2 text-slate-700 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 md:hidden",
                  isDark && isAtTop
                    ? "border-white/30 bg-white/10 text-white hover:bg-white/20"
                    : "border-slate-200 bg-white hover:bg-slate-100"
                )}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-navigation"
                aria-label="Toggle navigation menu"
                ref={toggleButtonRef}
              >
                {isMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
          <AnimatePresence initial={false}>
            {isMenuOpen && (
              <motion.div
                key="mobile-navigation"
                initial="collapsed"
                animate="open"
                exit="collapsed"
                variants={{
                  open: { opacity: 1, height: "auto" },
                  collapsed: { opacity: 0, height: 0 },
                }}
                transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
                id="mobile-navigation"
                className="grid overflow-hidden md:hidden"
                ref={menuRef}
              >
                <div className="flex flex-col gap-4 overflow-hidden border-t border-slate-200 pt-3">
                  <nav className="flex flex-col gap-3">
                    {navItems.map((item) => {
                      const isActive = pathname === item.href;
                      return (
                        <LoaderLink
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "text-base font-medium",
                            isActive
                              ? "text-primary"
                              : "text-slate-700 hover:text-primary"
                          )}
                        >
                          {item.name}
                        </LoaderLink>
                      );
                    })}
                  </nav>
                  <LoaderLink
                    href="/signup"
                    className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-2.5 text-base font-semibold text-white shadow-[0_3px_10px_rgba(249,115,22,0.3)] transition-colors hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                  >
                    Sign-Up Now
                  </LoaderLink>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
};

export default Header;
