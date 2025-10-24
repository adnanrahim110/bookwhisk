"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import { navigation_links } from "@/constants";
import { cn } from "@/utils/cn";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();
  const headerRef = useRef(null);

  const navItems = navigation_links;

  const handleOutsideClick = useCallback((event) => {
    if (!headerRef.current) return;

    if (!headerRef.current.contains(event.target)) {
      setOpenDropdown(null);
    }
  }, []);

  useEffect(() => {
    if (openDropdown) {
      document.addEventListener("mousedown", handleOutsideClick);
      document.addEventListener("touchstart", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [handleOutsideClick, openDropdown]);

  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-linear-to-br from-orange-500 to-orange-600 text-white shadow-[0_10px_25px_rgba(249,115,22,0.35)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              className="h-6 w-6"
            >
              <path
                d="M4 6.5A1.5 1.5 0 0 1 5.5 5H11v14H6a2 2 0 0 1-2-2V6.5ZM20 6.5A1.5 1.5 0 0 0 18.5 5H13v14h5a2 2 0 0 0 2-2V6.5ZM11 10H5M13 10h6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-2xl font-semibold tracking-tight text-slate-900">
            Bookwhisk
          </span>
        </Link>
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => {
            const hasChildren = item.children?.length;
            const isOpen = openDropdown === item.name;
            const sharedClasses =
              "text-base font-medium text-slate-700 transition-colors hover:text-orange-500";

            if (item.href && !hasChildren) {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(sharedClasses)}
                  onClick={() => setOpenDropdown(null)}
                >
                  {item.name}
                </Link>
              );
            }

            return (
              <div key={item.name} className="relative">
                <button
                  type="button"
                  className={cn(
                    sharedClasses,
                    "inline-flex items-center gap-1 outline-none focus-visible:text-orange-500"
                  )}
                  onClick={() =>
                    setOpenDropdown((prev) =>
                      prev === item.name ? null : item.name
                    )
                  }
                  aria-haspopup="menu"
                  aria-expanded={isOpen}
                >
                  {item.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isOpen ? "rotate-180" : "rotate-0"
                    )}
                  >
                    <path
                      d="m6 9 6 6 6-6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {isOpen && (
                  <div className="absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 rounded-2xl border border-orange-100 bg-white p-3 shadow-[0_18px_45px_rgba(15,23,42,0.12)]">
                    <div className="flex flex-col gap-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="rounded-xl px-4 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-orange-50 hover:text-orange-500 whitespace-nowrap"
                          onClick={() => setOpenDropdown(null)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-2.5 text-base font-semibold text-white shadow-[0_12px_30px_rgba(249,115,22,0.3)] transition-colors hover:bg-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
          onClick={() => setOpenDropdown(null)}
        >
          Get Started
        </Link>
      </div>
      <div className="h-px w-full bg-linear-to-r from-transparent via-orange-200 to-transparent" />
    </header>
  );
};

export default Header;
