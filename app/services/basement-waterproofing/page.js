import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";


export const metadata = {
    title: "Basement Waterproofing in Delhi NCR | Stop Seepage & Dampness",
    description:
        "Expert basement waterproofing in Delhi NCR. Positive & negative side systems, injection grouting & crystalline waterproofing to stop seepage permanently. Free inspection. Call +91 76777 79418.",
    alternates: {
        canonical: "https://www.bhawanitechnologies.in/services/basement-waterproofing",
    },
    openGraph: {
        title: "Basement Waterproofing in Delhi NCR | Bhawani Technologies",
        description:
            "Permanent basement waterproofing solutions — crystalline systems, PU injection grouting, positive & negative side treatments. Free inspection in Delhi NCR.",
        url: "https://www.bhawanitechnologies.in/services/basement-waterproofing",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What causes basement water seepage in Delhi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Basement seepage in Delhi is primarily caused by high groundwater table, hydrostatic pressure from surrounding soil, poor construction joints, honeycombing in concrete, and inadequate waterproofing during construction. Delhi's clay-heavy soil also retains moisture and exerts constant pressure on basement walls.",
            },
        },
        {
            "@type": "Question",
            name: "What is the difference between positive and negative side basement waterproofing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Positive side waterproofing is applied on the exterior face of the basement wall (before backfilling) and blocks water before it enters the structure — this is the preferred method during construction. Negative side waterproofing is applied from the interior and is used for existing basements where excavation isn't possible. Bhawani Technologies recommends the best approach after a site inspection.",
            },
        },
        {
            "@type": "Question",
            name: "How much does basement waterproofing cost in Delhi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Basement waterproofing cost in Delhi NCR ranges from ₹80 to ₹250+ per sq. ft. depending on the severity of leakage, waterproofing system used, and accessibility. PU injection grouting for active leaks costs differently from full crystalline waterproofing systems. Call +91 76777 79418 for a free assessment.",
            },
        },
        {
            "@type": "Question",
            name: "Can active basement leaks be stopped without excavation?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Bhawani Technologies uses high-pressure PU injection grouting and crystalline waterproofing systems that can stop active water ingress from the interior side — no excavation required. These are ideal for occupied buildings and existing basements.",
            },
        },
        {
            "@type": "Question",
            name: "How long does basement waterproofing last?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Properly applied basement waterproofing by Bhawani Technologies lasts 10–20+ years. Crystalline waterproofing systems chemically bond with concrete and self-heal minor cracks over time, providing lifetime protection in many cases.",
            },
        },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Basement Waterproofing",
    provider: {
        "@type": "LocalBusiness",
        name: "Bhawani Technologies",
        url: "https://www.bhawanitechnologies.in",
        telephone: "+917677779418",
    },
    areaServed: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    description:
        "Professional basement waterproofing services in Delhi NCR using crystalline systems, PU injection grouting, positive/negative side treatments to permanently stop seepage and dampness.",
    serviceType: "Waterproofing",
    url: "https://www.bhawanitechnologies.in/services/basement-waterproofing",
};

const systems = [
    {
        name: "Crystalline Waterproofing",
        desc: "Reactive crystalline compounds that penetrate concrete and form insoluble crystals in the pores and cracks, blocking water permanently. Self-heals micro-cracks over time.",
        benefits: ["Permanent pore-blocking", "Self-healing properties", "No excavation needed"],
    },
    {
        name: "PU Injection Grouting",
        desc: "High-pressure polyurethane foam injection into active cracks and construction joints. The foam expands and cures on contact with water, instantly stopping leaks.",
        benefits: ["Stops active leaks instantly", "No excavation required", "Flexible — allows movement"],
    },
    {
        name: "Positive Side Membrane (New Construction)",
        desc: "APP/SBS bitumen membranes or HDPE sheet membranes applied on the external face of basement walls before backfilling — the most effective method for new builds.",
        benefits: ["Applied before backfill", "Complete external barrier", "Lasts 15–20 years"],
    },
    {
        name: "Negative Side Cementitious",
        desc: "Polymer-modified cementitious coatings applied on the interior basement wall to resist hydrostatic water pressure from the outside.",
        benefits: ["No excavation needed", "Works against water pressure", "Applied from inside"],
    },
    {
        name: "Drainage & Sump Systems",
        desc: "Internal cavity drain membranes + sump pumps to manage groundwater that cannot be fully excluded, directing it safely away from the structure.",
        benefits: ["Manages high water table", "Prevents flooding", "Pairs with any system"],
    },
];

const whyUs = [
    "Free site inspection across Delhi NCR",
    "Specialist in occupied-building basement repair",
    "No-excavation injection grouting available",
    "10+ years basement waterproofing experience",
    "Premium brands: Fosroc, Pidilite, Penetron",
    "Post-project support & warranty",
];

export default function BasementWaterproofingPage() {
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
                        <span className="text-gray-600 text-sm">Basement Waterproofing</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Basement Waterproofing<br />
                        <span className="text-brand-primary">in Delhi NCR</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                        Stop seepage, dampness &amp; active leaks permanently. Expert basement waterproofing using injection grouting &amp; crystalline systems — no excavation needed in most cases.
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
                        Delhi's Basements Face Unique Waterproofing Challenges
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Delhi NCR's high groundwater table — especially in areas like Dwarka, Rohini, and Noida — means basements face constant hydrostatic water pressure. Combined with clay-heavy soil that retains moisture and poor construction joint detailing common in older buildings, basement leakage is one of the most damaging problems a property owner can face.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Untreated basement seepage causes reinforcement corrosion, spalling concrete, damp walls, mold growth, and ultimately structural compromise. Bhawani Technologies diagnoses the exact entry points and applies the right system — often without any excavation.
                    </p>
                </div>

                {/* Systems */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3 block">Our Systems</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Basement Waterproofing Systems We Use</h2>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Stop Your Basement Leakage Today</h2>
                        <p className="text-green-50 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                            Free site inspection anywhere in Delhi NCR. Our specialist diagnoses the exact leakage source and recommends the right system — without unnecessary excavation.
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
