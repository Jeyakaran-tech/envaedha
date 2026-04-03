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
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
            <div className="flex-1">
              <p className="font-mono text-blue-500 tracking-[0.3em] mb-4 uppercase text-sm">// CUSTOM_MODELS</p>
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-[#e2eeff] leading-tight mb-6">
                Models that speak <br />
                <span className="text-blue-500">your language.</span>
              </h1>
              <p className="text-[#94a3b8] text-lg leading-relaxed max-w-xl mb-10">
                General AI is fine for general tasks. But your business is unique. We train AI models on your proprietary data, ensuring your systems understand your industry&apos;s terminology, regulations, and customer nuances.
              </p>
              <Link href="/schedule-a-meeting" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-bold font-sans transition-all hover:scale-105">
                Book Free Consultation <FiChevronRight />
              </Link>
            </div>
            <div className="flex-1 w-full aspect-video rounded-3xl border border-blue-900/30 bg-blue-950/10 flex items-center justify-center relative overflow-hidden group shadow-[0_0_50px_rgba(59,130,246,0.1)]">
               <img 
                 src="/custom_ai_neural_data_ui_1775199668285.png" 
                 alt="Custom Neural AI Training Interface" 
                 className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Deep Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-20 border-t border-blue-900/10">
            <div>
              <h2 className="text-3xl font-bold text-[#e2eeff] mb-6">Our Training Strategy</h2>
              <p className="text-[#94a3b8] leading-relaxed mb-6">
                Most companies struggle with generic AI because it doesn&apos;t know the specifics of their daily operations. Our Melbourne team specializes in training custom AI models that are light enough to run anywhere but smart enough to handle your specific workload.
              </p>
              <p className="text-[#94a3b8] leading-relaxed">
                We use modern training techniques to ensure your models are highly accurate while remaining fast and cost-effective to host.
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
