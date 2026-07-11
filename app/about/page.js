import { ShieldCheck, Users, Target, Award } from "lucide-react";
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Creating a Sense of Belonging</h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                BHAWANI TECHNOLOGIES is a well-diversified organization. To make it an enduring brand and an eternal organization, we believe in creating a strong sense of belonging. While our organization has been growing tremendously over the years, so have the bunch of talented and dedicated people who have made it possible. Not surprisingly, we have perhaps the lowest attrition rate in the industry.
                            </p>
                            <p>
                                Our Construction Chemicals Division (CCD) is specialized in the Trading and Application of Construction Chemicals, focusing on waterproofing systems and industrial epoxy floorings, backed by a highly creative and technical staff.
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
                                CA
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Consultative Approach</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                BHAWANI TECHNOLOGIES follows a consultative approach. Our marketing and technical members first understand your business and goals, asking <strong>"What we can do about it"</strong> to offer tailored products accordingly.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">
                                OPEX
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Operational Excellence</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                A methodology for solving problems and continuous improvement of products & processes through acquisition & utilization of knowledge, using critical thought and planned experimentation.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6 font-bold text-xl">
                                AA
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Authorized Applicators</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                We feature a team of highly-skilled applicators, authorized directly by the parent company, which ensures high quality, reliable execution, and maximum performance of all applied products.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
