import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
    title: "Terrace Waterproofing in Delhi NCR | Expert Roof Leakage Solutions",
    description:
        "Best terrace waterproofing service in Delhi NCR. Stop roof leakage permanently with APP membranes, PU coatings & cementitious systems. Free site inspection. Call +91 76777 79418.",
    alternates: {
        canonical: "https://www.bhawanitechnologies.in/services/terrace-waterproofing",
    },
    openGraph: {
        title: "Terrace Waterproofing in Delhi NCR | Bhawani Technologies",
        description:
            "Permanent terrace waterproofing solutions in Delhi NCR. APP membranes, PU coatings, thermal insulation. 500+ projects. Free site inspection.",
        url: "https://www.bhawanitechnologies.in/services/terrace-waterproofing",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the best waterproofing method for a terrace in Delhi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The best terrace waterproofing in Delhi depends on the roof type and condition. Bhawani Technologies recommends APP/SBS bitumen membranes for flat RCC terraces, PU liquid membranes for irregular surfaces, and brick bat coba for traditional roofs needing thermal insulation. We inspect your terrace and recommend the most cost-effective, long-lasting solution.",
            },
        },
        {
            "@type": "Question",
            name: "How long does terrace waterproofing last?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Professional terrace waterproofing done by Bhawani Technologies typically lasts 7–15 years depending on the system used. APP membrane systems last 10–15 years, while PU coatings last 7–10 years with annual UV topcoat maintenance.",
            },
        },
        {
            "@type": "Question",
            name: "How much does terrace waterproofing cost in Delhi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Terrace waterproofing cost in Delhi typically ranges from ₹60 to ₹200+ per sq. ft. depending on the system (membrane vs. coating), roof area, and surface condition. Contact Bhawani Technologies at +91 76777 79418 for a free site inspection and accurate quote.",
            },
        },
        {
            "@type": "Question",
            name: "Does Bhawani Technologies offer terrace waterproofing in Noida and Gurugram?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Bhawani Technologies provides terrace waterproofing services across Delhi NCR including Delhi, Noida, Gurugram, Faridabad, and Ghaziabad.",
            },
        },
        {
            "@type": "Question",
            name: "Can terrace waterproofing be done during monsoon?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Ideally, terrace waterproofing should be done in dry weather. However, Bhawani Technologies uses certain rapid-cure coatings and injection grouting techniques that can stop active leaks even during monsoon. Contact us for emergency leak-stopping solutions.",
            },
        },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Terrace Waterproofing",
    provider: {
        "@type": "LocalBusiness",
        name: "Bhawani Technologies",
        url: "https://www.bhawanitechnologies.in",
        telephone: "+917677779418",
    },
    areaServed: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    description:
        "Professional terrace waterproofing services in Delhi NCR using APP membranes, PU coatings, cementitious systems, and brick bat coba for permanent roof leakage protection.",
    serviceType: "Waterproofing",
    url: "https://www.bhawanitechnologies.in/services/terrace-waterproofing",
};

const systems = [
    {
        name: "APP / SBS Bitumen Membrane",
        desc: "Torch-applied modified bitumen membranes — the gold standard for flat RCC terraces. Provides a seamless, puncture-resistant layer lasting 10–15 years.",
        benefits: ["10–15 year lifespan", "Seamless coverage", "UV & heat resistant"],
    },
    {
        name: "PU Liquid Membrane Coating",
        desc: "Spray or roller-applied polyurethane liquid membrane that cures into a fully seamless, highly elastic waterproofing skin. Ideal for irregular shapes and difficult details.",
        benefits: ["Fully seamless", "Crack-bridging up to 2mm", "UV stable topcoat"],
    },
    {
        name: "Cementitious Waterproofing",
        desc: "Polymer-modified cementitious slurry applied in multiple layers. Bonds directly to concrete and is safe for drinking water contact areas.",
        benefits: ["Excellent concrete adhesion", "Breathable membrane", "Cost-effective"],
    },
    {
        name: "Brick Bat Coba System",
        desc: "Traditional terrace waterproofing using brick bats set in lime mortar with waterproofing admixture, providing thermal insulation and slope drainage.",
        benefits: ["Natural thermal insulation", "Creates drainage slope", "Proven for 50+ years"],
    },
    {
        name: "Acrylic Elastomeric Coating",
        desc: "High-elasticity acrylic coating applied over existing surfaces. Great as a maintenance coat or for mildly damp terraces.",
        benefits: ["Anti-fungal & anti-algae", "Solar reflective options", "Easy application"],
    },
];

const whyUs = [
    "Free site inspection across Delhi NCR",
    "10+ years of waterproofing expertise",
    "500+ terrace waterproofing projects",
    "Premium brands: Fosroc, Pidilite, Dr. Fixit",
    "Skilled applicators with safety compliance",
    "Post-project support & warranty",
];

export default function TerraceWaterproofingPage() {
    return (
        <div className="bg-white mt-20">
            <Script
                id="terrace-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="terrace-service-schema"
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
                        <span className="text-gray-600 text-sm">Terrace Waterproofing</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Terrace Waterproofing<br />
                        <span className="text-brand-primary">in Delhi NCR</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                        Stop roof leakage permanently. Expert terrace waterproofing using APP membranes, PU coatings &amp; more — backed by 10+ years &amp; 500+ projects.
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
                        Why Your Terrace Needs Professional Waterproofing
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Delhi NCR experiences extreme weather — scorching summers above 45°C and monsoon rainfall exceeding 800mm annually. This thermal cycling and moisture load causes RCC terraces to develop micro-cracks, allowing water to seep into the slab and corrode reinforcement steel.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        A properly waterproofed terrace prevents structural damage, reduces interior temperatures by up to 5°C (thermal insulation systems), and protects your investment for 10–15 years.
                    </p>
                </div>

                {/* Systems */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3 block">Our Systems</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Terrace Waterproofing Systems We Use</h2>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Terrace Waterproofed Today</h2>
                        <p className="text-green-50 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                            Free site inspection anywhere in Delhi NCR. Our expert visits your property, identifies the leakage source, and gives you a transparent quote — no obligation.
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
