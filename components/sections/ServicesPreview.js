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
        icon: Umbrella,
        title: "Terrace Waterproofing",
        desc: "High-performance waterproofing systems for rooftops and terraces to prevent structural water damage.",
        features: ["Monsoon Leakage Protection", "Thermal Insulation Options", "Seamless Membrane Coatings"],
        image: "/image-7.jpg"
    },
    {
        icon: Cloud,
        title: "Roof Waterproofing",
        desc: "Comprehensive roof sealing and coating solutions to guard against rain, weathering, and structural seepage.",
        features: ["UV Resistant Barrier", "Thermal Crack Resistance", "Long-lasting Protection"],
        image: "/newImage.png"
    },
    {
        icon: Building2,
        title: "Basement Waterproofing",
        desc: "Advanced positive and negative side waterproofing systems designed to keep underground spaces bone dry.",
        features: ["Hydrostatic Pressure Control", "Moisture & Dampness Sealing", "Sump & Drainage Systems"],
        image: "/image-8.jpg"
    },
    {
        icon: Droplets,
        title: "Bathroom Waterproofing",
        desc: "Multi-layered water barrier solutions for wet areas to prevent tile joint leakage and damp walls.",
        features: ["Tile Seeping Prevention", "Corner Reinforcement", "Moisture-resistant Grouting"],
        image: "/110.jpg"
    },
    {
        icon: Droplets,
        title: "Water Tank Waterproofing",
        desc: "Food-grade non-toxic waterproofing liners and coatings for concrete water storage tanks.",
        features: ["Non-toxic & Food Safe", "Seepage & Leak Control", "Algae Growth Prevention"],
        image: "/114.jpg"
    },
    {
        icon: Sparkles,
        title: "Swimming Pool Waterproofing",
        desc: "Highly flexible elastomeric waterproofing membranes built to withstand constant water pressure.",
        features: ["High Elasticity", "Chemical Resistance", "Tile Adhesive Compatibility"],
        image: "/112.jpg"
    },
    {
        icon: Umbrella,
        title: "Balcony Waterproofing",
        desc: "Weatherproof sealant and membrane systems to protect balconies and patios from water intrusion.",
        features: ["UV and Weather Resistant", "Joint Leakage Protection", "Sleek Overlay Integration"],
        image: "/109.jpg"
    },
    {
        icon: Layers,
        title: "Podium Deck Waterproofing",
        desc: "Heavy-duty waterproofing systems engineered for podium decks, landscaped areas, and driveways.",
        features: ["Root Barrier Layers", "Heavy Load Durability", "Robust Drainage Protection"],
        image: "/image-2.jpg"
    },
    {
        icon: Box,
        title: "Lift Pit Waterproofing",
        desc: "Negative-side crystalline and grout injection solutions to stop groundwater inflow into lift pits.",
        features: ["Negative Side Sealing", "Groundwater Stop", "Rapid Injection Grouting"],
        image: "/111.jpg"
    },
    {
        icon: Layers,
        title: "Retaining Wall Waterproofing",
        desc: "Heavy-duty exterior barrier coatings to prevent dampness from soil contact in retaining walls.",
        features: ["Soil Chemicals Resistance", "High Tear Strength", "Efficient Drainage Boards"],
        image: "/image-17.jpg"
    },
    {
        icon: Layers,
        title: "Expansion Joint Treatment",
        desc: "Flexible movement joint sealing systems to accommodate thermal expansion while staying watertight.",
        features: ["High Movement Capability", "Heavy-duty Joint Sealants", "Watertight Elastic Bands"],
        image: "/120.jpg"
    },
    {
        icon: Hammer,
        title: "Injection Grouting",
        desc: "High-pressure PU and cementitious grout injection to fill voids and seal active water leaks.",
        features: ["Active Leakage Stopping", "Deep Void & Crack Filling", "Structural Strengthening"],
        image: "/image-3.jpg"
    },
    {
        icon: Hammer,
        title: "Crack Repair & Structural Repair",
        desc: "Epoxy resins and carbon fiber wrapping to restore structural integrity and seal wall/beam cracks.",
        features: ["Carbon Fiber Wrapping", "High Tensile Strength", "Concrete Rehabilitation"],
        image: "/122.jpg"
    },
    {
        icon: Droplets,
        title: "PU Coating System",
        desc: "Highly elastic polyurethane liquid membranes providing seamless and UV-resistant waterproofing.",
        features: ["Seamless Finish", "Excellent Crack-bridging", "UV Stable Topcoat"],
        image: "/110.jpg"
    },
    {
        icon: Sparkles,
        title: "Polyurea Coating",
        desc: "Ultra-fast curing spray application offering premium chemical, physical, and water resistance.",
        features: ["Instant Curing", "Extreme Wear Resistance", "Jointless Protection"],
        image: "/104.jpg"
    },
    {
        icon: Droplets,
        title: "Acrylic Waterproof Coating",
        desc: "User-friendly, cost-effective acrylic-based elastomeric paint coatings for exterior walls and roofs.",
        features: ["Breathable Membrane", "Anti-fungal & Anti-algae", "Solar Reflective Options"],
        image: "/113.jpg"
    },
    {
        icon: Layers,
        title: "Cementitious Waterproofing",
        desc: "Rigid and semi-flexible polymer-modified cementitious coatings for water-retaining structures.",
        features: ["Excellent Adhesion to Concrete", "Easy Application", "Non-toxic Drinking Safe"],
        image: "/115.jpg"
    },
    {
        icon: Layers,
        title: "Bituminous Waterproofing",
        desc: "Classic hot and cold-applied bitumen coatings to seal foundations, basements, and roofs.",
        features: ["Excellent Bonding Strength", "High Moisture Barrier", "Thick Protection Layer"],
        image: "/image-16.jpg"
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
        title: "SBS Membrane Waterproofing",
        desc: "Modified bitumen membranes using Styrene-Butadiene-Styrene synthetic rubber polymers.",
        features: ["Wide Substrate Compatibility", "Concrete, Metal & Wood", "Insulation Board Application"],
        image: "/107.jpg"
    },
    {
        icon: Layers,
        title: "Brick Bat Coba Waterproofing",
        desc: "Traditional roof waterproofing using brick bats with thermal insulation for coastal regions.",
        features: ["Flat RCC Roofs", "Water Drainage Slope", "Coastal Region Suitable"],
        image: "/116.jpg"
    },
    {
        icon: Layers,
        title: "Epoxy Flooring",
        desc: "Premium two-part epoxy floor toppings for aesthetic, dust-free, and chemical-resistant finishes.",
        features: ["Seamless & Glossy", "Chemical & Abrasion Resistant", "Dust-proof & Easy Clean"],
        image: "/image-1.jpg"
    },
    {
        icon: Layers,
        title: "Industrial Floor Coating",
        desc: "Power trowel and laser-guided screed application for level, smooth finishes.",
        features: ["Heavy Traffic Resistance", "Chemical Spill Resistant", "Extreme Temperature Tolerance"],
        image: "/119.jpg"
    },
    {
        icon: Shield,
        title: "Anti-Corrosive Coating",
        desc: "Specialized barrier coatings protecting steel, pipelines, and concrete from corrosive agents.",
        features: ["Rust & Salt Protection", "Chemical Barrier", "Long-term Infrastructure Life"],
        image: "/108.jpg"
    },
    {
        icon: Hammer,
        title: "Concrete Repair & Rehabilitation",
        desc: "Restoring damaged structures using micro-concrete, polymer mortars, and rust converters.",
        features: ["Micro-Concrete Pouring", "Spalling Concrete Repair", "Rebar Rust Treatment"],
        image: "/118.jpg"
    },
    {
        icon: Box,
        title: "Construction Chemical Supply",
        desc: "Supply of premium admixtures, waterproofing chemicals, epoxy resins, and joint sealers.",
        features: ["Wholesale Trading", "Top Certified Brands", "On-site Delivery & Consulting"],
        image: "/105.jpg"
    },
    {
        icon: Search,
        title: "Waterproofing Consultation & Site Inspection",
        desc: "Professional site analysis using advanced leak detection to provide engineered solutions.",
        features: ["Source Leak Inspection", "Material Selection Guide", "Custom Project Estimation"],
        image: "/117.jpg"
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