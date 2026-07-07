import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Programs } from '@/components/sections/Programs'

export const metadata: Metadata = {
  title: 'Programas Educativos de Alimentación | NutriMood, Cocina Aventura y Más — Nutri Cafeterías',
  description:
    'Programas exclusivos que convierten la cafetería escolar en experiencia educativa: NutriMood (comida y emociones), Cocina Aventura, Sabores del Mundo, Tú Eliges, NutriEnergía y Planeta Sano. Únicos en México.',
  keywords: [
    'programas educativos alimentación escolar',
    'programa comida y emociones',
    'educación nutricional escuelas',
    'NutriMood',
    'programas cafetería escolar',
  ],
  alternates: { canonical: 'https://cafeteriasescolares.com.mx/programas' },
  openGraph: {
    title: 'Programas Educativos de Nutri Cafeterías — NutriMood y más',
    description: 'La cafetería como el aula más divertida de la escuela: programas de nivel internacional, únicos en México.',
    url: 'https://cafeteriasescolares.com.mx/programas',
    type: 'website',
  },
}

const impacto = [
  { emoji: '🧠', title: 'Para los alumnos', desc: 'Hábitos de alimentación que se llevan para toda la vida, más energía en clase y una relación positiva con la comida saludable.' },
  { emoji: '🏫', title: 'Para la escuela', desc: 'Un diferenciador tangible en admisiones: la cafetería deja de ser un servicio y se vuelve parte de la propuesta educativa.' },
  { emoji: '👨‍👩‍👧', title: 'Para los padres', desc: 'La tranquilidad de que la escuela cuida a sus hijos integralmente — y recetas para continuar los hábitos en casa.' },
]

export default function ProgramasPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 bg-[#FFFEF7]">
        {/* Hero */}
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center pb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-100 text-rose-700 font-bold text-sm mb-6 border border-rose-200">
            Programas exclusivos
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight">
            La cafetería como{' '}
            <span className="gradient-text-orange">el aula más divertida</span>
          </h1>
          <p className="mt-5 text-stone-500 text-lg leading-relaxed max-w-2xl mx-auto">
            Adaptamos los programas de los operadores líderes del mundo al contexto de las
            escuelas privadas mexicanas. Ningún otro operador en México ofrece algo así.
          </p>
        </div>

        <Programs />

        {/* Impacto */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 text-center mb-12">
              Un programa,{' '}
              <span className="gradient-text-primary">tres ganadores</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {impacto.map(i => (
                <div key={i.title} className="p-7 rounded-2xl border-2 border-stone-100 bg-white shadow-sm text-center card-lift">
                  <div className="text-4xl mb-3">{i.emoji}</div>
                  <h3 className="font-black text-stone-900 mb-2">{i.title}</h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{i.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-stone-500 max-w-2xl mx-auto">
              Los programas se incluyen en la operación integral de tu cafetería — sin costo
              adicional para la escuela ni para los padres.{' '}
              <Link href="/cafeterias-escolares" className="text-emerald-600 font-bold hover:underline">
                Conoce la operación integral →
              </Link>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="pb-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <div className="p-10 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
              <p className="text-2xl md:text-3xl font-black text-white">
                Lleva NutriMood a tu escuela
              </p>
              <p className="text-emerald-100 mt-2 mb-6">
                Te mostramos cómo funciona en las escuelas donde ya opera.
              </p>
              <a
                href="/#contacto"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:scale-[1.03]"
              >
                Agendar una demo
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
