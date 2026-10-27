import Image from 'next/image'

/**
 * Foto REAL de una cafetería que operamos (p. ej. /public/img/cafeteria).
 * A diferencia de FotoComedor (renders), no lleva la etiqueta «Concepto Nutri».
 * Opcionalmente muestra la etiqueta «Foto real».
 */
type Props = {
  src: string
  alt: string
  sizes: string
  preload?: boolean
  className?: string
  imgClassName?: string
  etiqueta?: string | false
  posicion?: string
}

export function FotoReal({
  src,
  alt,
  sizes,
  preload,
  className = '',
  imgClassName = '',
  etiqueta = false,
  posicion = 'object-center',
}: Props) {
  return (
    <div className={`${/\babsolute\b/.test(className) ? '' : 'relative '}overflow-hidden bg-emerald-900 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        // En desarrollo no se optimiza para no generar caché en disco.
        unoptimized={process.env.NODE_ENV === 'development'}
        className={`object-cover ${posicion} ${imgClassName}`}
      />
      {etiqueta && (
        <span className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-white/85 backdrop-blur text-[10px] font-bold uppercase tracking-wider text-stone-700 shadow-sm">
          {etiqueta}
        </span>
      )}
    </div>
  )
}
