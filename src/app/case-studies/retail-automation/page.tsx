import { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import { FiChevronLeft, FiCheckCircle } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Retail + Logistics AI | Case Study | Envaedha",
  description: "How AI predictive technology optimized inventory and delivery logistics for a local Melbourne retailer.",
};

export default function RetailCaseStudy() {
  return (
    <div className="flex min-h-screen flex-col bg-[#020d1a]">
      <Navbar />
      <main className="flex-1 pt-32 pb-24 px-6 lg:px-12">
        <div className="mx-auto max-w-5xl">
          {/* Back link */}
          <Link href="/#case-studies" className="inline-flex items-center gap-2 text-blue-400 font-mono text-xs uppercase tracking-widest mb-12 hover:text-blue-300">
             <FiChevronLeft /> // BACK_TO_CASE_STUDIES
          </Link>

          {/* Hero Area */}
          <div className="mb-20">
            <h1 className="text-4xl sm:text-6xl font-bold text-[#e2eeff] leading-tight mb-8">
              Seamless <br />
              <span className="text-blue-500">Retail Logistics</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#cbd5e1] leading-relaxed max-w-3xl">
              We helped a growing Melbourne retailer transition from manual spreadsheets to a neural inventory management layer, achieving 90% reduction in fulfillment errors.
            </p>
          </div>

          {/* The Challenge & Outcome */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-16 border-t border-blue-900/10">
             <div>
                <h2 className="text-2xl font-bold text-[#e2eeff] mb-6">The Challenge</h2>
                <p className="text-[#94a3b8] leading-relaxed">
                   The retailer's manual tracking systems were failing as order volume tripled. Staff were spending 40+ hours per week manually matching SKU data across multiple CRM and logistics platforms, leading to frequent errors and delivery delays.
                </p>
             </div>
             <div>
                <h2 className="text-2xl font-bold text-[#e2eeff] mb-6">The Outcome</h2>
                <ul className="space-y-4">
                   {[
                     "90% reduction in SKU fulfillment errors",
                     "40 hours/week reclaimed from manual audits",
                     "24% increase in successful first-time delivery",
                     "Real-time inventory sync across 3 platforms"
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
               src="/ai_retail_commerce_warehouse_1775202761905.png" 
               className="w-full h-full object-cover opacity-80" 
               alt="Case study visual" 
             />
             <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-[#020d1a] via-transparent to-transparent opacity-60" />
          </div>

          <div className="text-center">
             <Link href="/schedule-a-meeting" className="px-10 py-4 bg-white text-black rounded-full font-bold transition-all hover:scale-105 inline-block">
                Automate Your Workflow
             </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
