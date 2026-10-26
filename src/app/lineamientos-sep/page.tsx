import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { waHref } from '@/lib/whatsapp'
import { Respaldos } from '@/components/sections/Respaldos'
import { RecursoDescargable } from '@/components/RecursoDescargable'
import { PruebaSocial } from '@/components/PruebaSocial'

export const metadata: Metadata = {
  title: 'Lineamientos SEP para cafetería y comedor escolar: qué exige y cómo cumplir | Nutri',
  description:
    'Qué exigen los Lineamientos SEP (DOF 30-sep-2024, vigentes desde el 29-mar-2025) en la cafetería y el comedor de tu escuela, qué arriesga la dirección y cómo un operador te ayuda a cumplir. Pide una revisión sin costo.',
  keywords: [
    'lineamientos SEP alimentos escuelas',
    'prohibición comida chatarra escuelas SEP',
    'lineamientos SEP cafeterías escolares 2025',
    'multas venta comida chatarra escuela',
    'normativa SEP comedor escolar',
    'cumplimiento SEP cafetería escolar',
  ],
  alternates: { canonical: 'https://cafeteriasescolares.com.mx/lineamientos-sep' },
  openGraph: {
    title: 'Lineamientos SEP: lo que tu escuela debe cumplir en la cafetería',
    description:
      'La comida chatarra está prohibida en las escuelas de México. Así cumplimos con los lineamientos en tu cafetería, paso a paso.',
    url: 'https://cafeteriasescolares.com.mx/lineamientos-sep',
    type: 'website',
  },
}

const sePuede = [
  'Fruta y verdura fresca',
  'Platillos preparados: guisados, tacos, tortas, quesadillas y sopas, sin exceso de sal ni grasa',
  'Cereales integrales, leguminosas, huevo, carnes y lácteos',
  'Agua natural, siempre disponible',
  'Empaquetados sin ningún sello ni leyenda de cafeína o edulcorantes',
]
const noSePuede = [
  'Alimentos y bebidas con uno o más sellos de exceso (calorías, azúcares, grasas saturadas, grasas trans, sodio)',
  'Productos con leyenda de cafeína o edulcorantes',
  'Refrescos y bebidas azucaradas',
  'Frituras, dulces y pastelitos industrializados',
  'Publicidad de productos no saludables dentro de la escuela',
]
const datos = [
  { k: 'Desde cuándo', v: 'Publicados en el DOF el 30-sep-2024; obligatorios desde el 29-mar-2025.' },
  { k: 'A quién aplica', v: 'A todas las escuelas del Sistema Educativo Nacional, públicas y privadas; la Corte confirmó que incluye prepas y universidades.' },
  { k: 'Quién responde', v: 'La escuela, aunque la cafetería la opere un tercero.' },
  { k: 'Qué arriesga', v: 'Multas de la Ley General de Educación y, en particulares, hasta el retiro del RVOE en casos graves.' },
]

const exigencias = [
  { emoji: '🚫', title: 'Prohibida la comida chatarra', desc: 'No se pueden vender alimentos y bebidas con sellos de exceso (calorías, azúcares, grasas, sodio) dentro de los planteles del Sistema Educativo Nacional.' },
  { emoji: '💧', title: 'Agua natural disponible', desc: 'Las escuelas deben garantizar acceso a agua potable natural como opción principal de hidratación.' },
  { emoji: '🍎', title: 'Alimentos frescos y naturales', desc: 'Los lineamientos privilegian frutas, verduras, cereales integrales y preparaciones naturales sobre productos ultraprocesados.' },
  { emoji: '⚖️', title: 'La escuela es responsable', desc: 'La autoridad educativa del plantel responde por lo que se vende adentro — con sanciones y multas por incumplimiento.' },
]

const garantias = [
  'Menús diseñados con criterios nutrimentales de la SEP, verificados contra los lineamientos vigentes de la SEP antes de servirse',
  'Cero productos con sellos de exceso en nuestras cafeterías y comedores',
  'Agua natural y bebidas bajas en azúcar como oferta principal de hidratación',
  'Documentación de cumplimiento disponible para la dirección ante cualquier revisión o auditoría',
  'Actualización continua: cuando la norma cambia, tu menú cambia — sin que la escuela tenga que hacer nada',
  'La operación diaria de la cafetería y su cumplimiento quedan a nuestro cargo, por contrato',
]

export default function LineamientosSepPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 bg-[#F7F3EA] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero: responde la búsqueda en la primera pantalla */}
          <div data-seccion="sep_hero" className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-800 font-bold text-sm mb-4 md:mb-6 border border-emerald-200">
              Vigentes desde el 29 de marzo de 2025
            </span>
            <h1 className="text-[2rem] leading-[1.1] sm:text-5xl md:text-6xl font-black text-stone-900">
              Lineamientos SEP:{' '}
              <span className="gradient-text-primary">qué se puede vender en la escuela y qué no</span>
            </h1>
            <p className="mt-4 text-stone-600 text-base sm:text-lg leading-relaxed">
              El resumen en lenguaje claro para directores, maestros y familias: qué permite la norma en la
              cafetería y el comedor, a quién aplica y quién responde si no se cumple.
            </p>
          </div>

          {/* Resumen en 30 segundos */}
          <section data-seccion="sep_resumen" className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            <div className="p-5 md:p-6 rounded-3xl bg-white border-2 border-emerald-200 shadow-sm">
              <h2 className="text-xl font-black text-emerald-700">✓ Sí se puede vender</h2>
              <ul className="mt-3 space-y-2">
                {sePuede.map(t => (
                  <li key={t} className="flex items-start gap-2 text-stone-700">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500 text-white text-xs font-black flex items-center justify-center">✓</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 md:p-6 rounded-3xl bg-white border-2 border-red-200 shadow-sm">
              <h2 className="text-xl font-black text-red-700">✕ No se puede vender</h2>
              <ul className="mt-3 space-y-2">
                {noSePuede.map(t => (
                  <li key={t} className="flex items-start gap-2 text-stone-700">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-red-500 text-white text-xs font-black flex items-center justify-center">✕</span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <dl data-seccion="sep_datos" className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto">
            {datos.map(d => (
              <div key={d.k} className="p-4 rounded-2xl bg-white/70 border border-stone-200">
                <dt className="text-xs font-black uppercase tracking-wide text-emerald-700">{d.k}</dt>
                <dd className="mt-1 text-sm text-stone-700 leading-relaxed">{d.v}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-center text-sm text-stone-500">
            ¿Buscas ejemplos? Mira un{' '}
            <Link href="/menus" className="text-emerald-700 font-bold hover:underline">menú escolar semanal conforme a la SEP</Link>.
          </p>

          {/* Lead magnet */}
          <RecursoDescargable recurso="checklist-sep" className="mt-10 max-w-5xl mx-auto" />

          {/* Qué exige la norma */}
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
              Lo que exige la norma a{' '}
              <span className="gradient-text-primary">toda escuela</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {exigencias.map(e => (
                <div key={e.title} className="card-lift p-6 rounded-2xl border-2 border-stone-100 bg-white shadow-sm">
                  <div className="text-4xl mb-3">{e.emoji}</div>
                  <h3 className="font-black text-stone-900 mb-2 text-base">{e.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-stone-400 text-sm max-w-2xl mx-auto">
              Basado en los Lineamientos generales para el expendio y distribución de alimentos
              y bebidas en las escuelas del Sistema Educativo Nacional y sus actualizaciones.
            </p>
          </div>

          {/* El riesgo */}
          <div className="mt-16 max-w-3xl mx-auto p-8 rounded-3xl bg-stone-900 text-center shadow-xl">
            <p className="text-xl md:text-2xl font-black text-white leading-snug">
              Si tu proveedor de cafetería no domina la norma,{' '}
              <span className="text-rose-400">el riesgo lo corre tu escuela</span>:
              sanciones, multas y un golpe a la reputación ante los padres.
            </p>
          </div>

          {/* Cómo cumplimos */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <ShieldCheck className="w-8 h-8 text-emerald-500" />
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center">
                Así{' '}
                <span className="gradient-text-primary">cumplimos</span>
              </h2>
            </div>
            <div className="space-y-3">
              {garantias.map(g => (
                <div key={g} className="flex items-start gap-3 p-5 rounded-2xl bg-white border-2 border-emerald-100 shadow-sm">
                  <span className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-black">✓</span>
                  <p className="text-stone-700 font-medium leading-relaxed">{g}</p>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 max-w-3xl mx-auto text-center text-stone-600">
            ¿Tu escuela da comida completa a los alumnos? Así aplicamos estos lineamientos en el{' '}
            <Link href="/comedores-escolares" className="text-emerald-600 font-bold hover:underline">
              comedor escolar
            </Link>
            : menú de 3 o 4 tiempos, porción por edad y bitácoras NOM-251. Y en la{' '}
            <Link href="/cafeterias-escolares" className="text-emerald-600 font-bold hover:underline">
              cafetería escolar
            </Link>
            , solo productos permitidos.
          </p>

          {/* Respaldos */}
          <div className="mt-20">
            <Respaldos />
          </div>

          {/* CTA */}
          <div data-seccion="sep_cta_final" className="mt-16 p-6 md:p-10 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
            <p className="text-2xl md:text-3xl font-black text-white">
              ¿Tu cafetería actual cumple? Averígualo hoy
            </p>
            <p className="text-emerald-100 mt-2 mb-6">
              Haz el diagnóstico gratuito o agenda una revisión de cumplimiento sin costo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/diagnostico"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:scale-[1.03]"
              >
                Evaluar mi cafetería gratis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#contacto-rapido"
                data-motivo="revision"
                data-cta="pide_revision_sep"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/15 text-white font-bold hover:bg-white/25 transition-colors border border-white/30"
              >
                Pedir revisión sin costo
              </a>
              <a
                href={waHref('Hola, quiero una revisión de cumplimiento SEP para la cafetería o comedor de mi escuela', 'sep')}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp_revision_sep"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-emerald-700/60 text-white font-bold hover:bg-emerald-700 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" /> Revisión por WhatsApp
              </a>
            </div>
            <PruebaSocial tono="oscuro" className="mt-6" />
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
