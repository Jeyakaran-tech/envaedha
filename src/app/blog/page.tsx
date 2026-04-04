"use client";

/**
 * BLOG TIMELINE
 * SMB-focused insights + clearly tagged tech news.
 */

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const BLOG_POSTS = [
    {
        id: "01",
        date: "APRIL 01, 2026",
        category: "SMB INSIGHTS",
        title: "How Melbourne Small Businesses Are Using AI to Save 10+ Hours a Week",
        excerpt: "Learn how Melbourne-based SMBs are leveraging custom AI automation to reclaim their workweek and focus on strategic growth.",
        source: "Envaedha Intelligence",
        url: "/blog/ai-automation-melbourne-small-business",
        isInternal: true,
        isTechNews: false,
    },
    {
        id: "02",
        date: "MARCH 29, 2026",
        category: "SMB INSIGHTS",
        title: "AI Chatbots for Melbourne SMBs: What to Know Before You Build",
        excerpt: "Don't build a basic chatbot. Learn what Melbourne small businesses need to know to build truly intelligent AI support systems.",
        source: "Envaedha Intelligence",
        url: "/blog/ai-chatbot-melbourne-smb",
        isInternal: true,
        isTechNews: false,
    },
    {
        id: "03",
        date: "MARCH 20, 2026",
        category: "SMB INSIGHTS",
        title: "The Beginner's Guide to AI Agents for Australian Businesses",
        excerpt: "A comprehensive guide to understanding AI agents and how they are revolutionizing the Australian business landscape.",
        source: "Envaedha Intelligence",
        url: "/blog/ai-agents-australia-guide",
        isInternal: true,
        isTechNews: false,
    },
    {
        id: "04",
        date: "MARCH 26, 2026",
        category: "TECH NEWS",
        title: "NVIDIA Rubin: The Trillion-Parameter Epoch",
        excerpt: "NVIDIA's Vera Rubin platform launches, promising a 10x reduction in training costs for massive models and redefining compute efficiency.",
        source: "Envaedha Intelligence",
        url: "/blog/nvidia-rubin-trillion-parameter",
        isInternal: true,
        isTechNews: true,
    },
    {
        id: "05",
        date: "MARCH 25, 2026",
        category: "TECH NEWS",
        title: "TurboQuant: Google's 3-bit Breakthrough",
        excerpt: "Google Research unveils TurboQuant — a suite of advanced quantization algorithms including PolarQuant that compress LLMs without loss.",
        source: "Envaedha Intelligence",
        url: "/blog/google-research-turboquant",
        isInternal: true,
        isTechNews: true,
    },
    {
        id: "06",
        date: "MARCH 24, 2026",
        category: "TECH NEWS",
        title: "The Agentic Shift: Gemini 3 & Claude 4.6",
        excerpt: "A deep dive into how Gemini 3 and Claude 4.6 are transitioning from static chat interfaces to autonomous agents with reasoning loops.",
        source: "Envaedha Intelligence",
        url: "/blog/the-agentic-shift-gemini-3-claude-4",
        isInternal: true,
        isTechNews: true,
    },
    {
        id: "07",
        date: "MARCH 17, 2026",
        category: "TECH NEWS",
        title: "OpenAI Deploys GPT-5.4 and GPT-5.4 Pro",
        excerpt: "The latest GPT iteration focuses on advanced tool-use and autonomous software engineering, featuring a new Verification Layer for reliability.",
        source: "Envaedha Intelligence",
        url: "/blog/openai-gpt-5-4-deployment",
        isInternal: true,
        isTechNews: true,
    },
    {
        id: "08",
        date: "MARCH 12, 2026",
        category: "TECH NEWS",
        title: "Lyria 3 Pro: DeepMind's Creative Core",
        excerpt: "Google DeepMind launches Lyria 3 Pro, a multimodal model that unifies vision, audio, and reasoning in a single latent space for creative scale.",
        source: "Envaedha Intelligence",
        url: "/blog/deepmind-lyria-3-pro",
        isInternal: true,
        isTechNews: true,
    },
    {
        id: "09",
        date: "MARCH 05, 2026",
        category: "TECH NEWS",
        title: "Agentic SIEM: Databricks Lakewatch",
        excerpt: "Databricks introduces the first agentic security management system, leveraging autonomous agents for real-time investigation and response.",
        source: "Envaedha Intelligence",
        url: "/blog/databricks-agentic-siem",
        isInternal: true,
        isTechNews: true,
    },
];

function TimelineLine() {
    const containerRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let rafId: number;

        const handleScroll = () => {
            if (!containerRef.current || !lineRef.current || !dotRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const viewportH = window.innerHeight;

            const start = viewportH * 0.4;
            const total = rect.height;
            const current = -rect.top + start;

            const p = Math.min(Math.max((current / total) * 100, 0), 100);

            // Direct DOM updates are much smoother for 60fps scroll tracking
            lineRef.current.style.height = `${p}%`;
            dotRef.current.style.top = `${p}%`;
        };

        const onScroll = () => {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(handleScroll);
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        handleScroll();
        return () => {
            window.removeEventListener("scroll", onScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <div ref={containerRef} className="absolute left-1/2 -translate-x-1/2 top-0 bottom-32 w-px bg-blue-900/20 hidden md:block">
            {/* The "Glow" progress line */}
            <div
                ref={lineRef}
                className="absolute top-0 left-0 w-full bg-gradient-to-bottom will-change-[height]"
                style={{
                    height: `0%`,
                    background: "linear-gradient(to bottom, #3b82f6 0%, #3b82f6 90%, transparent 100%)",
                    boxShadow: "0 0 15px rgba(59,130,246,0.3)"
                }}
            />

            {/* Moving light point at the tip */}
            <div
                ref={dotRef}
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)] border-2 border-[#020d1a] z-20 will-change-[top] -translate-y-[8px]"
                style={{ top: `0%` }}
            />
        </div>
    );
}

function BlogPostCard({ post, index }: { post: typeof BLOG_POSTS[0], index: number }) {
    const revealRef = useScrollReveal({ threshold: 0.1 });
    const isEven = index % 2 === 0;

    return (
        <div
            ref={revealRef}
            className={`reveal flex flex-col md:flex-row items-center w-full mb-24 md:mb-36 relative ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
            {/* Card half */}
            <div className={`w-full md:w-[45%] ${isEven ? "text-left md:text-right md:pr-12" : "text-left md:pl-12"}`}>
                <div
                    className="p-8 rounded-3xl relative overflow-hidden group transition-all duration-500 hover:scale-[1.02]"
                    style={{
                        background: "#04152b",
                        border: "1px solid rgba(59,130,246,0.08)",
                        boxShadow: "0 0 40px rgba(0,0,0,0.2)"
                    }}
                >
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        style={{ background: "radial-gradient(circle at top right, rgba(59,130,246,0.04), transparent 70%)" }} />

                    <div className="relative z-10">
                        <div className={`flex items-center gap-3 mb-4 ${isEven ? "md:justify-end" : "justify-start"}`}>
                            <span className="font-mono text-[11px] tracking-widest px-3 py-1 rounded-full"
                                style={{ background: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.15)" }}>
                                {post.category}
                            </span>
                        </div>

                        <h2 className="text-2xl font-bold leading-tight mb-4 group-hover:text-blue-400 transition-colors" style={{ color: "#e2eeff" }}>
                            {post.title}
                        </h2>

                        <p className="text-base font-sans leading-relaxed mb-8 opacity-70" style={{ color: "#94a3b8" }}>
                            {post.excerpt}
                        </p>

                        <div className={`flex items-center justify-between pt-6 border-t border-blue-500/5 ${isEven ? "md:flex-row-reverse" : "flex-row"}`}>
                            <span className="font-mono text-[10px] uppercase" style={{ color: "#1e4a7a" }}>SOURCE: {post.source}</span>
                            {post.isInternal ? (
                                <Link
                                    href={post.url}
                                    className="font-mono text-[11px] tracking-widest transition-colors flex items-center gap-2 group/btn"
                                    style={{ color: "#3b82f6" }}
                                >
                                    READ_INTEL <span className="group-hover/btn:translate-x-1 transition-transform">↗</span>
                                </Link>
                            ) : (
                                <a
                                    href={post.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-mono text-[11px] tracking-widest transition-colors flex items-center gap-2 group/btn"
                                    style={{ color: "#3b82f6" }}
                                >
                                    READ_INTEL <span className="group-hover/btn:translate-x-1 transition-transform">↗</span>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Middle point (Intersection) */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center w-8 h-8 z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-900/60 border border-blue-500/20 group-in-view:bg-blue-500 group-in-view:shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
            </div>

            {/* Date half (Empty space on mobile) */}
            <div className={`hidden md:block w-1/2 ${isEven ? "pl-12" : "pr-12 text-right"}`}>
                <p className="font-mono text-[13px] tracking-[0.3em] font-bold" style={{ color: "#1e4a7a" }}>
                    {post.date}
                </p>
                <div className="w-12 h-px bg-gradient-to-right from-blue-900/40 to-transparent mt-2 inline-block" />
            </div>
        </div>
    );
}

export default function BlogPage() {
    const revealRef = useScrollReveal();

    return (
        <div className="flex min-h-screen flex-col" style={{ background: "#020d1a" }}>
            <Navbar />

            <main className="flex-1 pt-32 pb-40">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">

                    {/* Header */}
                    <header ref={revealRef} className="reveal mb-32 border-b border-blue-500/10 pb-16 text-center">

                        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05]" style={{ color: "#e2eeff" }}>
                            AI insights for<br />
                            <span style={{ color: "#3b82f6" }}>Melbourne businesses.</span>
                        </h1>
                        <p className="mt-6 text-lg text-[#94a3b8] max-w-2xl mx-auto">
                            Automation, agents, and strategy — practical AI insights for Melbourne SMBs, plus frontier tech news from the world of AI research.
                        </p>
                    </header>

                    {/* Timeline Container */}
                    <div className="relative mt-24">
                        <TimelineLine />

                        <div className="relative flex flex-col items-center">
                            {BLOG_POSTS.map((post, idx) => (
                                <BlogPostCard key={post.id} post={post} index={idx} />
                            ))}
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-32 text-center p-16 rounded-[40px] relative overflow-hidden"
                        style={{ background: "rgba(59,130,246,0.02)", border: "1px dashed rgba(59,130,246,0.15)" }}>
                        <h3 className="text-2xl font-bold mb-4" style={{ color: "#e2eeff" }}>Stay in the loop.</h3>
                        <p className="text-base font-sans max-w-lg mx-auto mb-8" style={{ color: "#94a3b8" }}>
                            Our engineering team monitors search signals across 100+ research repositories daily.
                        </p>
                        <button className="px-8 py-3 rounded-full font-mono text-[12px] tracking-widest font-bold transition-all border border-blue-500/30 hover:bg-blue-500/10"
                            style={{ color: "#93c5fd" }}
                        >
                            ENQUIRE_FOR_PARTNERSHIP
                        </button>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
