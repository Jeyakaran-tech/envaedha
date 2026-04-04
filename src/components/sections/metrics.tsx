"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const PRINCIPLES = [
    {
        id: "01",
        title: "We don't solve tools. We solve problems.",
        body: "Most AI vendors sell you a subscription and leave. We build the entire system for you — from training the models to integrating them with your team — and we're accountable for the final result.",
    },
    {
        id: "02",
        title: "Real technology, not just templates.",
        body: "We go deeper than simple chatbots. Our team works at the level of custom model training and smart knowledge engines, ensuring your AI is unique to your business and truly secure.",
    },
    {
        id: "03",
        title: "Reliable results at speed.",
        body: "We move fast because we know which AI strategies actually work in the real world. We don't experiment on your time; we implement proven architectures that deliver immediate value.",
    },
    {
        id: "04",
        title: "Local experts, global standards.",
        body: "Based in Melbourne, we bridge the gap between complex AI research and practical business application. We take the latest breakthroughs and turn them into simple, powerful tools for your team.",
    },
];

const DIFFERENTIATORS = [
    "Every system we build is designed for 24/7 reliability",
    "Expertise in custom AI assistants and smart automation",
    "Full-service approach — from strategy to the final app",
    "Rigorous testing so your AI works correctly every time",
    "Honest advice on what AI can (and can't) do for you",
];

const SECTORS = [
    "Professional Services",
    "Healthcare & Medical",
    "Legal & Accounting",
    "Retail & E-Commerce",
    "Manufacturing & Trade",
    "Small Business Operations",
];

export default function Metrics() {
    const headerRef = useScrollReveal({ threshold: 0.1 });
    const principlesRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });
    const bottomRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

    return (
        /* Light section — high contrast break like webisoft */
        <section className="py-28 sm:py-36 relative bg-[#f4f4f4]">
            <div className="absolute top-0 inset-x-0 h-px bg-black/8" />

            <div className="mx-auto max-w-7xl px-6 lg:px-12">

                {/* Header */}
                <div ref={headerRef} className="reveal mb-20">
                    <p className="font-mono text-[10px] tracking-[0.45em] text-black/30 uppercase mb-6 font-bold">
                        / WHY ENVAEDHA
                    </p>
                    <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-black leading-[1.1] max-w-2xl">
                        We turn AI potential into<br />
                        <span className="text-black/40">real business results.</span>
                    </h2>
                </div>

                {/* Principles Grid */}
                <div ref={principlesRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-2 gap-px bg-black/[0.07] border border-black/[0.07] rounded-2xl overflow-hidden mb-6">
                    {PRINCIPLES.map((p) => (
                        <div
                            key={p.id}
                            className="p-8 bg-[#f4f4f4] hover:bg-white transition-colors duration-300 group"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <span className="font-mono text-[10px] tracking-[0.2em] mt-0.5 shrink-0 text-black/25">{p.id}</span>
                                <h3 className="text-lg font-bold tracking-tight leading-snug text-black">{p.title}</h3>
                            </div>
                            <p className="text-base leading-relaxed pl-8 text-black/50">{p.body}</p>
                        </div>
                    ))}
                </div>

                {/* Bottom Row */}
                <div ref={bottomRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* Differentiators */}
                    <div className="p-8 bg-white border border-black/[0.07] rounded-2xl">
                        <p className="font-mono text-[10px] tracking-[0.3em] mb-6 text-black/30 font-bold uppercase">
                            What we bring
                        </p>
                        <div className="flex flex-col gap-4">
                            {DIFFERENTIATORS.map((d, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-1 h-1 rounded-full bg-black/40 shrink-0" />
                                    <span className="text-base text-black/60">{d}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* Sectors */}
                        <div className="p-8 bg-white border border-black/[0.07] rounded-2xl">
                            <p className="font-mono text-[10px] tracking-[0.3em] mb-6 text-black/30 font-bold uppercase">
                                Sectors we focus on
                            </p>
                            <div className="grid grid-cols-2 gap-3">
                                {SECTORS.map((c, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-1 h-1 rounded-full bg-black/30 shrink-0" />
                                        <span className="text-sm text-black/50">{c}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Positioning statement */}
                        <div className="flex-1 p-8 bg-black rounded-2xl">
                            <p className="font-mono text-[10px] tracking-[0.3em] mb-4 text-white/30 font-bold uppercase">
                                Our positioning
                            </p>
                            <p className="text-lg leading-relaxed text-white/70">
                                We&apos;re a small, focused team that cares deeply about doing the work right. We take fewer projects so we can go deeper on each one.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
