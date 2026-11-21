import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";


export const metadata = {
    title: "Epoxy Flooring in Delhi NCR | Industrial & Commercial Floor Coating",
    description:
        "Expert epoxy flooring in Delhi NCR for factories, warehouses, hospitals & commercial spaces. Dust-free, chemical-resistant, seamless finish. Free site inspection. Call +91 76777 79418.",
    alternates: {
        canonical: "https://www.bhawanitechnologies.in/services/epoxy-flooring",
    },
    openGraph: {
        title: "Epoxy Flooring in Delhi NCR | Bhawani Technologies",
        description:
            "Industrial & commercial epoxy flooring in Delhi NCR. Dust-free, chemical-resistant, seamless high-gloss finish. Factory, warehouse, hospital flooring specialists.",
        url: "https://www.bhawanitechnologies.in/services/epoxy-flooring",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is epoxy flooring and where is it used in Delhi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Epoxy flooring is a two-component floor coating system (epoxy resin + hardener) that cures into an extremely hard, seamless, chemical-resistant surface. In Delhi NCR it is widely used in factories, warehouses, food processing units, pharmaceutical plants, hospitals, car showrooms, and commercial kitchens. Bhawani Technologies installs epoxy flooring for all these applications.",
            },
        },
        {
            "@type": "Question",
            name: "How much does epoxy flooring cost in Delhi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Epoxy flooring in Delhi NCR costs approximately ₹60–₹200 per sq. ft. depending on the system (self-leveling, anti-static, PU coating), floor preparation required, and total area. Larger areas attract lower per sq. ft. rates. Call Bhawani Technologies at +91 76777 79418 for a free site assessment and quote.",
            },
        },
        {
            "@type": "Question",
            name: "How long does epoxy flooring last?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Properly applied epoxy flooring by Bhawani Technologies lasts 5–10 years under heavy industrial use and 10–15 years in commercial settings. The lifespan depends on traffic load, chemical exposure, and whether a UV-stable polyurethane topcoat is applied to prevent yellowing.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between epoxy and polyurethane (PU) flooring?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Epoxy flooring is harder, more chemical-resistant, and better for heavy mechanical loads. Polyurethane (PU) flooring is more flexible, impact-resistant, and UV-stable — making it better for areas with thermal shock (cold storage, food processing) or outdoor exposure. Bhawani Technologies recommends the right system based on your specific usage requirements.",
            },
        },
        {
            "@type": "Question",
            name: "How long does epoxy flooring take to install?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A standard epoxy flooring project (surface preparation + primer + build coat + topcoat) takes 3–5 days depending on floor area and existing surface condition. Light foot traffic is possible after 24 hours; full cure and heavy traffic in 7 days. Bhawani Technologies plans work to minimise operational downtime.",
            },
        },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Epoxy Flooring",
    provider: {
        "@type": "LocalBusiness",
        name: "Bhawani Technologies",
        url: "https://www.bhawanitechnologies.in",
        telephone: "+917677779418",
    },
    areaServed: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    description:
        "Professional epoxy flooring services in Delhi NCR for industrial, commercial, and institutional applications — self-leveling epoxy, anti-static flooring, PU flooring, and industrial floor coatings.",
    serviceType: "Industrial Flooring",
    url: "https://www.bhawanitechnologies.in/services/epoxy-flooring",
};

const systems = [
    {
        name: "Self-Leveling Epoxy Flooring",
        desc: "High-build, self-leveling epoxy system that flows into a perfectly flat, seamless, high-gloss surface. The go-to choice for showrooms, warehouses, and pharmaceutical plants.",
        benefits: ["Seamless & dust-proof", "High-gloss aesthetic", "2–3mm thick build coat"],
    },
    {
        name: "Epoxy Mortar Flooring",
        desc: "Thick epoxy mortar system (4–6mm) using aggregates for extreme mechanical and impact resistance. Ideal for heavy manufacturing floors and loading bays.",
        benefits: ["Withstands forklift traffic", "Chemical & impact resistant", "Slip-resistant finish available"],
    },
    {
        name: "Anti-Static (ESD) Epoxy Flooring",
        desc: "Electrically conductive or static-dissipative epoxy systems meeting ESD standards. Essential for electronics manufacturing, server rooms, and explosive-hazard zones.",
        benefits: ["Meets ESD / ATEX standards", "Protects sensitive equipment", "Grounding system included"],
    },
    {
        name: "Polyurethane (PU) Flooring",
        desc: "Flexible polyurethane floor coating with better UV stability, thermal shock resistance, and impact absorption than standard epoxy. Ideal for food processing and cold storage.",
        benefits: ["UV stable — no yellowing", "Thermal shock resistant", "Food-safe options available"],
    },
    {
        name: "Epoxy Floor Coating (Thin Film)",
        desc: "1–2 coat thin-film epoxy coating system for light-duty commercial and institutional floors needing a dust-proof, easy-clean surface at a lower budget.",
        benefits: ["Cost-effective option", "Dust-proof surface", "Quick 2-day application"],
    },
    {
        name: "Floor Hardener (Dustproofer)",
        desc: "Liquid chemical hardener applied to existing concrete to densify and dust-proof the surface without a full coating system. Extends floor life significantly.",
        benefits: ["No downtime", "Penetrates & hardens concrete", "Cost-effective maintenance"],
    },
];

const industries = [
    "Factories & Manufacturing Plants",
    "Warehouses & Logistics Centres",
    "Pharmaceutical & Clean Rooms",
    "Food Processing Units",
    "Hospitals & Healthcare Facilities",
    "Car Showrooms & Service Centres",
    "Commercial Kitchens & Restaurants",
    "Educational Institutions",
    "Data Centres & Server Rooms",
    "Cold Storage Facilities",
    "Retail & Commercial Spaces",
    "Residential Garages",
];

const whyUs = [
    "Free site inspection across Delhi NCR",
    "Diamond grinding for proper surface preparation",
    "10+ years of industrial flooring experience",
    "Premium brands: Fosroc, Pidilite, Sika",
    "ESD / anti-static flooring specialists",
    "Post-project support & warranty",
];

export default function EpoxyFlooringPage() {
    return (
        <div className="bg-white mt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
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
                        <span className="text-gray-600 text-sm">Epoxy Flooring</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Epoxy Flooring<br />
                        <span className="text-brand-primary">in Delhi NCR</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                        Industrial &amp; commercial epoxy flooring — seamless, dust-free &amp; chemical-resistant. Factory, warehouse, hospital &amp; showroom floor specialists across Delhi NCR.
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
                        Why Delhi's Industries Choose Epoxy Flooring
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Bare concrete floors in factories, warehouses, and commercial kitchens are constantly dusting, staining, and degrading under traffic, chemical spills, and forklift loads. This generates particulate contamination, creates hygiene risks, and leads to costly floor repairs every few years.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Epoxy flooring by Bhawani Technologies transforms bare concrete into a hard, seamless, easy-clean surface that resists chemicals, abrasion, and heavy traffic — dramatically reducing maintenance costs and improving facility hygiene standards.
                    </p>
                </div>

                {/* Systems */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3 block">Our Systems</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Epoxy Flooring Systems We Install</h2>
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

                {/* Industries */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3 block">Industries We Serve</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Who Uses Epoxy Flooring in Delhi NCR</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {industries.map((industry, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl p-5 border border-slate-100 flex items-center gap-3">
                                <CheckCircle className="text-green-500 shrink-0" size={18} />
                                <span className="text-gray-700 text-sm font-medium">{industry}</span>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Floor with Epoxy Coating</h2>
                        <p className="text-green-50 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                            Free site inspection anywhere in Delhi NCR. Our specialist assesses your floor condition, recommends the right system, and provides a transparent quote — no hidden charges.
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
