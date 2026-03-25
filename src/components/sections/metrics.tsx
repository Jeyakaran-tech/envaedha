"use client";

/**
 * METRICS / WHY US
 * Design: Asymmetric bento grid with glowing stat blocks, a testimonial,
 * and a "deployment velocity" bar. Zero cards — pure data architecture feel.
 */

const STATS = [
    { value: "200B+", label: "Parameters fine-tuned in production", wide: false },
    { value: "8 wks", label: "Average time from kickoff to live deployment", wide: false },
    { value: "40ms", label: "Median p99 inference latency across client systems", wide: false },
    { value: "99.94%", label: "Production uptime SLA across all deployments", wide: false },
];

const TESTIMONIALS = [
    {
        quote: "EnVaedha shipped what our internal team estimated would take a year — in eleven weeks. The RAG pipeline they built handles 4 million documents and our analysts trust it completely.",
        name: "Sarah Chen",
        role: "Chief Data Officer",
        company: "Apex Capital",
    },
    {
        quote: "They read our research papers, challenged our assumptions, and built something better than what we asked for. That's rare in a consultancy.",
        name: "Dr. Marcus Webb",
        role: "Head of AI",
        company: "MedCore Diagnostics",
    },
];

const CLIENTS = ["Goldman-tier Finance", "Top-5 Law Firms", "Series B MedTech", "Global Logistics", "Gov. Defense Labs", "Fortune 500 Retail"];

export default function Metrics() {
    return (
        <section className="py-28 sm:py-36 relative overflow-hidden" style={{ background: "#020d1a" }}>
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(59,130,246,0.12), transparent)" }} />

            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(59,130,246,0.05), transparent 70%)" }} />
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">

                {/* Header */}
                <div className="mb-20">
                    <p className="font-mono text-[11px] tracking-[0.25em] mb-5" style={{ color: "#3b82f6" }}>// WHY_ENVAEDHA</p>
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight" style={{ color: "#e2eeff" }}>
                        Numbers don't<br /> need commentary.
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                    {/* Left: stat column */}
                    <div className="flex flex-col gap-3">
                        {STATS.map((s, i) => (
                            <div
                                key={i}
                                className="flex flex-col gap-1 px-6 py-5 rounded-2xl"
                                style={{ background: "#04152b", border: "1px solid rgba(59,130,246,0.08)" }}
                            >
                                <div
                                    className="text-4xl font-bold font-mono"
                                    style={{ color: "#93c5fd", filter: "drop-shadow(0 0 12px rgba(147,197,253,0.2))" }}
                                >
                                    {s.value}
                                </div>
                                <div className="text-sm font-sans leading-snug" style={{ color: "#94a3b8" }}>{s.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Centre: testimonials */}
                    <div className="flex flex-col gap-4">
                        {TESTIMONIALS.map((t, i) => (
                            <div
                                key={i}
                                className="flex-1 flex flex-col justify-between p-7 rounded-2xl"
                                style={{ background: "#04152b", border: "1px solid rgba(59,130,246,0.08)" }}
                            >
                                <div className="mb-6">
                                    <div className="flex gap-1 mb-4">
                                        {[0, 1, 2].map(j => (
                                            <div key={j} className="w-1.5 h-1.5 rounded-full" style={{ background: "#1e4a7a" }} />
                                        ))}
                                    </div>
                                    <p className="text-base font-sans leading-relaxed" style={{ color: "#cbd5e1" }}>
                                         "{t.quote}"
                                     </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div
                                        className="w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold"
                                        style={{ background: "rgba(59,130,246,0.12)", color: "#93c5fd", border: "1px solid rgba(59,130,246,0.2)" }}
                                    >
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="font-bold text-sm" style={{ color: "#c7dff7" }}>{t.name}</p>
                                        <p className="font-mono text-[10px] tracking-wide" style={{ color: "#334155" }}>{t.role} · {t.company}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: sectors + velocity */}
                    <div className="flex flex-col gap-4">

                        {/* Sectors we serve */}
                        <div
                            className="p-7 rounded-2xl"
                            style={{ background: "#04152b", border: "1px solid rgba(59,130,246,0.08)" }}
                        >
                            <p className="font-mono text-[10px] tracking-[0.2em] mb-5" style={{ color: "#3b82f6" }}>SECTORS_SERVED</p>
                            <div className="flex flex-col gap-3">
                                {CLIENTS.map((c, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <div
                                            className="w-1.5 h-1.5 rounded-full shrink-0"
                                            style={{ background: i < 3 ? "#3b82f6" : "#1e4a7a" }}
                                        />
                                        <span className="font-mono text-sm" style={{ color: i < 3 ? "#93c5fd" : "#475569" }}>{c}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Deployment velocity bar */}
                        <div
                            className="flex-1 p-7 rounded-2xl flex flex-col justify-between"
                            style={{ background: "rgba(59,130,246,0.06)", border: "1px solid rgba(59,130,246,0.15)" }}
                        >
                            <p className="font-mono text-[10px] tracking-[0.2em] mb-4" style={{ color: "#3b82f6" }}>DEPLOYMENT_VELOCITY</p>
                            <div>
                                <div className="text-6xl font-bold font-mono mb-2"
                                    style={{ color: "#93c5fd", filter: "drop-shadow(0 0 24px rgba(147,197,253,0.3))" }}>
                                    2×
                                </div>
                                <p className="text-sm font-sans leading-relaxed" style={{ color: "#94a3b8" }}>
                                     Faster than comparable in-house AI team builds. Measured across 12 client engagements.
                                 </p>
                            </div>
                            {/* Progress-style bar */}
                            <div className="mt-6 h-1 rounded-full overflow-hidden" style={{ background: "rgba(59,130,246,0.1)" }}>
                                <div className="h-full rounded-full" style={{ width: "72%", background: "linear-gradient(to right, #1d4ed8, #93c5fd)" }} />
                            </div>
                            <p className="font-mono text-[10px] mt-2" style={{ color: "#1e4a7a" }}>avg. speed-to-prod vs industry baseline</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
