"use client";

import { motion } from "framer-motion";
import Link from "next/link";

/* ── Custom Light SVGs for Dark Theme ──────────────────────── */
const ServiceSVG = ({ id }: { id: string }) => {
    switch (id) {
        case "S/001": // Advisory
            return (
                <svg viewBox="0 0 100 100" className="w-48 h-48 fill-white/80">
                    <path d="M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 48c-9.9 0-18-8.1-18-18s8.1-18 18-18 18 8.1 18 18-8.1 18-18 18z" />
                    <circle cx="50" cy="50" r="8" />
                </svg>
            );
        case "S/002": // Product Development
            return (
                <svg viewBox="0 0 100 100" className="w-48 h-48 fill-white/80">
                    <rect x="25" y="25" width="20" height="50" rx="2" />
                    <rect x="55" y="25" width="20" height="50" rx="2" />
                    <path d="M75 50l15-15v30l-15-15z" />
                </svg>
            );
        case "S/003": // Autonomous Agents
            return (
                <svg viewBox="0 0 100 100" className="w-48 h-48 fill-white/80">
                    <circle cx="35" cy="50" r="15" />
                    <circle cx="65" cy="50" r="15" />
                    <path d="M35 35c8.3 0 15 6.7 15 15s-6.7 15-15 15" fill="none" stroke="white" strokeOpacity="0.8" strokeWidth="8" />
                </svg>
            );
        case "S/004": // Workflow Automation
            return (
                <svg viewBox="0 0 100 100" className="w-48 h-48 fill-white/80">
                    <rect x="15" y="45" width="10" height="10" />
                    <rect x="35" y="45" width="10" height="10" />
                    <rect x="55" y="45" width="10" height="10" />
                    <rect x="75" y="45" width="10" height="10" />
                    <path d="M20 45v-10h50v10" fill="none" stroke="white" strokeOpacity="0.8" strokeWidth="4" />
                </svg>
            );
        case "S/005": // Scaling & Support
            return (
                <svg viewBox="0 0 100 100" className="w-48 h-48 fill-white/80">
                    <path d="M20 80l20-40h10l20 40H20z" />
                    <path d="M50 20l15 30H35l15-30z" />
                </svg>
            );
        default: return null;
    }
};

const SERVICES = [
    {
        id: "S/001",
        title: "Advisory",
        desc: "Gain strategic insights from our fractional CTOs, benefit from comprehensive technical reviews, and achieve accelerated development with expert backend, frontend, and DevOps solutions.",
        href: "/ai-consulting-melbourne",
        bgColor: "#020d1a",
    },
    {
        id: "S/002",
        title: "Product Development",
        desc: "Bring market-ready products to life with our product development services. Prototypes & MVPs, SaaS, web, and mobile applications, managed services from planning and design to coding, testing, and ongoing maintenance.",
        href: "/ai-agents-melbourne",
        bgColor: "#04152b",
    },
    {
        id: "S/003",
        title: "Autonomous Agents",
        desc: "Bring market-ready autonomous agents to life. We build self-learning assistants that plan, reason, and execute complex multi-step workflows across your software stack.",
        href: "/ai-agents-melbourne",
        bgColor: "#020d1a",
    },
    {
        id: "S/004",
        title: "Workflow Automation",
        desc: "Automate manual bottlenecks with rigid security layers and guardrails. We ensure your AI systems are safe, reliable, and compliant with business regulations.",
        href: "/workflow-automation",
        bgColor: "#04152b",
    },
    {
        id: "S/005",
        title: "Scaling & Support",
        desc: "Deploy and manage your AI systems in the cloud. We ensure your systems stay fast, reliable, and cost-effective as your company scales globally.",
        href: "/schedule-a-meeting",
        bgColor: "#020d1a",
    },
];

export default function Services() {
    return (
        <section id="services" className="relative bg-[#020d1a] border-t border-white/5">
            {/* Introductory Header */}
            <div className="bg-[#020d1a] py-32 sm:py-48 border-b border-white/5">
                <div className="mx-auto max-w-7xl px-6 lg:px-12 text-center">
                    <p className="font-mono text-[10px] tracking-[0.4em] text-blue-500 uppercase mb-8 font-bold">
                        / SOLUTIONS_CATALOG
                    </p>
                    <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#e2eeff] leading-[1.05] max-w-4xl mx-auto">
                        Precision engineering <br />
                        for the autonomous era.
                    </h2>
                </div>
            </div>

            {/* Stacked Services Container */}
            {/* This div's height controls how long the stack stays 'frozen' after the last card docks */}
            <div className="relative" style={{ height: `${SERVICES.length * 90 + 100}vh` }}>
                {SERVICES.map((s, i) => (
                    <div
                        key={s.id}
                        className="sticky w-full flex flex-col border-t border-dashed border-white/10 shadow-[0_-80px_100px_rgba(0,0,0,0.8)]"
                        style={{
                            backgroundColor: s.bgColor,
                            zIndex: i + 10,
                            // Increased offset to 160px for maximum title visibility
                            top: `${(i * 144) + 16}px`,
                            paddingTop: '2rem',
                            paddingBottom: '4rem',
                            minHeight: '80vh',
                            height: 'auto'
                        }}
                    >
                        <div className="mx-auto max-w-7xl w-full px-6 lg:px-12 flex flex-col relative text-white h-full pt-6">
                            {/* Service ID (Top Left) */}
                            <div className="absolute top-0 left-6 lg:left-12 font-mono text-[10px] tracking-[0.2em] text-white/30 font-bold uppercase">
                                {s.id}
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-center h-full">
                                {/* Centered Content Stack */}
                                <div className="flex flex-col items-center text-center w-full">
                                    <h3 className="text-3xl sm:text-5xl font-bold text-[#e2eeff] mb-12 tracking-tight">
                                        {s.title}
                                    </h3>

                                    <div className="max-w-sm mx-auto flex flex-col items-center">
                                        <p className="text-[#94a3b8] text-sm sm:text-base leading-relaxed mb-12 text-center">
                                            {s.desc}
                                        </p>

                                        <Link href={s.href}>
                                            <button className="px-12 py-3.5 border border-white/20 rounded-md text-[10px] font-bold tracking-[0.15em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300">
                                                SEE OUR SERVICES &nbsp; →
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                                {/* Minimalist SVG Graphic (Right Side) */}
                                <div className="hidden lg:flex w-full aspect-square bg-white/[0.01] rounded-sm flex items-center justify-center p-12 border border-white/5 group">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 1 }}
                                        className="w-full h-full flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity"
                                    >
                                        <ServiceSVG id={s.id} />
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Visual Spacer to let the user see the full stack complete and hold */}
            <div className="h-[20vh] bg-[#020d1a]" />
        </section>
    );
}
