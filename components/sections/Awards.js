"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Trophy, BadgeAlert } from "lucide-react";

const awards = [
    {
        id: 1,
        title: "Excellence in Structural Waterproofing",
        organization: "National Construction Association",
        year: "2025",
        image: "aw1.jpeg",
        description: "Recognized for delivering outstanding waterproofing solutions for complex commercial basements.",
        icon: Trophy,
        badgeColor: "text-amber-500 bg-amber-50 border-amber-100"
    },
    {
        id: 2,
        title: "Best Industrial Contractor Award",
        organization: "Industrial Infrastructure Forum",
        year: "2024",
        image: "aw2.png",
        description: "Awarded for excellence in industrial epoxy flooring and high-performance protective coatings.",
        icon: Award,
        badgeColor: "text-green-600 bg-green-50 border-green-100"
    },
    {
        id: 3,
        title: "Safety & Quality Compliance Certificate",
        organization: "Safety Standards Bureau",
        year: "2024",
        image: "aw3.jpeg",
        description: "Certified for maintaining top-tier safety protocols and 100% material quality compliance across all sites.",
        icon: ShieldCheck,
        badgeColor: "text-blue-600 bg-blue-50 border-blue-100"
    },
    {
        id: 4,
        title: "Innovation in Waterproofing Technology",
        organization: "Concrete Technology Council",
        year: "2023",
        image: "aw4.jpeg",
        description: "Honored for pioneering advanced crystalline waterproofing applications in high groundwater conditions.",
        icon: Award,
        badgeColor: "text-purple-600 bg-purple-50 border-purple-100"
    }
];

export default function Awards() {
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

                                        {/* Description */}
                                        <p className="text-slate-600 text-sm md:text-sm leading-relaxed">
                                            {award.description}
                                        </p>
                                    </div>

                                    {/* Action/Decoration Indicator */}
                                    <div className="mt-6 flex items-center justify-between border-t border-slate-200/50 pt-4">
                                        <span className="text-xs font-bold text-green-600 tracking-wider uppercase group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                                            Certified Excellence
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
