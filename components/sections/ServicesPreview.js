import { Droplets, Umbrella, Layers, Box, Zap, Building2, CheckCircle, Shield } from "lucide-react";

const services = [
    {
        icon: Layers,
        title: "Industrial Floorings & Coatings",
        desc: "High-performance floor toppings, protective coatings, and dustproofers for traffic areas.",
        features: ["Floor Hardeners", "Epoxy Floorings & Coatings", "Polyurethane Floorings & Coatings"]
    },
    {
        icon: Umbrella,
        title: "Waterproofing & Membranes",
        desc: "Advanced waterproofing solutions for structures, retaining walls, and roofs.",
        features: ["APP Membranes", "EPDM Membranes", "Water Proofing Admixtures & Coatings"]
    },
    {
        icon: Droplets,
        title: "Injection Grouting Systems",
        desc: "High-pressure concrete repair systems to stop pressurized water leaks and seal cracks.",
        features: ["PU Injection Grouting", "Epoxy Injection Grouting", "Cement Base Injection"]
    },
    {
        icon: Box,
        title: "Joint Sealants & Adhesives",
        desc: "High-performance elastic sealants and bonding adhesives for joints.",
        features: ["PU & Polysulphide Joint Sealants", "Construction Adhesives", "Curing & Sealing Compounds"]
    },
    {
        icon: Building2,
        title: "Geotextiles & Drainage Cells",
        desc: "Soil filtration, stabilization materials, and structural sub-surface drainage systems.",
        features: ["Woven & Non-Woven Geotextiles", "Drain Cells & Drain Boards", "Grass Pavers"]
    },
    {
        icon: Shield,
        title: "Corrosion Protection Coatings",
        desc: "Specialized anti-corrosion barrier coatings for steel structures and concrete surfaces.",
        features: ["Anti-Corrosive Coatings", "Corrosion protection for steel", "Chemical resistant coatings"]
    }
];

export default function ServicesPreview() {
    return (
        <section id="services" className="py-16 md:py-28 bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] scroll-mt-20 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                <div className="text-center mb-12 md:mb-20">
                    <span className="inline-block py-1 px-3 rounded-full bg-emerald-50 text-emerald-600 font-bold text-xs md:text-sm tracking-wide mb-4">
                        WHAT WE DO
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-5 tracking-tight leading-tight px-4">
                        We Always Provide The <span className="bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">Best Service</span>
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed px-4">
                        While we specialize in custom waterproofing plans to suit your needs, most clients schedule regular protective maintenance.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="relative bg-white p-6 md:p-8 rounded-3xl border border-slate-100/80 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col overflow-hidden">
                            {/* Dynamic Top Border Accent */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 to-green-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                            {/* Icon Block with Hover Gradient Morph */}
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-50/80 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-emerald-500 group-hover:to-green-600 group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm">
                                <service.icon size={26} className="md:w-7 md:h-7 transition-transform duration-300" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-emerald-700 transition-colors">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-500 mb-6 leading-relaxed text-sm md:text-base flex-grow">
                                {service.desc}
                            </p>

                            {/* Feature List */}
                            <div className="space-y-3 mb-6 border-t border-slate-50 pt-5">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                            <CheckCircle className="text-emerald-600" size={12} />
                                        </div>
                                        <span className="text-[13.5px] text-gray-600 font-medium leading-snug">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Link at bottom */}
                            <div className="mt-auto pt-2">
                                <a 
                                    href="#contact" 
                                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-700 tracking-wider uppercase group/btn"
                                >
                                    <span>Inquire Now</span>
                                    <svg 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2.5" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform duration-200"
                                    >
                                        <line x1="5" y1="12" x2="19" y2="12" />
                                        <polyline points="12 5 19 12 12 19" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}