import { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { FiCheckCircle, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Agents Melbourne | Autonomous Agentic Workflows | Envaedha",
  description: "Deploy autonomous AI agents that plan, reason, and execute across your enterprise software stack. Melbourne-based engineering for production-ready agents.",
};

const FEATURES = [
  "Smart planning and automatic problem solving",
  "Fully connected to your existing software stack",
  "Reliable performance with built-in safety checks",
  "Continual learning from your business activity",
];

export default function AiAgentsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#020d1a]">
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
            "@type": "Service",
            "name": "Autonomous AI Agent Engineering Melbourne",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Envaedha",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Melbourne",
                "addressRegion": "VIC",
                "addressCountry": "AU"
              }
            },
            "description": "Custom autonomous AI agent design and deployment for Melbourne businesses. We build agents that plan, reason, and execute complex multi-step tasks across enterprise software stacks.",
            "areaServed": "Melbourne",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "AI Agent Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Autonomous Operations Agents"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Intelligent Customer Support Agents"
                  }
                }
              ]
            }
          }),
        }}
      />

      <main className="flex-1 pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="flex-1">
              <p className="font-mono text-blue-500 tracking-[0.3em] mb-4 uppercase text-xs">// AGENTIC_SERVICES</p>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#e2eeff] leading-[1.1] mb-8">
                Autonomous agents <br />
                <span className="text-blue-500">that do the work.</span>
              </h1>
              <p className="text-[#cbd5e1] text-xl leading-relaxed max-w-xl mb-12">
                Moving beyond simple chat interfaces. We build deterministic AI agents for Melbourne SMEs and enterprise that execute complex, multi-step tasks across your entire software ecosystem.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/schedule-a-meeting" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold font-sans transition-all hover:bg-blue-500 active:scale-95 shadow-xl shadow-blue-900/20">
                  Book Architecture Review <FiChevronRight />
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full aspect-square md:aspect-video rounded-[40px] border border-blue-900/30 bg-blue-950/10 flex items-center justify-center relative overflow-hidden group shadow-[0_0_80px_rgba(59,130,246,0.15)]">
               <img 
                 src="/autonomous_ai_agent_interface_1775199559450.png" 
                 alt="Autonomous AI Agent Interface Architecture" 
                 className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[2000ms]" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-[#020d1a] via-transparent to-transparent opacity-80" />
               <div className="absolute bottom-8 left-8">
                  <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 font-mono text-[10px] tracking-widest uppercase">System_Live // Prod_Link</span>
               </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-900/20 to-transparent mb-24" />

          {/* Deep Content: Engineering Differentiation */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-start">
             <div className="space-y-12">
                <div className="space-y-6">
                   <h2 className="text-3xl sm:text-4xl font-bold text-[#e2eeff]">The Deep Engineering of <br />Deterministic Agents</h2>
                   <p className="text-lg leading-relaxed text-[#94a3b8] font-sans">
                      At Envaedha, we differentiate between "generic AI chat" and true <strong>Agentic Workflows</strong>. Most off-the-shelf AI services rely on a single prompt-and-response cycle, which creates high variance and low reliability in commercial production environments. 
                   </p>
                   <p className="text-lg leading-relaxed text-[#94a3b8] font-sans">
                      Our Melbourne-based research team engineers agents based on <strong>ReAct</strong> (Reasoning + Acting) architectures. This allows the AI to plan a trajectory, observe the output of its actions (like querying a database or sending an email), and correct its path based on real-world feedback. By grounding the AI in deterministic tools, we eliminate hallucinations and ensure enterprise-grade accuracy.
                   </p>
                </div>
                
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
                   <h3 className="text-xl font-bold text-blue-400">Why choose Envaedha in Melbourne?</h3>
                   <p className="text-[#cbd5e1] leading-relaxed">
                      While global agencies offer high-level consulting, Envaedha provides hands-on <strong>Local AI Engineering</strong>. We don't just "advise" on agents; we build the custom neural interfaces and state management layers that allow them to live in your specific software stack without constant human oversight.
                   </p>
                </div>
             </div>

             <div className="space-y-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="p-8 rounded-3xl bg-[#010c18] border border-blue-900/20">
                      <div className="text-blue-500 mb-6 text-3xl font-bold italic">01.</div>
                      <h4 className="text-lg font-bold text-[#e2eeff] mb-3">Self-Correction</h4>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">Agents that double-check their own work against your business policies before final execution.</p>
                   </div>
                   <div className="p-8 rounded-3xl bg-[#010c18] border border-blue-900/20">
                      <div className="text-blue-500 mb-6 text-3xl font-bold italic">02.</div>
                      <h4 className="text-lg font-bold text-[#e2eeff] mb-3">Tool Integration</h4>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">Direct API connections to CRM, ERP, and communication tools (Slack, Teams, Email).</p>
                   </div>
                   <div className="p-8 rounded-3xl bg-[#010c18] border border-blue-900/20">
                      <div className="text-blue-500 mb-6 text-3xl font-bold italic">03.</div>
                      <h4 className="text-lg font-bold text-[#e2eeff] mb-3">Memory Layers</h4>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">Context-aware systems that remember long-term client preferences and project history.</p>
                   </div>
                   <div className="p-8 rounded-3xl bg-[#010c18] border border-blue-900/20">
                      <div className="text-blue-500 mb-6 text-3xl font-bold italic">04.</div>
                      <h4 className="text-lg font-bold text-[#e2eeff] mb-3">Safety Guards</h4>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">Hardcoded rail-checks ensuring no agent takes an action without appropriate permission.</p>
                   </div>
                </div>
             </div>
          </div>

          {/* FAQ Section */}
          <section className="py-24 border-t border-blue-900/10">
             <div className="mb-16">
                <h2 className="text-4xl font-bold text-[#e2eeff] mb-4">Frequently Asked Questions</h2>
                <p className="text-blue-400 font-mono text-xs tracking-widest uppercase">// AGENTIC_KNOWLEDGE_BASE</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                {[
                   {
                      q: "How much do AI agents cost in Melbourne?",
                      a: "Cost varies significantly based on complexity. For a production-ready autonomous agent at Envaedha, projects typically range from $8,000 to $25,000+. This includes full architecture design, tool integration, and 3 months of calibration to ensure zero-error execution."
                   },
                   {
                      q: "Will an AI agent replace my existing staff?",
                      a: "No. Our philosophy is 'Augmentation over Replacement'. Envaedha agents are designed to handle the 'manual debt' of your operations—the 20-30% of repetitive workflows that block your talented team from higher-value creative or strategic work."
                   },
                   {
                      q: "Is my business data secure with Envaedha AI agents?",
                      a: "Security is our first engineering principle. All agents we deploy in Melbourne use private VPC instances or local model hosting. Your data never leaves your environment for model training unless explicitly requested via secure fine-tuning pipelines."
                   },
                   {
                      q: "How long does it take to deploy an AI agent?",
                      a: "A typical pilot deployment takes 4–6 weeks. This includes 2 weeks of 'Shadow Mode' where the assistant observes your current workflows to ensure its decision-making logic mirrors your highest-performing team members."
                   }
                ].map((faq, i) => (
                   <div key={i} className="space-y-4">
                      <h3 className="text-xl font-bold text-[#e2eeff]">{faq.q}</h3>
                      <p className="text-[#94a3b8] leading-relaxed">{faq.a}</p>
                   </div>
                ))}
             </div>
          </section>

          {/* CTA Area */}
          <div className="p-12 sm:p-20 rounded-[48px] bg-gradient-to-br from-blue-600 to-indigo-900 text-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-[url('/nebula-texture.jpg')] opacity-10 mix-blend-overlay" />
             <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">Ready to deploy your <br />autonomous workforce?</h2>
                <Link href="/schedule-a-meeting" className="px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl">
                   Get Architecture Consultation
                </Link>
             </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
