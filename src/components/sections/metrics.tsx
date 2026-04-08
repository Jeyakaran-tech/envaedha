"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TABS = [
    {
        id: "expertise",
        label: "EXPERTISE",
        heading: "Expertise",
        number: "1",
        rows: [
            {
                num: "01",
                keyword: "AUTONOMOUS SYSTEMS",
                desc: "We build AI agents that plan, execute, and iterate autonomously — eliminating human bottlenecks from your critical workflows.",
            },
            {
                num: "02",
                keyword: "PRECISION ENGINEERING",
                desc: "Every system is purpose-built from the ground up. We don't deploy templates or off-the-shelf solutions.",
            },
            {
                num: "03",
                keyword: "LOCAL INTELLIGENCE",
                desc: "Melbourne-based engineering team. We understand Victorian business operations, tools, and compliance needs intimately.",
            },
        ],
    },
    {
        id: "values",
        label: "VALUES",
        heading: "Values",
        number: "2",
        rows: [
            {
                num: "01",
                keyword: "RESULT-FIRST",
                desc: "We measure success by the time and money saved, not lines of code written. Every engagement has a clear, measurable outcome.",
            },
            {
                num: "02",
                keyword: "TRANSPARENT",
                desc: "Clear communication at every stage. No black boxes, no surprise invoices, no jargon used to obscure progress.",
            },
            {
                num: "03",
                keyword: "ACCOUNTABLE",
                desc: "We own the outcome. If a system we build doesn't perform as specified, we fix it — no questions asked.",
            },
        ],
    },
    {
        id: "methodology",
        label: "METHODOLOGY",
        heading: "Methodology",
        number: "3",
        rows: [
            {
                num: "01",
                keyword: "DISCOVER",
                desc: "Deep-dive into your operations. We map every manual bottleneck, data gap, and integration point before writing a single line of code.",
            },
            {
                num: "02",
                keyword: "ENGINEER",
                desc: "Build custom AI pipelines, agents, and integrations from the ground up — tailored to your exact stack and team workflows.",
            },
            {
                num: "03",
                keyword: "DEPLOY",
                desc: "Ship to production with full observability, SLA-backed support, and iteration loops that improve the system over time.",
            },
        ],
    },
];

export default function Metrics() {
    const [active, setActive] = useState(0);
    const tab = TABS[active];

    return (
        <section id="why-us" className="bg-[#0c0c0c] border-t border-white/10">
            {/* Section Header */}
            <div className="px-6 lg:px-16 py-16 border-b border-white/10">
                <div className="mx-auto max-w-7xl">
                    <div className="flex flex-col gap-6">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-white/30 uppercase">
                            / OUR VALUES
                        </span>
                        {/* <h2 className="text-5xl sm:text-7xl font-bold tracking-tight text-white">
                            The way we work:
                        </h2> */}
                    </div>
                </div>
            </div>

            {/* Tab bar */}
            <div className="border-b border-white/10 px-6 lg:px-16 bg-[#141414]">
                <div className="mx-auto max-w-7xl flex items-center gap-2 py-4">
                    {TABS.map((t, i) => (
                        <button
                            key={t.id}
                            onClick={() => setActive(i)}
                            className={`px-4 py-1.5 rounded text-[11px] font-bold tracking-[0.15em] border transition-all duration-200 ${active === i
                                    ? "bg-white text-black border-white"
                                    : "bg-transparent text-white border-white/25 hover:border-white/50"
                                }`}
                        >
                            {t.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <div className="relative mx-auto max-w-7xl px-6 lg:px-16 py-20 sm:py-28 overflow-hidden min-h-[520px]">

                {/* Slash "/" marker */}
                <span className="absolute top-20 left-6 lg:left-16 text-white/30 text-2xl font-light select-none">
                    /
                </span>

                {/* Large background number */}
                <span className="absolute bottom-0 left-2 lg:left-10 text-[20vw] font-black text-white/[0.04] leading-none select-none pointer-events-none">
                    {tab.number}
                </span>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={tab.id}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative z-10"
                    >
                        {/* Big heading */}
                        <h2 className="text-5xl sm:text-7xl font-bold text-white tracking-tight mb-16 pl-10 lg:pl-16">
                            {tab.heading}
                        </h2>

                        {/* Numbered rows */}
                        <div className="border-t border-dashed border-white/15">
                            {tab.rows.map((row) => (
                                <div
                                    key={row.num}
                                    className="flex flex-col sm:grid sm:grid-cols-[80px_220px_1fr] py-8 border-b border-dashed border-white/15 gap-4 sm:gap-6 group transition-colors px-2"
                                >
                                    <div className="flex items-center gap-3 sm:block">
                                        <span className="font-mono text-[10px] sm:text-[11px] text-white/20 sm:text-white/30 pt-0.5">
                                            {row.num}
                                        </span>
                                        <span className="sm:hidden text-[10px] tracking-[0.2em] font-bold text-white/25 uppercase">
                                            / {tab.label}
                                        </span>
                                    </div>
                                    <span className="font-bold text-[15px] sm:text-[13px] tracking-[0.12em] text-white uppercase sm:normal-case">
                                        {row.keyword}
                                    </span>
                                    <p className="text-[14px] sm:text-sm text-white/50 sm:text-white/55 leading-relaxed max-w-md">
                                        {row.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}
