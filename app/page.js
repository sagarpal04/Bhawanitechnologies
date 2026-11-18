import ServicesPreview from "@/components/sections/ServicesPreview";
import ImageShowcase from "@/components/sections/ImageShowcase";
import Brands from "@/components/sections/Brands";
import Customers from "@/components/sections/Customers";
import Awards from "@/components/sections/Awards";
import Testimonials from "@/components/sections/Testimonials";
import FindUs from "@/components/sections/FindUs";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Script from "next/script";

export const metadata = {
  title: "Best Waterproofing Service in Delhi NCR | Bhawani Technologies",
  description:
    "Bhawani Technologies — Delhi NCR's #1 waterproofing company. Terrace, basement, bathroom & water tank waterproofing, epoxy flooring, injection grouting. Free site inspection. 500+ projects. Call +91 76777 79418.",
  alternates: {
    canonical: "https://bhawanitechnologies01.com",
  },
  openGraph: {
    title: "Best Waterproofing Service in Delhi NCR | Bhawani Technologies",
    description:
      "Delhi NCR's #1 waterproofing company. 10+ years, 500+ projects. Free site inspection. Terrace, basement, epoxy flooring, grouting & more.",
    url: "https://bhawanitechnologies01.com",
  },
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
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <About />
      <ServicesPreview />
      <ImageShowcase />
      <Brands />
      <Customers />
      <Awards />
      <Testimonials />
      <FindUs />
    </>
  );
}
