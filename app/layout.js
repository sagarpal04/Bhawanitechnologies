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
  "@id": "https://www.bhawanitechnologies.in/#localbusiness",
  name: "Bhawani Technologies",
  description:
    "Bhawani Technologies is Delhi NCR's trusted waterproofing company specialising in terrace, basement, bathroom & water tank waterproofing, epoxy flooring, injection grouting, and construction chemicals.",
  url: "https://www.bhawanitechnologies.in",
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
    "https://share.google/F3RpB3J4RePxntDvf",
    "https://www.bhawanitechnologies.in",
    "https://www.instagram.com/bhawani_technologies01",
    "https://www.facebook.com/share/1LECb6Y3Fv/",
    "https://www.linkedin.com/in/bhawani-technologies-a47407423",
  ],
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL("https://www.bhawanitechnologies.in"),
  icons: {
    icon: [
      { url: "/BhawaniTechLogo.png", type: "image/png" },
    ],
    apple: "/BhawaniTechLogo.png",
    shortcut: "/BhawaniTechLogo.png",
  },
  title: {
    default: "Bhawani Technologies | Best Waterproofing Company in Delhi NCR",
    template: "%s | Bhawani Technologies",
  },
  description:
    "Bhawani Technologies is a trusted waterproofing company in Delhi NCR, offering professional terrace, bathroom, basement and roof waterproofing solutions for residential and commercial properties.",
  keywords: [
    "best waterproofing company in Delhi",
    "waterproofing contractors in Delhi NCR",
    "terrace waterproofing services",
    "roof leakage solution",
    "bathroom waterproofing",
    "basement waterproofing",
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
  authors: [{ name: "Bhawani Technologies", url: "https://www.bhawanitechnologies.in" }],
  creator: "Bhawani Technologies",
  publisher: "Bhawani Technologies",
  formatDetection: { telephone: true, email: true, address: true },
  alternates: {
    canonical: "https://www.bhawanitechnologies.in",
  },
  openGraph: {
    title: "Bhawani Technologies | Best Waterproofing Company in Delhi NCR",
    description:
      "Expert waterproofing and industrial epoxy flooring solutions for residential, commercial & industrial projects in Delhi NCR. Free site inspection. 500+ projects completed.",
    type: "website",
    locale: "en_IN",
    url: "https://www.bhawanitechnologies.in",
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
    google: "DqVJv8c2EVZd3D0sDS17_yRl8_AhouXWV_h3fPj3p1Y",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TDVFXLDJ');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TDVFXLDJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
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
