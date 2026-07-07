import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { StatsBar } from '@/components/sections/StatsBar'
import { Problem } from '@/components/sections/Problem'
import { DiagnosticTeaser } from '@/components/sections/DiagnosticTeaser'
import { Experience } from '@/components/sections/Experience'
import { Services } from '@/components/sections/Services'
import { MenuPreview } from '@/components/sections/MenuPreview'
import { Programs } from '@/components/sections/Programs'
import { Technology } from '@/components/sections/Technology'
import { Parents } from '@/components/sections/Parents'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { WhyNutri } from '@/components/sections/WhyNutri'
import { Safety } from '@/components/sections/Safety'
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
        <DiagnosticTeaser />
        <Experience />
        <Services />
        <MenuPreview />
        <Programs />
        <Technology />
        <Parents />
        <HowItWorks />
        <BeforeAfter />
        <WhyNutri />
        <Safety />
        <Schools />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
