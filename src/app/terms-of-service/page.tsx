import { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Terms of Service | Envaedha",
  description: "Terms of Service for Envaedha AI consulting and engineering services.",
};

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0c0c0c]">
      <Navbar />
      <main className="flex-1 py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase mb-6">
            / LEGAL
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-white/30 text-sm mb-16">Last updated: April 2026</p>

          <div className="space-y-12 text-white/60 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Envaedha website (envaedha.com.au) or engaging our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our site or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Services</h2>
              <p>
                Envaedha provides AI consulting, product development, workflow automation, autonomous agent engineering, and cloud infrastructure services to businesses. The specific scope, deliverables, and pricing of any engagement will be set out in a separate agreement or statement of work.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and code, is the property of Envaedha and protected by applicable Australian intellectual property laws. Custom work delivered to clients becomes the client&apos;s property upon full payment, as specified in the relevant engagement agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Limitation of Liability</h2>
              <p>
                Envaedha provides services on an &ldquo;as is&rdquo; basis. To the extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our total liability shall not exceed the total fees paid by you for the relevant service in the 3 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Confidentiality</h2>
              <p>
                Both parties agree to keep confidential any proprietary information shared during an engagement. This obligation survives the termination of any service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Payment Terms</h2>
              <p>
                Payment terms are agreed upon in the individual service agreement. Late payments may incur interest charges as specified in that agreement. Envaedha reserves the right to pause or terminate work on accounts with outstanding invoices.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">7. Termination</h2>
              <p>
                Either party may terminate an engagement with written notice as specified in the service agreement. Upon termination, any outstanding invoices for work completed become immediately due and payable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">8. Governing Law</h2>
              <p>
                These Terms of Service are governed by the laws of Victoria, Australia. Any disputes shall be subject to the exclusive jurisdiction of the courts of Victoria.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">9. Contact</h2>
              <p>
                Questions about these terms can be directed to{" "}
                <a href="mailto:admin@envaedha.com.au" className="text-white underline underline-offset-4">
                  admin@envaedha.com.au
                </a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
