"use client";

import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const BLOG_POSTS = [
    {
        id: "01",
        date: "MARCH 2026",
        category: "HARDWARE",
        title: "NVIDIA Rubin: The Trillion-Parameter Epoch",
        excerpt: "NVIDIA's Vera Rubin platform launches, promising a 10x reduction in training costs for massive models and redefining the efficiency of AI factories.",
        source: "NVIDIA Newsroom",
        url: "https://nvidianews.nvidia.com/news/nvidia-vera-rubin-platform",
    },
    {
        id: "02",
        date: "MARCH 2026",
        category: "RESEARCH",
        title: "TurboQuant: Google's 3-bit Breakthrough",
        excerpt: "Google Research unveils TurboQuant—a suite of advanced quantization algorithms including PolarQuant that compress LLMs without performance loss.",
        source: "Google Research",
        url: "https://research.google/blog/turboquant-redefining-ai-efficiency-with-extreme-compression/",
    },
    {
        id: "03",
        date: "MARCH 2026",
        category: "AGENTS",
        title: "The Agentic Shift: Gemini 3 & Claude 4.6",
        excerpt: "A deep dive into how Gemini 3 and Claude 4.6 are transitioning from static chat interfaces to autonomous agents capable of complex multi-step reasoning.",
        source: "Google Developers",
        url: "https://developers.googleblog.com/closing-the-knowledge-gap-with-agent-skills/",
    },
    {
        id: "04",
        date: "MARCH 2026",
        category: "MODELS",
        title: "OpenAI Deploys GPT-5.4 and GPT-5.4 Pro",
        excerpt: "The latest iteration of GPT-5 focuses on advanced tool-use and autonomous software engineering, directly integrated into the OpenAI API and ChatGPT.",
        source: "OpenAI Blog",
        url: "https://openai.com/index/introducing-gpt-5-4/",
    },
    {
        id: "05",
        date: "MARCH 2026",
        category: "INFRASTRUCTURE",
        title: "Lyria 3 Pro: DeepMind's Creative Core",
        excerpt: "Google DeepMind launches Lyria 3 Pro, a multimodal model that unified vision, audio, and reasoning benchmarks across creative industries.",
        source: "DeepMind Blog",
        url: "https://deepmind.google/blog/lyria-3-pro-multimodal-creative-intelligence/",
    },
    {
        id: "06",
        date: "MARCH 2026",
        category: "SECURITY",
        title: "Agentic SIEM: Databricks Lakewatch",
        excerpt: "Databricks introduces the first agentic security information and event management system, leveraging autonomous agents for real-time threat response.",
        source: "Databricks Blog",
        url: "https://www.databricks.com/blog/databricks-announces-lakewatch-new-open-agentic-siem",
    },
];

export default function BlogPage() {
    const revealRef = useScrollReveal();
    const gridRef = useScrollReveal<HTMLDivElement>({ threshold: 0.05 });

    return (
        <div className="flex min-h-screen flex-col" style={{ background: "#020d1a" }}>
            <Navbar />

            <main className="flex-1 pt-32 pb-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-12">

                    {/* Header */}
                    <header ref={revealRef} className="reveal mb-24 border-b border-blue-500/10 pb-16">
                        {/* <div className="flex items-center gap-3 mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <p className="font-mono text-[14px] tracking-[0.25em]" style={{ color: "#3b82f6" }}>// INTEL_FEED_V4.8</p>
                        </div> */}
                        <h1 className="text-5xl sm:text-6xl font-bold tracking-tight max-w-4xl leading-[1.05]" style={{ color: "#e2eeff" }}>
                            Signals from the<br />
                            <span style={{ color: "#3b82f6" }}>frontier of intelligence.</span>
                        </h1>
                        <p className="mt-8 text-xl font-sans max-w-2xl leading-relaxed" style={{ color: "#94a3b8" }}>
                            Curated insights and research breakthroughs synthesized for the engineering mind. Real-time updates from the global AI research labs.
                        </p>
                    </header>

                    {/* Blog Grid */}
                    <div ref={gridRef} className="reveal-stagger grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post) => (
                            <article
                                key={post.id}
                                className="group relative rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02]"
                                style={{
                                    background: "#04152b",
                                    border: "1px solid rgba(59,130,246,0.08)",
                                    boxShadow: "0 0 40px rgba(0,0,0,0.2)"
                                }}
                            >
                                {/* Hover glow */}
                                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                                    style={{ background: "radial-gradient(circle at top right, rgba(59,130,246,0.04), transparent 70%)" }} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-8">
                                        <span className="font-mono text-[11px] tracking-widest px-3 py-1 rounded-full"
                                            style={{ background: "rgba(59,130,246,0.08)", color: "#3b82f6", border: "1px solid rgba(59,130,246,0.15)" }}>
                                            {post.category}
                                        </span>
                                        <span className="font-mono text-[10px] tracking-widest" style={{ color: "#1e3a5f" }}>{post.date}</span>
                                    </div>

                                    <h2 className="text-xl font-bold leading-snug mb-4 group-hover:text-blue-400 transition-colors" style={{ color: "#c7dff7" }}>
                                        {post.title}
                                    </h2>

                                    <p className="text-base font-sans leading-relaxed mb-10 mt-auto" style={{ color: "#94a3b8" }}>
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between pt-6 border-t border-blue-500/5 mt-auto">
                                        <span className="font-mono text-[10px] uppercase" style={{ color: "#1e4a7a" }}>SOURCE: {post.source}</span>
                                        <a
                                            href={post.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="font-mono text-[12px] tracking-widest transition-colors flex items-center gap-2"
                                            style={{ color: "#3b82f6" }}
                                        >
                                            READ_FULL_SEC ↗
                                        </a>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className="mt-32 text-center p-16 rounded-[40px] relative overflow-hidden"
                        style={{ background: "rgba(59,130,246,0.02)", border: "1px dashed rgba(59,130,246,0.15)" }}>
                        <h3 className="text-2xl font-bold mb-4" style={{ color: "#e2eeff" }}>Stay at the frontier.</h3>
                        <p className="text-base font-sans max-w-lg mx-auto mb-8" style={{ color: "#94a3b8" }}>
                            Our engineering team monitors over 40 arXiv repositories and 100+ research blogs daily.
                        </p>
                        <button className="px-8 py-3 rounded-full font-mono text-[12px] tracking-widest font-bold transition-all"
                            style={{ background: "#3b82f6", color: "#fff" }}
                            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 0 20px rgba(59,130,246,0.4)"}
                            onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
                        >
                            ENQUIRE_FOR_RESEARCH_PARTNERSHIP
                        </button>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}
