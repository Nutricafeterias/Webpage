import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { StatsBar } from '@/components/sections/StatsBar'
import { Schools } from '@/components/sections/Schools'
import { Respaldos } from '@/components/sections/Respaldos'

export const metadata: Metadata = {
  title: 'Nosotros | Nutri Cafeterías — Cafeterías y comedores escolares desde 2018',
  description:
    'Nutri Cafeterías opera cafeterías y comedores escolares en CDMX desde 2018: Universidad Panamericana, Campus Ciudad UP, e IPADE. ERP y POS propios, app para familias y efectivo en caja.',
  alternates: { canonical: 'https://cafeteriasescolares.com.mx/nosotros' },
  openGraph: {
    title: 'Nosotros — Nutri Cafeterías',
    description: 'Desde 2018 operando cafeterías y comedores escolares en México.',
    url: 'https://cafeteriasescolares.com.mx/nosotros',
    type: 'website',
  },
}

// Hechos citables: una oración, un dato. Solo claims permitidos por DG (ESTRATEGIA §4).
const hechos = [
  'Nutri Cafeterías es un operador de cafeterías y comedores escolares en la Ciudad de México y su área metropolitana.',
  'La razón social es Nutricafeterías, S.A., y factura a la escuela y a las familias que lo pidan.',
  'Nutri Cafeterías se fundó en agosto de 2018 y abrió su primera cafetería escolar en agosto de 2019.',
  'Somos el operador de cafeterías escolares #1 en México.',
  'Hemos servido más de 1,000,000 de órdenes desde 2018, según nuestros registros de venta.',
  'Nuestro servicio tiene 4.9 / 5 de satisfacción.',
  'Hoy (octubre de 2026) operamos en la Universidad Panamericana, Campus Ciudad UP, y en IPADE Business School, en la Ciudad de México.',
  'Atendemos desde preescolar hasta universidad, con dos líneas de servicio: cafetería escolar y comedor escolar.',
  'La comida del comedor se cocina el mismo día y se sirve por turnos, con porción por edad.',
  'Desarrollamos y operamos nuestro propio ERP y nuestro propio punto de venta.',
  'Las familias pagan con la App Nutri para familias o en efectivo en caja, con la misma fuerza.',
  'Tenemos tótems de autoservicio y pago con reconocimiento facial opcional, con consentimiento del tutor y alternativa sin rostro.',
  'Seguimos los Lineamientos de la SEP y la NOM-251, y operamos bajo los estándares del Distintivo H.',
]

// Qué tecnología está en operación hoy y desde cuándo (sin «próximamente»).
const tecnologiaHoy = [
  { t: 'Punto de venta propio', d: 'En operación desde septiembre de 2026. Lo desarrollamos y lo operamos nosotros.' },
  { t: 'ERP propio', d: 'En operación: inventarios, compras, recetas, caja y reportes para la dirección.' },
  { t: 'App Nutri para familias', d: 'En operación desde octubre de 2026: saldo por hijo, recargas, límite diario, alergias y avisos. Siempre con efectivo en caja.' },
  { t: 'Tótems de autoservicio', d: 'Operando en el Campus Ciudad UP de la Universidad Panamericana desde octubre de 2026.' },
  { t: 'Reconocimiento facial', d: 'En operación desde octubre de 2026, opcional, con consentimiento del tutor y alternativa sin rostro.' },
]

const BASE = 'https://cafeteriasescolares.com.mx'
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    url: `${BASE}/nosotros`,
    name: 'Nosotros — Nutri Cafeterías',
    inLanguage: 'es-MX',
    about: { '@id': `${BASE}/#organization` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Nosotros', item: `${BASE}/nosotros` },
    ],
  },
]

const valores = [
  { emoji: '🥗', title: 'Nutrición sin sacrificar sabor', desc: 'Creemos que la comida saludable solo funciona si los alumnos la eligen por gusto. Por eso cada platillo pasa el doble filtro: criterios nutrimentales de la SEP y comensal real.' },
  { emoji: '🤝', title: 'Aliados, no proveedores', desc: 'Operamos como una extensión de la escuela: su reputación es la nuestra. Resolvemos antes de que los problemas lleguen a dirección.' },
  { emoji: '🔬', title: 'Tecnología con propósito', desc: 'La innovación no es un lujo: ordena la fila, registra cada consumo y da a las familias visibilidad, sin dejar de aceptar efectivo en caja.' },
  { emoji: '📚', title: 'La cafetería también educa', desc: 'Menús visibles, alérgenos claros y alumnos que prueban y votan platillos: el receso también forma hábitos.' },
]

const equipo = [
  { emoji: '📋', title: 'Diseño de menús', desc: 'Cada ciclo de menús se diseña con criterios nutrimentales de la SEP y las necesidades de cada comunidad escolar.' },
  { emoji: '👨‍🍳', title: 'Chefs y cocineros', desc: 'Convierten el balance nutricional en platillos que compiten en antojo — y ganan.' },
  { emoji: '💻', title: 'Equipo de tecnología', desc: 'Desarrollan y operan nuestro ERP y punto de venta propios, los tótems, el reconocimiento facial opcional y la app para familias.' },
  { emoji: '🛡️', title: 'Supervisores de calidad', desc: 'Auditan higiene, temperaturas y servicio en cada escuela, todos los días.' },
]

export default function NosotrosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main className="pt-28 bg-[#F7F3EA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto pb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6 border border-emerald-200">
              Nosotros
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight">
              Desde 2018{' '}
              <span className="gradient-text-primary">alimentando generaciones</span>
            </h1>
            <p className="mt-5 text-stone-500 text-lg leading-relaxed">
              Nutri Cafeterías nació con una convicción: la cafetería escolar puede servir comida real,
              a tiempo y a la vista. Abrimos nuestra primera cafetería escolar en agosto de 2019,
              tras ganar nuestra primera licitación, y desde entonces operamos cafeterías y comedores
              escolares en la Ciudad de México.
            </p>
          </div>
        </div>

        <StatsBar />

        {/* Por qué Nutri: hechos en frases cortas */}
        <section id="por-que-nutri" data-seccion="nosotros_hechos" className="py-20 bg-[#F7F3EA]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-3">
              Por qué Nutri, <span className="gradient-text-primary">en datos</span>
            </h2>
            <p className="text-center text-stone-500 mb-10">Lo esencial de Nutri Cafeterías, en una línea cada cosa.</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {hechos.map(h => (
                <li key={h} className="flex items-start gap-3 p-4 rounded-2xl bg-white border-2 border-stone-100 text-sm text-stone-700 leading-relaxed">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-black">✓</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tecnología en operación hoy */}
        <section id="tecnologia-hoy" data-seccion="nosotros_tecnologia_hoy" className="pb-20 bg-[#F7F3EA]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-3">
              Tecnología <span className="gradient-text-primary">en operación hoy</span>
            </h2>
            <p className="text-center text-stone-500 mb-10">Lo que ya funciona en nuestras cafeterías, con la fecha en que entró en operación.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {tecnologiaHoy.map(x => (
                <div key={x.t} className="p-5 rounded-2xl bg-white border-2 border-stone-100 shadow-sm">
                  <h3 className="font-black text-stone-900 mb-1">{x.t}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{x.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Valores */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-12">
              Lo que nos hace{' '}
              <span className="gradient-text-primary">diferentes</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {valores.map(v => (
                <div key={v.title} className="p-7 rounded-2xl border-2 border-stone-100 bg-white shadow-sm card-lift">
                  <div className="text-4xl mb-3">{v.emoji}</div>
                  <h3 className="font-black text-stone-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Respaldos */}
        <div className="py-20 bg-stone-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <Respaldos tono="oscuro" titulo={<>Respaldo <span className="text-emerald-400">verificable</span></>} />
          </div>
        </div>

        {/* Equipo */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-12">
              Un equipo completo{' '}
              <span className="gradient-text-primary">detrás de cada comida</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {equipo.map(e => (
                <div key={e.title} className="p-6 rounded-2xl border-2 border-stone-100 bg-white shadow-sm text-center card-lift">
                  <div className="text-4xl mb-3">{e.emoji}</div>
                  <h3 className="font-black text-stone-900 text-sm mb-2">{e.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Schools />

        {/* CTA */}
        <div className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="p-10 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
              <p className="text-2xl md:text-3xl font-black text-white">
                Conócenos en acción
              </p>
              <p className="text-emerald-100 mt-2 mb-6">
                Visita una de nuestras cafeterías operando — es la mejor carta de presentación.
              </p>
              <a
                href="/#contacto"
                data-cta="nosotros_agendar_visita"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:scale-[1.03]"
              >
                Agendar una visita
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
