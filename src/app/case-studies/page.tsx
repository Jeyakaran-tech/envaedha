import { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export const metadata: Metadata = {
    title: "Case Studies | AI Automation Success Stories | Envaedha",
    description: "Explore how Envaedha helped Melbourne businesses automate workflows and deploy AI agents to achieve measurable growth.",
};

const STUDIES = [
    {
        id: "CS-001",
        industry: "Travel + tourism",
        hook: "AI that transforms guest experiences and drives bookings",
        desc: "Guests today expect instant, personalised service around the clock. Yet, many tourism businesses are caught in a cycle of manual processes, delayed responses and missed opportunities.",
        img: "/ai_travel_tourism_reception_1775202704290.png",
        link: "/case-studies/travel-automation",
    },
    {
        id: "CS-002",
        industry: "Retail + logistics",
        hook: "Intelligent supply chains that predict and fulfill",
        desc: "Manual inventory tracking is a bottleneck for scale. We implemented a neural tracking layer that reduced fulfillment errors by 90% while freeing up 40 hours of staff time per week.",
        img: "/ai_retail_commerce_warehouse_1775202761905.png",
        link: "/case-studies/retail-automation",
    },
    {
        id: "CS-003",
        industry: "Finance + Strategy",
        hook: "Data-driven insights for elite decision making",
        desc: "Moving beyond spreadsheets into real-time decision engines. Our custom models parse thousands of data points to deliver clear, actionable signals for Melbourne's leading firms.",
        img: "/ai_finance_strategy_office_1775202825411.png",
        link: "/case-studies/finance-intelligence",
    },
];

export default function CaseStudiesPage() {
    return (
        <div className="flex min-h-screen flex-col" style={{ background: "#0c0c0c" }}>
            <Navbar />
            <main className="flex-1 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-16">
                    {/* Header */}
                    <div className="max-w-3xl mb-24">
                        <p className="font-mono text-[10px] tracking-[0.45em] text-white/25 uppercase mb-6 font-bold">
                            / CASE_STUDIES
                        </p>
                        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-8">
                            Measuring impact through <br />
                            <span className="text-white/40">engineered autonomy.</span>
                        </h1>
                        <p className="text-lg text-white/35 leading-relaxed max-w-xl">
                            We don't just ship code; we solve operational bottlenecks. Explore how our custom AI implementations have transformed workflows across Melbourne's core industries.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {STUDIES.map((study) => (
                            <Link
                                key={study.id}
                                href={study.link}
                                className="group relative flex flex-col bg-[#141414] border border-white/5 rounded-2xl overflow-hidden hover:border-white/10 transition-all duration-500"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[16/10] overflow-hidden">
                                    <img
                                        src={study.img}
                                        alt={study.industry}
                                        className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />
                                    
                                    <div className="absolute top-6 left-6">
                                        <span className="px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-mono font-bold tracking-widest text-white/70 border border-white/10 uppercase">
                                            {study.id}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-1">
                                    <p className="font-mono text-[10px] tracking-[0.25em] text-blue-400 uppercase mb-4 font-bold">
                                        {study.industry}
                                    </p>
                                    <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                                        {study.hook}
                                    </h2>
                                    <p className="text-sm text-white/40 leading-relaxed mb-8 line-clamp-3">
                                        {study.desc}
                                    </p>
                                    
                                    <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                                        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-white/60">View Case Study</span>
                                        <FiArrowUpRight className="text-white/40 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" size={20} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
