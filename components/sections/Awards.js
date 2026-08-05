"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Trophy, BadgeAlert } from "lucide-react";

const awards = [
    {
        id: 1,
        title: "Best Waterproofing Contractor",
        organization: "Signature Club",
        year: "Award",
        image: "aw1.jpeg",
        description: "Bhawani Technologies is proud to be recognized by Signature Club as one of the Best Waterproofing Contractors in Delhi NCR. This recognition reflects our commitment to quality workmanship, advanced waterproofing solutions, and customer satisfaction. Our team uses premium materials and modern techniques to deliver long-lasting, reliable waterproofing solutions for residential, commercial, and industrial projects across Delhi, Noida, Ghaziabad, Greater Noida, Gurgaon, and the entire NCR.",
        tagline: "Trusted. Awarded. Proven.",
        specializations: ["Terrace Waterproofing", "Roof Waterproofing", "Basement Waterproofing", "Bathroom Waterproofing", "Wall Leakage Repair", "PU Injection Grouting", "Structural Waterproofing", "Crack Repair & Building Protection"],
        icon: Trophy,
        badgeColor: "text-amber-500 bg-amber-50 border-amber-100"
    },
    {
        id: 2,
        title: "Dr. Fixit Certified Skilled Waterproofer",
        organization: "Dr. Fixit",
        year: "Certification",
        image: "aw2.png",
        description: "Bhawani Technologies is a Dr. Fixit Certified Skilled Waterproofer, recognized for delivering high-quality waterproofing solutions using industry-approved materials and best practices. This certification demonstrates our expertise, technical knowledge, and commitment to providing reliable and long-lasting waterproofing services across Delhi, Noida, Ghaziabad, Greater Noida, Gurugram, and NCR.",
        tagline: "Certified Expertise. Trusted Quality. Long-Lasting Protection.",
        specializations: ["Terrace & Roof Waterproofing", "Basement Waterproofing", "Bathroom & Toilet Waterproofing", "Wall Leakage & Seepage Treatment", "PU Injection Grouting", "Crack Repair & Structural Waterproofing", "Commercial & Industrial Waterproofing", "Building Protection Solutions"],
        icon: ShieldCheck,
        badgeColor: "text-green-600 bg-green-50 border-green-100"
    },
    {
        id: 3,
        title: "Dr. Fixit Skilled Waterproofer",
        organization: "Dr. Fixit",
        year: "Milestone 🏆",
        image: "aw3.jpeg",
        description: "Another milestone achieved! Bhawani Technologies is honored to receive the Dr. Fixit Skilled Waterproofer certification. Thank you to our clients and partners for your trust and support. We remain committed to delivering durable, high-quality waterproofing and building protection solutions.",
        tagline: null,
        specializations: [],
        icon: Award,
        badgeColor: "text-blue-600 bg-blue-50 border-blue-100"
    },
    {
        id: 4,
        title: "Champion Waterproofer Award",
        organization: "Pidilite Dr. Fixit",
        year: "Award",
        image: "aw4.jpeg",
        description: "Bhawani Technologies is proud to have been recognized by Pidilite Dr. Fixit as a Champion Waterproofer, honoring our dedication to excellence in waterproofing and customer satisfaction. This prestigious recognition reflects our commitment to delivering high-quality waterproofing solutions, using trusted materials, skilled workmanship, and industry best practices across Delhi NCR.",
        tagline: "Award-Winning Expertise. Trusted Quality. Proven Performance.",
        specializations: ["Terrace & Roof Waterproofing", "Basement Waterproofing", "Bathroom Waterproofing", "PU Injection Grouting", "Crack Repair", "Structural Waterproofing", "Building Protection Solutions"],
        icon: BadgeAlert,
        badgeColor: "text-purple-600 bg-purple-50 border-purple-100"
    }
];

export default function Awards() {
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(prev => prev === id ? null : id);
    };

    return (
        <section className="py-16 md:py-24 bg-white border-t border-slate-100 overflow-hidden">
            <div className="container mx-auto px-4 md:px-12 max-w-6xl">
                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-xs md:text-sm font-bold text-green-600 tracking-widest uppercase block mb-3">
                        Accreditation & Quality
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Awards & <span className="text-green-600">Recognition</span>
                    </h2>
                    <p className="mt-4 text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        Our commitment to durability, safety, and customer satisfaction has earned us respected awards and industry certifications.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {awards.map((award, idx) => {
                        const IconComponent = award.icon;
                        const isExpanded = expandedId === award.id;
                        const shortDesc = award.description.length > 120
                            ? award.description.slice(0, 120).trimEnd() + "…"
                            : award.description;

                        return (
                            <motion.div
                                key={award.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="flex flex-col sm:flex-row bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                            >
                                {/* Image showcase (Left side on tablet/desktop) */}
                                <div className="sm:w-2/5 relative h-56 sm:h-auto min-h-[220px] bg-slate-200 overflow-hidden">
                                    <Image
                                        src={`/aw/${award.image}`}
                                        alt={award.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 20vw, 250px"
                                    />
                                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors duration-300" />
                                </div>

                                {/* Content Details (Right side on tablet/desktop) */}
                                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                                    <div>
                                        {/* Badge / Year */}
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full border ${award.badgeColor}`}>
                                                <IconComponent size={12} />
                                                <span>{award.year}</span>
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2 leading-snug group-hover:text-green-600 transition-colors">
                                            {award.title}
                                        </h3>

                                        {/* Subtitle / Organization */}
                                        <p className="text-sm font-semibold text-slate-500 mb-3">
                                            {award.organization}
                                        </p>

                                        {/* Description — truncated by default */}
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            {isExpanded ? award.description : shortDesc}
                                        </p>

                                        {/* Specializations — only when expanded */}
                                        {isExpanded && award.specializations && award.specializations.length > 0 && (
                                            <ul className="mt-3 grid grid-cols-1 gap-1">
                                                {award.specializations.map((s, i) => (
                                                    <li key={i} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                                                        {s}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}

                                        {/* Read More / Less toggle */}
                                        {award.description.length > 120 && (
                                            <button
                                                onClick={() => toggleExpand(award.id)}
                                                className="mt-2 text-xs font-bold text-green-600 hover:text-green-700 transition-colors cursor-pointer"
                                            >
                                                {isExpanded ? "Read Less ↑" : "Read More ↓"}
                                            </button>
                                        )}
                                    </div>

                                    {/* Tagline footer */}
                                    <div className="mt-6 flex items-center justify-between border-t border-slate-200/50 pt-4">
                                        <span className="text-xs font-bold text-green-600 tracking-wider uppercase inline-flex items-center gap-1">
                                            {award.tagline ? award.tagline : "Certified Excellence"}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
