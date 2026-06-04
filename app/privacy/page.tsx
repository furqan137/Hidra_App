import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

export default function PrivacyPage() {
  return (
    <main className="bg-background">
      <Navigation />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <h1 className="text-5xl font-heading font-bold mb-8 text-balance">Privacy Policy</h1>
        <div className="prose prose-invert max-w-none space-y-6 text-foreground/80">
          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Introduction</h2>
            <p>
              Hidra ("we", "us", or "our") operates the Hidra application. This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Information We Collect</h2>
            <p>
              Hidra is designed with privacy-first architecture. We collect minimal information necessary to provide our service:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Device identifiers and analytics data (optional)</li>
              <li>Crash reports and error logs (optional)</li>
              <li>User preferences and settings (stored locally only)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Permissions Used</h2>
            <p>
              Hidra requires the following device permissions to function:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Photo/Media Access:</strong> To import photos and videos into your private vault</li>
              <li><strong>Biometric Access:</strong> For fingerprint and face recognition authentication</li>
              <li><strong>Storage Access:</strong> To save encrypted files locally on your device</li>
              <li><strong>Camera:</strong> For taking photos directly into your vault</li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Data Protection</h2>
            <p>
              <strong>End-to-End Encryption:</strong> All files stored in Hidra are encrypted using military-grade AES-256 encryption.
            </p>
            <p>
              <strong>Local Storage Only:</strong> Your files are never uploaded to any servers. Everything is stored exclusively on your device.
            </p>
            <p>
              <strong>Authentication Protection:</strong> Access to your vault is protected by PIN, biometric authentication, or both.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">No Data Selling</h2>
            <p>
              We do not sell, trade, or rent your personal information to any third parties. Your data belongs to you.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">No Tracking</h2>
            <p>
              Hidra does not track your behavior, location, or activity. We respect your privacy completely.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Third-Party Services</h2>
            <p>
              Hidra does not integrate with third-party analytics or tracking services that would compromise your privacy.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-4">Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-4">
              <a href="mailto:privacy@hidra.app" className="text-primary hover:text-secondary transition-colors">
                privacy@hidra.app
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
