import { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";

export const metadata: Metadata = {
  title: "LLM Fine-Tuning Melbourne | Custom Neural Architectures | Envaedha",
  description: "Specialized LLM fine-tuning and retrieval-augmented generation (RAG) for Melbourne enterprise. Models aligned to your unique domain and regulatory constraints.",
};

const CAPABILITIES = [
    { num: "01", title: "DOMAIN ALIGNMENT", desc: "Fine-tuning base models (Llama, Mistral, etc.) on your industry-specific jargon, regulations, and proprietary data." },
    { num: "02", title: "RAG ARCHITECTURE", desc: "Engineering deep Retrieval-Augmented Generation systems to ground your AI in real-time document knowledge." },
    { num: "03", title: "PRIVATE DEPLOYMENT", desc: "Hosting custom models on private infrastructure to ensure sensitive IP never leaves your regulatory boundary." },
    { num: "04", title: "REINFORCEMENT LEARNING", desc: "Using human-in-the-loop feedback (RLHF) to refine model weights for your specific brand tone and intent." },
    { num: "05", title: "LATENCY OPTIMIZATION", desc: "Optimizing inference engines to provide sub-second response times even with massive context windows and data." },
];

export default function LlmFineTuningPage() {
  return (
    <ServicePageLayout
      id="006"
      title="Custom LLM"
      subtitle="Models that speak your language."
      description="General AI is fine for general tasks. Your business is unique. We fine-tune models on your proprietary data, ensuring your systems understand your industry's nuances and terminology."
      capabilities={CAPABILITIES}
      heroVisual={
        <svg viewBox="0 0 120 120" fill="none" className="w-64 h-64">
            <rect x="25" y="25" width="70" height="70" rx="4" stroke="black" strokeWidth="1" opacity="0.1" />
            <path d="M40 50 Q60 30 80 50" stroke="#3b82f6" strokeWidth="2" fill="none" />
            <path d="M40 70 Q60 50 80 70" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.5" />
            <circle cx="60" cy="60" r="15" stroke="black" strokeWidth="1" opacity="0.2" />
        </svg>
      }
      ctaTitle="Ready to align AI with your domain expertise?"
    />
  );
}
