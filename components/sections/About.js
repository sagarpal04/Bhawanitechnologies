"use client";

import { Target, Award, ShieldCheck, Briefcase, Trophy, Users, HeartHandshake, Search } from "lucide-react";
import Image from "next/image";

const stats = [
    { label: "Projects Completed", value: "500+", icon: <Briefcase size={18} />, color: "bg-green-50 text-green-600 border-green-100" },
    { label: "Years Experience", value: "10+", icon: <Trophy size={18} />, color: "bg-blue-50 text-blue-600 border-blue-100" },
    { label: "Expert Workers", value: "50+", icon: <Users size={18} />, color: "bg-indigo-50 text-indigo-600 border-indigo-100" },
    { label: "Client Satisfaction", value: "100%", icon: <HeartHandshake size={18} />, color: "bg-purple-50 text-purple-600 border-purple-100" },
];

const values = [
    {
        title: "Free Site Inspection",
        icon: <Search size={22} />,
        bgColor: "bg-green-50",
        iconColor: "text-green-600",
        lineColor: "bg-gradient-to-r from-green-500 to-green-600",
        desc: <>We inspect your property, identify the source of leakage, and recommend the best waterproofing solution.</>
    },
    {
        title: "Premium Quality Materials",
        icon: <Award size={22} />,
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600",
        lineColor: "bg-gradient-to-r from-blue-500 to-blue-600",
        desc: <>We use high-performance waterproofing products from trusted brands for lasting protection.</>
    },
    {
        title: "Guaranteed Customer Satisfaction",
        icon: <HeartHandshake size={22} />,
        bgColor: "bg-purple-50",
        iconColor: "text-purple-600",
        lineColor: "bg-gradient-to-r from-purple-500 to-purple-600",
        desc: <>We focus on timely execution, quality workmanship, and complete customer satisfaction.</>
    }
];

export default function About() {
    return (
        <section id="about" className="py-16 md:py-28 bg-[#fafbfc] scroll-mt-20 relative overflow-hidden">
            {/* Background Decorative Blobs */}
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-green-200/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                
                {/* Intro Flex Box */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-16 md:mb-24">
                    
                    {/* Left Column: Image Block */}
                    <div className="w-full lg:w-1/2">
                        <div className="relative group max-w-lg mx-auto lg:max-w-none">
                            {/* Decorative background outline frame */}
                            <div className="absolute -inset-4 bg-gradient-to-tr from-green-500/10 to-blue-500/10 rounded-3xl -rotate-2 group-hover:rotate-0 group-hover:scale-[1.02] transition-all duration-500 -z-10 shadow-lg" />
                            
                            <div className="relative h-[380px] md:h-[520px] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/50">
                                <Image
                                    src="/newImage1.png"
                                    alt="Bhawani Technologies Team"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 480px, 500px"
                                    quality={85}
                                    loading="lazy"
                                />
                                {/* Soft overlay on image */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    </div>
                    
                    {/* Right Column: Narrative + Stats */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                        <span className="inline-block self-start py-1 px-3 rounded-full bg-green-50 text-green-600 font-bold text-xs md:text-sm tracking-wide mb-4">
                            WHO WE ARE
                        </span>
                        
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
                            Protecting Structures with <span className="text-green-600">Trusted Waterproofing Solutions</span>
                        </h2>
                        
                        <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed mb-10">
                            <p className="text-gray-800 font-medium text-base md:text-[17px] leading-relaxed">
                                Bhawani Technologies is a professional waterproofing company specializing in the supply and application of high-performance waterproofing systems. We provide reliable solutions for residential, commercial, and industrial projects using premium construction chemicals and skilled workmanship.
                            </p>
                            <p>
                                With a commitment to quality, durability, and customer satisfaction, we help protect buildings from water leakage, seepage, dampness, and structural damage.
                            </p>
                        </div>

                        {/* Interactive Stats Cards Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, i) => (
                                <div 
                                    key={i} 
                                    className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 group/stat"
                                >
                                    <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/stat:scale-110`}>
                                        {stat.icon}
                                    </div>
                                    <div>
                                        <div className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight">{stat.value}</div>
                                        <div className="text-[10px] md:text-xs text-gray-500 font-semibold tracking-wide uppercase mt-0.5">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Core Values Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {values.map((value, i) => (
                        <div 
                            key={i} 
                            className="relative bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col group overflow-hidden"
                        >
                            {/* Top Highlight Accent Border Line */}
                            <div className={`absolute top-0 left-0 w-full h-1 ${value.lineColor}`} />
                            
                            {/* Icon block */}
                            <div className={`w-12 h-12 ${value.bgColor} ${value.iconColor} rounded-xl flex items-center justify-center mb-5 font-bold transition-transform duration-300 group-hover:scale-110`}>
                                {value.icon}
                            </div>
                            
                            <h3 className="text-lg md:text-xl font-extrabold text-gray-900 mb-3 tracking-tight">{value.title}</h3>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed flex-grow">{value.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}