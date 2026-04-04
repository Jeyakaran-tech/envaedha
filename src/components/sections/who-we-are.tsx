"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const principles = [
    {
        num: "01",
        label: "CUSTOM BUILT",
        body: "We don't do 'off-the-shelf'. Every system we build is tailored from the ground up for your specific business data, goals, and daily operations.",
    },
    {
        num: "02",
        label: "RESULT DRIVEN",
        body: "We focus on what works. Every decision is based on proven AI strategies that deliver measurable time-savings and operational efficiency for your team.",
    },
    {
        num: "03",
        label: "BUILT FOR GROWTH",
        body: "Great ideas need to scale. We engineer systems that are reliable and fast, ensuring they perform perfectly as your business grows from trial to high-volume use.",
    },
];

export default function WhoWeAre() {
    const manifestoRef = useScrollReveal({ threshold: 0.1 });
    const principlesRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

    return (
        <section className="relative overflow-hidden py-28 sm:py-40 bg-[#141414]">
            {/* Subtle top border */}
            <div className="absolute top-0 inset-x-0 h-px bg-white/5" />

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

                {/* Manifesto */}
                <div ref={manifestoRef} className="reveal text-center mb-24 max-w-5xl mx-auto">
                    <p className="font-mono text-[10px] tracking-[0.45em] text-white/30 uppercase mb-8 font-bold">
                        / AI CONSULTING MELBOURNE
                    </p>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-white">
                        AI that doesn&apos;t just chat.{" "}
                        <span className="text-white/50">
                            It does the work.
                        </span>
                    </h2>
                    <p className="mt-8 text-lg leading-relaxed max-w-2xl mx-auto text-white/40">
                        We provide{" "}
                        <Link href="/ai-consulting-melbourne" className="text-white/60 hover:text-white underline underline-offset-4 decoration-white/20 transition-colors">
                            AI consulting in Melbourne
                        </Link>{" "}
                        specifically tailored for small business growth. We help you automate time-consuming tasks so you can focus on scaling your business.
                    </p>
                </div>

                {/* Principles */}
                <div
                    ref={principlesRef}
                    className="reveal-stagger grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.06]"
                >
                    {principles.map((p) => (
                        <div key={p.num} className="px-0 md:px-10 py-10 first:pl-0 last:pr-0">
                            <div className="flex items-start gap-4 mb-5">
                                <span className="font-mono text-[10px] mt-0.5 text-white/20">{p.num}</span>
                                <span className="font-mono text-[11px] tracking-[0.2em] font-bold text-white/50">{p.label}</span>
                            </div>
                            <p className="text-base leading-relaxed text-white/35">{p.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
