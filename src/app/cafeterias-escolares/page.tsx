import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Experience } from '@/components/sections/Experience'
import { Services } from '@/components/sections/Services'
import { MenuPreview } from '@/components/sections/MenuPreview'
import { Programs } from '@/components/sections/Programs'
import { Parents } from '@/components/sections/Parents'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { Safety } from '@/components/sections/Safety'

export const metadata: Metadata = {
  title: 'Cafeterías Escolares Premium en CDMX | Operación Integral — Nutri Cafeterías',
  description:
    'Operamos la cafetería de tu escuela de forma integral: menús de nutriólogos alineados a SEP, Distintivo H, pago con huella digital, app para padres y programas educativos como NutriMood. Sin inversión para la escuela.',
  keywords: [
    'cafetería escolar',
    'cafeterías escolares CDMX',
    'operación cafetería escolar',
    'concesión cafetería escolar',
    'cafetería escuela privada',
    'proveedor cafetería escolar México',
  ],
  alternates: { canonical: 'https://cafeteriasescolares.com.mx/cafeterias-escolares' },
  openGraph: {
    title: 'Cafeterías Escolares Premium — Operación Integral',
    description:
      'Menús de nutriólogos, tecnología de huella digital, programas educativos y cero carga para tu escuela.',
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
    telephone: '+52-55-6703-4269',
  },
  areaServed: [
    { '@type': 'City', name: 'Ciudad de México' },
    { '@type': 'AdministrativeArea', name: 'Área Metropolitana del Valle de México' },
  ],
  description:
    'Operación completa de cafeterías escolares para escuelas privadas: menús de nutriólogos alineados a SEP, Distintivo H, pago con huella digital, tótems de autoservicio, app para padres y programas educativos exclusivos. Sin inversión inicial para la institución.',
}

export default function CafeteriasEscolaresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />
      <main className="pt-28 bg-[#FFFEF7]">
        {/* Hero */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center pb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6 border border-emerald-200">
            🍽️ Cafeterías escolares
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight">
            La cafetería escolar{' '}
            <span className="gradient-text-primary">que tu escuela merece</span>
          </h1>
          <p className="mt-5 text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Operación integral premium: menús diseñados por nutriólogos, pago con huella
            digital, programas educativos únicos y servicio en menos de 3 minutos.
            Tu escuela no invierte ni opera nada.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#contacto"
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

        <Experience />
        <Services />
        <MenuPreview />
        <Programs />
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
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:scale-[1.03]"
              >
                Agendar mi visita →
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
