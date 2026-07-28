import type { Metadata } from 'next'
import Link from 'next/link'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { MenuExplorer } from '@/components/sections/MenuExplorer'

export const metadata: Metadata = {
  title: 'Menús Escolares Saludables | Ejemplo de Menú Semanal — Nutri Cafeterías',
  description:
    'Explora un menú de muestra de nuestras cafeterías escolares: platillos diseñados por nutriólogos con información nutricional, filtros de alérgenos y opciones vegetarianas, sin gluten y sin lácteos.',
  keywords: [
    'menú escolar saludable',
    'menú cafetería escolar',
    'menú semanal escuela',
    'menús escolares nutritivos México',
    'menú comedor escolar SEP',
  ],
  alternates: { canonical: 'https://cafeteriasescolares.com.mx/menus' },
  openGraph: {
    title: 'Menús Escolares de Nutriólogos — Nutri Cafeterías',
    description: 'Menú de muestra con información nutricional y filtros de alérgenos. Transparencia total.',
    url: 'https://cafeteriasescolares.com.mx/menus',
    type: 'website',
  },
}

export default function MenusPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 bg-[#F7F3EA] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-bold text-sm mb-6 border border-amber-200">
              🍽️ Nuestros menús
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-stone-900 leading-tight">
              Comida que puedes ver{' '}
              <span className="gradient-text-orange">antes de decidir</span>
            </h1>
            <p className="mt-5 text-stone-500 text-lg leading-relaxed">
              Mientras otros operadores esconden sus menús, nosotros los presumimos.
              Explora este menú de muestra con información nutricional real, diseñado
              por nuestro equipo de nutriólogos conforme a los lineamientos de la SEP.
            </p>
          </div>

          <MenuExplorer />

          {/* Transparency note */}
          <div className="mt-14 max-w-3xl mx-auto p-6 rounded-2xl bg-emerald-50 border-2 border-emerald-200 text-center">
            <p className="text-sm text-emerald-900 leading-relaxed">
              <strong>Este es un menú de muestra.</strong> Cada escuela recibe un ciclo de
              menús personalizado de 4 semanas, adaptado a su comunidad, con rotación de
              temporada y manejo documentado de alérgenos. Los padres lo consultan desde
              la app con la información nutricional completa.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 p-10 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
            <p className="text-2xl md:text-3xl font-black text-white">
              ¿Quieres el menú ideal para tu escuela?
            </p>
            <p className="text-emerald-100 mt-2 mb-6">
              Nuestros nutriólogos diseñan una propuesta a la medida de tu comunidad — sin costo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:scale-[1.03]"
              >
                Solicitar propuesta de menú →
              </a>
              <Link
                href="/diagnostico"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-emerald-700/60 text-white font-bold hover:bg-emerald-700 transition-colors"
              >
                Evalúa tu cafetería actual
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
