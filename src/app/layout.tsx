import "./globals.css";
import type { Metadata } from "next";

import Navbar from "./components/Navbar";
import Spacer from "./components/Spacer";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Skylink Impact",
  description:
    "Skylink impact focuses on business and individual development, growth and advancement",
  openGraph: {
    title: "Skylink Impact",
    description: "Skylink impact focuses on business and individual development, growth and advancement",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-300">
        <main className="flex min-h-screen flex-col">
          <Navbar />
          {children}
          <Spacer />
          <Footer />
        </main>
      </body>
    </html>
  );
}
