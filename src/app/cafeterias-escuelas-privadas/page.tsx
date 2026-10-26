import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { QueVendemos } from '@/components/sections/QueVendemos'
import { waHref } from '@/lib/whatsapp'
import { Respaldos } from '@/components/sections/Respaldos'

export const metadata: Metadata = {
  title: 'Cafetería y comedor para colegios particulares en CDMX | Nutri Cafeterías',
  description:
    'Cafetería y comedor para colegios particulares de CDMX: menús conforme a los Lineamientos SEP, NOM-251, tótems, app para familias y reconocimiento facial opcional, con efectivo en caja. Desde 2018.',
  keywords: [
    'cafeterias escuelas privadas',
    'cafetería para escuela privada',
    'cafeterías colegios privados CDMX',
    'concesión cafetería escuela privada',
    'operador cafetería colegio privado',
    'cafetería premium escuela privada',
    'comedor colegio privado',
  ],
  alternates: { canonical: 'https://cafeteriasescolares.com.mx/cafeterias-escuelas-privadas' },
  openGraph: {
    title: 'Cafetería y comedor para colegios particulares — Nutri Cafeterías',
    description:
      'Cafetería y comedor para colegios particulares: menús conforme a la SEP, tecnología propia y la operación diaria a cargo de Nutri.',
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
    telephone: '+52-221-925-1954',
  },
  areaServed: [
    { '@type': 'City', name: 'Ciudad de México' },
    { '@type': 'AdministrativeArea', name: 'Área Metropolitana del Valle de México' },
  ],
  description:
    'Concesión y operación integral de cafeterías y comedores en colegios particulares: menús con criterios nutrimentales de los Lineamientos SEP, higiene según la NOM-251, tótems de autoservicio, app para familias y reconocimiento facial opcional, siempre con pago en efectivo en caja.',
}

const expectativas = [
  { emoji: '👨‍👩‍👧', title: 'Familias que pagan colegiatura premium', desc: 'Esperan que la cafetería esté a la altura del resto de la escuela: calidad de restaurante, no de cooperativa.' },
  { emoji: '🥗', title: 'Nutrición real, no discurso', desc: 'Menús con criterios nutrimentales de la SEP, cero productos con sellos de exceso y manejo documentado de alergias e intolerancias.' },
  { emoji: '📱', title: 'Visibilidad para los papás', desc: 'Con la app Nutri para familias cada familia ve qué comió su hijo, recarga saldo y define límites. También puede pagar en efectivo en caja.' },
  { emoji: '🛡️', title: 'Cumplimiento SEP sin riesgos', desc: 'La escuela privada es la primera en la mira ante un incumplimiento. Nuestro contrato garantiza lineamientos al día.' },
  { emoji: '⏱️', title: 'Recesos cortos', desc: 'Tótems, pedidos desde la app y reconocimiento facial opcional: un flujo pensado para que el receso alcance aunque salgan cientos de alumnos a la vez.' },
  { emoji: '🏫', title: 'La operación diaria es nuestra', desc: 'Proveedores, calidad, cocina y atención a papás los operamos nosotros. La dirección recibe reportes.' },
]

const modelo = [
  { paso: '1', title: 'Diagnóstico sin costo', desc: 'Visitamos tu plantel, evaluamos la cafetería actual y te entregamos un plan concreto de mejora.' },
  { paso: '2', title: 'Propuesta a la medida', desc: 'Menús, precios, equipo y tecnología ajustados al perfil de tu comunidad — desde preescolar hasta prepa.' },
  { paso: '3', title: 'Implementación a la medida', desc: 'Definimos con cada escuela el equipo y la inversión: desde operar lo que ya tienen hasta equipar desde cero.' },
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
      <main className="pt-28 pb-24 bg-[#F7F3EA] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero */}
          <div data-seccion="privadas_hero" className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6 border border-emerald-200">
              🎓 Colegios particulares
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight">
              Cafetería y comedor para{' '}
              <span className="gradient-text-primary">colegios particulares</span>
            </h1>
            <p className="mt-5 text-stone-500 text-lg leading-relaxed">
              Operamos cafeterías y comedores en colegios de CDMX y área
              metropolitana desde 2018. Cafetería: platillos a la carta, snacks y bebidas que cumplen
              con la SEP. Comedor: menú del día de 3 o 4 tiempos, por turnos. Calidad premium, menús conforme a la SEP y tecnología
              propia, con efectivo en caja para quien lo prefiera.
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

          {/* Stats strip */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { n: '2018', t: 'año de fundación' },
              { n: '4.9/5', t: 'de satisfacción' },
              { n: 'SEP', t: 'menús conforme a Lineamientos' },
              { n: 'ERP', t: 'y punto de venta propios' },
            ].map(s => (
              <div key={s.t} className="p-5 rounded-2xl bg-white border-2 border-stone-100 shadow-sm text-center">
                <p className="text-2xl md:text-3xl font-black text-emerald-600">{s.n}</p>
                <p className="text-xs md:text-sm text-stone-500 font-medium mt-1">{s.t}</p>
              </div>
            ))}
          </div>

          <QueVendemos />

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
              , mantener permisos sanitarios y protocolos de higiene, y atender todos los días
              las expectativas de cientos de familias. Para la mayoría de los colegios privados,
              ese esfuerzo distrae de lo esencial: educar. Por eso las mejores instituciones
              trabajan con un operador especializado en cafeterías para escuelas privadas.
            </p>
            <p>
              En Nutri Cafeterías asumimos la operación completa — desde el menú con criterios
              nutrimentales de la SEP hasta el cobro con app, tótem, reconocimiento facial o efectivo en caja — con un modelo
              de concesión que definimos con cada escuela. Si tu institución también
              necesita comida completa por turnos, conoce nuestro{' '}
              <Link href="/comedores-escolares" className="text-emerald-600 font-bold hover:underline">
                comedor escolar
              </Link>{' '}
              y, para graduaciones o juntas de consejo,{' '}
              <Link href="/catering-escolar" className="text-emerald-600 font-bold hover:underline">
                eventos escolares
              </Link>
              . Y si estás comparando opciones, te dejamos nuestra{' '}
              <Link href="/blog/como-elegir-operador-cafeteria-escolar" className="text-emerald-600 font-bold hover:underline">
                guía para elegir al mejor proveedor de cafetería escolar
              </Link>
              .
            </p>
          </div>

          {/* Respaldos */}
          <div className="mt-20">
            <Respaldos />
          </div>

          {/* CTA final */}
          <div className="mt-16 p-10 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
            <p className="text-2xl md:text-3xl font-black text-white">
              Que la hora de comer sea la mejor parte del día 🏆
            </p>
            <p className="text-emerald-100 mt-2 mb-6">
              Agenda una visita y conoce nuestra operación en vivo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:scale-[1.03]"
              >
                Agendar reunión gratis →
              </a>
              <a
                href={waHref('Hola, me interesa la cafetería o el comedor para mi colegio', 'privadas')}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp_cta_final"
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
