"use client";

import { motion } from "framer-motion";
import { FiCpu, FiTrendingUp, FiLayers, FiShield } from "react-icons/fi";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const PILLARS = [
    {
        icon: <FiCpu className="text-blue-500" />,
        keyword: "TECH",
        title: "Enterprise Architecture",
        desc: "We don't buy apps; we build engines. Advanced neural systems tailored to your unique infrastructure.",
    },
    {
        icon: <FiLayers className="text-emerald-500" />,
        keyword: "AI",
        title: "Deterministic Agents",
        desc: "Autonomous workers that plan, reason, and execute. Reliability that exceeds human standard for routine cycles.",
    },
    {
        icon: <FiTrendingUp className="text-purple-500" />,
        keyword: "PRODUCTIVITY",
        title: "Operational Scale",
        desc: "Reclaiming hours from manual debt. We engineer workflows that allow small teams to output at 10x capacity.",
    },
    {
        icon: <FiShield className="text-blue-400" />,
        keyword: "SOLUTIONS",
        title: "Local Implementation",
        desc: "Melbourne-based engineering. Result-driven systems designed for the specific needs of the Victorian SMB ecosystem.",
    },
];

export default function SolutionsStrategy() {
    const revealRef = useScrollReveal();
    const imageRef = useScrollReveal();

    return (
        <section className="py-24 sm:py-36 relative overflow-hidden" style={{ background: "#020d1a" }}>
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "radial-gradient(#3b82f6 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

            <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">

                {/* ── Section Header ─────────────────────────────────── */}
                <div ref={revealRef} className="reveal max-w-3xl mb-24">
                    <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-[#e2eeff] leading-[1.1] mb-8">
                        The Operating System for the <span className="text-blue-500">Autonomous SMB.</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-[#94a3b8] leading-relaxed">
                        We move beyond "AI coaching" into hard-engineered autonomy. Our strategy bridges the gap between raw data and measurable business productivity.
                    </p>
                </div>

                {/* ── Creative Grid Layout ────────────────────────────── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-start">

                    {/* Left: Interactive Pillars */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
                        {PILLARS.map((p, i) => (
                            <motion.div
                                key={p.keyword}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-8 rounded-[32px] border border-white/5 bg-white/5 backdrop-blur-sm relative overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:bg-white/[0.08]"
                            >
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="flex items-center justify-between mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-black/40 flex items-center justify-center text-xl">
                                        {p.icon}
                                    </div>
                                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/30 group-hover:text-blue-400/60 transition-colors">
                                        {p.keyword}
                                    </span>
                                </div>

                                <h4 className="text-xl font-bold text-[#e2eeff] mb-3 group-hover:translate-x-1 transition-transform">
                                    {p.title}
                                </h4>
                                <p className="text-sm text-[#94a3b8] leading-relaxed group-hover:text-[#cbd5e1] transition-colors">
                                    {p.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Immersive Blueprint Visual */}
                    <div ref={imageRef} className="reveal relative">
                        <div className="relative aspect-[4/5] sm:aspect-square rounded-[48px] overflow-hidden border border-blue-900/30 shadow-2xl group">
                            <img
                                src="/ai_strategy_blueprint_consultant_1775201982950.png"
                                alt="Advanced AI Strategy Blueprint"
                                className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#020d1a] via-transparent to-transparent opacity-60" />

                            {/* Floating Tech Data Panel */}
                            <div className="absolute top-8 right-8 p-6 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-700">
                                <div className="flex items-center gap-2 mb-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                                    <span className="text-[8px] font-mono tracking-widest text-[#e2eeff] uppercase">System_Active</span>
                                </div>
                                <div className="space-y-2">
                                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full w-3/4 bg-blue-500" />
                                    </div>
                                    <p className="text-[10px] text-blue-300 font-mono">PRODUCTIVITY +82%</p>
                                </div>
                            </div>
                        </div>

                        {/* Subtle decorative elements */}
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 blur-[80px] rounded-full" />
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-500/10 blur-[60px] rounded-full" />
                    </div>

                </div>
            </div>
        </section>
    );
}
