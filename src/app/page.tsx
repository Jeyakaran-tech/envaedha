import { Metadata } from "next";
import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import Hero from "../components/sections/hero";
import WhoWeAre from "../components/sections/who-we-are";
import Services from "../components/sections/services";

import Industries from "../components/sections/industries";
import Metrics from "../components/sections/metrics";
import CTASection from "../components/sections/cta-section";
import SolutionsStrategy from "../components/sections/solutions-strategy";

export const metadata: Metadata = {
  title: "AI Consulting Melbourne | Automation & AI Agents for SMBs | Envaedha",
  description: "Envaedha helps Melbourne small and medium businesses automate workflows, build AI agents, and unlock data insights. Book a free consultation.",
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col" style={{ background: "#0c0c0c" }}>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div id="who-we-are"><WhoWeAre /></div>
        <SolutionsStrategy />
        <div id="services"><Services /></div>
        <div id="industries"><Industries /></div>
        <div id="why-us"><Metrics /></div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}