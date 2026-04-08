"use client";

import { motion } from "framer-motion";
import TransitionLink from "@/components/ui/transition-link";

/* ── Custom SVGs ────────────────────────────────────────────── */
const ServiceSVG = ({ id }: { id: string }) => {
    switch (id) {
        case "S/001":
            return (
                <svg viewBox="0 0 120 120" fill="none" className="w-36 h-36">
                    <circle cx="60" cy="60" r="40" stroke="rgba(255,255,255,0.10)" strokeWidth="1" />
                    <circle cx="60" cy="60" r="25" stroke="rgba(255,255,255,0.18)" strokeWidth="1" />
                    <circle cx="60" cy="60" r="10" fill="rgba(255,255,255,0.5)" />
                    <line x1="60" y1="20" x2="60" y2="100" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                    <line x1="20" y1="60" x2="100" y2="60" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
                    <path d="M30 60 A30 30 0 0 1 90 60" stroke="rgba(99,179,237,0.55)" strokeWidth="1.5" fill="none" />
                </svg>
            );
        case "S/002":
            return (
                <svg viewBox="0 0 120 120" fill="none" className="w-36 h-36">
                    <rect x="10" y="10" width="100" height="100" rx="10" fill="white" />
                    <path d="M40 40 L55 35 V85 L40 80 Z" fill="black" opacity="0.8" />
                    <path d="M50 40 L65 35 V85 L50 80 Z" fill="black" opacity="0.6" />
                    <path d="M60 40 L75 35 V85 L60 80 Z" fill="black" opacity="0.4" />
                    <path d="M70 40 L85 35 V85 L70 80 Z" fill="black" opacity="0.2" />
                </svg>
            );
        case "S/003":
            return (
                <svg viewBox="0 0 120 120" fill="none" className="w-36 h-36">
                    <circle cx="38" cy="60" r="15" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                    <circle cx="82" cy="60" r="15" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                    <circle cx="38" cy="60" r="5" fill="rgba(255,255,255,0.5)" />
                    <circle cx="82" cy="60" r="5" fill="rgba(255,255,255,0.5)" />
                    <line x1="53" y1="60" x2="67" y2="60" stroke="rgba(99,179,237,0.8)" strokeWidth="2" />
                    <path d="M22 42 Q38 26 54 42" stroke="rgba(99,179,237,0.25)" strokeWidth="1" fill="none" />
                    <path d="M66 42 Q82 26 98 42" stroke="rgba(99,179,237,0.25)" strokeWidth="1" fill="none" />
                </svg>
            );
        case "S/004":
            return (
                <svg viewBox="0 0 120 120" fill="none" className="w-36 h-36">
                    <rect x="12" y="50" width="22" height="18" rx="3" stroke="rgba(255,255,255,0.30)" strokeWidth="1.5" />
                    <rect x="49" y="50" width="22" height="18" rx="3" stroke="rgba(255,255,255,0.30)" strokeWidth="1.5" />
                    <rect x="86" y="50" width="22" height="18" rx="3" stroke="rgba(99,179,237,0.65)" strokeWidth="1.5" />
                    <line x1="34" y1="59" x2="49" y2="59" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="3 2" />
                    <line x1="71" y1="59" x2="86" y2="59" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeDasharray="3 2" />
                    <circle cx="97" cy="51" r="4" fill="rgba(99,179,237,0.45)" />
                </svg>
            );
        case "S/005":
            return (
                <svg viewBox="0 0 120 120" fill="none" className="w-36 h-36">
                    <polyline points="18,92 44,54 64,70 96,28" stroke="rgba(99,179,237,0.6)" strokeWidth="2" fill="none" />
                    <circle cx="96" cy="28" r="5" fill="rgba(99,179,237,0.75)" />
                    <line x1="18" y1="100" x2="102" y2="100" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                    <line x1="18" y1="100" x2="18" y2="18" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                </svg>
            );
        default: return null;
    }
};

/* ── Service data with sub-capabilities ─────────────────────── */
const SERVICES = [
    {
        id: "S/001",
        title: "Advisory",
        desc: "Gain strategic clarity from fractional CTOs and domain experts who've shipped AI systems at scale.",
        href: "/ai-consulting-melbourne",
        bg: "#141414",
        subs: [
            "Fractional CTO Engagement",
            "AI Readiness Assessment",
            "Technical Architecture Review",
            "Roadmap & OKR Planning",
            "Vendor & Model Selection",
        ],
    },
    {
        id: "S/002",
        title: "Product Development",
        desc: "From zero to production. We build SaaS products, web apps, and mobile experiences that ship fast and scale reliably.",
        href: "/product-development",
        bg: "#1a1a1a",
        subs: [
            "MVP & Prototype Engineering",
            "Full-Stack Web Applications",
            "iOS & Android Development",
            "API Design & Integration",
            "Ongoing Maintenance & Support",
        ],
    },
    {
        id: "S/003",
        title: "Autonomous Agents",
        desc: "Self-operating systems that plan, reason, and execute — removing humans from the bottleneck loop.",
        href: "/ai-agents-melbourne",
        bg: "#202020",
        subs: [
            "Multi-Agent Orchestration",
            "LLM-Powered Decision Loops",
            "Tool Use & API Calling",
            "Memory & Context Management",
            "Guardrails & Safety Layers",
        ],
    },
    {
        id: "S/004",
        title: "Workflow Automation",
        desc: "Replace manual bottlenecks with intelligent pipelines. Every step auditable, every output reliable.",
        href: "/workflow-automation",
        bg: "#262626",
        subs: [
            "Process Mapping & Audit",
            "n8n / Make / Zapier Build-out",
            "Document Processing Pipelines",
            "CRM & ERP Integration",
            "Compliance & Audit Trails",
        ],
    },
    {
        id: "S/005",
        title: "Scaling & Support",
        desc: "Deploy, maintain, and scale your AI systems with cloud-native infrastructure built for growth.",
        href: "/scaling-support",
        bg: "#2c2c2c",
        subs: [
            "Cloud Infrastructure Setup",
            "CI/CD & DevOps Pipelines",
            "Model Monitoring & Drift Detection",
            "Cost Optimisation Reviews",
            "24/7 Engineering Support",
        ],
    },
];

const TAB_HEIGHT = 60;
const NAVBAR_OFFSET = 84;

export default function Services() {
    return (
        <section id="services" className="relative bg-[#141414]">
            {/* Section Header */}
            <div className="py-28 sm:py-40 border-b border-white/5">
                <div className="mx-auto max-w-7xl px-6 lg:px-16 text-center">
                    <p className="font-mono text-[10px] tracking-[0.45em] text-blue-400 uppercase mb-6 font-bold">
                        / SOLUTIONS_CATALOG
                    </p>
                    <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#ddeeff] leading-[1.05] max-w-4xl mx-auto">
                        Precision engineering<br />
                        for the autonomous era.
                    </h2>
                </div>
            </div>

            {/* Stacked Cards */}
            <div className="relative">
                {SERVICES.map((s, i) => {
                    const isLast = i === SERVICES.length - 1;
                    return (
                        <div
                            key={s.id}
                            className="sticky w-full"
                            style={{
                                backgroundColor: s.bg,
                                zIndex: i + 10,
                                top: `${NAVBAR_OFFSET + i * TAB_HEIGHT}px`,
                                borderTop: i > 0 ? "1px solid rgba(255,255,255,0.06)" : undefined,
                            }}
                        >
                            {/* ── Compact tab header (always visible when buried) ── */}
                            <div className="h-[60px] border-b border-white/[0.04]">
                                <div className="mx-auto max-w-7xl px-6 lg:px-16 h-full flex items-center">
                                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] w-full items-center">
                                        <div className="flex items-center gap-6">
                                            <span className="font-mono text-[10px] tracking-[0.3em] text-white/20 font-bold shrink-0">
                                                {s.id}
                                            </span>
                                            <span className="text-[20px] font-bold tracking-tight text-white/80 uppercase">
                                                {s.title}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ── Full card content ── */}
                            <div
                                className="mx-auto max-w-7xl px-6 lg:px-16"
                                style={{
                                    paddingTop: isLast ? "5rem" : "4rem",
                                    paddingBottom: isLast ? "8rem" : "4rem",
                                    minHeight: isLast ? "80vh" : "auto",
                                }}
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 items-start">

                                    {/* Left: Description + Sub-services */}
                                    <div className="flex flex-col pt-8">
                                        <p className="text-[#7a9fc0] text-base leading-relaxed mb-10 max-w-md">
                                            {s.desc}
                                        </p>

                                        {/* Sub-capabilities list */}
                                        <ul className="space-y-3 mb-12">
                                            {s.subs.map((sub, si) => (
                                                <motion.li
                                                    key={sub}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: si * 0.07, duration: 0.4 }}
                                                    className="flex items-center gap-3 text-sm text-white/55"
                                                >
                                                    <span className="w-1 h-1 rounded-full bg-blue-500/60 flex-shrink-0" />
                                                    {sub}
                                                </motion.li>
                                            ))}
                                        </ul>

                                        {/* CTA with transition */}
                                        <TransitionLink href={s.href}>
                                            <button className="group flex items-center gap-3 px-8 py-3.5 border border-white/15 rounded-full text-[11px] font-bold tracking-[0.18em] uppercase text-white/60 hover:text-white hover:border-white/35 transition-all duration-300 w-fit">
                                                Explore Service
                                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                                            </button>
                                        </TransitionLink>
                                    </div>

                                    {/* Right: SVG visual */}
                                    <div className="hidden lg:flex items-center justify-center w-full aspect-square bg-white/[0.015] rounded-xl border border-white/[0.05]">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.85 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            className="w-full h-full flex items-center justify-center"
                                        >
                                            <ServiceSVG id={s.id} />
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
