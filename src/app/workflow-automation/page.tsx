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
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">

          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="flex-1">
              <p className="font-mono text-blue-500 tracking-[0.3em] mb-4 uppercase text-sm">// SMART_AUTOMATION</p>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#e2eeff] leading-tight mb-6">
                Replace manual <br />
                <span className="text-blue-500">bottlenecks.</span>
              </h1>
              <p className="text-[#94a3b8] text-lg leading-relaxed max-w-xl mb-10">
                AI isn&apos;t just about chat — it&apos;s about results. We map your manual work processes and replace them with intelligent, self-correcting pipelines that never sleep.
              </p>
              <Link href="/schedule-a-meeting" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold font-sans transition-all hover:scale-105">
                Book Free Consultation <FiChevronRight />
              </Link>
            </div>
            <div className="flex-1 w-full aspect-video rounded-3xl border border-blue-900/30 bg-blue-950/10 flex items-center justify-center relative overflow-hidden group shadow-[0_0_50px_rgba(59,130,246,0.1)]">
              <img
                src="/workflow_automation_pipeline_ui_1775199591770.png"
                alt="Workflow Automation Pipeline Visualization"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Deep Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-20 border-t border-blue-900/10">
            <div>
              <h2 className="text-3xl font-bold text-[#e2eeff] mb-6">Our Strategy</h2>
              <p className="text-[#94a3b8] leading-relaxed mb-6">
                Simple automation often fails when it hits messy or unpredictable data. Our intelligent pipelines use AI to process unstructured documents and emails with near-perfect reliability.
              </p>
              <p className="text-[#94a3b8] leading-relaxed">
                By integrating directly with your existing technology stack, we create invisible systems that move your business faster and reclaim your team&apos;s time.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-[#e2eeff] mb-8">Service Deliverables</h2>
              <ul className="space-y-4">
                {FEATURES.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[#cbd5e1]">
                    <FiCheckCircle className="text-blue-500 shrink-0" size={18} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}
