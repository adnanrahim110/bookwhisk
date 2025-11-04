"use client";

import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import ScrollToTop from "../ui/ScrollToTop";
import Footer from "./Footer";
import Header from "./Header";

const AppShell = ({ children }) => {
  const pathname = usePathname();
  const notSignupPage = !pathname.includes("/signup");
  return (
    <>
      <ReactLenis root />
      {notSignupPage && <Header />}
      {children}
      {notSignupPage && <Footer />}
      <ScrollToTop />
    </>
  );
};

export default AppShell;
