import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { StatsBar } from '@/components/sections/StatsBar'
import { Problem } from '@/components/sections/Problem'
import { Experience } from '@/components/sections/Experience'
import { Services } from '@/components/sections/Services'
import { MenuPreview } from '@/components/sections/MenuPreview'
import { Technology } from '@/components/sections/Technology'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { WhyNutri } from '@/components/sections/WhyNutri'
import { Schools } from '@/components/sections/Schools'
import { FAQ } from '@/components/sections/FAQ'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <main suppressHydrationWarning>
        <Hero />
        <Marquee />
        <StatsBar />
        <Problem />
        <Experience />
        <Services />
        <MenuPreview />
        <Technology />
        <HowItWorks />
        <BeforeAfter />
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
