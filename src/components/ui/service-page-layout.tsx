import React from "react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";
import SubServicesStack from "@/components/sections/sub-services-stack";

interface Capability {
    num: string;
    title: string;
    desc: string;
}

interface SubService {
    label: string;
    title: string;
    description: string;
}

interface ServicePageLayoutProps {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    capabilities: Capability[];
    subServices?: SubService[];
    heroVisual: React.ReactNode;
    ctaTitle?: string;
    ctaHref?: string;
}

export default function ServicePageLayout({
    id,
    title,
    subtitle,
    description,
    capabilities,
    subServices = [],
    heroVisual,
    ctaTitle = "Ready to build your next digital breakthrough?",
    ctaHref = "/contact"
}: ServicePageLayoutProps) {
    return (
        <div className="flex min-h-screen flex-col bg-[#0c0c0c]">
            <Navbar />

            <main className="flex-1 pt-32 pb-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-16">

                    {/* Hero Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-32 items-center">
                        <div>
                            <p className="font-mono text-blue-500 tracking-[0.4em] mb-6 uppercase text-xs">// {id} / {title}</p>
                            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-white leading-[1.05] mb-10">
                                {subtitle}
                            </h1>
                            <p className="text-white/50 text-xl leading-relaxed max-w-xl">
                                {description}
                            </p>
                        </div>

                        <div className="relative aspect-square bg-white border border-white/5 rounded-3xl flex items-center justify-center p-12 overflow-hidden group">
                            {heroVisual}
                        </div>
                    </div>

                    <div className="h-px w-full bg-white/10 mb-32" />

                    {/* Capabilities List */}
                    <div className="max-w-4xl ml-auto mb-32">
                        <div className="border-t border-dashed border-white/20">
                            {capabilities.map((s) => (
                                <div key={s.num} className="group py-12 border-b border-dashed border-white/20 flex flex-col sm:grid sm:grid-cols-[100px_1fr_1.5fr] gap-8 items-start hover:bg-white/[0.01] px-4 transition-all">
                                    <span className="font-mono text-[11px] text-white/20 mt-1">{s.num}</span>
                                    <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors uppercase">
                                        {s.title}
                                    </h3>
                                    <p className="text-lg text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                                        {s.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Sub-Services Stacking Section */}
                {subServices.length > 0 && (
                    <div className="mt-32">
                        <SubServicesStack services={subServices} />
                    </div>
                )}

                <div className="mx-auto max-w-7xl px-6 lg:px-16 mt-32">
                    {/* CTA Area */}
                    <div className="text-center bg-blue-600/5 border border-blue-500/10 rounded-[60px] py-24 px-12 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -mr-48 -mt-48" />
                        <h2 className="text-4xl sm:text-6xl font-bold text-white mb-12 tracking-tight">
                            {ctaTitle.split('\n').map((line, i) => (
                                <React.Fragment key={i}>{line}<br /></React.Fragment>
                            ))}
                        </h2>
                        <Link href={ctaHref} className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl">
                            Let&apos;s Build Together <FiArrowRight />
                        </Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
