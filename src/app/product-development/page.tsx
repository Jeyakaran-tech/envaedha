import { Metadata } from "next";
import ServicePageLayout from "@/components/ui/service-page-layout";

export const metadata: Metadata = {
  title: "Product Development | SaaS, MVPs & Digital Transformation | Envaedha",
  description: "Envaedha's product development team nurtures your vision from prototype to high-scale SaaS production. Expert engineering for modern digital products.",
  alternates: {
    canonical: "https://www.envaedha.com.au/product-development",
  },
};

const CAPABILITIES = [
  { num: "01", title: "PROTOTYPES", desc: "Rapidly validating ideas through functional, high-fidelity prototypes that define the core user experience." },
  { num: "02", title: "MVP'S", desc: "Building the leanest version of your product that delivers maximum value to early adopters and validates market fit." },
  { num: "03", title: "SAAS DEVELOPMENT", desc: "Engineering scalable, multi-tenant cloud platforms with robust API architectures and modern frontends." },
  { num: "04", title: "DIGITAL TRANSFORMATION", desc: "Modernising legacy systems and workflows through intelligent cloud-native software integration." },
  { num: "05", title: "PRODUCT TRANSITION", desc: "Ensuring smooth handovers, scaling, and ongoing evolution as your product matures for the global market." },
];

const SUB_SERVICES = [
    { label: "PRDEV 001", title: "Fractional CTO", description: "Expert tech leadership without full-time commitment, tailored to your budget and needs." },
    { label: "PRDEV 002", title: "Technical Review", description: "We offer a comprehensive assessment of your tech stack, crafting a technical roadmap that aligns with your business goals." },
    { label: "PRDEV 003", title: "Team Extension", description: "Extend your team's capabilities with our experienced professionals, tackling project challenges without the hiring hassles." },
    { label: "PRDEV 004", title: "Frontend Development", description: "Our team crafts engaging, functional, and visually appealing UIs, enhancing user experience across devices." },
    { label: "PRDEV 005", title: "Backend Development", description: "Robust and scalable server-side solutions that power your applications with security and performance." },
    { label: "PRDEV 006", title: "Fullstack Specialists", description: "End-to-end development expertise covering everything from interface design to complex database architecture." },
    { label: "PRDEV 007", title: "Devops & Best Practices", description: "Streamlining development cycles and ensuring high availability with modern CI/CD and infrastructure-as-code." },
];

export default function ProductDevelopmentPage() {
  return (
    <ServicePageLayout
      id="002"
      title="Product Development"
      subtitle="Guiding your product vision."
      description="Our team transcends traditional coding capabilities. We're a dynamic collective of product development experts committed to nurturing your project at every phase. Let us empower your vision with unparalleled support and innovation."
      capabilities={CAPABILITIES}
      subServices={SUB_SERVICES}
      heroVisual={
        <svg viewBox="0 0 120 120" fill="none" className="w-64 h-64">
          <path d="M40 40 L55 35 V85 L40 80 Z" fill="black" opacity="0.8" />
          <path d="M50 40 L65 35 V85 L50 80 Z" fill="black" opacity="0.6" />
          <path d="M60 40 L75 35 V85 L60 80 Z" fill="black" opacity="0.4" />
          <path d="M70 40 L85 35 V85 L70 80 Z" fill="black" opacity="0.2" />
        </svg>
      }
      ctaTitle="Ready to build your next digital breakthrough?"
    />
  );
}
