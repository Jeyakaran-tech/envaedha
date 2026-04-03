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
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="flex-1">
              <p className="font-mono text-blue-500 tracking-[0.3em] mb-4 uppercase text-sm">// AGENTIC_SERVICES</p>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#e2eeff] leading-tight mb-6">
                Autonomous agents <br />
                <span className="text-blue-500">that do the work.</span>
              </h1>
              <p className="text-[#94a3b8] text-lg leading-relaxed max-w-xl mb-10">
                Moving beyond simple chat interfaces. We build AI agents for Melbourne SMEs and enterprise that execute complex, multi-step tasks across your entire software ecosystem.
              </p>
              <Link href="/schedule-a-meeting" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold font-sans transition-all hover:scale-105">
                Book Architecture Review <FiChevronRight />
              </Link>
            </div>
            <div className="flex-1 w-full aspect-video rounded-3xl border border-blue-900/30 bg-blue-950/10 flex items-center justify-center relative overflow-hidden group shadow-[0_0_50px_rgba(59,130,246,0.1)]">
               <img 
                 src="/autonomous_ai_agent_interface_1775199559450.png" 
                 alt="Autonomous AI Agent Interface" 
                 className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Deep Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-20 border-t border-blue-900/10">
            <div>
              <h2 className="text-3xl font-bold text-[#e2eeff] mb-6">Our Approach</h2>
              <p className="text-[#94a3b8] leading-relaxed mb-6">
                Generic AI often fails in production because it lacks the specific context of your business. Our Melbourne team builds custom AI assistants and automated workflows that are designed to be reliable, secure, and truly useful for your team.
              </p>
              <p className="text-[#94a3b8] leading-relaxed">
                Whether it&apos;s a digital researcher, an automated support assistant, or an operations manager, every AI we build is ready to deliver real results from day one.
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
