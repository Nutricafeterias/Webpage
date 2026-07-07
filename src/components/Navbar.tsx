'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const links = [
  { href: '/#servicios',  label: '🌟 Servicios' },
  { href: '/#programas',  label: '🎓 Programas' },
  { href: '/#tecnologia', label: '📱 Tecnología' },
  { href: '/#padres',     label: '👨‍👩‍👧 Padres' },
  { href: '/#escuelas',   label: '🏫 Escuelas' },
  { href: '/blog',        label: '📝 Blog' },
  { href: '/#faq',        label: '❓ FAQ' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-md border-b-2 border-emerald-100 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <Image
            src="/logo-trimmed.png"
            alt="Nutri Cafetería"
            width={180}
            height={79}
            className="h-10 w-auto object-contain"
            priority
          />
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-emerald-50 hover:text-emerald-700 ${
                scrolled ? 'text-stone-600' : 'text-stone-700'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/#contacto"
            className="group inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-bold transition-all duration-200 shadow-md shadow-emerald-200 hover:shadow-emerald-300 hover:scale-[1.03]"
          >
            ¡Agenda una reunión!
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 rounded-xl text-stone-600 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
          aria-label="Abrir menú"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t-2 border-emerald-100 bg-white/95 backdrop-blur-md overflow-hidden shadow-lg"
          >
            <div className="px-6 py-4 space-y-1">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center py-3 text-stone-700 hover:text-emerald-600 text-sm font-medium transition-colors border-b border-stone-100"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="/#contacto"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center py-3.5 rounded-xl bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-200"
                >
                  ¡Agenda una reunión gratis!
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
