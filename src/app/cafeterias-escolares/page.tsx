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
import {
  FOTO_DIR,
  cafeteriaFaqs,
  cumplimientoCafeteria,
  galeriaCafeteria,
  pasosCafeteria,
  queVendemos,
  tecnologiaCafeteria,
} from '@/data/cafeteria'

const BASE = 'https://cafeteriasescolares.com.mx'
const URL = `${BASE}/cafeterias-escolares`
const HERO = `${FOTO_DIR}/fachada.jpg`
const HERO_URL = `${BASE}${HERO}`
const HERO_ALT = 'Cafetería escolar Nutri en la Universidad Panamericana, Campus Ciudad UP: barra de madera, refrigeradores de bebidas y mesas al frente'

export const metadata: Metadata = {
  title: 'Cafetería escolar que cumple con la SEP · Concesión y operación | Nutri Cafeterías',
  description:
    'Operamos la cafetería de tu escuela de forma integral: menús conforme a los Lineamientos SEP, higiene según la NOM-251, tótems, app para familias y pago con reconocimiento facial opcional, siempre con efectivo en caja.',
  keywords: [
    'cafetería escolar',
    'cafeterías escolares CDMX',
    'operación cafetería escolar',
    'concesión cafetería escolar',
    'cafetería escolar saludable',
    'productos permitidos en la cafetería escolar SEP',
    'cafetería universitaria',
    'proveedor cafetería escolar México',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Cafetería escolar: platillos a la carta, snacks y bebidas que cumplen con la SEP',
    description:
      'Platillos a la carta, snacks y bebidas que cumplen con la SEP, con tótems, app para familias y reconocimiento facial.',
    url: URL,
    type: 'website',
    locale: 'es_MX',
    siteName: 'Nutri Cafeterías',
    images: [{ url: HERO_URL, width: 1600, height: 1200, alt: HERO_ALT }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cafetería escolar que cumple con la SEP · Nutri Cafeterías',
    description: 'A la carta, snacks y bebidas que cumplen con la SEP, con tótems, app y reconocimiento facial opcional.',
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
    name: 'Operación integral de cafeterías escolares',
    serviceType: 'Cafetería escolar',
    url: URL,
    provider: org,
    areaServed: [
      { '@type': 'City', name: 'Ciudad de México' },
      { '@type': 'AdministrativeArea', name: 'Área Metropolitana del Valle de México' },
    ],
    image: HERO_URL,
    description:
      'Operación completa de cafeterías escolares: platillos a la carta, snacks empaquetados y bebidas conforme a los Lineamientos SEP, higiene según la NOM-251, tótems de autoservicio, app para familias y reconocimiento facial opcional, con pago en efectivo en caja.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: cafeteriaFaqs.map(f => ({
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
      { '@type': 'ListItem', position: 2, name: 'Cafetería escolar', item: URL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: HERO_URL,
    url: HERO_URL,
    width: 1600,
    height: 1200,
    caption: HERO_ALT,
    description: 'Fotografía real de la cafetería que Nutri Cafeterías opera en la Universidad Panamericana, Campus Ciudad UP.',
    creator: org,
  },
]

const WA_MSG = 'Hola, me interesa la cafetería escolar para mi escuela'

const sellos = [
  { t: 'A la carta', d: 'platillos del día hechos en la escuela' },
  { t: 'Snacks y bebidas SEP', d: 'cada etiqueta revisada' },
  { t: 'Tótems y app', d: 'y siempre efectivo en caja' },
]

const cifras = [
  { n: '#1', d: 'Operador de cafeterías escolares en México' },
  { n: '+1,000,000', d: 'comidas servidas' },
  { n: '4.9 / 5', d: 'de satisfacción' },
  { n: 'SEP', d: 'productos conforme a los lineamientos' },
]

const enlace = 'text-emerald-600 font-bold hover:underline underline-offset-2'

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-wider border border-emerald-200 mb-4">
      {children}
    </span>
  )
}

export default function CafeteriasEscolaresPage() {
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
            <li aria-current="page" className="font-semibold text-stone-700">Cafetería escolar</li>
          </ol>
        </nav>

        {/* Hero */}
        <section data-seccion="cafeteria_hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2rem] overflow-hidden bg-emerald-950 shadow-2xl shadow-emerald-900/20 min-h-[620px] md:min-h-[640px] flex items-end">
            <FotoReal
              src={HERO}
              alt={HERO_ALT}
              sizes="(min-width: 1280px) 1216px, 100vw"
              preload
              className="absolute inset-x-0 top-0 h-80 sm:h-auto sm:inset-0"
              posicion="object-[70%_center]"
            />
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,transparent_120px,var(--color-emerald-950)_320px)] sm:bg-none sm:bg-gradient-to-t sm:from-emerald-950 sm:via-emerald-950/80 sm:to-transparent md:bg-gradient-to-r md:from-emerald-950/95 md:via-emerald-950/65 md:to-transparent" />
            <div className="relative z-10 w-full px-6 pb-8 pt-60 sm:p-10 md:p-14 lg:p-16">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-300 text-stone-900 font-black text-xs uppercase tracking-wider mb-5">
                  🥪 Cafetería escolar en CDMX
                </span>
                <h1 className="text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-6xl font-black text-white">
                  Cafetería escolar:{' '}
                  <span className="text-emerald-200">platillos a la carta, snacks y bebidas</span>{' '}
                  que cumplen con la SEP
                </h1>
                <p className="mt-5 text-emerald-50/90 text-base sm:text-lg leading-relaxed">
                  Operamos la cafetería de tu escuela de punta a punta: cocina del día, productos
                  empaquetados permitidos y bebidas sin exceso de azúcar, con tótems, app para familias y
                  reconocimiento facial opcional para que el receso no se pierda en la fila. Y siempre se
                  puede pagar en efectivo en caja.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link href="/#contacto" data-cta="agenda_visita_hero" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-emerald-300 hover:bg-emerald-200 text-stone-900 font-black transition-all duration-200 shadow-xl shadow-black/20 hover:scale-[1.03]">
                    Agenda una visita sin costo
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/diagnostico"
                    data-cta="diagnostico_hero_cafeteria"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur text-white font-black hover:bg-white/20 transition-all duration-200"
                  >
                    Evalúa tu cafetería en 2 min
                  </Link>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl">
                {sellos.map(s => (
                  <div key={s.t} className="px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                    <p className="font-black text-white">{s.t}</p>
                    <p className="text-sm text-emerald-50/80">{s.d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-emerald-50/70">
                Foto real: nuestra cafetería en la Universidad Panamericana, Campus Ciudad UP.
              </p>
            </div>
          </div>
        </section>

        {/* Cifras */}
        <section aria-label="Nutri en cifras" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-2">
          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {cifras.map(c => (
              <div key={c.n} className="p-5 rounded-2xl bg-white border-2 border-stone-100 shadow-sm text-center">
                <p className="text-2xl md:text-3xl font-black gradient-text-primary">{c.n}</p>
                <p className="mt-1 text-xs md:text-sm text-stone-600 leading-snug">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Galería */}
          <section data-seccion="cafeteria_galeria" className="mt-24 md:mt-28">
            <Reveal className="text-center max-w-3xl mx-auto mb-10">
              <Kicker>Fotos reales · Campus Ciudad UP</Kicker>
              <h2 className="text-3xl md:text-5xl font-black text-stone-900 leading-tight">
                Así se ve una cafetería escolar{' '}
                <span className="gradient-text-primary">operada por Nutri</span>
              </h2>
              <p className="mt-4 text-stone-600 text-lg">
                Sin renders: es la cafetería que operamos hoy en la Universidad Panamericana, Campus
                Ciudad UP, abierta de lunes a jueves de 6:30 a 21:00.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-5 md:h-[620px]">
              {galeriaCafeteria.map((g, i) => (
                <Reveal
                  key={g.archivo}
                  delay={i * 0.08}
                  className={`h-full ${g.grande ? 'sm:col-span-2 md:row-span-2' : g.ancho ? 'sm:col-span-2' : ''}`}
                >
                  <figure className="group relative h-full min-h-[260px] rounded-3xl overflow-hidden shadow-lg">
                    <FotoReal
                      src={`${FOTO_DIR}/${g.archivo}`}
                      alt={g.alt}
                      sizes={g.grande || g.ancho ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 100vw'}
                      className="absolute inset-0"
                      posicion={g.posicion}
                      imgClassName="group-hover:scale-105 transition-transform duration-700"
                    />
                    <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-6 text-white">
                      <p className={`font-black ${g.grande ? 'text-2xl md:text-3xl' : 'text-lg'}`}>{g.titulo}</p>
                      <p className="text-sm text-white/85 mt-1 max-w-md">{g.texto}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Qué vendemos */}
          <section data-seccion="cafeteria_que_vendemos" className="mt-24 md:mt-28">
            <Reveal className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
                Qué vendemos en la{' '}
                <span className="gradient-text-primary">cafetería escolar</span>
              </h2>
              <p className="text-stone-600">
                El alumno elige y paga en cada compra. Todo lo que entra a la vitrina se revisa contra los
                Lineamientos de la SEP (DOF 30-sep-2024, vigentes desde el 29-mar-2025).
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {queVendemos.map((c, i) => (
                <Reveal key={c.t} delay={i * 0.06}>
                  <article className="card-lift h-full rounded-3xl border-2 border-stone-100 bg-white shadow-sm overflow-hidden flex flex-col">
                    <FotoReal
                      src={`${FOTO_DIR}/${c.archivo}`}
                      alt={c.alt}
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="aspect-[4/3]"
                    />
                    <div className="p-6">
                      <h3 className="font-black text-stone-900 text-lg mb-2">{c.t}</h3>
                      <p className="text-sm text-stone-600 leading-relaxed">{c.d}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <div className="mt-8 p-6 rounded-3xl bg-emerald-50 border-2 border-emerald-200 text-center max-w-4xl mx-auto">
              <p className="text-stone-700">
                <strong>Cafetería y comedor son servicios distintos.</strong> En la cafetería el alumno elige
                y paga en cada compra; en el comedor se sirve un menú del día de 3 o 4 tiempos, por turnos.
                Una escuela puede tener los dos.
              </p>
              <Link href="/comedores-escolares" data-cta="cruce_a_comedor" className="mt-3 inline-flex items-center gap-1 text-emerald-700 font-black hover:underline">
                ¿Buscas un comedor con menú del día? →
              </Link>
            </div>
          </section>
        </div>

        {/* Cumplimiento SEP */}
        <section data-seccion="cafeteria_cumplimiento" className="mt-24 md:mt-28 py-20 bg-emerald-800 relative overflow-hidden">
          <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-500/30 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <Reveal>
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Cumplir con la SEP{' '}
                <span className="text-emerald-200">no es quitar todo.</span>
              </h2>
              <p className="mt-5 text-emerald-50/85 leading-relaxed">
                Es elegir bien qué entra a la vitrina. Menús diseñados por nutriólogos, snacks y bebidas
                revisados uno por uno, y una carta que los alumnos sí compran. La dirección recibe la
                documentación para cualquier revisión.
              </p>
              <Link href="/lineamientos-sep" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white text-emerald-800 font-black hover:bg-emerald-50 transition-colors">
                Qué exigen los lineamientos SEP →
              </Link>
            </Reveal>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {cumplimientoCafeteria.map((c, i) => (
                <Reveal key={c} delay={i * 0.05}>
                  <li className="h-full p-5 rounded-2xl bg-white/[0.07] border border-white/15 backdrop-blur text-white font-bold text-sm leading-snug">
                    <span className="text-emerald-300 mr-1.5">✓</span>{c}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tecnología */}
          <section data-seccion="cafeteria_tecnologia" className="mt-24 md:mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
              <Reveal className="lg:col-span-2">
                <FotoReal
                  src={`${FOTO_DIR}/caja-equipo.jpg`}
                  alt="Caja de la cafetería escolar Nutri con el punto de venta propio y una colaboradora atendiendo"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="aspect-[4/3] lg:aspect-[4/5] rounded-[2rem] shadow-2xl shadow-emerald-900/15"
                  posicion="object-[center_35%]"
                />
              </Reveal>
              <div className="lg:col-span-3">
                <Reveal>
                  <Kicker>Tecnología propia</Kicker>
                  <h2 className="text-3xl md:text-4xl font-black text-stone-900 leading-tight mb-8">
                    Menos fila,{' '}
                    <span className="gradient-text-primary">más receso</span>
                  </h2>
                </Reveal>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tecnologiaCafeteria.map((t, i) => (
                    <Reveal key={t.t} delay={(i % 2) * 0.06}>
                      <div className="card-lift h-full p-5 rounded-3xl bg-white border-2 border-stone-100 shadow-sm">
                        <div className="text-2xl mb-2">{t.emoji}</div>
                        <h3 className="font-black text-stone-900 mb-1">{t.t}</h3>
                        <p className="text-sm text-stone-600 leading-relaxed">{t.d}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
                <p className="mt-4 text-sm">
                  <Link href="/aviso-de-privacidad" className={enlace}>Aviso de privacidad →</Link>
                </p>
              </div>
            </div>
          </section>

          {/* Para quién */}
          <section data-seccion="cafeteria_para_quien" className="mt-24 md:mt-28">
            <Reveal className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-stone-900">
                Una cafetería para{' '}
                <span className="gradient-text-primary">cada tipo de escuela</span>
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { href: '/universidades', t: 'Universidades y prepas', d: 'Horario extendido, tótems, pedidos para recoger y vending. Como en Campus Ciudad UP e IPADE.', cta: 'cruce_a_universidades' },
                { href: '/cafeterias-escuelas-privadas', t: 'Colegios particulares', d: 'Cafetería y, si la escuela lo pide, comedor. App para familias con límite diario y alergias.', cta: 'cruce_a_privadas' },
                { href: '/comedores-escolares', t: 'Comedor escolar', d: 'Menú del día de 3 o 4 tiempos, por turnos, con porción por edad.', cta: 'cruce_a_comedor_tarjeta' },
              ].map((c, i) => (
                <Reveal key={c.href} delay={i * 0.06}>
                  <Link href={c.href} data-cta={c.cta} className="card-lift group block h-full p-7 rounded-3xl bg-white border-2 border-stone-100 hover:border-emerald-300 shadow-sm">
                    <h3 className="font-black text-stone-900 text-lg mb-2">{c.t}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{c.d}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-emerald-700 font-black text-sm">
                      Ver más <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Cómo empezamos */}
          <section data-seccion="cafeteria_como_funciona" className="mt-24 md:mt-28">
            <Reveal className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-stone-900">
                Cómo empezamos{' '}
                <span className="gradient-text-primary">en tu escuela</span>
              </h2>
            </Reveal>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pasosCafeteria.map((p, i) => (
                <Reveal key={p.n} delay={i * 0.06}>
                  <li className="h-full p-6 rounded-3xl border-2 border-stone-100 bg-white shadow-sm">
                    <span className="inline-flex w-10 h-10 rounded-2xl bg-emerald-500 text-white font-black items-center justify-center mb-4">{p.n}</span>
                    <h3 className="font-black text-stone-900 mb-1">{p.t}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{p.d}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </section>

          {/* Respaldos */}
          <section className="mt-20 max-w-6xl mx-auto">
            <Respaldos />
          </section>

          {/* Cuánto cuesta */}
          <section data-seccion="cafeteria_costo" className="mt-24 md:mt-28 max-w-5xl mx-auto">
            <div className="p-8 md:p-12 rounded-[2rem] bg-stone-900 text-center relative overflow-hidden">
              <div aria-hidden className="absolute -top-24 left-1/2 -translate-x-1/2 w-[32rem] h-48 rounded-full bg-emerald-500/30 blur-3xl" />
              <h2 className="relative text-3xl md:text-4xl font-black text-white">
                ¿Cuánto cuesta una <span className="text-emerald-200">cafetería escolar</span>?
              </h2>
              <p className="relative mt-4 text-stone-300 max-w-2xl mx-auto leading-relaxed">
                Depende de la matrícula, del horario y del equipo que ya tenga la escuela. En el modelo de
                concesión no requiere inversión de la escuela. Cotizamos rápido después de una llamada o una visita.
              </p>
              <div className="relative mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/diagnostico" data-cta="diagnostico_costo_cafeteria" className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white text-stone-900 font-black hover:bg-emerald-50 transition-colors">
                  Evalúa tu cafetería en 2 minutos →
                </Link>
                <a
                  href={waHref('Hola, quiero cotizar la cafetería escolar para mi escuela', 'cafeterias')}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cta="whatsapp_cotizacion"
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" /> Pide tu cotización
                </a>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section data-seccion="cafeteria_faq" className="mt-24 md:mt-28 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
              Preguntas frecuentes sobre la{' '}
              <span className="gradient-text-primary">cafetería escolar</span>
            </h2>
            <div className="space-y-3">
              {cafeteriaFaqs.map(f => (
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
          <section data-seccion="cafeteria_cta_final" className="mt-24 md:mt-28 p-10 md:p-14 rounded-[2rem] bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
            <p className="text-2xl md:text-4xl font-black text-white">
              Ven a ver una cafetería operando
            </p>
            <p className="text-emerald-100 mt-3 mb-7">
              Te llevamos a la que operamos en Campus Ciudad UP: tótems, caja, app y vitrina, en vivo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/#contacto"
                data-cta="agenda_visita"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-300 text-stone-900 font-black hover:bg-emerald-200 transition-all duration-200 shadow-lg hover:scale-[1.03]"
              >
                Agendar mi visita →
              </Link>
              <a
                href={waHref(WA_MSG, 'cafeterias')}
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
          <section data-seccion="cafeteria_seo" className="mt-20 max-w-3xl mx-auto space-y-5 text-stone-600 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-black text-stone-900">
              Operador de cafetería escolar en CDMX
            </h2>
            <h3 className="text-lg font-black text-stone-800">¿Qué hace un operador de cafetería escolar?</h3>
            <p>
              Un operador de cafetería escolar se encarga de todo lo que pasa en el punto de venta de la
              escuela: diseña la carta, compra los insumos con trazabilidad de proveedores, cocina los
              platillos del día, revisa que cada snack y cada bebida cumplan los Lineamientos de la SEP,
              cobra y atiende a las familias. En el modelo de concesión, la escuela no invierte: el operador
              pone la operación y la escuela recibe reportes y puede revisarla cuando quiera.
            </p>
            <h3 className="text-lg font-black text-stone-800">Productos permitidos en la cafetería escolar</h3>
            <p>
              Los lineamientos piden que en la escuela no se vendan productos con sellos de exceso y que el
              agua natural esté siempre disponible. Por eso revisamos cada etiqueta antes de venderla y los
              platillos se preparan al horno, a la plancha o al vapor. Lo explicamos con detalle en{' '}
              <Link href="/lineamientos-sep" className={enlace}>lineamientos SEP para cafetería y comedor escolar</Link>{' '}
              y puedes ver un <Link href="/menus" className={enlace}>menú escolar de ejemplo</Link>.
            </p>
            <h3 className="text-lg font-black text-stone-800">Para colegios, prepas y universidades</h3>
            <p>
              Operamos cafeterías en la Ciudad de México y su área metropolitana, desde preescolar hasta
              universidad. Para campus con horario extendido y mucha afluencia, conoce nuestra{' '}
              <Link href="/universidades" className={enlace}>cafetería universitaria</Link>; para colegios
              particulares, revisa{' '}
              <Link href="/cafeterias-escuelas-privadas" className={enlace}>cafetería y comedor para colegios privados</Link>.
              Si buscas comida completa servida por turnos, mira el{' '}
              <Link href="/comedores-escolares" className={enlace}>servicio de comedor escolar</Link>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
