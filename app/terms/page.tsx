import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function TermsPage() {
  return (
    <main className="bg-background">
      <Navigation />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-5xl font-heading font-bold mb-8 text-balance">Terms of Service</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-foreground/80">
          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Agreement to Terms</h2>
            <p>
              By downloading, installing, or using the Hidra application ("Service"), you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not use our Service.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Acceptable Use</h2>
            <p>
              You agree not to use Hidra for any illegal or unauthorized purpose. Specifically, you agree not to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Use the Service to store or distribute illegal content</li>
              <li>Attempt to hack, reverse engineer, or modify the Service</li>
              <li>Use the Service in violation of any applicable laws</li>
              <li>Distribute malware or harmful content through the Service</li>
              <li>Engage in harassment or abuse through the Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">User Responsibilities</h2>
            <p>
              You are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Maintaining the security of your device and authentication credentials</li>
              <li>Ensuring your device meets the minimum system requirements</li>
              <li>Creating backups of important content</li>
              <li>Complying with all applicable laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Disclaimer</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. HIDRA DOES NOT WARRANT THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, OR FREE FROM SECURITY BREACHES.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL HIDRA BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Data Loss</h2>
            <p>
              While Hidra implements security measures, we cannot guarantee recovery of lost or corrupted data. Users are responsible for maintaining backups of important content.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Intellectual Property</h2>
            <p>
              The Hidra application and all content included are the property of Hidra or its content suppliers and are protected by international copyright laws.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Updates and Changes</h2>
            <p>
              Hidra reserves the right to modify these Terms at any time. Your continued use of the Service constitutes acceptance of modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Termination</h2>
            <p>
              Hidra may terminate or suspend your access to the Service at any time for violations of these Terms or for any reason.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Governing Law</h2>
            <p>
              These Terms are governed by and construed in accordance with the laws of the jurisdiction in which Hidra operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Contact</h2>
            <p>
              For questions about these Terms, please contact us at:
            </p>
            <p className="mt-4">
              <a href="mailto:legal@hidra.app" className="text-primary hover:text-secondary transition-colors">
                legal@hidra.app
              </a>
            </p>
          </section>

          <section className="pt-8 border-t border-white/10">
            <p className="text-sm text-foreground/50">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>
        </div>
      </article>
      <Footer />
    </main>
  )
}
