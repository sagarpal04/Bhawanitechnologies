export const metadata = {
    title: "Terms of Service | Bhawani Technologies",
    description: "Terms and conditions governing waterproofing services, site inspections, and quotes provided by Bhawani Technologies.",
    alternates: {
        canonical: "https://www.bhawanitechnologies.in/terms",
    },
};

export default function TermsPage() {
    return (
        <div className="bg-white mt-20 py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Terms of Service</h1>
                <p className="text-sm text-gray-500 mb-8">Last Updated: November 2026</p>

                <div className="prose prose-slate max-w-none space-y-6 text-gray-700 leading-relaxed">
                    <p>
                        Welcome to Bhawani Technologies. These terms and conditions outline the rules and regulations for the use of Bhawani Technologies' website and our on-site waterproofing services.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">1. Scope of Services</h2>
                    <p>
                        Bhawani Technologies provides supply and application of waterproofing membranes, coatings, epoxy floorings, injection grouting, and concrete crack repair across Delhi NCR. Estimates given online or via phone are indicative and subject to final on-site inspection.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">2. Site Inspections &amp; Quotations</h2>
                    <p>
                        Free site inspections are offered across Delhi, Noida, Gurgaon, Faridabad, and Ghaziabad. Our technicians inspect the substrate, identify active water entry points, and propose a written scope of work with material specifications (e.g. Dr. Fixit, Asian Paints, Fosroc, Sika).
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">3. Workmanship &amp; Warranty Terms</h2>
                    <p>
                        Project warranties vary based on the specific waterproofing system applied:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>APP Bitumen Membranes:</strong> 5 to 10-year systemic warranty against water ingress.</li>
                        <li><strong>Polyurethane (PU) Liquid Coatings:</strong> 5 to 8-year warranty depending on topcoat specification.</li>
                        <li><strong>Elastomeric Acrylic Paints:</strong> Standard manufacturer warranty terms (3 to 5 years).</li>
                    </ul>
                    <p className="text-sm text-gray-500 italic">
                        Warranty excludes post-application structural alterations, unauthorized drilling, natural disasters, or building foundation shifting.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">4. Disclaimer &amp; Limitations</h2>
                    <p>
                        All material information and guidance provided on this website are for educational and informational purposes. While we strive for accuracy, concrete structural conditions differ per property. Professional diagnosis is recommended before undertaking major roof or basement waterproofing works.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">5. Governing Law</h2>
                    <p>
                        Any legal disputes arising in connection with services provided shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.
                    </p>

                    <p className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mt-8">
                        <strong>Contact Us:</strong><br />
                        Bhawani Technologies<br />
                        C-288, 3rd Floor, New Ashok Nagar, New Delhi 110096<br />
                        Phone: +91 76777 79418 | Email: bhawanitechnologies01@gmail.com
                    </p>
                </div>
            </div>
        </div>
    );
}
