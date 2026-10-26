import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { waHref } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Eventos escolares y catering en CDMX | Graduaciones, juntas y coffee breaks — Nutri Cafeterías',
  description:
    'Eventos escolares como complemento de tu cafetería o comedor: graduaciones, kermés, juntas de consejo, coffee breaks y desayunos con padres, con higiene según la NOM-251.',
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
    title: 'Eventos escolares — Nutri Cafeterías',
    description:
      'Graduaciones, kermés, festivales y eventos institucionales con estándares premium de calidad e higiene.',
    url: 'https://cafeteriasescolares.com.mx/catering-escolar',
    type: 'website',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Eventos escolares',
  serviceType: 'Catering escolar',
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
    'Complemento para eventos escolares: graduaciones, kermés, festivales, juntas de consejo, desayunos con padres y eventos deportivos, con protocolos de higiene alineados a NOM-251.',
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
  { emoji: '🏅', text: 'Los mismos estándares de nuestras cafeterías: protocolos de higiene alineados a NOM-251' },
  { emoji: '👨‍🍳', text: 'Personal uniformado y capacitado que ya conoce el entorno escolar y el trato con familias' },
  { emoji: '📋', text: 'Menús a la medida del evento y del presupuesto, diseñados por nuestros cocineros con criterios nutrimentales' },
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
      <main className="pt-28 pb-24 bg-[#F7F3EA] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mb-6 border border-amber-200">
              🎉 Eventos escolares
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight">
              Eventos escolares{' '}
              <span className="gradient-text-orange">memorables y sin estrés</span>
            </h1>
            <p className="mt-5 text-stone-500 text-lg leading-relaxed">
              Graduaciones, kermés, festivales y eventos institucionales con el mismo
              estándar de nuestras cafeterías y comedores: calidad, higiene según la NOM-251
              y una logística que no le quita el sueño a nadie.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contacto"
                data-cta="cotiza_evento"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black transition-all duration-200 shadow-xl shadow-emerald-200 hover:scale-[1.03]"
              >
                Cotiza tu evento gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={waHref('Hola, quiero cotizar alimentos para un evento de mi escuela', 'eventos')}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp_hero"
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
            <p className="mt-3 text-center text-stone-500">
              ¿Buscas servicio de alimentos <strong>todos los días</strong> y no solo para un
              evento? Conoce nuestro{' '}
              <Link href="/comedores-escolares" className="text-emerald-600 font-bold hover:underline">
                comedor escolar
              </Link>
              .
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
