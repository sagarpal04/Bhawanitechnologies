import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import Link from "next/link";
import Script from "next/script";

export const metadata = {
    title: "Water Tank Waterproofing in Delhi NCR | Non-Toxic Tank Lining",
    description:
        "Expert water tank waterproofing in Delhi NCR. Food-safe, non-toxic coatings to fix tank leakage, prevent algae & stop seepage. Free inspection. Call +91 76777 79418.",
    alternates: {
        canonical: "https://www.bhawanitechnologies.in/services/water-tank-waterproofing",
    },
    openGraph: {
        title: "Water Tank Waterproofing in Delhi NCR | Bhawani Technologies",
        description:
            "Food-safe, non-toxic water tank waterproofing in Delhi NCR. Fix leakage, stop algae growth & extend tank life. Free inspection.",
        url: "https://www.bhawanitechnologies.in/services/water-tank-waterproofing",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "Is water tank waterproofing safe for drinking water?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Bhawani Technologies uses NSF/WRAS-certified, food-grade non-toxic coatings specifically approved for potable water contact. Products like Fosroc Nitoseal and Dr. Fixit Roofseal are completely safe for drinking water storage once fully cured.",
            },
        },
        {
            "@type": "Question",
            name: "How often should a water tank be waterproofed?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A properly waterproofed water tank lasts 7–10 years. We recommend inspecting the tank lining every 5 years. If you notice green algae growth, musty smell, or visible cracks, it's time to re-line the tank regardless of age.",
            },
        },
        {
            "@type": "Question",
            name: "How much does water tank waterproofing cost in Delhi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Water tank waterproofing in Delhi typically costs ₹150–₹300 per sq. ft. of tank internal surface depending on the tank size, existing condition, and system used. Contact Bhawani Technologies at +91 76777 79418 for a free assessment and quote.",
            },
        },
        {
            "@type": "Question",
            name: "How long before I can use the tank after waterproofing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "After applying waterproofing treatment, the tank must cure for 48–72 hours before filling with water. We recommend a first fill and drain cycle before regular use. Bhawani Technologies provides complete curing and re-commissioning guidance.",
            },
        },
        {
            "@type": "Question",
            name: "Can water tank waterproofing stop algae growth?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. We use anti-microbial, algae-resistant coatings that create a smooth, non-porous surface that prevents algae, bacteria, and biofilm from adhering to the tank walls. This keeps your water cleaner between tank cleaning cycles.",
            },
        },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Water Tank Waterproofing",
    provider: {
        "@type": "LocalBusiness",
        name: "Bhawani Technologies",
        url: "https://www.bhawanitechnologies.in",
        telephone: "+917677779418",
    },
    areaServed: ["Delhi", "Noida", "Gurugram", "Faridabad", "Ghaziabad"],
    description:
        "Professional water tank waterproofing services in Delhi NCR using food-grade, non-toxic coatings to fix leakage, prevent algae growth, and extend tank life for underground and overhead concrete tanks.",
    serviceType: "Waterproofing",
    url: "https://www.bhawanitechnologies.in/services/water-tank-waterproofing",
};

const systems = [
    {
        name: "Cementitious Tank Lining (Food-Safe)",
        desc: "Multi-coat polymer-modified cementitious waterproofing specially formulated for potable water contact. Non-toxic, non-leaching, and highly durable.",
        benefits: ["NSF/food-safe approved", "Non-toxic to water quality", "Excellent adhesion to concrete"],
    },
    {
        name: "Crystalline Waterproofing",
        desc: "Reactive crystalline compounds penetrate the concrete matrix and block pores and capillaries with insoluble crystals — permanently stopping water seepage.",
        benefits: ["Self-healing for new cracks", "Penetrates deep into concrete", "Permanent protection"],
    },
    {
        name: "Epoxy Tank Coating",
        desc: "Food-grade two-part epoxy coating applied to create a chemically resistant, smooth, non-porous inner lining that resists algae, staining, and corrosion.",
        benefits: ["Anti-algae & anti-microbial", "Smooth non-porous surface", "Chemical resistant"],
    },
    {
        name: "PU Injection Grouting (Crack Sealing)",
        desc: "High-pressure PU grout injection into active cracks in tank walls — instantly stops water from escaping through structural crack points.",
        benefits: ["Stops active leaks instantly", "Flexible — accommodates movement", "Minimal downtime"],
    },
    {
        name: "Joint & Penetration Sealing",
        desc: "Flexible PU or polysulphide joint sealant applied at construction joints, floor-wall junctions, and pipe penetrations — the most common failure points.",
        benefits: ["Covers high-movement joints", "Watertight pipe sleeve seals", "Durable elastic sealant"],
    },
];

const whyUs = [
    "Food-safe, non-toxic certified materials only",
    "Free site inspection across Delhi NCR",
    "Underground & overhead tank specialists",
    "10+ years of tank waterproofing experience",
    "Premium brands: Fosroc, Pidilite, Penetron",
    "Post-project re-commissioning guidance",
];

export default function WaterTankWaterproofingPage() {
    return (
        <div className="bg-white mt-20">
            <Script
                id="tank-faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Script
                id="tank-service-schema"
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
                        <span className="text-gray-600 text-sm">Water Tank Waterproofing</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Water Tank Waterproofing<br />
                        <span className="text-brand-primary">in Delhi NCR</span>
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                        Fix tank leakage, stop algae growth &amp; protect water quality with food-safe, non-toxic coatings. Free inspection for underground &amp; overhead tanks across Delhi NCR.
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
                        Why Water Tank Waterproofing Is Critical for Delhi Homes
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-4">
                        Delhi's concrete water tanks — whether underground sumps or overhead storage — are constantly exposed to water pressure, soil chemicals, and temperature changes. Over time, construction joints crack, walls develop porosity, and algae colonise the rough concrete surface, contaminating your drinking water supply.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        A properly waterproofed water tank not only stops costly water loss but also creates a smooth, non-porous surface that is resistant to algae and bacterial growth — protecting both your property and your family's health.
                    </p>
                </div>

                {/* Systems */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3 block">Our Systems</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Water Tank Waterproofing Systems We Use</h2>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Water Tank Waterproofed Today</h2>
                        <p className="text-green-50 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                            Free site inspection anywhere in Delhi NCR. We use only food-safe, non-toxic coatings. Your water quality and tank integrity are our priority.
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
