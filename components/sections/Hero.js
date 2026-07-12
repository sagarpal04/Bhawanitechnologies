"use client";

import Image from "next/image";

/* ─── data ─────────────────────────────────────────────────── */
const checks = [
    "Experienced & Skilled Team",
    "Premium Quality Materials",
    "Professional Application",
    "Long-Lasting Waterproofing Solutions",
    "Timely Project Completion",
    "Customer Satisfaction Guaranteed",
];

const stats = [
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
        title: "Superior Quality",
        desc: "Premium grade chemical solutions",
        color: "green",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
            </svg>
        ),
        title: "Waterproofing Experts",
        desc: "Advanced waterproofing systems",
        color: "blue",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
        title: "Long Lasting Results",
        desc: "Durability you can depend on",
        color: "blue",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "Experienced Team",
        desc: "10+ years of industry experience",
        color: "blue",
    },
    {
        icon: (
            <span className="text-[17px] leading-none font-bold">₹</span>
        ),
        title: "Cost Effective",
        desc: "Best solutions at competitive prices",
        color: "blue",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
            </svg>
        ),
        title: "24/7 Support",
        desc: "We're here to help anytime",
        color: "blue",
    },
];

const badgeColors = {
    green: "bg-green-100 text-green-600",
    blue: "bg-blue-100 text-blue-600",
};

/* ─── component ─────────────────────────────────────────────── */
export default function Hero() {
    return (
        <section id="home" className="relative bg-white overflow-hidden pt-16 md:pt-[104px]">

            {/* ══════════════════════════════════════════
                HERO — responsive layout
                mobile: image on top, text content below
                desktop: full-width background image with text overlay
            ══════════════════════════════════════════ */}
            <div className="relative flex flex-col md:min-h-[calc(100vh-104px)] md:flex-row md:items-center">

                {/* ── IMAGE CONTAINER ── */}
                <div className="relative w-full h-[40vh] min-h-[280px] md:absolute md:inset-0 md:h-full">
                    <Image
                        src="/newImage.png"
                        alt="Professional waterproofing application on rooftop"
                        fill
                        className="object-cover object-[85%_top] md:object-top"
                        priority
                        fetchPriority="high"
                        sizes="100vw"
                        quality={90}
                    />
                </div>

                {/* ── GRADIENT OVERLAY — white on left, transparent on right (desktop only) ── */}
                <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/10 pointer-events-none" />
                {/* Hello  hbedhfbashbfhasbhfbshbfhbshfb*/}
                {/* ── TEXT CONTENT — z-10 over the gradient ── */}
                <div className="
                    relative z-10
                    w-full
                    pt-8 md:pt-16
                    pb-16 md:pb-20
                    px-5 sm:px-8 md:px-12 lg:px-[max(3rem,calc((100vw-1280px)/2+3rem))]
                    bg-white md:bg-transparent
                ">
                    <div className="max-w-[520px] space-y-5">

                        {/* Breadcrumb */}
                        <p className="text-[11px] font-bold text-green-700 uppercase tracking-widest leading-tight">
                            BHAWANI TECHNOLOGIES
                        </p>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-extrabold leading-[1.1] text-gray-900">
                            A Complete{" "}
                            <span className="text-green-600 block">Waterproofing</span>
                            <span className="text-green-600 block">Solution</span>
                        </h1>

                        {/* Subheading Badge */}
                        <p className="text-xs md:text-sm font-bold text-green-700 uppercase tracking-wider">
                            Professional Waterproofing Services — Supply &amp; Application
                        </p>

                        {/* Description */}
                        <p className="text-gray-600 text-sm md:text-[0.95rem] leading-relaxed max-w-[420px]">
                            We specialize in the supply and application of high-performance waterproofing systems for residential, commercial, and industrial buildings. Our services include terrace waterproofing, basement waterproofing, bathroom waterproofing, water tank waterproofing, PU coating, epoxy flooring, crack repair, and injection grouting.
                        </p>

                        {/* 2-column feature checkmarks */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                            {checks.map((text, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <svg
                                        viewBox="0 0 22 22"
                                        fill="none"
                                        className="w-[18px] h-[18px] shrink-0"
                                    >
                                        <circle cx="11" cy="11" r="11" fill="#16a34a" />
                                        <path
                                            d="M6 11.5l3.5 3.5 6.5-7"
                                            stroke="white"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <span className="text-[13px] text-gray-700 font-medium leading-snug">{text}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-1">
                            <a
                                href="tel:+917677779418"
                                id="hero-call-btn"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm"
                            >
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4"
                                >
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.05 12.05 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" />
                                </svg>
                                Call Us Now
                            </a>
                            <a
                                href="#services"
                                id="hero-services-btn"
                                className="inline-flex items-center justify-center gap-2 px-7 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg bg-white/80 hover:border-green-500 hover:text-green-700 transition-all duration-200 text-sm"
                            >
                                View All Services
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-4 h-4"
                                >
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                    <polyline points="12 5 19 12 12 19" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

            </div>

            {/* ══════════════════════════════════════════
                STATS BAR — floating rounded white card
                overlapping the bottom of the hero
            ══════════════════════════════════════════ */}
            <div className="relative z-20 px-4 sm:px-6 lg:px-10 -mt-8 sm:-mt-10 pb-8 sm:pb-10">
                <div className="container mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl ring-1 ring-black/5">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                            {stats.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 px-4 sm:px-5 py-5 sm:py-6
                                               border-b sm:border-b-0 lg:border-r border-gray-100
                                               [&:nth-child(2n)]:border-r-0 sm:[&:nth-child(2n)]:border-r
                                               lg:[&:nth-child(2n)]:border-r lg:last:border-r-0
                                               hover:bg-gray-50 transition-colors duration-200 group rounded-2xl"
                                >
                                    <div
                                        className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center
                                                    group-hover:scale-110 transition-transform duration-200
                                                    ${badgeColors[item.color]}`}
                                    >
                                        {item.icon}
                                    </div>
                                    <div>
                                        <p className="text-[13px] font-bold text-gray-800 leading-tight mb-0.5">{item.title}</p>
                                        <p className="text-[11px] text-gray-500 leading-snug">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}