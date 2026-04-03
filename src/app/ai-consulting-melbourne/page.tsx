import { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import CTASection from "@/components/sections/cta-section";
import Link from "next/link";

import SolutionsStrategy from "@/components/sections/solutions-strategy";

export const metadata: Metadata = {
  title: "AI Consulting Melbourne | Envaedha",
  description: "Specialized AI consulting for Melbourne small and medium businesses. We build autonomous AI agents, intelligent workflow automation, and predictive data solutions.",
};

export default function MelbourneLandingPage() {
  return (
    <div className="flex min-h-screen flex-col" style={{ background: "#020d1a" }}>
      <Navbar />

      <main className="flex-1">
        {/* Simple Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden border-b border-blue-900/10">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 blur-[120px] rounded-full" />
          </div>

          <div className="mx-auto max-w-7xl px-6 lg:px-12 relative z-10 text-center">
            <p className="font-mono text-[13px] tracking-[0.3em] text-blue-400 mb-8 uppercase">
              // FRONTIER.TECHNOLOGY.MELBOURNE
            </p>
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#e2eeff] leading-tight mb-8">
              AI Consulting for <span className="text-blue-500">Melbourne SMBs</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl text-[#94a3b8] leading-relaxed mb-12">
              Transforming Melbourne SMBs through custom neural architectures, autonomous agents, and intelligent workflow automation. Engineering local growth with global-scale technology.
            </p>
            <div className="flex justify-center">
              <Link href="/schedule-a-meeting">
                <button className="px-10 py-4 bg-white text-black rounded-full font-bold transition-all hover:scale-105 active:scale-95">
                  Initialize Free Consultation
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Introduction Visual */}
        <section className="py-24 sm:py-32 border-b border-blue-900/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-12 mb-20 text-center">
             <div className="relative aspect-[21/9] rounded-[40px] overflow-hidden border border-blue-900/20 shadow-[0_0_50px_rgba(59,130,246,0.15)]">
               <img 
                 src="/melbourne_smb_ai_office_1775199622059.png" 
                 alt="Melbourne AI Consulting for SMBs" 
                 className="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-105" 
               />
               <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-[#020d1a] via-transparent to-transparent opacity-80" />
               <div className="absolute bottom-12 left-12 text-left">
                  <h2 className="text-3xl sm:text-5xl font-bold text-[#e2eeff] mb-4">Empowering the <br />Victorian Ecosystem</h2>
                  <p className="text-blue-400 font-mono tracking-widest text-xs">// LOCAL_FOCUS_GLOBAL_TECH</p>
               </div>
            </div>
          </div>
        </section>

        {/* Humatic-type Strategy Section */}
        <SolutionsStrategy />

        {/* The Three Pillars */}
        <section className="py-24 sm:py-32 relative overflow-hidden bg-[#010c18]">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <h2 className="text-center text-4xl sm:text-5xl font-bold text-[#e2eeff] mb-20">
              Our Core Pillars of Efficiency
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Pillar 1: Automation */}
              <div className="p-8 rounded-3xl border border-blue-900/20 bg-blue-950/10 hover:border-blue-500/30 transition-all group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 font-mono font-bold mb-6 group-hover:scale-110 transition-transform">
                  01
                </div>
                <h3 className="text-2xl font-bold text-[#e2eeff] mb-4">Intelligent Automation</h3>
                <p className="text-[#94a3b8] leading-relaxed mb-6">
                  AI workflow automation in Melbourne isn&apos;t just about saving time—it&apos;s about reallocating your most valuable resources to high-impact strategy. We map your current manual processes and replace them with custom neural pipelines.
                </p>
                <Link href="/workflow-automation" className="text-blue-400 font-mono text-sm tracking-widest hover:text-blue-300 transition-colors uppercase">
                  Explore_Automation ↗
                </Link>
              </div>

              {/* Pillar 2: AI Agents */}
              <div className="p-8 rounded-3xl border border-blue-900/20 bg-blue-950/10 hover:border-blue-500/30 transition-all group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 font-mono font-bold mb-6 group-hover:scale-110 transition-transform">
                  02
                </div>
                <h3 className="text-2xl font-bold text-[#e2eeff] mb-4">Autonomous AI Agents</h3>
                <p className="text-[#94a3b8] leading-relaxed mb-6">
                  We build AI agents for Melbourne businesses that don&apos;t just chat—they execute. These agents act as digital employees capable of handling scheduling, research, and multi-step reasoning across your entire software stack.
                </p>
                <Link href="/ai-agents-melbourne" className="text-blue-400 font-mono text-sm tracking-widest hover:text-blue-300 transition-colors uppercase">
                  See_Agentic_Systems ↗
                </Link>
              </div>

              {/* Pillar 3: LLMs */}
              <div className="p-8 rounded-3xl border border-blue-900/20 bg-blue-950/10 hover:border-blue-500/30 transition-all group">
                <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 font-mono font-bold mb-6 group-hover:scale-110 transition-transform">
                  03
                </div>
                <h3 className="text-2xl font-bold text-[#e2eeff] mb-4">LLM Fine-Tuning</h3>
                <p className="text-[#94a3b8] leading-relaxed mb-6">
                  Models aligned to your domain. We fine-tune high-performance language models on your proprietary data, ensuring your AI systems adhere to your unique technical and regulatory requirements.
                </p>
                <Link href="/llm-fine-tuning" className="text-blue-400 font-mono text-sm tracking-widest hover:text-blue-300 transition-colors uppercase">
                  Fine_Tuning_Models ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Melbourne SMB Focus */}
        <section className="py-24 sm:py-32 bg-[#020d1a]">
          <div className="mx-auto max-w-4xl px-6 lg:px-12 text-center">
            <h2 className="text-3xl sm:text-5xl font-bold text-[#e2eeff] mb-12">
              Scaling Melbourne SMBs
            </h2>
            <div className="space-y-8 text-lg leading-relaxed text-[#94a3b8] font-sans">
              <p>
                Small and Medium Businesses are the backbone of the Victorian economy. However, the "AI revolution" can often feel overwhelming for teams without a dedicated CTO. Envaedha acts as your fractional AI engineering department.
              </p>
              <p>
                We specialize in low-latency, high-impact implementations that integrate seamlessly with tools you already use. Our local presence in Melbourne means we are available for in-person consultations, architectural reviews, and ongoing support that purely digital agencies cannot match.
              </p>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
