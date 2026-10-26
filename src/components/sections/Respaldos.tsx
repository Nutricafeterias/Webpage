import { respaldos } from '@/data/respaldos'

type Props = {
  /** 'claro' sobre fondo crema/blanco; 'oscuro' sobre fondo carbón. */
  tono?: 'claro' | 'oscuro'
  titulo?: React.ReactNode
  subtitulo?: string
}

/** Respaldos de cumplimiento de Nutri (fuente única: src/data/respaldos.ts). */
export function Respaldos({
  tono = 'claro',
  titulo = (
    <>
      Respaldo <span className="gradient-text-primary">con papeles en mano</span>
    </>
  ),
  subtitulo = 'No pedimos que confíes en nuestra palabra: te mostramos los documentos.',
}: Props) {
  const oscuro = tono === 'oscuro'
  return (
    <div data-seccion="respaldos">
      <h2 className={`text-3xl md:text-4xl font-black text-center mb-4 ${oscuro ? 'text-white' : 'text-stone-900'}`}>{titulo}</h2>
      <p className={`text-center max-w-xl mx-auto mb-10 ${oscuro ? 'text-stone-400' : 'text-stone-600'}`}>{subtitulo}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {respaldos.map(r => (
          <div
            key={r.clave}
            className={`p-6 rounded-2xl border ${oscuro ? 'bg-stone-800/80 border-stone-700' : 'bg-white border-stone-100 shadow-sm'}`}
          >
            <div className="text-3xl mb-3">{r.emoji}</div>
            <h3 className={`font-black text-sm mb-1.5 ${oscuro ? 'text-white' : 'text-stone-900'}`}>{r.titulo}</h3>
            <p className={`text-xs leading-relaxed ${oscuro ? 'text-stone-400' : 'text-stone-600'}`}>{r.texto}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
