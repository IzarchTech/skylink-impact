import "./globals.css";
import type { Metadata } from "next";

import Navbar from "@/app/(components)/Navbar";
import Spacer from "@/app/(components)/Spacer";
import Footer from "@/app/(components)/Footer";

export const metadata: Metadata = {
  title: "Skylink Impact",
  description:
    "Skylink impact focuses on business and individual development, growth and advancement",
  icons: [
    { rel: "icon", url: "/assets/favicon/favicon.ico" },
    { rel: "icon", sizes: "16x16", url: "/assets/favicon/favicon-16x16.png" },
    { rel: "icon", sizes: "32x32", url: "/assets/favicon/favicon-32x32.png" },
    { rel: "icon", url: "/assets/favicon/android-chrome-192x192.png" },
    { rel: "icon", url: "/assets/favicon/android-chrome-512x512.png" },
    { rel: "icon", url: "/assets/favicon/favicon.ico" },
    { rel: "apple-touch-icon", url: "/assets/favicon/apple-touch-icon.png" },
  ],
  manifest: "/assets/favicon/site.webmanifest",
  openGraph: {
    title: "Skylink Impact",
    description:
      "Skylink impact focuses on business and individual development, growth and advancement",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-300 select-none">
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
