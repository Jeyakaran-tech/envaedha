"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

/**
 * WHY ENVAEDHA
 * Reframed: not fake metrics, not fabricated testimonials.
 * Instead: a set of clear, honest engineering principles and differentiators
 * that a new deep-tech AI firm can credibly stand behind.
 */

const PRINCIPLES = [
    {
        id: "01",
        title: "We don't sell tools. We own outcomes.",
        body: "Most AI vendors offer APIs and dashboards. We build the full intelligence layer — fine-tuning, pipelines, evaluation, deployment — and stay accountable to the result, not the deliverable.",
    },
    {
        id: "02",
        title: "Engineering-first, not prompt-wrapper.",
        body: "We go beneath the surface of foundation models. Our team works at the level of fine-tuning, RLHF, retrieval architecture, and inference infrastructure — not just prompt templates.",
    },
    {
        id: "03",
        title: "Speed without sacrificing reliability.",
        body: "We move fast because we have strong opinions about architecture developed through research and hands-on experimentation. We don't reinvent the wheel — we know which wheel to use.",
    },
    {
        id: "04",
        title: "We read the papers. We write the code.",
        body: "EnVaedha sits at the intersection of applied AI research and production engineering. When a new technique ships on arXiv, we evaluate it against real workloads within days — not quarters.",
    },
];

const DIFFERENTIATORS = [
    { label: "Every system we design is production-grade from day one", icon: "⬡" },
    { label: "Deep expertise in LLMs, agents, RAG, and inference infra", icon: "⬡" },
    { label: "Full-stack capability — from models to user interfaces", icon: "⬡" },
    { label: "Built-in evaluation: we benchmark before we ship", icon: "⬡" },
    { label: "Transparent on what AI can and can't do for your use case", icon: "⬡" },
];

const SECTORS = [
    "Financial Services",
    "Healthcare & MedTech",
    "Legal & Compliance",
    "Retail & E-Commerce",
    "Enterprise SaaS",
    "Manufacturing & IoT",
];

export default function Metrics() {
    const headerRef = useScrollReveal({ threshold: 0.1 });
    const principlesRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
    const bottomRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

    return (
        <section className="py-28 sm:py-36 relative overflow-hidden" style={{ background: "#020d1a" }}>
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(59,130,246,0.12), transparent)" }} />

            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(59,130,246,0.04), transparent 70%)" }} />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">

                {/* Header */}
                <div ref={headerRef} className="reveal mb-20 text-center">
                    <p className="font-mono text-[20px] tracking-[0.25em] mb-12" style={{ color: "#3b82f6" }}>// WHY_ENVAEDHA</p>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-[1.1]" style={{ color: "#e2eeff" }}>
                        The gap between AI demos<br />and production systems is where we live.
                    </h2>
                </div>

                {/* Principles Grid */}
                <div ref={principlesRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {PRINCIPLES.map((p) => (
                        <div
                            key={p.id}
                            className="p-8 rounded-2xl flex flex-col gap-4 group hover:border-blue-500/20 transition-all"
                            style={{ background: "#04152b", border: "1px solid rgba(59,130,246,0.08)" }}
                        >
                            <div className="flex items-start gap-4">
                                <span className="font-mono text-[11px] tracking-[0.2em] mt-1 shrink-0" style={{ color: "#1e4a7a" }}>{p.id}</span>
                                <h3 className="text-xl font-bold tracking-tight leading-snug" style={{ color: "#c7dff7" }}>{p.title}</h3>
                            </div>
                            <p className="text-base font-sans leading-relaxed pl-8" style={{ color: "#94a3b8" }}>{p.body}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom Row: Differentiators + Sectors */}
                <div ref={bottomRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* What we bring */}
                    <div
                        className="p-8 rounded-2xl"
                        style={{ background: "#04152b", border: "1px solid rgba(59,130,246,0.08)" }}
                    >
                        <p className="font-mono text-[11px] tracking-[0.2em] mb-6" style={{ color: "#3b82f6" }}>WHAT_WE_BRING</p>
                        <div className="flex flex-col gap-4">
                            {DIFFERENTIATORS.map((d, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <span className="text-[8px] shrink-0" style={{ color: "#1e4a7a" }}>⬡</span>
                                    <span className="text-base font-sans" style={{ color: "#cbd5e1" }}>{d.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Sectors we're focused on */}
                    <div className="flex flex-col gap-4">
                        <div
                            className="p-8 rounded-2xl"
                            style={{ background: "#04152b", border: "1px solid rgba(59,130,246,0.08)" }}
                        >
                            <p className="font-mono text-[11px] tracking-[0.2em] mb-6" style={{ color: "#3b82f6" }}>SECTORS_WE_FOCUS_ON</p>
                            <div className="flex flex-col gap-3">
                                {SECTORS.map((c, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div
                                            className="w-1.5 h-1.5 rounded-full shrink-0"
                                            style={{ background: "rgba(59,130,246,0.4)" }}
                                        />
                                        <span className="font-mono text-sm" style={{ color: "#94a3b8" }}>{c}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Honest positioning */}
                        <div
                            className="flex-1 p-8 rounded-2xl flex flex-col justify-center"
                            style={{ background: "rgba(59,130,246,0.04)", border: "1px solid rgba(59,130,246,0.12)" }}
                        >
                            <p className="font-mono text-[11px] tracking-[0.2em] mb-4" style={{ color: "#3b82f6" }}>OUR_POSITIONING</p>
                            <p className="text-lg font-sans leading-relaxed" style={{ color: "#cbd5e1" }}>
                                We're a small, focused team that cares deeply about doing the work right. We take fewer projects so we can go deeper on each one.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
