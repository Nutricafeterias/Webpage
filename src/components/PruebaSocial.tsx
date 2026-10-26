import { Star } from 'lucide-react'

/**
 * Fila compacta de prueba social para poner junto a cada CTA.
 * Claims aprobados por DG el 26-oct-2026; si cambian, se corrigen aquí.
 */
export const CLAIMS = [
  { dato: '#1', texto: 'operador de cafeterías escolares en México' },
  { dato: '+1,000,000', texto: 'órdenes servidas' },
  { dato: '4.9 / 5', texto: 'de satisfacción' },
  { dato: 'Desde 2018', texto: 'en UP Campus Ciudad UP, IPADE y más' },
] as const

export function PruebaSocial({ tono = 'claro', className = '' }: { tono?: 'claro' | 'oscuro'; className?: string }) {
  const oscuro = tono === 'oscuro'
  return (
    <ul className={`flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs sm:text-sm ${oscuro ? 'text-emerald-50' : 'text-stone-600'} ${className}`}>
      {CLAIMS.map(c => (
        <li key={c.dato} className="flex items-center gap-1.5">
          {c.dato === '4.9 / 5' && <Star className={`w-3.5 h-3.5 ${oscuro ? 'fill-white text-white' : 'fill-amber-400 text-amber-400'}`} />}
          <strong className={oscuro ? 'text-white' : 'text-stone-900'}>{c.dato}</strong> {c.texto}
        </li>
      ))}
    </ul>
  )
}
