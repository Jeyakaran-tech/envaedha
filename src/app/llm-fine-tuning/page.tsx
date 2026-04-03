import { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { FiCheckCircle, FiChevronRight } from "react-icons/fi";
import Link from "next/link";

export const metadata: Metadata = {
  title: "LLM Fine-Tuning Melbourne | Custom Neural Architectures | Envaedha",
  description: "Specialized LLM fine-tuning and retrieval-augmented generation (RAG) for Melbourne enterprise. Models aligned to your unique domain and regulatory constraints.",
};

const FEATURES = [
  "Custom model training for your specific industry",
  "Refined responses based on your team's feedback",
  "Secure processing of your unique business data",
  "Flexible hosting on-site or in the cloud",
];

export default function LlmFineTuningPage() {
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
            "name": "Custom LLM Fine-Tuning & RAG Melbourne",
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
            "description": "Specialized LLM fine-tuning and retrieval-augmented generation (RAG) for Melbourne enterprise. We align AI models to your unique domain expertise and regulatory requirements.",
            "areaServed": "Melbourne",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "LLM Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Domain-Specific Model Training"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Enterprise RAG Architectures"
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
              <p className="font-mono text-blue-500 tracking-[0.3em] mb-4 uppercase text-xs">// CUSTOM_MODELS</p>
              <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-[#e2eeff] leading-[1.1] mb-8">
                Models that speak <br />
                <span className="text-blue-500">your language.</span>
              </h1>
              <p className="text-[#cbd5e1] text-xl leading-relaxed max-w-xl mb-12">
                General AI is fine for general tasks. But your business is unique. We fine-tune models on your proprietary data, ensuring your systems understand your industry&apos;s terminology, regulations, and customer nuances.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/schedule-a-meeting" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white font-bold font-sans transition-all hover:bg-blue-500 active:scale-95 shadow-xl shadow-blue-900/20">
                  Book Model Consultation <FiChevronRight />
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full aspect-square md:aspect-video rounded-[40px] border border-blue-900/30 bg-blue-950/10 flex items-center justify-center relative overflow-hidden group shadow-[0_0_80px_rgba(59,130,246,0.15)]">
               <img 
                 src="/custom_ai_neural_data_ui_1775199668285.png" 
                 alt="Custom Neural AI Training Interface Architecture" 
                 className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-[2000ms]" 
               />
               <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-[#020d1a] via-transparent to-transparent opacity-80" />
               <div className="absolute bottom-8 left-8">
                  <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 font-mono text-[10px] tracking-widest uppercase">Training_Active // Epoch_42</span>
               </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-900/20 to-transparent mb-24" />

          {/* Deep Content: Fine-Tuning vs RAG */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 items-start">
             <div className="space-y-12">
                <div className="space-y-6">
                   <h2 className="text-3xl sm:text-4xl font-bold text-[#e2eeff]">The Engineering of <br />Domain Alignment</h2>
                   <p className="text-lg leading-relaxed text-[#94a3b8] font-sans">
                      Standard foundation models are trained on general internet data—leaving them blind to your industry-specific technicalities, internal acronyms, and operational logic. At Envaedha, we specialize in <strong>Domain-Driven Fine-Tuning</strong> using techniques like LoRA (Low-Rank Adaptation) and QLoRA.
                   </p>
                   <p className="text-lg leading-relaxed text-[#94a3b8] font-sans">
                      Our Melbourne team goes beyond simple prompting. we architect <strong>Retrieval-Augmented Generation (RAG)</strong> systems that allow your custom models to "read" your company's entire document knowledge base in real-time. This provides the AI with a long-term memory of every contract, report, and project file your company has ever produced, resulting in near-zero hallucuation rates.
                   </p>
                </div>
                
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10 space-y-6">
                   <h3 className="text-xl font-bold text-blue-400">Governance & Compliance</h3>
                   <p className="text-[#cbd5e1] leading-relaxed">
                      For finance, healthcare, and legal sectors in Melbourne, general cloud-based AI poses significant risk. We deploy <strong>Private-Cloud Neural Models</strong> that operate within your regulatory boundaries, ensuring sensitive intellectual property never leaves your controlled environment.
                   </p>
                </div>
             </div>

             <div className="space-y-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="p-8 rounded-3xl bg-[#010c18] border border-blue-900/20">
                      <div className="text-blue-500 mb-6 text-3xl font-bold italic">01.</div>
                      <h4 className="text-lg font-bold text-[#e2eeff] mb-3">Model Selection</h4>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">Evaluating Llama, Mistral, and Claude-based architectures for your specific speed vs cost requirements.</p>
                   </div>
                   <div className="p-8 rounded-3xl bg-[#010c18] border border-blue-900/20">
                      <div className="text-blue-500 mb-6 text-3xl font-bold italic">02.</div>
                      <h4 className="text-lg font-bold text-[#e2eeff] mb-3">Data Synthesising</h4>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">Cleaning and structured formatting of proprietary datasets for high-efficiency model training.</p>
                   </div>
                   <div className="p-8 rounded-3xl bg-[#010c18] border border-blue-900/20">
                      <div className="text-blue-500 mb-6 text-3xl font-bold italic">03.</div>
                      <h4 className="text-lg font-bold text-[#e2eeff] mb-3">Reinforcement (RLHF)</h4>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">Tuning model weights based on human feedback to align the 'tone' and 'intent' of responses.</p>
                   </div>
                   <div className="p-8 rounded-3xl bg-[#010c18] border border-blue-900/20">
                      <div className="text-blue-500 mb-6 text-3xl font-bold italic">04.</div>
                      <h4 className="text-lg font-bold text-[#e2eeff] mb-3">Low-Latency Hosting</h4>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">Optimizing inference engines for sub-second responses, even with massive context windows.</p>
                   </div>
                </div>
             </div>
          </div>

          {/* FAQ Section */}
          <section className="py-24 border-t border-blue-900/10">
             <div className="mb-16">
                <h2 className="text-4xl font-bold text-[#e2eeff] mb-4">Frequently Asked Questions</h2>
                <p className="text-blue-400 font-mono text-xs tracking-widest uppercase">// NEURAL_KNOWLEDGE_BASE</p>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                {[
                   {
                      q: "How much does LLM fine-tuning cost in Melbourne?",
                      a: "A custom LLM fine-tuning project typically ranges from $12,000 to $40,000 depending on the volume of training data and the complexity of the domain. This includes dataset curating, model evaluation, and deployment on private infrastructure."
                   },
                   {
                      q: "Why fine-tune when I can just use ChatGPT?",
                      a: "ChatGPT is generalized. If you need an AI that understands the specific Victorian building codes, or a particular legal workflow used only by your Melbourne firm, generic models will frequently hallucinate or provide overly broad answers. Fine-tuning provides the 1% deep domain expertise required for production."
                   },
                   {
                      q: "Where is the trained AI model hosted?",
                      a: "Envaedha offers flexible hosting. We can deploy to your private AWS/Azure/GCP environment, or setup local GPU-accelerated servers for maximum privacy. Your model is yours—you own the weights and the data used to train it."
                   },
                   {
                      q: "How often do we need to retrain our custom model?",
                      a: "For most dynamic businesses, we implement 'Automated RAG' which keeps the model updated daily without retraining. Hard fine-tuning is typically only required once every 6–12 months as your fundamental industry terminology evolves."
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
          <div className="p-12 sm:p-20 rounded-[48px] bg-gradient-to-br from-indigo-600 to-blue-900 text-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-[url('/grid-texture.png')] opacity-10 mix-blend-overlay" />
             <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">Ready to align AI with <br />your domain expertise?</h2>
                <Link href="/schedule-a-meeting" className="px-10 py-5 bg-white text-blue-900 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-2xl">
                   Start Model Assessment
                </Link>
             </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
