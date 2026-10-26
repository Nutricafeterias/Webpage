import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { RecursoDescargable } from '@/components/RecursoDescargable'
import { PruebaSocial } from '@/components/PruebaSocial'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { waHref } from '@/lib/whatsapp'

/** Tema comercial del artículo para elegir el CTA contextual. */
export type TemaBlog = 'menus' | 'lineamientos' | 'comedor' | 'cafeteria'

export function temaDeArticulo(slug: string): TemaBlog {
  if (/menu/.test(slug)) return 'menus'
  if (/comedor|desayuno|ultraprocesados/.test(slug)) return 'comedor'
  if (/sep|chatarra|normatividad|scjn|sellos|multa|regreso|colorantes|agua|registro-nacional|fallo|reglas/.test(slug)) return 'lineamientos'
  return 'cafeteria'
}

const FINAL: Record<TemaBlog, { titulo: string; texto: string; boton: string; motivo: string; cta: string; wa: string }> = {
  menus: {
    titulo: '¿Quieres un menú así en tu escuela?',
    texto: 'Armamos el ciclo de 4 semanas para tu escuela y hacemos la degustación sin costo.',
    boton: 'Pide una degustación',
    motivo: 'degustacion',
    cta: 'blog_final_degustacion',
    wa: 'Hola, leí su artículo sobre menús escolares y me interesa para mi escuela',
  },
  lineamientos: {
    titulo: '¿La cafetería de tu escuela ya cumple?',
    texto: 'Revisamos lo que hoy se vende y te decimos qué cambiar para cumplir con los lineamientos. Sin costo.',
    boton: 'Pedir revisión sin costo',
    motivo: 'revision',
    cta: 'blog_final_revision',
    wa: 'Hola, leí su artículo sobre los lineamientos SEP y quiero una revisión para mi escuela',
  },
  comedor: {
    titulo: '¿Buscas comedor para tu escuela?',
    texto: 'Llevamos la comida de un día completo para que la prueben la dirección, los papás y los alumnos. Sin costo.',
    boton: 'Pide una degustación',
    motivo: 'degustacion',
    cta: 'blog_final_degustacion',
    wa: 'Hola, leí su artículo y me interesa el comedor escolar para mi escuela',
  },
  cafeteria: {
    titulo: '¿Quieres ver cómo funcionaría en tu escuela?',
    texto: 'Vamos a tu escuela, vemos el espacio y te proponemos la cafetería o el comedor que necesita. Sin costo.',
    boton: 'Agenda una visita',
    motivo: 'visita',
    cta: 'blog_final_visita',
    wa: 'Hola, leí su artículo y me interesa la cafetería escolar para mi escuela',
  },
}

/** Caja a mitad del artículo: recurso descargable o diagnóstico, según el tema. */
export function CtaBlogMedio({ tema }: { tema: TemaBlog }) {
  if (tema === 'menus') return <RecursoDescargable recurso="menu-sep" className="my-4" />
  if (tema === 'lineamientos') return <RecursoDescargable recurso="checklist-sep" className="my-4" />
  const comedor = tema === 'comedor'
  return (
    <aside data-seccion="blog_cta_medio" className="my-4 p-5 md:p-6 rounded-3xl bg-white border-2 border-emerald-200 shadow-sm">
      <p className="text-lg font-black text-stone-900">
        {comedor ? 'Así se ve un comedor escolar bien hecho' : '¿Cómo está la cafetería de tu escuela hoy?'}
      </p>
      <p className="mt-1 text-stone-600 text-sm leading-relaxed">
        {comedor
          ? 'Menú semanal, porciones por edad y cómo pagan las familias, en una sola página.'
          : 'Contesta 7 preguntas y recibe al instante un diagnóstico con lo que conviene mejorar.'}
      </p>
      <Link
        href={comedor ? '/comedores-escolares' : '/diagnostico'}
        data-cta={comedor ? 'blog_medio_comedor' : 'blog_medio_diagnostico'}
        className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black transition-colors"
      >
        {comedor ? 'Ver el servicio de comedor' : 'Hacer el diagnóstico gratis'} <ArrowRight className="w-4 h-4" />
      </Link>
    </aside>
  )
}

export function CtaBlogFinal({ tema, origen }: { tema: TemaBlog; origen: string }) {
  const f = FINAL[tema]
  return (
    <div data-seccion="blog_cta_final" className="mt-14 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
      <p className="text-xl md:text-2xl font-black text-white">{f.titulo}</p>
      <p className="mt-2 text-emerald-50 text-sm md:text-base max-w-xl mx-auto">{f.texto}</p>
      <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href="#contacto-rapido"
          data-motivo={f.motivo}
          data-cta={f.cta}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-colors shadow-lg"
        >
          {f.boton} <ArrowRight className="w-4 h-4" />
        </a>
        <a
          href={waHref(f.wa, origen)}
          target="_blank"
          rel="noopener noreferrer"
          data-cta="whatsapp_blog_final"
          className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-emerald-700/60 text-white font-bold hover:bg-emerald-700 transition-colors"
        >
          <WhatsAppIcon className="w-4 h-4" /> WhatsApp
        </a>
      </div>
      <PruebaSocial tono="oscuro" className="mt-6" />
    </div>
  )
}
