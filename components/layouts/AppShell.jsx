"use client";

import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";

import NavigationLoaderProvider from "@/components/ui/NavigationLoader";

import ScrollToTop from "../ui/ScrollToTop";
import Footer from "./Footer";
import Header from "./Header";

const AppShell = ({ children }) => {
  const pathname = usePathname();
  const notSignupPage = !pathname.includes("/signup");
  return (
    <NavigationLoaderProvider>
      <ReactLenis root />
      {notSignupPage && <Header />}
      {children}
      {notSignupPage && <Footer />}
      <ScrollToTop />
    </NavigationLoaderProvider>
  );
};

export default AppShell;
