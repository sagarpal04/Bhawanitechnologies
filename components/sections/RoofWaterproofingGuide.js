import { ShieldCheck, CheckCircle2, AlertTriangle, Layers, Thermometer, Droplets, Wrench, FileCheck, ArrowRight, Search, ClipboardCheck, Building2, IndianRupee, Scale, Hammer, Bug, Wind, Snowflake, Eye, TestTube, Award, Phone, Star, Calendar, Ruler, PaintBucket, Shield, CircleDot, Settings, FileText, HardHat, Clock, Zap, TrendingUp } from "lucide-react";
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
                        Learn how professional roof waterproofing systems prevent water intrusion, eliminate interior ceiling water stains, and protect building foundations across Delhi NCR&apos;s severe weather cycles. This guide covers every aspect of flat roof and low-slope roof protection — from membrane selection and substrate diagnostics to cost analysis, brand comparisons, installation processes, and compliance standards.
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
                            In Delhi NCR, roof surfaces endure continuous temperature swings between 2°C in winter and 48°C in peak summer. This extreme 46°C thermal cycling exerts heavy stresses on the structural concrete roof deck, causing hairline cracks, joint debonding, and micro-fissures. Without proper waterproofing, these cracks become pathways for water intrusion, leading to damp insulation, wet insulation beneath the roof covering, and eventual structural rot of internal building elements.
                        </p>
                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            When combined with inadequate roof slope (pitch), rainwater begins <strong>ponding (water stagnation)</strong> around blocked drain scuppers and parapet corners. Over time, standing water breaks down low-grade cementitious plaster, rusting the internal TMT rebar reinforcement and causing spalling concrete and damp indoor ceilings. Temperature fluctuations accelerate the deterioration cycle — the roof deck expands during scorching Delhi summers and contracts during winter frost, widening every existing crack with each cycle.
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
                            <li className="flex items-center gap-2">
                                <CheckCircle2 className="text-red-500 shrink-0" size={16} />
                                <strong>Trapped Moisture &amp; Mold:</strong> Wet insulation fosters mold growth, compromising indoor air quality and structural integrity.
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
                                <strong>High-Pressure Washing &amp; Moss Removal:</strong> Mechanical wire brushing to eliminate all algae, dirt, debris accumulation, and loose bituminous debris. A wet dry vac is used to clear standing water and slurry residue.
                            </li>
                            <li>
                                <strong>Crack Chasing (V-Groove):</strong> Widening structural cracks to 6mm x 6mm and packing with non-shrink polymer-modified mortar (ASTM D412). All soft or deteriorated decking is identified and marked for repair.
                            </li>
                            <li>
                                <strong>Angle Fillet Coving:</strong> Constructing 45° polymer mortar fillets at all parapet wall corners to eliminate vulnerable 90° angles and simplify roof-to-wall transitions.
                            </li>
                            <li>
                                <strong>Substrate Porosity Priming:</strong> Deep-penetrating polymer primer coat applied at 8–10 m²/litre to guarantee maximum chemical adhesion pull strength. Primer is selected based on substrate porosity and ambient conditions.
                            </li>
                            <li>
                                <strong>Fiberglass Mesh Reinforcement:</strong> 45 GSM alkali-resistant fiberglass reinforcement mesh embedded between coats for dynamic puncture resistance, tear resistance, and thermal movement accommodation.
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

                {/* 3. Verifiable Project Evidence — Expanded 5 Case Studies */}
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

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Case Study 1: Minda House */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-bold text-green-700 uppercase tracking-wider block mb-2">Industrial Roofing</span>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Minda House, New Delhi</h4>
                                <p className="text-xs text-gray-500 mb-3 flex items-center gap-1"><Calendar size={12} /> October 2023</p>
                                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                                    <strong>Area:</strong> 25,000 sq ft RCC industrial roof deck<br />
                                    <strong>System:</strong> 4mm torch-on APP modified bitumen membrane with polyester fleece backing, overlaid with aluminium solar-reflective topcoat. All roof-to-wall transitions reinforced with additional 300mm flashing strips.<br />
                                    <strong>Installation Sequence:</strong> Pressure washing and debris removal (Day 1), crack chasing and polymer mortar filling (Day 2–3), SBS-modified bitumen primer at 6 m²/litre (Day 4), APP membrane torch application with 100mm minimum overlap at seams (Day 5–8), edge flashing and drip edge installation (Day 9), solar topcoat (Day 10).<br />
                                    <strong>Testing:</strong> 72-hour flood test across all bays — zero leakage detected. Adhesion pull test per ASTM D4541 recorded 2.1 MPa average, exceeding the 1.5 MPa minimum threshold.<br />
                                    <strong>Outcome:</strong> 100% elimination of persistent expansion joint water seepage. Post-monsoon thermal imaging confirmed zero trapped moisture beneath the new membrane.
                                </p>
                                <p className="text-gray-500 text-xs italic mb-3">
                                    &quot;After years of recurring leaks, Bhawani Technologies delivered a permanent solution. The 72-hour flood test gave us complete confidence.&quot; — Facility Manager, Minda Industries
                                </p>
                            </div>
                            <div className="text-xs font-semibold text-green-600 flex items-center gap-1.5 pt-3 border-t border-slate-200">
                                <FileCheck size={16} /> 10-Year Manufacturer System Warranty + 7-Year Workmanship Warranty
                            </div>
                        </div>

                        {/* Case Study 2: Thapar University */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-bold text-green-700 uppercase tracking-wider block mb-2">Institutional Roof</span>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Thapar University Complex</h4>
                                <p className="text-xs text-gray-500 mb-3 flex items-center gap-1"><Calendar size={12} /> March 2024</p>
                                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                                    <strong>Area:</strong> 18,000 sq ft concrete roof slab with 42 pipe penetrations and 6 HVAC units<br />
                                    <strong>System:</strong> High-build aliphatic polyurethane (PU) liquid membrane applied in two coats with 45 GSM fiberglass reinforcement mesh between coats. Total dry film thickness measured at 1.8mm per ASTM D7091.<br />
                                    <strong>Installation Sequence:</strong> Alkaline cleaner wash and surface profiling (Day 1–2), PU crack injection for all structural cracks &gt;0.3mm (Day 3), primer application at 8 m²/litre with 4-hour dry time (Day 4), first coat of PU membrane at 1.0 kg/m² wet film thickness (Day 5–6), fiberglass mesh embedding (Day 6), second coat at 0.8 kg/m² (Day 7–8), 24-hour curing between coats.<br />
                                    <strong>Testing:</strong> 48-hour hydrostatic flood test passed. Adhesion pull test per ASTM D4541 averaged 2.4 MPa. Coating thickness measurement via ASTM D7091 confirmed uniform 1.8mm DFT across all zones.<br />
                                    <strong>Outcome:</strong> Fully seamless monolithic barrier over complex parapets and penetrations. Zero moisture intrusion recorded through two consecutive monsoon seasons.
                                </p>
                                <p className="text-gray-500 text-xs italic mb-3">
                                    &quot;The seamless PU membrane solved our chronic skylight and pipe penetration leaks that three previous contractors had failed to fix.&quot; — Chief Engineer, Thapar University
                                </p>
                            </div>
                            <div className="text-xs font-semibold text-green-600 flex items-center gap-1.5 pt-3 border-t border-slate-200">
                                <FileCheck size={16} /> Hydrostatic Flood-Tested (48 Hours) + Single-Source Warranty
                            </div>
                        </div>

                        {/* Case Study 3: Sarvodaya Vidyalaya */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-bold text-green-700 uppercase tracking-wider block mb-2">Government Institution</span>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Sarvodaya Vidyalaya, Delhi</h4>
                                <p className="text-xs text-gray-500 mb-3 flex items-center gap-1"><Calendar size={12} /> July 2023</p>
                                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                                    <strong>Area:</strong> 12,000 sq ft flat terrace across two school buildings<br />
                                    <strong>System:</strong> Multi-coat solar-reflective elastomeric acrylic polymer (Dr. Fixit Roofseal) with alkali-resistant fiberglass mesh reinforcement. SRI rating &gt;105 for maximum heat reduction.<br />
                                    <strong>Installation Sequence:</strong> Debris removal and pressure washing (Day 1), crack repair with polymer mortar and V-groove chasing (Day 2), two coats of acrylic primer with 6-hour dry time between coats (Day 3), first elastomeric coat at 12 sq ft/litre coverage rate (Day 4), fiberglass mesh embedding (Day 4), second elastomeric coat (Day 5), final solar-reflective topcoat (Day 6).<br />
                                    <strong>Testing:</strong> 24-hour ponding test on all drain zones — zero seepage. Temperature loggers installed on ceiling soffits measured 5.8°C average reduction. Moisture readings dropped from 18% to under 4% within two weeks of application.<br />
                                    <strong>Outcome:</strong> Stopped all active water leakage and reduced classroom interior ceiling temperatures by 5.8°C, improving student comfort during peak summer months.
                                </p>
                                <p className="text-gray-500 text-xs italic mb-3">
                                    &quot;The classrooms are noticeably cooler and the leaking has completely stopped. Excellent work within the government budget constraints.&quot; — Principal, Sarvodaya Vidyalaya
                                </p>
                            </div>
                            <div className="text-xs font-semibold text-green-600 flex items-center gap-1.5 pt-3 border-t border-slate-200">
                                <FileCheck size={16} /> Measured Heat Reduction: 5.8°C + 7-Year Warranty
                            </div>
                        </div>

                        {/* Case Study 4: Residential Tower, Noida */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-bold text-green-700 uppercase tracking-wider block mb-2">Residential Complex</span>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Residential Tower, Noida Sector 62</h4>
                                <p className="text-xs text-gray-500 mb-3 flex items-center gap-1"><Calendar size={12} /> January 2024</p>
                                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                                    <strong>Area:</strong> 8,500 sq ft terrace with swimming pool deck and landscaped planters<br />
                                    <strong>System:</strong> Hybrid approach — Dr. Fixit Roofseal elastomeric acrylic for open terrace zones, combined with professional-grade PU liquid membrane for high-stress areas around planter edges, pool deck perimeter, and all roof penetrations.<br />
                                    <strong>Installation Sequence:</strong> Surface cleaning with alkaline cleaner and wet dry vac (Day 1), substrate repair and 45° angle fillets at all roof-to-wall transitions (Day 2), primer application matched to substrate porosity (Day 3), PU membrane on critical zones with polyester reinforcement at seams (Day 4–5), elastomeric acrylic on open terrace with fiberglass mesh (Day 6–7), protective walkway tiles on high foot traffic zones for impact resistance (Day 8).<br />
                                    <strong>Testing:</strong> Zone-wise flood testing — pool deck zone (48 hours), terrace zones (24 hours each). Adhesion pull test results: 2.6 MPa on PU zones, 1.8 MPa on acrylic zones. All results exceeded ASTM D4541 minimums.<br />
                                    <strong>Outcome:</strong> Zero leaks detected during first monsoon season. The PU-acrylic hybrid approach saved the RWA approximately ₹3.2 lakh compared to full PU membrane coverage while delivering targeted protection where it mattered most.
                                </p>
                                <p className="text-gray-500 text-xs italic mb-3">
                                    &quot;The hybrid approach was brilliant — premium protection where needed, cost savings where possible. The terrace is now usable year-round.&quot; — RWA President, Sector 62
                                </p>
                            </div>
                            <div className="text-xs font-semibold text-green-600 flex items-center gap-1.5 pt-3 border-t border-slate-200">
                                <FileCheck size={16} /> 7-Year Workmanship + 10-Year Material Warranty
                            </div>
                        </div>

                        {/* Case Study 5: Cold Storage Facility */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col justify-between">
                            <div>
                                <span className="text-xs font-bold text-green-700 uppercase tracking-wider block mb-2">Industrial Cold Storage</span>
                                <h4 className="text-lg font-bold text-gray-900 mb-1">Cold Storage Facility, Okhla Industrial Area</h4>
                                <p className="text-xs text-gray-500 mb-3 flex items-center gap-1"><Calendar size={12} /> November 2023</p>
                                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                                    <strong>Area:</strong> 15,000 sq ft metal roofing over cold storage chambers maintained at -18°C<br />
                                    <strong>System:</strong> 1.5mm EPDM rubber membrane (single-ply) mechanically fastened to steel deck with galvanized fastening plates at 300mm centres. All seams heat-welded with 150mm overlap. Polyisocyanurate insulation board (100mm) installed as thermal barrier beneath membrane.<br />
                                    <strong>Installation Sequence:</strong> Existing damaged roof covering removal and steel deck inspection for structural rot (Day 1–3), deck repair and rust treatment (Day 4), polyisocyanurate insulation installation with staggered joints and cover board overlay (Day 5–7), EPDM membrane roll-out with mechanical fastening at fastener spacing per FM 4470 wind uplift requirements (Day 8–10), heat-welded seams and flashing collars at all penetrations (Day 11–12), metal edge securement systems per ANSI/SPRI/FM4435 ES-1 (Day 13), perimeter drip edges (Day 14).<br />
                                    <strong>Testing:</strong> Thermal imaging scan post-installation confirmed zero thermal bridging at seams. Pull-out mock-up test on fasteners confirmed 1,200N pull-out resistance per fastener. Moisture readings on insulation: 0% — confirming zero condensation migration.<br />
                                    <strong>Outcome:</strong> Eliminated persistent condensation dripping that was contaminating stored goods. Energy consumption for refrigeration reduced by approximately 12% due to improved insulation and eliminated air infiltration.
                                </p>
                                <p className="text-gray-500 text-xs italic mb-3">
                                    &quot;The EPDM system finally solved our condensation problem. We&apos;ve seen real savings on our electricity bills — roughly 12% reduction in compressor runtime.&quot; — Operations Director, Okhla Cold Storage
                                </p>
                            </div>
                            <div className="text-xs font-semibold text-green-600 flex items-center gap-1.5 pt-3 border-t border-slate-200">
                                <FileCheck size={16} /> 20-Year EPDM Manufacturer Warranty + 7-Year Workmanship
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Bhawani 7-Point Roof Inspection Protocol */}
                <div className="mb-20 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-4">
                            <ClipboardCheck size={14} /> Proprietary Assessment Framework
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Bhawani 7-Point Roof Inspection Protocol
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Every Bhawani Technologies project begins with our proprietary 7-point roof inspection protocol — a systematic assessment methodology developed over 15+ years of field experience across Delhi NCR&apos;s unique climate conditions. This isn&apos;t a cursory visual check; it&apos;s a data-driven diagnostic process that informs every material selection, installation sequencing, and warranty recommendation we deliver.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Step 1 */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">1</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                                        <Thermometer size={16} className="text-green-600" /> Visual Survey &amp; Thermal Imaging
                                    </h4>
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        Our inspectors begin with a comprehensive visual survey of the entire roof surface, followed by infrared thermal imaging to detect trapped moisture, wet insulation, and damp insulation that isn&apos;t visible to the naked eye. Thermal imaging reveals temperature differentials caused by moisture-saturated zones beneath the existing roof covering — areas where water has migrated through failed seams, cracks, or deteriorated flashing. This non-destructive scanning allows us to map moisture intrusion patterns precisely without cutting into the existing assembly, saving time and preventing unnecessary damage to the roof deck.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">2</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                                        <Layers size={16} className="text-green-600" /> Roof Deck Condition Assessment
                                    </h4>
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        We thoroughly evaluate the structural condition of the roof deck itself — whether it&apos;s a reinforced concrete slab, wood deck, steel deck, OSB, plywood, or gypsum board substrate. Inspectors check for deck rot, structural rot, soft or deteriorated decking, delamination, and any areas where the deck has lost its load-bearing capacity. For steel decks, we look for corrosion at fastener points and seam connections. For concrete decks common in Delhi NCR construction, we test compressive strength and check rebar condition using cover meters. Any compromised decking must be repaired or replaced before waterproofing installation — applying a membrane over a rotting deck is the most common and costly contractor mistake we encounter.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">3</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                                        <Droplets size={16} className="text-green-600" /> Drainage Audit
                                    </h4>
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        Inadequate drainage is responsible for over 60% of premature roof waterproofing failures in Delhi NCR. We audit every component of the drainage system: roof drains, internal drains, scuppers, gutters, downspouts, and overflow provisions. Using laser levels, we verify positive slope across the entire roof surface and confirm compliance with minimum slopes (typically 1:80 for flat roofs per IS 3067). Ponding zones are documented with photographs and depth measurements. Where slopes are insufficient, we recommend tapered insulation screeds or polymer-modified levelling compounds to establish proper drainage fall before any membrane installation begins.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">4</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                                        <Search size={16} className="text-green-600" /> Membrane &amp; Flashing Inspection
                                    </h4>
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        For roofs with existing waterproofing, we inspect the current roof covering condition in detail. This includes checking all metal flashing, counter flashing, step flashing, kickout flashing, and flashing collars around penetrations. We examine drip edges for corrosion and proper overlap. Every seam and lap joint is probed for delamination — we specifically look for lap delamination, seam failure, and fish-mouths (where membrane edges curl upward and separate). Flashing complexity is documented and photographed, as these transition points are where 70% of roof leaks originate. Areas with granule loss on modified bitumen indicate UV degradation and remaining service life.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 5 */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">5</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                                        <Settings size={16} className="text-green-600" /> Penetration &amp; Transition Survey
                                    </h4>
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        Every roof penetration is a potential leak point. We catalogue and assess every pipe penetration, plumbing vent, vent stack, skylight, chimney, electrical conduit, and HVAC curb on the roof. Beyond penetrations, we evaluate all roof transitions — roof-to-wall transitions where the horizontal membrane meets vertical parapets, roof edges where the membrane terminates, and expansion joints that accommodate structural movement. Each penetration and transition point is graded on a severity scale to prioritize the scope of work. Improperly sealed penetrations account for more emergency leak calls during monsoon season than any other single failure mode.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 6 */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">6</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                                        <TestTube size={16} className="text-green-600" /> Adhesion &amp; Thickness Testing
                                    </h4>
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        Where existing coatings or membranes are present, we perform adhesion pull tests per ASTM D4541 to determine whether the existing system has sufficient bond strength to serve as a substrate for overlay, or whether full removal is required. For liquid-applied systems, we measure dry film thickness (DFT) using electronic gauges per ASTM D7091 to verify whether the original coating was applied to manufacturer specifications. Wet film thickness checks during our own application ensure correct material consumption rates. These quantitative measurements replace guesswork with data — we don&apos;t estimate coating thickness by eye, we measure it to ensure every square foot meets specification.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step 7 */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 md:col-span-2">
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">7</div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base mb-2 flex items-center gap-2">
                                        <FileText size={16} className="text-green-600" /> Final Report &amp; Written Scope of Work
                                    </h4>
                                    <p className="text-gray-600 text-xs leading-relaxed">
                                        The inspection culminates in a detailed final report delivered to the client within 48 hours. This report includes a complete installation log template, materials list with specific product names and quantities, manufacturer data sheets for every material specified, and a written scope of work that leaves zero ambiguity about what will be installed, in what sequence, and to what standard. We provide a single-source warranty recommendation — explaining whether a manufacturer system warranty, a workmanship warranty, or a combined single-source warranty is appropriate for the project. This written scope of work becomes the contractual basis for the project, protecting both Bhawani Technologies and our client. Every material listed includes batch numbers, shelf life verification, and storage requirements, ensuring nothing arrives on-site expired or compromised.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. Complete Roof Waterproofing Systems & Materials Guide */}
                <div className="mb-20">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="text-green-600 font-bold tracking-wider uppercase text-xs mb-2 block">Materials &amp; Systems Encyclopedia</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Complete Roof Waterproofing Systems &amp; Materials Guide</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Understanding the full spectrum of waterproofing technologies available helps building owners and facility managers make informed decisions. Below, we cover every major system category, roof assembly component, and roof type relevant to Delhi NCR construction.
                        </p>
                    </div>

                    {/* 5a. Membrane Systems */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Layers className="text-green-600" size={22} />
                            Membrane Systems &amp; Liquid-Applied Coatings
                        </h4>

                        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                            <p>
                                <strong>Single-ply membranes</strong> represent the most advanced category of prefabricated roof waterproofing sheets. PVC single-ply membranes offer excellent chemical resistance and are factory-fabricated in wide rolls that minimize field seams. TPO (thermoplastic polyolefin) membranes have emerged as a cost-effective alternative to PVC, offering similar heat-weldable seams with lower material costs and without the plasticizer migration concerns associated with older PVC formulations. EPDM rubber membranes — made from ethylene propylene diene monomer — remain the gold standard for longevity, with documented service lives exceeding 30 years in temperate climates. EPDM&apos;s exceptional resistance to ozone, UV radiation, and frost makes it particularly suitable for exposed roof applications where the membrane will not be covered by ballast or pavers.
                            </p>

                            <p>
                                <strong>Modified bitumen systems</strong> use polymer-modified asphalt reinforced with fabric carriers. SBS (styrene-butadiene-styrene) modified bitumen offers superior flexibility at low temperatures, making it suitable for North Indian hill stations where winter temperatures drop below freezing. APP (atactic polypropylene) modified bitumen, more common in Delhi NCR, provides excellent heat resistance and UV stability. Both systems are typically installed as two-ply assemblies — a base sheet mechanically fastened or adhered to the substrate, topped with a cap sheet that provides the weather-exposed surface. The cap sheet in most two-ply systems features a mineral granule surface that protects the bitumen from UV degradation and provides a Class A fire classification when tested per ASTM E108.
                            </p>

                            <p>
                                <strong>Self-adhered waterproofing membranes</strong> (commonly called peel-and-stick membrane) eliminate the need for torches or hot asphalt during installation. These membranes feature a factory-applied adhesive backing protected by a release liner — the installer simply positions the sheet, peels the liner, and presses the membrane into place. While convenient and safe (no open flame), self-adhered membranes require meticulous surface preparation and are sensitive to ambient temperature during installation. They work best as secondary waterproofing layers under other roof coverings rather than as the primary exposed membrane.
                            </p>

                            <p>
                                <strong>Liquid-applied roof coatings</strong> offer the unique advantage of forming a seamless, monolithic waterproofing film without any joints or laps. Silicone roof coatings provide exceptional UV resistance and can be applied over existing roof coverings as a restoration system, extending service life by 10–15 years without full tear-off. PMMA (polymethyl methacrylate) liquid membranes cure extremely fast — often within 30 minutes — making them ideal for weather-limited installation windows common during Delhi&apos;s unpredictable monsoon transitions. Spray-applied membranes using plural-component spray equipment can cover large areas rapidly, with experienced crews applying 1,000+ sq ft per hour.
                            </p>

                            <p>
                                <strong>SPF (spray polyurethane foam)</strong> systems serve dual duty as both insulation and waterproofing. The foam is sprayed directly onto the roof deck, expanding to fill irregularities and creating a monolithic insulating layer. A protective elastomeric coating is then applied over the cured foam to provide UV resistance and walkability. SPF systems are particularly effective on roofs with complex geometries and numerous penetrations, as the foam conforms to any shape.
                            </p>

                            <p>
                                <strong>Seaming methods</strong> vary significantly across membrane types and directly impact long-term waterproofing integrity. Heat-welded seams (used for PVC, TPO, and some modified bitumen systems) create a homogeneous bond that is often stronger than the parent membrane material. Solvent-based contact adhesive is used for EPDM field seams and requires careful surface preparation and controlled cure times. Hot-mopped adhesive — molten asphalt applied with mops or mechanical spreaders — is the traditional method for built-up roofing (BUR) systems and some modified bitumen installations, though it is increasingly being replaced by torch and self-adhered methods for safety and environmental reasons.
                            </p>
                        </div>
                    </div>

                    {/* 5b. Roof Assembly Components */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm mb-8">
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Building2 className="text-green-600" size={22} />
                            Roof Assembly Components &amp; Accessories
                        </h4>

                        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                            <p>
                                <strong>Roof underlayment</strong> is the secondary weather barrier installed beneath the primary roof covering. Synthetic underlayment has largely replaced traditional asphalt-saturated felt in modern construction due to its superior tear resistance, lighter weight, and better UV exposure tolerance during the construction period. However, asphalt-saturated felt (15 lb or 30 lb) remains a code-compliant and cost-effective option for many residential applications. Ice and water shield — a self-adhered rubberized asphalt membrane — is installed at vulnerable locations like eaves, roof valleys, and around skylights and chimneys to provide leak protection in areas prone to ice dams and wind-driven rain. While ice dams are uncommon in Delhi NCR, they are a significant concern for roofing projects in Shimla, Dehradun, and other North Indian hill stations where Bhawani Technologies also operates.
                            </p>

                            <p>
                                <strong>Insulation</strong> plays a critical role in both thermal performance and moisture management within the roof assembly. Polyisocyanurate insulation (polyiso) offers the highest R-value per inch of any rigid board insulation and is the standard choice for commercial flat roofs. EPS (expanded polystyrene) provides a more cost-effective option where maximum R-value is not critical. Foam plastic insulation must be covered by a thermal barrier to meet fire code requirements. Tapered insulation — polyiso boards manufactured with a built-in slope — solves drainage problems by creating positive slope across the roof surface without heavy cement screeds. Cover boards (typically high-density polyiso or gypsum-based barrier board) are installed over the insulation layer to protect it from foot traffic damage, improve fire performance, and provide a smooth substrate for membrane adhesion. Fiberboard provides a cost-effective separation layer between incompatible materials in the roof assembly.
                            </p>

                            <p>
                                <strong>Fire classification</strong> is a critical compliance requirement for roof coverings. Under ASTM E108 (and the equivalent UL 790), roof covering fire classification ranges from Class A (highest fire resistance — withstands severe fire exposure) to Class C (moderate fire resistance). Most commercial and institutional projects require Class A roof assemblies. The fire classification applies to the entire assembly, not just the membrane — the combination of membrane, insulation, substrate, and fastening method determines the assembly&apos;s fire rating. Building owners should verify that their contractor&apos;s proposed system holds a valid fire classification listing from a recognized testing laboratory.
                            </p>

                            <p>
                                <strong>Metal edge securement systems</strong> secure the roof membrane at perimeter edges and are critical for wind uplift resistance. These systems must comply with ANSI/SPRI/FM4435 ES-1 requirements, which specify the design wind loads that edge metal must resist. Proper fastener selection — including correct fastener spacing and fastener length to achieve adequate pull-out resistance from the deck — is essential. Loose fasteners or underspecified fastener spacing are common installation defects that lead to wind damage during storms. For single-ply systems, ballasting (using river-washed stone or concrete pavers) provides an alternative to mechanical fastening, but adds significant dead load that must be verified against the roof structure&apos;s capacity.
                            </p>
                        </div>
                    </div>

                    {/* 5c. Roof Types Covered */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-sm">
                        <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Building2 className="text-green-600" size={22} />
                            Roof Types We Waterproof
                        </h4>

                        <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                            <p>
                                <strong>Flat roofs and low-slope roofs</strong> (defined as roofs with a slope of less than 2:12) constitute the vast majority of Bhawani Technologies&apos; waterproofing projects in Delhi NCR. Nearly all residential, commercial, and industrial buildings in the region feature reinforced concrete flat roofs, making them fundamentally different from the steep-slope roofing markets in Western countries. Low-slope roofs require fully adhered or mechanically attached membrane systems designed for water ponding, as opposed to steep-slope systems that rely on gravity and overlap to shed water. Proper drainage design — including adequate slope, correctly sized and positioned roof drains, and functional overflow provisions — is even more critical on flat roofs than on pitched structures.
                            </p>

                            <p>
                                <strong>Steep-slope roofs</strong>, while less common in urban Delhi NCR, are found in heritage structures, bungalows, farmhouses, and hill station properties. These roofs typically use metal roofing (standing seam or corrugated), clay tiles, or asphalt shingles as the primary roof covering. Waterproofing on steep-slope roofs focuses on proper underlayment installation, flashing details at roof valleys and eaves, and ensuring the roof covering overlaps are sufficient to resist wind-driven water entry. Metal roofing on steep-slope applications requires particular attention to thermal expansion — metal panels expand and contract significantly with temperature changes, and fastening systems must accommodate this movement without loosening.
                            </p>

                            <p>
                                <strong>Composite roof construction</strong> — common on modern commercial buildings — combines a structural steel or concrete deck with rigid insulation and a membrane covering. These assemblies require careful attention to vapour barriers, air barriers, and the sequencing of assembly components to prevent condensation within the insulation layer. <strong>Green roof waterproofing</strong> demands the highest level of waterproofing integrity, as the membrane is buried beneath drainage layers, filter fabric, growing medium, and vegetation — making leak detection and repair extremely costly once the green roof assembly is in place. Bhawani Technologies recommends only root-resistant membranes with documented FLL certification for green roof applications, combined with electronic leak detection testing before the overburden layers are installed.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 6. Roof Waterproofing Cost Breakdown */}
                <div className="mb-20">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="text-green-600 font-bold tracking-wider uppercase text-xs mb-2 block">Transparent Pricing</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Roof Waterproofing Cost Breakdown — Delhi NCR 2024-25
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Understanding the true cost of roof waterproofing requires looking beyond the initial price per square foot. The table below provides current market rates for Delhi NCR, including material costs, labour costs, expected service life, and ongoing maintenance requirements. All prices are inclusive of surface preparation, primer, membrane application, and standard testing.
                        </p>
                    </div>

                    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-slate-200 mb-8">
                        <table className="w-full text-left border-collapse text-xs md:text-sm">
                            <thead>
                                <tr className="bg-slate-100 text-gray-800 border-b border-slate-200">
                                    <th className="py-4 px-4 font-bold">System</th>
                                    <th className="py-4 px-4 font-bold">Material Cost (₹/sq ft)</th>
                                    <th className="py-4 px-4 font-bold">Labour Cost (₹/sq ft)</th>
                                    <th className="py-4 px-4 font-bold">Total Cost (₹/sq ft)</th>
                                    <th className="py-4 px-4 font-bold">Service Life</th>
                                    <th className="py-4 px-4 font-bold">Maintenance Cost</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 text-gray-700">
                                <tr className="hover:bg-slate-50">
                                    <td className="py-4 px-4 font-semibold text-gray-900">Acrylic Elastomeric Paint</td>
                                    <td className="py-4 px-4">₹8–12</td>
                                    <td className="py-4 px-4">₹5–8</td>
                                    <td className="py-4 px-4 text-green-700 font-semibold">₹13–20</td>
                                    <td className="py-4 px-4">5–7 years</td>
                                    <td className="py-4 px-4">Recoating every 3–4 years</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-4 px-4 font-semibold text-gray-900">PU Liquid Membrane</td>
                                    <td className="py-4 px-4">₹15–25</td>
                                    <td className="py-4 px-4">₹10–15</td>
                                    <td className="py-4 px-4 text-green-700 font-semibold">₹25–40</td>
                                    <td className="py-4 px-4">8–12 years</td>
                                    <td className="py-4 px-4">Spot repairs as needed</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-4 px-4 font-semibold text-gray-900">APP Bitumen Sheet (3mm)</td>
                                    <td className="py-4 px-4">₹18–28</td>
                                    <td className="py-4 px-4">₹12–18</td>
                                    <td className="py-4 px-4 text-green-700 font-semibold">₹30–45</td>
                                    <td className="py-4 px-4">10–15 years</td>
                                    <td className="py-4 px-4">Seam inspection annually</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-4 px-4 font-semibold text-gray-900">APP Bitumen Sheet (4mm)</td>
                                    <td className="py-4 px-4">₹25–35</td>
                                    <td className="py-4 px-4">₹15–20</td>
                                    <td className="py-4 px-4 text-green-700 font-semibold">₹40–55</td>
                                    <td className="py-4 px-4">12–18 years</td>
                                    <td className="py-4 px-4">Minimal</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-4 px-4 font-semibold text-gray-900">EPDM Rubber Membrane</td>
                                    <td className="py-4 px-4">₹35–50</td>
                                    <td className="py-4 px-4">₹20–30</td>
                                    <td className="py-4 px-4 text-green-700 font-semibold">₹55–80</td>
                                    <td className="py-4 px-4">15–20 years</td>
                                    <td className="py-4 px-4">Near zero</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-4 px-4 font-semibold text-gray-900">PVC/TPO Single-Ply</td>
                                    <td className="py-4 px-4">₹40–60</td>
                                    <td className="py-4 px-4">₹25–35</td>
                                    <td className="py-4 px-4 text-green-700 font-semibold">₹65–95</td>
                                    <td className="py-4 px-4">20–25 years</td>
                                    <td className="py-4 px-4">Seam checks</td>
                                </tr>
                                <tr className="hover:bg-slate-50">
                                    <td className="py-4 px-4 font-semibold text-gray-900">Crystalline Waterproofing</td>
                                    <td className="py-4 px-4">₹20–30</td>
                                    <td className="py-4 px-4">₹10–15</td>
                                    <td className="py-4 px-4 text-green-700 font-semibold">₹30–45</td>
                                    <td className="py-4 px-4">Structural life</td>
                                    <td className="py-4 px-4">None</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200">
                        <h4 className="font-bold text-gray-900 mb-3 text-base flex items-center gap-2">
                            <TrendingUp className="text-green-600" size={18} />
                            Total Cost of Ownership: Why the Cheapest Option Isn&apos;t the Most Economical
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed mb-3">
                            When evaluating roof waterproofing costs, the total cost of ownership over a 20-year building lifecycle tells a very different story than the upfront price per square foot. A basic acrylic elastomeric paint at ₹13–20/sq ft looks attractive initially, but requires complete recoating every 3–4 years — meaning over 20 years, a 1,000 sq ft terrace will need 5–6 recoating cycles, costing ₹65,000–₹1,20,000 cumulatively. Frequent recoating also means repeated disruption to occupants, furniture removal, and the risk of leaks between maintenance cycles.
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed mb-3">
                            By contrast, a 4mm APP bitumen membrane at ₹40–55/sq ft has higher upfront cost but delivers 12–18 years of maintenance-free performance. Over the same 20-year period, the total expenditure — including one potential overlay — is comparable to or lower than the acrylic option. EPDM and PVC/TPO single-ply systems, despite their premium pricing, offer the lowest total cost of ownership due to 20–25 year service lives with near-zero maintenance requirements. These membrane systems have a higher upfront cost per square foot but deliver dramatically lower total cost of ownership when amortised over their full service life.
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            Building owners should also factor in permit requirements for certain waterproofing systems, particularly in heritage zones and municipal corporation jurisdictions that mandate specific fire classifications or material approvals. Bhawani Technologies provides complete documentation support for all regulatory and permit requirements as part of our standard service scope.
                        </p>
                    </div>
                </div>

                {/* 7. Brand Comparison: Dr. Fixit vs Asian Paints vs Fosroc */}
                <div className="mb-20 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="text-green-600 font-bold tracking-wider uppercase text-xs mb-2 block">Product Comparison</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Dr. Fixit vs Asian Paints vs Fosroc: Which Brand for Roof Waterproofing?
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            One of the most common questions we receive from homeowners is which waterproofing brand to choose. The Indian market offers several reputable brands, each with products suited to different applications. Here&apos;s our honest, experience-based assessment of the major products we work with regularly.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Dr. Fixit Roofseal Classic */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-center gap-3 mb-3">
                                <PaintBucket className="text-blue-600" size={20} />
                                <h4 className="font-bold text-gray-900 text-base">Dr. Fixit Roofseal Classic</h4>
                            </div>
                            <p className="text-xs text-gray-700 leading-relaxed mb-2">
                                <strong>Type:</strong> Acrylic elastomeric coating<br />
                                <strong>Price:</strong> ₹65–75/litre<br />
                                <strong>Coverage:</strong> 15–18 sq ft/litre/coat (two coats minimum required)
                            </p>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Dr. Fixit Roofseal Classic is the most widely used retail waterproofing product in India. It&apos;s an acrylic elastomeric coating that provides basic waterproofing with solar reflectivity. Best suited for small residential terraces under 1,000 sq ft where budget is the primary constraint. The product is easy to apply (even DIY-friendly) and provides visible white coating that reflects solar heat. However, its relatively thin dry film thickness means it requires recoating every 3–4 years to maintain waterproofing integrity.
                            </p>
                        </div>

                        {/* Dr. Fixit Roofseal Premium */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-center gap-3 mb-3">
                                <PaintBucket className="text-blue-600" size={20} />
                                <h4 className="font-bold text-gray-900 text-base">Dr. Fixit Roofseal (Premium)</h4>
                            </div>
                            <p className="text-xs text-gray-700 leading-relaxed mb-2">
                                <strong>Type:</strong> High-performance acrylic elastomeric<br />
                                <strong>Price:</strong> ₹85–110/litre<br />
                                <strong>Coverage:</strong> 12–15 sq ft/litre/coat
                            </p>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                The premium variant of Dr. Fixit Roofseal offers significantly higher elongation at break (over 300%) compared to the Classic version, plus enhanced UV resistance that extends recoating intervals to 5–6 years. The thicker formulation builds a more robust dry film thickness per coat. Best suited for exposed roofs that receive direct sunlight and where slightly longer maintenance intervals justify the premium price. For Delhi NCR roofs exposed to extreme UV and monsoon cycles, the premium variant delivers noticeably better longevity than the Classic.
                            </p>
                        </div>

                        {/* Dr. Fixit Pidifin 2K */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-center gap-3 mb-3">
                                <PaintBucket className="text-blue-600" size={20} />
                                <h4 className="font-bold text-gray-900 text-base">Dr. Fixit Pidifin 2K</h4>
                            </div>
                            <p className="text-xs text-gray-700 leading-relaxed mb-2">
                                <strong>Type:</strong> Two-component cementitious waterproofing<br />
                                <strong>Application:</strong> Water tanks, bathrooms, wet areas
                            </p>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Pidifin 2K is a cement-and-polymer two-component system designed for positive-side waterproofing of water retaining structures, bathrooms, and wet areas. While excellent for its intended purpose — it bonds chemically with concrete substrates and can withstand hydrostatic pressure — it is <strong>not ideal for exposed roof applications</strong>. Pidifin 2K lacks the elastomeric flexibility needed to accommodate thermal movement on roof surfaces and has limited UV resistance. We frequently encounter roofs where contractors have mistakenly applied Pidifin 2K as a roof waterproofing solution, only to see it crack within 1–2 monsoon cycles due to thermal expansion stress.
                            </p>
                        </div>

                        {/* Asian Paints SmartCare Damp Proof */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-center gap-3 mb-3">
                                <PaintBucket className="text-orange-600" size={20} />
                                <h4 className="font-bold text-gray-900 text-base">Asian Paints SmartCare Damp Proof</h4>
                            </div>
                            <p className="text-xs text-gray-700 leading-relaxed mb-2">
                                <strong>Type:</strong> Interior damp-proofing treatment<br />
                                <strong>Application:</strong> Interior walls with rising damp or seepage stains
                            </p>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                SmartCare Damp Proof is formulated specifically for interior wall damp treatment — it creates a moisture-resistant barrier on interior walls that prevents dampness from manifesting as paint peeling, efflorescence, or mold patches. It is <strong>not designed for roof waterproofing</strong> and should not be applied on exterior roof surfaces. The product lacks weathering resistance, UV stability, and the elastomeric properties required for roof applications. We include it here because homeowners frequently confuse interior damp-proofing products with roof waterproofing solutions, leading to wasted expenditure and unresolved leakage.
                            </p>
                        </div>

                        {/* Asian Paints SmartCare Hydroloc */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-center gap-3 mb-3">
                                <PaintBucket className="text-orange-600" size={20} />
                                <h4 className="font-bold text-gray-900 text-base">Asian Paints SmartCare Hydroloc</h4>
                            </div>
                            <p className="text-xs text-gray-700 leading-relaxed mb-2">
                                <strong>Type:</strong> PU-based liquid membrane<br />
                                <strong>Application:</strong> Exposed roofs, terraces, balconies
                            </p>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Hydroloc is Asian Paints&apos; premium roof waterproofing offering — a polyurethane-based liquid membrane that provides good UV resistance, excellent elongation, and genuine waterproofing performance on exposed roofs. It competes directly with professional-grade PU membranes at a consumer-friendly price point. The product offers a good balance between retail accessibility (available through Asian Paints dealer networks) and professional-grade performance. For medium-sized residential terraces (500–2,000 sq ft), Hydroloc represents a solid mid-range option, though we still recommend professional application rather than DIY for optimal results.
                            </p>
                        </div>

                        {/* Fosroc Brushbond RFX */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <div className="flex items-center gap-3 mb-3">
                                <PaintBucket className="text-purple-600" size={20} />
                                <h4 className="font-bold text-gray-900 text-base">Fosroc Brushbond RFX</h4>
                            </div>
                            <p className="text-xs text-gray-700 leading-relaxed mb-2">
                                <strong>Type:</strong> Professional-grade liquid membrane<br />
                                <strong>Application:</strong> Commercial buildings, large-scale projects
                            </p>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                Fosroc Brushbond RFX is a professional-grade liquid-applied waterproofing membrane used extensively on commercial and institutional projects. Unlike retail products designed for homeowner application, Brushbond RFX is formulated for trained applicators and delivers higher build thickness, better chemical adhesion, and superior long-term performance. Fosroc provides technical support, on-site training, and system warranties when their products are applied by approved applicators like Bhawani Technologies. The product is typically specified by architects and structural consultants for projects requiring documented compliance with international waterproofing standards.
                            </p>
                        </div>

                        {/* STP Chemicals */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 md:col-span-2">
                            <div className="flex items-center gap-3 mb-3">
                                <PaintBucket className="text-red-600" size={20} />
                                <h4 className="font-bold text-gray-900 text-base">STP Chemicals — Industrial Grade PU Membranes</h4>
                            </div>
                            <p className="text-xs text-gray-700 leading-relaxed mb-2">
                                <strong>Type:</strong> Industrial-grade polyurethane membrane systems<br />
                                <strong>Application:</strong> Large-scale industrial, infrastructure, and commercial projects
                            </p>
                            <p className="text-xs text-gray-600 leading-relaxed">
                                STP Chemicals manufactures industrial-grade PU membrane systems designed for large-scale projects where performance specifications exceed what retail-market products can deliver. Their formulations include 100% solids polyurethane systems with zero VOC emissions, high-build single-coat systems that achieve 2mm+ dry film thickness in one application, and chemically resistant variants for industrial environments. STP products are typically specified for factory roofs, warehouse complexes, and infrastructure projects exceeding 10,000 sq ft where the total cost of ownership analysis favours premium materials with 15–20 year maintenance-free service lives.
                            </p>
                        </div>
                    </div>

                    {/* Brand Recommendation */}
                    <div className="bg-green-50 p-6 md:p-8 rounded-2xl border border-green-200">
                        <h4 className="font-bold text-gray-900 mb-3 text-base flex items-center gap-2">
                            <Star className="text-green-600" size={18} />
                            Bhawani Technologies&apos; Recommendation
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed mb-3">
                            For small residential terraces under 1,000 sq ft where budget is the primary consideration, Dr. Fixit Roofseal offers the best value — it&apos;s widely available, reasonably priced, and delivers acceptable 5–7 year performance when applied correctly with proper surface preparation and fiberglass mesh reinforcement. For medium-sized residential and mixed-use terraces (1,000–5,000 sq ft), Asian Paints SmartCare Hydroloc provides a strong balance of performance and cost.
                        </p>
                        <p className="text-sm text-gray-700 leading-relaxed">
                            For commercial roofs, industrial facilities, and any project exceeding 5,000 sq ft, Bhawani Technologies recommends professional-grade PU membrane systems (Fosroc Brushbond RFX, STP Chemicals) or torch-applied APP modified bitumen membrane systems. These systems deliver dramatically longer service life, come with manufacturer system warranties when installed by trained and approved applicators, and offer the lowest total cost of ownership over the building&apos;s lifecycle. Regardless of the product selected, the quality of surface preparation, installation sequencing, and workmanship is ultimately more important than the brand name on the bucket — which is why choosing an experienced, manufacturer-approved applicator like Bhawani Technologies is the most critical decision a building owner can make.
                        </p>
                    </div>
                </div>

                {/* 8. Installation Process & Quality Standards */}
                <div className="mb-20">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="text-green-600 font-bold tracking-wider uppercase text-xs mb-2 block">Process Engineering</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Installation Process &amp; Quality Standards
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Professional waterproofing installation follows a strict sequential process. Each stage must be completed and verified before proceeding to the next. Below, we document every step of our installation methodology, from surface cleaning through final inspection and return-to-service.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Surface Cleaning */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-3 text-base flex items-center gap-2">
                                <Droplets className="text-green-600" size={18} />
                                Surface Cleaning &amp; Preparation
                            </h4>
                            <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                Every waterproofing project begins with thorough surface cleaning — the single most important factor determining membrane adhesion and system longevity. We start with mechanical debris removal to clear all loose material, followed by pressure washing at 2,000–3,000 PSI to remove embedded dirt, algae, moss, and any remaining debris accumulation. For roofs with oil stains, chemical contamination, or stubborn biological growth, an alkaline cleaner is applied before pressure washing to break down organic and hydrocarbon residues. Standing water and slurry are removed using a wet dry vac to ensure a clean, dry substrate for primer application.
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Surface preparation also includes crack chasing, spall repair, and the creation of 45° angle fillets (cove details) at all wall-to-floor junctions and parapet transitions. Expansion joints are cleaned and prepared with backer rod and sealant. The substrate must be allowed to dry to below 5% moisture content (verified by electronic moisture meter) before primer application. Skipping or rushing this preparation stage is the single most common cause of waterproofing system failure — and the reason why DIY and unqualified contractor applications fail prematurely.
                            </p>
                        </div>

                        {/* Primer Application */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-3 text-base flex items-center gap-2">
                                <PaintBucket className="text-green-600" size={18} />
                                Primer Application
                            </h4>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Primer creates the chemical bond between the substrate and the waterproofing membrane. The specific primer type is selected based on substrate porosity — highly porous concrete requires a deep-penetrating solvent-based primer, while dense, smooth surfaces may need a reactive epoxy primer for adequate adhesion. Coverage rate varies by substrate condition, typically ranging from 6–10 m²/litre for concrete substrates. Primer must be applied uniformly by brush or roller, working it into the pore structure rather than simply painting it on the surface. The dry time between primer application and membrane application is critical — typically 4–8 hours depending on ambient temperature and humidity. Applying membrane over uncured primer traps solvent beneath the film, causing blistering and delamination. Our crews verify primer cure by touch testing before proceeding to the next stage.
                            </p>
                        </div>

                        {/* Membrane Application */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-3 text-base flex items-center gap-2">
                                <Layers className="text-green-600" size={18} />
                                Membrane Application &amp; Curing
                            </h4>
                            <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                For liquid-applied systems, the first coat of membrane is applied at the manufacturer&apos;s specified coverage rate — typically 1.0–1.2 kg/m² for PU membranes, targeting a wet film thickness that will cure to the required dry film thickness. The viscous membrane compound is mixed thoroughly (for two-component systems) according to manufacturer ratios before application by roller, brush, or airless spray equipment. Wet film thickness is checked during application using a wet film thickness gauge to ensure the correct amount of material is being deposited.
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                After the first coat reaches its specified curing time (typically 12–24 hours depending on ambient temperature and product formulation), a reinforcement layer is embedded if required, followed by the second coat. For 100% solids polyurethane systems, mixing ratios are especially critical — incorrect ratios result in incomplete cure, permanent tackiness, and total system failure. Each coat must be allowed its full curing time before the next layer is applied. Coating thickness measurement using dry film thickness gauges per ASTM D7091 is performed at multiple points across the application area to verify uniform build-up and compliance with manufacturer installation requirements.
                            </p>
                        </div>

                        {/* Reinforcement */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-3 text-base flex items-center gap-2">
                                <Shield className="text-green-600" size={18} />
                                Reinforcement &amp; Structural Enhancement
                            </h4>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Reinforcement fabrics embedded within the waterproofing membrane dramatically improve tensile strength, puncture resistance, and crack-bridging capability. We use several types depending on the application: <strong>fiberglass reinforcement</strong> (45–60 GSM alkali-resistant glass fibre mesh) is the standard choice for acrylic and PU liquid systems, providing excellent dimensional stability and chemical compatibility. <strong>Polyester reinforcement</strong> offers superior elongation for applications requiring high flexibility, such as expansion joint details. For modified bitumen systems, the cap sheet typically incorporates polyester fleece backing that serves as the integral reinforcement layer. <strong>Reinforcement mesh</strong> and <strong>fiber cloth</strong> are embedded between the first and second coats of liquid membrane, rolled into the wet first coat to ensure complete saturation and encapsulation. The reinforcement must be fully wetted-out with no dry spots or air pockets — incomplete saturation creates weak points that can lead to premature failure.
                            </p>
                        </div>

                        {/* Seaming & Fastening */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-3 text-base flex items-center gap-2">
                                <Hammer className="text-green-600" size={18} />
                                Seaming, Fastening &amp; Edge Details
                            </h4>
                            <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                <strong>Seaming</strong> is critical for prefabricated membrane systems. Lapping — the overlap of adjacent membrane sheets — must achieve the manufacturer&apos;s minimum requirement (typically 75–150mm depending on the system). Seams must be clean, dry, and properly aligned before bonding. For thermoplastic membranes (PVC, TPO), heat-welded seams are created using hot-air welding equipment at carefully controlled temperatures — too hot and the membrane burns through, too cool and the bond is inadequate. All seams are probed after welding to verify complete bonding. Re-seaming is performed immediately if any defects are detected.
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                <strong>Fastening</strong> for mechanically attached systems requires precise fastener selection. Fastener spacing is determined by calculated wind uplift loads — perimeter and corner zones require closer spacing than field-of-roof areas. Fastener length must be sufficient to penetrate through the membrane, insulation, and into the structural deck with a minimum embedment depth. Fastening bars and fastening plates distribute point loads across the membrane surface, preventing pull-through. All loose fasteners must be identified and replaced, and every penetration point must be sealed with compatible membrane material to prevent water entry around fasteners.
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                <strong>Edge details</strong> require particular attention as they define the perimeter termination of the waterproofing system. Drip edges direct water away from the building fascia and into the gutter system. Metal edge securement systems must be anchored to resist design wind loads per ANSI/SPRI/FM4435 ES-1. Metal flashing terminations at parapets, roof edges, and curbs must be counter-flashed to prevent water entry behind the membrane termination. These seemingly minor details account for a disproportionate number of roof failures and warranty claims.
                            </p>
                        </div>

                        {/* Testing & Inspection */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-3 text-base flex items-center gap-2">
                                <Eye className="text-green-600" size={18} />
                                Testing, Inspection &amp; Quality Verification
                            </h4>
                            <p className="text-sm text-gray-700 leading-relaxed mb-3">
                                <strong>Flood testing</strong> (also called ponding test or hydrostatic test) is the definitive test for waterproofing integrity. We dam the roof drains and fill the waterproofed area with 50–75mm of water for a minimum of 24–72 hours. The ceiling below is inspected at regular intervals for any signs of moisture. For occupied buildings, we perform zone-wise flood testing to minimise risk. <strong>Adhesion pull tests</strong> per ASTM D4541 are performed at multiple locations using a calibrated portable pull-off tester — results must exceed the minimum adhesion strength specified by the membrane manufacturer (typically 1.5 MPa for most systems). A <strong>pull-out mock-up test</strong> verifies that mechanical fasteners achieve their designed pull-out resistance in the specific deck substrate on the project.
                            </p>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                <strong>Thermal imaging</strong> is performed post-installation to verify that no trapped moisture exists beneath the new membrane. <strong>Coating thickness measurement</strong> using electronic gauges per ASTM D7091 confirms that the applied dry film thickness meets specification at every point. All testing results are compiled into a <strong>final inspection report</strong> that is delivered to the client along with the installation log, as-built documentation, and warranty certificates. This documentation package provides verifiable evidence of proper installation and serves as the basis for warranty claims if ever needed.
                            </p>
                        </div>

                        {/* Safety & Weather */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-3 text-base flex items-center gap-2">
                                    <HardHat className="text-green-600" size={18} />
                                    Safety Standards &amp; Compliance
                                </h4>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    All Bhawani Technologies roof waterproofing crews follow OSHA roofing safety standards adapted for Indian workplace conditions. Workers are equipped with appropriate protective clothing including chemical-resistant gloves, safety harnesses for edges and elevated work, and non-slip footwear. For solvent-based products and hot-applied systems, respirators with organic vapour cartridges are mandatory. We track VOC emissions for every product used and ensure compliance with applicable air quality regulations. All torch operations (for APP modified bitumen) follow fire watch protocols with extinguishers staged within 3 metres of the work area.
                                </p>
                            </div>

                            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-3 text-base flex items-center gap-2">
                                    <Clock className="text-green-600" size={18} />
                                    Weather Constraints &amp; Curing
                                </h4>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    Roof waterproofing is inherently a weather-limited operation. Installation cannot proceed during rain, and most liquid-applied products require ambient temperatures between 10°C–45°C with relative humidity below 85%. In Delhi NCR, the optimal weather-limited installation windows are October through March (post-monsoon, pre-peak summer) and April through mid-June (pre-monsoon). Temperature fluctuations during the day affect curing time — afternoon applications in summer cure faster but risk skinning before full wet-out. Frost overnight (December–January) can damage uncured coatings. The exposure period between coats must respect both minimum and maximum recoat windows. Shelf life of waterproofing materials must be verified before use — expired products exhibit compromised curing and reduced performance. Full return-to-service (allowing foot traffic and furniture placement) typically requires 7–14 days after final coat application.
                                </p>
                            </div>
                        </div>

                        {/* Quality Assurance */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-3 text-base flex items-center gap-2">
                                <Award className="text-green-600" size={18} />
                                Quality Assurance &amp; Manufacturer Compliance
                            </h4>
                            <p className="text-sm text-gray-700 leading-relaxed">
                                Bhawani Technologies&apos; installation teams are trained and approved by the manufacturers whose products we install. This manufacturer approval status means our installations qualify for manufacturer system warranties — not just material warranties. The distinction is significant: a material warranty only covers defective product, while a system warranty covers the entire installed assembly including workmanship. We follow manufacturer installation requirements precisely, including specified installation sequencing, minimum and maximum application rates, curing time requirements between coats, and environmental conditions during application. Our installation log documents every material batch number, application rate, ambient conditions, and curing interval. The materials list for every project includes manufacturer data sheets with certified test results. This level of documentation is what separates professional waterproofing installation from ad-hoc application — and it&apos;s what enables us to offer our clients the strongest warranty protection available.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 9. Common Roof Waterproofing Problems & Solutions */}
                <div className="mb-20 bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="text-green-600 font-bold tracking-wider uppercase text-xs mb-2 block">Troubleshooting Guide</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Common Roof Waterproofing Problems &amp; Solutions
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Even properly installed waterproofing systems can develop issues over time due to age, environmental exposure, and mechanical damage. Understanding these common failure modes helps building owners identify problems early and seek timely professional intervention before minor issues become major structural damage.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Problem 1: Blistering */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-gray-900 mb-2 text-base flex items-center gap-2">
                                <Bug className="text-red-500" size={18} />
                                Blistering &amp; Bubbling
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-700">
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Signs to Look For:</p>
                                    <p>Raised bubbles or blisters on the membrane surface, ranging from coin-sized to large dome-shaped areas. Blisters may be filled with air, water, or solvent vapour. Moisture-related wrinkling around blisters is common.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Root Cause:</p>
                                    <p>Blistering is caused by trapped moisture within or beneath the membrane — moisture in the substrate that wasn&apos;t adequately dried before coating, or moisture that has migrated from below through vapour drive. Incompatible materials (applying a solvent-based coating over a water-based primer before full cure) also cause blistering due to solvent entrapment. Poor primer adhesion allows air pockets to form at the substrate-membrane interface.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-green-700 mb-1">Bhawani Technologies&apos; Fix:</p>
                                    <p>Cut open all blisters, clean and dry the exposed substrate, apply fresh primer at the correct coverage rate, and patch with compatible membrane material extending 100mm beyond the blister perimeter. For widespread blistering, full membrane removal and re-application with proper moisture testing is required. We verify substrate moisture below 5% before any new application.</p>
                                </div>
                            </div>
                        </div>

                        {/* Problem 2: Peeling & Cracking */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-gray-900 mb-2 text-base flex items-center gap-2">
                                <Zap className="text-red-500" size={18} />
                                Peeling, Cracking &amp; Brittleness
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-700">
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Signs to Look For:</p>
                                    <p>Coating edges lifting and curling away from the substrate, visible cracks in the membrane surface (especially in a grid pattern following substrate cracks below), chalking or powdering of the surface, loss of flexibility — the membrane feels hard and brittle rather than rubbery.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Root Cause:</p>
                                    <p>UV degradation is the primary cause of peeling and cracking — UV radiation breaks down polymer chains in the coating, causing loss of UV resistance, brittleness, and eventual disintegration. Temperature fluctuations (thermal movement) stress rigid coatings that have lost their elastomeric flexibility, opening cracks along substrate joints and structural movement planes. Inadequate dry film thickness accelerates UV degradation by reducing the depth of polymer available to absorb UV energy.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-green-700 mb-1">Bhawani Technologies&apos; Fix:</p>
                                    <p>Remove all loose, cracked, and delaminated coating by scraping and power washing. Verify substrate adhesion of remaining coating via ASTM D4541 pull test. Apply a bonding primer compatible with both the existing and new systems. Apply new membrane with fiberglass reinforcement, ensuring adequate DFT for the expected UV exposure. For severe cases, switch to a UV-stable system (aliphatic PU or silicone roof coating) rather than reapplying the same failed system.</p>
                                </div>
                            </div>
                        </div>

                        {/* Problem 3: Seam Failure */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-gray-900 mb-2 text-base flex items-center gap-2">
                                <AlertTriangle className="text-red-500" size={18} />
                                Seam Failure &amp; Lap Delamination
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-700">
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Signs to Look For:</p>
                                    <p>Membrane edges separating at lap joints, fish-mouths (where the leading edge of a lap curls upward creating a pocket that channels water), debonding at seam adhesive lines, granule loss along seam edges exposing bare membrane, visible daylight through open laps.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Root Cause:</p>
                                    <p>Seam failure results from inadequate bonding during original installation — insufficient heat for welded seams, contaminated surfaces at lap joints, or adhesive applied outside its working time. Fish-mouths form when membrane wrinkles during installation are not properly ironed flat. Temperature cycling and foot traffic accelerate seam separation over time. For modified bitumen systems, granule loss at seams indicates UV exposure of the base bitumen that weakens adhesion.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-green-700 mb-1">Bhawani Technologies&apos; Fix:</p>
                                    <p>Clean and dry all delaminated seam surfaces. For heat-weldable membranes, re-weld the seam using controlled hot-air welding and immediately roll with a pressure roller. For adhesive-bonded systems, apply new seam adhesive or seam tape. Fish-mouths are cut open, cleaned, re-adhered flat, and capped with a 150mm membrane strip. All repaired seams are probed and tested before sign-off. For widespread seam failure, full re-seaming of the entire roof is recommended.</p>
                                </div>
                            </div>
                        </div>

                        {/* Problem 4: Ponding Water */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-gray-900 mb-2 text-base flex items-center gap-2">
                                <Droplets className="text-red-500" size={18} />
                                Ponding Water &amp; Drainage Failures
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-700">
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Signs to Look For:</p>
                                    <p>Standing water on the roof surface more than 48 hours after rain, water stains and sediment rings marking habitual ponding zones, algae and moss growth in perpetually wet areas, accelerated membrane deterioration in ponding zones compared to well-drained areas.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Root Cause:</p>
                                    <p>Ponding results from inadequate slope, structural deflection (sagging), blocked drains or clogged scuppers, crushed or displaced tapered insulation, or improper original drainage design. Many Delhi NCR flat roofs were constructed without proper slope specifications, creating inherent ponding tendencies. Debris accumulation in drains and gutters — especially during the autumn leaf-fall season — creates sudden ponding during monsoon downpours.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-green-700 mb-1">Bhawani Technologies&apos; Fix:</p>
                                    <p>Clear all blocked drains, downspouts, and scuppers. Install additional internal drains or overflow provisions where existing drainage is insufficient. Apply tapered insulation screeds or polymer-modified levelling compounds to establish positive slope (minimum 1:80) towards drain points. For structural deflection, consult a structural engineer before waterproofing. Use only ponding-water-rated membranes (EPDM, PVC, TPO, or modified bitumen) in areas prone to standing water — acrylic coatings are not rated for ponding conditions.</p>
                                </div>
                            </div>
                        </div>

                        {/* Problem 5: Mold Growth */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-gray-900 mb-2 text-base flex items-center gap-2">
                                <Bug className="text-red-500" size={18} />
                                Mold Growth &amp; Trapped Moisture
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-700">
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Signs to Look For:</p>
                                    <p>Black, green, or white mold patches on ceiling soffits below the roof, musty odour in top-floor rooms, peeling interior paint directly below roof areas, visible moisture stains that keep recurring despite interior painting.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Root Cause:</p>
                                    <p>Trapped moisture within the roof assembly — water that has penetrated the membrane and saturated the insulation layer creates a perpetually damp environment ideal for mold growth. Damp insulation loses its thermal performance and becomes a reservoir of moisture that slowly migrates downward into the building interior. Wet insulation may not dry out on its own, as the membrane above prevents evaporation and the ceiling below restricts airflow.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-green-700 mb-1">Bhawani Technologies&apos; Fix:</p>
                                    <p>Thermal imaging to map moisture extent within the roof assembly. Targeted removal of saturated insulation and damaged membrane. Anti-fungal treatment of affected concrete deck surfaces. Installation of new dry insulation with proper vapour barrier placement. Complete membrane re-application over the repaired area with 300mm overlap beyond the damaged zone. Interior mold remediation and re-painting of affected ceilings. Ongoing moisture monitoring recommended for the first monsoon season after repair.</p>
                                </div>
                            </div>
                        </div>

                        {/* Problem 6: Wind Uplift */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-gray-900 mb-2 text-base flex items-center gap-2">
                                <Wind className="text-red-500" size={18} />
                                Wind Uplift &amp; Storm Damage
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-700">
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Signs to Look For:</p>
                                    <p>Membrane lifted or peeled back at corners and perimeter edges, loose or displaced metal edge components, flapping or billowing membrane sections, water staining below perimeter areas after storms, exposed insulation visible where membrane has blown off, evidence of wind-driven rain entry at flashing terminations.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Root Cause:</p>
                                    <p>Wind uplift resistance failure occurs when the membrane attachment (adhesion, mechanical fastening, or ballast) is insufficient to resist the negative pressure created by wind flowing over the building. Corners and perimeter edges experience 2–3 times the wind pressure of the field-of-roof area. Improperly secured metal edge systems, loose fasteners, deteriorated adhesive bonds, or inadequate ballast weight allow wind to get beneath the membrane edge and progressively peel it away. Wind-driven water penetrates through any opening created by wind damage, causing rapid interior water intrusion.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-green-700 mb-1">Bhawani Technologies&apos; Fix:</p>
                                    <p>Emergency tarpaulin coverage for immediate protection. Full assessment of remaining membrane adhesion and fastener integrity. Replacement of damaged membrane sections with new material, extending a minimum of 300mm beyond the damaged area. Upgrade of perimeter edge securement to meet current wind uplift design requirements per FM and SPRI standards. Reinforced fastener spacing in corner and perimeter zones. Installation of wind-resistant metal edge securement systems compliant with ANSI/SPRI/FM4435 ES-1.</p>
                                </div>
                            </div>
                        </div>

                        {/* Problem 7: Foot Traffic Damage */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-gray-900 mb-2 text-base flex items-center gap-2">
                                <AlertTriangle className="text-red-500" size={18} />
                                Foot Traffic Damage &amp; Mechanical Wear
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-700">
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Signs to Look For:</p>
                                    <p>Worn paths across the membrane surface (especially routes to HVAC equipment, water tanks, or satellite dishes), puncture marks from dropped tools or sharp objects, scuff marks and abrasion damage, membrane thinning in high-traffic areas visible as colour change or transparency.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Root Cause:</p>
                                    <p>Many waterproofing membranes are not designed for regular foot traffic. Thin acrylic coatings have minimal walkability and abrasion resistance. Even robust membranes can be punctured by sharp objects dropped during maintenance activities. Impact resistance and puncture resistance vary significantly between membrane types — a critical specification often overlooked during product selection.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-green-700 mb-1">Bhawani Technologies&apos; Fix:</p>
                                    <p>Install designated walkway pads or protective pavers along maintenance access routes. Apply a sacrificial wear coat (textured acrylic topcoat) over the membrane in high-traffic zones. For terraces used as living spaces, install protective tile or paver overlays on pedestals above the membrane. Select membrane systems with documented puncture resistance ratings appropriate for the expected traffic level. Establish clear access rules — maintenance personnel must use designated walkways and avoid dragging equipment across unprotected membrane surfaces.</p>
                                </div>
                            </div>
                        </div>

                        {/* Problem 8: Ice Dams */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-gray-900 mb-2 text-base flex items-center gap-2">
                                <Snowflake className="text-blue-500" size={18} />
                                Ice Dams (Hill Station Properties)
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-700">
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Signs to Look For:</p>
                                    <p>Ice ridges forming at eaves and roof edges during winter, icicles hanging from gutters, water stains on interior ceilings during thaw cycles, damaged gutters pulled away from the fascia by ice weight.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Root Cause:</p>
                                    <p>While uncommon in Delhi NCR, ice dams are a significant concern for properties in Shimla, Mussoorie, Dehradun, and other North Indian hill stations. They form when heat loss from the building warms the roof deck unevenly — snow melts in the warm center of the roof and refreezes at the cold eaves, creating a dam that forces water beneath the roof covering. Inadequate attic insulation and ventilation are the underlying causes.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-green-700 mb-1">Bhawani Technologies&apos; Fix:</p>
                                    <p>Install ice and water shield membrane along eaves extending a minimum of 600mm past the interior wall line. Improve attic insulation to prevent heat loss through the roof deck. Ensure adequate attic ventilation (ridge vents and soffit vents) to maintain uniform roof surface temperature. For severe cases, install heat cables along eaves and in gutters to prevent ice formation during heavy snowfall periods.</p>
                                </div>
                            </div>
                        </div>

                        {/* Problem 9: Leaks at Penetrations */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-gray-900 mb-2 text-base flex items-center gap-2">
                                <CircleDot className="text-red-500" size={18} />
                                Leaks at Penetrations &amp; Transitions
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-700">
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Signs to Look For:</p>
                                    <p>Water stains on ceilings directly below chimneys, skylights, plumbing vents, or vent stacks. Rust stains running down from pipe penetration bases. Cracked or separated sealant around roof penetrations. Daylight visible around pipe boot flanges. Water dripping at electrical conduit entries during rain.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Root Cause:</p>
                                    <p>Penetrations are the most leak-prone locations on any roof because they interrupt the continuous membrane surface and create complex geometry that is difficult to seal properly. Chimney flashings require a multi-step detail involving base flashing, step flashing, counter flashing, and cricket construction. Skylight curbs must be flashed with membrane extending up the vertical face and secured with counter flashing. Plumbing vent pipe boots are often the first element to fail, as UV exposure degrades the rubber boot within 5–8 years even when the surrounding membrane remains intact.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-green-700 mb-1">Bhawani Technologies&apos; Fix:</p>
                                    <p>Replace all degraded pipe boots and flashing collars with new UV-resistant units. For chimney and skylight penetrations, install a fully integrated membrane flashing system — not just surface sealant — that extends a minimum of 200mm up the vertical surface and is mechanically secured with counter flashing. For PU and liquid-applied systems, we build up multiple reinforced coats around each penetration to create a monolithic collar. All penetration repairs are individually flood-tested before project sign-off.</p>
                                </div>
                            </div>
                        </div>

                        {/* Problem 10: Structural Rot */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h4 className="font-bold text-gray-900 mb-2 text-base flex items-center gap-2">
                                <AlertTriangle className="text-red-500" size={18} />
                                Structural Rot &amp; Deck Deterioration
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-gray-700">
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Signs to Look For:</p>
                                    <p>Soft, spongy areas when walking on the roof surface, visible sagging or deflection of the roof deck, water-stained and deteriorated wood decking visible from below (in wood-framed structures), spalling concrete with exposed corroding rebar (in RCC structures), cracks following rebar alignment patterns.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900 mb-1">Root Cause:</p>
                                    <p>Prolonged moisture exposure causes structural rot in wood deck substrates and rebar corrosion in concrete decks. Deck rot progresses silently beneath intact-looking waterproofing membranes — by the time it becomes visible, significant structural damage has already occurred. Soft or deteriorated decking cannot support the loads it was designed for, creating safety hazards. In Delhi NCR&apos;s concrete construction, corroding rebar expands and spalls the concrete cover, progressively weakening the structural slab.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-green-700 mb-1">Bhawani Technologies&apos; Fix:</p>
                                    <p>Structural rot and deck deterioration require structural repair before any waterproofing can be applied. We coordinate with licensed structural engineers to assess the extent of damage and design repairs. For RCC decks, this typically involves concrete removal around corroded rebar, rebar treatment or replacement, patch repair with structural-grade polymer-modified mortar, and 28-day cure before waterproofing. For wood decks, all rotted sections are replaced with treated timber. Waterproofing is then applied over the structurally sound, repaired substrate. This is a non-negotiable sequence — waterproofing over a compromised deck is a waste of money and a safety liability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 10. Standards, Compliance & Warranty */}
                <div className="mb-20">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="text-green-600 font-bold tracking-wider uppercase text-xs mb-2 block">Compliance &amp; Certification</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                            Standards, Compliance &amp; Warranty
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Professional waterproofing is governed by internationally recognized testing standards, building codes, and manufacturer certification requirements. Understanding these standards helps building owners evaluate contractor qualifications and ensure their waterproofing investment is protected by enforceable warranties.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* ASTM Standards */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-4 text-base flex items-center gap-2">
                                <Scale className="text-green-600" size={18} />
                                ASTM Standards
                            </h4>
                            <ul className="space-y-3 text-xs text-gray-700">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={14} />
                                    <div><strong>ASTM E108</strong> — Standard test methods for fire testing of roof coverings. Classifies assemblies as Class A, B, or C based on resistance to fire exposure from external sources. Required for all commercial and institutional roof assemblies.</div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={14} />
                                    <div><strong>ASTM E84</strong> — Standard test for surface burning characteristics. Measures flame spread index and smoke development index of building materials. Critical for interior-exposed membrane applications and foam plastic insulation.</div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={14} />
                                    <div><strong>ASTM D412</strong> — Standard test for vulcanized rubber and thermoplastic elastomers. Measures tensile strength, elongation at break, and modulus — key performance indicators for EPDM and elastomeric membrane systems.</div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={14} />
                                    <div><strong>ASTM D4541</strong> — Standard test method for adhesion pull-off strength using portable pull-off testers. This is the standard Bhawani Technologies uses to verify membrane-to-substrate bond strength during installation and inspection.</div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={14} />
                                    <div><strong>ASTM D7091</strong> — Standard practice for nondestructive measurement of dry film thickness of coatings. Used by our teams to verify coating thickness measurement at multiple points across the application area.</div>
                                </li>
                            </ul>
                        </div>

                        {/* UL & FM Standards */}
                        <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                            <h4 className="font-bold text-gray-900 mb-4 text-base flex items-center gap-2">
                                <Shield className="text-green-600" size={18} />
                                UL, FM &amp; Building Code Standards
                            </h4>
                            <ul className="space-y-3 text-xs text-gray-700">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={14} />
                                    <div><strong>UL 790</strong> — Standard for roof fire testing (equivalent to ASTM E108). UL-listed roof assemblies have been tested and certified to resist fire exposure, ensuring code official acceptance in jurisdictions that require UL certification.</div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={14} />
                                    <div><strong>UL 723</strong> — Standard for test for surface burning characteristics of building materials (flame spread). Used in conjunction with ASTM E84 for materials that require both listings.</div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={14} />
                                    <div><strong>FM 4470</strong> — Factory Mutual approval standard for single-ply roofing systems. FM-approved assemblies have been tested for wind uplift resistance, fire performance, and weathering. FM approval is often required for insurance coverage on commercial properties.</div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={14} />
                                    <div><strong>ANSI/SPRI/FM4435 ES-1</strong> — Standard for wind design of metal edge securement systems for roof systems. Specifies the design methodology for securing metal edge components to resist design wind speeds without failure.</div>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={14} />
                                    <div><strong>International Building Code (IBC) &amp; International Residential Code (IRC)</strong> — The model building codes that specify minimum requirements for roof assemblies, including fire classification, wind resistance, moisture protection, and energy efficiency. Code official requirements in Indian metros increasingly reference IBC provisions for commercial construction.</div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Warranty Section */}
                    <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm mb-6">
                        <h4 className="font-bold text-gray-900 mb-4 text-base flex items-center gap-2">
                            <Award className="text-green-600" size={18} />
                            Manufacturer Warranty &amp; Bhawani Technologies Workmanship Guarantee
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700 leading-relaxed">
                            <div>
                                <p className="mb-3">
                                    <strong>Manufacturer system warranty</strong> is the gold standard of waterproofing warranty protection. Unlike a basic material warranty (which only covers factory defects in the product itself), a system warranty covers the entire installed assembly — materials, accessories, flashings, and workmanship — under a single warranty document from the manufacturer. This single-source warranty means the building owner has one point of contact for any warranty claim, eliminating the contractor-blames-manufacturer disputes that plague the industry.
                                </p>
                                <p>
                                    Obtaining a manufacturer system warranty requires that the installation be performed by a contractor who is <strong>trained and approved by the manufacturer</strong>. The manufacturer&apos;s technical representative typically inspects the installation at critical stages and signs off on the completed work before the warranty is issued. Bhawani Technologies maintains approved applicator status with all major waterproofing manufacturers operating in India, enabling us to offer manufacturer system warranties on every qualifying project.
                                </p>
                            </div>
                            <div>
                                <p className="mb-3">
                                    <strong>Bhawani Technologies&apos; workmanship warranty</strong> is our direct guarantee of installation quality, independent of the manufacturer&apos;s coverage. We issue a 7-year workmanship warranty on all roof waterproofing installations, covering defects in application technique, surface preparation, flashing details, and seam integrity. This workmanship warranty is backed by our continued presence in Delhi NCR since 2008 — we&apos;re not a fly-by-night operation that disappears after the installation.
                                </p>
                                <p className="mb-3">
                                    For most projects, clients receive dual warranty protection: a <strong>manufacturer material/system warranty</strong> (10–20 years depending on the system) plus our <strong>7-year workmanship warranty</strong>. The written scope of work provided at the start of every project specifies exactly what warranty coverage applies, its duration, what is covered and excluded, and the process for filing a claim. This transparency is fundamental to our approach — building owners deserve to know exactly what protection they&apos;re purchasing.
                                </p>
                                <p>
                                    Permit requirements vary by jurisdiction and project type. For certain commercial and institutional projects, the code official may require proof of fire classification, wind uplift ratings, and energy code compliance before issuing occupancy permits. Bhawani Technologies provides all necessary compliance documentation and coordinates directly with local authorities when required.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Explore Links CTA */}
                <div className="text-center bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        Get a Free Roof Inspection &amp; Detailed Estimate
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 max-w-2xl mx-auto">
                        Need specific specifications, a written scope of work, or a detailed cost estimate for your building? Bhawani Technologies provides free on-site roof inspections using our 7-point protocol for properties across Delhi, Noida, Gurgaon, Faridabad, and Greater Delhi NCR.
                    </p>
                    <p className="text-gray-500 text-xs mb-6">
                        Call us directly at <a href="tel:+917677779418" className="text-green-600 font-bold hover:underline">+91 76777 79418</a> or use the links below to explore our services.
                    </p>
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
                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-800 font-bold rounded-xl border border-slate-300 hover:border-green-500 hover:text-green-700 transition-colors text-sm"
                        >
                            <Phone size={14} /> Request Free Inspection
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
