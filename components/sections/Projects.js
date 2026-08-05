"use client";

import { useState, useMemo } from "react";
import {
    Home, Building2, Factory, Waves, Plane, Sparkles, Shield,
    Search, ChevronLeft, ChevronRight, Briefcase, Play,
    Construction, Layers, Box, Info
} from "lucide-react";

// 23 Completed Projects (waterproofing only)
const completedProjects = [
    { id: "01", project: "BP Sangle", client: "MSPHC", service: "Waterproofing", year: "2014-15" },
    { id: "02", project: "PTC Dulahay", client: "MSPHC", service: "APP Waterproofing", year: "2017-18" },
    { id: "03", project: "SRP Camp Jana", client: "Kunal Structure", service: "Waterproofing", year: "2017-18" },
    { id: "04", project: "SP Office Police Staff Quarter (Chiplun)", client: "MSPHC", service: "APP Waterproofing", year: "2017-18" },
    { id: "05", project: "Regency Tower", client: "Regency Tower Members", service: "Waterproofing Retrofitting", year: "2017-18" },
    { id: "06", project: "SP Office & Quarter, Administrative Building (Osmanabad)", client: "Dhansmurti Wildcone Pvt. Ltd.", service: "PU Waterproofing", year: "2020-21" },
    { id: "07", project: "Police Headquarters (Beed)", client: "Dhansmurti Wildcone Pvt. Ltd.", service: "PU Waterproofing", year: "2020-21" },
    { id: "08", project: "Police Quarter (Qandeshwar)", client: "Dhansmurti Wildcone Pvt. Ltd.", service: "PU Waterproofing", year: "2020-21" },
    { id: "09", project: "SDPO Office & Quarter (Dariyapur)", client: "Dhansmurti Wildcone Pvt. Ltd.", service: "PU Waterproofing", year: "2021-22" },
    { id: "10", project: "FWS Warehouse (Najafgarh)", client: "Akansha Construction", service: "HDPE Waterproofing", year: "2021-22" },
    { id: "11", project: "BPO Tower Tech City (Assam)", client: "SNS Infracon Pvt. Ltd.", service: "HDPE Membrane Waterproofing", year: "2021-22" },
    { id: "12", project: "SRF (Chiplun, Maharashtra)", client: "Maharashtra Police", service: "APP Membrane Waterproofing", year: "2016-17" },
    { id: "13", project: "Brooks Laboratories", client: "Brooks Steriscience Plant (Vadodara)", service: "TPO Membrane Waterproofing", year: "2022-23" },
    { id: "14", project: "BECIL Project", client: "Spectrum Broadcast Infrastructure", service: "HDPE Membrane Waterproofing", year: "2023-24" },
    { id: "15", project: "Havells SDA Expansion (Haridwar)", client: "Narander Construction", service: "EPDM Waterproofing", year: "2023-24" },
    { id: "16", project: "MILLP – UMBM Bawal", client: "Minda Infrastructure", service: "Waterproofing", year: "2023-24" },
    { id: "17", project: "Havells Neemrana", client: "Minda Infrastructure", service: "TPO Waterproofing", year: "2023-24" },
    { id: "18", project: "Novelty Street", client: "Asteroid Shelters", service: "HDPE Membrane Waterproofing", year: "2023-24" },
    { id: "19", project: "L&T IT Park, Faridabad", client: "Disha Construction", service: "HDPE Membrane Waterproofing", year: "2023-24" },
    { id: "20", project: "Spectrum Phase-2 (Sector-75, Noida)", client: "Disha Construction", service: "Roof Waterproofing", year: "2024-25" },
    { id: "21", project: "Sawasdee Gems (Paschim Vihar, Delhi)", client: "Panch Tatva Promoters", service: "D-Wall Waterproofing", year: "2024-25" },
    { id: "22", project: "Sharda University", client: "RSPL", service: "Waterproofing", year: "2024-25" },
    { id: "23", project: "Venkateshwara Hospital (Rohini, Delhi)", client: "WG Constructions", service: "Waterproofing", year: "2024-25" }
];

// 12 Ongoing Projects
const ongoingProjects = [
    { id: "01", project: "City of Dreams", client: "SBP Housing Pvt. Ltd.", service: "HDPE Waterproofing", status: "Running" },
    { id: "02", project: "M3M (Sector-71, Gurgaon)", client: "Broadway", service: "Waterproofing", status: "Running" },
    { id: "03", project: "Unitech Amber (External)", client: "Svarnim Infrastructures Pvt. Ltd.", service: "Crystalline Waterproofing", status: "Running" },
    { id: "04", project: "Tamil Nadu House", client: "SKYGRID", service: "HDPE + SBS Waterproofing", status: "Running" },
    { id: "05", project: "Guwahati Airport, Assam", client: "PK & Company", service: "HDPE Waterproofing", status: "Running" },
    { id: "06", project: "Star City", client: "Star City Infra Developers", service: "HDPE + SBS Waterproofing", status: "Running" },
    { id: "07", project: "Sahu City", client: "Sahu Land Developers", service: "HDPE + SBS Waterproofing", status: "Running" },
    { id: "08", project: "MRG Crown", client: "MRG Group", service: "HDPE + SBS Waterproofing", status: "Running" },
    { id: "09", project: "MES Projects", client: "SOM Projects Pvt. Ltd.", service: "HDPE + Crystalline Waterproofing", status: "Running" },
    { id: "10", project: "Unitech Burgundy", client: "Svarnim Infrastructures Pvt. Ltd.", service: "Crystalline Waterproofing", status: "Running" },
    { id: "11", project: "F Tower, Ludhiana", client: "SBP Housing Pvt. Ltd.", service: "HDPE Waterproofing", status: "Running" },
    { id: "12", project: "FH1 Farm House", client: "Waltham Constructions & Management Services", service: "HDPE Waterproofing", status: "Running" }
];



// 10 Industries Served
const industries = [
    { name: "Residential", desc: "Protecting homes and housing societies for the long term", icon: Home },
    { name: "Commercial", desc: "Reliable solutions for offices and business complexes", icon: Building2 },
    { name: "Warehouses & Industries", desc: "Durable systems for large-scale storage and manufacturing", icon: Box },
    { name: "Factories", desc: "Built to withstand demanding industrial conditions", icon: Factory },
    { name: "Dams", desc: "Critical waterproofing for major water infrastructure", icon: Waves },
    { name: "Tunnels", desc: "Specialized below-grade and underground protection", icon: Shield },
    { name: "Roads & Highways", desc: "Strengthening vital transportation networks", icon: Construction },
    { name: "Bridges", desc: "Safeguarding decks and structural connections", icon: Layers },
    { name: "Airports", desc: "Trusted by national aviation infrastructure projects", icon: Plane },
    { name: "& Many More", desc: "Tailored solutions for every project, big or small", icon: Sparkles }
];

export default function Projects() {
    const [activeTab, setActiveTab] = useState("completed");
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);

    // Reset pagination when search query or tab changes
    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSearchQuery("");
        setCurrentPage(1);
    };

    // Filter projects based on search query
    const filteredProjects = useMemo(() => {
        const query = searchQuery.toLowerCase().trim();
        const list = activeTab === "completed" ? completedProjects : ongoingProjects;
        if (!query) return list;

        return list.filter(item =>
            item.project.toLowerCase().includes(query) ||
            item.client.toLowerCase().includes(query) ||
            item.service.toLowerCase().includes(query) ||
            (item.year && item.year.toLowerCase().includes(query))
        );
    }, [searchQuery, activeTab]);

    // Paginated list
    const paginatedProjects = useMemo(() => {
        if (pageSize === -1) return filteredProjects; // Show all
        const startIndex = (currentPage - 1) * pageSize;
        return filteredProjects.slice(startIndex, startIndex + pageSize);
    }, [filteredProjects, currentPage, pageSize]);

    const totalPages = useMemo(() => {
        if (pageSize === -1) return 1;
        return Math.ceil(filteredProjects.length / pageSize) || 1;
    }, [filteredProjects, pageSize]);

    return (
        <section id="projects" className="py-16 md:py-28 bg-[#f8fafc] scroll-mt-20 relative overflow-hidden">
            {/* Background design accents */}
            <div className="absolute top-1/3 right-0 w-80 h-80 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 md:px-12 relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="w-6 h-[1.5px] bg-emerald-600 rounded-full opacity-60"></span>
                        <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                        <span className="text-emerald-600 font-bold text-xs md:text-sm tracking-widest uppercase px-1">
                            Our Track Record
                        </span>
                        <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                        <span className="w-6 h-[1.5px] bg-emerald-600 rounded-full opacity-60"></span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-5 tracking-tight leading-tight">
                        Our Completed & <span className="text-emerald-700">Ongoing Projects</span>
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
                        Over the years, Leakseal Structure Solutions Pvt. Ltd. (LSSPL) has delivered 25+ successful waterproofing and structural projects across India — from residential societies and hospitals to police infrastructure, metro projects, and corporate IT parks. Our growing portfolio reflects the trust clients place in our quality and reliability.
                    </p>
                </div>

                {/* Tab Navigation buttons */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-10 max-w-4xl mx-auto bg-white/70 backdrop-blur-md p-2 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm">
                    <button
                        onClick={() => handleTabChange("completed")}
                        className={`flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3.5 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                            activeTab === "completed"
                                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/10 scale-102"
                                : "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/50"
                        }`}
                    >
                        <Briefcase size={16} />
                        Completed Projects
                    </button>
                    <button
                        onClick={() => handleTabChange("ongoing")}
                        className={`flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3.5 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                            activeTab === "ongoing"
                                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/10 scale-102"
                                : "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/50"
                        }`}
                    >
                        <Play size={16} />
                        Live Projects
                    </button>

                    <button
                        onClick={() => handleTabChange("industries")}
                        className={`flex items-center gap-2 px-4 py-2.5 md:px-6 md:py-3.5 rounded-xl md:rounded-2xl text-xs md:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                            activeTab === "industries"
                                ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/10 scale-102"
                                : "text-slate-600 hover:text-emerald-600 hover:bg-emerald-50/50"
                        }`}
                    >
                        <Home size={16} />
                        Industries We Serve
                    </button>

                </div>

                {/* Tab Contents */}
                <div className="transition-all duration-300">
                    {(activeTab === "completed" || activeTab === "ongoing") && (
                        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden p-6 md:p-8">
                            {/* Description sub-header for active/live projects */}
                            {activeTab === "ongoing" && (
                                <div className="mb-6 bg-emerald-50/50 border border-emerald-100/50 rounded-2xl p-4 md:p-5 flex items-start gap-3">
                                    <Info className="text-emerald-600 shrink-0 mt-0.5" size={18} />
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-800 mb-1">Projects Currently in Progress</h4>
                                        <p className="text-xs md:text-sm text-slate-600">
                                            We're actively executing 12+ live projects with leading developers and infrastructure companies, applying advanced waterproofing systems including HDPE, SBS, and Crystalline technologies.
                                        </p>
                                    </div>
                                </div>
                            )}

                            {/* Search and Table Settings */}
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
                                <div className="relative w-full sm:max-w-md">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Search by project, client, or service..."
                                        value={searchQuery}
                                        onChange={(e) => {
                                            setSearchQuery(e.target.value);
                                            setCurrentPage(1);
                                        }}
                                        className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:bg-white transition-all text-slate-800 placeholder:text-slate-400"
                                    />
                                </div>

                                <div className="flex items-center gap-2 self-end sm:self-center text-xs md:text-sm text-slate-600">
                                    <span>Show</span>
                                    <select
                                        value={pageSize}
                                        onChange={(e) => {
                                            setPageSize(Number(e.target.value));
                                            setCurrentPage(1);
                                        }}
                                        className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-emerald-500 transition-all font-semibold"
                                    >
                                        <option value={5}>5</option>
                                        <option value={10}>10</option>
                                        <option value={25}>25</option>
                                        <option value={-1}>All</option>
                                    </select>
                                    <span>entries</span>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto -mx-6 md:-mx-8 border-y border-slate-100">
                                <table className="w-full border-collapse text-left text-xs md:text-sm">
                                    <thead>
                                        <tr className="bg-slate-900 text-white font-bold tracking-wider">
                                            <th className="py-4.5 px-6 whitespace-nowrap w-[60px]">#</th>
                                            <th className="py-4.5 px-6 min-w-[180px]">Project</th>
                                            <th className="py-4.5 px-6 min-w-[160px]">Client</th>
                                            <th className="py-4.5 px-6 min-w-[160px]">Service Applied</th>

                                            {activeTab === "completed" ? (
                                                <th className="py-4.5 px-6 whitespace-nowrap text-center min-w-[110px]">Year</th>
                                            ) : (
                                                <th className="py-4.5 px-6 whitespace-nowrap text-center min-w-[110px]">Status</th>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100 text-slate-700">
                                        {paginatedProjects.length > 0 ? (
                                            paginatedProjects.map((row, idx) => (
                                                <tr
                                                    key={row.id}
                                                    className="hover:bg-slate-50/50 transition-colors"
                                                >
                                                    <td className="py-4 px-6 text-slate-400 font-semibold">{row.id}</td>
                                                    <td className="py-4 px-6 font-bold text-slate-900 whitespace-normal leading-snug">{row.project}</td>
                                                    <td className="py-4 px-6 font-medium whitespace-normal leading-snug">{row.client}</td>
                                                    <td className="py-4 px-6 whitespace-normal leading-snug">
                                                        <span className="inline-block bg-slate-100 text-slate-700 text-[10.5px] font-bold px-2.5 py-1 rounded-md">
                                                            {row.service}
                                                        </span>
                                                    </td>

                                                    <td className="py-4 px-6 text-center">
                                                        {activeTab === "completed" ? (
                                                            <span className="text-slate-500 font-semibold">{row.year}</span>
                                                        ) : (
                                                            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-extrabold px-3 py-1 rounded-full border border-emerald-100">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                                                Running
                                                            </span>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan={6} className="py-12 text-center text-slate-400 font-medium text-sm">
                                                    No projects match your search query.
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>

                            {/* Pagination Controls */}
                            {pageSize !== -1 && filteredProjects.length > 0 && (
                                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6 pt-2">
                                    <p className="text-xs md:text-sm text-slate-500 font-medium text-center sm:text-left">
                                        Showing <span className="font-bold text-slate-800">{Math.min(filteredProjects.length, (currentPage - 1) * pageSize + 1)}</span> to{" "}
                                        <span className="font-bold text-slate-800">{Math.min(filteredProjects.length, currentPage * pageSize)}</span> of{" "}
                                        <span className="font-bold text-slate-800">{filteredProjects.length}</span> entries
                                    </p>

                                    <div className="flex items-center gap-1 bg-slate-50 p-1.5 rounded-xl border border-slate-100">
                                        <button
                                            onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                                            disabled={currentPage === 1}
                                            className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-100 transition-colors disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-slate-600 disabled:hover:border-slate-200 cursor-pointer"
                                            aria-label="Previous page"
                                        >
                                            <ChevronLeft size={16} />
                                        </button>

                                        {Array.from({ length: totalPages }).map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentPage(i + 1)}
                                                className={`w-8 h-8 rounded-lg text-xs md:text-sm font-bold transition-all cursor-pointer ${
                                                    currentPage === i + 1
                                                        ? "bg-emerald-600 text-white shadow-sm"
                                                        : "text-slate-600 hover:bg-slate-100"
                                                }`}
                                            >
                                                {i + 1}
                                            </button>
                                        ))}

                                        <button
                                            onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                                            disabled={currentPage === totalPages}
                                            className="p-1.5 rounded-lg border border-slate-200 bg-white text-slate-600 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-100 transition-colors disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-slate-600 disabled:hover:border-slate-200 cursor-pointer"
                                            aria-label="Next page"
                                        >
                                            <ChevronRight size={16} />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}



                    {activeTab === "industries" && (
                        <div>
                            {/* Sub header */}
                            <div className="mb-10 text-center max-w-2xl mx-auto">
                                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Industries We Serve</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    Our waterproofing and structural solutions are trusted across a wide spectrum of sectors — engineered to meet the unique demands of every environment.
                                </p>
                            </div>

                            {/* Industries Cards Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
                                {industries.map((ind, idx) => {
                                    const IconComponent = ind.icon;
                                    return (
                                        <div
                                            key={idx}
                                            className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex gap-4 md:gap-5 group"
                                        >
                                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                                                <IconComponent size={24} className="md:w-7 md:h-7" />
                                            </div>
                                            <div className="space-y-1 md:space-y-1.5 self-center">
                                                <h4 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-tight">
                                                    {ind.name}
                                                </h4>
                                                <p className="text-xs md:text-sm text-gray-500 leading-relaxed leading-snug whitespace-normal">
                                                    {ind.desc}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}


                </div>
            </div>
        </section>
    );
}
