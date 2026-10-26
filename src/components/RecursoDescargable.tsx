'use client'

import { useState } from 'react'
import { Download, FileText, CheckCircle2 } from 'lucide-react'
import { FormularioCorto } from '@/components/FormularioCorto'
import { WaLink } from '@/components/WaLink'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { capturar } from '@/lib/analitica'
import { RECURSOS, type ClaveRecurso } from '@/data/recursos'

/**
 * Lead magnet: el contenido sigue visible en la página (SEO); el PDF
 * imprimible se entrega al dejar nombre, escuela y WhatsApp o correo.
 */
export function RecursoDescargable({ recurso, className = '' }: { recurso: ClaveRecurso; className?: string }) {
  const r = RECURSOS[recurso]
  const [listo, setListo] = useState(false)

  const descargar = () =>
    capturar('lead_magnet_descarga', { recurso: r.id, pagina: window.location.pathname })

  return (
    <section
      id={`recurso-${r.id}`}
      data-seccion={`recurso_${r.id}`}
      className={`scroll-mt-28 rounded-3xl bg-white border-2 border-emerald-200 shadow-lg shadow-emerald-100/60 overflow-hidden ${className}`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 md:p-8 bg-emerald-50/70">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500 text-white text-xs font-bold">
            <FileText className="w-3.5 h-3.5" /> PDF gratis · {r.paginas}
          </span>
          <h2 className="mt-4 text-2xl md:text-3xl font-black text-stone-900 leading-tight">{r.titulo}</h2>
          <p className="mt-3 text-stone-600 leading-relaxed hidden md:block">{r.descripcion}</p>
          <ul className="mt-3 md:mt-4 space-y-2">
            {r.incluye.map(i => (
              <li key={i} className="flex items-start gap-2 text-sm text-stone-700">
                <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-500" /> {i}
              </li>
            ))}
          </ul>
        </div>
        <div className="p-6 md:p-8">
          {listo ? (
            <div className="text-center py-4">
              <CheckCircle2 className="w-12 h-12 mx-auto text-emerald-500" />
              <p className="mt-3 text-xl font-black text-stone-900">Listo, ya es tuyo</p>
              <p className="mt-1 text-stone-600 text-sm">Descárgalo, imprímelo o compártelo con tu equipo.</p>
              <a
                href={r.archivo}
                download
                target="_blank"
                rel="noopener"
                onClick={descargar}
                data-cta={`descarga_${r.id}`}
                className="mt-5 w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black transition-colors"
              >
                <Download className="w-4 h-4" /> Descargar el PDF
              </a>
              <div className="mt-6 p-4 rounded-2xl bg-stone-50 border border-stone-200 text-left">
                <p className="text-sm font-bold text-stone-800">{r.siguientePaso}</p>
                <WaLink
                  mensaje={r.mensajeWa}
                  cta={`whatsapp_tras_${r.id}`}
                  className="mt-3 inline-flex items-center gap-2 text-emerald-700 font-bold text-sm hover:underline"
                >
                  <WhatsAppIcon className="w-4 h-4" /> Escríbenos por WhatsApp
                </WaLink>
              </div>
            </div>
          ) : (
            <>
              <p className="font-black text-stone-900 mb-4">Déjanos tus datos y descárgalo al instante</p>
              <FormularioCorto
                id={`recurso_${r.id}`}
                mensaje={`Descargó: ${r.titulo} (PDF)`}
                boton={r.boton}
                conRol
                nota="Descarga inmediata. No compartimos tus datos."
                onExito={() => setListo(true)}
              />
            </>
          )}
        </div>
      </div>
    </section>
  )
}
