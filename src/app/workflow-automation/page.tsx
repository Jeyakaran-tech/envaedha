import { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { FiCheckCircle, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Workflow Automation Melbourne | Intelligent Process Pipelines | Envaedha",
  description: "Eliminate manual operational bottlenecks with intelligent AI pipelines. Melbourne-based engineering for automating document processing and data workflows.",
};

const FEATURES = [
  "Automated reading and processing of complex documents",
  "Smart data extraction from emails, forms, and PDFs",
  "Fully automated tasks that run 24/7 without error",
  "Native connection with your current business software",
];

export default function WorkflowAutomationPage() {
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
            "name": "Intelligent AI Workflow Automation Melbourne",
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
            "description": "Automate manual business bottlenecks with intelligent AI pipelines. Specialized in document processing, email automation, and end-to-end operational workflows for Melbourne firms.",
            "areaServed": "Melbourne",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Workflow Automation Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Intelligent Document Processing (IDP)"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Self-Correcting Data Pipelines"
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
              <p className="font-mono text-blue-500 tracking-[0.3em] mb-4 uppercase text-xs">// SMART_AUTOMATION</p>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#e2eeff] leading-[1.1] mb-8">
                Replace manual <br />
                <span className="text-blue-500">bottlenecks.</span>
              </h1>
              <p className="text-[#cbd5e1] text-xl leading-relaxed max-w-xl mb-12">
                AI isn&apos;t just about chat — it&apos;s about results. We map your manual work processes and replace them with intelligent, self-correcting pipelines that never sleep.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/schedule-a-meeting" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold font-sans transition-all hover:bg-blue-500 active:scale-95 shadow-xl shadow-blue-900/20">
                  Book Workflow Consultation <FiChevronRight />
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full aspect-square md:aspect-video rounded-[40px] border border-blue-900/30 bg-blue-950/10 flex items-center justify-center relative overflow-hidden group shadow-[0_0_80px_rgba(59,130,246,0.15)]">
              <img
                src="/workflow_automation_pipeline_ui_1775199591770.png"
                alt="Workflow Automation Pipeline Visualization Architecture"
                className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[2000ms]"
              />
              <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-[#020d1a] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-8 left-8">
                  <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 font-mono text-[10px] tracking-widest uppercase">Pipeline_Active // Sync_100ms</span>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-900/20 to-transparent mb-24" />

          {/* Deep Content: Operational Engineering */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-start">
             <div className="space-y-12">
                <div className="space-y-6">
                   <h2 className="text-3xl sm:text-4xl font-bold text-[#e2eeff]">Engineering Efficiency: <br />Beyond Simple RPA</h2>
                   <p className="text-lg leading-relaxed text-[#94a3b8] font-sans">
                      Traditional Robotic Process Automation (RPA) fails when it encounters "messy" data—handwritten notes, complex emails, or non-standard PDFs. At Envaedha, we build <strong>Intelligent Document Processing (IDP)</strong> systems that use neural extraction to understand context, not just follow rules.
                   </p>
                   <p className="text-lg leading-relaxed text-[#94a3b8] font-sans">
                      Our Melbourne-based approach treats your operations as a high-performance software pipeline. We engineer <strong>Self-Correcting Workflows</strong> that can identify data anomalies and route them for human-in-the-loop review only when necessary. This allows for 99%+ automation rates in sectors like logistics, legal document review, and high-volume finance processing.
                   </p>
                </div>
                
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
                   <h3 className="text-xl font-bold text-blue-400">Scale Without Headcount</h3>
                   <p className="text-[#cbd5e1] leading-relaxed">
                      For growing Melbourne SMEs, the goal isn't just to work faster—it's to <strong>Scale Linearly</strong>. Our intelligent automation ensures that as your order volume or client base triples, your back-office operational costs remain nearly flat. This is the ultimate competitive advantage in the Australian market.
                   </p>
                </div>
             </div>

             <div className="space-y-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="p-8 rounded-3xl bg-[#010c18] border border-blue-900/20">
                      <div className="text-blue-500 mb-6 text-3xl font-bold italic">01.</div>
                      <h4 className="text-lg font-bold text-[#e2eeff] mb-3">Neural Ingestion</h4>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">Extracting structured data from highly unstructured sources (Emails, Invoices, Slacks) with near-perfect accuracy.</p>
                   </div>
                   <div className="p-8 rounded-3xl bg-[#010c18] border border-blue-900/20">
                      <div className="text-blue-500 mb-6 text-3xl font-bold italic">02.</div>
                      <h4 className="text-lg font-bold text-[#e2eeff] mb-3">Cross-Platform Sync</h4>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">Synchronizing data across siloed enterprise apps without manual entry or data duplication errors.</p>
                   </div>
                   <div className="p-8 rounded-3xl bg-[#010c18] border border-blue-900/20">
                      <div className="text-blue-500 mb-6 text-3xl font-bold italic">03.</div>
                      <h4 className="text-lg font-bold text-[#e2eeff] mb-3">Decision Logic</h4>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">Implementing complex conditional logic that mirrors your firm's highest-performing operational rules.</p>
                   </div>
                   <div className="p-8 rounded-3xl bg-[#010c18] border border-blue-900/20">
                      <div className="text-blue-500 mb-6 text-3xl font-bold italic">04.</div>
                      <h4 className="text-lg font-bold text-[#e2eeff] mb-3">Health Monitoring</h4>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">Continuous tracking of pipeline performance, with automated alerts for any business-critical deviations.</p>
                   </div>
                </div>
             </div>
          </div>

          {/* FAQ Section */}
          <section className="py-24 border-t border-blue-900/10">
             <div className="mb-16">
                <h2 className="text-4xl font-bold text-[#e2eeff] mb-4">Frequently Asked Questions</h2>
                <p className="text-blue-400 font-mono text-xs tracking-widest uppercase">// AUTOMATION_KNOWLEDGE_BASE</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                {[
                   {
                      q: "How much does AI workflow automation cost in Melbourne?",
                      a: "A production-grade AI pipeline typically ranges from $7,000 to $20,000 depending on the number of systems being integrated and the complexity of the data extraction requirements. We focus on pipelines that pay for themselves within 6-9 months through reclaimed labor hours."
                   },
                   {
                      q: "What systems can Envaedha automate?",
                      a: "If it has an API, we can automate it. This includes modern SaaS like Salesforce, HubSpot, and Slack, as well as legacy on-premise systems via secure bridge architectures. We specialize in the difficult 'last mile' manual tasks that off-the-shelf automation tools miss."
                   },
                   {
                      q: "Is AI automation safer than manual entry?",
                      a: "Yes. Human error is the primary cause of data corruption in SMB operations. Our AI pipelines are deterministic and consistent—they don't get tired, and they check every output against pre-defined business rules before committing data."
                   },
                   {
                      q: "Will we need a dedicated developer to maintain this?",
                      a: "No. Envaedha offers 'Automation as a Service'. We monitor and maintain the health of your pipelines externally, ensuring they adapt as your source software (e.g. your CRM) updates its APIs or data structures."
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
          <div className="p-12 sm:p-20 rounded-[48px] bg-gradient-to-br from-blue-700 to-indigo-900 text-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-[url('/workflow-pattern.png')] opacity-10 mix-blend-overlay" />
             <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">Ready to reclaim your <br />operational capacity?</h2>
                <Link href="/schedule-a-meeting" className="px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl">
                   Engineer Your Pipeline
                </Link>
             </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
