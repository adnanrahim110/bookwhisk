"use client";

import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

import NavigationLoaderProvider from "@/components/ui/NavigationLoader";

import ScrollToTop from "../ui/ScrollToTop";
import Footer from "./Footer";
import Header from "./Header";

const AppShell = ({ children }) => {
  const pathname = usePathname();
  const notSignupPage =
    !pathname.includes("/signup") && !pathname.includes("/thankyou");
  return (
    <NavigationLoaderProvider>
      <ReactLenis root />
      <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
      {notSignupPage && <Header />}
      {children}
      {notSignupPage && <Footer />}
      <ScrollToTop />
    </NavigationLoaderProvider>
  );
};

export default AppShell;
