import { CheckCircle, Phone, ArrowRight, ShieldCheck, Wrench, Thermometer, Droplets, Layers, Building, HelpCircle, FileText } from "lucide-react";
import Link from "next/link";


export const metadata = {
    title: "Roof Waterproofing Services in Delhi NCR | Cost Per Sq Ft & Best Solutions",
    description:
        "Delhi NCR's #1 roof waterproofing contractors. Stop concrete roof leakage, cracks & seepage with Dr. Fixit, Asian Paints Damp Proof, APP membranes, & PU heat proof paint. Get free inspection & price quote.",
    keywords: [
        "roof waterproofing",
        "roof waterproofing near me",
        "roof leakage solution",
        "waterproof roof coating",
        "waterproof roof paint",
        "dr fixit roofseal",
        "dr fixit roof waterproofing",
        "asian paints roof waterproofing",
        "roof waterproofing cost per sq ft",
        "roof waterproofing rate per sq ft with material",
        "concrete roof waterproofing",
        "how to stop water leakage from concrete roof",
        "waterproof sheet for roof",
        "waterproof chemical for roof",
        "heat proof paint for roof",
        "roof waterproofing delhi",
        "terrace roof waterproofing"
    ],
    alternates: {
        canonical: "https://www.bhawanitechnologies.in/services/roof-waterproofing",
    },
    openGraph: {
        title: "Roof Waterproofing in Delhi NCR | Top Solutions, Cost Per Sq Ft & Inspection",
        description:
            "Permanent roof waterproofing, concrete crack repair, and heat-reflective paint solutions across Delhi, Noida, Gurgaon, Ghaziabad & Faridabad. 10+ years experience, 500+ projects.",
        url: "https://www.bhawanitechnologies.in/services/roof-waterproofing",
    },
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is the best roof waterproofing solution in Delhi NCR?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "The best roof waterproofing solution depends on your roof type. For flat concrete RCC roofs with severe water pooling, torch-on APP bitumen membrane sheets (3mm/4mm) or high-build Polyurethane (PU) liquid coatings offer 10–15 years of seamless protection. For thermal insulation and sun protection, solar-reflective elastomeric acrylic coatings like Dr. Fixit Roofseal and Asian Paints Damp Proof are ideal.",
            },
        },
        {
            "@type": "Question",
            name: "How much does roof waterproofing cost per sq ft in Delhi?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Roof waterproofing in Delhi NCR typically costs between ₹40 and ₹180 per sq. ft. including labor and materials. Basic acrylic elastomeric coating ranges from ₹40–₹65/sq. ft., polymer-modified cementitious slurry costs ₹55–₹85/sq. ft., while heavy-duty APP bitumen membrane sheets and PU coatings range from ₹90–₹180/sq. ft.",
            },
        },
        {
            "@type": "Question",
            name: "How to stop water leakage from a concrete roof slab?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "To permanently stop concrete roof slab leakage: 1) Thoroughly clean surface dirt, algae, and loose debris; 2) V-groove and seal structural cracks using polymer-modified mortar or polyurethane sealant; 3) Treat parapet joints and drainage outlets with flashing tape or fiber mesh; 4) Apply a primer coat followed by 2-3 coats of elastomeric liquid membrane or torch-applied APP waterproof sheets.",
            },
        },
        {
            "@type": "Question",
            name: "Which chemical is best for roof waterproofing — Dr. Fixit or Asian Paints?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Both brands offer premium construction chemicals. Dr. Fixit (Pidilite) features specialised solutions like Dr. Fixit Roofseal Classic/Top Coat and Dr. Fixit 301 Pidicrete URP for concrete repair. Asian Paints SmartCare Damp Proof and Damp Proof Ultra provide excellent elastomeric crack-bridging and up to 10 years warranty. Bhawani Technologies is an authorized applicator for both brands.",
            },
        },
        {
            "@type": "Question",
            name: "Does waterproof roof paint also reduce indoor heat?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. High-performance solar-reflective roof coatings (Cool Roof coatings) reflect up to 85% of solar radiation. This reduces roof surface temperature by up to 10°C–15°C and interior room temperatures by 3°C–7°C, saving significant air-conditioning costs during Delhi summers.",
            },
        },
        {
            "@type": "Question",
            name: "Can roof waterproofing be done on tiled roofs without breaking tiles?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Bhawani Technologies provides transparent and tinted polyurethane/polyurea coatings and high-adhesion tile joint epoxy grouting that seals tile joints and porous surfaces without needing to dismantle or damage existing tiles.",
            },
        },
        {
            "@type": "Question",
            name: "How long does professional roof waterproofing last?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Depending on the system selected: Acrylic elastomeric coatings last 5–7 years; PU liquid membranes last 8–10 years; APP torch-on bitumen membranes last 10–15 years; and crystalline waterproofing with structural concrete rehabilitation can last 15+ years.",
            },
        },
    ],
};

const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Roof Waterproofing & Leakage Solution",
    provider: {
        "@type": "LocalBusiness",
        name: "Bhawani Technologies",
        url: "https://www.bhawanitechnologies.in",
        telephone: "+917677779418",
        address: {
            "@type": "PostalAddress",
            streetAddress: "C-288, 3rd Floor, New Ashok Nagar",
            addressLocality: "New Delhi",
            addressRegion: "Delhi",
            postalCode: "110096",
            addressCountry: "IN",
        },
    },
    areaServed: [
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Noida" },
        { "@type": "City", name: "Gurugram" },
        { "@type": "City", name: "Faridabad" },
        { "@type": "City", name: "Ghaziabad" },
    ],
    description:
        "Comprehensive roof waterproofing, concrete crack repair, APP membrane sheet laying, heat proof cooling paint application, and PU liquid coatings in Delhi NCR.",
    serviceType: "Roof Waterproofing Services",
    url: "https://www.bhawanitechnologies.in/services/roof-waterproofing",
};

const solutions = [
    {
        title: "APP Bitumen Membrane & Waterproof Sheets",
        tag: "10-15 Years Life",
        desc: "Torch-applied modified bitumen membrane sheets (3mm & 4mm) with polyester reinforcement. Best for flat RCC slabs with high pooling risk.",
        specs: ["Superior tensile strength & puncture resistance", "Torch-on seamless fusion", "Resists thermal expansion"],
    },
    {
        title: "Polyurethane (PU) Liquid Membrane",
        tag: "Seamless & UV Stable",
        desc: "Spray/roller-applied elastomeric liquid rubber coating forming a monolithic joint-free waterproof skin. Bridges structural cracks up to 2mm.",
        specs: ["Continuous jointless protection", "Crack bridging flexibility (>400% elongation)", "Walkable & weather-proof"],
    },
    {
        title: "Cool Roof Heat & Rain Proof Paint",
        tag: "Lowers Temp 3-7°C",
        desc: "Advanced elastomeric solar-reflective roof coatings (Dr. Fixit Roofseal / Asian Paints SmartCare). Dual-action protection against monsoon leaks and summer heat.",
        specs: ["High Solar Reflective Index (SRI > 100)", "Anti-fungal & anti-algae", "Cuts air conditioning energy costs"],
    },
    {
        title: "Concrete Roof Crack Repair & Slab Sealing",
        tag: "Structural Restoration",
        desc: "Targeted concrete rehabilitation for leaking roofs. Pressure grout injection, polymer-modified mortars, and glass fiber mesh reinforcement.",
        specs: ["High-pressure PU crack injection", "Restores concrete integrity", "Stops active seepage permanently"],
    },
    {
        title: "Polymer Cementitious Waterproofing Slurry",
        tag: "Cost-Effective & Durable",
        desc: "2-3 coats of synthetic polymer-modified cementitious coating. Forms an impenetrable barrier deeply bonded to the concrete substrate.",
        specs: ["Exceptional bond strength to RCC", "Non-toxic & eco-friendly", "Ideal for base slabs & water storage roofs"],
    },
    {
        title: "Tiled Roof & Metal Sheet Waterproofing",
        tag: "No Tile Demolition Needed",
        desc: "Specialized transparent coatings, epoxy joint sealants, and bitumen flashing tapes for ceramic tile terraces, asbestos, and GI metal sheet roofs.",
        specs: ["Retains original tile aesthetics", "Flashing tape for roof joints & screws", "Zero debris or noisy demolition"],
    },
];

const priceTable = [
    { system: "Acrylic Elastomeric Waterproof Paint (2-3 Coats)", durability: "5–7 Years", rate: "₹40 – ₹65 / sq ft", brands: "Dr. Fixit Roofseal / Asian Paints Damp Proof" },
    { system: "Fiber Mesh Reinforced Polymer Coating", durability: "7–10 Years", rate: "₹60 – ₹90 / sq ft", brands: "Fosroc Brushbond / SikaTop 107" },
    { system: "APP Torch-on Bitumen Membrane Sheet (3mm/4mm)", durability: "10–15 Years", rate: "₹95 – ₹145 / sq ft", brands: "Tikidan / STP / Iwl / SikaBit" },
    { system: "High-Build Polyurethane (PU) Liquid Coating", durability: "10–12 Years", rate: "₹110 – ₹180 / sq ft", brands: "Dr. Fixit Newcoat / Fosroc Nitoproof" },
    { system: "Concrete Crack Repair & High-Pressure Injection", durability: "Permanent", rate: "Custom Inspection Quote", brands: "PU Foam Grout / Epoxy Resins" },
];

export default function RoofWaterproofingPage() {
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
                        <span className="text-gray-600 text-sm">Roof Waterproofing</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Roof Waterproofing Services<br />
                        <span className="text-brand-primary">in Delhi NCR</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
                        Permanent roof leakage solutions, concrete crack repairs, APP membrane sheets &amp; heat-reflective cooling paint. Certified applicators for <strong>Dr. Fixit, Asian Paints, Fosroc &amp; Sika</strong> across Delhi, Noida, Gurgaon &amp; Faridabad.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="tel:+917677779418"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-lg shadow-green-900/20"
                        >
                            <Phone size={18} />
                            Call for Free Inspection: +91 76777 79418
                        </a>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary font-bold rounded-xl border-2 border-brand-primary hover:bg-brand-light transition-colors"
                        >
                            Get Price Quote Per Sq Ft
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-gray-700">
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-slate-200">
                            <ShieldCheck className="text-green-600" size={18} /> 10+ Years Experience
                        </div>
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-slate-200">
                            <CheckCircle className="text-green-600" size={18} /> 500+ Roofs Protected
                        </div>
                        <div className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full border border-slate-200">
                            <Thermometer className="text-green-600" size={18} /> Up to 7°C Heat Reduction
                        </div>
                    </div>
                </div>

                <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-20">

                {/* Core Problem & Why It Happens */}
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3 block">Expert Problem Diagnosis</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Why Do Concrete Roofs Leak in Delhi NCR?
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        Delhi’s extreme climate ranges from 2°C in winter to over 47°C in peak summer. This constant 45°C thermal swing causes concrete slabs to expand and contract repeatedly, forming invisible micro-fissures and widening cold construction joints.
                    </p>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        When the monsoon arrives, standing water seeps through cracked cement plaster and unsealed parapet corners, corroding the inner TMT reinforcement steel and causing rust expansion, ceiling flaking, and damp wall patches in the rooms below. Spot patching with regular white cement fails within months — a comprehensive waterproof coating system is essential.
                    </p>
                </div>

                {/* Complete Roof Waterproofing Solutions */}
                <div className="mb-24">
                    <div className="text-center mb-14">
                        <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3 block">Complete Solutions Range</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Roof Waterproofing Systems &amp; Treatments</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto mt-3">We engineer the right waterproofing specification for your concrete slab, tiled terrace, or industrial shed.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((item, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:bg-white transition-all duration-300 flex flex-col justify-between">
                                <div>
                                    <span className="inline-block bg-green-100 text-brand-primary text-xs font-bold px-3 py-1 rounded-full mb-4">
                                        {item.tag}
                                    </span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
                                </div>
                                <div className="space-y-2.5 pt-4 border-t border-slate-200">
                                    {item.specs.map((spec, j) => (
                                        <div key={j} className="flex items-start gap-2 text-xs text-gray-700">
                                            <CheckCircle className="text-green-600 shrink-0 mt-0.5" size={14} />
                                            <span>{spec}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Price Table / Cost per sq ft */}
                <div className="mb-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 md:p-14 shadow-2xl">
                    <div className="text-center mb-10">
                        <span className="text-green-400 font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block">Transparent Market Pricing</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Roof Waterproofing Cost Per Sq Ft in Delhi NCR</h2>
                        <p className="text-slate-300 max-w-2xl mx-auto text-sm md:text-base">
                            Rates include labor, mechanical surface preparation, high-grade primers, and branded waterproof chemical application.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-slate-700 text-green-400 text-sm">
                                    <th className="py-4 px-4 font-semibold">Waterproofing System</th>
                                    <th className="py-4 px-4 font-semibold">Expected Lifespan</th>
                                    <th className="py-4 px-4 font-semibold">Approx. Rate Per Sq Ft</th>
                                    <th className="py-4 px-4 font-semibold">Recommended Brands</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800 text-sm">
                                {priceTable.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-slate-800/60 transition-colors">
                                        <td className="py-4 px-4 font-medium text-white">{row.system}</td>
                                        <td className="py-4 px-4 text-slate-300">{row.durability}</td>
                                        <td className="py-4 px-4 text-green-400 font-bold">{row.rate}</td>
                                        <td className="py-4 px-4 text-slate-400">{row.brands}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mt-8 text-center text-xs text-slate-400">
                        * Exact price depends on total square footage, degree of crack damage, existing screed slope, and roof accessibility. Free on-site inspection provided.
                    </div>
                </div>

                {/* 5-Step Process */}
                <div className="mb-24">
                    <div className="text-center mb-14">
                        <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3 block">Engineering Methodology</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">How Roof Waterproofing Is Done (5-Step Process)</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {[
                            { step: "01", title: "Surface Prep", desc: "Mechanical wire-brushing, high-pressure washing to remove dust, moss, and loose plaster." },
                            { step: "02", title: "Crack V-Groove", desc: "Chiseling structural cracks into a V-profile and filling with polymer-modified mortar or PU sealant." },
                            { step: "03", title: "Fillet & Junctions", desc: "Creating 45° angle coving fillets at floor-parapet wall joints and around drain pipes with fiber tape." },
                            { step: "04", title: "Primer Application", desc: "Deep penetrating polymer primer coat to saturate the concrete pores and maximize chemical adhesion." },
                            { step: "05", title: "Multi-Coat Barrier", desc: "2-3 cross coats of elastomeric liquid membrane or torching 3-4mm APP bitumen sheets with overlap." },
                        ].map((s, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                                <div className="text-3xl font-extrabold text-brand-primary mb-3">{s.step}</div>
                                <h4 className="font-bold text-gray-900 mb-2">{s.title}</h4>
                                <p className="text-gray-600 text-xs leading-relaxed">{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Brands We Use */}
                <div className="mb-24 bg-slate-50 rounded-3xl p-10 md:p-14 border border-slate-100 text-center">
                    <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3 block">Certified Applicator</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Industry-Leading Waterproofing Chemical Brands</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-sm mb-8">
                        We never use adulterated or low-grade materials. All chemicals and membranes are sourced directly from authorized company distributors:
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 font-bold text-lg md:text-xl text-gray-800">
                        <span className="px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-200">Dr. Fixit (Pidilite)</span>
                        <span className="px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-200">Asian Paints SmartCare</span>
                        <span className="px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-200">Fosroc Chemicals</span>
                        <span className="px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-200">Sika India</span>
                        <span className="px-4 py-2 bg-white rounded-xl shadow-sm border border-slate-200">Berger Home Shield</span>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-24 max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3 block">Got Questions?</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Roof Waterproofing FAQs</h2>
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

                {/* CTA Callout */}
                <div className="bg-brand-primary rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Protect Your Roof from Monsoon Leakage Today</h2>
                        <p className="text-green-50 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                            Book a free site inspection anywhere in Delhi, Noida, Gurgaon, Faridabad, or Ghaziabad. Our specialist will assess your slab condition and provide a detailed quotation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+917677779418"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-brand-primary font-bold rounded-xl hover:bg-green-50 transition-colors shadow-lg"
                            >
                                <Phone size={18} />
                                Call +91 76777 79418
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-700 text-white font-bold rounded-xl hover:bg-green-800 transition-colors border border-green-600"
                            >
                                Request Free Inspection
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
