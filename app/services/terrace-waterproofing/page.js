import { CheckCircle, Phone, ArrowRight, ShieldCheck, Thermometer, Layers, Wrench, HelpCircle } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
    title: "Terrace Waterproofing in Delhi NCR | Rate Per Sq Ft, Crack Filling & Heat Proofing",
    description:
        "Best terrace waterproofing services in Delhi NCR. Fix terrace cracks, monsoon water leakage & tile seepage with Dr. Fixit, Asian Paints, APP membranes & cool roof coatings. Get a free quote.",
    keywords: [
        "terrace waterproofing",
        "dr fixit terrace waterproofing",
        "water proofing for terrace",
        "terrace crack filling",
        "terrace plastering",
        "waterproof paint for terrace",
        "weather proof paint for terrace",
        "terrace floor paint",
        "terrace waterproofing rate per sq ft",
        "terrace waterproofing on tiles",
        "terrace waterproofing quotation",
        "terrace waterproofing delhi",
        "brick bat coba terrace waterproofing"
    ],
    alternates: {
        canonical: "https://www.bhawanitechnologies.in/services/terrace-waterproofing",
    },
    openGraph: {
        title: "Terrace Waterproofing in Delhi NCR | Bhawani Technologies",
        description:
            "Stop terrace leakage, damp walls & roof heat. APP membrane sheets, Dr. Fixit coatings, tile terrace waterproofing without breaking tiles.",
        url: "https://www.bhawanitechnologies.in/services/terrace-waterproofing",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the best method for terrace waterproofing in Delhi NCR?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The ideal terrace waterproofing method depends on the surface. For exposed flat RCC terraces with regular foot traffic, 3mm/4mm torch-applied APP bitumen membrane sheets provide 10–15 years of puncture-resistant waterproofing. For terraces needing thermal cooling, elastomeric acrylic coatings like Dr. Fixit Roofseal or Asian Paints SmartCare Damp Proof are recommended.",
            },
        },
        {
            "@type": "Question",
            name: "How much does terrace waterproofing cost per sq ft in Delhi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Terrace waterproofing cost in Delhi NCR ranges from ₹45 to ₹180 per sq. ft. depending on the system chosen. Elastomeric terrace paint is ₹45–₹65/sq. ft., fiber-mesh polymer coating is ₹60–₹85/sq. ft., and heavy-duty APP membrane sheets range from ₹95–₹145/sq. ft.",
            },
        },
        {
            "@type": "Question",
            name: "How to fix cracks on a concrete terrace to prevent water seepage?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "To fix terrace cracks: Clean the crack of dirt and algae, widen it into a V-groove with an angle grinder, apply a polymer bonding agent, and seal with non-shrink polymer-modified mortar or polyurethane (PU) sealant. For active or severe cracks, reinforced glass fiber mesh tape is applied across the crack line before the waterproof topcoat.",
            },
        },
        {
            "@type": "Question",
            name: "Can terrace waterproofing be done on existing tiles without breaking them?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Bhawani Technologies specializes in no-tile-break waterproofing using clear elastomeric polyurethane coatings and waterproof epoxy grout. We seal all tile joints and porous tiles, preventing leakage without noisy demolition or mess.",
            },
        },
        {
            "@type": "Question",
            name: "Does terrace waterproofing help lower indoor temperature?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. White solar-reflective elastomeric terrace paints (Cool Roof systems) reflect up to 85% of solar heat, dropping the roof slab temperature by up to 10°C–12°C and indoor room temperature by 3°C–5°C during hot Delhi summers.",
            },
        },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Terrace Waterproofing Services",
    provider: {
        "@type": "LocalBusiness",
        name: "Bhawani Technologies",
        url: "https://www.bhawanitechnologies.in",
        telephone: "+917677779418",
    },
    areaServed: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    description:
        "Professional terrace waterproofing, crack filling, brick bat coba repair, tile terrace sealing, and solar reflective paint in Delhi NCR.",
    serviceType: "Terrace Waterproofing",
    url: "https://www.bhawanitechnologies.in/services/terrace-waterproofing",
};

const systems = [
    {
        name: "APP / SBS Torch-on Bitumen Membrane",
        desc: "Modified bitumen membrane sheets with polyester reinforcement. The industry benchmark for flat terrace slabs, ensuring 10–15 years of watertight protection.",
        benefits: ["10–15 year lifespan", "High puncture resistance", "Thermal cycling resistance"],
    },
    {
        name: "Elastomeric Acrylic & PU Cool Roof Coating",
        desc: "Solar-reflective liquid rubber membrane (Dr. Fixit Roofseal / Asian Paints Damp Proof). Reflects sunlight, drops indoor heat, and seals surface micro-cracks.",
        benefits: ["Reduces slab heat by up to 10°C", "High crack-bridging elasticity", "UV stable non-yellowing topcoat"],
    },
    {
        name: "Terrace Tile Waterproofing (Zero Demolition)",
        desc: "Transparent polyurethane coating and high-strength epoxy grouting applied over existing mosaic, china mosaic, or ceramic tiles without breaking a single tile.",
        benefits: ["No demolition noise or debris", "Retains tile look", "100% watertight tile joints"],
    },
    {
        name: "Brick Bat Coba Rehabilitation & Waterproofing",
        desc: "Re-grading slope and repairing damaged traditional brick bat coba systems using polymer-modified slurry and crystalline waterproofing admixtures.",
        benefits: ["Eliminates stagnant water pooling", "Structural thermal cushion", "Restores slope drainage"],
    },
    {
        name: "Polymer-Modified Cementitious Coating",
        desc: "Two-component flexible cementitious slurry with glass fiber mesh. Ideal for new terrace slabs and podiums before protective screed laying.",
        benefits: ["Bonds monolithically to concrete", "Breathable waterproof film", "Eco-friendly & non-toxic"],
    },
];

const pricingTable = [
    { system: "Elastomeric Terrace Paint / Coating", life: "5–7 Years", rate: "₹45 – ₹65 / sq ft", bestFor: "Sun-exposed terraces & heat reduction" },
    { system: "Fiberglass Mesh Reinforced Coating", life: "7–10 Years", rate: "₹65 – ₹90 / sq ft", bestFor: "Terraces with multiple hairline cracks" },
    { system: "APP Torch-on Bitumen Membrane (3mm/4mm)", life: "10–15 Years", rate: "₹95 – ₹145 / sq ft", bestFor: "Flat RCC slabs with water pooling" },
    { system: "Tile Terrace Waterproofing (No Breaking)", life: "5–8 Years", rate: "₹55 – ₹80 / sq ft", bestFor: "Ceramic tile / China mosaic terraces" },
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

                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Terrace Waterproofing<br />
                        <span className="text-brand-primary">in Delhi NCR</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                        Stop terrace leakage, ceiling dampness &amp; summer heat permanently. Expert crack filling, APP membrane sheets, Dr. Fixit &amp; Asian Paints cool roof coatings.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+917677779418"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-900/20"
                        >
                            <Phone size={18} />
                            Call for Free Site Inspection
                        </a>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary font-bold rounded-xl border-2 border-brand-primary hover:bg-brand-light transition-colors"
                        >
                            Get Cost Per Sq Ft Quote
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-gray-700">
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-slate-200">
                            <ShieldCheck className="text-green-600" size={18} /> 500+ Terraces Waterproofed
                        </div>
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-slate-200">
                            <Thermometer className="text-green-600" size={18} /> Solar Heat Reflective
                        </div>
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-slate-200">
                            <CheckCircle className="text-green-600" size={18} /> Free On-Site Inspection
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-20">

                {/* Intro */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3 block">Delhi NCR Climate Resilience</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Why Terrace Waterproofing Is Critical for Your Home
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Delhi NCR terraces face brutal weather extremes — blistering summer heat exceeding 45°C followed by torrential monsoon downpours. Thermal expansion causes RCC slabs and brick bat coba screeds to crack. Rainwater gets trapped beneath tiles or plaster, silently rusting the internal steel reinforcement and destroying ceiling plaster.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Bhawani Technologies delivers engineered waterproofing treatments that seal all terrace cracks, re-establish proper drainage slopes, and apply solar-reflective coatings to keep your top-floor rooms cool and 100% leak-free.
                    </p>
                </div>

                {/* Systems */}
                <div className="mb-24">
                    <div className="text-center mb-14">
                        <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3 block">Tailored Systems</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Terrace Waterproofing Systems We Install</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {systems.map((system, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{system.name}</h3>
                                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">{system.desc}</p>
                                </div>
                                <div className="space-y-2 pt-4 border-t border-slate-200">
                                    {system.benefits.map((b, j) => (
                                        <div key={j} className="flex items-center gap-2 text-xs text-gray-700">
                                            <CheckCircle className="text-green-600 shrink-0" size={14} />
                                            <span>{b}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cost / Rate Per Sq Ft Table */}
                <div className="mb-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 md:p-14 shadow-2xl">
                    <div className="text-center mb-10">
                        <span className="text-green-400 font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block">Market Rate Guide</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Terrace Waterproofing Rate Per Sq Ft in Delhi NCR</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
                            Transparent estimates covering materials, crack filling, primer, and multi-coat application.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-700 text-green-400 text-sm">
                                    <th className="py-4 px-4 font-semibold">Terrace Treatment</th>
                                    <th className="py-4 px-4 font-semibold">Expected Durability</th>
                                    <th className="py-4 px-4 font-semibold">Approx. Rate Per Sq Ft</th>
                                    <th className="py-4 px-4 font-semibold">Best Suited For</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800 text-sm">
                                {pricingTable.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-800/60 transition-colors">
                                        <td className="py-4 px-4 font-medium text-white">{row.system}</td>
                                        <td className="py-4 px-4 text-slate-300">{row.life}</td>
                                        <td className="py-4 px-4 text-green-400 font-bold">{row.rate}</td>
                                        <td className="py-4 px-4 text-slate-400">{row.bestFor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-8 text-center text-xs text-slate-400">
                        * Free site inspection provided across Delhi, Noida, Gurgaon, Ghaziabad &amp; Faridabad.
                    </div>
                </div>

                {/* FAQ */}
                <div className="mb-24 max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3 block">Got Questions?</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Terrace Waterproofing FAQs</h2>
                    </div>
                    <div className="space-y-6">
                        {faqSchema.mainEntity.map((faq, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl p-7 border border-slate-100">
                                <h3 className="font-bold text-gray-900 mb-3 text-lg flex items-start gap-2">
                                    <HelpCircle className="text-brand-primary shrink-0 mt-1" size={20} />
                                    <span>{faq.name}</span>
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-7">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-brand-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Free Terrace Inspection Today</h2>
                        <p className="text-green-50 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                            Don't wait for the next monsoon to damage your home. Our team will inspect your terrace, detect the leakage origin, and provide a clear quotation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+917677779418"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary font-bold rounded-xl hover:bg-green-50 transition-colors shadow-lg"
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
