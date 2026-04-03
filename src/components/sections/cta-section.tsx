"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function CTASection() {
    const cardRef = useScrollReveal({ threshold: 0.1 });
    const leftRef = useScrollReveal({ threshold: 0.1 });
    const rightRef = useScrollReveal({ threshold: 0.1 });

    return (
        <section
            className="py-28 sm:py-36 relative overflow-hidden"
            style={{ background: "#020d1a" }}
        >
            {/* Background glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(59,130,246,0.08), transparent 70%)" }} />
                <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 rounded-full"
                    style={{ background: "radial-gradient(circle, rgba(99,102,241,0.05), transparent 70%)" }} />
            </div>

            <div className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(59,130,246,0.2), transparent)" }} />

            <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
                <div
                    ref={cardRef}
                    className="reveal rounded-3xl p-12 sm:p-20 relative overflow-hidden"
                    style={{ background: "#04152b", border: "1px solid rgba(59,130,246,0.12)" }}
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 pointer-events-none"
                        style={{ background: "radial-gradient(ellipse at top, rgba(59,130,246,0.08), transparent 70%)" }} />

                    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
                        <div ref={leftRef} className="reveal max-w-xl">
                            {/* <div className="flex items-center gap-3">
                                <span className="w-1 h-1 rounded-full bg-blue-500 animate-pulse" />
                            </div> */}
                            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6" style={{ color: "#e2eeff" }}>
                                Turn AI potential into real business results.
                            </h2>
                            <p className="text-base sm:text-lg mb-10 leading-relaxed" style={{ color: "#cbd5e1" }}>
                                Book a free strategy session to see how custom AI can save your team hours every day and skip the technical guesswork.
                            </p>
                        </div>

                        <div ref={rightRef} className="reveal reveal-delay-2 flex flex-col gap-5 shrink-0">
                            <Link href="/schedule-a-meeting">
                                <button
                                    className="w-full lg:w-auto px-10 py-4 rounded-xl text-sm font-bold tracking-tight transition-all active:scale-95"
                                    style={{ background: "#e2eeff", color: "#020d1a" }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#fff" }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "#e2eeff" }}
                                >
                                    Book Free Consultation
                                </button>
                            </Link>
                            {/* <Link href="mailto:admin@envaedha.com.au">
                                <button
                                    className="w-full lg:w-auto px-10 py-4 rounded-xl text-sm font-bold tracking-tight transition-all font-mono"
                                    style={{
                                        background: "transparent",
                                        color: "#93c5fd",
                                        border: "1px solid rgba(147,197,253,0.15)",
                                    }}
                                    onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(147,197,253,0.4)" }}
                                    onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(147,197,253,0.15)" }}
                                >
                                    ENQUIRE_VIA_EMAIL ↗
                                </button>
                            </Link> */}

                            {/* <p className="text-center font-mono text-[10px] tracking-widest" style={{ color: "#1e3a5f" }}>
                                RESPONSE_WITHIN_24H
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
