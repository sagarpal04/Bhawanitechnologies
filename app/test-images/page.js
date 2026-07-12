"use client";

import Image from "next/image";

export default function TestImages() {
    const images = [];
    // 100 to 125
    for (let i = 100; i <= 125; i++) {
        images.push(`/${i}.jpg`);
    }
    // image-1 to image-18
    for (let i = 1; i <= 18; i++) {
        if (i === 10 || i === 12) continue; // Skip missing ones if any
        images.push(`/image-${i}.jpg`);
        images.push(`/image-${i}.png`);
    }
    images.push("/BhawaniTechLogo.png");
    images.push("/logo_bhawani.png");
    images.push("/logo.png");

    return (
        <div className="p-8 bg-white text-slate-800 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Image Catalog</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {images.map((src, index) => (
                    <div key={index} className="border border-slate-200 rounded-lg p-2 flex flex-col items-center">
                        <div className="relative w-full h-40 bg-slate-100 mb-2 overflow-hidden rounded">
                            <img
                                src={src}
                                alt={src}
                                className="object-cover w-full h-full"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        </div>
                        <span className="text-xs font-mono break-all">{src}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
