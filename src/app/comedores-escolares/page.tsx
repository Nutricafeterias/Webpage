import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'

export const metadata: Metadata = {
  title: 'Comedor Escolar en CDMX | Operación Integral de Comedores Escolares — Nutri Cafeterías',
  description:
    'Operamos comedores escolares en escuelas privadas de CDMX y área metropolitana: menús de nutriólogos alineados a SEP, Distintivo H, protocolos NOM-251, tecnología de pago sin efectivo y app para padres. Sin inversión para la escuela.',
  keywords: [
    'comedor escolar CDMX',
    'comedor escolar',
    'comedores escolares CDMX',
    'proveedor comedor escolar',
    'servicio comedor escolar escuela privada',
    'empresa comedores escolares México',
    'concesión comedor escolar',
  ],
  alternates: { canonical: 'https://cafeteriasescolares.com.mx/comedores-escolares' },
  openGraph: {
    title: 'Comedores Escolares en México — Operación Integral Premium',
    description:
      'Menús de nutriólogos, tecnología sin efectivo y cero carga operativa para tu escuela. El estándar premium de comedores escolares en CDMX.',
    url: 'https://cafeteriasescolares.com.mx/comedores-escolares',
    type: 'website',
  },
}

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Operación integral de comedores escolares',
  serviceType: 'Comedor escolar',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Nutri Cafeterías',
    url: 'https://cafeteriasescolares.com.mx',
    telephone: '+52-55-6703-4269',
  },
  areaServed: [
    { '@type': 'City', name: 'Ciudad de México' },
    { '@type': 'AdministrativeArea', name: 'Área Metropolitana del Valle de México' },
  ],
  description:
    'Operación completa de comedores escolares para escuelas privadas: menús diseñados por nutriólogos alineados a lineamientos SEP, Distintivo H, protocolos alineados a NOM-251, tecnología de pago sin efectivo y app para padres. Sin inversión inicial para la institución.',
}

const beneficios = [
  { emoji: '👩‍⚕️', title: 'Menús de nutriólogos', desc: 'Ciclos de 4 semanas con platillos de temporada, alineados a lineamientos SEP y con manejo de alérgenos documentado.' },
  { emoji: '🏅', title: 'Distintivo H y licencia sanitaria', desc: 'Permisos y certificaciones en regla, con protocolos de higiene alineados a NOM-251, bitácoras y auditorías internas.' },
  { emoji: '💳', title: 'Cero efectivo en el plantel', desc: 'Pago con huella digital y app: los papás recargan desde el celular y ven cada consumo en tiempo real.' },
  { emoji: '⚡', title: 'Servicio en menos de 3 minutos', desc: 'Diseño de flujo y tótems de autoservicio que eliminan filas incluso con cientos de alumnos en receso.' },
  { emoji: '🏫', title: 'Cero carga para la dirección', desc: 'Personal, proveedores, calidad y quejas: todo lo operamos nosotros. La escuela se dedica a educar.' },
  { emoji: '💰', title: 'Sin inversión inicial', desc: 'Nosotros asumimos equipo, tecnología y adecuaciones. La escuela solo aporta el espacio.' },
]

const diferencias = [
  { q: 'Comedor tradicional', items: ['Menú fijo impuesto', 'Pago en efectivo o vales', 'Filas largas en hora pico', 'La escuela supervisa la operación', 'Sin visibilidad para los papás'] },
  { q: 'Comedor escolar Nutri', items: ['Menús de nutriólogo que los alumnos eligen', 'Huella digital y app — cero efectivo', 'Menos de 3 minutos de espera', 'Operación 100% a cargo de Nutri', 'App para padres con historial y límites'] },
]

export default function ComedoresEscolaresPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <Navbar />
      <main className="pt-28 pb-24 bg-[#FFFEF7] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6 border border-emerald-200">
              🍽️ Comedores escolares
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight">
              Comedor escolar en CDMX{' '}
              <span className="gradient-text-primary">de nivel premium</span>{' '}
              para tu escuela
            </h1>
            <p className="mt-5 text-stone-500 text-lg leading-relaxed">
              Operamos el comedor escolar completo — menús de nutriólogos, personal, higiene
              certificada y tecnología — en escuelas privadas de CDMX y área metropolitana.
              Tu escuela no invierte, no opera y no se preocupa.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contacto"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-black transition-all duration-200 shadow-xl shadow-emerald-200 hover:scale-[1.03]"
              >
                Agenda una reunión gratis
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/diagnostico"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-emerald-200 bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200"
              >
                📊 Evalúa tu comedor en 2 min
              </Link>
            </div>
          </div>

          {/* Benefits grid */}
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {beneficios.map(b => (
              <div key={b.title} className="card-lift p-6 rounded-2xl border-2 border-stone-100 bg-white shadow-sm">
                <div className="text-4xl mb-3">{b.emoji}</div>
                <h2 className="font-black text-stone-900 mb-2 text-base">{b.title}</h2>
                <p className="text-sm text-stone-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison */}
          <div className="mt-20">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-10">
              Comedor tradicional vs.{' '}
              <span className="gradient-text-primary">comedor Nutri</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {diferencias.map((col, i) => (
                <div
                  key={col.q}
                  className={`p-8 rounded-3xl border-2 ${i === 0 ? 'border-stone-200 bg-stone-50' : 'border-emerald-300 bg-emerald-50 shadow-lg shadow-emerald-100'}`}
                >
                  <h3 className={`font-black text-lg mb-5 ${i === 0 ? 'text-stone-500' : 'text-emerald-700'}`}>
                    {i === 0 ? '😐' : '🚀'} {col.q}
                  </h3>
                  <ul className="space-y-3">
                    {col.items.map(item => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed">
                        <span className={`mt-0.5 flex-shrink-0 ${i === 0 ? 'text-stone-400' : 'text-emerald-600'}`}>
                          {i === 0 ? '✕' : '✓'}
                        </span>
                        <span className={i === 0 ? 'text-stone-500' : 'text-emerald-900 font-medium'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* SEO text block */}
          <div className="mt-20 max-w-3xl mx-auto space-y-5 text-stone-600 leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-black text-stone-900">
              ¿Qué incluye nuestro servicio de comedor escolar?
            </h2>
            <p>
              El servicio integral de comedores escolares de Nutri Cafeterías cubre todo el ciclo:
              diseño de menús por nutriólogos conforme a los lineamientos de la SEP, compra y
              trazabilidad de ingredientes, preparación en sitio con protocolos alineados a la
              NOM-251, servicio ágil en horarios de comida y desayuno, y la tecnología de pagos
              y control para padres. Atendemos escuelas privadas desde preescolar hasta
              preparatoria en la Ciudad de México y área metropolitana.
            </p>
            <p>
              A diferencia de un comedor escolar tradicional, nuestro modelo no requiere que la
              institución invierta en equipo ni dedique personal a supervisar la operación:
              asumimos la responsabilidad completa con reportes transparentes para la dirección
              y comunicación directa con los padres de familia. Si tu escuela ya tiene comedor y
              buscas profesionalizarlo, también trabajamos tomas de operación sin interrumpir el
              ciclo escolar.
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-stone-900 pt-4">
              ¿Dónde operamos comedores escolares en CDMX?
            </h2>
            <p>
              Atendemos escuelas privadas en todas las alcaldías de la Ciudad de México —
              incluyendo Miguel Hidalgo, Cuajimalpa, Álvaro Obregón, Benito Juárez, Coyoacán,
              Tlalpan y La Magdalena Contreras — así como en el área metropolitana del Valle
              de México: Naucalpan, Huixquilucan, Interlomas, Ciudad Satélite y Atizapán.
              Si tu colegio está en la zona metropolitana, podemos visitarte esta misma semana
              para hacer un diagnóstico sin costo de tu comedor escolar.
            </p>
            <p>
              ¿Tu escuela no necesita comedor completo sino entrega diaria de alimentos?
              Conoce nuestro{' '}
              <Link href="/catering-escolar-cdmx" className="text-emerald-600 hover:underline font-bold">
                catering escolar en CDMX
              </Link>
              . ¿Buscas la operación completa de cafetería? Visita{' '}
              <Link href="/cafeterias-escuelas-privadas" className="text-emerald-600 hover:underline font-bold">
                cafeterías para escuelas privadas
              </Link>
              .
            </p>
            <p className="font-semibold text-stone-800">
              ¿Quieres saber cómo está tu comedor hoy?{' '}
              <Link href="/diagnostico" className="text-emerald-600 hover:underline font-bold">
                Haz el diagnóstico gratuito de 2 minutos →
              </Link>
            </p>
          </div>

          {/* CTA final */}
          <div className="mt-16 p-10 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
            <p className="text-2xl md:text-3xl font-black text-white">
              El comedor que tu colegiatura promete 🏆
            </p>
            <p className="text-emerald-100 mt-2 mb-6">
              Agenda una visita y conoce nuestros comedores operando en vivo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:scale-[1.03]"
              >
                Agendar reunión gratis →
              </a>
              <a
                href="https://wa.me/5215567034269?text=Hola!%20Me%20interesa%20el%20servicio%20de%20comedor%20escolar%20para%20mi%20escuela."
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-emerald-700/60 text-white font-bold hover:bg-emerald-700 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" /> WhatsApp directo
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
