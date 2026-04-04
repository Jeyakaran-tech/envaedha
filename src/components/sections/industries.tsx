import Link from "next/link";


const INDUSTRIES = [
    {
        num: "I/001",
        title: "Travel & Tourism",
        desc: "Automate booking operations, synchronize dynamic pricing, and build intelligent customer service agents that handle high-volume inquiries flawlessly.",
        link: "/contact",
        action: "Build With Us",
    },
    {
        num: "I/002",
        title: "Retail & E-commerce",
        desc: "Deploy AI solutions that predict inventory needs, personalize customer journeys, and automate complex order fulfillment across all your channels.",
        link: "/contact",
        action: "Shape What's Next",
    },
    {
        num: "I/003",
        title: "Logistics & Supply Chain",
        desc: "Optimize route mapping, automate order tracking, and leverage predictive analytics to eliminate bottlenecks in your distribution network.",
        link: "/contact",
        action: "Take Your Operations Further",
    },
    {
        num: "I/004",
        title: "Professional Services",
        desc: "Streamline compliance, automate repetitive admin tasks, and unlock deeper insights from documents using secure, localized AI pipelines.",
        link: "/contact",
        action: "Scale Your Firm",
    },
];

export default function Industries() {
    return (
        <section className="bg-[#0c0c0c] text-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-16">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                        <span className="text-white/30 text-[11px] font-mono tracking-[0.2em] uppercase mb-6 block">
                            / Our Clients
                        </span>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                            We engage with:
                        </h2>
                    </div>
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-white/50 hover:text-white transition-colors pb-2 border-b border-white/20 hover:border-white/50"
                    >
                        View all case studies
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {INDUSTRIES.map((ind, i) => (
                        <div
                            key={ind.num}
                            className="group relative flex flex-col items-start pt-6 border-t border-white/10 hover:border-white/40 transition-colors duration-500"
                        >
                            <span className="font-mono text-[11px] text-white/30 mb-8 mt-2 block transition-colors duration-500 group-hover:text-white/70">
                                {ind.num}
                            </span>
                            
                            <h3 className="text-2xl font-semibold mb-4 tracking-tight">
                                {ind.title}
                            </h3>
                            
                            <p className="text-[14px] text-white/50 leading-relaxed mb-10 flex-grow">
                                {ind.desc}
                            </p>
                            
                            <Link
                                href={ind.link}
                                className="inline-flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em] text-white group-hover:text-[#a0a0a0] transition-colors mt-auto"
                            >
                                <span>{ind.action}</span>
                                <svg
                                    width="10"
                                    height="10"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                >
                                    <path
                                        d="M1 11L11 1M11 1H3.5M11 1V8.5"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
