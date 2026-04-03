"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export default function CTASection() {
    const cardRef = useScrollReveal({ threshold: 0.1 });
    const contentRef = useScrollReveal({ threshold: 0.1 });

    return (
        <section
            className="py-24 sm:py-32 relative overflow-hidden"
            style={{ background: "#020d1a" }}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10">
                <div
                    ref={cardRef}
                    className="reveal rounded-[48px] relative overflow-hidden shadow-[0_0_80px_rgba(59,130,246,0.08)] border border-blue-900/20 aspect-[21/10] sm:aspect-[21/9] flex items-center justify-center bg-[#010a15]"
                >
                    {/* Cinematic Background Image - STATIC */}
                    <div className="absolute inset-0 z-0">
                        <img 
                            src="/melbourne-cta-bg.jpg" 
                            alt="Melbourne Skyline at Sunset" 
                            className="w-full h-full object-cover"
                        />
                        {/* Subtle vignette for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#020d1a]/50 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Centered Glassmorphism Card - SMALLER */}
                    <div 
                        ref={contentRef}
                        className="reveal relative z-10 mx-6 sm:mx-0 w-full max-w-xl overflow-hidden rounded-[40px] border border-white/20 bg-white/5 p-10 sm:p-12 text-center backdrop-blur-xl shadow-2xl"
                    >
                        {/* Decorative Icon or Brand Mark */}
                        <div className="mb-8 flex justify-center">
                            <div className="w-12 h-1 bg-blue-500 rounded-full" />
                        </div>

                        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white mb-5 leading-tight">
                            Ready to enable AI <br />
                            strategically for your business?
                        </h2>
                        
                        <p className="text-[#cbd5e1] text-sm sm:text-base mb-8 max-w-sm mx-auto leading-relaxed">
                            Turn AI potential into real business results with custom engineering tailored to your operational needs.
                        </p>

                        <div className="flex justify-center">
                            <Link href="/schedule-a-meeting" className="w-full sm:w-auto">
                                <button
                                    className="w-full sm:w-auto px-10 py-4 rounded-full text-base font-bold tracking-tight transition-all active:scale-95 bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-600/20"
                                >
                                    Book a call
                                </button>
                            </Link>
                        </div>

                        {/* Subtle Glass Glows */}
                        <div className="absolute -top-16 -left-16 w-32 h-32 bg-blue-500/10 blur-[40px] rounded-full pointer-events-none" />
                        <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-purple-500/5 blur-[40px] rounded-full pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
}
