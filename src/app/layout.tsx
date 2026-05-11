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
  title: 'Nutri Cafeterías — Cafeterías Escolares en México | Servicio Integral',
  description:
    'Operamos cafeterías escolares de forma integral: servicio rápido, alimentación saludable y tecnología de vanguardia. Más de 10 años de experiencia en escuelas privadas de México. 97% de satisfacción.',
  keywords: [
    'cafetería escolar',
    'cafeterías escolares México',
    'operación cafetería escolar',
    'comedor escolar',
    'comedores escolares CDMX',
    'cafetería escuela privada',
    'alimentación saludable escuelas',
    'concesión cafetería escolar',
    'servicio cafetería colegio',
    'nutri cafeterías',
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
  '@type': 'LocalBusiness',
  name: 'Nutri Cafeterías',
  description:
    'Operamos cafeterías escolares de forma integral con alimentación saludable, tecnología de vanguardia y servicio de primer nivel en escuelas privadas de México.',
  url: 'https://cafeteriasescolares.com.mx',
  telephone: '+52-55-6703-4269',
  email: 'contacto@nutricafeterias.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Ciudad de México',
    addressRegion: 'CDMX',
    addressCountry: 'MX',
  },
  areaServed: {
    '@type': 'Country',
    name: 'México',
  },
  serviceType: 'Cafetería Escolar',
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#FFFEF7]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
