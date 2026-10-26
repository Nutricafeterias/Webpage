import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import { FotoComedor, existeFotoComedor } from '@/components/ui/FotoComedor'
import { Reveal } from '@/components/ui/Reveal'
import { comedorFaqs, tiempos, menuSemana } from '@/data/comedor'
import { waHref } from '@/lib/whatsapp'
import { Respaldos } from '@/components/sections/Respaldos'

const BASE = 'https://cafeteriasescolares.com.mx'
const URL = `${BASE}/comedores-escolares`
const HERO = 'hero-comedor.jpg'
const HERO_URL = `${BASE}/img/comedor/${HERO}`
const HERO_ALT = 'Niños de primaria comiendo un menú completo en un comedor escolar luminoso'
const hayHero = existeFotoComedor(HERO)

export const metadata: Metadata = {
  title: 'Comedores escolares en CDMX | Servicio de comedor · Nutri Cafeterías',
  description:
    'Servicio de comedor escolar en CDMX: menú de 3 o 4 tiempos recién hecho, porción por edad y conforme a la SEP. Pago en app o efectivo. Pide degustación.',
  keywords: [
    'comedores escolares',
    'comedor escolar',
    'servicio de comedor escolar',
    'comedores escolares CDMX',
    'empresa de comedores escolares',
    'comedores escolares SEP',
    'comedores escolares en escuelas de tiempo completo',
    'menú de comedor escolar',
    'menú escolar',
    'cuánto cuesta un comedor escolar',
    'servicio de alimentos para escuelas',
  ],
  alternates: { canonical: URL },
  openGraph: {
    title: 'Comedores escolares en CDMX: comida completa, recién hecha, para cada niño',
    description:
      'Menú de 3 o 4 tiempos por turnos, porción por edad, conforme a la SEP. Pago en app o en efectivo. Agenda una degustación en tu escuela.',
    url: URL,
    type: 'website',
    locale: 'es_MX',
    siteName: 'Nutri Cafeterías',
    ...(hayHero
      ? { images: [{ url: HERO_URL, width: 1536, height: 1024, alt: HERO_ALT }] }
      : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comedores escolares en CDMX · Nutri Cafeterías',
    description: 'Comida completa, recién hecha, por turnos y conforme a la SEP.',
    ...(hayHero ? { images: [HERO_URL] } : {}),
  },
}

const org = {
  '@type': 'Organization',
  '@id': `${BASE}/#organization`,
  name: 'Nutri Cafeterías',
  url: BASE,
  telephone: '+52-221-925-1954',
}

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Servicio de comedor escolar',
    serviceType: 'Servicio de comedor escolar',
    url: URL,
    provider: org,
    areaServed: [
      { '@type': 'City', name: 'Ciudad de México' },
      { '@type': 'AdministrativeArea', name: 'Área Metropolitana del Valle de México' },
    ],
    audience: { '@type': 'EducationalAudience', educationalRole: 'student' },
    ...(hayHero ? { image: HERO_URL } : {}),
    description:
      'Comedor escolar con menú del día de 3 o 4 tiempos, recién hecho y servido por turnos, con porción por edad y conforme a los Lineamientos generales de alimentos y bebidas en las escuelas (SEP), la NOM-043-SSA2-2012 y la NOM-251-SSA1-2009. Pago en app o en efectivo en caja, por día, semana o mes.',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: comedorFaqs.map(f => ({
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
      { '@type': 'ListItem', position: 2, name: 'Comedores escolares', item: URL },
    ],
  },
  ...(hayHero
    ? [
        {
          '@context': 'https://schema.org',
          '@type': 'ImageObject',
          contentUrl: HERO_URL,
          url: HERO_URL,
          width: 1536,
          height: 1024,
          caption: HERO_ALT,
          description: 'Concepto visual (render) de un comedor escolar operado por Nutri Cafeterías.',
          creator: org,
        },
      ]
    : []),
]

const WA_MSG = 'Hola, me interesa el servicio de comedor escolar para mi escuela'

const sellos = [
  { t: 'Plato completo', d: 'a ningún niño le falta nada' },
  { t: 'Porción por edad', d: 'la misma para todos los de su grupo' },
  { t: 'Mismo sabor', d: 'del primer turno al último' },
]

const cifras = [
  { n: '#1', d: 'Operador de cafeterías escolares en México' },
  { n: '+1,000,000', d: 'órdenes servidas' },
  { n: '4.9 / 5', d: 'de satisfacción' },
  { n: 'SEP', d: 'menú conforme a los lineamientos' },
]

const galeria = [
  {
    archivo: 'barra-servicio.jpg',
    alt: 'Barra de servicio de un comedor escolar con sopa, guisos, arroz, verduras y fruta, atendida por personal con uniforme verde',
    titulo: 'La barra, recién servida',
    texto: 'Sopa, guiso del día, arroz, verduras y fruta, servidos al momento con utensilios medidos.',
    emoji: '🍲',
    grande: true,
  },
  {
    archivo: 'plato-completo.jpg',
    alt: 'Plato completo de comedor escolar: albóndigas en salsa de jitomate con espagueti, ensalada, sandía y agua de fruta',
    titulo: 'Plato completo',
    texto: 'Entrada, plato fuerte con proteína, verdura, fruta y agua.',
    emoji: '🍝',
  },
  {
    archivo: 'tinga-frijoles.jpg',
    alt: 'Tinga de pollo con frijoles y tortillas de maíz, plato fuerte del menú de comedor escolar',
    titulo: 'Cocina mexicana de casa',
    texto: 'Tinga de pollo con frijoles y tortillas de maíz.',
    emoji: '🌮',
  },
  {
    archivo: 'fruta-agua.jpg',
    alt: 'Estación de fruta picada y agua fresca sin azúcar añadida en un comedor escolar',
    titulo: 'Fruta y agua fresca',
    texto: 'De postre, solo fruta. Agua sin azúcar añadida.',
    emoji: '🍉',
  },
]

const recienHecho = [
  { emoji: '🍳', t: 'En la cocina de tu escuela', d: 'Cocinamos ahí mismo, por tandas, para que cada turno reciba comida recién hecha.' },
  { emoji: '🚚', t: '¿Tu escuela no tiene cocina?', d: 'Te proponemos cómo resolverlo: equipar un espacio en la escuela o traer la comida caliente, preparada el mismo día, en contenedores térmicos con la temperatura controlada. Llega a servirse, no a calentarse.' },
  { emoji: '🌡️', t: 'Temperaturas con bitácora', d: 'Lo caliente, a 60 °C o más; ensalada, fruta y agua, a 4 °C o menos (NOM-251-SSA1-2009).' },
  { emoji: '🧂', t: 'Recetas estandarizadas', d: 'Sal medida en cada receta: así el sabor no depende del turno ni de quién cocine.' },
]

const horarios = ['13:00', '13:45', '14:30', '15:15']

const comunicacion = [
  { emoji: '📸', t: 'Foto del plato del día', d: 'Por WhatsApp, todos los días.' },
  { emoji: '🗓️', t: 'Menú del mes por adelantado', d: 'Por WhatsApp y en la app.' },
  { emoji: '✅', t: 'Aviso de «ya comió»', d: 'Cuando tu hijo entra al comedor y recibe su comida.' },
  { emoji: '📝', t: 'Encuesta mensual a los papás', d: 'Sabor, porciones y servicio. Compartimos los resultados con la escuela y ajustamos el menú con ellos.' },
  { emoji: '📊', t: 'Reporte mensual a la escuela', d: 'Platos servidos, resultados de la encuesta y menú. Si hay becas o aportación, también van ahí.' },
  { emoji: '🌮', t: 'Un día temático al mes', d: 'Cocina mexicana, sabores del mundo o «los niños eligen el plato fuerte».' },
]

const cumplimiento = [
  'Porción por edad (primaria: 450 a 540 kcal)',
  'Nada frito, capeado ni empanizado',
  'Sin azúcar añadida ni consomé en polvo, con sal al mínimo',
  'Agua natural como bebida principal',
  'De postre, solo fruta',
  'Máximo dos cereales por menú',
]

const tiempoCompleto = [
  { t: 'Comida completa en el horario extendido', d: 'Menú de 3 o 4 tiempos por turnos; podemos sumar desayuno o colación.' },
  { t: 'Documentos de la AEFCM', d: 'Respondemos uno por uno los de alimentación (higiene, menú, gas y protección civil) y entregamos el expediente del personal antes de iniciar.' },
  { t: 'Propuesta, degustación y junta con papás', d: 'Acompañamos el proceso de la escuela, también cuando hay licitación.' },
  { t: 'Becas, docentes o aportaciones', d: 'Nos adaptamos a las condiciones que defina la escuela y van en el reporte mensual.' },
]

const diaColor = [
  'from-emerald-500 to-emerald-400',
  'from-emerald-400 to-emerald-300',
  'from-emerald-600 to-emerald-500',
  'from-emerald-500 to-emerald-400',
  'from-emerald-700 to-emerald-500',
]

const btnPrimario =
  'group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black transition-all duration-200 shadow-xl shadow-emerald-200 hover:scale-[1.03]'

const enlace = 'text-emerald-600 font-bold hover:underline underline-offset-2'

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-wider border border-emerald-200 mb-4">
      {children}
    </span>
  )
}

export default function ComedoresEscolaresPage() {
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
            <li aria-current="page" className="font-semibold text-stone-700">Comedores escolares</li>
          </ol>
        </nav>

        {/* Hero */}
        <section data-seccion="comedor_hero" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[2rem] overflow-hidden bg-emerald-950 shadow-2xl shadow-emerald-900/20 min-h-[620px] md:min-h-[640px] flex items-end">
            <FotoComedor
              archivo={HERO}
              alt={HERO_ALT}
              sizes="(min-width: 1280px) 1216px, 100vw"
              preload
              emoji="🍽️"
              className="absolute inset-x-0 top-0 h-80 sm:h-auto sm:inset-0"
              etiqueta="arriba"
            />
            <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0,transparent_120px,var(--color-emerald-950)_320px)] sm:bg-none sm:bg-gradient-to-t sm:from-emerald-950 sm:via-emerald-950/80 sm:to-transparent md:bg-gradient-to-r md:from-emerald-950/95 md:via-emerald-950/65 md:to-transparent" />
            <div className="relative z-10 w-full px-6 pb-8 pt-60 sm:p-10 md:p-14 lg:p-16">
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-300 text-stone-900 font-black text-xs uppercase tracking-wider mb-5">
                  🍽️ Comedores escolares en CDMX
                </span>
                <h1 className="text-[2.1rem] leading-[1.08] sm:text-5xl lg:text-6xl font-black text-white">
                  Comedor escolar:{' '}
                  <span className="text-emerald-200">comida completa, recién hecha,</span>{' '}
                  para cada niño, todos los días
                </h1>
                <p className="mt-5 text-emerald-50/90 text-base sm:text-lg leading-relaxed">
                  Sopa o ensalada, plato fuerte con proteína, verdura, fruta y agua. Cocinamos el mismo
                  día, servimos por turnos y cuidamos que el último grupo coma igual de rico que el
                  primero. Conforme a los lineamientos de la SEP.
                </p>
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  <Link href="/#contacto" data-cta="agenda_degustacion" className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-emerald-300 hover:bg-emerald-200 text-stone-900 font-black transition-all duration-200 shadow-xl shadow-black/20 hover:scale-[1.03]">
                    Agenda una degustación
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href={waHref(WA_MSG, 'comedores')}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="whatsapp_hero"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/40 bg-white/10 backdrop-blur text-white font-black hover:bg-white/20 transition-all duration-200"
                  >
                    <WhatsAppIcon className="w-4 h-4" /> Escríbenos por WhatsApp
                  </a>
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
          <section data-seccion="comedor_galeria" className="mt-24 md:mt-28">
            <Reveal className="text-center max-w-3xl mx-auto mb-10">
              <Kicker>Así se ve un día en el comedor</Kicker>
              <h2 className="text-3xl md:text-5xl font-black text-stone-900 leading-tight">
                Servicio de comedor escolar{' '}
                <span className="gradient-text-primary">que se antoja</span>
              </h2>
              <p className="mt-4 text-stone-600 text-lg">
                Comida de casa, recién hecha, servida caliente y con la misma porción para todo el grupo.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-5 md:h-[620px]">
              {galeria.map((g, i) => (
                <Reveal
                  key={g.archivo}
                  delay={i * 0.08}
                  className={`h-full ${g.grande ? 'sm:col-span-2 md:row-span-2' : i === 1 ? 'sm:col-span-2' : ''}`}
                >
                  <figure className="group relative h-full min-h-[260px] rounded-3xl overflow-hidden shadow-lg">
                    <FotoComedor
                      archivo={g.archivo}
                      alt={g.alt}
                      sizes={g.grande || i === 1 ? '(min-width: 768px) 50vw, 100vw' : '(min-width: 768px) 25vw, 100vw'}
                      emoji={g.emoji}
                      className="absolute inset-0"
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

          {/* Qué incluye */}
          <section data-seccion="comedor_que_incluye" className="mt-24 md:mt-28">
            <Reveal className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
                Un menú, igual para todos,{' '}
                <span className="gradient-text-primary">en 3 o 4 tiempos</span>
              </h2>
              <p className="text-stone-600">
                3 o 4 tiempos, según lo que decida tu escuela. Agua natural todos los días; agua de
                fruta sin azúcar añadida 2 veces por semana; tortillas de maíz o pasta según el día.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {tiempos.map((t, i) => (
                <Reveal key={t.n} delay={i * 0.06}>
                  <div className="card-lift h-full p-6 rounded-3xl border-2 border-stone-100 bg-white shadow-sm">
                    <span className="inline-flex w-10 h-10 rounded-2xl bg-emerald-500 text-white font-black items-center justify-center mb-4">{t.n}</span>
                    <h3 className="font-black text-stone-900 mb-1">{t.titulo}</h3>
                    <p className="text-sm text-stone-700">{t.lleva}</p>
                    <p className="text-xs text-stone-500 mt-2 leading-relaxed">Ej.: {t.ej}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-stone-600 max-w-2xl mx-auto">
              Con alergias o dieta especial con constancia médica, preparamos su plato aparte. Para
              colegios con horario extendido podemos sumar desayuno o colación.
            </p>
          </section>
        </div>

        {/* Menú semanal */}
        <section data-seccion="comedor_menu_semanal" className="mt-24 md:mt-28 py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center max-w-3xl mx-auto mb-10">
              <Kicker>Así come un niño en una semana</Kicker>
              <h2 className="text-3xl md:text-5xl font-black text-stone-900 leading-tight">
                Menú de comedor escolar{' '}
                <span className="gradient-text-primary">conforme a la SEP</span>
              </h2>
            </Reveal>
            <Reveal>
              <FotoComedor
                archivo="menu-semana.jpg"
                alt="Menú semanal de comedor escolar: cinco platos completos de lunes a viernes conforme a la SEP"
                sizes="(min-width: 1280px) 1216px, 100vw"
                emoji="🗓️"
                className="aspect-[16/9] md:aspect-[21/8] rounded-3xl shadow-xl"
              />
            </Reveal>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {menuSemana.map((d, i) => (
                <Reveal key={d.dia} delay={i * 0.06}>
                  <article className="card-lift h-full rounded-3xl bg-[#F7F3EA] border-2 border-stone-100 overflow-hidden flex flex-col">
                    <div className={`px-5 py-3 bg-gradient-to-r ${diaColor[i]} ${i % 2 ? 'text-stone-900' : 'text-white'} font-black uppercase tracking-wider text-sm`}>
                      {d.dia}
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <h3 className="font-black text-stone-900 leading-snug">{d.fuerte}</h3>
                      <dl className="mt-4 space-y-2 text-sm text-stone-600">
                        <div className="flex gap-2"><dt aria-label="Entrada">🥣</dt><dd>{d.entrada}</dd></div>
                        <div className="flex gap-2"><dt aria-label="Verdura">🥗</dt><dd>{d.verdura}</dd></div>
                        <div className="flex gap-2"><dt aria-label="Postre">🍉</dt><dd>{d.postre}</dd></div>
                        <div className="flex gap-2"><dt aria-label="Agua">💧</dt><dd>{d.agua}</dd></div>
                      </dl>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
            <p className="mt-6 text-sm text-stone-500 max-w-3xl mx-auto text-center">
              Porción de primaria de 450 a 540 kcal. Nada frito, capeado ni empanizado. Sin azúcar
              añadida y con sal al mínimo. Máximo dos cereales por menú. De postre, solo fruta.{' '}
              <strong className="text-stone-700">El menú cambia cada semana en un ciclo de 4 semanas</strong> y
              lo mandamos a los papás por adelantado. Mira un{' '}
              <Link href="/menus" className={enlace}>ejemplo de menú escolar con información nutrimental</Link>.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Porciones por edad */}
          <section data-seccion="comedor_porciones" className="mt-24 md:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <Reveal>
              <FotoComedor
                archivo="plato-completo.jpg"
                alt="Porción de comedor escolar por edad: albóndigas de res en salsa de jitomate con espagueti, ensalada, sandía y agua"
                sizes="(min-width: 1024px) 50vw, 100vw"
                emoji="🍝"
                className="aspect-square sm:aspect-[4/3] lg:aspect-square rounded-[2rem] shadow-2xl shadow-emerald-900/15"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 leading-tight mb-3">
                Mismo menú,{' '}
                <span className="gradient-text-primary">la porción que le toca a cada edad</span>
              </h2>
              <p className="text-stone-600 font-semibold mb-6">
                Plato del lunes: albóndigas de res en salsa de jitomate con espagueti
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { g: '1.° a 3.° de primaria', e: '6 a 8 años', p: '2 albóndigas', c: '1 taza de espagueti', k: '~460 kcal' },
                  { g: '4.° a 6.° de primaria', e: '9 a 12 años', p: '3 albóndigas', c: '1 taza de espagueti', k: '~500 kcal' },
                ].map((r, i) => (
                  <div key={r.g} className={`p-5 rounded-3xl border-2 ${i ? 'border-emerald-300 bg-emerald-50' : 'border-stone-100 bg-white'} shadow-sm`}>
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-500">{r.e}</p>
                    <h3 className="font-black text-stone-900 mt-1">{r.g}</h3>
                    <p className="mt-4 text-3xl font-black gradient-text-primary">{r.k}</p>
                    <ul className="mt-3 space-y-1 text-sm text-stone-700">
                      <li>Plato fuerte: {r.p}</li>
                      <li>Cereal: {r.c}</li>
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {['500 kcal', '20 g de proteína', '5 g de fibra', '320 mg de sodio', '0 g de azúcar añadida'].map((n, i) => (
                  <span key={n} className={`px-3 py-1.5 rounded-full text-xs font-bold ${i === 4 ? 'bg-emerald-300 text-stone-900' : 'bg-white border border-stone-200 text-stone-700'}`}>
                    {n}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-stone-600 leading-relaxed">
                Plato de 4.° a 6.°. Cada platillo tiene su ficha técnica con porción, kilocalorías y
                alérgenos, y la escuela la recibe con el menú. En kínder, secundaria y prepa ajustamos
                la porción al rango de cada nivel que marcan los lineamientos.
              </p>
            </Reveal>
          </section>
        </div>

        {/* Recién hecho */}
        <section data-seccion="comedor_recien_hecho" className="mt-24 md:mt-28 py-20 bg-emerald-800 relative overflow-hidden">
          <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-emerald-500/30 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-emerald-300/20 blur-3xl" />
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-black text-white leading-tight">
                Se cocina el mismo día.{' '}
                <span className="text-emerald-200">Nunca se congela.</span>
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {recienHecho.map((r, i) => (
                <Reveal key={r.t} delay={i * 0.06}>
                  <div className="h-full p-7 rounded-3xl bg-white/[0.07] border border-white/15 backdrop-blur">
                    <div className="text-4xl mb-3">{r.emoji}</div>
                    <h3 className="font-black text-white text-lg mb-2">{r.t}</h3>
                    <p className="text-sm text-emerald-50/80 leading-relaxed">{r.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Pagos */}
          <section data-seccion="comedor_pagos" className="mt-24 md:mt-28 max-w-5xl mx-auto">
            <Reveal className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
                Paga como te acomode:{' '}
                <span className="gradient-text-primary">en la app o en efectivo</span>
              </h2>
              <p className="text-stone-600">
                <strong>Por día, por semana o por mes</strong>, como prefieras. Pregunta por los paquetes semanales y mensuales de tu escuela.
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card-lift p-8 rounded-3xl border-2 border-emerald-200 bg-white shadow-sm">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="text-xl font-black text-stone-900 mb-3">En la app para familias</h3>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li>✓ Tarjeta de débito o crédito, transferencia, Apple Pay y Google Pay, o efectivo en tiendas de la red Paynet (7-Eleven, Walmart, farmacias)</li>
                  <li>✓ Un saldo por cada hijo, con su historial</li>
                  <li>✓ Límite diario y alergias registradas</li>
                </ul>
              </div>
              <div className="card-lift p-8 rounded-3xl border-2 border-emerald-200 bg-white shadow-sm">
                <div className="text-4xl mb-3">💵</div>
                <h3 className="text-xl font-black text-stone-900 mb-3">En efectivo, en la caja del comedor</h3>
                <ul className="space-y-2 text-sm text-stone-700">
                  <li>✓ Pagas en la caja, sin comisión y sin necesidad de celular</li>
                  <li>✓ Te damos tu comprobante y queda registrado igual que en la app</li>
                  <li>✓ Por día, semana o mes, igual que en la app</li>
                </ul>
              </div>
            </div>
            <p className="mt-4 text-xs text-stone-500 text-center">
              En recargas en línea puede aplicar una comisión; en caja y por transferencia, sin comisión.
            </p>
          </section>

          {/* Cancelaciones */}
          <section data-seccion="comedor_cancelaciones" className="mt-24 md:mt-28 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-6">
              ¿Tu hijo va a faltar?{' '}
              <span className="gradient-text-primary">No pierdes tu dinero.</span>
            </h2>
            <div className="p-8 rounded-3xl bg-emerald-50 border-2 border-emerald-200">
              <p className="text-lg text-emerald-900">
                <strong>Avísanos con anticipación</strong> desde la app, por WhatsApp o en la
                caja, y esa comida <strong>se queda como saldo</strong> para otro día. Así de simple.
              </p>
              <p className="mt-3 text-sm text-stone-600">
                Cada escuela fija la hora límite del aviso. Si no nos avisas a tiempo, la comida ya se preparó para él y se cuenta como servida. Los
                paquetes de semana o mes siguen la misma regla. ¿Te cambias de escuela o das de baja
                el servicio? Te devolvemos el saldo que no hayas usado.
              </p>
            </div>
          </section>

          {/* Comunicación */}
          <section data-seccion="comedor_comunicacion" className="mt-24 md:mt-28">
            <Reveal className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-stone-900">
                Los papás ven todo,{' '}
                <span className="gradient-text-primary">todos los días</span>
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {comunicacion.map((c, i) => (
                <Reveal key={c.t} delay={(i % 3) * 0.06}>
                  <div className="card-lift h-full p-6 rounded-3xl border-2 border-stone-100 bg-white shadow-sm">
                    <div className="text-3xl mb-2">{c.emoji}</div>
                    <h3 className="font-black text-stone-900 mb-1">{c.t}</h3>
                    <p className="text-sm text-stone-600">{c.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Degustación */}
          <section id="degustacion" data-seccion="comedor_degustacion" className="mt-24 md:mt-28 scroll-mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-5 rounded-[2rem] overflow-hidden bg-white border-2 border-emerald-200 shadow-xl shadow-emerald-100">
              <FotoComedor
                archivo="tinga-frijoles.jpg"
                alt="Degustación de comedor escolar: tinga de pollo con frijoles y tortillas de maíz"
                sizes="(min-width: 1024px) 40vw, 100vw"
                emoji="🥄"
                className="lg:col-span-2 min-h-[240px] lg:min-h-full"
              />
              <div className="lg:col-span-3 p-8 md:p-12">
                <span className="inline-flex px-3 py-1 rounded-full bg-emerald-300 text-stone-900 font-black text-xs uppercase tracking-wider mb-4">
                  Degustación en tu escuela
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-4">
                  Pruébalo <span className="gradient-text-primary">antes de decidir</span>
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  Hacemos la degustación en tu escuela para la dirección, los maestros, el comité y los
                  papás. Prueban la comida de un día completo, ven la ficha técnica del plato y{' '}
                  <strong>votan con una boleta, también los niños</strong>: qué les gustó más y qué
                  calificación le dan. Ahí mismo mostramos el tótem y la app funcionando.
                </p>
                <Link href="/#contacto" data-cta="agenda_degustacion" className={`mt-6 ${btnPrimario}`}>
                  Agenda una degustación <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>

          {/* Tecnología */}
          <section data-seccion="comedor_tecnologia" className="mt-24 md:mt-28 max-w-5xl mx-auto">
            <Reveal className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-stone-900">
                Paga con Face ID.{' '}
                <span className="gradient-text-primary">Tú recibes el aviso.</span>
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="relative aspect-[3/2] rounded-3xl overflow-hidden shadow-lg">
                <FotoComedor
                  archivo="totem-facial.jpg"
                  alt="Alumna entrando al comedor escolar con reconocimiento facial en el tótem de autoservicio"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  emoji="🙂"
                  className="absolute inset-0"
                />
              </div>
              <div className="relative aspect-[3/2] rounded-3xl overflow-hidden shadow-lg">
                <FotoComedor
                  archivo="app-familias.jpg"
                  alt="Mamá revisando en la app para familias el saldo y el menú del comedor escolar de su hijo"
                  sizes="(min-width: 768px) 50vw, 100vw"
                  emoji="📱"
                  className="absolute inset-0"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { t: 'Tótem con reconocimiento facial', d: 'A la entrada del comedor: el niño se para frente a la cámara y entra, sin tarjetas ni boletos. Si un día no tiene comida comprada, come igual y nuestro equipo lo resuelve contigo después.' },
                { t: 'Voluntario y con consentimiento', d: 'Como desbloquear su celular con la cara. Su foto nunca se guarda: tú decides si lo activas, con tu consentimiento, y lo borras cuando quieras desde la app.' },
                { t: '¿No quieres registrar su rostro?', d: 'Nuestro personal lo registra en la entrada con la lista del comedor; la maestra no hace nada extra. Nadie se queda sin comer por la tecnología.' },
                { t: 'App para familias', d: 'Compra por día, semana o mes, saldo por hijo, límite diario, alergias que la cocina ve antes de servir, y avisos. También puedes pagar en efectivo en caja.' },
              ].map(c => (
                <div key={c.t} className="p-6 rounded-3xl bg-white border-2 border-stone-100 shadow-sm">
                  <h3 className="font-black text-stone-900 mb-1">{c.t}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{c.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-center text-sm">
              <Link href="/aviso-de-privacidad" className={enlace}>Aviso de privacidad →</Link>
            </p>
          </section>

          {/* Cumplimiento */}
          <section data-seccion="comedor_cumplimiento" className="mt-24 md:mt-28 max-w-4xl mx-auto">
            <Reveal className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-stone-900">
                Conforme a la SEP,{' '}
                <span className="gradient-text-primary">con papeles en mano</span>
              </h2>
            </Reveal>
            <div className="p-8 rounded-3xl bg-white border-2 border-stone-100 shadow-sm space-y-5 text-stone-700">
              <div>
                <h3 className="font-black text-stone-900">Lineamientos generales de alimentos y bebidas en las escuelas</h3>
                <p className="text-xs text-stone-500 mb-3">DOF 30-sep-2024, vigentes desde el 29-mar-2025</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                  {cumplimiento.map(c => <li key={c}>✓ {c}</li>)}
                </ul>
              </div>
              <p className="text-sm"><strong>NOM-043-SSA2-2012:</strong> los tres grupos del Plato del Bien Comer en cada comida.</p>
              <p className="text-sm"><strong>NOM-251-SSA1-2009:</strong> higiene, temperaturas y bitácoras diarias.</p>
              <p className="text-sm">
                ¿Qué exige exactamente la norma? Lo explicamos en{' '}
                <Link href="/lineamientos-sep" className={enlace}>lineamientos SEP para cafetería y comedor escolar</Link>.
              </p>
              <a
                href={waHref('Hola, me gustaría recibir su anexo de cumplimiento para comedor escolar', 'comedores-anexo')}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="solicita_anexo_cumplimiento"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border-2 border-emerald-200 bg-emerald-50 text-emerald-700 font-black hover:bg-emerald-100 transition-colors"
              >
                Solicita nuestro anexo de cumplimiento →
              </a>
            </div>
          </section>

          {/* Escuelas de tiempo completo */}
          <section data-seccion="comedor_tiempo_completo" className="mt-24 md:mt-28">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <Reveal className="lg:col-span-2">
                <Kicker>Horario extendido</Kicker>
                <h2 className="text-3xl md:text-4xl font-black text-stone-900 leading-tight">
                  Comedores escolares en{' '}
                  <span className="gradient-text-primary">escuelas de tiempo completo</span>
                </h2>
                <p className="mt-4 text-stone-600 leading-relaxed">
                  Respondemos uno por uno los documentos de la AEFCM sobre alimentación (higiene, menú,
                  gas y protección civil) y entregamos el expediente del personal antes de iniciar.
                </p>
              </Reveal>
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tiempoCompleto.map((t, i) => (
                  <Reveal key={t.t} delay={i * 0.06}>
                    <div className="h-full p-6 rounded-3xl bg-white border-2 border-stone-100 shadow-sm">
                      <h3 className="font-black text-stone-900 mb-1">{t.t}</h3>
                      <p className="text-sm text-stone-600 leading-relaxed">{t.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Respaldos */}
          <section className="mt-20 max-w-6xl mx-auto">
            <Respaldos />
          </section>

          {/* Cuánto cuesta */}
          <section data-seccion="comedor_costo" className="mt-24 md:mt-28 max-w-5xl mx-auto">
            <div className="p-8 md:p-12 rounded-[2rem] bg-stone-900 text-center relative overflow-hidden">
              <div aria-hidden className="absolute -top-24 left-1/2 -translate-x-1/2 w-[32rem] h-48 rounded-full bg-emerald-500/30 blur-3xl" />
              <h2 className="relative text-3xl md:text-4xl font-black text-white">
                ¿Cuánto cuesta un <span className="text-emerald-200">comedor escolar</span>?
              </h2>
              <p className="relative mt-4 text-stone-300 max-w-2xl mx-auto leading-relaxed">
                Depende del número de alumnos, de los tiempos del menú y de lo que la escuela necesite.
                Cotizamos rápido después de una llamada o una visita.
              </p>
              <div className="relative mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Link href="/blog/cuanto-cuesta-comedor-escolar-cdmx" className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white text-stone-900 font-black hover:bg-emerald-50 transition-colors">
                  Lee la guía: cuánto cuesta un comedor escolar en CDMX →
                </Link>
                <a
                  href={waHref('Hola, quiero cotizar el servicio de comedor escolar para mi escuela', 'comedores')}
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
          <section data-seccion="comedor_faq" className="mt-24 md:mt-28 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
              Preguntas frecuentes sobre el{' '}
              <span className="gradient-text-primary">comedor escolar</span>
            </h2>
            <div className="space-y-3">
              {comedorFaqs.map(f => (
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
          <section data-seccion="comedor_cta_final" className="mt-24 md:mt-28 p-10 md:p-14 rounded-[2rem] bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
            <p className="text-2xl md:text-4xl font-black text-white">
              Que la hora de la comida sea la mejor parte del día
            </p>
            <p className="text-emerald-100 mt-3 mb-7">
              Agenda una degustación en tu escuela: prueban la comida, votan los niños y ven cómo funciona.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/#contacto"
                data-cta="agenda_degustacion"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-300 text-stone-900 font-black hover:bg-emerald-200 transition-all duration-200 shadow-lg hover:scale-[1.03]"
              >
                Agendar degustación →
              </Link>
              <a
                href={waHref(WA_MSG, 'comedores')}
                target="_blank"
                rel="noopener noreferrer"
                data-cta="whatsapp_cta_final"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-emerald-700/60 text-white font-bold hover:bg-emerald-700 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp
              </a>
            </div>
            <p className="mt-5 text-sm text-emerald-50">
              <Link href="/cafeterias-escolares" className="font-bold underline underline-offset-2">
                ¿Buscas cafetería con platillos a la carta? →
              </Link>
            </p>
          </section>

          {/* Bloque SEO */}
          <section data-seccion="comedor_seo" className="mt-20 max-w-3xl mx-auto space-y-5 text-stone-600 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-black text-stone-900">
              Empresa de comedores escolares en CDMX
            </h2>
            <h3 className="text-lg font-black text-stone-800">¿Qué es un comedor escolar?</h3>
            <p>
              Un comedor escolar es el servicio que da a cada alumno una comida completa durante la
              jornada: entrada, plato fuerte con proteína, verdura, fruta y agua. A diferencia de una
              cafetería, no se elige a la carta; hay un menú del día, igual para todo el grupo, con la
              porción que corresponde a su edad. Una empresa de comedores escolares se encarga de todo:
              diseña el menú en un ciclo de 4 semanas, compra los insumos con trazabilidad de
              proveedores, cocina el mismo día —en la cocina de la escuela o, si no tiene, preparada
              ese mismo día y llevada caliente— y se comunica con las familias.
            </p>
            <h3 className="text-lg font-black text-stone-800">¿Cómo funciona el servicio por turnos?</h3>
            <p>
              Cada grupo entra en su horario, primero los más chicos. El plato se sirve al momento con
              utensilios medidos y, al cerrar cada turno, revisamos que todos hayan recibido su comida
              completa. Cocinamos por tandas para que el último turno coma igual de recién hecho que el
              primero. Las familias pagan en la app o en efectivo en caja y reciben el menú del mes, la
              foto del plato del día y el aviso de «ya comió».
            </p>
            <h3 className="text-lg font-black text-stone-800">Menú conforme a la SEP, la NOM-043 y la NOM-251</h3>
            <p>
              El menú sigue los Lineamientos generales de alimentos y bebidas en las escuelas de la SEP:
              nada frito ni empanizado, sin azúcar añadida, sal al mínimo, agua natural y fruta de
              postre. Cada comida incluye los tres grupos del Plato del Bien Comer (NOM-043-SSA2-2012),
              y la higiene, las temperaturas y las bitácoras siguen la NOM-251-SSA1-2009. Puedes ver un{' '}
              <Link href="/menus" className={enlace}>menú escolar de ejemplo</Link> y revisar{' '}
              <Link href="/lineamientos-sep" className={enlace}>qué exigen los lineamientos SEP</Link>.
            </p>
            <h3 className="text-lg font-black text-stone-800">Para colegios privados, escuelas de tiempo completo y públicas</h3>
            <p>
              Damos servicio de comedor escolar en la Ciudad de México —Miguel Hidalgo, Cuajimalpa,
              Álvaro Obregón, Benito Juárez, Coyoacán, Tlalpan, Iztapalapa, La Magdalena Contreras y
              más alcaldías— y en el área metropolitana del Valle de México, como Naucalpan,
              Huixquilucan, Atizapán y Valle de Chalco. Atendemos colegios privados, escuelas de tiempo
              completo, escuelas públicas y universidades, con 100 o con 900 alumnos. Si quieres saber
              qué modelo le conviene a tu escuela, lee{' '}
              <Link href="/blog/cuanto-cuesta-comedor-escolar-cdmx" className={enlace}>cuánto cuesta un comedor escolar en CDMX</Link>.
            </p>
            <p>
              ¿Buscas un punto de venta con platillos a la carta, snacks y bebidas? Conoce nuestra{' '}
              <Link href="/cafeterias-escolares" className={enlace}>cafetería escolar</Link>. Para
              graduaciones o juntas de consejo, revisa{' '}
              <Link href="/catering-escolar" className={enlace}>eventos escolares</Link>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
