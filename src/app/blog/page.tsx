import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { blogPosts } from '@/data/blog'

export const metadata: Metadata = {
  title: 'Blog de Cafeterías Escolares | Nutri Cafeterías',
  description:
    'Guías para directores de escuela, nutrición infantil, tecnología y tendencias en cafeterías y comedores escolares en México. Por el equipo de Nutri Cafeterías.',
  alternates: { canonical: 'https://cafeteriasescolares.com.mx/blog' },
  openGraph: {
    title: 'Blog de Cafeterías Escolares | Nutri Cafeterías',
    description: 'Guías, nutrición y tendencias en cafeterías escolares en México.',
    url: 'https://cafeteriasescolares.com.mx/blog',
    type: 'website',
  },
}

const dateFmt = new Intl.DateTimeFormat('es-MX', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))
  const [featured, ...rest] = posts

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-24 bg-[#F7F3EA] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-14 pt-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-bold text-sm mb-6 border border-emerald-200">
              📝 Blog de Nutri Cafeterías
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-stone-900 leading-tight">
              Todo sobre{' '}
              <span className="gradient-text-primary">cafeterías escolares</span>
            </h1>
            <p className="mt-4 text-stone-500 max-w-2xl mx-auto text-lg">
              Guías para directores, nutrición infantil, tecnología y tendencias.
              Escrito por el equipo que opera las cafeterías de las mejores escuelas de México. 🇲🇽
            </p>
          </div>

          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group block rounded-3xl overflow-hidden border-2 border-stone-100 shadow-lg card-lift mb-10 bg-white"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto md:min-h-[320px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold">
                    {featured.emoji} {featured.category}
                  </span>
                  <span className="text-stone-400 text-xs font-medium">
                    {dateFmt.format(new Date(featured.date))} · {featured.readTime} de lectura
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-stone-900 leading-tight group-hover:text-emerald-700 transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-4 text-stone-500 leading-relaxed">{featured.description}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-emerald-600 font-bold text-sm">
                  Leer artículo →
                </span>
              </div>
            </div>
          </Link>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl overflow-hidden border-2 border-stone-100 bg-white shadow-md card-lift flex flex-col"
              >
                <div className="relative h-44">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur text-stone-800 text-xs font-bold shadow-sm">
                    {post.emoji} {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-stone-400 text-xs font-medium mb-2">
                    {dateFmt.format(new Date(post.date))} · {post.readTime}
                  </span>
                  <h3 className="font-black text-stone-900 leading-snug group-hover:text-emerald-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-stone-500 text-sm leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <span className="mt-4 text-emerald-600 font-bold text-sm">Leer más →</span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
            <p className="text-2xl font-black text-white">
              ¿Quieres esta calidad en la cafetería de tu escuela? 🚀
            </p>
            <a
              href="/#contacto"
              className="mt-5 inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:scale-[1.03]"
            >
              Agenda una reunión gratis →
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
