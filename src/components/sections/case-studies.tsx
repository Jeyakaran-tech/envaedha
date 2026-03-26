"use client";

/**
 * CASE STUDIES
 * Reframed as "Problems We're Built to Solve" — generic, credible archetypes
 * across industries that AI + full-stack development can genuinely address.
 * Expandable cards with a technical approach, potential outcome, and stack.
 */

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const studies = [
    {
        id: "CS-001",
        sector: "SMB / SMALL BUSINESS",
        problem: "Operational Scaling for SMBs",
        challenge: "Small businesses often hit a growth ceiling where manual operations—from lead qualification to customer follow-ups—block expansion and erode profit margins.",
        potentialResult: "2.5×",
        resultLabel: "increase in operational capacity",
        delta: "100% lead follow-up rate with 0% extra staff time",
        stack: ["Agentic Workflows", "LangGraph", "CRM Integration", "Twilio API"],
        approach: "We deploy intelligent agents that handle repetitive high-touch tasks: qualifying inbound leads, scheduling meetings, and performing personalized follow-ups. By automating the middle-office, SMBs can 3x their throughput without increasing headcount, directly boosting net profitability.",
        type: "Agentic Automation",
    },
    {
        id: "CS-002",
        sector: "FINTECH",
        problem: "Unstructured Market Intelligence",
        challenge: "Analysts spending 6+ hours/day manually parsing hundreds of unstructured market reports, earnings calls, and news feeds — missing signals that move portfolios.",
        potentialResult: "~90%",
        resultLabel: "reduction in manual review time",
        delta: "6hrs → under 20min per analyst per day",
        stack: ["LLM Fine-Tuning", "LangGraph", "Vector DB", "FastAPI", "Next.js"],
        approach: "We design multi-step RAG pipelines with custom entity extraction fine-tuned on financial corpora. A streaming API surfaces structured signals (sentiment, risk flags, entity changes) directly into trader dashboards in near real-time. The stack scales horizontally on cloud inference infrastructure.",
        type: "AI + Full Stack",
    },
    {
        id: "CS-003",
        sector: "HEALTHCARE",
        problem: "Clinical Documentation Automation",
        challenge: "Clinical teams produce thousands of free-text notes daily. Manual ICD coding is slow, error-prone, and pulls doctors away from patient care.",
        potentialResult: "4–5×",
        resultLabel: "throughput improvement",
        delta: "Zero hallucinated codes with constitutional guard layers",
        stack: ["Fine-Tuned LLM", "Constitutional AI", "FHIR Integration", "Kubernetes"],
        approach: "We fine-tune an open-source language model on verified clinical note → ICD-10 pairs, then layer on a constitutional guard that cross-references every output against WHO ontologies before writing to the EHR. Red-teaming is built into the evaluation pipeline from day one.",
        type: "AI + Compliance",
    },
    {
        id: "CS-004",
        sector: "LEGAL",
        problem: "Contract Review & Due Diligence",
        challenge: "Legal and M&A teams spend 3+ days reviewing complex contracts. Bottlenecks in due diligence slow deals and inflate costs.",
        potentialResult: "~85%",
        resultLabel: "faster per-deal turnaround",
        delta: "3 days → 4 hours for a 500-page contract review",
        stack: ["Claude / GPT-4", "Semantic Search", "Weaviate", "React", "Node.js"],
        approach: "A RAG system over a client's document corpus using hybrid BM25 + dense retrieval, with a custom re-ranking layer trained on firm-specific precedents. The web interface surfaces clause comparisons, risk flags, and missing provisions with source citations, directly integrated into document workflows.",
        type: "AI + Full Stack",
    },
    {
        id: "CS-005",
        sector: "RETAIL & E-COMM",
        problem: "Personalisation at Scale",
        challenge: "Generic product recommendations and one-size-fits-all email campaigns leaving significant revenue on the table for mid-to-large e-commerce operators.",
        potentialResult: "30–50%",
        resultLabel: "lift in conversion rate",
        delta: "Real-time personalisation across 1M+ SKUs",
        stack: ["Embedding Models", "LangChain", "Redis", "Postgres", "Next.js"],
        approach: "We build real-time user embedding pipelines that capture browse, purchase, and explicit feedback signals. A retrieval layer blends collaborative filtering with semantic product similarity to serve hyper-relevant recommendations. LLM-driven copy generation personalises email subject lines and product descriptions at the individual level.",
        type: "AI + Full Stack",
    },
    {
        id: "CS-006",
        sector: "SaaS / ENTERPRISE",
        problem: "Internal Knowledge & Support Automation",
        challenge: "Large organisations losing hours daily to repetitive internal queries — employee onboarding, IT support, HR policies — overwhelming support teams.",
        potentialResult: "60–70%",
        resultLabel: "deflection of tier-1 support tickets",
        delta: "Mean resolution time under 45 seconds",
        stack: ["RAG Pipeline", "Agentic Routing", "Slack / Teams API", "Pinecone", "TypeScript"],
        approach: "An agentic system connected to internal knowledge bases, ticketing systems, and policy documents. The agent classifies queries, retrieves grounded answers with citations, and escalates to humans only when confidence falls below threshold. Full audit trails ensure compliance and continuous model improvement.",
        type: "Agentic AI",
    },
];

export default function CaseStudies() {
    const [expanded, setExpanded] = useState<string | null>(null);
    const headerRef = useScrollReveal({ threshold: 0.1 });
    const listRef = useScrollReveal<HTMLDivElement>({ threshold: 0.04 });

    return (
        <section className="py-28 sm:py-36 relative" style={{ background: "#010c18" }}>
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(59,130,246,0.12), transparent)" }} />

            <div className="mx-auto max-w-7xl px-6 lg:px-12">

                {/* Header */}
                <div ref={headerRef} className="reveal mb-20">
                    <p className="font-mono text-[20px] tracking-[0.25em] mb-5 text-center" style={{ color: "#3b82f6" }}>
                        // CASE_STUDIES
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-12">
                        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: "#e2eeff" }}>
                            Problems we&apos;re built<br />
                            <span style={{ color: "#3b82f6" }}>to solve.</span>
                        </h2>
                        <p className="text-base font-sans max-w-sm leading-relaxed" style={{ color: "#94a3b8" }}>
                            Pattern-matched across industries. Each archetype represents a class of real-world engineering challenges we design AI and full-stack systems to tackle.
                        </p>
                    </div>
                </div>

                {/* Studies */}
                <div ref={listRef} className="reveal-stagger flex flex-col gap-4">
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
                                        <span
                                            className="font-mono text-[10px] tracking-[0.15em] px-2 py-1 rounded-full hidden sm:inline-flex"
                                            style={{ background: "rgba(99,102,241,0.06)", color: "#818cf8", border: "1px solid rgba(99,102,241,0.12)" }}
                                        >
                                            {s.type}
                                        </span>
                                    </div>

                                    {/* Problem + challenge */}
                                    <div className="flex-1 min-w-0">
                                        <p className="font-bold mb-1 truncate text-lg" style={{ color: "#c7dff7" }}>{s.problem}</p>
                                        <p className="text-base font-sans line-clamp-1" style={{ color: "#94a3b8" }}>{s.challenge}</p>
                                    </div>

                                    {/* Big result metric */}
                                    <div className="shrink-0 text-right">
                                        <div
                                            className="text-4xl font-bold font-mono"
                                            style={{ color: "#93c5fd", filter: "drop-shadow(0 0 16px rgba(147,197,253,0.35))" }}
                                        >
                                            {s.potentialResult}
                                        </div>
                                        <div className="font-mono text-[10px] tracking-widest mt-1" style={{ color: "#334155" }}>{s.resultLabel}</div>
                                    </div>

                                    {/* Expand toggle */}
                                    <div className="shrink-0 font-mono text-[11px] text-right" style={{ color: "#1e4a7a" }}>
                                        <div className="mt-1" style={{ color: isOpen ? "#3b82f6" : "#1e3a5f" }}>
                                            {isOpen ? "▲ collapse" : "▼ explore"}
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
                                                <p className="font-mono text-[10px] tracking-widest mb-1" style={{ color: "#1e4a7a" }}>PROJECTED_OUTCOME</p>
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
