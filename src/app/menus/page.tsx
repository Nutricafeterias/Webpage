import type { Metadata } from 'next'
import Link from 'next/link'
import { Download, ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { MenuExplorer } from '@/components/sections/MenuExplorer'
import { RecursoDescargable } from '@/components/RecursoDescargable'
import { PruebaSocial } from '@/components/PruebaSocial'
import { menuSemana } from '@/data/comedor'
import { waHref } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Menú escolar semanal conforme a la SEP: ejemplo para cafetería y comedor | Nutri Cafeterías',
  description:
    'Ejemplos de menús escolares conforme a la SEP: semana tipo de comedor (entrada, plato fuerte, verdura, fruta y agua) y carta de cafetería escolar sin sellos. Descárgalo gratis en PDF.',
  keywords: [
    'menú escolar',
    'menús escolares ejemplos',
    'menú escolar semanal',
    'menú para cafetería escolar',
    'menús escolares SEP',
    'menú comedor escolar SEP',
    'menú escolar saludable',
  ],
  alternates: { canonical: 'https://cafeteriasescolares.com.mx/menus' },
  openGraph: {
    title: 'Menú escolar semanal conforme a la SEP — ejemplos para comedor y cafetería',
    description: 'Semana tipo de comedor y carta de cafetería escolar conforme a la SEP. Descárgalo gratis en PDF.',
    url: 'https://cafeteriasescolares.com.mx/menus',
    type: 'website',
  },
}

const reglas = [
  { si: true, t: 'Verdura y fruta fresca todos los días' },
  { si: true, t: 'Cereales integrales: tortilla de maíz, arroz, avena, pan integral' },
  { si: true, t: 'Proteína diaria: pollo, res, pescado, huevo, frijol, lenteja o garbanzo' },
  { si: true, t: 'Agua natural como bebida principal' },
  { si: false, t: 'Productos con uno o más sellos de exceso' },
  { si: false, t: 'Refrescos, frituras, dulces y pastelitos industrializados' },
]

const faqs = [
  {
    q: '¿Qué debe llevar un menú escolar según la SEP?',
    a: 'Verdura y fruta fresca, cereales de preferencia integrales, una fuente de proteína (carnes, huevo, leguminosas o lácteos) y agua natural como bebida principal. No se pueden vender alimentos ni bebidas con sellos de exceso dentro de la escuela.',
  },
  {
    q: '¿Cuál es la diferencia entre el menú de comedor y el de cafetería?',
    a: 'En el comedor todos reciben el menú completo del día (entrada, plato fuerte, fruta y agua) en su turno. En la cafetería los alumnos eligen a la carta platillos, snacks y bebidas permitidos.',
  },
  {
    q: '¿Puedo usar este menú en mi escuela?',
    a: 'Sí, es un ejemplo para orientarte. Si quieres que lo sirvamos nosotros, armamos un ciclo de 4 semanas para tu escuela según la edad de los alumnos y hacemos la degustación sin costo.',
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function MenusPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <Navbar />
      <main className="pt-24 md:pt-28 pb-20 bg-[#F7F3EA] min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero: responde la búsqueda en la primera pantalla */}
          <div data-seccion="menus_hero" className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <h1 className="text-[2rem] leading-[1.1] sm:text-5xl md:text-6xl font-black text-stone-900">
              Menú escolar semanal{' '}
              <span className="gradient-text-primary">conforme a la SEP</span>
            </h1>
            <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
              Dos ejemplos reales: la semana tipo de un <strong className="text-stone-800">comedor escolar</strong> y
              la carta de una <strong className="text-stone-800">cafetería escolar</strong> sin productos con sellos.
              Úsalos de guía o descárgalos en PDF.
            </p>
            <nav className="mt-5 flex flex-wrap justify-center gap-2 text-sm font-bold" aria-label="Ir a">
              <a href="#comedor" className="px-4 py-2 rounded-full bg-white border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50">🍲 Menú de comedor</a>
              <a href="#cafeteria" className="px-4 py-2 rounded-full bg-white border-2 border-emerald-200 text-emerald-700 hover:bg-emerald-50">🥪 Menú de cafetería</a>
              <a href="#recurso-menu-sep" data-cta="ancla_pdf_menu" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600">
                <Download className="w-4 h-4" /> PDF gratis
              </a>
            </nav>
          </div>

          {/* 1. Semana tipo de comedor */}
          <section id="comedor" data-seccion="menus_comedor" className="scroll-mt-24">
            <div className="flex items-end justify-between gap-4 mb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-stone-900">Menú de comedor escolar: semana tipo</h2>
                <p className="text-stone-600 text-sm mt-1">Entrada, plato fuerte con proteína, verdura, fruta de postre y agua. En 3 o 4 tiempos.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {menuSemana.map(d => (
                <article key={d.dia} className="p-4 rounded-2xl bg-white border-2 border-stone-100 shadow-sm">
                  <p className="text-emerald-700 font-black">{d.dia}</p>
                  <p className="mt-1 font-bold text-stone-900 leading-snug">{d.fuerte}</p>
                  <dl className="mt-2 space-y-1 text-sm text-stone-600">
                    <div><dt className="inline font-semibold text-stone-500">Entrada: </dt><dd className="inline">{d.entrada}</dd></div>
                    <div><dt className="inline font-semibold text-stone-500">Verdura: </dt><dd className="inline">{d.verdura}</dd></div>
                    <div><dt className="inline font-semibold text-stone-500">Postre: </dt><dd className="inline">{d.postre}</dd></div>
                    <div><dt className="inline font-semibold text-stone-500">Agua: </dt><dd className="inline">{d.agua}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
            <p className="mt-3 text-sm text-stone-500">
              La porción cambia por edad. Así funciona el{' '}
              <Link href="/comedores-escolares" className="text-emerald-700 font-bold hover:underline">servicio de comedor escolar</Link>.
            </p>
          </section>

          {/* Reglas SEP en 30 segundos */}
          <section data-seccion="menus_reglas" className="mt-10 p-5 md:p-6 rounded-3xl bg-white border-2 border-stone-100 shadow-sm">
            <h2 className="text-xl md:text-2xl font-black text-stone-900">Qué debe tener un menú escolar según la SEP</h2>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {reglas.map(r => (
                <li key={r.t} className="flex items-start gap-2 text-stone-700">
                  <span className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full text-white text-xs font-black flex items-center justify-center ${r.si ? 'bg-emerald-500' : 'bg-red-500'}`}>
                    {r.si ? '✓' : '✕'}
                  </span>
                  {r.t}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-stone-500">
              Detalle completo en{' '}
              <Link href="/lineamientos-sep" className="text-emerald-700 font-bold hover:underline">qué se puede y qué no se puede vender en la escuela</Link>.
            </p>
          </section>

          {/* Lead magnet */}
          <RecursoDescargable recurso="menu-sep" className="mt-10" />

          {/* 2. Carta de cafetería */}
          <section id="cafeteria" data-seccion="menus_cafeteria" className="mt-14 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-black text-stone-900">Menú de cafetería escolar: carta de ejemplo</h2>
            <p className="text-stone-600 text-sm mt-1 mb-6">
              Platillos a la carta, snacks y bebidas sin sellos, con calorías y proteína aproximadas. Filtra por tipo o por dieta.
            </p>
            <MenuExplorer />
            <p className="mt-6 text-sm text-stone-500">
              Así funciona la{' '}
              <Link href="/cafeterias-escolares" className="text-emerald-700 font-bold hover:underline">cafetería escolar</Link>{' '}
              que operamos. Cada escuela recibe un ciclo de 4 semanas adaptado a su comunidad, con manejo documentado de alérgenos.
            </p>
          </section>

          {/* FAQ */}
          <section data-seccion="menus_faq" className="mt-14 max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-stone-900 mb-4">Preguntas frecuentes sobre el menú escolar</h2>
            <div className="space-y-3">
              {faqs.map(f => (
                <details key={f.q} className="group p-4 rounded-2xl bg-white border-2 border-stone-100">
                  <summary className="cursor-pointer font-bold text-stone-900 list-none flex justify-between gap-3">
                    {f.q} <span className="text-emerald-600 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-2 text-stone-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA para escuelas */}
          <section data-seccion="menus_cta_final" className="mt-14 p-6 md:p-10 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
            <p className="text-2xl md:text-3xl font-black text-white">¿Quieres este menú en tu escuela?</p>
            <p className="text-emerald-50 mt-2 mb-6 max-w-xl mx-auto">
              Llevamos la comida de un día completo para que la prueben la dirección, los papás y los alumnos. Sin costo y sin compromiso.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#contacto-rapido"
                data-motivo="degustacion"
                data-cta="agenda_degustacion_menus"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-colors shadow-lg"
              >
                Pide una degustación <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href={waHref('Hola, vi el menú escolar de ejemplo y me interesa para mi escuela', 'menus')}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp_cta_final_menus"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-emerald-700/60 text-white font-bold hover:bg-emerald-700 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp
              </a>
            </div>
            <PruebaSocial tono="oscuro" className="mt-6" />
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
