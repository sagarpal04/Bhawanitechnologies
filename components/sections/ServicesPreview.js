"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Droplets, Umbrella, Layers, Box, Building2, CheckCircle, Shield,
    Search, Sparkles, Hammer, Wrench, Disc, Link2, Thermometer, Cloud,
    Trash2, Construction
} from "lucide-react";
import Image from "next/image";

const services = [
    {
        icon: Shield,
        title: "HDPE Membrane Waterproofing",
        desc: "High-density polyethylene membranes for durable, long-lasting waterproofing protection.",
        features: ["Water Infiltration Prevention", "Moisture Damage Protection", "Liner Applications"],
        image: "/servicesImages/service1.png"
    },
    {
        icon: Umbrella,
        title: "TPO Membrane Waterproofing",
        desc: "Single-ply roofing membrane offering excellent waterproofing properties and durability.",
        features: ["Single-Ply Application", "Roofing Solutions", "Long-Term Durability"],
        image: "/servicesImages/service2.png"
    },
    {
        icon: Layers,
        title: "PVC Membrane Waterproofing",
        desc: "Highly durable, flexible membranes resistant to UV rays, chemicals, and weathering.",
        features: ["Flat & Low-Sloped Roofs", "UV & Chemical Resistant", "Weather Resistant"],
        image: "/servicesImages/service3.png"
    },
    {
        icon: Layers,
        title: "EPDM Membrane Waterproofing",
        desc: "Synthetic rubber material offering excellent resistance to weathering and extreme temperatures.",
        features: ["Roofs & Basements", "Foundations & Ponds", "Water Containment Structures"],
        image: "/servicesImages/service4.png"
    },
    {
        icon: Droplets,
        title: "Polyurea Coating & Spray",
        desc: "Exceptional durability, chemical resistance, and waterproofing protective coating system.",
        features: ["Corrosion & Abrasion Protection", "Metal, Concrete & Wood Application", "Roofs, Basements & Decks"],
        image: "/104.jpg"
    },
    {
        icon: Box,
        title: "PU Foam Spray",
        desc: "Self-expanding polyurethane foam spray with excellent insulating and filling properties.",
        features: ["Expands 3x Original Volume", "Fills Cracks & Gaps", "Universal Adhesion"],
        image: "/105.jpg"
    },
    {
        icon: Layers,
        title: "Carbon Fibre Wrapping",
        desc: "High tensile strength, lightweight solution for structural strengthening.",
        features: ["Structural Strengthening", "Lightweight Reinforcement", "Custom Engineered Design"],
        image: "/106.jpg"
    },
    {
        icon: Droplets,
        title: "Injection Grouting",
        desc: "Method of filling cracks, joints, and voids under pressure for structural strengthening.",
        features: ["Crack & Void Filling", "Structural Strengthening", "Pest & Germ Prevention"],
        image: "/image-3.jpg"
    },
    {
        icon: Layers,
        title: "Epoxy & PU Flooring",
        desc: "Durable two-part resin flooring system resistant to chemicals, stains, and moisture.",
        features: ["High-Traffic Areas", "Chemical & Stain Resistant", "Industrial & Commercial Use"],
        image: "/image-1.jpg"
    },
    {
        icon: Layers,
        title: "SBS Membrane Waterproofing",
        desc: "Modified bitumen membranes using Styrene-Butadiene-Styrene synthetic rubber polymers.",
        features: ["Wide Substrate Compatibility", "Concrete, Metal & Wood", "Insulation Board Application"],
        image: "/107.jpg"
    },
    {
        icon: Building2,
        title: "Bridge Deck Waterproofing",
        desc: "Crucial protection for bridge decks against moisture, rain, and freeze-thaw cycles.",
        features: ["Environmental Protection", "Structural Component Safety", "Extended Bridge Lifespan"],
        image: "/108.jpg"
    },
    {
        icon: Layers,
        title: "Self-Adhesive Membrane Waterproofing",
        desc: "Flexible building material providing barrier protection against water penetration.",
        features: ["Foundation Walls & Basements", "Roofs, Balconies & Terraces", "Mold & Leak Prevention"],
        image: "/109.jpg"
    },
    {
        icon: Droplets,
        title: "Polyurethane Waterproofing",
        desc: "Liquid applied seamless waterproofing system for complex geometric connections.",
        features: ["Roofs, Balconies & Terraces", "Kitchens & Basements", "Patios & Wet Areas"],
        image: "/110.jpg"
    },
    {
        icon: Sparkles,
        title: "Crystalline Waterproofing",
        desc: "Compound that creates insoluble crystals in concrete pores, blocking water penetration.",
        features: ["Concrete Pore Sealing", "Self-Developing Protection", "Long-Term Water Blocking"],
        image: "/111.jpg"
    },
    {
        icon: Umbrella,
        title: "Turner Waterproofing",
        desc: "Proven waterproofing and roofing solutions for various exterior surface applications.",
        features: ["Decks & Balconies", "Walkways", "Exterior Surfaces"],
        image: "/112.jpg"
    },
    {
        icon: Layers,
        title: "APP Membrane Waterproofing",
        desc: "Modified bitumen membrane providing durable, effective waterproofing solutions.",
        features: ["Roofs & Basements", "Foundations", "Below-Grade Structures"],
        image: "/image-2.jpg"
    },
    {
        icon: Layers,
        title: "Polymer Coating",
        desc: "Thin synthetic polymer layers providing protection and enhanced performance.",
        features: ["Metals, Plastics & Ceramics", "Corrosion Prevention", "Extended Object Life"],
        image: "/113.jpg"
    },
    {
        icon: Layers,
        title: "FRP Coating",
        desc: "Superior FRP linings and coatings for tanks and civil structures, 25+ years expertise.",
        features: ["MS Tanks & Civil Trenches", "Pits Lining", "Competitive Market Pricing"],
        image: "/114.jpg"
    },
    {
        icon: Layers,
        title: "Carbon Laminates",
        desc: "Pre-cured carbon fiber composite sheets for strengthening existing structures.",
        features: ["Concrete Beams & Columns", "Load-Carrying Capacity", "Earthquake Resistance"],
        image: "/115.jpg"
    },
    {
        icon: Layers,
        title: "Brick Bat Coba",
        desc: "Traditional roof waterproofing using brick bats with thermal insulation for coastal regions.",
        features: ["Flat RCC Roofs", "Water Drainage Slope", "Coastal Region Suitable"],
        image: "/116.jpg"
    },
    {
        icon: Search,
        title: "Leak Detection",
        desc: "Advanced REF-LOCATOR unit using heated electrolyte sensor technology.",
        features: ["Modern Detection Standards", "Heated Electrolyte Sensor", "Precise Leak Location"],
        image: "/117.jpg"
    },
    {
        icon: Layers,
        title: "Trimix Flooring",
        desc: "Specialized concrete flooring offering enhanced durability and abrasion resistance.",
        features: ["Industrial & Commercial Use", "Heavy Foot Traffic Areas", "Machinery Equipment Zones"],
        image: "/118.jpg"
    },
    {
        icon: Layers,
        title: "Industrial Flooring",
        desc: "Power trowel and laser-guided screed application for level, smooth finishes.",
        features: ["Heavy Traffic Resistance", "Chemical Spill Resistant", "Extreme Temperature Tolerance"],
        image: "/119.jpg"
    },
    {
        icon: Layers,
        title: "Expansion Joint System",
        desc: "Assembly designed to absorb temperature-induced expansion and structural movement.",
        features: ["Buildings & Bridges", "Sidewalks & Railway Tracks", "Piping Systems & Ships"],
        image: "/120.jpg"
    },
    {
        icon: Thermometer,
        title: "Thermal Insulation",
        desc: "Essential roof component reducing heating and cooling energy costs.",
        features: ["Comfortable Indoor Environment", "Energy Cost Reduction", "Commercial Building Systems"],
        image: "/121.jpg"
    },
    {
        icon: Hammer,
        title: "Structural Repair",
        desc: "Technologies to restore or add load-carrying capacity to structures.",
        features: ["Deterioration Repair", "Seismic Condition Solutions", "Bridges & Buildings"],
        image: "/122.jpg"
    },
    {
        icon: Disc,
        title: "Diamond Core Cutting",
        desc: "Precise method of creating circular openings in concrete, masonry, and stone.",
        features: ["Reinforced Concrete", "Brick, Stone & Asphalt", "Precise Accurate Cuts"],
        image: "/123.jpg"
    },
    {
        icon: Disc,
        title: "RCC Concrete Diamond",
        desc: "Specialized diamond-tipped tools for cutting reinforced concrete structures.",
        features: ["Saws & Wire Saws", "Precision & Efficiency", "Steel Reinforcement Handling"],
        image: "/124.jpg"
    },
    {
        icon: Disc,
        title: "Sawing Cutting",
        desc: "Controlled cutting, drilling, and removal process using diamond blade saws.",
        features: ["Repairs & Alterations", "Opening Creation", "Renovation Projects"],
        image: "/125.jpg"
    },
    {
        icon: Link2,
        title: "Anchor Re-Bars",
        desc: "Steel reinforcing bars creating strong connections between concrete structures.",
        features: ["Structural Integrity", "Load Transfer", "Stability Enhancement"],
        image: "/image-4.jpg"
    },
    {
        icon: Link2,
        title: "Anchor Bolts",
        desc: "Heavy-duty fasteners securing structures and objects to concrete or masonry.",
        features: ["Threaded Rod Embedding", "Beams & Columns", "Machinery Attachment"],
        image: "/image-5.jpg"
    },
    {
        icon: Cloud,
        title: "Light Weight Cellular Foam Concrete",
        desc: "Foamed concrete incorporating air bubbles for unique lightweight properties.",
        features: ["Cement-Based Mixture", "Cellular Structure", "Reduced Weight Construction"],
        image: "/image-6.jpg"
    },
    {
        icon: Droplets,
        title: "Guniting / Shortcrete",
        desc: "Spray application methods for concrete or mortar, dry-mix or wet-mix processes.",
        features: ["Dry-Mix Process", "Wet-Mix Process", "Surface Spray Application"],
        image: "/image-7.jpg"
    },
    {
        icon: Hammer,
        title: "Civil Miscellaneous Work",
        desc: "Broad range of smaller construction, maintenance, and repair tasks.",
        features: ["Utility Infrastructure", "Site Preparation", "Routine Maintenance"],
        image: "/image-8.jpg"
    },
    {
        icon: Trash2,
        title: "Demolition and Dismantling Work",
        desc: "Removal and breakdown of existing structures, complete or careful dismantling.",
        features: ["Building Demolition", "Bridge Removal", "Component Dismantling"],
        image: "/image-13.jpg"
    },
    {
        icon: Building2,
        title: "Building Construction",
        desc: "Complete process of creating structures from planning to final touches.",
        features: ["Planning & Design", "Site Preparation", "Full Construction Execution"],
        image: "/image-14.jpg"
    }
];

function ServiceCard({ service }) {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div
            className="relative w-full h-[310px] md:h-[340px] lg:h-[310px] xl:h-[340px] cursor-pointer group"
            style={{ perspective: '1000px' }}
            onClick={() => setIsFlipped(!isFlipped)}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <div
                className="relative w-full h-full duration-700 transition-all"
                style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
            >
                {/* Front Side: Content Only */}
                <div
                    className="absolute inset-0 w-full h-full bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] p-5 md:p-7 flex flex-col justify-between"
                    style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
                >
                    <div>
                        {/* Icon Badge */}
                        <div className="w-10 h-10 md:w-11 md:h-11 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-3 shadow-sm">
                            <service.icon size={20} className="md:w-5.5 md:h-5.5" />
                        </div>

                        {/* Title */}
                        <h3 className="text-sm md:text-[17px] xl:text-lg font-bold text-slate-900 tracking-tight leading-tight mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2">
                            {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-500 text-[10px] md:text-[12px] xl:text-[13px] leading-relaxed mb-3 md:mb-4 line-clamp-3">
                            {service.desc}
                        </p>

                        {/* Features Checklist */}
                        <div className="space-y-1.5 md:space-y-2 border-t border-slate-50 pt-3 md:pt-4">
                            {service.features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-2">
                                    <div className="w-4 h-4 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckCircle className="text-emerald-600" size={10} />
                                    </div>
                                    <span className="text-[10px] md:text-[11.5px] xl:text-[12.5px] text-slate-600 font-semibold leading-tight whitespace-normal">
                                        {feature}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Link */}
                    <div className="mt-3 md:mt-4">
                        <span className="inline-flex items-center gap-1.5 text-[11px] md:text-xs xl:text-sm font-bold text-emerald-600 tracking-wider">
                            <span>Inquire Now</span>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-3.5 h-3.5 transform group-hover/btn:translate-x-0.5 transition-transform duration-200"
                            >
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </span>
                    </div>
                </div>

                {/* Back Side: Image Only */}
                <div
                    className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)]"
                    style={{
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden',
                        transform: 'rotateY(180deg)'
                    }}
                >
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 30vw"
                        className="object-cover"
                        quality={80}
                    />
                    {/* Hover Overlay Title */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent flex items-end p-5 md:p-7">
                        <h4 className="text-white text-sm md:text-base xl:text-lg font-bold leading-tight drop-shadow-md">
                            {service.title}
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function ServicesPreview() {
    const [itemsPerSlide, setItemsPerSlide] = useState(6);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const totalSlides = Math.ceil(services.length / itemsPerSlide);

    // Responsive items per slide
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerSlide(2);
            } else if (window.innerWidth < 1024) {
                setItemsPerSlide(4);
            } else {
                setItemsPerSlide(6);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent index out of bounds on resize
    useEffect(() => {
        const maxSlide = Math.ceil(services.length / itemsPerSlide) - 1;
        if (currentSlide > maxSlide) {
            setCurrentSlide(maxSlide >= 0 ? maxSlide : 0);
        }
    }, [itemsPerSlide, currentSlide]);

    const handleNext = () => {
        setDirection(1);
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const handlePrev = () => {
        setDirection(-1);
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const handleDotClick = (index) => {
        setDirection(index > currentSlide ? 1 : -1);
        setCurrentSlide(index);
    };

    // Autoplay logic
    useEffect(() => {
        if (isHovered) return;
        const timer = setInterval(() => {
            handleNext();
        }, 8000);
        return () => clearInterval(timer);
    }, [isHovered, currentSlide, totalSlides]);

    const slideVariants = {
        enter: (dir) => ({
            x: dir > 0 ? 1000 : dir < 0 ? -1000 : 0,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (dir) => ({
            x: dir > 0 ? -1000 : dir < 0 ? 1000 : 0,
            opacity: 0
        })
    };

    return (
        <section 
            id="services" 
            className="py-16 md:py-28 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] scroll-mt-20 relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="w-6 h-[1.5px] bg-emerald-600 rounded-full opacity-60"></span>
                        <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                        <span className="text-emerald-600 font-bold text-xs md:text-sm tracking-widest uppercase px-1">
                            Our Services
                        </span>
                        <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                        <span className="w-6 h-[1.5px] bg-emerald-600 rounded-full opacity-60"></span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight leading-tight px-4">
                        Smart Solutions. <span className="text-emerald-700">Stronger Structures.</span>
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
                        Advanced construction chemical solutions for durable, safe & future-ready infrastructure.
                    </p>
                </div>

                {/* Carousel Viewport Container */}
                <div className="relative overflow-hidden min-h-[660px] md:min-h-[720px] lg:min-h-[660px] xl:min-h-[720px] px-1 py-4">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentSlide}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 220, damping: 26 },
                                opacity: { duration: 0.25 }
                            }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                        >
                            {services
                                .slice(currentSlide * itemsPerSlide, (currentSlide + 1) * itemsPerSlide)
                                .map((service, index) => (
                                    <ServiceCard key={index} service={service} />
                                ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Carousel Controls (Centered Arrows + Pagination Dots) */}
                <div className="flex items-center justify-center gap-6 mt-10">
                    {/* Prev Button */}
                    <button
                        onClick={handlePrev}
                        className="w-12 h-12 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
                        aria-label="Previous services"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>

                    {/* Dots */}
                    <div className="flex items-center gap-2">
                        {Array.from({ length: totalSlides }).map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handleDotClick(i)}
                                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${currentSlide === i ? "w-8 bg-emerald-600" : "w-2.5 bg-slate-200 hover:bg-slate-300"
                                    }`}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>

                    {/* Next Button */}
                    <button
                        onClick={handleNext}
                        className="w-12 h-12 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200 transition-all duration-300 shadow-sm active:scale-95 cursor-pointer"
                        aria-label="Next services"
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}