"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Sample customer logos using the leading brand logo images as requested
const customerLogos = [
    { id: 1, name: "Client Partner 1", logo: "ct-1.png" },
    { id: 2, name: "Client Partner 2", logo: "ct-2.png" },
    { id: 3, name: "Client Partner 3", logo: "ct-3.png" },
    { id: 4, name: "Client Partner 4", logo: "ct-4.png" },
    { id: 5, name: "Client Partner 5", logo: "ct-5.png" },
    { id: 6, name: "Client Partner 6", logo: "ct-6.png" },
    { id: 7, name: "Client Partner 7", logo: "ct-7.png" },
    { id: 8, name: "Client Partner 8", logo: "ct-8.png" },
    { id: 9, name: "Client Partner 9", logo: "ct-9.png" },
    { id: 10, name: "Client Partner 10", logo: "ct-10.png" },
    { id: 11, name: "Client Partner 11", logo: "ct-11.png" },
    { id: 12, name: "Client Partner 12", logo: "ct-12.png" },
    { id: 13, name: "Client Partner 13", logo: "ct-13.png" },
    { id: 14, name: "Client Partner 14", logo: "ct-14.png" },
    { id: 15, name: "Client Partner 15", logo: "ct-15.png" },
];

export default function Customers() {
    return (
        <section className="py-16 md:py-24 bg-[#f8fafc] overflow-hidden border-t border-slate-100">
            <div className="container mx-auto px-4 md:px-12 max-w-6xl">
                {/* Heading */}
                <div className="text-center mb-12 md:mb-16">
                    <span className="text-xs md:text-sm font-bold text-green-600 tracking-widest uppercase block mb-3">
                        Our Clientele
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                        Trusted by <span className="text-green-600">Leading Organizations</span>
                    </h2>
                    <p className="mt-4 text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                        We deliver waterproofing and structural protection solutions to some of the most respected companies and institutions.
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                    {customerLogos.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.4, delay: idx * 0.05 }}
                            whileHover={{ 
                                y: -6,
                                scale: 1.02,
                                boxShadow: "0 12px 20px -8px rgba(0, 0, 0, 0.08)",
                                borderColor: "#22c55e"
                            }}
                            className="flex items-center justify-center h-24 md:h-28 bg-white rounded-xl border border-slate-100 p-4 relative group transition-colors duration-300 cursor-pointer shadow-sm animate-fade-in"
                        >
                            <div className="relative w-full h-full">
                                <Image
                                    src={`/ct/${item.logo}`}
                                    alt={item.name}
                                    fill
                                    className="object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 p-1"
                                    sizes="(max-width: 768px) 120px, 150px"
                                />
                            </div>
                            
                            {/* Subtle card overlay element */}
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-transparent group-hover:bg-green-500 rounded-b-xl transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
