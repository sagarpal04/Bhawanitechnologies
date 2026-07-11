import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Bhawani Technologies | Best Waterproofing & Construction Chemicals in Delhi NCR",
  description: "Bhawani Technologies Construction Chemicals Division (CCD) specializes in trading and application of waterproofing & industrial epoxy floorings.",
  keywords: [
    "waterproofing services Delhi NCR",
    "construction chemicals division",
    "Bhawani Technologies",
    "industrial epoxy flooring",
    "polyurethane flooring",
    "epoxy coatings",
    "joint sealants",
    "injection grouting"
  ],
  openGraph: {
    title: "Bhawani Technologies",
    description: "Expert waterproofing and industrial epoxy flooring solutions for residential, commercial, and industrial projects.",
    type: "website",
    locale: "en_IN",
  },
  verification: {
    google: "YZZijvWRlDrc4YUfwDYcBX9tqe3FZ-QcsQ10umIj3o0",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
