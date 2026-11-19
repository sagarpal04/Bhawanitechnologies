import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
    title: "Roof Waterproofing in Delhi NCR | Stop Roof Leakage & Seepage",
    description:
        "Professional roof waterproofing in Delhi NCR. UV-resistant coatings, APP membranes & thermal crack-resistant systems to stop roof leakage permanently. Free inspection. Call +91 76777 79418.",
    alternates: {
        canonical: "https://www.bhawanitechnologies.in/services/roof-waterproofing",
    },
    openGraph: {
        title: "Roof Waterproofing in Delhi NCR | Bhawani Technologies",
        description:
            "Stop roof leakage with UV-resistant coatings, APP membranes & thermal systems. Expert roof waterproofing across Delhi NCR. Free inspection.",
        url: "https://www.bhawanitechnologies.in/services/roof-waterproofing",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the best waterproofing solution for a leaking roof in Delhi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "For a leaking roof in Delhi, the best solution depends on the roof type and leak severity. For RCC flat roofs, APP bitumen membranes or PU liquid membranes provide the best long-term protection. For sloped roofs, acrylic elastomeric coatings or polyurea spray systems work well. Bhawani Technologies recommends the right system after a free on-site inspection.",
            },
        },
        {
            "@type": "Question",
            name: "How do I know if my roof needs waterproofing or just patching?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "If leaks appear in multiple spots, water stains spread across ceilings, or the same patch keeps failing after monsoon, your roof needs a complete waterproofing treatment — not spot patching. Bhawani Technologies performs a thorough inspection to determine the extent of membrane failure and recommends the most cost-effective solution.",
            },
        },
        {
            "@type": "Question",
            name: "How much does roof waterproofing cost in Delhi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Roof waterproofing in Delhi costs approximately ₹60–₹180 per sq. ft. depending on the system chosen (coating vs. membrane), roof area, and existing condition. Call Bhawani Technologies at +91 76777 79418 for a free site inspection and transparent quote.",
            },
        },
        {
            "@type": "Question",
            name: "Can roof waterproofing reduce indoor temperature?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Solar-reflective acrylic coatings and thermal insulation systems (like brick bat coba with reflective topcoat) can reduce indoor temperatures by 3–7°C, significantly lowering air-conditioning costs. Bhawani Technologies offers cool-roof compatible waterproofing systems.",
            },
        },
        {
            "@type": "Question",
            name: "How long does roof waterproofing last?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "APP membrane roof waterproofing lasts 10–15 years; PU liquid membranes last 7–10 years with UV topcoat maintenance; acrylic coatings last 5–7 years. Bhawani Technologies uses premium materials to maximise system lifespan.",
            },
        },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Roof Waterproofing",
    provider: {
        "@type": "LocalBusiness",
        name: "Bhawani Technologies",
        url: "https://www.bhawanitechnologies.in",
        telephone: "+917677779418",
    },
    areaServed: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    description:
        "Professional roof waterproofing services in Delhi NCR using UV-resistant coatings, APP membranes, PU liquid membranes, and thermal insulation systems to permanently stop roof leakage.",
    serviceType: "Waterproofing",
    url: "https://www.bhawanitechnologies.in/services/roof-waterproofing",
};

const systems = [
    {
        name: "APP / SBS Bitumen Membrane",
        desc: "Torch-applied bitumen membranes create a continuous watertight barrier on flat RCC roofs. Industry-standard for durability and 10–15 year lifespan.",
        benefits: ["10–15 year protection", "Seamless & puncture-resistant", "Torch or cold-applied"],
    },
    {
        name: "PU Liquid Membrane",
        desc: "Spray or roller-applied polyurethane that cures into a seamless, fully elastic membrane. Ideal for roofs with complex shapes, parapet walls, or service penetrations.",
        benefits: ["Fully seamless application", "High elongation crack-bridging", "UV stable topcoat"],
    },
    {
        name: "Solar-Reflective Acrylic Coating",
        desc: "High-elasticity acrylic coating with solar-reflective pigments. Reduces roof surface temperature, lowers indoor heat, and seals minor cracks.",
        benefits: ["Reduces temperature 3–7°C", "Anti-fungal & anti-algae", "5–7 year coating life"],
    },
    {
        name: "Polyurea Spray System",
        desc: "Ultra-fast curing spray system providing extreme waterproofing with chemical and abrasion resistance. Ideal for industrial and commercial roofs.",
        benefits: ["Cures in seconds", "Seamless coverage", "Walk-on immediately"],
    },
    {
        name: "Cementitious Waterproofing",
        desc: "Polymer-modified cementitious slurry applied in multiple coats — a cost-effective solution for roofs with minor seepage and hairline cracks.",
        benefits: ["Good adhesion to concrete", "Cost-effective", "Non-toxic"],
    },
];

const whyUs = [
    "Free site inspection across Delhi NCR",
    "Cool-roof & thermal insulation options available",
    "10+ years of roof waterproofing experience",
    "500+ roofs waterproofed across NCR",
    "Premium brands: Fosroc, Pidilite, Dr. Fixit",
    "Post-project support & warranty",
];

export default function RoofWaterproofingPage() {
    return (
        <div className="bg-white mt-20">
            <Script
                id="roof-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="roof-service-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />

            {/* Hero Banner */}
            <div className="bg-brand-light py-20 lg:py-28 relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Link href="/services" className="text-brand-primary font-semibold text-sm hover:underline">
                            Services
                        </Link>
                        <span className="text-gray-400 text-sm">/</span>
                        <span className="text-gray-600 text-sm">Roof Waterproofing</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Roof Waterproofing<br />
                        <span className="text-brand-primary">in Delhi NCR</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                        Stop roof leakage &amp; seepage permanently. UV-resistant coatings, APP membranes &amp; thermal insulation systems — with free site inspection anywhere in Delhi NCR.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+917677779418"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-green-700 transition-colors"
                        >
                            <Phone size={18} />
                            Call for Free Inspection
                        </a>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary font-bold rounded-xl border-2 border-brand-primary hover:bg-brand-light transition-colors"
                        >
                            Get a Quote
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-20">

                {/* Intro */}
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Delhi's Extreme Climate Demands Quality Roof Waterproofing
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Delhi's roof surfaces endure temperatures from -1°C in winter to 48°C in summer — a 50°C annual swing that creates severe thermal expansion and contraction. Combined with 600–800mm monsoon rainfall, concrete roofs develop micro-cracks, spalling, and failed parapet joints within years.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        A professional roof waterproofing system from Bhawani Technologies not only stops leakage but also adds solar reflectivity to reduce indoor temperatures — cutting your cooling costs while protecting the structure below.
                    </p>
                </div>

                {/* Systems */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3 block">Our Systems</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Roof Waterproofing Systems We Use</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {systems.map((system, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-300">
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{system.name}</h3>
                                <p className="text-gray-600 leading-relaxed mb-5 text-sm">{system.desc}</p>
                                <div className="space-y-2 pt-4 border-t border-slate-200">
                                    {system.benefits.map((b, j) => (
                                        <div key={j} className="flex items-center gap-2">
                                            <CheckCircle className="text-green-500 shrink-0" size={16} />
                                            <span className="text-gray-700 text-sm">{b}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Why Us */}
                <div className="mb-20 bg-slate-50 rounded-3xl p-10 md:p-16">
                    <div className="text-center mb-10">
                        <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3 block">Why Choose Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Delhi Trusts Bhawani Technologies</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto">
                        {whyUs.map((point, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <CheckCircle className="text-green-500 shrink-0 mt-0.5" size={20} />
                                <span className="text-gray-700 font-medium">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ */}
                <div className="mb-20 max-w-3xl mx-auto">
                    <div className="text-center mb-10">
                        <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3 block">FAQ</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-6">
                        {faqSchema.mainEntity.map((faq, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg">{faq.name}</h3>
                                <p className="text-gray-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-brand-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop Your Roof Leakage Today</h2>
                        <p className="text-green-50 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                            Free site inspection anywhere in Delhi NCR. Our expert identifies the exact cause of your roof leakage and recommends the most cost-effective, long-lasting solution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+917677779418"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary font-bold rounded-xl hover:bg-green-50 transition-colors"
                            >
                                <Phone size={18} />
                                +91 76777 79418
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition-colors border border-green-600"
                            >
                                Request a Quote
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
