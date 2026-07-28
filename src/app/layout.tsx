import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cafeterías Escolares en México | Nutri Cafeterías — Comedores Escolares CDMX',
  description:
    'Operamos cafeterías y comedores escolares en escuelas privadas de México. Servicio integral, alimentación saludable, tecnología de pago con huella y app para padres. +10 años de experiencia en CDMX. 97% satisfacción.',
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
      'Transformamos cafeterías escolares: alimentación saludable, tecnología de punta y servicio de primer nivel. Más de 10 escuelas privadas confían en nosotros.',
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
      'Transformamos cafeterías escolares: alimentación saludable, tecnología de punta y servicio de primer nivel.',
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
  slogan: 'La cafetería más feliz de tu escuela',
  description:
    'Nutri Cafeterías es el operador premium de cafeterías y comedores escolares en México. Opera de forma integral cafeterías en escuelas privadas de la Ciudad de México desde preescolar hasta preparatoria: menús diseñados por nutriólogos alineados a lineamientos SEP, protocolos de higiene alineados a NOM-251, tecnología de pago con huella digital, tótems de autoservicio, app para padres y programas educativos exclusivos como NutriMood (comida y emociones), Cocina Aventura y Sabores del Mundo. Más de 10 años de experiencia, más de 10 escuelas, más de 1,000,000 de órdenes servidas y 97% de satisfacción. La escuela no realiza ninguna inversión inicial.',
  url: 'https://cafeteriasescolares.com.mx',
  logo: 'https://cafeteriasescolares.com.mx/logo.png',
  image: 'https://cafeteriasescolares.com.mx/logo.png',
  telephone: '+52-55-6703-4269',
  email: 'contacto@nutricafeterias.com',
  foundingDate: '2014',
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
  hasCredential: [
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'certification', name: 'Distintivo H' },
    { '@type': 'EducationalOccupationalCredential', credentialCategory: 'license', name: 'Licencia sanitaria' },
  ],
  knowsAbout: [
    'cafeterías escolares',
    'comedores escolares',
    'alimentación escolar saludable',
    'nutrición infantil',
    'lineamientos SEP para venta de alimentos en escuelas',
    'NOM-251 seguridad alimentaria',
    'tecnología para cafeterías escolares',
    'pago con huella digital en escuelas',
    'programas de comida y emociones',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios de Nutri Cafeterías',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Operación integral de cafetería escolar', description: 'Operación completa sin inversión para la escuela: personal, menús, proveedores, calidad y tecnología.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Programa NutriMood — comida y emociones', description: 'Programa educativo que conecta la alimentación con las emociones y la concentración de los alumnos.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tecnología de cafetería escolar', description: 'Pago con huella digital, tótems de autoservicio y app para padres con control de saldo y consumo.' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Comedores escolares con menús de nutriólogo', description: 'Menús balanceados alineados a lineamientos SEP, con manejo de alérgenos y rotación de temporada.' } },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '47',
    bestRating: '5',
  },
  sameAs: [
    'https://wa.me/5215567034269',
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
        <Analytics />
      </body>
    </html>
  )
}
