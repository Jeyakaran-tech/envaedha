import { Metadata } from "next";
import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";
import Expertise from "../../components/sections/expertise";
import CTASection from "../../components/sections/cta-section";

export const metadata: Metadata = {
  title: "Expertise | AI Neural Stacks & Autonomous Intelligence | Envaedha",
  description: "Explore Envaedha's technical expertise in PyTorch, LangChain, Cloud Infrastructure, and Vector Databases. Battle-tested stacks for production AI.",
};

export default function ExpertisePage() {
  return (
    <div className="flex min-h-screen flex-col" style={{ background: "#0c0c0c" }}>
      <Navbar />
      <main className="flex-1 mt-20">
        <Expertise />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
