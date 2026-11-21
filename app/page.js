import ServicesPreview from "@/components/sections/ServicesPreview";
import RoofWaterproofingGuide from "@/components/sections/RoofWaterproofingGuide";
import ImageShowcase from "@/components/sections/ImageShowcase";
import Brands from "@/components/sections/Brands";
import Customers from "@/components/sections/Customers";
import Awards from "@/components/sections/Awards";
import Testimonials from "@/components/sections/Testimonials";
import FindUs from "@/components/sections/FindUs";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";


export const metadata = {
  title: "Roof Waterproofing & Best Waterproofing Services in Delhi NCR | Bhawani Technologies",
  description:
    "Bhawani Technologies — Delhi NCR's #1 roof waterproofing and terrace waterproofing company. Stop concrete roof leaks, damp walls & seepage. 500+ projects. Free inspection: +91 76777 79418.",
  alternates: {
    canonical: "https://www.bhawanitechnologies.in",
  },
  openGraph: {
    title: "Roof Waterproofing & Best Waterproofing Services in Delhi NCR | Bhawani Technologies",
    description:
      "Delhi NCR's #1 roof waterproofing and terrace waterproofing company. 10+ years, 500+ projects. Free site inspection. Roof, terrace, basement & epoxy flooring.",
    url: "https://www.bhawanitechnologies.in",
  },
};

const homeLocalBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": "https://www.bhawanitechnologies.in/#localbusiness",
  name: "Bhawani Technologies",
  alternateName: "Bhawani Technologies Roof Waterproofing Delhi",
  description: "Delhi NCR's trusted roof waterproofing and structural waterproofing contractor. Services include APP membrane laying, PU coatings, cool roof paint, crack repair, and injection grouting.",
  url: "https://www.bhawanitechnologies.in",
  telephone: "+917677779418",
  email: "bhawanitechnologies01@gmail.com",
  image: "https://www.bhawanitechnologies.in/BhawaniTechLogo.png",
  logo: "https://www.bhawanitechnologies.in/BhawaniTechLogo.png",
  priceRange: "₹₹",
  currenciesAccepted: "INR",
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
  areaServed: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
};

// SiteLinksSearchBox + BreadcrumbList — both trigger Google Sitelinks under branded search results
const sitelinksSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.bhawanitechnologies.in/#website",
  url: "https://www.bhawanitechnologies.in",
  name: "Bhawani Technologies",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.bhawanitechnologies.in/?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.bhawanitechnologies.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://www.bhawanitechnologies.in/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "About",
      item: "https://www.bhawanitechnologies.in/about",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Contact",
      item: "https://www.bhawanitechnologies.in/contact",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What waterproofing services does Bhawani Technologies offer in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bhawani Technologies offers terrace waterproofing, basement waterproofing, bathroom waterproofing, water tank waterproofing, PU injection grouting, epoxy flooring, crack repair, and construction chemical supply across Delhi NCR.",
      },
    },
    {
      "@type": "Question",
      name: "How much does waterproofing cost in Delhi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Waterproofing costs in Delhi depend on the area size, type of treatment, and surface condition. Contact Bhawani Technologies at +91 76777 79418 for a free site inspection and accurate quote.",
      },
    },
    {
      "@type": "Question",
      name: "Does Bhawani Technologies provide free site inspection?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Bhawani Technologies provides free site inspections across Delhi NCR. Our experts visit your property, identify the source of leakage, and recommend the best waterproofing solution.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas does Bhawani Technologies serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bhawani Technologies serves Delhi, Noida, Gurugram, Faridabad, Ghaziabad, and surrounding NCR areas. Our office is located at C-288, New Ashok Nagar, New Delhi – 110096.",
      },
    },
    {
      "@type": "Question",
      name: "How long does waterproofing last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "With premium materials and professional application, Bhawani Technologies' waterproofing solutions typically last 7–15 years depending on the system used. We use industry-grade products for long-lasting results.",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeLocalBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sitelinksSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <About />
      <ServicesPreview />
      <RoofWaterproofingGuide />
      <ImageShowcase />
      <Brands />
      <Customers />
      <Awards />
      <Testimonials />
      <FindUs />
    </>
  );
}
