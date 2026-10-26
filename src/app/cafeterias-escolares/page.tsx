import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Experience } from '@/components/sections/Experience'
import { Services } from '@/components/sections/Services'
import { MenuPreview } from '@/components/sections/MenuPreview'
import { Parents } from '@/components/sections/Parents'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { CafeteriaStyles } from '@/components/sections/CafeteriaStyles'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { Safety } from '@/components/sections/Safety'
import { QueVendemos } from '@/components/sections/QueVendemos'
import { waHref } from '@/lib/whatsapp'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

export const metadata: Metadata = {
  title: 'Cafetería escolar que cumple con la SEP · Concesión y operación | Nutri Cafeterías',
  description:
    'Operamos la cafetería de tu escuela de forma integral: menús conforme a los Lineamientos SEP, higiene según la NOM-251, tótems, app para familias y pago con reconocimiento facial opcional, siempre con efectivo en caja.',
  keywords: [
    'cafetería escolar',
    'cafeterías escolares CDMX',
    'operación cafetería escolar',
    'concesión cafetería escolar',
    'cafetería escolar saludable',
    'productos permitidos en la cafetería escolar SEP',
    'cafetería universitaria',
    'proveedor cafetería escolar México',
  ],
  alternates: { canonical: 'https://cafeteriasescolares.com.mx/cafeterias-escolares' },
  openGraph: {
    title: 'Cafetería escolar: platillos a la carta, snacks y bebidas que cumplen con la SEP',
    description:
      'Platillos a la carta, snacks y bebidas que cumplen con la SEP, con tótems, app para familias y reconocimiento facial.',
    url: 'https://cafeteriasescolares.com.mx/cafeterias-escolares',
    type: 'website',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Operación integral de cafeterías escolares',
  serviceType: 'Cafetería escolar',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Nutri Cafeterías',
    url: 'https://cafeteriasescolares.com.mx',
    telephone: '+52-221-925-1954',
  },
  areaServed: [
    { '@type': 'City', name: 'Ciudad de México' },
    { '@type': 'AdministrativeArea', name: 'Área Metropolitana del Valle de México' },
  ],
  description:
    'Operación completa de cafeterías escolares: platillos a la carta, snacks empaquetados y bebidas conforme a los Lineamientos SEP, higiene según la NOM-251, tótems de autoservicio, app para familias y reconocimiento facial opcional, con pago en efectivo en caja.',
}

export default function CafeteriasEscolaresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />
      <main className="pt-28 bg-[#F7F3EA]">
        {/* Hero */}
        <div data-seccion="cafeteria_hero" className="max-w-4xl mx-auto px-6 lg:px-8 text-center pb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6 border border-emerald-200">
            🍽️ Cafetería escolar
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight">
            Cafetería escolar:{' '}
            <span className="gradient-text-primary">platillos a la carta, snacks y bebidas</span>{' '}
            que cumplen con la SEP
          </h1>
          <p className="mt-5 text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Operamos la cafetería de tu escuela de punta a punta: cocina del día, productos
            empaquetados permitidos y bebidas sin exceso de azúcar, con tótems, app para familias y
            reconocimiento facial para que el receso no se pierda en la fila. Y siempre se puede pagar
            en efectivo en caja.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#contacto"
              data-cta="agenda_reunion"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black transition-all duration-200 shadow-xl shadow-emerald-200 hover:scale-[1.03]"
            >
              Agenda una reunión gratis
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              href="/diagnostico"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-emerald-200 bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200"
            >
              📊 Evalúa tu cafetería en 2 min
            </Link>
          </div>
        </div>

        <QueVendemos />
        <Experience />
        <Services />
        <CafeteriaStyles />
        <MenuPreview />
        <Parents />
        <HowItWorks />
        <BeforeAfter />
        <Safety />

        {/* CTA final */}
        <div className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="p-10 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
              <p className="text-2xl md:text-3xl font-black text-white">
                Así se ve una cafetería de primer nivel 🏆
              </p>
              <p className="text-emerald-100 mt-2 mb-6">
                Visita una de nuestras cafeterías operando y compruébalo en vivo.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="/#contacto"
                  data-cta="agenda_visita"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:scale-[1.03]"
                >
                  Agendar mi visita →
                </a>
                <a
                  href={waHref('Hola, me interesa la cafetería escolar para mi escuela', 'cafeterias')}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp_cta_final"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-emerald-700/60 text-white font-bold hover:bg-emerald-700 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" /> WhatsApp
                </a>
              </div>
              <p className="mt-5 text-sm text-emerald-50">
                <a href="/comedores-escolares" className="font-bold underline underline-offset-2">
                  ¿Buscas un comedor con menú del día? →
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
