import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WaLink } from '@/components/WaLink'
import { GOOGLE_RESENA_URL } from '@/data/resena'

export const metadata: Metadata = {
  title: 'Cuéntanos cómo te fue | Nutri Cafeterías',
  description: 'Deja tu reseña de Nutri Cafeterías en Google.',
  robots: { index: false, follow: false },
}

// Se evalúa en cada visita para que el cambio de destino aplique sin caché.
export const dynamic = 'force-dynamic'

export default function ResenaPage() {
  if (GOOGLE_RESENA_URL) redirect(GOOGLE_RESENA_URL)

  return (
    <>
      <Navbar />
      <main className="pt-28 pb-24 bg-[#F7F3EA] min-h-screen">
        <section className="max-w-xl mx-auto px-6 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
            ¡Gracias por escanear!
          </h1>
          <p className="text-lg text-stone-700 leading-relaxed">
            Nuestra ficha de Google se está activando en estos días y muy pronto podrás dejar tu
            reseña desde este mismo código. Mientras tanto, nos encantaría saber cómo te fue.
          </p>
          <WaLink
            mensaje="Hola, quiero contarles cómo me fue en Nutri Cafeterías Ciudad UP"
            origen="resena-qr"
            cta="resena_whatsapp"
            className="inline-block px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold transition-colors"
          >
            Cuéntanos por WhatsApp
          </WaLink>
        </section>
      </main>
      <Footer />
    </>
  )
}
