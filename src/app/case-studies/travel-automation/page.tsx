import { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import Link from "next/link";
import { FiChevronLeft, FiCheckCircle } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Travel + Tourism AI | Case Study | Envaedha",
  description: "How AI transformed guest experiences and booking efficiency for a boutique Melbourne hotel group.",
};

export default function TravelCaseStudy() {
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
              Revolutionizing <br />
              <span className="text-blue-500">Boutique Tourism</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#cbd5e1] leading-relaxed max-w-3xl">
              We partnered with a Melbourne-based hotel group to automate guest communications, reducing front-desk workload by 40% while increasing direct booking rates by 15%.
            </p>
          </div>

          {/* The Challenge */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-16 border-t border-blue-900/10">
             <div>
                <h2 className="text-2xl font-bold text-[#e2eeff] mb-6">The Challenge</h2>
                <p className="text-[#94a3b8] leading-relaxed">
                   The group's central reservation team was overwhelmed by routine inquiries: local recommendations, check-in instructions, and availability updates. This led to slow response times and missed opportunities for direct bookings, as guests would flip to third-party sites for instant info.
                </p>
             </div>
             <div>
                <h2 className="text-2xl font-bold text-[#e2eeff] mb-6">The Outcome</h2>
                <ul className="space-y-4">
                   {[
                     "40% reduction in routine call volume",
                     "15% increase in direct bookings",
                     "98% customer satisfaction score",
                     "24/7 instant multilingual support"
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
               src="/ai_travel_tourism_reception_1775202704290.png" 
               className="w-full h-full object-cover opacity-80" 
               alt="Case study visual" 
             />
             <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-[#020d1a] via-transparent to-transparent opacity-60" />
          </div>

          <div className="text-center">
             <Link href="/schedule-a-meeting" className="px-10 py-4 bg-white text-black rounded-full font-bold transition-all hover:scale-105 inline-block">
                Start Your AI Transformation
             </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
