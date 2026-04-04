import { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Scaling & Cloud Support Melbourne | Infrastructure & DevOps | Envaedha",
  description: "Deploy, scale, and maintain your AI systems with cloud-native infrastructure. Melbourne-based engineering support for AI-powered businesses.",
};

const CAPABILITIES = [
  {
    title: "Cloud Infrastructure Setup",
    desc: "Design and deploy production-grade cloud environments on AWS, GCP, or Azure tailored for AI workloads.",
  },
  {
    title: "CI/CD & DevOps Pipelines",
    desc: "Automated build, test, and deployment pipelines so your team ships faster with full confidence.",
  },
  {
    title: "Model Monitoring & Drift Detection",
    desc: "Real-time observability into your AI models — catch degradation early before it impacts business outcomes.",
  },
  {
    title: "Cost Optimisation Reviews",
    desc: "Audit your cloud and AI infrastructure spend. We identify waste and right-size your architecture.",
  },
  {
    title: "24/7 Engineering Support",
    desc: "Dedicated SLA-backed support from engineers who built your system. We're on call when it matters most.",
  },
];

export default function ScalingSupportPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#020d1a]">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-28 px-6 lg:px-16 border-b border-white/5">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[10px] tracking-[0.4em] text-blue-500/70 uppercase mb-6 font-bold">
            S/005 / SCALING
          </p>
          <h1 className="text-5xl sm:text-8xl font-bold text-[#ddeeff] tracking-tight leading-[1.02] max-w-4xl mb-8">
            Scaling &<br />Support
          </h1>
          <p className="text-[#7a9fc0] text-lg sm:text-xl leading-relaxed max-w-2xl mb-12">
            Deploy and maintain your AI systems with cloud-native infrastructure built for scale. From initial deployment to ongoing optimisation — we keep your systems fast, reliable, and cost-effective.
          </p>
          <Link href="/schedule-a-meeting">
            <button className="group flex items-center gap-3 px-8 py-4 bg-blue-600/15 border border-blue-500/30 rounded-full text-[11px] font-bold tracking-[0.2em] uppercase text-blue-400 hover:bg-blue-500/25 hover:text-white transition-all duration-300">
              Book a Discovery Call
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </Link>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 px-6 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase mb-16 font-bold">
            / CAPABILITIES
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.title}
                className="p-8 bg-white/[0.02] border border-white/[0.06] rounded-lg hover:border-blue-500/20 transition-colors"
              >
                <div className="font-mono text-[9px] tracking-widest text-blue-500/50 mb-4">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-[#ddeeff] mb-3">{cap.title}</h3>
                <p className="text-[#7a9fc0] text-sm leading-relaxed">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-16 border-t border-white/5">
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl sm:text-6xl font-bold text-[#ddeeff] mb-6 tracking-tight">
            Ready to scale?
          </h2>
          <p className="text-[#7a9fc0] text-lg mb-12 max-w-xl mx-auto">
            Let&apos;s talk about your infrastructure needs and build a support plan that grows with you.
          </p>
          <Link href="/schedule-a-meeting">
            <button className="px-10 py-4 bg-white text-black text-[11px] font-bold tracking-[0.2em] uppercase rounded-full hover:bg-white/90 transition-colors">
              Start the Conversation
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
