import { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";

export const metadata: Metadata = {
  title: "AI Agents Melbourne | Autonomous Agentic Workflows | Envaedha",
  description: "Deploy autonomous AI agents that plan, reason, and execute across your enterprise software stack. Melbourne-based engineering for production-ready agents.",
  alternates: {
    canonical: "https://www.envaedha.com.au/ai-agents-melbourne",
  },
};

const CAPABILITIES = [
  { num: "01", title: "AGENT ORCHESTRATION", desc: "Building multi-agent systems that coordinate, debate, and solve complex problems without human interference." },
  { num: "02", title: "TOOL INTEGRATION", desc: "Connecting agents to your CRM, ERP, and communication stacks via secure API-calling architectures." },
  { num: "03", title: "MEMORY SYSTEMS", desc: "Engineering long-term context and vector-memory layers so agents remember user preferences and past project logic." },
  { num: "04", title: "REASONING LOOPS", desc: "Implementing ReAct and Chain-of-Thought patterns to ensure agents verify their own work before final execution." },
  { num: "05", title: "GUARDRAIL DEPLOYMENT", desc: "Strict deterministic safety layers that prevent hallucinations and ensure agents stay within operational boundaries." },
];

const SUB_SERVICES = [
  { label: "AGENT 001", title: "Agentic Workflows", description: "Designing end-to-end task flows where agents handle decision points and execution autonomously." },
  { label: "AGENT 002", title: "Custom Tooling", description: "Developing specific API wrappers and utility functions for agents to interact with your proprietary systems." },
  { label: "AGENT 003", title: "Multi-Agent Swarms", description: "Deploying groups of specialized agents that collaborate on large-scale data and operational tasks." },
  { label: "AGENT 004", title: "RAG Integration", description: "Empowering agents with real-time access to your internal documentation and knowledge bases." },
  { label: "AGENT 005", title: "Performance Tuning", description: "Continuous monitoring and optimization of agent reasoning paths to reduce latency and cost." },
];

export default function AiAgentsPage() {
  return (
    <ServicePageLayout
      id="003"
      title="Autonomous Agents"
      subtitle="Digital workers that plan, reason, and execute."
      description="Moving beyond simple chat interfaces. We build deterministic AI agents for Melbourne SMEs and enterprise that execute complex, multi-step tasks across your entire software ecosystem."
      capabilities={CAPABILITIES}
      subServices={SUB_SERVICES}
      heroVisual={
        <svg viewBox="0 0 120 120" fill="none" className="w-64 h-64">
          <circle cx="38" cy="60" r="15" stroke="black" strokeWidth="1.5" opacity="0.3" />
          <circle cx="82" cy="60" r="15" stroke="black" strokeWidth="1.5" opacity="0.3" />
          <circle cx="38" cy="60" r="5" fill="black" opacity="0.4" />
          <circle cx="82" cy="60" r="5" fill="black" opacity="0.4" />
          <line x1="53" y1="60" x2="67" y2="60" stroke="#3b82f6" strokeWidth="2" />
          <path d="M22 42 Q38 26 54 42" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.4" />
          <path d="M66 42 Q82 26 98 42" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.4" />
        </svg>
      }
      ctaTitle="Ready to deploy your autonomous workforce?"
    />
  );
}
