import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { AtribucionTracker } from '@/components/AtribucionTracker'
import { Analitica } from '@/components/Analitica'

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cafeterías Escolares en México | Nutri Cafeterías — Comedores Escolares CDMX',
  description:
    'Operamos cafeterías y comedores escolares en colegios y escuelas de México desde 2018: menús conforme a los Lineamientos SEP, tótems, app para familias y reconocimiento facial opcional, con efectivo en caja.',
  keywords: [
    'cafetería escolar',
    'cafeterías escolares México',
    'comedor escolar CDMX',
    'comedores escolares Ciudad de México',
    'operación cafetería escolar',
    'cafetería escuela privada México',
    'concesión cafetería escolar',
    'servicio cafetería colegio privado',
    'alimentación saludable escuelas',
    'cafetería escolar integral',
    'administración cafetería escolar',
    'nutri cafeterías',
    'cafeteriasescolares',
  ],
  authors: [{ name: 'Nutri Cafeterías' }],
  creator: 'Nutri Cafeterías',
  publisher: 'Nutri Cafeterías',
  metadataBase: new URL('https://cafeteriasescolares.com.mx'),
  alternates: {
    canonical: 'https://cafeteriasescolares.com.mx',
  },
  openGraph: {
    title: 'Nutri Cafeterías — Cafeterías Escolares en México',
    description:
      'Cafeterías y comedores escolares con comida real, a tiempo y a la vista. Desde 2018.',
    url: 'https://cafeteriasescolares.com.mx',
    siteName: 'Nutri Cafeterías',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 2767,
        height: 1395,
        alt: 'Nutri Cafeterías — Cafeterías Escolares',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nutri Cafeterías — Cafeterías Escolares en México',
    description:
      'Cafeterías y comedores escolares con comida real, a tiempo y a la vista. Desde 2018.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'FoodService'],
  name: 'Nutri Cafeterías',
  alternateName: 'Nutri Cafeterías — Cafeterías Escolares',
  slogan: 'Comida real, a tiempo y a la vista',
  description:
    'Nutri Cafeterías opera cafeterías y comedores escolares en la Ciudad de México y área metropolitana, desde preescolar hasta universidad. Cafetería: platillos a la carta, snacks y bebidas conforme a los Lineamientos SEP. Comedor: menú del día de 3 o 4 tiempos por turnos. Sigue la NOM-251, con ERP y punto de venta propios, tótems de autoservicio, pago con reconocimiento facial opcional y app para familias, siempre con efectivo en caja. Fundada en 2018; llegó a operar hasta 11 cafeterías escolares al mismo tiempo.',
  url: 'https://cafeteriasescolares.com.mx',
  logo: 'https://cafeteriasescolares.com.mx/logo.png',
  image: 'https://cafeteriasescolares.com.mx/logo.png',
  telephone: '+52-221-925-1954',
  email: 'contacto@nutricafeteria.com.mx',
  foundingDate: '2018-08',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ciudad de México',
    addressRegion: 'CDMX',
    addressCountry: 'MX',
  },
  areaServed: [
    { '@type': 'City', name: 'Ciudad de México' },
    { '@type': 'AdministrativeArea', name: 'Área Metropolitana del Valle de México' },
  ],
  serviceType: 'Operación integral de cafeterías escolares',
  knowsAbout: [
    'cafeterías escolares',
    'comedores escolares',
    'alimentación escolar saludable',
    'lineamientos SEP para venta de alimentos en escuelas',
    'NOM-251 seguridad alimentaria',
    'tecnología para cafeterías escolares',
    'reconocimiento facial para pagos en escuelas',
    'app para familias en la cafetería escolar',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Nutri Cafeterías',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cafetería escolar', description: 'Platillos a la carta, snacks empaquetados y bebidas conforme a los Lineamientos SEP, con tótems, app para familias y efectivo en caja.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Comedor escolar', description: 'Menú del día de 3 o 4 tiempos, recién hecho, servido por turnos y con porción por edad, conforme a los Lineamientos SEP.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tecnología de cafetería escolar', description: 'ERP y punto de venta propios, tótems de autoservicio, reconocimiento facial opcional y app para familias con saldo, recargas, límite diario y alergias.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Eventos escolares', description: 'Complemento para graduaciones, juntas de consejo, coffee breaks y desayunos institucionales.' } },
    ],
  },
  sameAs: [
    'https://wa.me/522219251954',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#1F5D3B" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F7F3EA]" suppressHydrationWarning>
        {children}
        <AtribucionTracker />
        <Analitica />
        <Analytics />
      </body>
    </html>
  )
}
