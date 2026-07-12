import { Droplets, Umbrella, Layers, Box, Zap, Building2, CheckCircle, ArrowRight, Shield, Award, Search, HeartHandshake } from "lucide-react";
import Image from "next/image";

export const metadata = {
    title: "About Us | Bhawani Technologies",
    description: "Learn about Bhawani Technologies, our Construction Chemicals Division (CCD), and our core competencies in trading and application of waterproofing & epoxy flooring.",
};

export default function AboutPage() {
    return (
        <div className="bg-white mt-20">
            {/* Hero Banner */}
            <div className="bg-brand-light py-20 lg:py-28 relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
                    <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-4 block">Our Profile</span>
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">About Bhawani Technologies</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        A well-diversified organization with various profiles and divisions working towards excellence, combining creative and technical expertise.
                    </p>
                </div>
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-green-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="container mx-auto px-6 md:px-12 py-20">
                {/* Main Content Split */}
                <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
                    <div className="w-full lg:w-1/2">
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/image-17.jpg"
                                alt="Bhawani Technologies Team"
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 480px, 500px"
                                quality={80}
                                loading="lazy"
                            />
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Protecting Structures with Trusted Waterproofing Solutions</h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Bhawani Technologies is a professional waterproofing company specializing in the supply and application of high-performance waterproofing systems. We provide reliable solutions for residential, commercial, and industrial projects using premium construction chemicals and skilled workmanship.
                            </p>
                            <p>
                                With a commitment to quality, durability, and customer satisfaction, we help protect buildings from water leakage, seepage, dampness, and structural damage.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mt-10">
                            {[
                                { label: "Projects Completed", value: "500+" },
                                { label: "Years Experience", value: "10+" },
                                { label: "Expert Workers", value: "50+" },
                                { label: "Client Satisfaction", value: "100%" },
                            ].map((stat, i) => (
                                <div key={i} className="border-l-4 border-brand-primary pl-4">
                                    <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Core Competencies Cards */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-3 block">Why Choose Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Core Competencies</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-14 h-14 bg-green-100 text-brand-primary rounded-xl flex items-center justify-center mb-6 font-bold text-xl">
                                <Search size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Site Inspection</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                We inspect your property, identify the source of leakage, and recommend the best waterproofing solution.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">
                                <Award size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Quality Materials</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                We use high-performance waterproofing products from trusted brands for lasting protection.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">
                                <HeartHandshake size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Guaranteed Customer Satisfaction</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                We focus on timely execution, quality workmanship, and complete customer satisfaction.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
