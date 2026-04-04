import { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import { FiChevronLeft, FiCheckCircle } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Finance + Strategy AI | Case Study | Envaedha",
  description: "How custom AI data engines provided real-time market signals for a Melbourne financial firm.",
};

export default function FinanceCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0c0c0c]">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="mx-auto max-w-5xl">
          {/* Back link */}
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-white/40 font-mono text-xs uppercase tracking-widest mb-12 hover:text-white transition-colors">
             <FiChevronLeft /> BACK_TO_CASE_STUDIES
          </Link>

          {/* Hero Area */}
          <div className="mb-20">
            <h1 className="text-4xl sm:text-6xl font-bold text-[#e2eeff] leading-tight mb-8">
              Data-Driven <br />
              <span className="text-blue-500">Finance Insights</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#cbd5e1] leading-relaxed max-w-3xl">
              We engineered a high-precision data ingestion layer for a Melbourne finance team, turning 6 hours of manual research into 20 minutes of automated summaries.
            </p>
          </div>

          {/* The Challenge & Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-16 border-t border-blue-900/10">
             <div>
                <h2 className="text-2xl font-bold text-[#e2eeff] mb-6">The Challenge</h2>
                <p className="text-[#94a3b8] leading-relaxed">
                   Investment strategists were drowning in raw unstructured market data across hundreds of daily reports and PDFs. Finding actionable signals was slow and prone to human oversight.
                </p>
             </div>
             <div>
                <h2 className="text-2xl font-bold text-[#e2eeff] mb-6">The Outcome</h2>
                <ul className="space-y-4">
                   {[
                     "95% reduction in daily manual research time",
                     "Real-time sentiment tracking of news feeds",
                     "Automated extraction of key financial KPIs",
                     "Seamless integration with legacy trading dashboards"
                   ].map((item) => (
                     <li key={item} className="flex items-center gap-3 text-[#cbd5e1]">
                        <FiCheckCircle className="text-blue-500 shrink-0" />
                        <span>{item}</span>
                     </li>
                   ))}
                </ul>
             </div>
          </div>

          {/* Image Placeholder Visual */}
          <div className="aspect-video rounded-[40px] overflow-hidden border border-blue-900/20 shadow-2xl relative mb-24">
             <img 
               src="/ai_finance_strategy_office_1775202825411.png" 
               className="w-full h-full object-cover opacity-80" 
               alt="Case study visual" 
             />
             <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-transparent opacity-60" />
          </div>

          <div className="text-center">
             <Link href="/schedule-a-meeting" className="px-10 py-4 bg-white text-black rounded-full font-bold transition-all hover:scale-105 inline-block">
                Unlock Your Data Potential
             </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
