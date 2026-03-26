import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import Hero from "../components/sections/hero";
import WhoWeAre from "../components/sections/who-we-are";
import Services from "../components/sections/services";
import CaseStudies from "../components/sections/case-studies";
import Metrics from "../components/sections/metrics";
import CTASection from "../components/sections/cta-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col" style={{ background: "#020d1a" }}>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div id="who-we-are"><WhoWeAre /></div>
        <div id="services"><Services /></div>
        <div id="case-studies"><CaseStudies /></div>
        <div id="why-us"><Metrics /></div>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}