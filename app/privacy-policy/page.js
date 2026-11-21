export const metadata = {
    title: "Privacy Policy | Bhawani Technologies",
    description: "Privacy policy for Bhawani Technologies. Learn how we collect, protect, and handle your information.",
    alternates: {
        canonical: "https://www.bhawanitechnologies.in/privacy-policy",
    },
};

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-white mt-20 py-16 md:py-24">
            <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
                <p className="text-sm text-gray-500 mb-8">Last Updated: November 2026</p>

                <div className="prose prose-slate max-w-none space-y-6 text-gray-700 leading-relaxed">
                    <p>
                        At Bhawani Technologies (operating at <a href="https://www.bhawanitechnologies.in" className="text-green-600 underline">https://www.bhawanitechnologies.in</a>), accessible from C-288, 3rd Floor, New Ashok Nagar, New Delhi 110096, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information that is collected and recorded by Bhawani Technologies and how we use it.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">1. Information We Collect</h2>
                    <p>
                        When you contact us, request a free site inspection, or fill out our enquiry forms, we may ask you to provide contact information, including your:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Name</li>
                        <li>Phone number</li>
                        <li>Email address</li>
                        <li>Project location / property address in Delhi NCR</li>
                        <li>Service requirements (e.g. roof waterproofing, basement seepage, epoxy flooring)</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect in various ways, including to:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Provide, operate, and maintain our waterproofing inspection and estimation services</li>
                        <li>Coordinate on-site structural assessments and customer consultations</li>
                        <li>Send service estimates, technical specifications, and project updates</li>
                        <li>Communicate directly with you via phone, WhatsApp, or email for customer support</li>
                        <li>Prevent fraudulent inquiries and protect website security</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">3. Log Files &amp; Analytics</h2>
                    <p>
                        Bhawani Technologies follows a standard procedure of using log files and privacy-focused analytics tools (such as Vercel Analytics and Google Tag Manager) to understand visitor trends and improve website usability. These records do not contain personally identifiable information.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">4. Data Protection &amp; Confidentiality</h2>
                    <p>
                        We do not sell, trade, or rent your personal identification information to third parties. Your inspection details and contact numbers are strictly used by our engineering team to service your waterproofing requests.
                    </p>

                    <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-3">5. Contact Information</h2>
                    <p>
                        If you have any questions or require more information about our Privacy Policy, please contact us:
                    </p>
                    <p className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                        <strong>Bhawani Technologies</strong><br />
                        Address: C-288, 3rd Floor, New Ashok Nagar, New Delhi – 110096, India<br />
                        Phone: +91 76777 79418<br />
                        Email: bhawanitechnologies01@gmail.com
                    </p>
                </div>
            </div>
        </div>
    );
}
