import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
    title: "Bathroom Waterproofing in Delhi NCR | Fix Tile Leakage & Wet Wall Seepage",
    description:
        "Expert bathroom waterproofing in Delhi NCR. Multi-layer tile-joint sealing, corner reinforcement & moisture-resistant grouting to fix wet wall seepage permanently. Free inspection. +91 76777 79418.",
    alternates: {
        canonical: "https://www.bhawanitechnologies.in/services/bathroom-waterproofing",
    },
    openGraph: {
        title: "Bathroom Waterproofing in Delhi NCR | Bhawani Technologies",
        description:
            "Fix bathroom leakage, tile-joint seepage & wet walls permanently. Multi-layer waterproofing system. Free inspection in Delhi NCR.",
        url: "https://www.bhawanitechnologies.in/services/bathroom-waterproofing",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Why is my bathroom leaking into the room below?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Bathroom leakage to the floor below is typically caused by failed tile joints, cracked floor screed, missing or degraded waterproofing membrane below the tiles, or leaking pipe joints. Without a proper waterproofing layer beneath the tiles, water seeps through micro-cracks and collects above the RCC slab before dripping through. Bhawani Technologies diagnoses the exact entry points and applies a targeted fix.",
            },
        },
        {
            "@type": "Question",
            name: "Do I need to break all bathroom tiles for waterproofing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Not always. For minor tile-joint seepage, we can apply epoxy grout and sealant without breaking tiles. However, for a permanent, long-lasting solution — especially where the waterproofing membrane below tiles has failed — tile removal and re-laying with a proper membrane is recommended. Bhawani Technologies will advise the right approach after inspection.",
            },
        },
        {
            "@type": "Question",
            name: "How much does bathroom waterproofing cost in Delhi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Bathroom waterproofing in Delhi typically costs ₹150–₹400 per sq. ft. depending on tile-break or no-tile-break approach, bathroom size, and severity of damage. Call +91 76777 79418 for a free site assessment and quote.",
            },
        },
        {
            "@type": "Question",
            name: "How long does bathroom waterproofing last?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A properly applied bathroom waterproofing system (with membrane below tiles) lasts 8–12 years. Tile-joint sealant maintenance may be needed every 3–5 years. Bhawani Technologies uses high-quality materials from Dr. Fixit and Pidilite for maximum durability.",
            },
        },
        {
            "@type": "Question",
            name: "Can bathroom waterproofing be done without disturbing residents?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. For surface-level treatments (tile-joint sealing, grout injection), work is completed in 1–2 days with minimal disruption. For full tile-break waterproofing, the bathroom is out of use for 5–7 days. Bhawani Technologies plans work to minimise inconvenience.",
            },
        },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Bathroom Waterproofing",
    provider: {
        "@type": "LocalBusiness",
        name: "Bhawani Technologies",
        url: "https://www.bhawanitechnologies.in",
        telephone: "+917677779418",
    },
    areaServed: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    description:
        "Professional bathroom waterproofing services in Delhi NCR — multi-layer tile-joint sealing, corner reinforcement, PU membrane below tiles, and moisture-resistant grouting to permanently stop wet wall seepage.",
    serviceType: "Waterproofing",
    url: "https://www.bhawanitechnologies.in/services/bathroom-waterproofing",
};

const systems = [
    {
        name: "Membrane Waterproofing (Under Tiles)",
        desc: "Full membrane system applied on the floor screed and walls before tiling. Provides a continuous, seamless barrier that traps zero water below the tile layer.",
        benefits: ["Permanent solution", "Full floor & wall coverage", "Prevents rework in 2–3 years"],
    },
    {
        name: "Tile-Joint Epoxy Grouting",
        desc: "Existing tile joints re-grouted with waterproof epoxy grout. Seals micro-cracks at joints where most bathroom leakage originates — without breaking tiles.",
        benefits: ["No tile breaking needed", "Same-day completion", "Chemical & stain resistant"],
    },
    {
        name: "Corner & Junction Sealing",
        desc: "Floor-wall and wall-wall junctions are the highest-risk points. We apply flexible PU sealant tape + corner fillet for 100% watertight corners.",
        benefits: ["Covers high-movement joints", "Flexible & crack-bridging", "Critical detail fix"],
    },
    {
        name: "Cementitious Slurry Coating",
        desc: "2–3 coats of polymer-modified cementitious waterproofing applied directly to masonry walls and floor slab before tiling. Food-safe, non-toxic.",
        benefits: ["Breathable membrane", "Non-toxic & food safe", "Bonds to concrete & block"],
    },
    {
        name: "Acrylic Tanking Coat",
        desc: "Flexible acrylic-based waterproof coating applied to wall surfaces to prevent dampness from seeping through bathroom walls into adjoining rooms.",
        benefits: ["Prevents cold wall dampness", "Quick-drying", "Can be tiled over"],
    },
];

const whyUs = [
    "Free site inspection across Delhi NCR",
    "Tile-break or no-tile-break options available",
    "10+ years of wet area waterproofing expertise",
    "Premium materials: Dr. Fixit, Pidilite, Fosroc",
    "Minimal disruption — phased work plans",
    "Post-project support & warranty",
];

export default function BathroomWaterproofingPage() {
    return (
        <div className="bg-white mt-20">
            <Script
                id="bathroom-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="bathroom-service-schema"
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
                        <span className="text-gray-600 text-sm">Bathroom Waterproofing</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Bathroom Waterproofing<br />
                        <span className="text-brand-primary">in Delhi NCR</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                        Fix tile-joint leakage, wet walls &amp; seepage into rooms below — permanently. Expert bathroom waterproofing with tile-break or no-tile-break options.
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
                        Why Bathroom Waterproofing Fails in Delhi Homes
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Most bathroom leakage in Delhi homes is not a plumbing problem — it is a waterproofing failure. Builders often apply thin, low-quality acrylic paint as a waterproof coat instead of a proper membrane. Within 2–3 years, tiles crack and re-grout joints open, allowing water to seep through the screed and RCC slab to the ceiling below.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Bhawani Technologies inspects the actual failure point — tile joints, corner junctions, floor screed, or the slab itself — and applies the right treatment. In many cases, we can fix the leakage without breaking a single tile.
                    </p>
                </div>

                {/* Systems */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3 block">Our Systems</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Bathroom Waterproofing Systems We Use</h2>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Fix Your Bathroom Leakage Today</h2>
                        <p className="text-green-50 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                            Free site inspection anywhere in Delhi NCR. Our expert identifies the exact leakage source and tells you upfront whether tiles need to be broken — before any work begins.
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
