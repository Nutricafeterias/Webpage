'use client'

import { usePathname } from 'next/navigation'
import { waHref, origenDesdeRuta } from '@/lib/whatsapp'

/** Enlace a WhatsApp que agrega el código de origen de la página actual. */
export function WaLink({
  mensaje = 'Hola, me interesa conocer más sobre Nutri Cafeterías',
  origen,
  cta,
  className,
  children,
  ...rest
}: {
  mensaje?: string
  origen?: string
  cta?: string
  className?: string
  children: React.ReactNode
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>) {
  const pathname = usePathname()
  return (
    <a
      {...rest}
      href={waHref(mensaje, origen ?? origenDesdeRuta(pathname))}
      target="_blank"
      rel="noopener noreferrer"
      data-cta={cta}
      className={className}
    >
      {children}
    </a>
  )
}
