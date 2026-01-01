import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarComp from "../components/NavbarComp";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Resumify",
  description: "Resume Builder",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavbarComp />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
