import { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";

export const metadata: Metadata = {
  title: "AI Workflow Automation Melbourne | Intelligent Process Pipelines | Envaedha",
  description: "Eliminate manual operational bottlenecks with intelligent AI pipelines. Melbourne-based engineering for automating document processing and data workflows.",
  alternates: {
    canonical: "https://www.envaedha.com.au/workflow-automation",
  },
};

const CAPABILITIES = [
    { num: "01", title: "PROCESS AUDIT", desc: "Deep-mapping your existing operational manual debt to identify high-ROI automation opportunities." },
    { num: "02", title: "DOCUMENT PROCESSING", desc: "Deploying Intelligent Document Processing (IDP) systems that read, understand, and extract data from complex PDFs and forms." },
    { num: "03", title: "PIPELINE ORCHESTRATION", desc: "Building deterministic back-office workflows using n8n, Make, or custom Python orchestration layers." },
    { num: "04", title: "DATA SYNCHRONIZATION", desc: "Ensuring near real-time data consistency across siloed enterprise applications without manual entry." },
    { num: "05", title: "SELF-CORRECTING LOGIC", desc: "Engineering workflows that detect anomalies and route exceptions for human-in-the-loop review automatically." },
];

const SUB_SERVICES = [
    { label: "AUTO 001", title: "Document Ingestion", description: "Automated extraction and classification of data from legacy documents and unstructured PDFs." },
    { label: "AUTO 002", title: "Cross-App Sync", description: "Building data bridges between siloed SaaS platforms to ensure single-source-of-truth accuracy." },
    { label: "AUTO 003", title: "Email Automation", description: "Intelligent triage and automated responses for high-volume customer or operational email traffic." },
    { label: "AUTO 004", title: "Exception Handling", description: "Creating secure human-in-the-loop interfaces for edge cases that require manual intervention." },
    { label: "AUTO 005", title: "Auditability Labs", description: "Implementing comprehensive logging and compliance tracking for every automated business step." },
];

export default function WorkflowAutomationPage() {
  return (
    <ServicePageLayout
      id="004"
      title="Workflow Automation"
      subtitle="Engineering the frictionless enterprise."
      description="AI isn't just about chat — it's about results. We map your manual work processes and replace them with intelligent, self-correcting pipelines that never sleep."
      capabilities={CAPABILITIES}
      subServices={SUB_SERVICES}
      heroVisual={
        <svg viewBox="0 0 120 120" fill="none" className="w-64 h-64">
            <rect x="12" y="50" width="22" height="18" rx="3" stroke="black" strokeWidth="1.5" opacity="0.3" />
            <rect x="49" y="50" width="22" height="18" rx="3" stroke="black" strokeWidth="1.5" opacity="0.3" />
            <rect x="86" y="50" width="22" height="18" rx="3" stroke="#3b82f6" strokeWidth="1.5" />
            <line x1="34" y1="59" x2="49" y2="59" stroke="black" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.2" />
            <line x1="71" y1="59" x2="86" y2="59" stroke="black" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.2" />
            <circle cx="97" cy="51" r="4" fill="#3b82f6" opacity="0.5" />
        </svg>
      }
      ctaTitle="Ready to reclaim your operational capacity?"
    />
  );
}
