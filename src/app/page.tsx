import Navbar from "../components/ui/navbar";
import Footer from "../components/ui/footer";
import Hero from "../components/sections/hero";
import Services from "../components/sections/services";
import CTASection from "../components/sections/cta-section";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}