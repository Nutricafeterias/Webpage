import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { StatsBar } from '@/components/sections/StatsBar'
import { Problem } from '@/components/sections/Problem'
import { SepBanner } from '@/components/sections/SepBanner'
import { DiagnosticTeaser } from '@/components/sections/DiagnosticTeaser'
import { ServicesSplit } from '@/components/sections/ServicesSplit'
import { Technology } from '@/components/sections/Technology'
import { WhyNutri } from '@/components/sections/WhyNutri'
import { Schools } from '@/components/sections/Schools'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { faqs } from '@/data/faqs'

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <main suppressHydrationWarning>
        <Hero />
        <Marquee />
        <StatsBar />
        <Problem />
        <SepBanner />
        <DiagnosticTeaser />
        <ServicesSplit />
        <Technology />
        <WhyNutri />
        <Schools />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
