import { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Contact Envaedha | AI Consulting Melbourne",
  description: "Get in touch with Melbourne's leading AI engineering firm. Visit our Collins Street office or book a digital architecture review.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info */}
            <div className="flex flex-col gap-10">
              <div>
                <p className="font-mono text-blue-500 tracking-[0.3em] mb-4 uppercase text-sm">// CONTACT_US</p>
                <h1 className="text-5xl font-bold tracking-tight text-[#e2eeff] leading-tight mb-6">
                  Let&apos;s build the <br />
                  <span className="text-blue-500">intelligence layer.</span>
                </h1>
                <p className="text-[#94a3b8] text-lg leading-relaxed max-w-md">
                  Whether you&apos;re looking to deploy autonomous agents or fine-tune local models, our engineering team is ready to map your architecture.
                </p>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <FiMapPin className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#c7dff7] mb-1">Melbourne Office</h3>
                    <p className="text-[#94a3b8] text-sm">Collins Street, Melbourne VIC 3000</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <FiMail className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#c7dff7] mb-1">Email</h3>
                    <p className="text-[#94a3b8] text-sm">admin@envaedha.com.au</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <FiClock className="text-blue-400" size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#c7dff7] mb-1">Business Hours</h3>
                    <p className="text-[#94a3b8] text-sm">Mon-Fri: 9:00 AM — 6:00 PM AEST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder / Form Area */}
            <div className="rounded-3xl border border-blue-900/30 bg-[#020d1a] overflow-hidden relative min-h-[400px]">
              {/* Actual Google Map Embed (Filtered for Dark Mode) */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9631!3d-37.8136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b8c5a24293%3A0xa1d5d5d8d5d5a1d5!2sCollins%20St%2C%20Melbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps - Envaedha Melbourne Office"
              ></iframe>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
