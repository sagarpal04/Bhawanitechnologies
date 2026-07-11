"use client";
import { useState } from "react";
import Image from "next/image";

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        if (!formData.name || !formData.email || !formData.message) {
            setStatus("error");
            return;
        }

        setLoading(true);
        setStatus("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    source: "contact_page"
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
            console.error("Form submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#0B1E33] relative overflow-hidden scroll-mt-20">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/newImage2.png"
                    alt="Waterproofing applicator background"
                    fill
                    className="object-cover opacity-25"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0B1E33]/30 via-[#0B1E33]/60 to-[#0B1E33]/90" />
            </div>

            {/* Main Content Container */}
            <section className="relative z-10 pt-28 pb-12 lg:pt-36">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                        
                        {/* Left Side: Text and Contact Cards */}
                        <div className="lg:col-span-5 space-y-8">
                            {/* Header */}
                            <div>
                                <p className="text-green-500 font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
                                    <span>CONTACT US</span>
                                    <span className="w-8 h-[2px] bg-green-500"></span>
                                </p>
                                <h2 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight tracking-tight">
                                    Let's Build Stronger,<br />
                                    <span className="text-green-500">Together.</span>
                                </h2>
                                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mt-4">
                                    Have a question or need expert advice? We're here to help you with all your waterproofing and construction chemical needs. Reach out to us and our team will get back to you promptly.
                                </p>
                            </div>

                            {/* Contact Info Cards */}
                            <div className="space-y-4">
                                {/* Call Us */}
                                <a 
                                    href="tel:+917677779418"
                                    className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-green-500/30 transition-all duration-300 group relative block"
                                >
                                    <div className="flex-shrink-0 w-11 h-11 bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div className="pr-8">
                                        <h3 className="font-bold text-white text-base">Call Us</h3>
                                        <span className="text-slate-300 font-semibold text-sm mt-0.5 block">+91 76777 79418</span>
                                        <span className="text-slate-400 text-xs mt-0.5 block">Mon - Sat: 9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </a>

                                {/* Email Now */}
                                <a 
                                    href="mailto:bhawanitechnologies01@gmail.com"
                                    className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-green-500/30 transition-all duration-300 group relative block"
                                >
                                    <div className="flex-shrink-0 w-11 h-11 bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl flex items-center justify-center group-hover:bg-green-500 group-hover:text-white transition-colors duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div className="pr-8">
                                        <h3 className="font-bold text-white text-base">Email Now</h3>
                                        <span className="text-slate-300 font-semibold text-sm mt-0.5 block break-all">bhawanitechnologies01@gmail.com</span>
                                        <span className="text-slate-400 text-xs mt-0.5 block">We reply within a few hours</span>
                                    </div>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </a>

                                {/* Application Authorization */}
                                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-green-500/30 transition-all duration-300 group relative">
                                    <div className="flex-shrink-0 w-11 h-11 bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl flex items-center justify-center group-hover:bg-green-505 group-hover:text-white transition-colors duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                    </div>
                                    <div className="pr-8">
                                        <h3 className="font-bold text-white text-base">Application Authorization</h3>
                                        <span className="text-slate-300 font-semibold text-sm mt-0.5 block">Authorized Application Team</span>
                                        <span className="text-slate-400 text-xs mt-0.5 block">BHAWANI TECHNOLOGIES</span>
                                    </div>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Head Office */}
                                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-green-500/30 transition-all duration-300 group relative">
                                    <div className="flex-shrink-0 w-11 h-11 bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl flex items-center justify-center group-hover:bg-green-505 group-hover:text-white transition-colors duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div className="pr-8">
                                        <h3 className="font-bold text-white text-base">Head Office</h3>
                                        <span className="text-slate-300 text-sm mt-0.5 block leading-relaxed">
                                            Vandana Enclave, Shital Vihar, Khora Colony, Sector 62, Ghaziabad, Noida, Uttar Pradesh 201020
                                        </span>
                                    </div>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Branch Office */}
                                <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:bg-white/[0.04] hover:border-green-500/30 transition-all duration-300 group relative">
                                    <div className="flex-shrink-0 w-11 h-11 bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl flex items-center justify-center group-hover:bg-green-505 group-hover:text-white transition-colors duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    <div className="pr-8">
                                        <h3 className="font-bold text-white text-base">Branch Office</h3>
                                        <span className="text-slate-300 text-sm mt-0.5 block leading-relaxed">
                                            H.No - S-319, School Block, Block S1, Shakarpur, Delhi - 110092
                                        </span>
                                    </div>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all duration-300">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Message Form */}
                        <div className="lg:col-span-7 bg-white rounded-[32px] p-8 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden border border-slate-100">
                            {/* Dot Pattern in Corner */}
                            <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.07] pointer-events-none bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:16px_16px] m-4"></div>

                            {/* Header Row */}
                            <div className="flex items-center gap-4 mb-8">
                                <div className="flex-shrink-0 w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-green-600 border border-green-100/50">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Send us a message</h3>
                                    <p className="text-xs sm:text-sm text-gray-500">We'll get back to you as soon as possible</p>
                                </div>
                            </div>

                            <div className="space-y-5">
                                {/* Name */}
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                                        Name <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative flex items-center">
                                        <div className="absolute left-4 text-gray-400 pointer-events-none">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all outline-none text-gray-800 placeholder-gray-400 text-sm"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div>
                                    <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <div className="relative flex items-center">
                                        <div className="absolute left-4 text-gray-400 pointer-events-none">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all outline-none text-gray-800 placeholder-gray-400 text-sm"
                                            required
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="phone" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                                        Phone <span className="text-gray-400 font-normal lowercase">(Optional)</span>
                                    </label>
                                    <div className="relative flex items-center">
                                        <div className="absolute left-4 text-gray-400 pointer-events-none">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 98765 43210"
                                            className="w-full pl-12 pr-4 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all outline-none text-gray-800 placeholder-gray-400 text-sm"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-1.5 uppercase tracking-wider">
                                        Message <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us about your waterproofing needs..."
                                        rows={4}
                                        className="w-full px-4 py-4 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:ring-2 focus:ring-green-500/20 focus:border-green-600 transition-all outline-none text-gray-800 placeholder-gray-400 text-sm resize-none"
                                        required
                                    />
                                </div>

                                {/* Status Messages */}
                                {status === "success" && (
                                    <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-xs sm:text-sm font-medium flex items-center gap-2 animate-fade-in">
                                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                        Message sent successfully! We'll get back to you soon.
                                    </div>
                                )}
                                {status === "error" && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-xs sm:text-sm font-medium flex items-center gap-2 animate-fade-in">
                                        <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                        Please fill in all required fields correctly.
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    onClick={handleSubmit}
                                    disabled={loading}
                                    className="w-full bg-[#00875A] hover:bg-[#00734c] text-white font-bold py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-green-955/20 flex items-center justify-center gap-2 text-base group"
                                >
                                    {loading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-4 h-4 text-white transform rotate-45 -mt-0.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="22" y1="2" x2="11" y2="13" />
                                                <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                            </svg>
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>

                                {/* Privacy Footer */}
                                <div className="flex items-center justify-center gap-2 mt-4 pt-1 border-t border-gray-100">
                                    <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <span className="text-xs text-gray-500 font-medium">Your information is safe with us. We never share your data.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Bar - floating inside the dark section */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 pt-12 pb-24 md:pb-32">
                <div className="bg-white rounded-[24px] shadow-2xl shadow-slate-900/10 border border-slate-100 p-6 md:p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Quick Response */}
                        <div className="flex items-center gap-4 lg:pr-4 lg:border-r lg:border-gray-100 last:border-0">
                            <div className="flex-shrink-0 w-11 h-11 bg-green-50 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Quick Response</h4>
                                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">We respond within 24 hours</p>
                            </div>
                        </div>

                        {/* Expert Support */}
                        <div className="flex items-center gap-4 lg:pr-4 lg:border-r lg:border-gray-100 last:border-0">
                            <div className="flex-shrink-0 w-11 h-11 bg-green-50 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Expert Support</h4>
                                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">Get advice from our experienced team</p>
                            </div>
                        </div>

                        {/* Quality Assurance */}
                        <div className="flex items-center gap-4 lg:pr-4 lg:border-r lg:border-gray-100 last:border-0">
                            <div className="flex-shrink-0 w-11 h-11 bg-green-50 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Quality Assurance</h4>
                                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">Premium products & reliable solutions</p>
                            </div>
                        </div>

                        {/* Nationwide Service */}
                        <div className="flex items-center gap-4 lg:pr-4 last:border-0">
                            <div className="flex-shrink-0 w-11 h-11 bg-green-50 rounded-full flex items-center justify-center">
                                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 text-sm">Nationwide Service</h4>
                                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">Serving clients across India</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave Divider (Absolute positioned at the bottom of the entire dark section, transitioning to footer) */}
            <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-10 translate-y-[2px]">
                <svg className="relative block w-full h-[40px] sm:h-[60px] md:h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,60 C300,100 800,120 1200,0 L1200,120 L0,120 Z" fill="#141817" />
                </svg>
            </div>
        </div>
    );
}
