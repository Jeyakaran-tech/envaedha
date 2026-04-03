"use client";

import Link from "next/link";
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";

const SOLUTIONS = [
    { label: "AI Consulting Melbourne", href: "/ai-consulting-melbourne" },
    { label: "AI Agents Melbourne", href: "/ai-agents-melbourne" },
    { label: "Workflow Automation", href: "/workflow-automation" },
    { label: "LLM Fine-Tuning", href: "/llm-fine-tuning" },
    { label: "Cloud Solutions", href: "/#services" },
];

const RESOURCES = [
    { label: "Technical Blog", href: "/blog" },
    { label: "Case Studies", href: "/#case-studies" },
    { label: "Architecture Review", href: "/schedule-a-meeting" },
    { label: "Why Envaedha", href: "/#why-us" },
];

export default function Footer() {
    return (
        <footer className="pt-24 pb-12 text-white overflow-hidden" aria-labelledby="footer-heading"
            style={{ background: "#020d1a", borderTop: "1px solid rgba(59,130,246,0.1)" }}>
            <h2 id="footer-heading" className="sr-only">Footer</h2>

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">

                    {/* Solutions */}
                    <div>
                        <h3 className="text-[#93c5fd] text-[13px] font-mono tracking-[0.2em] mb-8 uppercase">Solutions</h3>
                        <ul className="flex flex-col gap-4 font-sans text-base text-neutral-400">
                            {SOLUTIONS.map((item) => (
                                <li key={item.label} className="hover:text-white transition-colors">
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-[#93c5fd] text-[13px] font-mono tracking-[0.2em] mb-8 uppercase">Resources</h3>
                        <ul className="flex flex-col gap-4 font-sans text-base text-neutral-400">
                            {RESOURCES.map((item) => (
                                <li key={item.label} className="hover:text-white transition-colors">
                                    <Link href={item.href}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-[#93c5fd] text-[13px] font-mono tracking-[0.2em] mb-8 uppercase">Envaedha</h3>
                        <ul className="flex flex-col gap-4 font-sans text-base text-neutral-400">
                            <li className="hover:text-white transition-colors"><Link href="/#who-we-are">About Us</Link></li>
                            <li className="hover:text-white transition-colors"><Link href="/contact">Contact Us</Link></li>
                            <li className="hover:text-white transition-colors"><Link href="mailto:admin@envaedha.com.au">Email Inquiry</Link></li>
                        </ul>
                    </div>

                    {/* Connection / NAP */}
                    <div className="flex flex-col" itemScope itemType="https://schema.org/LocalBusiness">
                        <h3 className="text-[#93c5fd] text-[13px] font-mono tracking-[0.2em] mb-8 uppercase">Connect</h3>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center gap-3 text-neutral-400 text-sm">
                                <span className="text-blue-400">📍</span>
                                <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                                    <span itemProp="addressLocality">Melbourne</span>, <span itemProp="addressRegion">VIC</span>, Australia
                                </span>
                            </div>
                            <div className="flex items-center gap-3 text-neutral-400 text-sm">
                                <span className="text-blue-400">✉️</span>
                                <a href="mailto:admin@envaedha.com.au" itemProp="email" className="hover:text-white transition-colors">admin@envaedha.com.au</a>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 text-neutral-400">
                            <Link href="https://www.linkedin.com/company/envaedha" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
                                <FaLinkedinIn size={20} />
                                <span className="font-mono text-xs tracking-widest pt-0.5">LINKEDIN</span>
                            </Link>
                            <Link href="https://twitter.com/envaedha" target="_blank" className="hover:text-white transition-colors flex items-center gap-2">
                                <FaTwitter size={20} />
                                <span className="font-mono text-xs tracking-widest pt-0.5">TWITTER</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Edge to Edge Marquee branding */}
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
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 font-mono text-[11px] tracking-widest text-neutral-600">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#93c5fd] animate-pulse shadow-[0_0_8px_rgba(147,197,253,0.8)]"></div>
                        <span>ALL SYSTEMS OPERATIONAL</span>
                    </div>

                    <div className="flex items-center gap-8">
                        <Link href="#" className="hover:text-neutral-400">PRIVACY_POLICY</Link>
                        <Link href="#" className="hover:text-neutral-400">TERMS_OF_SERVICE</Link>
                        <span className="opacity-40">© 2026 ENVAEDHA AI</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
