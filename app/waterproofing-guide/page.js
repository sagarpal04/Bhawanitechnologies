import {
    CheckCircle,
    Phone,
    ArrowRight,
    ShieldCheck,
    Layers,
    Wrench,
    HelpCircle,
    Droplets,
    FileText,
    Award,
    Calendar,
    User,
    Check,
    X as CloseIcon,
    AlertTriangle,
    BadgePercent,
    ExternalLink
} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Waterproofing Services in Delhi NCR | Roof, Terrace, Bathroom & Basement | Bhawani Technologies",
    description:
        "What is waterproofing, which waterproofing type is best, and what does it cost? Bhawani Technologies, a Dr. Fixit certified waterproofing company in Delhi NCR, explains terrace, roof, bathroom, basement and water tank waterproofing. Free inspection: +91 76777 79418.",
    keywords: [
        "waterproofing services Delhi NCR",
        "best waterproofing company in Delhi",
        "waterproofing contractors in Delhi NCR",
        "roof waterproofing",
        "terrace waterproofing",
        "bathroom waterproofing",
        "basement waterproofing",
        "water tank waterproofing",
        "waterproofing cost",
        "waterproofing membrane",
        "liquid waterproofing",
        "cementitious waterproofing",
        "crystalline waterproofing",
        "PU injection grouting",
        "APP membrane waterproofing",
        "EPDM waterproofing",
        "Dr. Fixit waterproofing",
        "waterproofing chemical",
        "damp proofing vs waterproofing",
        "leakage treatment",
        "crack repair",
        "epoxy flooring"
    ],
    alternates: {
        canonical: "https://www.bhawanitechnologies.in/waterproofing-guide",
    },
    openGraph: {
        title: "Waterproofing Services in Delhi NCR | Roof, Terrace, Bathroom & Basement",
        description:
            "Complete guide to waterproofing services, systems, materials, costs, and comparisons by Bhawani Technologies, Dr. Fixit Certified Waterproofing Company in Delhi NCR.",
        url: "https://www.bhawanitechnologies.in/waterproofing-guide",
        type: "article",
    },
};

const guideSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Complete Waterproofing Guide & Waterproofing Services in Delhi NCR",
    description: "What is waterproofing, which waterproofing type is best, and what does it cost? Terrace, roof, bathroom, basement, and water tank waterproofing explained by Bhawani Technologies.",
    author: {
        "@type": "Person",
        name: "@jkknj"
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
    datePublished: "2026-11-21",
    dateModified: "2026-11-21",
    mainEntityOfPage: "https://www.bhawanitechnologies.in/waterproofing-guide"
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What is waterproofing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Waterproofing is the treatment of a surface with a membrane, coating, chemical or admixture so that water cannot pass through it. It protects roofs, terraces, bathrooms, basements, tanks and walls from leakage and dampness."
            }
        },
        {
            "@type": "Question",
            name: "What is a waterproofing membrane?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A waterproofing membrane is a continuous layer, either liquid applied or a prefabricated sheet such as APP bitumen, EPDM or HDPE, that forms a barrier against water."
            }
        },
        {
            "@type": "Question",
            name: "Which type of waterproofing is best for a roof or terrace?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "For a long-life roof, a PU liquid membrane or a 4 mm APP bitumen membrane is usually best. An acrylic roof waterproofing coating such as Dr. Fixit Roofseal is a good budget choice that also reduces heat."
            }
        },
        {
            "@type": "Question",
            name: "What is the best waterproofing for a bathroom?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A flexible, polymer-modified cementitious waterproofing with corner reinforcement and waterproofing tape at joints, applied before tiling."
            }
        },
        {
            "@type": "Question",
            name: "Do kitchens, toilets and laundries need waterproofing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Any wet area, including the kitchen sink zone, toilet and laundry, benefits from waterproofing to stop seepage into walls and the floor below."
            }
        },
        {
            "@type": "Question",
            name: "How much does waterproofing cost?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Roof waterproofing in Delhi NCR commonly ranges from roughly ₹13 to ₹95 per sq ft depending on the system. Bathroom, basement and tank waterproofing are priced per job. Call +91 76777 79418 for a free estimate."
            }
        },
        {
            "@type": "Question",
            name: "How long does waterproofing last?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "From about 5 to 7 years for an acrylic coating to 15 to 25 years for EPDM or PVC/TPO membranes, when properly installed and maintained."
            }
        },
        {
            "@type": "Question",
            name: "How many coats of waterproofing are needed?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Usually two or more coats, with reinforcement mesh where needed. The exact number depends on the product, so we follow the manufacturer's specification."
            }
        },
        {
            "@type": "Question",
            name: "How long should waterproofing dry before tiling?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "It must cure fully and pass a flood test first. Drying time varies by product and weather, so we confirm it from the product data sheet."
            }
        },
        {
            "@type": "Question",
            name: "Can waterproofing be done on a wet surface, or in the rain?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "No. We apply waterproofing on a clean, dry surface in dry weather. Some specialised products tolerate damp concrete, but rain-time application is avoided."
            }
        },
        {
            "@type": "Question",
            name: "Can I waterproof a bathroom or balcony without removing tiles?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Often yes. Depending on the condition of the tiles, we can use injection grouting or a tile-top waterproofing system. We confirm this at inspection."
            }
        },
        {
            "@type": "Question",
            name: "What is the difference between waterproofing and damp proofing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Waterproofing resists liquid water under pressure. Damp proofing blocks moisture and rising damp only. Use waterproofing for roofs, tanks and basements."
            }
        },
        {
            "@type": "Question",
            name: "What is the difference between waterproof and water resistant?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Waterproof means water cannot pass through. Water resistant means the material resists water only to a limited degree or for a limited time."
            }
        },
        {
            "@type": "Question",
            name: "What is positive and negative side waterproofing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Positive side waterproofing is applied on the water-entry side, such as outside a basement wall. Negative side is applied on the inside face when the outside cannot be reached."
            }
        },
        {
            "@type": "Question",
            name: "What is cementitious waterproofing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A polymer-modified cement-based slurry applied by brush or trowel, commonly used in bathrooms, tanks and basements."
            }
        },
        {
            "@type": "Question",
            name: "What is crystalline waterproofing?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "A slurry or admixture that reacts with water and cement to form crystals in concrete pores, giving long-term protection and self-healing of fine cracks."
            }
        },
        {
            "@type": "Question",
            name: "What is PU injection grouting?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Polyurethane resin is injected into cracks, joints and active leaks to stop water flow, commonly used in basements and retaining walls."
            }
        },
        {
            "@type": "Question",
            name: "Is waterproofing chemical or paint toxic? Does it smell?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Some solvent-based products have a strong smell while curing. We use proper ventilation and PPE. Water-based and low-VOC products are available on request."
            }
        },
        {
            "@type": "Question",
            name: "Does waterproofing need a licence or certificate?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "In general there is no single national licence for waterproofing contractors in India, so check for manufacturer certification, such as Dr. Fixit certified waterproofer status, and ask for a written warranty."
            }
        },
        {
            "@type": "Question",
            name: "Is waterproofing worth it?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. The cost of waterproofing is far lower than repeated repainting, plaster repair, rebar corrosion repair and structural damage from leakage."
            }
        },
        {
            "@type": "Question",
            name: "Who is the best waterproofing company in Delhi NCR?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Bhawani Technologies is a trusted waterproofing contractor in Delhi NCR, a Dr. Fixit Certified Skilled Waterproofer with 500+ projects and 10+ years of experience."
            }
        }
    ]
};

const terminologyComparison = [
    {
        term: "Waterproofing",
        meaning: "Resists liquid water, even under pressure",
        typicalUse: "Terrace, roof, bathroom, basement, tank, pool"
    },
    {
        term: "Damp proofing",
        meaning: "Blocks moisture rising or seeping through, but not standing water",
        typicalUse: "Interior walls with rising damp, floors above ground"
    },
    {
        term: "Tanking",
        meaning: "Waterproofing a below-ground structure from inside or outside",
        typicalUse: "Basement and lift pit"
    },
    {
        term: "Water repellent",
        meaning: "Makes a surface shed water, but is not a barrier",
        typicalUse: "Facade, brick and stone, fabric"
    },
    {
        term: "Water resistant",
        meaning: "Resists water for a limited time or depth",
        typicalUse: "Water resistant plywood, MDF, plasterboard"
    },
    {
        term: "Weatherproof",
        meaning: "Withstands rain, wind and sun",
        typicalUse: "External cladding and coatings"
    }
];

const systemComparison = [
    {
        type: "Cementitious waterproofing",
        whatItIs: "Polymer-modified cement slurry (for example Dr. Fixit Pidifin 2K, Thoroseal)",
        bestFor: "Bathroom, water tank, basement, toilet",
        watchOutFor: "Rigid: not ideal for exposed roofs with movement"
    },
    {
        type: "Crystalline waterproofing",
        whatItIs: "Slurry or admixture (for example Xypex) that grows crystals in concrete pores",
        bestFor: "Basement, tank, foundation, podium",
        watchOutFor: "Needs sound, damp concrete"
    },
    {
        type: "Acrylic elastomeric coating",
        whatItIs: "Flexible, solar reflective roof waterproofing paint (for example Dr. Fixit Roofseal)",
        bestFor: "Terrace and roof, heat reduction",
        watchOutFor: "Needs recoating every few years"
    },
    {
        type: "PU (polyurethane) liquid membrane",
        whatItIs: "Seamless liquid applied waterproofing, high elongation",
        bestFor: "Roof with pipes and complex details, balcony",
        watchOutFor: "Needs correct primer and dry surface"
    },
    {
        type: "APP / SBS bitumen membrane",
        whatItIs: "Torch-on sheet with polyester core (3 mm or 4 mm)",
        bestFor: "Flat RCC roof, terrace, basement",
        watchOutFor: "Seams and flashing need skilled work"
    },
    {
        type: "EPDM rubber membrane",
        whatItIs: "Single-ply synthetic rubber sheet",
        bestFor: "Large commercial and industrial roofs",
        watchOutFor: "Higher upfront cost"
    },
    {
        type: "TPO / PVC membrane",
        whatItIs: "Heat-welded single-ply sheet",
        bestFor: "Commercial roofs",
        watchOutFor: "Needs trained applicators"
    },
    {
        type: "Bituminous coating",
        whatItIs: "Bitumen based coating or liquid asphalt",
        bestFor: "Foundation, below-ground walls",
        watchOutFor: "Poor UV resistance when exposed"
    },
    {
        type: "Epoxy waterproofing",
        whatItIs: "Two-part epoxy coating",
        bestFor: "Industrial floors, chemical areas",
        watchOutFor: "Rigid, not for moving cracks"
    },
    {
        type: "Integral waterproofing",
        whatItIs: "Admixture mixed into concrete or mortar",
        bestFor: "New slab, screed, plaster",
        watchOutFor: "Cannot fix an existing leak"
    },
    {
        type: "PU injection grouting",
        whatItIs: "Resin injected into cracks and joints",
        bestFor: "Active leaks, cracks, basement walls",
        watchOutFor: "Treats the crack, not the whole surface"
    },
    {
        type: "Bentonite (geotextile)",
        whatItIs: "Swelling clay layer",
        bestFor: "Basement and retaining walls",
        watchOutFor: "Needs confinement"
    }
];

const steps = [
    {
        title: "Free site inspection",
        desc: "We find the source of leakage and check slope, drainage, cracks and penetrations."
    },
    {
        title: "Surface preparation",
        desc: "Wire brushing, pressure washing and removal of loose material, algae and old waterproofing."
    },
    {
        title: "Crack repair and coving",
        desc: "Cracks are chased and filled with polymer mortar, and 45° angle fillets are made at wall-to-floor corners."
    },
    {
        title: "Primer",
        desc: "A primer matched to the surface is applied so the waterproofing coat bonds well. Concrete and screeds are properly primed."
    },
    {
        title: "Waterproofing coats",
        desc: "Two or more coats of the waterproofing coating or membrane are applied, with fiberglass mesh or fibre cloth between coats on roofs and critical joints."
    },
    {
        title: "Curing",
        desc: "Each coat must cure before the next. Waterproofing drying time follows the manufacturer's technical data sheet."
    },
    {
        title: "Flood test",
        desc: "The area is ponded or filled with water for 24 to 72 hours to independently confirm there is no leak."
    },
    {
        title: "Protection and finish",
        desc: "A screed, tile or protective wear layer is added. Done before tiling in bathrooms and before floor finishing on terraces."
    }
];

const costTable = [
    { system: "Acrylic elastomeric paint", rate: "₹13–20", life: "5–7 years" },
    { system: "PU liquid membrane", rate: "₹25–40", life: "8–12 years" },
    { system: "APP bitumen sheet (3 mm)", rate: "₹30–45", life: "10–15 years" },
    { system: "APP bitumen sheet (4 mm)", rate: "₹40–55", life: "12–18 years" },
    { system: "EPDM rubber membrane", rate: "₹55–80", life: "15–20 years" },
    { system: "PVC / TPO single-ply", rate: "₹65–95", life: "20–25 years" },
    { system: "Crystalline waterproofing", rate: "₹30–45", life: "Structural life" }
];

const brandProducts = [
    { product: "Dr. Fixit Roofseal", type: "Acrylic elastomeric roof coating", bestUse: "Terrace and roof waterproofing, heat reduction" },
    { product: "Dr. Fixit Pidifin 2K", type: "Two-component cementitious", bestUse: "Water tank, bathroom, wet areas" },
    { product: "Dr. Fixit Dampguard", type: "Damp proofing treatment", bestUse: "Interior wall dampness" },
    { product: "Asian Paints SmartCare Hydroloc", type: "PU liquid membrane", bestUse: "Terrace, roof, balcony" },
    { product: "Asian Paints SmartCare Damp Proof", type: "Interior damp treatment", bestUse: "Interior walls (not for roofs)" },
    { product: "Fosroc Brushbond RFX", type: "Liquid applied membrane", bestUse: "Commercial and large projects" },
    { product: "STP Chemicals PU systems", type: "Industrial PU membranes", bestUse: "Factory roofs, warehouses" },
    { product: "APP bitumen membrane", type: "Torch-on sheet", bestUse: "Flat RCC roof, terrace, basement" },
    { product: "EPDM membrane", type: "Single-ply rubber", bestUse: "Commercial and industrial roofs" }
];

export default function WaterproofingGuidePage() {
    return (
        <div className="bg-white mt-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(guideSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Header / Hero */}
            <header className="bg-gradient-to-b from-brand-light via-slate-50 to-white py-16 lg:py-24 border-b border-slate-100">
                <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                    <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-brand-primary">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span className="text-gray-400">/</span>
                        <Link href="/services" className="hover:underline">Services</Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-gray-600">Waterproofing Guide</span>
                    </div>

                    <div className="flex items-center gap-4 text-xs md:text-sm text-gray-500 mb-6">
                        <span className="flex items-center gap-1.5 bg-green-50 text-green-700 px-3 py-1 rounded-full border border-green-200 font-semibold">
                            <Award size={14} /> Dr. Fixit Certified Waterproofer
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                        Complete Waterproofing Guide &amp; Waterproofing Services in Delhi NCR
                    </h1>

                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                        Waterproofing is the process of making a building surface resist water so that rain, seepage, dampness and leakage cannot damage the structure. Bhawani Technologies is a waterproofing company in Delhi NCR that supplies and applies waterproofing systems for the terrace, roof, bathroom, basement, water tank, swimming pool, kitchen and walls across Delhi, Noida, Gurgaon, Ghaziabad and Faridabad.
                    </p>

                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="space-y-1">
                            <p className="font-bold text-gray-900 text-lg">Looking for a direct consultation?</p>
                            <p className="text-sm text-gray-600">
                                This guide covers systems, rates, durability &amp; repairs. If you would rather talk directly, call us for a free site inspection.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3 shrink-0">
                            <a
                                href="tel:+917677779418"
                                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-primary text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-md text-sm"
                            >
                                <Phone size={16} /> +91 76777 79418
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-100 text-gray-800 font-bold rounded-xl hover:bg-slate-200 transition-colors text-sm"
                            >
                                Book Free Inspection <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Content Container */}
            <main className="container mx-auto px-6 md:px-12 py-16 max-w-5xl">

                {/* Section 1: What is Waterproofing */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                        What Is Waterproofing and Why Do We Need Waterproofing?
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        Waterproofing means applying a waterproofing membrane, coating, chemical or admixture so that water cannot pass through concrete, plaster, tiles or masonry. A waterproofing treatment is needed because water is the single biggest cause of damage to Indian buildings: it causes leakage, dampness, peeling paint, efflorescence, mold, rusting rebar and eventually structural damage.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {/* Why we need */}
                        <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 text-brand-primary">
                                <ShieldCheck size={22} /> Why we need waterproofing in Delhi NCR
                            </h3>
                            <ul className="space-y-3 text-sm md:text-base text-gray-700">
                                <li className="flex items-start gap-2.5">
                                    <span className="text-green-600 font-bold mt-1">•</span>
                                    <span>Roof surfaces swing from about <strong>2°C in winter to 48°C in summer</strong>, and this thermal movement cracks concrete slabs.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-green-600 font-bold mt-1">•</span>
                                    <span>Heavy monsoon rain finds every hairline crack, joint and pipe penetration.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-green-600 font-bold mt-1">•</span>
                                    <span>Standing water on a flat roof or terrace softens screed and corrodes the steel inside.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-green-600 font-bold mt-1">•</span>
                                    <span>Wet areas such as a bathroom, toilet, kitchen and laundry leak into the flat below if tile joints fail.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-green-600 font-bold mt-1">•</span>
                                    <span>A basement, water tank or swimming pool is under constant water pressure (hydrostatic pressure).</span>
                                </li>
                            </ul>
                        </div>

                        {/* Where waterproofing is needed */}
                        <div className="bg-emerald-50/50 p-6 md:p-8 rounded-2xl border border-emerald-100">
                            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2 text-emerald-800">
                                <Droplets size={22} /> Where waterproofing is needed
                            </h3>
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4">
                                Waterproofing is required on the roof and terrace, balcony, bathroom floor and walls, toilet, kitchen, laundry, basement, underground water tank, overhead water tank, swimming pool, external walls, foundation, slab and podium.
                            </p>
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed font-medium">
                                In residential construction it is applied wherever water is present or can enter the building.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 2: Terminology Comparison Table */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                        Waterproofing vs Damp Proofing vs Tanking vs Water Resistant
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        Waterproofing stops liquid water, including water under pressure. Damp proofing only blocks moisture and vapour. Many people ask about the difference between waterproofing and damp proofing, or whether waterproof is the same as water resistant. It is not.
                    </p>

                    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white text-sm">
                                    <th className="py-4 px-5 font-semibold">Term</th>
                                    <th className="py-4 px-5 font-semibold">What it means</th>
                                    <th className="py-4 px-5 font-semibold">Typical use</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 text-sm md:text-base text-gray-700">
                                {terminologyComparison.map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                                        <td className="py-4 px-5 font-bold text-gray-900">{row.term}</td>
                                        <td className="py-4 px-5">{row.meaning}</td>
                                        <td className="py-4 px-5 text-gray-600">{row.typicalUse}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-blue-50/70 p-6 rounded-2xl border border-blue-100 space-y-3 text-sm md:text-base text-gray-700">
                        <p>
                            <strong>Waterproofing is preferred over damp proofing</strong> wherever there is standing water, ponding or hydrostatic pressure, such as a roof, terrace, tank or basement. Damp proofing is a lighter, cheaper treatment suited to dry-side moisture problems.
                        </p>
                        <p>
                            A waterproofing membrane is also different from a vapour barrier: the membrane blocks liquid water, while a vapour barrier slows vapour moving through the wall or roof assembly.
                        </p>
                        <div className="pt-2 border-t border-blue-200/60">
                            <h4 className="font-bold text-gray-900 mb-1">Positive side vs negative side waterproofing</h4>
                            <p>
                                <strong>Positive side waterproofing</strong> is applied on the side where water enters, for example the outside of a basement wall. <strong>Negative side waterproofing</strong> is applied on the inside, away from the water source. Positive side is more durable and is the best method of waterproofing a basement when the outside is accessible. Negative side (also called blindside or interior basement waterproofing) is used when the exterior cannot be excavated.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 3: Types of Systems and Materials */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                        Types of Waterproofing Systems and Materials
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        There are many types of waterproofing methods, and the best waterproofing depends on the surface, the movement in the structure and the water pressure. The main types of waterproofing materials and chemicals are detailed below:
                    </p>

                    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-8">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white text-sm">
                                    <th className="py-4 px-5 font-semibold">Waterproofing type</th>
                                    <th className="py-4 px-5 font-semibold">What it is</th>
                                    <th className="py-4 px-5 font-semibold">Best for</th>
                                    <th className="py-4 px-5 font-semibold">Watch out for</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 text-sm text-gray-700">
                                {systemComparison.map((sys, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                                        <td className="py-4 px-5 font-bold text-gray-900">{sys.type}</td>
                                        <td className="py-4 px-5">{sys.whatItIs}</td>
                                        <td className="py-4 px-5 text-green-700 font-medium">{sys.bestFor}</td>
                                        <td className="py-4 px-5 text-red-600">{sys.watchOutFor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                            <h3 className="font-bold text-gray-900 text-base mb-2">Liquid vs Sheet Membrane</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Liquid membrane waterproofing is seamless and suits roofs with many pipes and corners. Sheet membranes such as APP, EPDM and HDPE come with factory-controlled thickness, but the seams must be sealed correctly. For a roof, both can work; the right choice comes down to the roof shape, budget and expected lifespan.
                            </p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                            <h3 className="font-bold text-gray-900 text-base mb-2">Cementitious vs Polyurethane</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Cementitious waterproofing is cheaper and bonds well to concrete in wet areas, but it is rigid. Polyurethane is flexible and handles thermal movement, which is why it is usually the better waterproofing for an exposed roof or balcony.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 4: Our Services */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                        Our Waterproofing Services in Delhi NCR
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Roof & Terrace */}
                        <div className="p-7 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 text-brand-primary">
                                Roof and Terrace Waterproofing
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                                Roof waterproofing and terrace waterproofing are our core services. We stop concrete roof leaks with APP bitumen membrane, PU liquid coating, Dr. Fixit Roofseal and elastomeric heat proof paint, always with proper crack repair, angle fillets and fiberglass mesh. Roof waterproofing treatment also cuts indoor heat, because a solar reflective waterproof roof coating lowers the surface temperature.
                            </p>
                            <div className="flex gap-4 text-xs md:text-sm font-semibold">
                                <Link href="/services/roof-waterproofing" className="text-brand-primary hover:underline flex items-center gap-1">
                                    Roof Waterproofing Page <ArrowRight size={14} />
                                </Link>
                                <Link href="/services/terrace-waterproofing" className="text-brand-primary hover:underline flex items-center gap-1">
                                    Terrace Waterproofing Page <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Bathroom */}
                        <div className="p-7 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 text-brand-primary">
                                Bathroom Waterproofing
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                                Bathroom waterproofing prevents tile joint leakage and damp walls in the flat below. The waterproofing goes on the floor and wall, up to the required height, with corner reinforcement and waterproofing tape at joints. Toilet waterproofing, kitchen waterproofing and laundry waterproofing follow the same multi-layer method. Waterproofing is done before laying tiles, then flood tested before tiling. If an old bathroom is leaking, we can often fix a failed bathroom waterproofing without breaking all the tiles, using injection or a tile-top treatment, depending on the condition.
                            </p>
                            <Link href="/services/bathroom-waterproofing" className="text-brand-primary hover:underline text-xs md:text-sm font-semibold flex items-center gap-1">
                                Bathroom Waterproofing Page <ArrowRight size={14} />
                            </Link>
                        </div>

                        {/* Basement */}
                        <div className="p-7 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 text-brand-primary">
                                Basement Waterproofing
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                                Basement waterproofing uses positive and negative side systems, crystalline waterproofing, PU injection grouting and drainage to control hydrostatic pressure. Foundation waterproofing and basement tanking protect underground parking, lift pits and podium slabs from seepage.
                            </p>
                            <Link href="/services/basement-waterproofing" className="text-brand-primary hover:underline text-xs md:text-sm font-semibold flex items-center gap-1">
                                Basement Waterproofing Page <ArrowRight size={14} />
                            </Link>
                        </div>

                        {/* Water Tank */}
                        <div className="p-7 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 text-brand-primary">
                                Water Tank Waterproofing
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                                Underground and overhead water tank waterproofing uses food-grade, non-toxic cementitious or crystalline systems that stop seepage and algae growth.
                            </p>
                            <Link href="/services/water-tank-waterproofing" className="text-brand-primary hover:underline text-xs md:text-sm font-semibold flex items-center gap-1">
                                Water Tank Waterproofing Page <ArrowRight size={14} />
                            </Link>
                        </div>

                        {/* Swimming Pool */}
                        <div className="p-7 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 text-brand-primary">
                                Swimming Pool Waterproofing
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Pool waterproofing needs a flexible, chemical-resistant membrane that is compatible with tile adhesive and can take constant water pressure.
                            </p>
                        </div>

                        {/* Wall, Balcony & Exterior */}
                        <div className="p-7 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 text-brand-primary">
                                Wall, Balcony and Exterior Waterproofing
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                Exterior wall waterproofing and external wall coatings stop rain penetration and dampness on walls. For balcony waterproofing we use PU or acrylic systems that can be applied over existing tiles where the tiles are sound. Damp wall treatment and plaster repair are done together with waterproofing and painting.
                            </p>
                        </div>

                        {/* Leakage Treatment & Grouting */}
                        <div className="p-7 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all md:col-span-2">
                            <h3 className="text-xl font-bold text-gray-900 mb-3 text-brand-primary">
                                Leakage Treatment, Crack Repair and Grouting
                            </h3>
                            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4">
                                For active leaks we use PU injection grouting, crack repair mortar and leakage treatment, followed by waterproofing of the whole area. We also provide epoxy flooring, polyurethane flooring, industrial epoxy coating and construction chemicals in Delhi.
                            </p>
                            <Link href="/services/epoxy-flooring" className="text-brand-primary hover:underline text-xs md:text-sm font-semibold flex items-center gap-1">
                                Epoxy Flooring Page <ArrowRight size={14} />
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Section 5: Step-by-Step Procedure */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                        How Waterproofing Is Done: Step-by-Step Procedure
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
                        The waterproofing process is the same in principle for a terrace, bathroom or basement, and surface preparation decides how long the waterproofing lasts.
                    </p>

                    <div className="space-y-4 mb-10">
                        {steps.map((st, i) => (
                            <div key={i} className="flex gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-200">
                                <span className="w-8 h-8 rounded-full bg-brand-primary text-white font-bold flex items-center justify-center shrink-0 text-sm">
                                    {i + 1}
                                </span>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base mb-1">{st.title}</h4>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{st.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Common questions about timing and sequence */}
                    <div className="bg-emerald-50/60 p-8 rounded-3xl border border-emerald-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2 text-emerald-900">
                            <HelpCircle size={22} className="text-emerald-700" /> Common Questions About Timing and Sequence
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base text-gray-700">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Waterproofing before or after plaster, screed and putty?</h4>
                                <p className="text-gray-600">Waterproofing goes on a sound, cured base: after the plaster or screed on the wall or slab, and before tiles or paint.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">When can you tile after waterproofing?</h4>
                                <p className="text-gray-600">Only after the product has cured and passed a flood test. We follow the product's curing time.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Can you walk on waterproofing?</h4>
                                <p className="text-gray-600">Not until it has cured. Light foot traffic is allowed after curing, and heavy use only after full return-to-service.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Can you waterproof in the rain or on a wet surface?</h4>
                                <p className="text-gray-600">No. Most coatings need a dry surface and dry weather. Some special products tolerate damp concrete, but we do not apply waterproofing in the rain.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Best time to waterproof in Delhi NCR:</h4>
                                <p className="text-green-800 font-semibold">October to mid-June, before the monsoon.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Can you paint over waterproofing?</h4>
                                <p className="text-gray-600">Often yes, using a compatible paint or topcoat. Check the product data sheet first.</p>
                            </div>
                            <div className="md:col-span-2">
                                <h4 className="font-bold text-gray-900 mb-1">Can you waterproof over old waterproofing, tiles or paint?</h4>
                                <p className="text-gray-600">Sometimes. It depends on how well the old layer is bonded, which is why we test before we recommend.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 6: Waterproofing Cost & Durability */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                        Waterproofing Cost, Coverage and How Long It Lasts
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        The cost of waterproofing depends on the system, the area, the surface condition and the access. Roof waterproofing cost per sq ft in Delhi NCR typically runs from about ₹13 to ₹95 including surface preparation, primer, application and testing. Rates below are indicative and are confirmed after a free inspection.
                    </p>

                    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white text-sm">
                                    <th className="py-4 px-5 font-semibold">Waterproofing system</th>
                                    <th className="py-4 px-5 font-semibold">Total cost (₹/sq ft)</th>
                                    <th className="py-4 px-5 font-semibold">Expected life</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 text-sm md:text-base text-gray-700">
                                {costTable.map((row, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                                        <td className="py-4 px-5 font-bold text-gray-900">{row.system}</td>
                                        <td className="py-4 px-5 text-green-700 font-bold">{row.rate}</td>
                                        <td className="py-4 px-5">{row.life}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base text-gray-700 mt-6">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                            <h4 className="font-bold text-gray-900 mb-2">What changes the price:</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Area in square feet or square metres, roof or bathroom, number of coats, brand, how much crack repair is needed, and whether old waterproofing must be removed. Basement waterproofing cost, bathroom waterproofing cost and foundation waterproofing cost are quoted per job after inspection, because interior and exterior basement waterproofing differ widely in scope.
                            </p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                            <h4 className="font-bold text-gray-900 mb-2">Cheapest is not always cheapest:</h4>
                            <p className="text-gray-600 leading-relaxed">
                                A low-cost acrylic coat needs recoating every 3 to 4 years, so over 20 years a thicker membrane often costs the same or less. Ask for the total cost of ownership, not only the rate per square foot.
                            </p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                            <h4 className="font-bold text-gray-900 mb-2">Coverage Guidelines:</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Waterproofing coverage per litre or per square metre depends on the product and the surface. Always check the product data sheet, and note that coverage is stated per coat. For example, Dr. Fixit Roofseal Classic is rated at about 15 to 18 sq ft per litre per coat, with two coats as a minimum.
                            </p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
                            <h4 className="font-bold text-gray-900 mb-2">Warranty &amp; Workmanship:</h4>
                            <p className="text-gray-600 leading-relaxed">
                                We provide a written scope of work and a workmanship warranty, along with manufacturer warranties on qualifying projects. Please see your quotation for the exact warranty terms.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Section 7: Best Waterproofing Brands & Products */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                        Best Waterproofing Brands and Products We Use
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        The best waterproofing brand is the one that suits your surface and budget, and applied correctly. Bhawani Technologies is a Dr. Fixit Certified Skilled Waterproofer and a Champion Waterproofer award winner from Pidilite Dr. Fixit, and we work with leading waterproofing chemical brands in India.
                    </p>

                    <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm mb-6">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white text-sm">
                                    <th className="py-4 px-5 font-semibold">Product</th>
                                    <th className="py-4 px-5 font-semibold">Type</th>
                                    <th className="py-4 px-5 font-semibold">Best use</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200 text-sm text-gray-700">
                                {brandProducts.map((bp, idx) => (
                                    <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                                        <td className="py-4 px-5 font-bold text-gray-900">{bp.product}</td>
                                        <td className="py-4 px-5">{bp.type}</td>
                                        <td className="py-4 px-5 text-gray-600">{bp.bestUse}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        Other waterproofing brands that customers often ask about include Sika, Mapei, Ultratech, Zydex, Xypex, Laticrete and Schluter Kerdi. We recommend a product only after seeing the site, because the right waterproofing chemical for a roof is different from the right one for a bathroom, tank or basement.
                    </p>

                    {/* Which waterproofing is best summary box */}
                    <div className="bg-slate-900 text-white p-8 rounded-3xl">
                        <h3 className="text-xl font-bold mb-4 text-green-400">Which waterproofing is best?</h3>
                        <ul className="space-y-3 text-sm md:text-base text-slate-200">
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 font-bold">•</span>
                                <span><strong>Terrace and roof:</strong> PU liquid membrane or APP bitumen sheet for the longest life; acrylic elastomeric coating for a budget option with heat reduction.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 font-bold">•</span>
                                <span><strong>Bathroom and toilet:</strong> A flexible cementitious or polymer-modified waterproofing, with corner reinforcement.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 font-bold">•</span>
                                <span><strong>Basement:</strong> Positive side waterproofing, with crystalline waterproofing or PU injection for leaks.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 font-bold">•</span>
                                <span><strong>Water tank:</strong> Food-grade, non-toxic cementitious or crystalline waterproofing.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 font-bold">•</span>
                                <span><strong>Swimming pool:</strong> A flexible elastomeric membrane that suits tile adhesive.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-green-400 font-bold">•</span>
                                <span><strong>Exterior walls:</strong> Elastomeric waterproofing paint or a penetrating water repellent.</span>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Section 8: Why Waterproofing Fails & DIY vs Pro */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                        Why Waterproofing Fails and How to Repair It
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-6">
                        Waterproofing fails when the surface was not prepared, the wrong product was used, the coat was too thin, drainage was poor, or the work was done in the rain. Signs of failed waterproofing include damp patches, peeling paint, bubbling or blistering of the coating, cracks, a musty smell, mold and recurring ceiling stains.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                        <div className="p-5 bg-red-50/70 border border-red-100 rounded-2xl">
                            <h4 className="font-bold text-red-900 text-sm mb-1">Blistering &amp; Bubbling</h4>
                            <p className="text-xs text-gray-700">Moisture trapped under the coat. Cut out, dry, re-prime and patch.</p>
                        </div>
                        <div className="p-5 bg-red-50/70 border border-red-100 rounded-2xl">
                            <h4 className="font-bold text-red-900 text-sm mb-1">Peeling &amp; Cracking</h4>
                            <p className="text-xs text-gray-700">UV damage or thermal movement. Remove loose coating and recoat with a flexible system.</p>
                        </div>
                        <div className="p-5 bg-red-50/70 border border-red-100 rounded-2xl">
                            <h4 className="font-bold text-red-900 text-sm mb-1">Seam Failure</h4>
                            <p className="text-xs text-gray-700">Poorly bonded laps or flashing. Re-seam and add a flashing strip.</p>
                        </div>
                        <div className="p-5 bg-red-50/70 border border-red-100 rounded-2xl">
                            <h4 className="font-bold text-red-900 text-sm mb-1">Ponding Water</h4>
                            <p className="text-xs text-gray-700">Blocked drains or poor slope. Fix the drainage first, then waterproof.</p>
                        </div>
                        <div className="p-5 bg-red-50/70 border border-red-100 rounded-2xl sm:col-span-2 md:col-span-2">
                            <h4 className="font-bold text-red-900 text-sm mb-1">Leaks at Pipes &amp; Corners</h4>
                            <p className="text-xs text-gray-700">The most common leak points. Rebuild with reinforced coats and coving.</p>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-10 text-sm md:text-base text-gray-700">
                        <p>
                            <strong>Can waterproofing be repaired?</strong> Yes. Waterproofing repair can mean patching a bathroom membrane, PU injection for a crack, or re-doing a roof. After the inspection we advise whether a repair or a full re-waterproofing is the better value.
                        </p>
                    </div>

                    {/* DIY vs Pro */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50/70 p-8 rounded-3xl border border-emerald-100">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 text-emerald-900">
                            DIY Waterproofing or a Professional Waterproofing Contractor?
                        </h3>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
                            You can do DIY waterproofing for a small terrace or a minor crack with an easy product, but most failures we see come from poor preparation and thin coats. A professional waterproofing contractor brings the right primer, mesh, tools, flood testing and warranty.
                        </p>
                        <p className="text-gray-900 font-semibold text-sm md:text-base">
                            For a bathroom, basement, tank, large roof or any project where a leak would damage the structure, we strongly recommend professional application.
                        </p>
                    </div>
                </section>

                {/* Section 9: Why Choose Bhawani Technologies */}
                <section className="mb-20">
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-6 pb-2 border-b border-gray-100">
                        Why Choose Bhawani Technologies
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <CheckCircle className="text-brand-primary shrink-0 mt-0.5" size={20} />
                            <span className="text-sm md:text-base text-gray-800 font-medium">10+ years of experience and 500+ projects for residential, commercial and industrial clients</span>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <CheckCircle className="text-brand-primary shrink-0 mt-0.5" size={20} />
                            <span className="text-sm md:text-base text-gray-800 font-medium">Dr. Fixit Certified Skilled Waterproofer and Champion Waterproofer award</span>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <CheckCircle className="text-brand-primary shrink-0 mt-0.5" size={20} />
                            <span className="text-sm md:text-base text-gray-800 font-medium">Free site inspection and a detailed written scope of work</span>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <CheckCircle className="text-brand-primary shrink-0 mt-0.5" size={20} />
                            <span className="text-sm md:text-base text-gray-800 font-medium">Premium materials from trusted brands, applied by a skilled team of 50+ workers</span>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <CheckCircle className="text-brand-primary shrink-0 mt-0.5" size={20} />
                            <span className="text-sm md:text-base text-gray-800 font-medium">Rigorous flood testing and quality checks before project handover</span>
                        </div>
                        <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200">
                            <CheckCircle className="text-brand-primary shrink-0 mt-0.5" size={20} />
                            <span className="text-sm md:text-base text-gray-800 font-medium">Prompt on-site service across Delhi, Noida, Gurgaon, Ghaziabad and Faridabad</span>
                        </div>
                    </div>

                    <p className="text-sm md:text-base text-gray-600 bg-white p-5 rounded-xl border border-slate-200 text-center font-medium">
                        Trusted by <strong className="text-gray-900">HCL, Uno Minda, Motherson, CRPF, Assotech</strong> and many more prominent organisations.
                    </p>
                </section>

                {/* Section 10: FAQs */}
                <section className="mb-20">
                    <div className="text-center mb-10">
                        <span className="text-brand-primary font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block">Common Questions</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Waterproofing FAQs</h2>
                    </div>

                    <div className="space-y-4">
                        {faqSchema.mainEntity.map((faq, i) => (
                            <div key={i} className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                <h3 className="font-bold text-gray-900 mb-2 text-base md:text-lg flex items-start gap-2.5">
                                    <HelpCircle className="text-brand-primary shrink-0 mt-1" size={18} />
                                    <span>{faq.name}</span>
                                </h3>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed pl-7">{faq.acceptedAnswer.text}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Section 11: Contact & Inspection Callout */}
                <section className="bg-brand-primary rounded-3xl p-8 md:p-14 text-white text-center shadow-xl mb-16 relative overflow-hidden">
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Book a Free Waterproofing Inspection</h2>
                        <p className="text-green-50 text-base md:text-lg mb-8 leading-relaxed">
                            If you have a leaking roof, a damp wall, a seeping bathroom or a wet basement, our team will inspect it, find the cause and recommend the right waterproofing solution.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left bg-white/10 backdrop-blur rounded-2xl p-6 mb-8 text-sm">
                            <div>
                                <p className="text-green-200 text-xs">Direct Call</p>
                                <a href="tel:+917677779418" className="font-bold text-base hover:text-green-300 transition-colors">
                                    +91 76777 79418
                                </a>
                            </div>
                            <div>
                                <p className="text-green-200 text-xs">WhatsApp</p>
                                <a href="https://wa.me/917677779418" target="_blank" rel="noopener noreferrer" className="font-bold text-base hover:text-green-300 transition-colors">
                                    wa.me/917677779418
                                </a>
                            </div>
                            <div>
                                <p className="text-green-200 text-xs">Email</p>
                                <a href="mailto:bhawanitechnologies01@gmail.com" className="font-medium hover:text-green-300 transition-colors text-xs md:text-sm">
                                    bhawanitechnologies01@gmail.com
                                </a>
                            </div>
                            <div>
                                <p className="text-green-200 text-xs">Office Address</p>
                                <p className="text-xs md:text-sm">C-288, New Ashok Nagar, Delhi (near Rajdhani Medical Centre)</p>
                            </div>
                        </div>

                        <p className="text-xs text-green-100 mb-6">
                            <strong>Service area:</strong> Delhi, Noida, Gurgaon, Ghaziabad, Faridabad
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="tel:+917677779418"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-primary font-bold rounded-xl hover:bg-green-50 transition-colors shadow-lg"
                            >
                                <Phone size={18} /> Call +91 76777 79418
                            </a>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-green-800 text-white font-bold rounded-xl hover:bg-green-900 transition-colors border border-green-700"
                            >
                                Send Site Details
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Section 12: Internal navigation */}
                <div className="border-t border-slate-200 pt-8 text-center text-sm text-gray-600">
                    <p className="mb-2">
                        Explore our <Link href="/services" className="text-brand-primary font-semibold hover:underline">services</Link>, <Link href="/services/roof-waterproofing" className="text-brand-primary font-semibold hover:underline">roof waterproofing</Link>, <Link href="/services/terrace-waterproofing" className="text-brand-primary font-semibold hover:underline">terrace waterproofing</Link>, or <Link href="/contact" className="text-brand-primary font-semibold hover:underline">contact us</Link>.
                    </p>
                </div>

            </main>
        </div>
    );
}
