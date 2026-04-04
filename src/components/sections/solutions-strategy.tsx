"use client";

import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const PILLARS = [
    {
        num: "01",
        title: "Enterprise Architecture",
        desc: "We don't buy apps; we build engines. Advanced neural systems tailored to your unique infrastructure and data.",
    },
    {
        num: "02",
        title: "Deterministic Agents",
        desc: "Autonomous workers that plan, reason, and execute. Reliability that exceeds human standard for routine cycles.",
    },
    {
        num: "03",
        title: "Operational Scale",
        desc: "Reclaiming hours from manual debt. We engineer workflows that allow small teams to output at 10× capacity.",
    },
    {
        num: "04",
        title: "Local Implementation",
        desc: "Melbourne-based engineering. Result-driven systems designed for the specific needs of the Victorian SMB ecosystem.",
    },
];

export default function SolutionsStrategy() {
    const revealRef = useScrollReveal();
    const imageRef = useScrollReveal();

    return (
        <section className="py-24 sm:py-36 relative overflow-hidden bg-[#0c0c0c]">
            <div className="absolute top-0 inset-x-0 h-px bg-white/5" />

            <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">

                {/* Section Header */}
                <div ref={revealRef} className="reveal max-w-3xl mb-20">
                    <p className="font-mono text-[10px] tracking-[0.45em] text-white/25 uppercase mb-6 font-bold">
                        / OUR APPROACH
                    </p>
                    <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6">
                        The operating system<br />
                        <span className="text-white/40">for the autonomous SMB.</span>
                    </h2>
                    <p className="text-lg text-white/35 leading-relaxed max-w-xl">
                        We move beyond "AI coaching" into hard-engineered autonomy. Our strategy bridges the gap between raw data and measurable business productivity.
                    </p>
                </div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-start">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/[0.05] border border-white/[0.05] rounded-2xl overflow-hidden">
                        {PILLARS.map((p, i) => (
                            <motion.div
                                key={p.num}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.08 }}
                                className="group p-8 bg-[#0c0c0c] hover:bg-[#161616] transition-colors duration-300"
                            >
                                <span className="font-mono text-[10px] tracking-[0.2em] text-white/20 block mb-6">
                                    {p.num}
                                </span>
                                <h4 className="text-lg font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                                    {p.title}
                                </h4>
                                <p className="text-sm text-white/35 leading-relaxed group-hover:text-white/50 transition-colors">
                                    {p.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Blueprint image */}
                    <div ref={imageRef} className="reveal relative">
                        <div className="relative aspect-[4/5] sm:aspect-square rounded-2xl overflow-hidden border border-white/[0.06] group">
                            <img
                                src="/ai_strategy_blueprint_consultant_1775201982950.png"
                                alt="AI Strategy Blueprint"
                                className="w-full h-full object-cover opacity-50 transition-all duration-[2000ms] group-hover:opacity-65 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                            {/* Minimal overlay stat */}
                            <div className="absolute bottom-8 left-8">
                                <p className="font-mono text-[9px] tracking-[0.3em] text-white/30 mb-1">PRODUCTIVITY</p>
                                <p className="text-2xl font-bold text-white">+82%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
