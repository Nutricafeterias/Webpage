import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { AtribucionTracker } from '@/components/AtribucionTracker'
import { CampanaPopup } from '@/components/CampanaPopup'
import { Analitica } from '@/components/Analitica'
import { CtaMovil } from '@/components/CtaMovil'
import { REDES } from '@/data/redes'

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

// Datos de la empresa para buscadores y asistentes de IA. Solo hechos
// permitidos por DG (ver ~/nutri-web-emilio/ESTRATEGIA.md §4). sameAs lleva
// únicamente perfiles oficiales que existan (fuente única: src/data/redes.ts).
const BASE = 'https://cafeteriasescolares.com.mx'
const DESCRIPCION_EMPRESA =
  'Nutri Cafeterías es un operador de cafeterías y comedores escolares en la Ciudad de México y su área metropolitana, desde preescolar hasta universidad. Cafetería: platillos a la carta, snacks y bebidas conforme a los Lineamientos SEP. Comedor: menú del día de 3 o 4 tiempos por turnos, que se cocina el mismo día. Sigue la NOM-251, con ERP y punto de venta propios, tótems de autoservicio, pago con reconocimiento facial opcional y App Nutri para familias, siempre con efectivo en caja. Fundada en agosto de 2018. Opera en la Universidad Panamericana, Campus Ciudad UP, y en IPADE Business School.'

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${BASE}/#organization`,
      name: 'Nutri Cafeterías',
      legalName: 'Nutricafeterías, S.A.',
      alternateName: ['Nutri', 'Nutricafeterías'],
      slogan: 'Comida real, a tiempo y a la vista',
      description: DESCRIPCION_EMPRESA,
      url: BASE,
      logo: { '@type': 'ImageObject', url: `${BASE}/logo.png`, width: 2767, height: 1395 },
      image: `${BASE}/logo.png`,
      telephone: '+52-221-925-1954',
      email: 'a.fernandez@nutricafeteria.com.mx',
      sameAs: REDES.map(r => r.url),
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
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'sales',
          telephone: '+52-221-925-1954',
          email: 'a.fernandez@nutricafeteria.com.mx',
          areaServed: 'MX',
          availableLanguage: ['es'],
        },
      ],
      knowsAbout: [
        'cafeterías escolares',
        'comedores escolares',
        'Lineamientos generales de alimentos y bebidas en las escuelas (SEP)',
        'NOM-251-SSA1-2009',
        'tecnología para cafeterías escolares',
        'reconocimiento facial con consentimiento para pagos en escuelas',
        'app para familias en la cafetería escolar',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Nutri Cafeterías',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cafetería escolar', url: `${BASE}/cafeterias-escolares`, description: 'Platillos a la carta, snacks empaquetados y bebidas conforme a los Lineamientos SEP, con tótems, app para familias y efectivo en caja.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cafetería universitaria', url: `${BASE}/universidades`, description: 'Cafetería para prepas y universidades con horario extendido, tótems, pedidos anticipados para recoger, app y POS propios.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Comedor escolar', url: `${BASE}/comedores-escolares`, description: 'Menú del día de 3 o 4 tiempos que se cocina el mismo día, servido por turnos y con porción por edad, conforme a los Lineamientos SEP.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tecnología de cafetería escolar', description: 'ERP y punto de venta propios, tótems de autoservicio, reconocimiento facial opcional con consentimiento y App Nutri para familias con saldo, recargas, límite diario y alergias.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Eventos escolares', url: `${BASE}/catering-escolar`, description: 'Complemento para graduaciones, juntas de consejo, coffee breaks y desayunos institucionales.' } },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE}/#website`,
      url: BASE,
      name: 'Nutri Cafeterías',
      inLanguage: 'es-MX',
      publisher: { '@id': `${BASE}/#organization` },
    },
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
        <CampanaPopup />
        <CtaMovil />
        <Analitica />
        <Analytics />
      </body>
    </html>
  )
}
