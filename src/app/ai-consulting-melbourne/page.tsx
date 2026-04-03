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

      {/* 
        ─────────────────────────────────────────────────────────
        JSON-LD SCHEMA (SEO)
        ─────────────────────────────────────────────────────────
      */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Envaedha - AI Consulting Melbourne",
            "image": "https://envaedha.com.au/melbourne_smb_ai_office_1775199622059.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Melbourne",
              "addressRegion": "VIC",
              "addressCountry": "AU"
            },
            "description": "Premier AI consulting for Melbourne small and medium businesses. Specialized in autonomous agents, LLM fine-tuning, and intelligent workflow automation designed for the Victorian business ecosystem.",
            "url": "https://envaedha.com.au/ai-consulting-melbourne",
            "telephone": "+61 400 000 000",
            "priceRange": "$$",
            "areaServed": "Melbourne",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Local AI Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Strategy & Consultation"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Local AI Agent Deployment"
                  }
                }
              ]
            }
          }),
        }}
      />

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
                <button className="px-10 py-4 bg-white text-black rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/10">
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
            <div className="mb-24 text-center">
               <h2 className="text-4xl sm:text-5xl font-bold text-[#e2eeff] mb-6">
                 Our Core Pillars of Efficiency
               </h2>
               <p className="text-[#94a3b8] max-w-xl mx-auto">Scaling Melbourne firms through research-driven deployment of frontier AI architectures.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
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

            {/* Local SEO FAQ Section */}
            <section className="py-24 border-t border-blue-900/10">
               <div className="mb-16">
                  <h2 className="text-4xl font-bold text-[#e2eeff] mb-4">Melbourne AI Strategy FAQ</h2>
                  <p className="text-blue-400 font-mono text-xs tracking-widest uppercase">// VICTORIAN_AI_SECTOR_INSIGHTS</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                  {[
                     {
                        q: "Why should a Melbourne business hire an AI consultant?",
                        a: "Local AI consulting ensures your technology strategy is aligned with the Victorian business landscape and specific regional regulations. Envaedha provides face-to-face architecture planning, ensuring your AI systems integrate with the local software stacks and operational norms unique to Melbourne's professional services and retail sectors."
                     },
                     {
                        q: "Does Envaedha offer on-site consulting in Melbourne CBD?",
                        a: "Yes. While we build globally-relevant technology, we believe the best AI strategy is born from deep local collaboration. We offer on-site workshops and architecture reviews for firms in Melbourne CBD, Cremorne, and surrounding innovation hubs."
                     },
                     {
                        q: "How does Envaedha compare to large global AI firms?",
                        a: "Most global firms provide high-level strategy but lack the 'hands-on' engineering depth for local SMBs. Envaedha is a research-led engineering firm—we don't just 'consult' on AI; we build the custom neural engines and agentic pipelines ourselves, right here in Melbourne."
                     },
                     {
                        q: "What is the typical ROI for AI consulting in Melbourne?",
                        a: "Our clients typically see a 3x-5x return on investment within the first 12 months. This is achieved through the elimination of 'manual labor debt'—the repetitive data tasks that slow down your team—and the implementation of predictive systems that capture previously lost market opportunities."
                     }
                  ].map((faq, i) => (
                     <div key={i} className="space-y-4 font-sans leading-relaxed">
                        <h3 className="text-xl font-bold text-[#e2eeff]">{faq.q}</h3>
                        <p className="text-[#94a3b8]">{faq.a}</p>
                     </div>
                  ))}
               </div>
            </section>
          </div>
        </section>

        {/* Melbourne SMB Focus & FAQ */}
        <section className="py-24 sm:py-32 bg-[#020d1a] border-t border-blue-900/10">
          <div className="mx-auto max-w-7xl px-6 lg:px-12">
            <div className="max-w-4xl mx-auto text-center mb-24">
               <h2 className="text-3xl sm:text-5xl font-bold text-[#e2eeff] mb-8">
                 Scaling Melbourne SMBs
               </h2>
               <p className="text-lg leading-relaxed text-[#94a3b8] font-sans">
                 Small and Medium Businesses are the backbone of the Victorian economy. Envaedha acts as your fractional AI engineering department, specializing in low-latency, high-impact implementations that integrate seamlessly with tools you already use. Our local presence in Melbourne means we are available for in-person consultations, architectural reviews, and ongoing support.
               </p>
            </div>

            <div className="mb-16">
               <h2 className="text-4xl font-bold text-[#e2eeff] mb-4 text-center">Melbourne AI Strategy FAQ</h2>
               <p className="text-blue-400 font-mono text-xs tracking-widest uppercase text-center">// VICTORIAN_AI_SECTOR_INSIGHTS</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
               {[
                  {
                     q: "Why should a Melbourne business hire an AI consultant?",
                     a: "Local AI consulting ensures your technology strategy is aligned with the Victorian business landscape and specific regional regulations. Envaedha provides face-to-face architecture planning, ensuring your AI systems integrate with the local software stacks and operational norms unique to Melbourne's professional services and retail sectors."
                  },
                  {
                     q: "Does Envaedha offer on-site consulting in Melbourne CBD?",
                     a: "Yes. While we build globally-relevant technology, we believe the best AI strategy is born from deep local collaboration. We offer on-site workshops and architecture reviews for firms in Melbourne CBD, Cremorne, and surrounding innovation hubs."
                  },
                  {
                     q: "How does Envaedha compare to large global AI firms?",
                     a: "Most global firms provide high-level strategy but lack the 'hands-on' engineering depth for local SMBs. Envaedha is a research-led engineering firm—we don't just 'consult' on AI; we build the custom neural engines and agentic pipelines ourselves, right here in Melbourne."
                  },
                  {
                     q: "What is the typical ROI for AI consulting in Melbourne?",
                     a: "Our clients typically see a 3x-5x return on investment within the first 12 months. This is achieved through the elimination of 'manual labor debt'—the repetitive data tasks that slow down your team—and the implementation of predictive systems that capture previously lost market opportunities."
                  }
               ].map((faq, i) => (
                  <div key={i} className="space-y-4 font-sans leading-relaxed">
                     <h3 className="text-xl font-bold text-[#e2eeff]">{faq.q}</h3>
                     <p className="text-[#94a3b8]">{faq.a}</p>
                  </div>
               ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
