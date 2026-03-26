"use client";

import Link from "next/link";
import { FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";
import { FiCpu } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="pt-24 pb-12 text-white overflow-hidden" aria-labelledby="footer-heading"
            style={{ background: "#020d1a", borderTop: "1px solid rgba(59,130,246,0.1)" }}>
            <h2 id="footer-heading" className="sr-only">Footer</h2>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Top Section: Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

                    {/* Products */}
                    <div>
                        <h3 className="text-[#93c5fd] text-lg font-medium mb-6">Solutions</h3>
                        <ul className="flex flex-col gap-3 font-mono text-[13px] text-neutral-500">
                            {["Neural Architectures", "LLM Fine-tuning", "Agentic Systems", "Cloud Infrastructure", "Model Alignment", "Data Engineering", "Synthetic Intelligence"].map((item) => (
                                <li key={item} className="hover:text-neutral-300 transition-colors">
                                    <Link href="#">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-[#93c5fd] text-lg font-medium mb-6">Resources</h3>
                        <ul className="flex flex-col gap-3 font-mono text-[13px] text-neutral-500">
                            {["Technical Blog", "Customer Stories", "Feasibility Guides", "AI Academy", "Research Papers", "Events", "Documentation"].map((item) => (
                                <li key={item} className="hover:text-neutral-300 transition-colors">
                                    <Link href="#">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-[#93c5fd] text-lg font-medium mb-6">Company</h3>
                        <ul className="flex flex-col gap-3 font-mono text-[13px] text-neutral-500">
                            {["About EnVaedha", "Careers", "Partnerships", "Trust Center", "Research Lab", "Media Kit"].map((item) => (
                                <li key={item} className="hover:text-neutral-300 transition-colors">
                                    <Link href="#">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col">
                        <h3 className="text-[#93c5fd] text-lg font-medium mb-1">Stay updated with AI</h3>
                        <p className="text-neutral-400 text-sm mb-6 font-sans">Latest research delivered to your inbox.</p>

                        <div className="flex flex-col gap-4">
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="w-full bg-[#000011] border border-neutral-700 rounded-lg px-4 py-3 text-sm font-mono focus:outline-none focus:border-primary transition-colors"
                                />
                            </div>
                            <button className="w-fit bg-[#dbeafe] text-black px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-white transition-all self-end">
                                Subscribe
                            </button>
                        </div>

                        <div className="mt-6 flex items-center justify-end gap-5 text-neutral-400">
                            <Link href="#" className="hover:text-white transition-colors"><FaLinkedinIn size={18} /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><FaTwitter size={18} /></Link>
                            <Link href="#" className="hover:text-white transition-colors"><FaYoutube size={20} /></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Massive wordmark branding — Static Marquee with Separators — Edge to Edge */}
            <div className="w-full select-none pointer-events-none overflow-hidden my-16 border-y border-blue-900/10 py-4">
                <div className="flex w-max animate-marquee-full whitespace-nowrap items-center">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                        <div key={i} className="flex items-center">
                            <h1 className="text-[18vw] font-bold tracking-[-0.05em] text-[#93c5fd] leading-[1] opacity-90 filter drop-shadow-[0_0_40px_rgba(147,197,253,0.15)] mx-[4vw]">
                                Envaedha
                            </h1>
                            <span className="text-[12vw] font-thin text-blue-400/20">|</span>
                        </div>
                    ))}
                </div>
                <style>{`
                    @keyframes marquee-full {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(-50%); }
                    }
                    .animate-marquee-full {
                        animation: marquee-full 60s linear infinite;
                    }
                `}</style>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 font-mono text-[11px] tracking-widest text-neutral-600">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#93c5fd] animate-pulse shadow-[0_0_8px_rgba(147,197,253,0.8)]"></div>
                        <span>ALL SYSTEMS OPERATIONAL </span>
                    </div>

                    <div className="flex items-center gap-8">
                        <Link href="#" className="hover:text-neutral-400">PRIVACY_POLICY</Link>
                        <Link href="#" className="hover:text-neutral-400">TERMS_OF_SERVICE</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
