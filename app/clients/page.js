import { Building2 } from "lucide-react";

export const metadata = {
    title: "Our Clients | Bhawani Technologies",
    description: "See our list of executed projects and top organizations that trust Bhawani Technologies for waterproofing and industrial flooring.",
};

const testimonials = [
    {
        name: "Niryat-Sam Apparels India Ltd. (Siddho Mal Group)",
        content: "Executed large-scale industrial epoxy flooring and anti-corrosive coatings for manufacturing areas.",
    },
    {
        name: "Omni Buildtech Pvt. Ltd.",
        content: "Implemented complete waterproofing admixtures, EPDM membranes, and PU injection grouting for basement structures.",
    },
    {
        name: "M2K Entertainment Pvt. Ltd.",
        content: "Applied high-performance polyurethane flooring and acoustics joint sealants for multiplex facilities.",
    },
    {
        name: "Marg ERP Limited",
        content: "Provided premium waterproofing coatings and tile grouts for corporate office premises.",
    },
    {
        name: "Pustak Mahal, Connaught Place",
        content: "Delivered specialized chemical injection grouting and wall dampness treatment for heritage commercial building.",
    },
    {
        name: "Hotel Hari Pariko",
        content: "Completed swimming pool and kitchen waterproofing using high-grade membrane systems and tile adhesives.",
    },
    {
        name: "Nirala World Residency Pvt. Ltd.",
        content: "Executed basement and terrace waterproofing using APP membranes and joint sealants for residential towers.",
    },
    {
        name: "Salasar Logistik Pvt. Ltd.",
        content: "Installed heavy-duty floor hardeners and dust-proofing systems for logistics warehouse floors.",
    },
    {
        name: "Amita Industries Pvt. Ltd.",
        content: "Applied industrial epoxy floorings and corrosion protection coatings for chemical storage sections.",
    },
    {
        name: "Sarvodaya Vidyalaya, Jahangirpuri (Boys)",
        content: "Conducted roof and toilet block waterproofing using elastomeric coatings for public school facility.",
    },
    {
        name: "Sarvodaya Vidyalaya, Mangolpuri (Girls)",
        content: "Delivered terrace waterproofing and heat reflective coatings to protect institutional buildings.",
    },
    {
        name: "A.I.A Infratech Pvt. Ltd.",
        content: "Supplied and installed woven & non-woven geotextiles and drain cells for major infrastructure projects.",
    },
    {
        name: "GST Bhawan, Bhikaji Cama Place",
        content: "Executed pressure injection grouting and expansion joint sealing for government administrative office building.",
    },
    {
        name: "Minda House, DLF Phase 2",
        content: "Completed high-end residential waterproofing including terrace APP membrane and bathroom wet area protection.",
    },
    {
        name: "Thapar University, Patiala (Punjab)",
        content: "Applied roof waterproofing systems, expansion joint sealants, and exterior protective coatings for university campus.",
    },
    {
        name: "M3M, Gurugram",
        content: "Installed high-performance epoxy floor coatings and podium drainage cell systems for luxury commercial development.",
    },
    {
        name: "GGG Realty Pvt. Ltd.",
        content: "Provided comprehensive construction chemicals, adhesives, and waterproofing membranes for multi-story residential project.",
    }
];

export default function ClientsPage() {
    return (
        <div className="bg-white pt-24 pb-20">
            {/* Header */}
            <div className="container mx-auto px-6 md:px-12 text-center mb-16">
                <span className="text-brand-primary font-bold tracking-wider uppercase text-sm mb-4 block">Trusted By</span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Valued Clients</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                    We are proud to have served a diverse range of clients, from major institutions to individual homeowners.
                </p>
            </div>

            {/* Grid */}
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300">
                            <div className="flex items-center gap-3 md:gap-4 mb-4">
                                <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-white shadow-sm flex items-center justify-center text-green-600 shrink-0">
                                    <Building2 size={20} />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-bold text-gray-900 text-base md:text-lg truncate">{item.name}</p>
                                    {item.location && <p className="text-xs md:text-sm text-gray-500 font-medium">{item.location}</p>}
                                </div>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">"{item.content}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
