"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function CTASection() {
    const contentRef = useScrollReveal({ threshold: 0.1 });

    return (
        <section className="py-24 sm:py-32 relative overflow-hidden bg-[#0c0c0c]">
            <div className="absolute top-0 inset-x-0 h-px bg-white/5" />

            <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
                <div
                    ref={contentRef}
                    className="reveal relative rounded-2xl overflow-hidden aspect-[21/10] sm:aspect-[21/8] flex items-center justify-center border border-white/[0.06]"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src="/melbourne-cta-bg.jpg"
                            alt="Melbourne Skyline"
                            className="w-full h-full object-cover opacity-30"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 text-center px-6 sm:px-12 max-w-2xl mx-auto">
                        <p className="font-mono text-[10px] tracking-[0.45em] text-white/30 uppercase mb-6 font-bold">
                            / START A PROJECT
                        </p>
                        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white mb-5 leading-[1.1]">
                            Ready to enable AI<br />
                            strategically for your business?
                        </h2>
                        <p className="text-white/40 text-base mb-10 max-w-md mx-auto leading-relaxed">
                            Turn AI potential into real business results with custom engineering tailored to your operational needs.
                        </p>
                        <Link href="/schedule-a-meeting">
                            <button className="group px-10 py-4 rounded-full text-sm font-bold tracking-wide bg-white text-black hover:bg-white/90 transition-all duration-300 active:scale-95">
                                Book a call
                                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
