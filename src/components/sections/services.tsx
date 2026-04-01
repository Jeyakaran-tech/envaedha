"use client";

import { useEffect, useRef } from "react";

/* ── tiny canvas visuals for each service ─────────────────────────── */

function LLMVisual() {
    const ref = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const c = ref.current; if (!c) return;
        const ctx = c.getContext("2d"); if (!ctx) return;
        c.width = c.offsetWidth; c.height = c.offsetHeight;
        let t = 0, id: number;
        const draw = () => {
            ctx.clearRect(0, 0, c.width, c.height);
            const cx = c.width / 2, cy = c.height / 2;
            for (let ring = 0; ring < 5; ring++) {
                const count = 6 + ring * 4;
                const r = 24 + ring * 28;
                for (let i = 0; i < count; i++) {
                    const angle = (i / count) * Math.PI * 2 + t * (ring % 2 === 0 ? 0.4 : -0.4);
                    const x = cx + Math.cos(angle) * r;
                    const y = cy + Math.sin(angle) * r;
                    const alpha = 0.12 + (ring === 0 ? 0.5 : 0) * Math.abs(Math.sin(t + i));
                    const size = ring === 0 ? 4 : 2.5 - ring * 0.25;
                    ctx.beginPath();
                    ctx.arc(x, y, Math.max(0.5, size), 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(147,197,253,${alpha})`;
                    ctx.fill();
                }
            }
            const pg = ctx.createRadialGradient(cx, cy, 0, cx, cy, 20 + Math.sin(t * 2) * 5);
            pg.addColorStop(0, "rgba(200,230,255,0.9)");
            pg.addColorStop(1, "transparent");
            ctx.beginPath(); ctx.arc(cx, cy, 20 + Math.sin(t * 2) * 5, 0, Math.PI * 2);
            ctx.fillStyle = pg; ctx.fill();
            t += 0.018; id = requestAnimationFrame(draw);
        };
        draw();
        return () => cancelAnimationFrame(id);
    }, []);
    return <canvas ref={ref} className="w-full h-full" />;
}

function AgentVisual() {
    const ref = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const c = ref.current; if (!c) return;
        const ctx = c.getContext("2d"); if (!ctx) return;
        c.width = c.offsetWidth; c.height = c.offsetHeight;
        let t = 0, id: number;
        const nodes = Array.from({ length: 9 }, (_, i) => ({
            x: 0.15 + Math.random() * 0.7,
            y: 0.15 + Math.random() * 0.7,
            r: 4 + Math.random() * 4,
            phase: Math.random() * Math.PI * 2,
        }));
        const draw = () => {
            ctx.clearRect(0, 0, c.width, c.height);
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const a = nodes[i], b = nodes[j];
                    const dist = Math.hypot(a.x - b.x, a.y - b.y);
                    if (dist > 0.4) continue;
                    const alpha = (0.4 - dist) / 0.4 * 0.3;
                    ctx.beginPath();
                    ctx.moveTo(a.x * c.width, a.y * c.height);
                    ctx.lineTo(b.x * c.width, b.y * c.height);
                    ctx.strokeStyle = `rgba(96,165,250,${alpha})`;
                    ctx.lineWidth = 1; ctx.stroke();
                }
            }
            nodes.forEach((n, i) => {
                const pulse = 0.7 + 0.3 * Math.sin(t * 1.5 + n.phase);
                const g = ctx.createRadialGradient(n.x * c.width, n.y * c.height, 0, n.x * c.width, n.y * c.height, n.r * 3 * pulse);
                g.addColorStop(0, "rgba(147,197,253,0.8)"); g.addColorStop(1, "transparent");
                ctx.beginPath(); ctx.arc(n.x * c.width, n.y * c.height, n.r * 3 * pulse, 0, Math.PI * 2);
                ctx.fillStyle = g; ctx.fill();
                ctx.beginPath(); ctx.arc(n.x * c.width, n.y * c.height, n.r * 0.6 * pulse, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200,225,255,${0.6 * pulse})`; ctx.fill();
            });
            t += 0.014; id = requestAnimationFrame(draw);
        };
        draw();
        return () => cancelAnimationFrame(id);
    }, []);
    return <canvas ref={ref} className="w-full h-full" />;
}

function SafetyVisual() {
    const ref = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const c = ref.current; if (!c) return;
        const ctx = c.getContext("2d"); if (!ctx) return;
        c.width = c.offsetWidth; c.height = c.offsetHeight;
        let t = 0, id: number;
        const draw = () => {
            ctx.clearRect(0, 0, c.width, c.height);
            const cx = c.width / 2, cy = c.height / 2;
            for (let ring = 1; ring <= 4; ring++) {
                const r = ring * 28 + Math.sin(t + ring) * 3;
                ctx.beginPath();
                for (let s = 0; s <= 6; s++) {
                    const a = (s / 6) * Math.PI * 2 - Math.PI / 6 + t * (ring % 2 === 0 ? 0.2 : -0.2);
                    s === 0 ? ctx.moveTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r)
                        : ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
                }
                ctx.closePath();
                ctx.strokeStyle = `rgba(96,165,250,${0.04 + ring * 0.06})`;
                ctx.lineWidth = 1; ctx.stroke();
            }
            const scan = Math.sin(t) * 80;
            const sg = ctx.createLinearGradient(0, cy + scan - 16, 0, cy + scan + 16);
            sg.addColorStop(0, "transparent");
            sg.addColorStop(0.5, "rgba(59,130,246,0.12)");
            sg.addColorStop(1, "transparent");
            ctx.fillStyle = sg; ctx.fillRect(0, cy + scan - 16, c.width, 32);
            const sh = 48, sw = 42;
            ctx.beginPath();
            ctx.moveTo(cx, cy - sh / 2);
            ctx.lineTo(cx + sw / 2, cy - sh / 4);
            ctx.lineTo(cx + sw / 2, cy + sh / 3);
            ctx.quadraticCurveTo(cx, cy + sh / 2 + 6, cx, cy + sh / 2 + 6);
            ctx.quadraticCurveTo(cx, cy + sh / 2 + 6, cx - sw / 2, cy + sh / 3);
            ctx.lineTo(cx - sw / 2, cy - sh / 4);
            ctx.closePath();
            ctx.strokeStyle = `rgba(147,197,253,${0.25 + 0.1 * Math.sin(t * 2)})`;
            ctx.lineWidth = 1.5; ctx.stroke();
            t += 0.016; id = requestAnimationFrame(draw);
        };
        draw();
        return () => cancelAnimationFrame(id);
    }, []);
    return <canvas ref={ref} className="w-full h-full" />;
}

/* ── CPU Chip Visual (Full-Stack AI row) ──────────────────── */
function FullStackVisual() {
    const ref = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const c = ref.current; if (!c) return;
        const ctx = c.getContext("2d"); if (!ctx) return;
        c.width = c.offsetWidth; c.height = c.offsetHeight;
        let t = 0, id: number;

        const draw = () => {
            ctx.clearRect(0, 0, c.width, c.height);
            const cx = c.width / 2, cy = c.height / 2;
            const chipW = 70, chipH = 70, r = 10;
            const pulse = 0.7 + 0.3 * Math.sin(t * 1.5);

            // Chip body (rounded rect)
            ctx.beginPath();
            ctx.roundRect(cx - chipW / 2, cy - chipH / 2, chipW, chipH, r);
            ctx.fillStyle = `rgba(59,130,246,${0.12 * pulse})`;
            ctx.fill();
            ctx.strokeStyle = `rgba(147,197,253,${0.5 * pulse})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();

            // "AI" label inside chip
            ctx.fillStyle = `rgba(147,197,253,${0.9 * pulse})`;
            ctx.font = `bold ${14}px monospace`;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("AI", cx, cy);

            // Pins: 3 on each side (top, bottom, left, right)
            const pins = [
                // top (x offset, y offset from chip edge)
                { x: cx - 20, y: cy - chipH / 2, dir: "top" },
                { x: cx, y: cy - chipH / 2, dir: "top" },
                { x: cx + 20, y: cy - chipH / 2, dir: "top" },
                // bottom
                { x: cx - 20, y: cy + chipH / 2, dir: "bottom" },
                { x: cx, y: cy + chipH / 2, dir: "bottom" },
                { x: cx + 20, y: cy + chipH / 2, dir: "bottom" },
                // left
                { x: cx - chipW / 2, y: cy - 20, dir: "left" },
                { x: cx - chipW / 2, y: cy, dir: "left" },
                { x: cx - chipW / 2, y: cy + 20, dir: "left" },
                // right
                { x: cx + chipW / 2, y: cy - 20, dir: "right" },
                { x: cx + chipW / 2, y: cy, dir: "right" },
                { x: cx + chipW / 2, y: cy + 20, dir: "right" },
            ];

            pins.forEach((pin, i) => {
                const tracePulse = 0.4 + 0.3 * Math.sin(t * 2 + i * 0.6);
                const traceLen = 28;
                let ex = pin.x, ey = pin.y;

                // Draw L-shaped trace
                ctx.beginPath();
                ctx.moveTo(pin.x, pin.y);
                if (pin.dir === "top") { ey = pin.y - traceLen; }
                if (pin.dir === "bottom") { ey = pin.y + traceLen; }
                if (pin.dir === "left") { ex = pin.x - traceLen; }
                if (pin.dir === "right") { ex = pin.x + traceLen; }
                ctx.lineTo(ex, ey);
                ctx.strokeStyle = `rgba(96,165,250,${tracePulse * 0.6})`;
                ctx.lineWidth = 1;
                ctx.stroke();

                // Endpoint dot (the "node" circles from the reference image)
                ctx.beginPath();
                ctx.arc(ex, ey, 3.5, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(147,197,253,${tracePulse})`;
                ctx.fill();
            });

            // Outer glow ring pulsing
            const grd = ctx.createRadialGradient(cx, cy, 30, cx, cy, 80 + Math.sin(t) * 8);
            grd.addColorStop(0, "transparent");
            grd.addColorStop(1, `rgba(59,130,246,${0.04 + 0.02 * Math.sin(t)})`);
            ctx.beginPath();
            ctx.arc(cx, cy, 80, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();

            t += 0.025;
            id = requestAnimationFrame(draw);
        };
        draw();
        return () => cancelAnimationFrame(id);
    }, []);
    return <canvas ref={ref} className="w-full h-full" />;
}

/* ── Cloud Visual ────────────────────────────────────────────── */
function CloudVisual() {
    const ref = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        const c = ref.current; if (!c) return;
        const ctx = c.getContext("2d"); if (!ctx) return;
        c.width = c.offsetWidth; c.height = c.offsetHeight;
        let t = 0, id: number;

        // Floating data packets
        const packets = Array.from({ length: 6 }, (_, i) => ({
            x: 0.1 + (i % 3) * 0.35,
            y: 0.2 + Math.floor(i / 3) * 0.5,
            phase: i * 1.1,
            speed: 0.4 + Math.random() * 0.4,
        }));

        const draw = () => {
            ctx.clearRect(0, 0, c.width, c.height);
            const cx = c.width / 2, cy = c.height / 2;

            // Cloud shape (3 overlapping circles)
            const cloudPulse = 0.8 + 0.2 * Math.sin(t * 0.8);
            const cloudParts = [
                { x: cx, y: cy - 10, r: 28 },
                { x: cx - 22, y: cy + 6, r: 20 },
                { x: cx + 22, y: cy + 6, r: 20 },
                { x: cx - 8, y: cy + 2, r: 18 },
                { x: cx + 8, y: cy + 2, r: 18 },
            ];
            cloudParts.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r * cloudPulse, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(59,130,246,${0.08})`;
                ctx.fill();
                ctx.strokeStyle = `rgba(147,197,253,${0.25 * cloudPulse})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            });

            // Ascending data packets
            packets.forEach((p, i) => {
                const yOff = Math.sin(t * p.speed + p.phase) * 12;
                const px = p.x * c.width;
                const py = (p.y + 0.1) * c.height + yOff;
                const alpha = 0.4 + 0.4 * Math.abs(Math.sin(t * p.speed + p.phase));

                // Upward arrow dashes
                ctx.beginPath();
                ctx.moveTo(px, py + 6);
                ctx.lineTo(px, py - 6);
                ctx.strokeStyle = `rgba(96,165,250,${alpha * 0.5})`;
                ctx.lineWidth = 1;
                ctx.stroke();

                ctx.beginPath();
                ctx.arc(px, py, 3, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(147,197,253,${alpha})`;
                ctx.fill();
            });

            // Central glow
            const grd = ctx.createRadialGradient(cx, cy - 5, 0, cx, cy - 5, 50);
            grd.addColorStop(0, `rgba(59,130,246,${0.06 * cloudPulse})`);
            grd.addColorStop(1, "transparent");
            ctx.fillStyle = grd;
            ctx.fillRect(0, 0, c.width, c.height);

            t += 0.02;
            id = requestAnimationFrame(draw);
        };
        draw();
        return () => cancelAnimationFrame(id);
    }, []);
    return <canvas ref={ref} className="w-full h-full" />;
}

function Cross() {
    return (
        <div className="absolute w-4 h-4 flex items-center justify-center pointer-events-none" style={{ color: "rgba(59,130,246,0.25)" }}>
            <span className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-px bg-current" />
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-px bg-current" />
        </div>
    );
}

/* ── Service rows data ───────────────────────────────────────────── */
const SERVICES = [
    {
        category: "FULL_STACK_AI",
        title: "We engineer the full AI stack.",
        desc: "Why bring multiple AI vendors into your pipeline when one deep-tech team can own your entire intelligence layer — from raw data to production inference?",
        visual: <FullStackVisual />,
        items: [
            "End-to-End Architectures",
            "Multi-Vendor Strategy",
            "Scalable Data Pipelines",
            "Production GPU Serving",
            "Performance Optimization",
            "Security & Compliance",
            "Continuous ML-Ops",
        ],
    },
    {
        category: "LANGUAGE_MODELS",
        title: "LLM systems that know your domain.",
        desc: "We fine-tune foundation models on your proprietary corpus, handle RLHF alignment, and build evaluation pipelines that measure what actually matters for your use case.",
        visual: <LLMVisual />,
        items: [
            "Domain Fine-Tuning",
            "RLHF & Constitutional AI",
            "Prompt Engineering",
            "Evaluation Benchmarking",
            "Model Quantisation",
            "Embedding Pipelines",
            "Multi-Modal LLMs",
        ],
    },
    {
        category: "AGENTIC_SYSTEMS",
        title: "Agents that plan, act, and reflect.",
        desc: "We build and deploy autonomous AI agents in Melbourne to handle complex tasks. From custom tool-calling frameworks to full workflow automation in Melbourne, our agents are designed to recover from failure and reason across steps.",
        visual: <AgentVisual />,
        items: [
            "AI agents Melbourne",
            "Multi-Agent Orchestration",
            "Workflow Automation Melbourne",
            "Autonomous Planning",
            "RAG Architectures",
            "Custom Tool-Calling",
            "Agent Performance Evaluation",
        ],
    },
    {
        category: "INFRASTRUCTURE_&_SAFETY",
        title: "Infrastructure built to last at scale.",
        desc: "GPU cluster design, inference serving with vLLM/TGI, vector databases, and constitutional safety frameworks — every layer hardened for enterprise reliability.",
        visual: <SafetyVisual />,
        items: [
            "Neural Infrastructure",
            "GPU Cluster Design",
            "Inference Optimisation",
            "Vector Database Setup",
            "AI Governance",
            "Red-Teaming",
            "Compliance Guardrails",
        ],
    },
    {
        category: "CLOUD_SOLUTIONS",
        title: "Cloud-native AI, built to scale globally.",
        desc: "We design and deploy AI workloads on AWS, GCP, and Azure — serverless inference, auto-scaling pipelines, and multi-region architectures that grow with your product.",
        visual: <CloudVisual />,
        items: [
            "AWS / GCP / Azure",
            "Serverless Inference",
            "Auto-Scaling Pipelines",
            "Multi-Region Deployments",
            "Cost Optimisation",
            "Cloud Security Posture",
            "DevOps & CI/CD for AI",
        ],
    },
];

/* ── Main component ──────────────────────────────────────────────── */
export default function Services() {
    return (
        <section id="services" className="pt-24 lg:pt-32" style={{ background: "#020d1a" }}>

            {/* ── Centered Eyebrow ────────────────────────── */}
            <div className="mx-auto max-w-7xl px-6 lg:px-12 mb-20 text-center">
                <p className="font-mono text-[20px] tracking-[0.25em]" style={{ color: "#3b82f6" }}>
                    // CORE_CAPABILITIES
                </p>
            </div>

            {/* ── Unified Service grid ────────────────────────────────── */}
            <div className="relative border-t" style={{ borderColor: "rgba(59,130,246,0.1)" }}>
                {SERVICES.map((s, si) => (
                    <div
                        key={s.category}
                        className="relative grid grid-cols-1 lg:grid-cols-[260px_1fr_300px] border-b"
                        style={{ borderColor: "rgba(59,130,246,0.1)" }}
                    >
                        {/* Crosshairs */}
                        <Cross />
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2"><Cross /></div>
                        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2"><Cross /></div>
                        <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2"><Cross /></div>

                        {/* ── Visual column ───────────────────────── */}
                        <div
                            className="relative border-r hidden lg:block"
                            style={{
                                borderColor: "rgba(59,130,246,0.1)",
                                background: "#010c18",
                                minHeight: 280,
                            }}
                        >
                            {s.visual}
                        </div>

                        {/* ── Title/Description column ────────────── */}
                        <div className="px-8 lg:px-12 py-16 lg:py-20 flex flex-col justify-center gap-6">
                            <p className="font-mono text-[10px] tracking-[0.2em]" style={{ color: "#3b82f6" }}>
                                {s.category}
                            </p>
                            <h3 className={`font-bold tracking-tight leading-snug text-3xl sm:text-4xl`} style={{ color: '#c7dff7' }}>
                                {s.title}
                            </h3>
                            <p className="text-base font-sans leading-relaxed max-w-lg" style={{ color: "#cbd5e1" }}>
                                {s.desc}
                            </p>
                        </div>

                        {/* ── Third column (Items Manifest) ──── */}
                        <div
                            className="border-t lg:border-t-0 lg:border-l px-8 py-16 lg:py-20 flex flex-col justify-center"
                            style={{ borderColor: "rgba(59,130,246,0.1)" }}
                        >
                            <ul className="flex flex-col gap-3">
                                {s.items.map((item) => (
                                    <li key={item} className="flex items-center gap-3 group cursor-default">
                                        <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "#1e4a7a" }} />
                                        <span
                                            className="font-mono text-[14px] tracking-wide transition-colors duration-200"
                                            style={{ color: "#94a3b8" }}
                                            onMouseEnter={(e) => (e.currentTarget.style.color = "#93c5fd")}
                                            onMouseLeave={(e) => (e.currentTarget.style.color = "#94a3b8")}
                                        >
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
