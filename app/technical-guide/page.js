import RoofWaterproofingGuide from "@/components/sections/RoofWaterproofingGuide";
import Link from "next/link";
import { ArrowLeft, Phone, Calendar, ShieldCheck } from "lucide-react";

export const metadata = {
    title: "Technical Engineering Guide: Comprehensive Roof Waterproofing & Concrete Slab Protection | Bhawani Technologies",
    description:
        "Learn how professional roof waterproofing systems prevent water intrusion, eliminate interior ceiling water stains, and protect building foundations across Delhi NCR's severe weather cycles.",
    keywords: [
        "technical engineering guide roof waterproofing",
        "concrete slab protection",
        "roof waterproofing engineering",
        "ponding water erosion",
        "thermal expansion concrete roof",
        "APP bitumen membrane technical guide",
        "polyurethane liquid membrane Delhi NCR",
        "ASTM D4541 adhesion pull test",
        "ASTM D7091 coating thickness",
        "commercial roof waterproofing standards"
    ],
    alternates: {
        canonical: "https://www.bhawanitechnologies.in/technical-guide",
    },
    openGraph: {
        title: "Technical Engineering Guide: Roof Waterproofing & Concrete Slab Protection",
        description:
            "In-depth engineering guide on substrate diagnostics, membrane performance metrics, case studies, testing standards, and failure troubleshooting by Bhawani Technologies.",
        url: "https://www.bhawanitechnologies.in/technical-guide",
        type: "article",
    },
};

const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "Technical Engineering Guide: Comprehensive Roof Waterproofing & Concrete Slab Protection",
    description: "Engineering and diagnostic guide covering flat and low-slope roof protection, substrate diagnostics, membrane selection, ASTM testing protocols, case studies, and failure modes.",
    author: {
        "@type": "Organization",
        name: "Bhawani Technologies",
        url: "https://www.bhawanitechnologies.in"
    },
    publisher: {
        "@type": "Organization",
        name: "Bhawani Technologies",
        url: "https://www.bhawanitechnologies.in",
        logo: {
            "@type": "ImageObject",
            url: "https://www.bhawanitechnologies.in/BhawaniTechLogo.png"
        }
    },
    mainEntityOfPage: "https://www.bhawanitechnologies.in/technical-guide"
};

export default function TechnicalGuidePage() {
    return (
        <div className="bg-white mt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            {/* Breadcrumb / Top Bar */}
            <div className="bg-slate-900 text-white py-4 border-b border-slate-800">
                <div className="container mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-4 text-xs md:text-sm">
                    <div className="flex items-center gap-2 text-slate-300">
                        <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
                        <span>/</span>
                        <Link href="/services" className="hover:text-green-400 transition-colors">Services</Link>
                        <span>/</span>
                        <span className="text-green-400 font-medium">Technical Engineering Guide</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a href="tel:+917677779418" className="inline-flex items-center gap-1.5 text-green-400 font-bold hover:underline">
                            <Phone size={14} /> +91 76777 79418
                        </a>
                    </div>
                </div>
            </div>

            {/* Guide Component Content */}
            <main>
                <RoofWaterproofingGuide />
            </main>
        </div>
    );
}
