import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

export const metadata: Metadata = {
  title: 'Catering Escolar en CDMX | Servicio Diario de Alimentos para Escuelas — Nutri Cafeterías',
  description:
    'Catering escolar en CDMX: servicio diario de alimentos para escuelas privadas — desayunos, comidas y lunch escolar con menús de nutriólogos alineados a SEP, Distintivo H y protocolos NOM-251. Sin inversión para la escuela.',
  keywords: [
    'catering escolar CDMX',
    'catering para escuelas',
    'servicio de alimentos para escuelas CDMX',
    'lunch escolar CDMX',
    'proveedor de alimentos escolares',
    'desayunos y comidas escolares CDMX',
  ],
  alternates: { canonical: 'https://cafeteriasescolares.com.mx/catering-escolar-cdmx' },
  openGraph: {
    title: 'Catering Escolar en CDMX — Nutri Cafeterías',
    description:
      'Servicio diario de alimentos para escuelas privadas de CDMX: desayunos, comidas y lunch con estándares premium de nutrición e higiene.',
    url: 'https://cafeteriasescolares.com.mx/catering-escolar-cdmx',
    type: 'website',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Catering escolar diario en CDMX',
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
    'Servicio diario de alimentos para escuelas privadas en la Ciudad de México: desayunos, comidas y lunch escolar con menús diseñados por nutriólogos alineados a lineamientos SEP, Distintivo H y protocolos alineados a NOM-251.',
}

const servicios = [
  { emoji: '🍳', title: 'Desayunos escolares', desc: 'Desayunos completos y balanceados servidos en tu plantel, listos para el primer receso o antes de clases.' },
  { emoji: '🍽️', title: 'Comidas diarias', desc: 'Menú del día diseñado por nutriólogos: ciclos de 4 semanas, platillos de temporada y manejo documentado de alérgenos.' },
  { emoji: '🥪', title: 'Lunch escolar', desc: 'Opciones de lunch nutritivo para escuelas que no cuentan con cocina o comedor propio.' },
  { emoji: '🚚', title: 'Servicio en sitio o entrega', desc: 'Preparamos en tu plantel o entregamos desde nuestras cocinas con cadena de temperatura controlada.' },
  { emoji: '🧒', title: 'Todos los niveles', desc: 'Porciones y menús adaptados desde preescolar hasta preparatoria, con opciones vegetarianas y para alergias.' },
  { emoji: '📋', title: 'Cumplimiento SEP', desc: 'Cero productos con sellos de exceso: cada menú se verifica contra los lineamientos vigentes antes de servirse.' },
]

const porQue = [
  { emoji: '🏅', text: 'Distintivo H, licencia sanitaria y protocolos de higiene alineados a NOM-251 — los mismos estándares de nuestras cafeterías premium' },
  { emoji: '👩‍⚕️', text: 'Menús firmados por nutriólogos y alineados a los lineamientos SEP vigentes, con justificación nutricional documentada' },
  { emoji: '🏫', text: 'Más de 10 años sirviendo a escuelas privadas de CDMX: +10 colegios, +1,000,000 de órdenes y 97% de satisfacción' },
  { emoji: '💰', text: 'Modelos flexibles: por alumno, por servicio o concesión completa — sin inversión inicial para la institución' },
]

export default function CateringEscolarCdmxPage() {
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
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6 border border-emerald-200">
              🚚 Catering escolar CDMX
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight">
              Catering escolar{' '}
              <span className="gradient-text-primary">en CDMX</span>
            </h1>
            <p className="mt-5 text-stone-500 text-lg leading-relaxed">
              Servicio diario de alimentos para escuelas privadas de la Ciudad de México:
              desayunos, comidas y lunch escolar con menús de nutriólogos, higiene
              certificada y cumplimiento SEP garantizado.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contacto"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black transition-all duration-200 shadow-xl shadow-emerald-200 hover:scale-[1.03]"
              >
                Cotiza tu servicio gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://wa.me/5215567034269?text=Hola!%20Quiero%20cotizar%20catering%20escolar%20diario%20para%20mi%20escuela%20en%20CDMX."
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-emerald-200 bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp directo
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
              Servicio de alimentos{' '}
              <span className="gradient-text-primary">todos los días de clases</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {servicios.map(s => (
                <div key={s.title} className="card-lift p-6 rounded-2xl border-2 border-stone-100 bg-white shadow-sm">
                  <div className="text-4xl mb-3">{s.emoji}</div>
                  <h3 className="font-black text-stone-900 mb-2 text-base">{s.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Por qué Nutri */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
              ¿Por qué con{' '}
              <span className="gradient-text-primary">Nutri Cafeterías</span>?
            </h2>
            <div className="space-y-4">
              {porQue.map(r => (
                <div key={r.text} className="flex items-start gap-4 p-5 rounded-2xl bg-white border-2 border-stone-100 shadow-sm">
                  <span className="text-3xl flex-shrink-0">{r.emoji}</span>
                  <p className="text-stone-700 font-medium leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SEO text block */}
          <div className="mt-20 max-w-3xl mx-auto space-y-5 text-stone-600 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-black text-stone-900">
              Catering escolar en CDMX: cómo funciona
            </h2>
            <p>
              Nuestro catering escolar en CDMX está pensado para escuelas que necesitan un
              servicio de alimentos confiable todos los días de clases, sin construir ni
              operar una cocina propia. Definimos contigo el formato — desayunos, comida
              completa o lunch —, diseñamos los menús con nuestro equipo de nutriólogos
              conforme a los{' '}
              <Link href="/lineamientos-sep" className="text-emerald-600 font-bold hover:underline">
                lineamientos SEP para cafeterías escolares
              </Link>{' '}
              y servimos en tu plantel con personal uniformado y capacitado. Atendemos
              todas las alcaldías de la Ciudad de México y el área metropolitana.
            </p>
            <p>
              Si tu escuela busca un servicio permanente con instalaciones en el plantel,
              conoce nuestra operación integral de{' '}
              <Link href="/comedores-escolares" className="text-emerald-600 font-bold hover:underline">
                comedores escolares en CDMX
              </Link>{' '}
              y de{' '}
              <Link href="/cafeterias-escuelas-privadas" className="text-emerald-600 font-bold hover:underline">
                cafeterías para escuelas privadas
              </Link>
              . ¿Buscas catering para un evento puntual — graduación, kermés o festival?
              Visita nuestra página de{' '}
              <Link href="/catering-escolar" className="text-emerald-600 font-bold hover:underline">
                catering para eventos escolares
              </Link>
              .
            </p>
          </div>

          {/* CTA final */}
          <div className="mt-16 p-10 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
            <p className="text-2xl md:text-3xl font-black text-white">
              Alimentos resueltos, todos los días 🍽️
            </p>
            <p className="text-emerald-100 mt-2 mb-6">
              Cuéntanos cuántos alumnos tienes y qué servicio necesitas — te cotizamos en 24 horas.
            </p>
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:scale-[1.03]"
            >
              Cotizar catering escolar →
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
