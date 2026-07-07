import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/WhatsAppButton'
import { blogPosts, getPost } from '@/data/blog'

export function generateStaticParams() {
  return blogPosts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  const url = `https://cafeteriasescolares.com.mx/blog/${post.slug}`
  return {
    title: `${post.title} | Nutri Cafeterías`,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  }
}

const dateFmt = new Intl.DateTimeFormat('es-MX', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const related = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3)

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'es-MX',
    author: {
      '@type': 'Organization',
      name: 'Nutri Cafeterías',
      url: 'https://cafeteriasescolares.com.mx',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Nutri Cafeterías',
      logo: {
        '@type': 'ImageObject',
        url: 'https://cafeteriasescolares.com.mx/logo.png',
      },
    },
    mainEntityOfPage: `https://cafeteriasescolares.com.mx/blog/${post.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />
      <main className="pt-24 pb-24 bg-[#FFFEF7] min-h-screen">
        <article className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="pt-8 mb-8 text-sm text-stone-400 font-medium">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Inicio</Link>
            {' / '}
            <Link href="/blog" className="hover:text-emerald-600 transition-colors">Blog</Link>
            {' / '}
            <span className="text-stone-600">{post.category}</span>
          </nav>

          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full bg-emerald-500 text-white text-xs font-bold">
              {post.emoji} {post.category}
            </span>
            <span className="text-stone-400 text-xs font-medium">
              {dateFmt.format(new Date(post.date))} · {post.readTime} de lectura
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-stone-900 leading-tight">
            {post.title}
          </h1>
          <p className="mt-5 text-lg text-stone-500 leading-relaxed">{post.description}</p>

          {/* Hero image */}
          <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mt-8 mb-10 shadow-lg border-2 border-stone-100">
            <Image src={post.image} alt={post.title} fill className="object-cover" priority />
          </div>

          {/* Content */}
          <div className="space-y-6">
            {post.content.map((block, i) => {
              switch (block.type) {
                case 'h2':
                  return (
                    <h2 key={i} className="text-2xl md:text-3xl font-black text-stone-900 pt-4">
                      {block.text}
                    </h2>
                  )
                case 'p':
                  return (
                    <p key={i} className="text-stone-600 leading-relaxed text-[1.05rem]">
                      {block.text}
                    </p>
                  )
                case 'ul':
                  return (
                    <ul key={i} className="space-y-3">
                      {block.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-3 text-stone-600 leading-relaxed text-[1.05rem]">
                          <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-black">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )
                case 'quote':
                  return (
                    <blockquote
                      key={i}
                      className="p-6 rounded-2xl bg-emerald-50 border-l-4 border-emerald-500 text-emerald-900 font-semibold leading-relaxed"
                    >
                      {block.text}
                    </blockquote>
                  )
              }
            })}
          </div>

          {/* CTA */}
          <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-center shadow-xl shadow-emerald-200">
            <p className="text-xl md:text-2xl font-black text-white">
              ¿Quieres una cafetería escolar de primer nivel? 🏆
            </p>
            <p className="mt-2 text-emerald-100 text-sm">
              Agenda una reunión gratis y conoce cómo trabajamos en +10 escuelas privadas de México.
            </p>
            <a
              href="/#contacto"
              className="mt-5 inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black hover:bg-emerald-50 transition-all duration-200 shadow-lg hover:scale-[1.03]"
            >
              Contactar a Nutri Cafeterías →
            </a>
          </div>

          {/* Related */}
          <div className="mt-16">
            <h3 className="text-xl font-black text-stone-900 mb-6">Sigue leyendo 📚</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map(r => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group p-5 rounded-2xl border-2 border-stone-100 bg-white shadow-sm card-lift"
                >
                  <span className="text-2xl">{r.emoji}</span>
                  <h4 className="mt-2 font-bold text-sm text-stone-900 leading-snug group-hover:text-emerald-700 transition-colors line-clamp-3">
                    {r.title}
                  </h4>
                  <span className="mt-2 block text-emerald-600 font-bold text-xs">Leer →</span>
                </Link>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
