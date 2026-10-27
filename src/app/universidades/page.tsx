import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { FotoReal } from '@/components/ui/FotoReal'
import { Reveal } from '@/components/ui/Reveal'
import { PruebaSocial } from '@/components/PruebaSocial'
import { Respaldos } from '@/components/sections/Respaldos'
import { waHref } from '@/lib/whatsapp'
import { FOTO_DIR } from '@/data/cafeteria'
import { pruebasUni, serviciosUni, universidadesFaqs } from '@/data/universidades'

const BASE = 'https://cafeteriasescolares.com.mx'
const URL = `${BASE}/universidades`
const HERO = `${FOTO_DIR}/barra.jpg`
const HERO_URL = `${BASE}${HERO}`
const HERO_ALT = 'Alumnos de la Universidad Panamericana haciendo fila en la barra de la cafetería Nutri del Campus Ciudad UP'

export const metadata: Metadata = {
  title: 'Cafetería universitaria para prepas y universidades | Nutri Cafeterías',
  description:
    'Operamos la cafetería de la Universidad Panamericana, Campus Ciudad UP, e IPADE: horario extendido, tótems, pedidos para recoger, app y POS propios. 4.9/5 en encuesta a 500 personas.',
  keywords: [
    'cafetería universitaria',
    'cafetería para universidades',
    'operador de cafetería universitaria',
    'concesión cafetería universidad',
    'cafetería para prepa',
    'cafetería preparatoria',
    'cafetería campus universitario CDMX',
    'vending universidad',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Cafetería universitaria: horario extendido, tótems y pedidos para recoger',
    description:
      'Operamos la cafetería de la Universidad Panamericana, Campus Ciudad UP, e IPADE Business School. 4.9/5 en encuesta a 500 personas de la comunidad (2025).',
    url: URL,
    type: 'website',
    locale: 'es_MX',
    siteName: 'Nutri Cafeterías',
    images: [{ url: HERO_URL, width: 1428, height: 781, alt: HERO_ALT }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cafetería universitaria · Nutri Cafeterías',
    description: 'Horario extendido, tótems, pedidos para recoger, app y POS propios.',
    images: [HERO_URL],
  },
}

const org = {
  '@type': 'LocalBusiness',
  '@id': `${BASE}/#organization`,
  name: 'Nutri Cafeterías',
  url: BASE,
  telephone: '+52-221-925-1954',
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Operación de cafeterías universitarias',
    serviceType: 'Cafetería universitaria',
    url: URL,
    provider: org,
    areaServed: [
      { '@type': 'City', name: 'Ciudad de México' },
      { '@type': 'AdministrativeArea', name: 'Área Metropolitana del Valle de México' },
    ],
    audience: { '@type': 'EducationalAudience', educationalRole: 'student' },
    image: HERO_URL,
    description:
      'Operación de cafeterías para preparatorias y universidades: horario extendido, tótems de autoservicio, pedidos anticipados para recoger, app y punto de venta propios, snacks y bebidas revisados contra los Lineamientos de la SEP, vending y reconocimiento facial opcional. Opera la cafetería de la Universidad Panamericana, Campus Ciudad UP, y de IPADE Business School.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: universidadesFaqs.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: BASE },
      { '@type': 'ListItem', position: 2, name: 'Cafetería universitaria', item: URL },
    ],
  },
]

const WA_MSG = 'Hola, me interesa la cafetería para nuestra universidad o prepa'

const enlace = 'text-emerald-600 font-bold hover:underline underline-offset-2'

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-wider border border-emerald-200 mb-4">
      {children}
    </span>
  )
}

export default function UniversidadesPage() {
  return (
    <>
      {jsonLd.map((j, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(j) }} />
      ))}
      <Navbar />
      <main className="pt-24 md:pt-28 pb-24 bg-[#F7F3EA] min-h-screen overflow-x-clip">
        {/* Migas */}
        <nav aria-label="Migas de pan" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 text-xs text-stone-500">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-emerald-700">Inicio</Link></li>
            <li aria-hidden>›</li>
            <li aria-current="page" className="font-semibold text-stone-700">Cafetería universitaria</li>
          </ol>
        </nav>

        {/* Hero */}
        <section data-seccion="uni_hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2rem] overflow-hidden bg-emerald-950 shadow-2xl shadow-emerald-900/20 min-h-[620px] md:min-h-[640px] flex items-end">
            <FotoReal
              src={HERO}
              alt={HERO_ALT}
              sizes="(min-width: 1280px) 1216px, 100vw"
              preload
              className="absolute inset-x-0 top-0 h-80 sm:h-auto sm:inset-0"
              posicion="object-[65%_center]"
            />
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,transparent_120px,var(--color-emerald-950)_320px)] sm:bg-none sm:bg-gradient-to-t sm:from-emerald-950 sm:via-emerald-950/80 sm:to-transparent md:bg-gradient-to-r md:from-emerald-950/95 md:via-emerald-950/65 md:to-transparent" />
            <div className="relative z-10 w-full px-6 pb-8 pt-60 sm:p-10 md:p-14 lg:p-16">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-300 text-stone-900 font-black text-xs uppercase tracking-wider mb-5">
                  🎓 Prepas y universidades
                </span>
                <h1 className="text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-6xl font-black text-white">
                  Cafetería universitaria{' '}
                  <span className="text-emerald-200">que el campus sí usa</span>,{' '}
                  de las 6:30 a la última clase
                </h1>
                <p className="mt-5 text-emerald-50/90 text-base sm:text-lg leading-relaxed">
                  Operamos la cafetería de la Universidad Panamericana, Campus Ciudad UP, y de IPADE
                  Business School: tótems de autoservicio, pedidos anticipados para recoger, app y punto de
                  venta propios, snacks y bebidas revisados contra los Lineamientos de la SEP. Y siempre se
                  puede pagar en efectivo en caja.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link href="/#contacto" data-cta="agenda_visita_uni" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-emerald-300 hover:bg-emerald-200 text-stone-900 font-black transition-all duration-200 shadow-xl shadow-black/20 hover:scale-[1.03]">
                    Agenda una visita al campus
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/diagnostico"
                    data-cta="diagnostico_hero_uni"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur text-white font-black hover:bg-white/20 transition-all duration-200"
                  >
                    Evalúa tu cafetería en 2 min
                  </Link>
                </div>
              </div>
              <p className="mt-6 text-xs text-emerald-50/70">
                Foto real: cafetería Nutri en la Universidad Panamericana, Campus Ciudad UP.
              </p>
            </div>
          </div>
        </section>

        {/* Prueba social */}
        <section aria-label="Prueba social" data-seccion="uni_pruebas" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {pruebasUni.map(c => (
              <div key={c.n} className="p-5 rounded-2xl bg-white border-2 border-stone-100 shadow-sm text-center">
                <p className="text-2xl md:text-3xl font-black gradient-text-primary">{c.n}</p>
                <p className="mt-1 text-xs md:text-sm text-stone-600 leading-snug">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* El reto del campus */}
          <section data-seccion="uni_reto" className="mt-24 md:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <Reveal>
              <FotoReal
                src={`${FOTO_DIR}/alumnos.jpg`}
                alt="Alumnos universitarios con sus snacks frente a la cafetería Nutri del Campus Ciudad UP"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/3] rounded-[2rem] shadow-2xl shadow-emerald-900/15"
                posicion="object-[center_30%]"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <Kicker>El campus que se queda a comer</Kicker>
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 leading-tight mb-4">
                Entre clase y clase hay pocos minutos.{' '}
                <span className="gradient-text-primary">La cafetería tiene que caber ahí.</span>
              </h2>
              <p className="text-stone-600 leading-relaxed">
                En un campus la comida compite con el reloj: el que no alcanza a comprar se va del campus o
                no come. Por eso montamos la cafetería para la hora pico —tótems, pedidos para recoger y
                cobro rápido— y para el resto del día: desayuno temprano, comida, snack de la tarde y
                servicio hasta la noche.
              </p>
              <p className="mt-4 text-stone-600 leading-relaxed">
                En Campus Ciudad UP abrimos de <strong>lunes a jueves de 6:30 a 21:00</strong> y los
                viernes de 6:30 a 17:00.
              </p>
            </Reveal>
          </section>

          {/* Servicios */}
          <section data-seccion="uni_servicios" className="mt-24 md:mt-28">
            <Reveal className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-stone-900">
                Lo que operamos{' '}
                <span className="gradient-text-primary">en un campus universitario</span>
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {serviciosUni.map((s, i) => (
                <Reveal key={s.t} delay={(i % 4) * 0.06}>
                  <div className="card-lift h-full p-6 rounded-3xl border-2 border-stone-100 bg-white shadow-sm">
                    <div className="text-3xl mb-2">{s.emoji}</div>
                    <h3 className="font-black text-stone-900 mb-1">{s.t}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </div>

        {/* Encuesta */}
        <section data-seccion="uni_encuesta" className="mt-24 md:mt-28 py-20 bg-emerald-800 relative overflow-hidden">
          <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-500/30 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-6xl md:text-8xl font-black text-white">4.9<span className="text-emerald-300"> / 5</span></p>
            <p className="mt-4 text-xl md:text-2xl font-black text-emerald-50">
              de satisfacción en una encuesta a 500 personas de la comunidad de la Universidad
              Panamericana, Campus Ciudad UP
            </p>
            <p className="mt-2 text-sm text-emerald-100/80">Encuesta 2025</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Galería corta */}
          <section data-seccion="uni_galeria" className="mt-24 md:mt-28">
            <Reveal className="text-center max-w-3xl mx-auto mb-10">
              <Kicker>Fotos reales · Campus Ciudad UP</Kicker>
              <h2 className="text-3xl md:text-4xl font-black text-stone-900">
                Snacks, bebidas y caja,{' '}
                <span className="gradient-text-primary">tal como están hoy</span>
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
              {[
                { a: 'snacks.jpg', alt: 'Anaquel de snacks empaquetados en la cafetería universitaria Nutri', t: 'Snacks revisados' },
                { a: 'productos.jpg', alt: 'Snacks, semillas, cacahuates y bebidas sobre la barra de la cafetería universitaria', t: 'Para llevar a clase' },
                { a: 'caja-equipo.jpg', alt: 'Caja de la cafetería universitaria con el punto de venta propio de Nutri', t: 'Punto de venta propio' },
              ].map((g, i) => (
                <Reveal key={g.a} delay={i * 0.06}>
                  <figure className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-lg">
                    <FotoReal src={`${FOTO_DIR}/${g.a}`} alt={g.alt} sizes="(min-width: 640px) 33vw, 100vw" className="absolute inset-0" />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-white font-black text-lg">{g.t}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Respaldos */}
          <section className="mt-20 max-w-6xl mx-auto">
            <Respaldos />
          </section>

          {/* FAQ */}
          <section data-seccion="uni_faq" className="mt-24 md:mt-28 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
              Preguntas frecuentes sobre la{' '}
              <span className="gradient-text-primary">cafetería universitaria</span>
            </h2>
            <div className="space-y-3">
              {universidadesFaqs.map(f => (
                <details key={f.q} className="group rounded-2xl border-2 border-stone-200 bg-white open:border-emerald-300 open:bg-emerald-50">
                  <summary className="cursor-pointer list-none px-6 py-5 font-bold text-stone-800 flex items-center justify-between gap-4">
                    {f.q}
                    <span className="flex-shrink-0 text-emerald-600 font-black group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="px-6 pb-5 text-sm text-stone-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* CTA final */}
          <section data-seccion="uni_cta_final" className="mt-24 md:mt-28 p-10 md:p-14 rounded-[2rem] bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
            <p className="text-2xl md:text-4xl font-black text-white">
              Ven a ver una cafetería universitaria operando
            </p>
            <p className="text-emerald-100 mt-3 mb-7">
              Te llevamos a Campus Ciudad UP: tótems, pedidos para recoger, caja y vitrina, en hora pico.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/#contacto"
                data-cta="agenda_visita_uni_final"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-300 text-stone-900 font-black hover:bg-emerald-200 transition-all duration-200 shadow-lg hover:scale-[1.03]"
              >
                Agendar mi visita →
              </Link>
              <Link
                href="/diagnostico"
                data-cta="diagnostico_uni_final"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/15 text-white font-bold hover:bg-white/25 transition-colors"
              >
                Diagnóstico de 2 minutos
              </Link>
              <a
                href={waHref(WA_MSG, 'universidades')}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp_cta_final"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-emerald-700/60 text-white font-bold hover:bg-emerald-700 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp
              </a>
            </div>
            <PruebaSocial tono="oscuro" className="mt-6" />
          </section>

          {/* Bloque SEO */}
          <section data-seccion="uni_seo" className="mt-20 max-w-3xl mx-auto space-y-5 text-stone-600 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-black text-stone-900">
              Operador de cafetería universitaria en CDMX
            </h2>
            <h3 className="text-lg font-black text-stone-800">¿Qué cambia en una cafetería universitaria?</h3>
            <p>
              Frente a un colegio, un campus tiene más horas abiertas, más afluencia en ventanas cortas
              entre clases y una comunidad adulta que paga por sí misma. La cafetería universitaria necesita
              cobrar rápido, permitir pedidos para recoger, abrir temprano y cerrar tarde, y ofrecer snacks
              y bebidas para llevar a clase. Para eso usamos tótems de autoservicio, app y punto de venta
              propios.
            </p>
            <h3 className="text-lg font-black text-stone-800">Para prepas y universidades privadas</h3>
            <p>
              Operamos en la Ciudad de México y su área metropolitana. Si tu institución también tiene
              primaria o secundaria, revisa la{' '}
              <Link href="/cafeterias-escolares" className={enlace}>cafetería escolar</Link> y el{' '}
              <Link href="/comedores-escolares" className={enlace}>comedor escolar</Link>. Para entender qué
              piden las autoridades, lee{' '}
              <Link href="/lineamientos-sep" className={enlace}>los lineamientos SEP explicados</Link>,{' '}
              <Link href="/blog/scjn-comida-chatarra-universidades-preparatorias-cafeteria-campus-2026" className={enlace}>qué resolvió la Suprema Corte sobre prepas y universidades</Link> y la guía{' '}
              <Link href="/blog/como-elegir-operador-cafeteria-escolar" className={enlace}>cómo elegir al operador de tu cafetería</Link>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
