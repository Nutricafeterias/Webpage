import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nutri Cafeterías — La cafetería más feliz de tu escuela',
  description:
    'Operamos cafeterías escolares de forma integral: servicio rápido, alimentación saludable y tecnología de vanguardia. Más de 10 años de experiencia. 97% satisfacción.',
  keywords: 'cafetería escolar, operación cafetería, escuela privada, México, servicio escolar, alimentación saludable',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#FFFEF7]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
