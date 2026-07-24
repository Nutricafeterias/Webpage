import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

export const metadata: Metadata = {
  title: 'Cafeterías para Escuelas Privadas en CDMX | Nutri Cafeterías',
  description:
    'Operamos cafeterías en escuelas privadas de CDMX con estándar premium: menús de nutriólogos alineados a SEP, Distintivo H, pago con huella digital y app para padres. Más de 10 años, +10 colegios, 97% de satisfacción. Sin inversión para la escuela.',
  keywords: [
    'cafeterias escuelas privadas',
    'cafetería para escuela privada',
    'cafeterías colegios privados CDMX',
    'concesión cafetería escuela privada',
    'operador cafetería colegio privado',
    'cafetería premium escuela privada',
  ],
  alternates: { canonical: 'https://cafeteriasescolares.com.mx/cafeterias-escuelas-privadas' },
  openGraph: {
    title: 'Cafeterías para Escuelas Privadas — Nutri Cafeterías',
    description:
      'El estándar premium de cafeterías para colegios privados: nutrición, cumplimiento SEP, tecnología y cero carga operativa para la institución.',
    url: 'https://cafeteriasescolares.com.mx/cafeterias-escuelas-privadas',
    type: 'website',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Cafeterías para escuelas privadas',
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
    'Concesión y operación integral de cafeterías en escuelas privadas: menús diseñados por nutriólogos alineados a lineamientos SEP, Distintivo H, protocolos alineados a NOM-251, pago con huella digital y app para padres. Sin inversión inicial para el colegio.',
}

const expectativas = [
  { emoji: '👨‍👩‍👧', title: 'Familias que pagan colegiatura premium', desc: 'Esperan que la cafetería esté a la altura del resto de la escuela: calidad de restaurante, no de cooperativa.' },
  { emoji: '🥗', title: 'Nutrición real, no discurso', desc: 'Menús diseñados por nutriólogos, cero productos con sellos de exceso y manejo documentado de alergias e intolerancias.' },
  { emoji: '📱', title: 'Visibilidad total para los papás', desc: 'App donde cada familia ve qué comió su hijo, recarga saldo y define límites — el estándar que las escuelas top ya ofrecen.' },
  { emoji: '🛡️', title: 'Cumplimiento SEP sin riesgos', desc: 'La escuela privada es la primera en la mira ante un incumplimiento. Nuestro contrato garantiza lineamientos al día.' },
  { emoji: '⏱️', title: 'Recesos cortos, cero filas', desc: 'Pago con huella y flujo diseñado: servicio en menos de 3 minutos aunque salgan cientos de alumnos a la vez.' },
  { emoji: '🏫', title: 'Cero carga para la dirección', desc: 'Personal, proveedores, calidad, quejas de papás: todo lo operamos nosotros. La dirección solo recibe reportes.' },
]

const modelo = [
  { paso: '1', title: 'Diagnóstico sin costo', desc: 'Visitamos tu plantel, evaluamos la cafetería actual y te entregamos un plan concreto de mejora.' },
  { paso: '2', title: 'Propuesta a la medida', desc: 'Menús, precios, equipo y tecnología ajustados al perfil de tu comunidad — desde preescolar hasta prepa.' },
  { paso: '3', title: 'Implementación sin inversión', desc: 'Nosotros ponemos equipo, tecnología y adecuaciones. La escuela solo aporta el espacio.' },
  { paso: '4', title: 'Operación con reportes', desc: 'Arrancamos sin interrumpir el ciclo escolar y la dirección recibe reportes transparentes cada mes.' },
]

export default function CafeteriasEscuelasPrivadasPage() {
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
              🎓 Escuelas privadas
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight">
              Cafeterías para{' '}
              <span className="gradient-text-primary">escuelas privadas</span>
            </h1>
            <p className="mt-5 text-stone-500 text-lg leading-relaxed">
              Más de 10 años operando cafeterías en colegios privados de CDMX y área
              metropolitana. Calidad premium, cumplimiento SEP garantizado y tecnología
              que los papás aman — sin que tu escuela invierta un peso.
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

          {/* Stats strip */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { n: '+10', t: 'colegios privados' },
              { n: '+1M', t: 'órdenes servidas' },
              { n: '97%', t: 'satisfacción' },
              { n: '<3 min', t: 'de espera' },
            ].map(s => (
              <div key={s.t} className="p-5 rounded-2xl bg-white border-2 border-stone-100 shadow-sm text-center">
                <p className="text-2xl md:text-3xl font-black text-emerald-600">{s.n}</p>
                <p className="text-xs md:text-sm text-stone-500 font-medium mt-1">{s.t}</p>
              </div>
            ))}
          </div>

          {/* Lo que una escuela privada exige */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-4">
              Lo que una escuela privada{' '}
              <span className="gradient-text-primary">exige de su cafetería</span>
            </h2>
            <p className="text-center text-stone-500 max-w-2xl mx-auto mb-10">
              La cafetería es parte de la promesa de valor del colegio. Estas son las
              expectativas que cumplimos todos los días:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {expectativas.map(e => (
                <div key={e.title} className="card-lift p-6 rounded-2xl border-2 border-stone-100 bg-white shadow-sm">
                  <div className="text-4xl mb-3">{e.emoji}</div>
                  <h3 className="font-black text-stone-900 mb-2 text-base">{e.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cómo trabajamos */}
          <div className="mt-20 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
              Así llevamos tu cafetería a{' '}
              <span className="gradient-text-primary">nivel premium</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {modelo.map(m => (
                <div key={m.paso} className="flex items-start gap-4 p-6 rounded-2xl bg-white border-2 border-stone-100 shadow-sm">
                  <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-emerald-500 text-white font-black flex items-center justify-center text-lg">
                    {m.paso}
                  </span>
                  <div>
                    <h3 className="font-black text-stone-900 mb-1">{m.title}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SEO text block */}
          <div className="mt-20 max-w-3xl mx-auto space-y-5 text-stone-600 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-black text-stone-900">
              ¿Por qué las escuelas privadas eligen concesionar su cafetería?
            </h2>
            <p>
              Operar una cafetería escolar por cuenta propia implica contratar y supervisar
              personal, garantizar el cumplimiento de los{' '}
              <Link href="/lineamientos-sep" className="text-emerald-600 font-bold hover:underline">
                lineamientos SEP para cafeterías escolares
              </Link>
              , mantener licencia sanitaria y protocolos de higiene, y atender todos los días
              las expectativas de cientos de familias. Para la mayoría de los colegios privados,
              ese esfuerzo distrae de lo esencial: educar. Por eso las mejores instituciones
              trabajan con un operador especializado en cafeterías para escuelas privadas.
            </p>
            <p>
              En Nutri Cafeterías asumimos la operación completa — desde el menú diseñado por
              nutriólogos hasta el pago con huella digital y la app para padres — con un modelo
              de concesión donde la escuela no invierte ni opera. Si tu institución también
              necesita servicio de alimentos en comedor, conoce nuestros{' '}
              <Link href="/comedores-escolares" className="text-emerald-600 font-bold hover:underline">
                comedores escolares en CDMX
              </Link>{' '}
              y nuestro{' '}
              <Link href="/catering-escolar-cdmx" className="text-emerald-600 font-bold hover:underline">
                catering escolar en CDMX
              </Link>
              . Y si estás comparando opciones, te dejamos nuestra{' '}
              <Link href="/blog/como-elegir-proveedor-cafeteria-escolar" className="text-emerald-600 font-bold hover:underline">
                guía para elegir al mejor proveedor de cafetería escolar
              </Link>
              .
            </p>
          </div>

          {/* CTA final */}
          <div className="mt-16 p-10 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
            <p className="text-2xl md:text-3xl font-black text-white">
              La cafetería que tu colegiatura promete 🏆
            </p>
            <p className="text-emerald-100 mt-2 mb-6">
              Agenda una visita y conoce nuestras cafeterías operando en colegios privados.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:scale-[1.03]"
              >
                Agendar reunión gratis →
              </a>
              <a
                href="https://wa.me/5215567034269?text=Hola!%20Me%20interesa%20la%20cafeter%C3%ADa%20para%20mi%20escuela%20privada."
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-emerald-700/60 text-white font-bold hover:bg-emerald-700 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp directo
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
