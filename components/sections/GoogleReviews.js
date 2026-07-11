"use client";
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const googleReviews = [
    {
        name: "Rahul Sharma",
        initial: "R",
        color: "bg-orange-600",
        time: "2 weeks ago",
        stars: 5,
        content: "Bhawani Technologies solved the leakage problem on our terrace permanently. The team was professional, completed the work on time, and explained every step clearly. Highly recommended."
    },
    {
        name: "Priya Verma",
        initial: "P",
        color: "bg-pink-600",
        time: "1 month ago",
        stars: 5,
        content: "Excellent waterproofing service. They repaired our basement before the monsoon, and there hasn't been any seepage since. Great workmanship and reasonable pricing."
    },
    {
        name: "Amit Kumar",
        initial: "A",
        color: "bg-blue-600",
        time: "3 weeks ago",
        stars: 5,
        content: "Very satisfied with the terrace waterproofing. The quality of materials used was excellent, and the team finished the project ahead of schedule."
    },
    {
        name: "Neha Gupta",
        initial: "N",
        color: "bg-green-600",
        time: "2 months ago",
        stars: 5,
        content: "We hired Bhawani Technologies for bathroom waterproofing. Their staff was polite, experienced, and ensured a clean finish. Would definitely recommend them."
    },
    {
        name: "Rohit Singh",
        initial: "R",
        color: "bg-indigo-600",
        time: "5 months ago",
        stars: 5,
        content: "Outstanding experience from inspection to completion. They identified the root cause of the leakage and fixed it permanently. Excellent customer support."
    },
    {
        name: "Pooja Mehta",
        initial: "P",
        color: "bg-red-600",
        time: "1 month ago",
        stars: 5,
        content: "Very professional team with good technical knowledge. Our roof no longer leaks even after heavy rainfall. Great service and transparent pricing."
    },
    {
        name: "Vikas Yadav",
        initial: "V",
        color: "bg-teal-600",
        time: "3 months ago",
        stars: 5,
        content: "I contacted them for industrial floor coating. The work quality exceeded my expectations, and they completed everything within the promised timeline."
    },
    {
        name: "Sneha Kapoor",
        initial: "S",
        color: "bg-purple-600",
        time: "4 weeks ago",
        stars: 5,
        content: "The free site inspection was very helpful. They suggested the right waterproofing solution without pushing unnecessary services. Honest and reliable company."
    },
    {
        name: "Arjun Malhotra",
        initial: "A",
        color: "bg-yellow-600",
        time: "6 months ago",
        stars: 5,
        content: "One of the best waterproofing companies in Delhi NCR. Skilled workers, premium materials, and excellent after-service support. I'm completely satisfied with the results."
    }
];

const cardThemes = [
    {
        primary: "text-green-600",
        bg: "bg-green-600",
        quote: "text-green-500",
        border: "border-gray-100",
        shadow: "shadow-sm",
        badge: null,
        svg: (
            <svg viewBox="0 0 100 30" className="absolute bottom-0 left-0 w-full h-12 opacity-10 pointer-events-none text-green-600" fill="currentColor">
                <path d="M0,30 V20 H10 V15 H15 V25 H25 V10 H30 V20 H40 V5 H45 V25 H55 V18 H60 V22 H70 V8 H75 V25 H85 V15 H90 V25 H100 V30 Z" />
            </svg>
        )
    },
    {
        primary: "text-blue-600",
        bg: "bg-blue-600",
        quote: "text-blue-500",
        border: "border-blue-200 ring-2 ring-blue-500/10",
        shadow: "shadow-md",
        badge: "Most Helpful",
        svg: (
            <svg viewBox="0 0 100 30" className="absolute bottom-0 left-0 w-full h-12 opacity-10 pointer-events-none text-blue-600" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M0,20 Q25,10 50,20 T100,20 V30 H0 Z" fill="currentColor" opacity="0.5" />
                <path d="M0,15 Q25,25 50,15 T100,15" />
            </svg>
        )
    },
    {
        primary: "text-purple-600",
        bg: "bg-purple-600",
        quote: "text-purple-500",
        border: "border-gray-100",
        shadow: "shadow-sm",
        badge: null,
        svg: (
            <svg viewBox="0 0 100 30" className="absolute bottom-0 left-0 w-full h-12 opacity-10 pointer-events-none text-purple-600" fill="currentColor">
                <path d="M0,30 V18 H8 V25 H16 V12 H24 V20 H32 V15 H40 V25 H48 V10 H56 V20 H64 V14 H72 V22 H80 V8 H88 V18 H96 V25 H100 V30 Z" />
            </svg>
        )
    }
];

function ReviewCard({ review, index }) {
    const theme = cardThemes[index % 3];
    return (
        <div className={`relative bg-white p-7 rounded-3xl ${theme.border} ${theme.shadow} h-[380px] flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden select-none`}>
            {/* Theme Badge (if any) */}
            {theme.badge && (
                <div className="absolute top-4 left-6 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center gap-1">
                    <span>★</span>
                    <span>{theme.badge}</span>
                </div>
            )}

            {/* Header */}
            <div className={`flex items-center gap-3.5 mb-5 ${theme.badge ? "mt-5" : ""}`}>
                <div className={`w-11 h-11 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-lg`}>
                    {review.initial}
                </div>
                <div>
                    <h4 className="font-extrabold text-gray-900 leading-tight text-[15px]">{review.name}</h4>
                    <p className="text-[11px] text-gray-400 font-semibold mt-0.5">{review.time}</p>
                </div>
                <div className="ml-auto flex flex-col items-end">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-4 h-4 mb-1" />
                    <div className="flex text-yellow-500 gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={11} fill="currentColor" className="text-yellow-400" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Open Quote Icon */}
            <span className={`text-4xl font-serif ${theme.quote} font-bold leading-none -mb-2`}>“</span>

            {/* Content */}
            <div className="flex-grow z-10 overflow-y-auto pr-1">
                <p className="text-gray-700 text-[13.5px] leading-relaxed font-medium">
                    {review.content}
                </p>
            </div>

            {/* Footer with Verified check */}
            <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-gray-500 z-10">
                <svg viewBox="0 0 24 24" className={`w-4 h-4 ${theme.primary} fill-current`} stroke="white" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9 12l2 2 4-4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[11px] tracking-wide">Verified Review</span>
            </div>

            {/* Bottom Skyline/Wave Background SVG */}
            {theme.svg}

            {/* Slanted corner triangle double-quote */}
            <div className="absolute bottom-0 right-0 w-14 h-14 overflow-hidden rounded-br-3xl">
                <div className={`absolute bottom-0 right-0 w-20 h-20 origin-bottom-right rotate-45 translate-x-10 translate-y-10 ${theme.bg}`} />
                <span className="absolute bottom-1.5 right-2.5 text-white font-extrabold text-[15px] z-10 font-serif leading-none">“</span>
            </div>
        </div>
    );
}

export default function GoogleReviews() {
    const [currentPage, setCurrentPage] = useState(0);

    const pages = [
        [googleReviews[0], googleReviews[1], googleReviews[2]],
        [googleReviews[3], googleReviews[4], googleReviews[5]],
        [googleReviews[6], googleReviews[7], googleReviews[8]],
    ];

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % 3);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + 3) % 3);
    };

    return (
        <section id="features" className="py-16 md:py-24 bg-white relative overflow-hidden scroll-mt-20 md:scroll-mt-[110px]">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}
            />

            {/* Background Dotted Circular Lines */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-dashed border-gray-100 rounded-full pointer-events-none z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] border border-dashed border-gray-100 rounded-full pointer-events-none z-0" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-8">
                    {/* Rounded Google Reviews Badge */}
                    <div className="inline-flex items-center gap-1.5 bg-white shadow-md shadow-gray-100 rounded-full px-4.5 py-2 border border-gray-100 text-xs md:text-sm font-bold text-blue-600 mb-5">
                        <span>GOOGLE REVIEWS</span>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-3.5 h-3.5" />
                    </div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight leading-none">
                        Trusted by <span className="text-blue-600">Homeowners</span>
                    </h2>

                    {/* Rating subline */}
                    <div className="flex items-center justify-center gap-2.5 text-sm md:text-base text-gray-400 font-bold">
                        <span className="text-gray-900 text-lg font-extrabold">4.8</span>
                        <div className="flex text-yellow-500 gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={14} fill="currentColor" className="text-yellow-400" />
                            ))}
                        </div>
                        <span className="text-gray-200">|</span>
                        <span className="text-[11px] tracking-widest font-extrabold uppercase">Based on 128 reviews</span>
                    </div>
                </div>

                {/* Carousel with navigation buttons */}
                <div className="relative max-w-6xl mx-auto px-4 md:px-12 mt-12">
                    {/* Left Button */}
                    <button
                        onClick={prevPage}
                        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-green-600 hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                        aria-label="Previous page"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    {/* Sliding Viewport */}
                    <div className="overflow-hidden w-full">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentPage * 100}%)` }}
                        >
                            {pages.map((pageItems, pageIdx) => (
                                <div key={pageIdx} className="w-full shrink-0 flex gap-6">
                                    {pageItems.map((review, cardIdx) => {
                                        const globalIdx = pageIdx * 3 + cardIdx;
                                        return (
                                            <div
                                                key={cardIdx}
                                                className={`
                                                    w-full
                                                    ${cardIdx === 0 ? "block" : "hidden md:block"}
                                                    ${cardIdx === 1 ? "md:block" : ""}
                                                    ${cardIdx === 2 ? "md:block" : ""}
                                                `}
                                            >
                                                <ReviewCard review={review} index={globalIdx} />
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Button */}
                    <button
                        onClick={nextPage}
                        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-md border border-gray-100 flex items-center justify-center text-green-600 hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                        aria-label="Next page"
                    >
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Indicators/Dots */}
                <div className="flex justify-center gap-2 mt-10">
                    {pages.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentPage(idx)}
                            className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                                currentPage === idx ? "bg-green-600 w-6" : "bg-gray-300 w-2.5 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to page ${idx + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
