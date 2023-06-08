import React from "react";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Footer from "../components/Footer";
import Navbar from "@/components/NavBar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
}
