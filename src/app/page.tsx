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
import { SepPopup } from '@/components/SepPopup'
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
        <div data-seccion="home_hero"><Hero /></div>
        <Marquee />
        <div data-seccion="home_stats"><StatsBar /></div>
        <div data-seccion="home_problema"><Problem /></div>
        <div data-seccion="home_sep"><SepBanner /></div>
        <div data-seccion="home_diagnostico"><DiagnosticTeaser /></div>
        <div data-seccion="home_servicios"><ServicesSplit /></div>
        <div data-seccion="home_tecnologia"><Technology /></div>
        <div data-seccion="home_por_que"><WhyNutri /></div>
        <div data-seccion="home_escuelas"><Schools /></div>
        <div data-seccion="home_faq"><FAQ /></div>
        <div data-seccion="home_contacto"><Contact /></div>
      </main>
      <Footer />
      <WhatsAppButton />
      <SepPopup />
    </>
  )
}
