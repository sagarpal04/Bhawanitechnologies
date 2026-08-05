"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const customerLogos = [
    { id: 1,  name: "Medico Electrodes",                  logo: "ct-1.png" },
    { id: 2,  name: "HCL",                                logo: "ct-2.png" },
    { id: 3,  name: "M2K",                                logo: "ct-3.png" },
    { id: 4,  name: "Nirala TRISO",                       logo: "ct-4.png" },
    { id: 5,  name: "Uno Minda",                          logo: "ct-5.png" },
    { id: 6,  name: "Motherson",                          logo: "ct-6.png" },
    { id: 7,  name: "Marg ERP9+",                         logo: "ct-7.png" },
    { id: 8,  name: "CRPF",                               logo: "ct-8.png" },
    { id: 9,  name: "Gyanodaya College of Education",     logo: "ct-9.png" },
    { id: 10, name: "Salasar Logistics",                  logo: "ct-10.png" },
    { id: 11, name: "Pustak Mahal",                       logo: "ct-11.png" },
    { id: 12, name: "Siddho Mal Group",                   logo: "ct-12.png" },
    { id: 13, name: "Inmantec Institutions",              logo: "ct-13.png" },
    { id: 14, name: "Assotech",                           logo: "ct-14.png" },
    { id: 15, name: "ABF – Assotech Business Cresterra", logo: "ct-15.png" },
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
                            className="flex flex-col items-center justify-between bg-white rounded-xl border border-slate-100 p-4 pt-5 relative group transition-colors duration-300 cursor-pointer shadow-sm"
                        >
                            {/* Logo */}
                            <div className="relative w-full h-20 md:h-24 mb-3">
                                <Image
                                    src={`/ct/${item.logo}`}
                                    alt={item.name}
                                    fill
                                    className="object-contain transition-all duration-300 p-1"
                                    sizes="(max-width: 768px) 120px, 150px"
                                />
                            </div>

                            {/* Name */}
                            <p className="text-[10px] md:text-xs font-semibold text-slate-600 text-center leading-tight line-clamp-2 group-hover:text-green-700 transition-colors duration-300">
                                {item.name}
                            </p>

                            {/* Bottom accent bar */}
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-transparent group-hover:bg-green-500 rounded-b-xl transition-all duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
