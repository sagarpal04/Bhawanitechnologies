import { ShieldCheck, CheckCircle2, AlertTriangle, Layers, Thermometer, Droplets, Wrench, FileCheck, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function RoofWaterproofingGuide() {
    return (
        <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
            <div className="container mx-auto px-4 md:px-12 max-w-7xl">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-green-600 font-bold tracking-widest uppercase text-xs md:text-sm mb-3 block">
                        Technical Engineering Guide
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-5">
                        Comprehensive Roof Waterproofing &amp; Concrete Slab Protection
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Learn how professional roof waterproofing systems prevent water intrusion, eliminate interior ceiling water stains, and protect building foundations across Delhi NCR’s severe weather cycles.
                    </p>
                </div>

                {/* 1. Root Causes & Substrate Diagnostics */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20 bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
                    <div>
                        <span className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-700 text-xs font-bold rounded-full mb-4">
                            <AlertTriangle size={14} /> Substrate Diagnostics
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-snug">
                            Why Concrete Roof Slabs Fail: Ponding Water &amp; Thermal Expansion
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            In Delhi NCR, roof surfaces endure continuous temperature swings between 2°C in winter and 48°C in peak summer. This extreme 46°C thermal cycling exerts heavy stresses on the structural concrete roof deck, causing hairline cracks, joint debonding, and micro-fissures.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            When combined with inadequate roof slope (pitch), rainwater begins <strong>ponding (water stagnation)</strong> around blocked drain scuppers and parapet corners. Over time, standing water breaks down low-grade cementitious plaster, rusting the internal TMT rebar reinforcement and causing spalling concrete and damp indoor ceilings.
                        </p>
                        <ul className="space-y-2.5 text-xs md:text-sm text-gray-700">
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="text-red-500 shrink-0" size={16} />
                                <strong>Ponding Water Erosion:</strong> Stagnant water softens unsealed screeds within 48–72 hours.
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="text-red-500 shrink-0" size={16} />
                                <strong>Parapet &amp; Flashing Joint Failures:</strong> 90° wall-to-floor junctions allow capillary water migration.
                            </li>
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="text-red-500 shrink-0" size={16} />
                                <strong>Rebar Rust Expansion:</strong> Corroding steel expands up to 4x in volume, popping off outer concrete.
                            </li>
                        </ul>
                    </div>

                    <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-gray-900 mb-4 text-base md:text-lg flex items-center gap-2">
                            <Wrench className="text-green-600" size={20} />
                            Key Inspection &amp; Surface Preparation Steps
                        </h4>
                        <ol className="space-y-4 text-xs md:text-sm text-gray-700 list-decimal pl-4">
                            <li>
                                <strong>High-Pressure Washing &amp; Moss Removal:</strong> Mechanical wire brushing to eliminate all algae, dirt, and loose bituminous debris.
                            </li>
                            <li>
                                <strong>Crack Chasing (V-Groove):</strong> Widening structural cracks to 6mm x 6mm and packing with non-shrink polymer-modified mortar (ASTM D412).
                            </li>
                            <li>
                                <strong>Angle Fillet Coving:</strong> Constructing 45° polymer mortar fillets at all parapet wall corners to eliminate vulnerable 90° angles.
                            </li>
                            <li>
                                <strong>Substrate Porosity Priming:</strong> Deep-penetrating polymer primer coat applied at 8–10 m²/litre to guarantee maximum chemical adhesion pull strength.
                            </li>
                            <li>
                                <strong>Fiberglass Mesh Reinforcement:</strong> 45 GSM alkali-resistant fiberglass mesh embedded between coats for dynamic puncture and tear resistance.
                            </li>
                        </ol>
                    </div>
                </div>

                {/* 2. Roofing System Comparison Table */}
                <div className="mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <span className="text-green-600 font-bold tracking-wider uppercase text-xs mb-2 block">System Engineering</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Comparing Proven Roof Waterproofing Systems</h3>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200">
                        <table className="w-full text-left border-collapse text-xs md:text-sm">
                            <thead>
                                <tr className="bg-slate-100 text-gray-800 border-b border-slate-200">
                                    <th className="py-4 px-4 font-bold">System Category</th>
                                    <th className="py-4 px-4 font-bold">Material Formulation</th>
                                    <th className="py-4 px-4 font-bold">Key Performance Metric</th>
                                    <th className="py-4 px-4 font-bold">Expected Life</th>
                                    <th className="py-4 px-4 font-bold">Recommended Application</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-gray-700">
                                <tr className="hover:bg-slate-50">
                                    <td className="py-4 px-4 font-semibold text-gray-900">Torch-on APP Bitumen Sheet</td>
                                    <td className="py-4 px-4">Atactic Polypropylene modified bitumen with polyester fleece core (3mm / 4mm)</td>
                                    <td className="py-4 px-4 text-green-700 font-semibold">High tensile &amp; puncture resistance</td>
                                    <td className="py-4 px-4 font-bold">10 – 15 Years</td>
                                    <td className="py-4 px-4">Flat RCC roofs with severe water accumulation</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-4 px-4 font-semibold text-gray-900">Polyurethane (PU) Liquid Membrane</td>
                                    <td className="py-4 px-4">Single-component pure elastomeric polyurethane liquid coating</td>
                                    <td className="py-4 px-4 text-green-700 font-semibold">Seamless monolithic film, &gt;400% elongation</td>
                                    <td className="py-4 px-4 font-bold">8 – 12 Years</td>
                                    <td className="py-4 px-4">Roofs with complex pipe penetrations &amp; HVAC equipment</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-4 px-4 font-semibold text-gray-900">Elastomeric Cool-Roof Paint</td>
                                    <td className="py-4 px-4">Solar reflective acrylic polymer (Dr. Fixit Roofseal / Asian Paints SmartCare)</td>
                                    <td className="py-4 px-4 text-green-700 font-semibold">Solar Reflectance Index SRI &gt; 100 (Cuts heat 3–7°C)</td>
                                    <td className="py-4 px-4 font-bold">5 – 7 Years</td>
                                    <td className="py-4 px-4">Terraces needing waterproofing + indoor cooling</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-4 px-4 font-semibold text-gray-900">Single-Ply EPDM Rubber Membrane</td>
                                    <td className="py-4 px-4">Ethylene Propylene Diene Monomer vulcanized synthetic rubber</td>
                                    <td className="py-4 px-4 text-green-700 font-semibold">Extreme ozone, UV, and frost resistance</td>
                                    <td className="py-4 px-4 font-bold">15 – 20 Years</td>
                                    <td className="py-4 px-4">Large commercial buildings &amp; green roof assemblies</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-4 px-4 font-semibold text-gray-900">Crystalline Waterproofing</td>
                                    <td className="py-4 px-4">Reactive catalytic crystalline slurry that grows into concrete pores</td>
                                    <td className="py-4 px-4 text-green-700 font-semibold">Permanent self-healing of micro-cracks up to 0.4mm</td>
                                    <td className="py-4 px-4 font-bold">Structural Life</td>
                                    <td className="py-4 px-4">Water storage tanks, concrete foundations &amp; podiums</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 3. Verifiable Project Evidence (First-Party Track Record) */}
                <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 mb-20 shadow-sm">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                        <div>
                            <span className="text-green-600 font-bold tracking-wider uppercase text-xs mb-2 block">Verifiable Track Record</span>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">First-Party Project Case Studies in Delhi NCR</h3>
                        </div>
                        <div className="text-sm font-semibold text-gray-500">
                            Documented Scope &amp; Outcome Metrics
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-bold text-green-700 uppercase tracking-wider block mb-2">Industrial Roofing</span>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Minda House, New Delhi</h4>
                                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                                    <strong>Area:</strong> 25,000 sq ft RCC Terrace<br />
                                    <strong>System:</strong> 4mm Torch-on APP Modified Bitumen Membrane with fiber reinforcement and protective solar topcoat.<br />
                                    <strong>Outcome:</strong> 100% elimination of persistent expansion joint water seepage with a 10-year systemic warranty.
                                </p>
                            </div>
                            <div className="text-xs font-semibold text-green-600 flex items-center gap-1.5 pt-3 border-t border-slate-200">
                                <FileCheck size={16} /> 10-Year Certified System Warranty
                            </div>
                        </div>

                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-bold text-green-700 uppercase tracking-wider block mb-2">Institutional Roof</span>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Thapar University Complex</h4>
                                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                                    <strong>Area:</strong> 18,000 sq ft Concrete Roof Slab<br />
                                    <strong>System:</strong> High-build aliphatic Polyurethane (PU) liquid membrane with high-pressure PU foam crack injection.<br />
                                    <strong>Outcome:</strong> Fully seamless barrier over complex parapets, zero moisture intrusion during heavy monsoons.
                                </p>
                            </div>
                            <div className="text-xs font-semibold text-green-600 flex items-center gap-1.5 pt-3 border-t border-slate-200">
                                <FileCheck size={16} /> Hydrostatic Flood-Tested (48 Hours)
                            </div>
                        </div>

                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-bold text-green-700 uppercase tracking-wider block mb-2">Government Institution</span>
                                <h4 className="text-lg font-bold text-gray-900 mb-2">Sarvodaya Vidyalaya, Delhi</h4>
                                <p className="text-gray-600 text-xs leading-relaxed mb-4">
                                    <strong>Area:</strong> 12,000 sq ft Flat Terrace<br />
                                    <strong>System:</strong> Multi-coat solar-reflective elastomeric acrylic polymer with alkali-resistant mesh.<br />
                                    <strong>Outcome:</strong> Stopped water leakage and reduced classrooms' interior ceiling temperatures by 5.8°C.
                                </p>
                            </div>
                            <div className="text-xs font-semibold text-green-600 flex items-center gap-1.5 pt-3 border-t border-slate-200">
                                <FileCheck size={16} /> Measured Heat Drop: ~6°C
                            </div>
                        </div>
                    </div>
                </div>

                {/* Explore Links CTA */}
                <div className="text-center">
                    <p className="text-gray-600 text-sm mb-4">Need specific specifications or price estimates for your building?</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/services/roof-waterproofing"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors text-sm shadow-md"
                        >
                            Explore Roof Waterproofing Systems <ArrowRight size={16} />
                        </Link>
                        <Link
                            href="/services/terrace-waterproofing"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 font-bold rounded-xl border border-slate-300 hover:border-green-500 hover:text-green-700 transition-colors text-sm"
                        >
                            View Terrace Waterproofing Rates
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
