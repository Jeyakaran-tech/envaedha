"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

const STUDIES = [
    {
        id: "CS-001",
        industry: "Travel + tourism",
        hook: "AI that transforms guest experiences and drives bookings",
        desc: "Guests today expect instant, personalised service around the clock. Yet, many tourism businesses are caught in a cycle of manual processes, delayed responses and missed opportunities.",
        img: "/ai_travel_tourism_reception_1775202704290.png",
        link: "/case-studies/travel-automation",
    },
    {
        id: "CS-002",
        industry: "Retail + logistics",
        hook: "Intelligent supply chains that predict and fulfill",
        desc: "Manual inventory tracking is a bottleneck for scale. We implemented a neural tracking layer that reduced fulfillment errors by 90% while freeing up 40 hours of staff time per week.",
        img: "/ai_retail_commerce_warehouse_1775202761905.png",
        link: "/case-studies/retail-automation",
    },
    {
        id: "CS-003",
        industry: "Finance + Strategy",
        hook: "Data-driven insights for elite decision making",
        desc: "Moving beyond spreadsheets into real-time decision engines. Our custom models parse thousands of data points to deliver clear, actionable signals for Melbourne's leading firms.",
        img: "/ai_finance_strategy_office_1775202825411.png",
        link: "/case-studies/finance-intelligence",
    },
];

export default function CaseStudies() {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((c) => (c + 1) % STUDIES.length);
    const prev = () => setCurrent((c) => (c - 1 + STUDIES.length) % STUDIES.length);

    return (
        <section id="case-studies" className="py-24 sm:py-32" style={{ background: "#020d1a" }}>
            <div className="mx-auto max-w-7xl px-6 lg:px-12">

                {/* ── Main Slider ─────────────────────────────────── */}
                <div className="relative rounded-[40px] overflow-hidden aspect-[16/10] sm:aspect-[21/9] bg-[#04152b] border border-blue-900/20 group">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, scale: 1.05 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                            className="absolute inset-0"
                        >
                            <img
                                src={STUDIES[current].img}
                                alt={STUDIES[current].industry}
                                className="w-full h-full object-cover opacity-60"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                            {/* Content Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-8 sm:p-16 flex flex-col md:flex-row items-end justify-between gap-12">
                                <div className="max-w-xl">
                                    <h3 className="text-3xl sm:text-5xl font-bold text-white mb-8">
                                        {STUDIES[current].industry}
                                    </h3>

                                    <div className="space-y-6">
                                        <h4 className="text-xl sm:text-2xl font-bold text-[#e2eeff] leading-snug">
                                            {STUDIES[current].hook}
                                        </h4>
                                        <p className="text-[#cbd5e1] leading-relaxed max-w-lg mb-8">
                                            {STUDIES[current].desc}
                                        </p>
                                        <Link
                                            href={STUDIES[current].link}
                                            className="inline-flex items-center gap-3 text-blue-400 font-bold group/link hover:text-blue-300 transition-colors"
                                        >
                                            <FiArrowUpRight className="transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                                            <span className="border-b border-blue-400/30 group-hover/link:border-blue-300 pb-1">Learn more</span>
                                        </Link>
                                    </div>
                                </div>

                                {/* Controls (Mobile Hidden / Desktop Bottom Left in screen) */}
                                <div className="flex gap-4">
                                    <button
                                        onClick={prev}
                                        className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
                                    >
                                        <FiArrowLeft size={24} />
                                    </button>
                                    <button
                                        onClick={next}
                                        className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-500 transition-all border border-blue-400/20 shadow-lg shadow-blue-900/20"
                                    >
                                        <FiArrowRight size={24} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress Indicators */}
                <div className="mt-8 flex justify-center gap-3">
                    {STUDIES.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`h-1 transition-all duration-500 rounded-full ${i === current ? "w-12 bg-blue-500" : "w-4 bg-white/10 hover:bg-white/20"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
