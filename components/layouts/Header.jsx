"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigation_links } from "@/constants";
import { logo } from "@/public";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useEffect, useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const navItems = navigation_links;
  const isDark = pathname === "/childrens-book-publishing";
  const [isAtTop, setIsAtTop] = useState(true);

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

  return (
    <header className="fixed w-full top-7 z-50">
      <div className="container">
        <div
          className={cn(
            "flex items-center justify-between border gap-6 px-4 py-3 rounded-2xl shadow-[0_0_30px_10px] shadow-black/7 transition-all duration-250 ease-in-out",
            isDark && isAtTop
              ? "bg-black/35 backdrop-blur-xs border-white/20"
              : " bg-white border-transparent"
          )}
        >
          <Link href="/" className="flex items-center gap-3">
            <Image
              width={400}
              height={80}
              src={logo}
              alt="Bookwhisk"
              className="h-14 w-auto"
            />
          </Link>
          <nav className="hidden items-center gap-10 md:flex">
            {navItems.slice(0, -1).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
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
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-5 justify-end">
            {navItems.slice(-1).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
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
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-orange-500 px-6 py-2.5 text-base font-semibold text-white shadow-[0_3px_10px_rgba(249,115,22,0.3)] transition-colors hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
              onClick={() => setOpenDropdown(null)}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
