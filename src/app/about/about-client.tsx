"use client";

import React, { useRef } from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const STATS = [
    { value: "50+", label: "SMBs Transformed" },
    { value: "3×", label: "Average Productivity Gain" },
    { value: "98%", label: "Client Retention Rate" },
    { value: "24/7", label: "AI System Uptime SLA" },
];

const VALUES = [
    {
        num: "01",
        title: "Outcome First",
        desc: "We measure success in business impact — not lines of code or hours billed. Every AI solution we build is designed to move a metric that matters.",
    },
    {
        num: "02",
        title: "Radical Transparency",
        desc: "No black boxes. We explain every model decision, every architectural choice, and every tradeoff. You always know what's running inside your systems.",
    },
    {
        num: "03",
        title: "Built for SMBs",
        desc: "Enterprise-grade AI shouldn't be reserved for large enterprises. We build production-ready systems that fit SMB budgets, timelines, and team sizes.",
    },
    {
        num: "04",
        title: "Long-term Partnership",
        desc: "We don't disappear after launch. We monitor, tune, and evolve your AI systems as your business scales — acting as an embedded engineering partner.",
    },
];

const TEAM = [
    {
        initials: "JK",
        name: "Jeyakaran Karnan",
        role: "Founder & AI Engineer",
        focus: "Agentic Systems · LLM Architecture",
    },
    {
        initials: "EV",
        name: "Engineering Team",
        role: "Full-Stack & ML Engineers",
        focus: "Product · Automation · Infrastructure",
    },
];

export default function AboutPageClient() {
    return (
        <div className="flex min-h-screen flex-col bg-[#0c0c0c] text-white">
            <Navbar />

            <main className="flex-1 pt-32">

                {/* ── Hero ──────────────────────────────────────── */}
                <section className="mx-auto max-w-7xl px-6 lg:px-16 pb-32">
                    <p className="font-mono text-[10px] tracking-[0.45em] text-blue-500 uppercase mb-10 font-bold">
                        / ABOUT_US
                    </p>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.02] max-w-5xl mb-12">
                        The AI engineering team<br />
                        <span className="text-white/30">built for the next era.</span>
                    </h1>
                    <p className="text-white/40 text-xl leading-relaxed max-w-2xl">
                        Envaedha is a Melbourne-based AI engineering firm dedicated to helping small and medium businesses compete with the tools that were once reserved for Fortune 500s.
                    </p>
                </section>

                {/* ── Stats ─────────────────────────────────────── */}
                <section className="border-y border-white/5 bg-[#0f0f0f]">
                    <div className="mx-auto max-w-7xl px-6 lg:px-16">
                        <div className="grid grid-cols-2 lg:grid-cols-4">
                            {STATS.map((s, i) => (
                                <div key={i} className="py-14 px-8 border-r border-white/5 last:border-r-0">
                                    <div className="text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">{s.value}</div>
                                    <div className="text-white/30 text-sm font-mono uppercase tracking-widest">{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Mission ───────────────────────────────────── */}
                <section className="mx-auto max-w-7xl px-6 lg:px-16 py-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div>
                            <p className="font-mono text-[10px] tracking-[0.45em] text-blue-500 uppercase mb-8 font-bold">
                                / OUR_MISSION
                            </p>
                            <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight mb-8 leading-[1.05]">
                                AI that works for<br />your business — not against it.
                            </h2>
                            <p className="text-white/40 text-lg leading-relaxed mb-6">
                                The AI revolution is moving fast. SMBs risk being left behind — not because they lack ambition, but because they lack a technical partner who understands both the technology and the business context.
                            </p>
                            <p className="text-white/40 text-lg leading-relaxed">
                                That&apos;s the gap we fill. We sit at the intersection of deep AI engineering and real-world business operations, translating complexity into competitive advantage.
                            </p>
                        </div>

                        {/* Visual */}
                        <div className="relative h-[420px] bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden flex items-center justify-center">
                            <svg viewBox="0 0 400 300" fill="none" className="w-full max-w-sm opacity-60">
                                {/* Neural network nodes */}
                                {[
                                    [60, 150], [160, 80], [160, 150], [160, 220],
                                    [260, 100], [260, 200], [340, 150]
                                ].map(([cx, cy], i) => (
                                    <circle key={i} cx={cx} cy={cy} r="10" stroke="rgba(99,179,237,0.5)" strokeWidth="1.5" fill="rgba(99,179,237,0.05)" />
                                ))}
                                {/* Connections */}
                                {[
                                    [60,150,160,80],[60,150,160,150],[60,150,160,220],
                                    [160,80,260,100],[160,80,260,200],
                                    [160,150,260,100],[160,150,260,200],
                                    [160,220,260,100],[160,220,260,200],
                                    [260,100,340,150],[260,200,340,150],
                                ].map(([x1,y1,x2,y2], i) => (
                                    <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(99,179,237,0.12)" strokeWidth="1" />
                                ))}
                            </svg>
                            {/* Labels */}
                            <div className="absolute bottom-6 left-6 right-6 flex justify-between">
                                <span className="font-mono text-[9px] text-blue-500/50 uppercase tracking-widest">Input Layer</span>
                                <span className="font-mono text-[9px] text-blue-500/50 uppercase tracking-widest">Hidden</span>
                                <span className="font-mono text-[9px] text-blue-500/50 uppercase tracking-widest">Output</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Values ────────────────────────────────────── */}
                <section className="bg-[#0f0f0f] border-t border-white/5 py-32">
                    <div className="mx-auto max-w-7xl px-6 lg:px-16">
                        <p className="font-mono text-[10px] tracking-[0.45em] text-blue-500 uppercase mb-16 font-bold">
                            / OUR_VALUES
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/5">
                            {VALUES.map((v) => (
                                <div key={v.num} className="bg-[#0f0f0f] p-10 lg:p-14 hover:bg-white/[0.02] transition-colors group">
                                    <span className="font-mono text-[10px] text-white/15 block mb-6">{v.num}</span>
                                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{v.title}</h3>
                                    <p className="text-white/40 leading-relaxed">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Team ──────────────────────────────────────── */}
                <section className="mx-auto max-w-7xl px-6 lg:px-16 py-32">
                    <p className="font-mono text-[10px] tracking-[0.45em] text-blue-500 uppercase mb-16 font-bold">
                        / THE_TEAM
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
                        {TEAM.map((member, i) => (
                            <div key={i} className="bg-white/[0.03] border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6">
                                    <span className="font-mono font-bold text-blue-400 text-sm">{member.initials}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                                <p className="text-blue-400 text-sm font-mono mb-3">{member.role}</p>
                                <p className="text-white/30 text-xs font-mono uppercase tracking-widest">{member.focus}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* ── CTA ───────────────────────────────────────── */}
                <section className="mx-auto max-w-7xl px-6 lg:px-16 pb-32">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 border-t border-white/5 pt-20">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight max-w-xl">
                            Ready to put AI to work<br />in your business?
                        </h2>
                        <Link href="/contact" className="shrink-0 inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-sm hover:scale-105 transition-all">
                            Book a Free Consultation <FiArrowRight />
                        </Link>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
