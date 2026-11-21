import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Script from "next/script";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

// Organization schema — tells Google's Knowledge Graph the AUTHORITATIVE identity of this brand
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.bhawanitechnologies.in/#organization",
  name: "Bhawani Technologies",
  alternateName: "Bhawani Technologies Waterproofing",
  legalName: "Bhawani Technologies",
  description:
    "Bhawani Technologies — Delhi NCR's professional waterproofing company specialising in terrace, basement, bathroom & water tank waterproofing, epoxy flooring, injection grouting, and construction chemicals. Office at C-288 New Ashok Nagar, New Delhi.",
  url: "https://www.bhawanitechnologies.in",
  logo: {
    "@type": "ImageObject",
    url: "https://www.bhawanitechnologies.in/BhawaniTechLogo.png",
    width: 200,
    height: 200,
  },
  image: "https://www.bhawanitechnologies.in/BhawaniTechLogo.png",
  telephone: "+917677779418",
  email: "bhawanitechnologies01@gmail.com",
  foundingDate: "2015",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 50 },
  address: {
    "@type": "PostalAddress",
    streetAddress: "C-288, 3rd Floor, New Ashok Nagar",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    postalCode: "110096",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+917677779418",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["Hindi", "English"],
      contactOption: "TollFree",
    },
  ],
  sameAs: [
    "https://www.instagram.com/bhawani_technologies01",
    "https://www.facebook.com/share/1LECb6Y3Fv/",
    "https://www.linkedin.com/in/bhawani-technologies-a47407423",
    "https://share.google/F3RpB3J4RePxntDvf",
  ],
};

// WebSite schema — enables Google Sitelinks Search Box & establishes canonical website
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.bhawanitechnologies.in/#website",
  name: "Bhawani Technologies",
  url: "https://www.bhawanitechnologies.in",
  description: "Best waterproofing company in Delhi NCR. Terrace, basement, bathroom & water tank waterproofing, epoxy flooring, injection grouting.",
  publisher: { "@id": "https://www.bhawanitechnologies.in/#organization" },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.bhawanitechnologies.in/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": "https://www.bhawanitechnologies.in/#localbusiness",
  name: "Bhawani Technologies",
  alternateName: "Bhawani Technologies Waterproofing Delhi",
  description:
    "Bhawani Technologies is Delhi NCR's trusted waterproofing company specialising in terrace, basement, bathroom & water tank waterproofing, epoxy flooring, injection grouting, and construction chemicals. Located at C-288 New Ashok Nagar, New Delhi.",
  url: "https://www.bhawanitechnologies.in",
  telephone: "+917677779418",
  email: "bhawanitechnologies01@gmail.com",
  image: "https://www.bhawanitechnologies.in/BhawaniTechLogo.png",
  logo: "https://www.bhawanitechnologies.in/BhawaniTechLogo.png",
  parentOrganization: { "@id": "https://www.bhawanitechnologies.in/#organization" },
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
  hasMap: "https://share.google/F3RpB3J4RePxntDvf",
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
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Terrace Waterproofing", url: "https://www.bhawanitechnologies.in/services/terrace-waterproofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Basement Waterproofing", url: "https://www.bhawanitechnologies.in/services/basement-waterproofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Waterproofing", url: "https://www.bhawanitechnologies.in/services/bathroom-waterproofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Roof Waterproofing", url: "https://www.bhawanitechnologies.in/services/roof-waterproofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Water Tank Waterproofing", url: "https://www.bhawanitechnologies.in/services/water-tank-waterproofing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Epoxy Flooring", url: "https://www.bhawanitechnologies.in/services/epoxy-flooring" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial Polyurethane Flooring" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PU Injection Grouting" } },
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
    "https://www.instagram.com/bhawani_technologies01",
    "https://www.facebook.com/share/1LECb6Y3Fv/",
    "https://www.linkedin.com/in/bhawani-technologies-a47407423",
    "https://share.google/F3RpB3J4RePxntDvf",
  ],
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL("https://www.bhawanitechnologies.in"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  title: {
    default: "Bhawani Technologies | Best Waterproofing Company in Delhi NCR",
    template: "%s | Bhawani Technologies",
  },
  description:
    "Bhawani Technologies is a trusted waterproofing company in Delhi NCR, offering professional terrace, bathroom, basement and roof waterproofing solutions for residential and commercial properties.",
  keywords: [
    "roof waterproofing",
    "terrace waterproofing",
    "waterproof roof coating",
    "waterproof roof paint",
    "roof leakage solution",
    "dr fixit roofseal",
    "dr fixit roof waterproofing",
    "asian paints roof waterproofing",
    "roof waterproofing cost per sq ft",
    "concrete roof waterproofing",
    "waterproof sheet for roof",
    "waterproof chemical for roof",
    "heat proof paint for roof",
    "best waterproofing company in Delhi",
    "waterproofing contractors in Delhi NCR",
    "terrace waterproofing services",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-48x48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="icon" href="/icon-192x192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <link rel="manifest" href="/manifest.json" />
        {/* JSON-LD Structured Data — in <head> so crawlers see it on first render */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {/* Ahrefs Analytics */}
        <Script
          id="ahrefs-analytics"
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="ffOJUQse4Fu103heZCGB/A"
          strategy="afterInteractive"
        />
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
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
