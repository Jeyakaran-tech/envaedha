"use client";

/**
 * WHO WE ARE
 * Design: Full-width manifesto statement in huge type, centred.
 * Below: 3 operating principles separated by vertical rules.
 * Background: Subtle animated scan-line texture.
 */

import { useEffect, useRef } from "react";

const principles = [
    {
        num: "01",
        label: "NO WRAPPERS",
        body: "We don't sell pre-packaged AI products. Every system we build is designed from first principles for your data, your constraints, and your production environment.",
    },
    {
        num: "02",
        label: "RESEARCH-LED",
        body: "Our engineers read the papers before they write the code. Every architectural decision is grounded in current academic research and real-world benchmarking.",
    },
    {
        num: "03",
        label: "PRODUCTION-FIRST",
        body: "Demos are easy. Scaling to millions of inference calls with sub-100ms latency is not. We engineer for production from day one, never as an afterthought.",
    },
];

function ScanLinesBg() {
    const ref = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const c = ref.current; if (!c) return;
        const ctx = c.getContext("2d"); if (!ctx) return;
        let t = 0, id: number;
        const resize = () => { c.width = c.offsetWidth; c.height = c.offsetHeight; };
        resize();
        const draw = () => {
            ctx.clearRect(0, 0, c.width, c.height);
            const scanY = ((t * 80) % (c.height + 120)) - 60;
            const g = ctx.createLinearGradient(0, scanY, 0, scanY + 120);
            g.addColorStop(0, "transparent");
            g.addColorStop(0.5, "rgba(59,130,246,0.025)");
            g.addColorStop(1, "transparent");
            ctx.fillStyle = g;
            ctx.fillRect(0, scanY, c.width, 120);
            t += 0.008;
            id = requestAnimationFrame(draw);
        };
        draw();
        window.addEventListener("resize", resize);
        return () => { cancelAnimationFrame(id); window.removeEventListener("resize", resize); };
    }, []);
    return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />;
}

export default function WhoWeAre() {
    return (
        <section className="relative overflow-hidden py-28 sm:py-36" style={{ background: "#020d1a" }}>
            <ScanLinesBg />

            {/* Top rule */}
            <div className="absolute top-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right, transparent, rgba(59,130,246,0.15), transparent)" }} />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

                {/* Eyebrow */}
                <p className="font-mono text-[20px] tracking-[0.25em] mb-16 text-center" style={{ color: "#3b82f6" }}>
                    // WHO_WE_ARE
                </p>

                {/* Manifesto statement */}
                <div className="text-center mb-24 max-w-5xl mx-auto">
                    <h2
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]"
                        style={{ color: "#c7dff7" }}
                    >
                        We embed AI that thinks,{" "}
                        <span style={{ color: "#93c5fd", filter: "drop-shadow(0 0 20px rgba(147,197,253,0.3))" }}>
                            reasons
                        </span>
                        , and{" "}
                        <span style={{ color: "#93c5fd", filter: "drop-shadow(0 0 20px rgba(147,197,253,0.3))" }}>
                            executes
                        </span>{" "}
                        — not just responds.
                    </h2>
                    <p className="mt-8 text-lg font-sans leading-relaxed max-w-2xl mx-auto" style={{ color: "#94a3b8" }}>
                        EnVaedha is a pure-AI consultancy. We sit inside your engineering team, own the hard technical problems,
                        and ship neural systems that ordinary consultants can't build.
                    </p>
                </div>

                {/* Principles */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: "rgba(59,130,246,0.1)" }}>
                    {principles.map((p) => (
                        <div key={p.num} className="px-0 md:px-10 py-10 first:pl-0 last:pr-0">
                            <div className="flex items-start gap-5 mb-5">
                                <span className="font-mono text-[11px] mt-1" style={{ color: "#1e4a7a" }}>{p.num}</span>
                                <span className="font-mono text-[11px] tracking-[0.2em] font-bold" style={{ color: "#3b82f6" }}>{p.label}</span>
                            </div>
                            <p className="text-base font-sans leading-relaxed" style={{ color: "#cbd5e1" }}>{p.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
