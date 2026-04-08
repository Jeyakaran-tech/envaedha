import { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";

export const metadata: Metadata = {
  title: "AI Scaling & Cloud Support Melbourne | Infrastructure & DevOps | Envaedha",
  description: "Deploy, scale, and maintain your AI systems with cloud-native infrastructure. Melbourne-based engineering support for AI-powered businesses.",
};

const CAPABILITIES = [
    { num: "01", title: "CLOUD INFRASTRUCTURE", desc: "Designing and deploying production-grade environments on AWS, GCP, or Azure tailored specifically for high-load AI tasks." },
    { num: "02", title: "CI/CD & DEVOPS", desc: "Automated build and deployment pipelines ensuring your team can ship features and model updates with extreme reliability." },
    { num: "03", title: "MODEL OBSERVABILITY", desc: "Real-time monitoring for model drift, token usage, and latency — ensuring AI performance doesn't degrade over time." },
    { num: "04", title: "COST OPTIMIZATION", desc: "Continuous auditing of cloud spend, right-sizing GPU compute and inference engines to maximize your operational margins." },
    { num: "05", title: "ENGINEERING SUPPORT", desc: "Dedicated, SLA-backed support from the same engineers who built your systems, available 24/7 for business-critical ops." },
];

export default function ScalingSupportPage() {
  return (
    <ServicePageLayout
      id="005"
      title="Scaling & Support"
      subtitle="Ensuring reliability at global scale."
      description="Deploy and maintain your AI systems with cloud-native infrastructure built for growth. From initial deployment to ongoing optimization, we keep your systems fast and resilient."
      capabilities={CAPABILITIES}
      heroVisual={
        <svg viewBox="0 0 120 120" fill="none" className="w-64 h-64">
            <polyline points="18,92 44,54 64,70 96,28" stroke="#3b82f6" strokeWidth="2" fill="none" opacity="0.6" />
            <circle cx="96" cy="28" r="5" fill="#3b82f6" opacity="0.8" />
            <line x1="18" y1="100" x2="102" y2="100" stroke="black" strokeWidth="1" opacity="0.1" />
            <line x1="18" y1="100" x2="18" y2="18" stroke="black" strokeWidth="1" opacity="0.1" />
        </svg>
      }
      ctaTitle="Ready to scale your AI infrastructure?"
    />
  );
}
