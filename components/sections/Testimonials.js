"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Placeholder images for the masonry layout
const testimonials = [
    {
        name: "Niryat-Sam Apparels India Ltd.",
        location: "Siddho Mal Group",
        content: "Executed large-scale industrial epoxy flooring and anti-corrosive coatings for manufacturing areas.",
    },
    {
        name: "Omni Buildtech Pvt. Ltd.",
        content: "Implemented complete waterproofing admixtures, EPDM membranes, and PU injection grouting for basement structures.",
    },
    {
        name: "M2K Entertainment Pvt. Ltd.",
        content: "Applied high-performance polyurethane flooring and acoustics joint sealants for multiplex facilities.",
    },
    {
        name: "Marg ERP Limited",
        content: "Provided premium waterproofing coatings and tile grouts for corporate office premises.",
    },
    {
        name: "Pustak Mahal",
        location: "Connaught Place",
        content: "Delivered specialized chemical injection grouting and wall dampness treatment for heritage commercial building.",
    },
    {
        name: "Hotel Hari Pariko",
        content: "Completed swimming pool and kitchen waterproofing using high-grade membrane systems and tile adhesives.",
    },
    {
        name: "Nirala World Residency Pvt. Ltd.",
        content: "Executed basement and terrace waterproofing using APP membranes and joint sealants for residential towers.",
    },
    {
        name: "Salasar Logistik Pvt. Ltd.",
        content: "Installed heavy-duty floor hardeners and dust-proofing systems for logistics warehouse floors.",
    },
    {
        name: "Amita Industries Pvt. Ltd.",
        content: "Applied industrial epoxy floorings and corrosion protection coatings for chemical storage sections.",
    },
    {
        name: "Sarvodaya Vidyalaya (Boys)",
        location: "Jahangirpuri",
        content: "Conducted roof and toilet block waterproofing using elastomeric coatings for public school facility.",
    },
    {
        name: "Sarvodaya Vidyalaya (Girls)",
        location: "Mangolpuri",
        content: "Delivered terrace waterproofing and heat reflective coatings to protect institutional buildings.",
    },
    {
        name: "A.I.A Infratech Pvt. Ltd.",
        content: "Supplied and installed woven & non-woven geotextiles and drain cells for major infrastructure projects.",
    },
    {
        name: "GST Bhawan",
        location: "Bhikaji Cama Place",
        content: "Executed pressure injection grouting and expansion joint sealing for government administrative office building.",
    },
    {
        name: "Minda House",
        location: "DLF Phase 2",
        content: "Completed high-end residential waterproofing including terrace APP membrane and bathroom wet area protection.",
    },
    {
        name: "Thapar University",
        location: "Patiala (Punjab)",
        content: "Applied roof waterproofing systems, expansion joint sealants, and exterior protective coatings for university campus.",
    },
    {
        name: "M3M",
        location: "Gurugram",
        content: "Installed high-performance epoxy floor coatings and podium drainage cell systems for luxury commercial development.",
    },
    {
        name: "GGG Realty Pvt. Ltd.",
        content: "Provided comprehensive construction chemicals, adhesives, and waterproofing membranes for multi-story residential project.",
    }
];


const col1 = [testimonials[0], testimonials[1], testimonials[2], testimonials[3]];
const col2 = [testimonials[4], testimonials[5], testimonials[6], testimonials[7]];
const col3 = [testimonials[8], testimonials[9], testimonials[10], testimonials[11]];
const col4 = [testimonials[12], testimonials[13], testimonials[14], testimonials[15], testimonials[16]];


import { Building2 } from "lucide-react";

function TestimonialCard({ item }) {
    return (
        <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl shadow-lg border border-gray-100 w-full mb-4 md:mb-6 break-inside-avoid">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <div className="relative w-8 h-8 md:w-10 md:h-10 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center text-gray-400">
                    <Building2 size={16} className="md:w-5 md:h-5" />
                </div>
                <div>
                    <p className="font-bold text-xs md:text-sm text-gray-900">{item.name}</p>
                    {item.location && <p className="text-[10px] md:text-xs text-gray-500">{item.location}</p>}
                </div>
            </div>
            <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-yellow-400 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                ))}
            </div>
            <p className="text-xs md:text-sm text-gray-600 leading-relaxed">"{item.content}"</p>
        </div>
    );
}

function MarqueeColumn({ items, duration, reverse = false }) {
    return (
        <motion.div
            className="flex flex-col"
            initial={{ y: reverse ? "-50%" : "0%" }}
            animate={{ y: reverse ? "0%" : "-50%" }}
            transition={{
                repeat: Infinity,
                ease: "linear",
                duration: duration,
            }}
        >
            {[...items, ...items, ...items, ...items].map((item, i) => (
                <TestimonialCard key={i} item={item} />
            ))}
        </motion.div>
    );
}

export default function Testimonials() {
    return (
        <section className="py-12 md:py-20 bg-brand-light overflow-hidden relative">
            <div className="container mx-auto px-4 md:px-12 relative z-10">

                {/* Visual Background Columns (Absolute) */}
                <div className="absolute inset-0 z-0 flex justify-between gap-2 md:gap-8 px-2 md:px-4 opacity-70 md:opacity-100 pointer-events-none md:pointer-events-auto mask-linear-fade">
                    {/* Show 2 columns on mobile, 4 on desktop */}
                    <div className="flex flex-col w-1/2 md:w-1/4 h-[120vh] md:h-[150vh] -mt-10 md:-mt-20">
                        <MarqueeColumn items={col1} duration={20} />
                    </div>
                    <div className="flex flex-col w-1/2 md:w-1/4 h-[120vh] md:h-[150vh] -mt-10 md:-mt-20">
                        <MarqueeColumn items={col2} duration={25} reverse />
                    </div>
                    {/* Center space is left empty for text on desktop */}
                    <div className="hidden md:block w-1/2" />

                    <div className="hidden md:flex flex-col w-1/4 h-[150vh] -mt-20">
                        <MarqueeColumn items={col3} duration={22} />
                    </div>
                    <div className="hidden md:flex flex-col w-1/4 h-[150vh] -mt-20">
                        <MarqueeColumn items={col4} duration={28} reverse />
                    </div>
                </div>

                {/* Central Content */}
                <div className="relative z-20 max-w-3xl mx-auto text-center pt-8 md:pt-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white/90 backdrop-blur-xl p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl border border-white/50 hover:scale-[1.02] transition-transform duration-300 group">
                            <Link href="/clients" className="block">
                                <span className="inline-block py-1 px-2.5 md:px-3 rounded-full bg-gray-100 text-gray-600 font-medium text-xs md:text-sm mb-4 md:mb-6 border border-gray-200 group-hover:bg-green-50 group-hover:text-green-600 group-hover:border-green-200 transition-colors">
                                    Testimonials
                                </span>
                                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 md:mb-6 tracking-tight group-hover:text-green-700 transition-colors">
                                    Trusted by Industry Leaders
                                </h2>
                                <p className="text-sm md:text-base text-gray-600 mb-6 md:mb-8 max-w-lg mx-auto">
                                    Professionals trust BHAWANI TECHNOLOGIES to protect their most valuable assets. We deliver excellence in every project.
                                </p>
                                <div className="flex items-center justify-center gap-2 text-green-600 font-semibold text-sm md:text-base opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 mb-6">
                                    View All Clients <ArrowRight size={18} />
                                </div>
                            </Link>


                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Fade Overlay for Edges */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-brand-light to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-light to-transparent z-10 pointer-events-none" />
        </section>
    );
}
