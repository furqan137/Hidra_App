import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { SocialProof } from '@/components/social-proof'
import { Features } from '@/components/features'
import { Security } from '@/components/security'
import { AppExperience } from '@/components/app-experience'
import { HowItWorks } from '@/components/how-it-works'
import { FAQ } from '@/components/faq'
import { Download } from '@/components/download'
import { Footer } from '@/components/footer'
import MockupsSection from '@/components/MockupsSection'

export default function Home() {
  return (
    <main className="bg-background">
      <Navigation />
      <Hero />
      <SocialProof />
      <Features />
      <MockupsSection />
      <Security />
      <AppExperience />
      <HowItWorks />
      <FAQ />
      <Download />
      <Footer />
    </main>
  )
}
