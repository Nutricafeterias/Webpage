import type { Metadata } from 'next'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { Diagnostic } from '@/components/sections/Diagnostic'

export const metadata: Metadata = {
  title: 'Evalúa la Cafetería de tu Escuela Gratis | Diagnóstico en 2 Minutos — Nutri Cafeterías',
  description:
    'Diagnóstico gratuito e instantáneo para directores y administradores escolares: evalúa la cafetería de tu escuela en 7 preguntas y compárala contra el estándar de las mejores escuelas privadas de México.',
  keywords: [
    'evaluar cafetería escolar',
    'diagnóstico cafetería escolar',
    'evaluación comedor escolar',
    'auditoría cafetería escuela',
    'mejorar cafetería escolar',
  ],
  alternates: { canonical: 'https://cafeteriasescolares.com.mx/diagnostico' },
  openGraph: {
    title: 'Evalúa la cafetería de tu escuela gratis — en 2 minutos',
    description:
      'Responde 7 preguntas y recibe un diagnóstico instantáneo comparado contra las mejores escuelas privadas de México.',
    url: 'https://cafeteriasescolares.com.mx/diagnostico',
    type: 'website',
  },
}

export default function DiagnosticoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 bg-gradient-to-b from-emerald-50/40 to-white min-h-screen">
        <Diagnostic />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
