import { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import { FiMail, FiPhone, FiMapPin, FiClock } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Contact Envaedha | AI Consulting Melbourne",
  description: "Get in touch with Melbourne's leading AI engineering firm. Visit our Hampton Park office or book a digital architecture review.",
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0c0c0c]">
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
                    <p className="text-[#94a3b8] text-sm">5a Dianna Ct, Hampton Park, VIC 3976</p>
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
            <div className="rounded-3xl border border-white/5 bg-[#141414] overflow-hidden relative min-h-[400px]">
              {/* Actual Google Map Embed (Filtered for Dark Mode) */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3142.1617792308325!2d145.28082089999998!3d-38.04331659999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad610fa8476475f%3A0xddcdabaff72a4c15!2s5A%20Dianna%20Ct%2C%20Hampton%20Park%20VIC%203976!5e0!3m2!1sen!2sau!4v1775471835264!5m2!1sen!2sau" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)' }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps - Envaedha Hampton Park Office"
              ></iframe>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
