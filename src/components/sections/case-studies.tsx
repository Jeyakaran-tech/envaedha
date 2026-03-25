"use client";

/**
 * CASE STUDIES
 * Design: "Deployment log" aesthetic. Each case study looks like a CLI
 * execution record — client sector, problem, and a giant glowing result metric.
 * Clicking a study expands it to reveal the technical approach.
 */

import { useState } from "react";

const studies = [
    {
        id: "CS-001",
        sector: "FINTECH",
        client: "Global Trading Platform",
        challenge: "Analysts spending 6+ hours/day reading unstructured market reports. Needed instant, reliable extraction of structured signals.",
        result: "94%",
        resultLabel: "extraction accuracy",
        delta: "↓ 6hrs → 18min per analyst per day",
        stack: ["GPT-4 Fine-tune", "LangGraph", "Pinecone", "FastAPI"],
        approach: "Built a multi-step RAG pipeline with custom entity extraction fine-tuned on 2.4M financial documents. Integrated with Bloomberg terminals via a streaming API. Deployed on AWS with auto-scaling inference.",
        duration: "11 weeks",
    },
    {
        id: "CS-002",
        sector: "HEALTHCARE",
        client: "MedTech Diagnostics Scale-up",
        challenge: "Clinical notes written in free text by 300+ doctors. Needed ICD-10 coding automation with zero tolerance for hallucination.",
        result: "4.2×",
        resultLabel: "coding throughput",
        delta: "↓ 0 hallucinated codes across 50k records",
        stack: ["Llama 3 Fine-tune", "Constitutional AI", "FHIR API", "Kubernetes"],
        approach: "Fine-tuned Llama 3 on a curated dataset of 180k verified clinical note → ICD-10 pairs. Red-teamed the model with adversarial prompts and implemented a constitutional guard layer that verified every code against official WHO ontologies.",
        duration: "14 weeks",
    },
    {
        id: "CS-003",
        sector: "LEGAL",
        client: "Top-5 US Law Firm",
        challenge: "500-page contract reviews taking paralegal teams 3 days per deal. M&A velocity was bottlenecked by legal due diligence.",
        result: "$2.4M",
        resultLabel: "saved per quarter",
        delta: "↓ 3 days → 4 hours per deal",
        stack: ["Claude 3 Opus", "Semantic Search", "React", "Weaviate"],
        approach: "Deployed a RAG system over a 2M-document corpus using Weaviate with hybrid BM25 + dense retrieval. Built a custom re-ranking layer trained on firm-specific precedents. Integrated directly into their existing document management workflow.",
        duration: "9 weeks",
    },
];

export default function CaseStudies() {
    const [expanded, setExpanded] = useState<string | null>(null);

    return (
        <section className="py-28 sm:py-36 relative" style={{ background: "#010c18" }}>
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(59,130,246,0.12), transparent)" }} />

            <div className="mx-auto max-w-7xl px-6 lg:px-12">

                {/* Header */}
                <div className="mb-20">
                    <p className="font-mono text-[11px] tracking-[0.25em] mb-5" style={{ color: "#3b82f6" }}>
                        // DEPLOYMENT_LOGS
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: "#e2eeff" }}>
                            AI that ships to production.<br />
                            <span style={{ color: "#3b82f6" }}>Results that compound.</span>
                        </h2>
                        <p className="text-sm font-sans max-w-xs leading-relaxed" style={{ color: "#334155" }}>
                            Every engagement below went from problem statement to live production system.
                        </p>
                    </div>
                </div>

                {/* Studies */}
                <div className="flex flex-col gap-4">
                    {studies.map((s) => {
                        const isOpen = expanded === s.id;
                        return (
                            <div
                                key={s.id}
                                className="rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
                                style={{
                                    background: isOpen ? "#04152b" : "#020d1a",
                                    border: `1px solid ${isOpen ? "rgba(59,130,246,0.25)" : "rgba(59,130,246,0.08)"}`,
                                }}
                                onClick={() => setExpanded(isOpen ? null : s.id)}
                            >
                                {/* Top row — always visible */}
                                <div className="flex flex-col lg:flex-row lg:items-center gap-6 p-6 lg:p-8">

                                    {/* Meta */}
                                    <div className="flex items-center gap-4 shrink-0">
                                        <span className="font-mono text-[12px] tracking-widest" style={{ color: "#475569" }}>{s.id}</span>
                                        <span
                                            className="font-mono text-[11px] tracking-[0.15em] px-2.5 py-1 rounded-full"
                                            style={{ background: "rgba(59,130,246,0.08)", color: "#93c5fd", border: "1px solid rgba(59,130,246,0.15)" }}
                                        >
                                            {s.sector}
                                        </span>
                                    </div>

                                    {/* Client + challenge */}
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold mb-1 truncate text-lg" style={{ color: "#c7dff7" }}>{s.client}</p>
                                        <p className="text-base font-sans line-clamp-1" style={{ color: "#94a3b8" }}>{s.challenge}</p>
                                    </div>

                                    {/* Big result metric */}
                                    <div className="shrink-0 text-right">
                                        <div
                                            className="text-4xl font-bold font-mono"
                                            style={{ color: "#93c5fd", filter: "drop-shadow(0 0 16px rgba(147,197,253,0.35))" }}
                                        >
                                            {s.result}
                                        </div>
                                        <div className="font-mono text-[10px] tracking-widest mt-1" style={{ color: "#334155" }}>{s.resultLabel}</div>
                                    </div>

                                    {/* Duration */}
                                    <div className="shrink-0 font-mono text-[11px] text-right" style={{ color: "#1e4a7a" }}>
                                        {s.duration}
                                        <div className="mt-1" style={{ color: isOpen ? "#3b82f6" : "#1e3a5f" }}>
                                            {isOpen ? "▲ collapse" : "▼ view log"}
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded content */}
                                {isOpen && (
                                    <div
                                        className="border-t px-6 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-2 gap-8"
                                        style={{ borderColor: "rgba(59,130,246,0.1)" }}
                                    >
                                        {/* Approach */}
                                        <div>
                                            <p className="font-mono text-[12px] tracking-widest mb-3" style={{ color: "#3b82f6" }}>TECHNICAL_APPROACH</p>
                                            <p className="text-base font-sans leading-relaxed" style={{ color: "#cbd5e1" }}>{s.approach}</p>
                                        </div>

                                        {/* Result + stack */}
                                        <div className="flex flex-col gap-6">
                                            {/* Delta stat */}
                                            <div
                                                className="rounded-xl px-5 py-4"
                                                style={{ background: "rgba(59,130,246,0.05)", border: "1px solid rgba(59,130,246,0.1)" }}
                                            >
                                                <p className="font-mono text-[10px] tracking-widest mb-1" style={{ color: "#1e4a7a" }}>KEY_RESULT</p>
                                                <p className="font-mono text-sm" style={{ color: "#93c5fd" }}>{s.delta}</p>
                                            </div>

                                            {/* Stack */}
                                            <div>
                                                <p className="font-mono text-[10px] tracking-widest mb-3" style={{ color: "#1e4a7a" }}>TECH_STACK</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {s.stack.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="font-mono text-[13px] px-3 py-1.5 rounded-lg"
                                                            style={{ background: "rgba(30,74,122,0.3)", color: "#94a3b8", border: "1px solid rgba(59,130,246,0.1)" }}
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
