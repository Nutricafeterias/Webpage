import fs from 'node:fs'
import path from 'node:path'
import Image from 'next/image'

/**
 * Foto de /public/img/comedor con respaldo: si el archivo todavía no existe
 * (renders en camino), pinta un bloque con gradiente de marca en lugar de un
 * 404. Componente de servidor: la comprobación ocurre al renderizar/compilar.
 * Todas las fotos son renders, por eso llevan la etiqueta «Concepto Nutri».
 */
export function existeFotoComedor(archivo: string) {
  try {
    return fs.existsSync(path.join(process.cwd(), 'public', 'img', 'comedor', archivo))
  } catch {
    return false
  }
}

type Props = {
  archivo: string
  alt: string
  sizes: string
  preload?: boolean
  /** Emoji del bloque de respaldo mientras no exista la imagen. */
  emoji?: string
  className?: string
  imgClassName?: string
  etiqueta?: 'arriba' | 'abajo' | false
}

export function FotoComedor({
  archivo,
  alt,
  sizes,
  preload,
  emoji = '🍽️',
  className = '',
  imgClassName = '',
  etiqueta = 'arriba',
}: Props) {
  const existe = existeFotoComedor(archivo)
  return (
    <div className={`${/\babsolute\b/.test(className) ? '' : 'relative '}overflow-hidden ${className}`}>
      {existe ? (
        <Image
          src={`/img/comedor/${archivo}`}
          alt={alt}
          fill
          sizes={sizes}
          preload={preload}
          // En desarrollo no se optimiza para no generar caché en disco.
          unoptimized={process.env.NODE_ENV === 'development'}
          className={`object-cover ${imgClassName}`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-700 via-emerald-500 to-emerald-300"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 30%, #F5B942 0, transparent 35%), radial-gradient(circle at 80% 70%, #F7F3EA 0, transparent 30%)',
            }}
          />
          <span aria-hidden className="relative text-6xl md:text-7xl drop-shadow-lg">{emoji}</span>
        </div>
      )}
      {etiqueta && (
        <span
          className={`absolute ${etiqueta === 'arriba' ? 'top-3' : 'bottom-3'} right-3 z-10 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-stone-700 shadow-sm`}
        >
          Concepto Nutri
        </span>
      )}
    </div>
  )
}
