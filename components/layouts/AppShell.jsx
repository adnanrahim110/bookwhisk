"use client";

import { ReactLenis } from "lenis/react";
import Footer from "./Footer";
import Header from "./Header";

const AppShell = ({ children }) => {
  return (
    <>
      <ReactLenis root />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppShell;
