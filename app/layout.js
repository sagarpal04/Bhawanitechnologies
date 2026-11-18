import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://bhawanitechnologies01.com/#localbusiness",
  name: "Bhawani Technologies",
  description:
    "Bhawani Technologies is Delhi NCR's trusted waterproofing company specialising in terrace, basement, bathroom & water tank waterproofing, epoxy flooring, injection grouting, and construction chemicals.",
  url: "https://bhawanitechnologies01.com",
  telephone: "+917677779418",
  email: "bhawanitechnologies01@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "C-288, 3rd Floor, New Ashok Nagar",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110096",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.6066,
    longitude: 77.3194,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  priceRange: "₹₹",
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, Bank Transfer, UPI",
  areaServed: [
    { "@type": "City", name: "Delhi" },
    { "@type": "City", name: "Noida" },
    { "@type": "City", name: "Gurugram" },
    { "@type": "City", name: "Faridabad" },
    { "@type": "City", name: "Ghaziabad" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Waterproofing & Construction Chemical Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Terrace Waterproofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Basement Waterproofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Waterproofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Tank Waterproofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PU Injection Grouting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Epoxy Flooring" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial Polyurethane Flooring" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Crack Repair & Sealing" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "1",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Satisfied Customer" },
      reviewBody: "Best waterproofing service in Delhi. Professional team, quality materials, timely completion.",
    },
  ],
  sameAs: [
    "https://maps.google.com/?q=C-288,+New+Ashok+Nagar,+Delhi",
  ],
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL("https://bhawanitechnologies01.com"),
  title: {
    default: "Bhawani Technologies | #1 Waterproofing Service in Delhi NCR",
    template: "%s | Bhawani Technologies",
  },
  description:
    "Bhawani Technologies — Delhi's trusted waterproofing experts. Terrace, basement, bathroom & water tank waterproofing, epoxy flooring, injection grouting & more. Free site inspection. Call +91 76777 79418.",
  keywords: [
    "waterproofing service Delhi",
    "waterproofing company Delhi NCR",
    "terrace waterproofing Delhi",
    "basement waterproofing Delhi",
    "bathroom waterproofing Delhi",
    "water tank waterproofing",
    "PU injection grouting Delhi",
    "epoxy flooring Delhi",
    "polyurethane flooring Delhi",
    "construction chemicals Delhi",
    "crack repair Delhi",
    "leakage treatment Delhi",
    "Bhawani Technologies",
    "New Ashok Nagar waterproofing",
    "best waterproofing company Delhi",
    "industrial epoxy coating",
    "APP membrane waterproofing",
    "EPDM membrane Delhi",
  ],
  authors: [{ name: "Bhawani Technologies", url: "https://bhawanitechnologies01.com" }],
  creator: "Bhawani Technologies",
  publisher: "Bhawani Technologies",
  formatDetection: { telephone: true, email: true, address: true },
  alternates: {
    canonical: "https://bhawanitechnologies01.com",
  },
  openGraph: {
    title: "Bhawani Technologies | #1 Waterproofing Service in Delhi NCR",
    description:
      "Expert waterproofing and industrial epoxy flooring solutions for residential, commercial & industrial projects in Delhi NCR. Free site inspection. 500+ projects completed.",
    type: "website",
    locale: "en_IN",
    url: "https://bhawanitechnologies01.com",
    siteName: "Bhawani Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bhawani Technologies | Waterproofing Experts in Delhi NCR",
    description:
      "Delhi's trusted waterproofing & epoxy flooring specialists. 10+ years, 500+ projects. Free site inspection. Call +91 76777 79418.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "YZZijvWRlDrc4YUfwDYcBX9tqe3FZ-QcsQ10umIj3o0",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
