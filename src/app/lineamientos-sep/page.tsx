import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

export const metadata: Metadata = {
  title: 'Lineamientos SEP para Cafeterías Escolares | Cumplimiento Garantizado — Nutri Cafeterías',
  description:
    'Los nuevos lineamientos de la SEP prohíben la venta de comida chatarra en escuelas de México. Te explicamos qué exige la norma, qué riesgos corre tu escuela y cómo Nutri Cafeterías garantiza el cumplimiento total.',
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
      'La comida chatarra está prohibida en las escuelas de México. Así garantizamos el cumplimiento total — la responsabilidad deja de ser tuya.',
    url: 'https://cafeteriasescolares.com.mx/lineamientos-sep',
    type: 'website',
  },
}

const exigencias = [
  { emoji: '🚫', title: 'Prohibida la comida chatarra', desc: 'No se pueden vender alimentos y bebidas con sellos de exceso (calorías, azúcares, grasas, sodio) dentro de los planteles del Sistema Educativo Nacional.' },
  { emoji: '💧', title: 'Agua natural disponible', desc: 'Las escuelas deben garantizar acceso a agua potable natural como opción principal de hidratación.' },
  { emoji: '🍎', title: 'Alimentos frescos y naturales', desc: 'Los lineamientos privilegian frutas, verduras, cereales integrales y preparaciones naturales sobre productos ultraprocesados.' },
  { emoji: '⚖️', title: 'La escuela es responsable', desc: 'La autoridad educativa del plantel responde por lo que se vende adentro — con sanciones y multas por incumplimiento.' },
]

const garantias = [
  'Menús diseñados por nutriólogos, verificados contra los lineamientos vigentes de la SEP antes de servirse',
  'Cero productos con sellos de exceso en nuestras cafeterías y comedores',
  'Agua natural y bebidas bajas en azúcar como oferta principal de hidratación',
  'Documentación de cumplimiento disponible para la dirección ante cualquier revisión o auditoría',
  'Actualización continua: cuando la norma cambia, tu menú cambia — sin que la escuela tenga que hacer nada',
  'Cumplimiento garantizado por contrato: la responsabilidad operativa es nuestra',
]

export default function LineamientosSepPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 bg-[#F7F3EA] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 font-bold text-sm mb-6 border border-rose-200">
              ⚠️ Regulación vigente
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight">
              Lineamientos SEP:{' '}
              <span className="gradient-text-primary">tu cafetería ya no puede fallar</span>
            </h1>
            <p className="mt-5 text-stone-500 text-lg leading-relaxed">
              Desde 2025, la venta de comida chatarra está prohibida en las escuelas de México
              — y la responsabilidad recae en la institución. Te explicamos qué exige la norma
              y cómo con nosotros el cumplimiento deja de ser tu problema.
            </p>
          </div>

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

          {/* Cómo lo garantizamos */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-8">
              <ShieldCheck className="w-8 h-8 text-emerald-500" />
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center">
                Así lo{' '}
                <span className="gradient-text-primary">garantizamos</span>
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

          {/* CTA */}
          <div className="mt-16 p-10 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
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
                href="https://wa.me/5215567034269?text=Hola!%20Quiero%20una%20revisión%20de%20cumplimiento%20SEP%20para%20la%20cafetería%20de%20mi%20escuela."
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-emerald-700/60 text-white font-bold hover:bg-emerald-700 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" /> Revisión por WhatsApp
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
