"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Roof Waterproofing", href: "/services/roof-waterproofing" },
    { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        setIsOpen(false);
        if (href.startsWith("#")) {
            e.preventDefault();
            const element = document.querySelector(href);
            if (element) {
                const headerOffset = 110;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            }
        }
    };

    return (
        <>
            {/* Top Contact Bar */}
            <div className={`hidden md:block fixed left-0 right-0 z-50 bg-[#1a2e1a] text-white text-xs transition-all duration-300 ${isScrolled ? "-top-9" : "top-0"
                }`}>
                <div className="container mx-auto px-4 md:px-12 flex justify-between items-center h-9">
                    {/* Left: Phone + Email */}
                    <div className="flex items-center gap-6">
                        <a href="tel:+917677779418" className="flex items-center gap-1.5 hover:text-green-400 transition-colors">
                            <Phone size={12} />
                            <span>+91 76777 79418</span>
                        </a>
                        <a href="mailto:bhawanitechnologies01@gmail.com" className="flex items-center gap-1.5 hover:text-green-400 transition-colors">
                            <Mail size={12} />
                            <span>bhawanitechnologies01@gmail.com</span>
                        </a>
                    </div>
                    {/* Right: Location + Social */}
                    <div className="flex items-center gap-5">
                        <a 
                            href="https://maps.google.com/?q=C-288,+New+Ashok+Nagar,+Delhi,+Near+Rajdhani+Medical+Centre"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-gray-300 hover:text-green-400 transition-colors"
                        >
                            <MapPin size={12} />
                            <span>Delhi NCR, India</span>
                        </a>
                        <div className="flex items-center gap-3 ml-2">
                            {/* Facebook */}
                            <a href="#" aria-label="Facebook" className="hover:text-green-400 transition-colors">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            {/* Instagram */}
                            <a href="#" aria-label="Instagram" className="hover:text-green-400 transition-colors">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            {/* WhatsApp */}
                            <a href="https://wa.me/917677779418" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-400 transition-colors">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.305-5.235c0-5.443 4.429-9.876 9.878-9.876 2.639 0 5.122 1.026 6.988 2.894a9.825 9.825 0 012.893 6.991c-.003 5.444-4.432 9.876-9.883 9.876m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <nav
                className={`fixed w-full z-40 transition-all duration-300 bg-white shadow-sm ${isScrolled ? "md:top-0 shadow-md" : "md:top-9"
                    }`}
            >
                <div className="container mx-auto px-4 md:px-12 flex justify-between items-center h-16 md:h-[68px]">
                    {/* Logo */}
                    <Link
                        href="/"
                        className={`flex items-center gap-2 z-50 cursor-pointer transition-opacity duration-300 ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}`}
                    >
                        <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden bg-green-50 flex items-center justify-center border border-green-100">
                            <Image
                                src="/BhawaniTechLogo.png"
                                alt="Bhawani Technologies"
                                width={48}
                                height={48}
                                className="w-full h-full object-contain p-1"
                                quality={95}
                                priority
                            />
                        </div>
                        <div className="leading-tight">
                            <span className="text-base md:text-lg font-extrabold text-[#1a2e1a] block tracking-wide">BHAWANI</span>
                            <span className="text-[10px] text-green-600 tracking-widest uppercase font-bold">TECHNOLOGIES</span>
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1 lg:gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md transition-all cursor-pointer whitespace-nowrap"
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown size={13} className="opacity-60" />}
                            </Link>
                        ))}
                    </div>

                    {/* WhatsApp CTA */}
                    <div className="hidden md:flex items-center">
                        <a
                            href="https://wa.me/917677779418"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.305-5.235c0-5.443 4.429-9.876 9.878-9.876 2.639 0 5.122 1.026 6.988 2.894a9.825 9.825 0 012.893 6.991c-.003 5.444-4.432 9.876-9.883 9.876m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            WhatsApp Us
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden z-50 text-gray-700 p-2"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isOpen}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 md:hidden z-40">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className="text-xl font-medium text-gray-800 hover:text-green-600 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="https://wa.me/917677779418"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg"
                            >
                                WhatsApp Us
                            </a>
                        </div>
                    )}
                </div>
            </nav>

            {/* Mobile Phone Floating Button */}
            <a
                href="tel:+917677779418"
                className="fixed bottom-6 left-6 z-[100] md:hidden flex items-center justify-center w-14 h-14 bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
                aria-label="Call us"
            >
                <Phone className="w-6 h-6 text-white" />
            </a>

            {/* Mobile WhatsApp Floating Button */}
            <a
                href="https://wa.me/917677779418"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-[100] md:hidden flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300"
                aria-label="Contact us on WhatsApp"
            >
                <svg viewBox="0 0 24 24" fill="white" className="w-8 h-8" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.305-5.235c0-5.443 4.429-9.876 9.878-9.876 2.639 0 5.122 1.026 6.988 2.894a9.825 9.825 0 012.893 6.991c-.003 5.444-4.432 9.876-9.883 9.876m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
        </>
    );
}