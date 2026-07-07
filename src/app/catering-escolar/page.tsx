import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

export const metadata: Metadata = {
  title: 'Catering para Eventos Escolares en CDMX | Graduaciones, Kermés y Festivales — Nutri Cafeterías',
  description:
    'Catering profesional para eventos escolares en CDMX: graduaciones, kermés, festivales, juntas de consejo, desayunos con padres y eventos deportivos. Con Distintivo H y los estándares de las mejores escuelas privadas.',
  keywords: [
    'catering escolar',
    'catering eventos escolares CDMX',
    'catering graduaciones escolares',
    'banquete graduación escuela',
    'catering kermés festival escolar',
    'desayunos escolares eventos',
  ],
  alternates: { canonical: 'https://cafeteriasescolares.com.mx/catering-escolar' },
  openGraph: {
    title: 'Catering para Eventos Escolares — Nutri Cafeterías',
    description:
      'Graduaciones, kermés, festivales y eventos institucionales con estándares premium de calidad e higiene.',
    url: 'https://cafeteriasescolares.com.mx/catering-escolar',
    type: 'website',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Catering para eventos escolares',
  serviceType: 'Catering escolar',
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
    'Catering profesional para eventos de escuelas privadas: graduaciones, kermés, festivales, juntas de consejo, desayunos con padres y eventos deportivos, con Distintivo H y protocolos alineados a NOM-251.',
}

const eventos = [
  { emoji: '🎓', title: 'Graduaciones', desc: 'Banquetes y recepciones a la altura del momento más importante del ciclo escolar — montaje, servicio y menú de celebración.' },
  { emoji: '🎪', title: 'Kermés y festivales', desc: 'Estaciones de comida seguras, ágiles y divertidas para eventos masivos con cientos de familias.' },
  { emoji: '🥐', title: 'Desayunos con padres', desc: 'Desayunos institucionales para día de la madre, del padre, bienvenidas y eventos de admisiones.' },
  { emoji: '💼', title: 'Juntas de consejo', desc: 'Coffee break y alimentos para juntas directivas, consejos técnicos y capacitaciones docentes.' },
  { emoji: '🏅', title: 'Eventos deportivos', desc: 'Hidratación y alimentación para torneos, inauguraciones y clausuras deportivas.' },
  { emoji: '🎄', title: 'Posadas y celebraciones', desc: 'Posadas navideñas, aniversarios institucionales y ceremonias de fin de curso.' },
]

const razones = [
  { emoji: '🏅', text: 'Los mismos estándares de nuestras cafeterías: Distintivo H, licencia sanitaria y protocolos alineados a NOM-251' },
  { emoji: '👨‍🍳', text: 'Personal uniformado y capacitado que ya conoce el entorno escolar y el trato con familias' },
  { emoji: '📋', text: 'Menús a la medida del evento y del presupuesto, diseñados con nuestro equipo de nutriólogos y chefs' },
  { emoji: '⚡', text: 'Logística completa: montaje, servicio, desmontaje y limpieza — la escuela solo disfruta el evento' },
]

export default function CateringEscolarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />
      <main className="pt-28 pb-24 bg-[#FFFEF7] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mb-6 border border-amber-200">
              🎉 Catering escolar
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight">
              Eventos escolares{' '}
              <span className="gradient-text-orange">memorables y sin estrés</span>
            </h1>
            <p className="mt-5 text-stone-500 text-lg leading-relaxed">
              Graduaciones, kermés, festivales y eventos institucionales con el mismo
              estándar premium de nuestras cafeterías: calidad, higiene certificada
              y una logística que no le quita el sueño a nadie.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contacto"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black transition-all duration-200 shadow-xl shadow-emerald-200 hover:scale-[1.03]"
              >
                Cotiza tu evento gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/5215567034269?text=Hola!%20Quiero%20cotizar%20catering%20para%20un%20evento%20de%20mi%20escuela."
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-emerald-200 bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp directo
              </a>
            </div>
          </div>

          {/* Tipos de evento */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
              Eventos que hacemos{' '}
              <span className="gradient-text-primary">brillar</span> ✨
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {eventos.map(e => (
                <div key={e.title} className="card-lift p-6 rounded-2xl border-2 border-stone-100 bg-white shadow-sm">
                  <div className="text-4xl mb-3">{e.emoji}</div>
                  <h3 className="font-black text-stone-900 mb-2 text-base">{e.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Por qué con Nutri */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
              ¿Por qué con{' '}
              <span className="gradient-text-primary">Nutri Cafeterías</span>?
            </h2>
            <div className="space-y-4">
              {razones.map(r => (
                <div key={r.text} className="flex items-start gap-4 p-5 rounded-2xl bg-white border-2 border-stone-100 shadow-sm">
                  <span className="text-3xl flex-shrink-0">{r.emoji}</span>
                  <p className="text-stone-700 font-medium leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-stone-500">
              ¿Tu escuela aún no opera con nosotros? El catering es la mejor forma de
              conocernos en acción.{' '}
              <Link href="/cafeterias-escolares" className="text-emerald-600 font-bold hover:underline">
                Descubre la operación integral →
              </Link>
            </p>
          </div>

          {/* CTA final */}
          <div className="mt-16 p-10 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
            <p className="text-2xl md:text-3xl font-black text-white">
              Tu próximo evento, resuelto 🎉
            </p>
            <p className="text-emerald-100 mt-2 mb-6">
              Cuéntanos fecha, número de invitados y tipo de evento — te cotizamos en 24 horas.
            </p>
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:scale-[1.03]"
            >
              Cotizar mi evento →
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
