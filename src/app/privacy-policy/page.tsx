import { Metadata } from "next";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "Privacy Policy | Envaedha",
  description: "Privacy Policy for Envaedha — how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0c0c0c]">
      <Navbar />
      <main className="flex-1 py-32 px-6 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <p className="font-mono text-[10px] tracking-[0.4em] text-white/30 uppercase mb-6">
            / LEGAL
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-white/30 text-sm mb-16">Last updated: April 2026</p>

          <div className="space-y-12 text-white/60 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p>
                When you contact us via our website, schedule a meeting, or submit an inquiry, we may collect your name, email address, phone number, company name, and any information you voluntarily provide in your message.
              </p>
              <p className="mt-4">
                We may also collect non-personally identifiable information automatically, such as browser type, referring pages, and pages visited, to help us improve our website experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-3 space-y-2">
                <li>Respond to your inquiries and schedule consultations</li>
                <li>Send project updates and relevant communications</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-4">We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Data Storage & Security</h2>
              <p>
                Your data is stored securely and we take reasonable precautions to protect it from unauthorised access, disclosure, or misuse. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Cookies</h2>
              <p>
                Our website may use cookies to enhance your browsing experience. You may choose to disable cookies through your browser settings, though this may affect certain functionality of the site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Third-Party Services</h2>
              <p>
                We may use third-party services such as Calendly or Google Analytics to facilitate meetings and understand website traffic. These services have their own privacy policies and we encourage you to review them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Your Rights</h2>
              <p>
                You have the right to request access to, correction of, or deletion of personal data we hold about you. To exercise these rights, please contact us at{" "}
                <a href="mailto:admin@envaedha.com.au" className="text-white underline underline-offset-4">
                  admin@envaedha.com.au
                </a>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">7. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any significant changes by updating the date at the top of this page.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">8. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{" "}
                <a href="mailto:admin@envaedha.com.au" className="text-white underline underline-offset-4">
                  admin@envaedha.com.au
                </a>
                {" "}or visit our{" "}
                <a href="/contact" className="text-white underline underline-offset-4">contact page</a>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
