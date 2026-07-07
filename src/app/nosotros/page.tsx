import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { StatsBar } from '@/components/sections/StatsBar'
import { Schools } from '@/components/sections/Schools'

export const metadata: Metadata = {
  title: 'Nosotros | Nutri Cafeterías — Más de 10 Años Alimentando Escuelas Privadas',
  description:
    'Conoce a Nutri Cafeterías: el operador premium de cafeterías y comedores escolares en México. Más de 10 años de experiencia, Distintivo H, licencia sanitaria y un equipo de nutriólogos, chefs y tecnólogos al servicio de las escuelas.',
  alternates: { canonical: 'https://cafeteriasescolares.com.mx/nosotros' },
  openGraph: {
    title: 'Nosotros — Nutri Cafeterías',
    description: 'Más de 10 años transformando la alimentación en las mejores escuelas privadas de México.',
    url: 'https://cafeteriasescolares.com.mx/nosotros',
    type: 'website',
  },
}

const valores = [
  { emoji: '🥗', title: 'Nutrición sin sacrificar sabor', desc: 'Creemos que la comida saludable solo funciona si los alumnos la eligen por gusto. Por eso cada platillo pasa el doble filtro: nutriólogo y comensal real.' },
  { emoji: '🤝', title: 'Aliados, no proveedores', desc: 'Operamos como una extensión de la escuela: su reputación es la nuestra. Resolvemos antes de que los problemas lleguen a dirección.' },
  { emoji: '🔬', title: 'Tecnología con propósito', desc: 'La innovación no es un lujo: elimina filas, quita el efectivo del plantel y da a los padres una tranquilidad que ninguna cafetería tradicional ofrece.' },
  { emoji: '📚', title: 'La cafetería también educa', desc: 'Nuestros programas convierten cada receso en una oportunidad de formar hábitos que los alumnos se llevan para toda la vida.' },
]

const certs = [
  { emoji: '🏅', title: 'Distintivo H', desc: 'Reconocimiento a la excelencia en el manejo higiénico de alimentos.' },
  { emoji: '📜', title: 'Licencia sanitaria', desc: 'Permisos de operación en regla ante las autoridades de salud.' },
  { emoji: '🧼', title: 'NOM-251-SSA1', desc: 'Protocolos de higiene documentados y auditables en todo el proceso.' },
  { emoji: '🎓', title: 'Personal capacitado', desc: 'Capacitación documentada en manejo de alimentos para todo el equipo.' },
]

const equipo = [
  { emoji: '👩‍⚕️', title: 'Nutriólogos', desc: 'Diseñan cada ciclo de menús conforme a lineamientos SEP y las necesidades de cada comunidad escolar.' },
  { emoji: '👨‍🍳', title: 'Chefs y cocineros', desc: 'Convierten el balance nutricional en platillos que compiten en antojo — y ganan.' },
  { emoji: '💻', title: 'Equipo de tecnología', desc: 'Operan la plataforma de pagos biométricos, tótems y la app para padres.' },
  { emoji: '🛡️', title: 'Supervisores de calidad', desc: 'Auditan higiene, temperaturas y servicio en cada escuela, todos los días.' },
]

export default function NosotrosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 bg-[#FFFEF7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto pb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6 border border-emerald-200">
              Nosotros
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight">
              Más de una década{' '}
              <span className="gradient-text-primary">alimentando generaciones</span>
            </h1>
            <p className="mt-5 text-stone-500 text-lg leading-relaxed">
              Nutri Cafeterías nació con una convicción: la cafetería puede ser el lugar
              favorito de la escuela sin sacrificar la nutrición. Hoy operamos las cafeterías
              y comedores de más de 10 escuelas privadas de la Ciudad de México, sirviendo
              más de un millón de órdenes con 97% de satisfacción.
            </p>
          </div>
        </div>

        <StatsBar />

        {/* Valores */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-12">
              Lo que nos hace{' '}
              <span className="gradient-text-primary">diferentes</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {valores.map(v => (
                <div key={v.title} className="p-7 rounded-2xl border-2 border-stone-100 bg-white shadow-sm card-lift">
                  <div className="text-4xl mb-3">{v.emoji}</div>
                  <h3 className="font-black text-stone-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificaciones */}
        <div className="py-20 bg-stone-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-4">
              Respaldo <span className="text-emerald-400">verificable</span>
            </h2>
            <p className="text-stone-400 text-center max-w-xl mx-auto mb-12">
              No pedimos que confíes en nuestra palabra: te mostramos los papeles.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {certs.map(c => (
                <div key={c.title} className="p-6 rounded-2xl bg-stone-800/80 border border-stone-700 text-center">
                  <div className="text-4xl mb-3">{c.emoji}</div>
                  <h3 className="font-black text-white text-sm mb-1.5">{c.title}</h3>
                  <p className="text-xs text-stone-400 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Equipo */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-12">
              Un equipo completo{' '}
              <span className="gradient-text-primary">detrás de cada comida</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {equipo.map(e => (
                <div key={e.title} className="p-6 rounded-2xl border-2 border-stone-100 bg-white shadow-sm text-center card-lift">
                  <div className="text-4xl mb-3">{e.emoji}</div>
                  <h3 className="font-black text-stone-900 text-sm mb-2">{e.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Schools />

        {/* CTA */}
        <div className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="p-10 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
              <p className="text-2xl md:text-3xl font-black text-white">
                Conócenos en acción
              </p>
              <p className="text-emerald-100 mt-2 mb-6">
                Visita una de nuestras cafeterías operando — es la mejor carta de presentación.
              </p>
              <a
                href="/#contacto"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:scale-[1.03]"
              >
                Agendar una visita
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
