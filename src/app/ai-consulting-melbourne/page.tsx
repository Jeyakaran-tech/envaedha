import { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";

export const metadata: Metadata = {
  title: "AI Consulting Melbourne | Strategy & Fractional CTO | Envaedha",
  description: "Specialized AI consulting for Melbourne small and medium businesses. From strategy and fractional CTO advisory to custom autonomous architectures.",
};

const CAPABILITIES = [
    { num: "01", title: "STRATEGIC AUDIT", desc: "Analyzing your current infrastructure to identify high-impact AI opportunities and operational bottlenecks." },
    { num: "02", title: "FRACTIONAL CTO", desc: "Access to elite engineering leadership without the full-time overhead, guiding your technical roadmap." },
    { num: "03", title: "ARCHITECTURE DESIGN", desc: "Engineering deterministic, scalable, and secure neural architectures tailored to your unique data stacks." },
    { num: "04", title: "FEASIBILITY ANALYSIS", desc: "Deep-dive technical validation of AI concepts before significant capital investment and development." },
    { num: "05", title: "GOVERNANCE & SAFETY", desc: "Establishing strict data privacy, model guardrails, and regulatory compliance for your AI integration." },
];

export default function AiConsultingPage() {
  return (
    <ServicePageLayout
      id="001"
      title="Advisory"
      subtitle="Strategic guidance for autonomous growth."
      description="Gain clarity in the noise of the AI revolution. We provide battle-tested strategy and fractional CTO leadership to ensure your technical investments drive measurable business outcomes."
      capabilities={CAPABILITIES}
      heroVisual={
        <svg viewBox="0 0 120 120" fill="none" className="w-64 h-64">
            <circle cx="60" cy="60" r="40" stroke="black" strokeWidth="1" opacity="0.1" />
            <circle cx="60" cy="60" r="25" stroke="black" strokeWidth="1" opacity="0.2" />
            <circle cx="60" cy="60" r="10" fill="black" opacity="0.5" />
            <line x1="60" y1="20" x2="60" y2="100" stroke="black" strokeWidth="1" opacity="0.1" />
            <line x1="20" y1="60" x2="100" y2="60" stroke="black" strokeWidth="1" opacity="0.1" />
            <path d="M30 60 A30 30 0 0 1 90 60" stroke="black" strokeWidth="2" fill="none" opacity="0.6" />
        </svg>
      }
      ctaTitle="Ready to define your AI roadmap?"
    />
  );
}
