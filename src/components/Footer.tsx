import { Mail } from 'lucide-react'
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon'
import Image from 'next/image'
import { WaLink } from '@/components/WaLink'

const links = [
  { href: '/cafeterias-escolares', label: 'Cafetería escolar' },
  { href: '/comedores-escolares',  label: 'Comedor escolar' },
  { href: '/cafeterias-escuelas-privadas', label: 'Colegios particulares' },
  { href: '/catering-escolar',     label: 'Eventos escolares' },
  { href: '/menus',       label: 'Menús' },
  { href: '/lineamientos-sep', label: 'Lineamientos SEP' },
  { href: '/nosotros',    label: 'Nosotros' },
  { href: '/diagnostico', label: 'Evalúa tu cafetería' },
  { href: '/blog',        label: 'Blog' },
  { href: '/#faq',        label: 'Preguntas frecuentes' },
  { href: '/#contacto',   label: 'Contacto' },
  { href: '/aviso-de-privacidad', label: 'Aviso de privacidad' },
]

export function Footer() {
  return (
    <footer className="bg-stone-900 text-white">
      {/* Big CTA banner */}
      <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 py-10 px-6 text-center">
        <p className="text-2xl md:text-3xl font-black text-white mb-3">
          ¿Tu escuela merece una cafetería de primer nivel? 🏆
        </p>
        <a
          href="/#contacto"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white text-emerald-700 font-black text-base hover:bg-emerald-50 transition-all duration-200 shadow-xl hover:scale-[1.03]"
        >
          ¡Agenda tu reunión gratis hoy! →
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row gap-10 justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="mb-4">
              <Image
                src="/logo-white-trimmed.png"
                alt="Nutri Cafetería"
                width={160}
                height={70}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              Especializados en cafeterías escolares. Desde 2018 transformando
              la experiencia dentro de las instituciones de México. 🇲🇽
            </p>
            <div className="flex items-center gap-3 mt-5">
              {/* Instagram/Facebook se quitaron: apuntaban a «#». Se agregan cuando existan los perfiles (y van al sameAs del JSON-LD). */}
              <WaLink cta="whatsapp_footer" className="p-2.5 rounded-xl bg-stone-800 hover:bg-emerald-600 text-stone-400 hover:text-white transition-all" aria-label="WhatsApp">
                <WhatsAppIcon className="w-4 h-4" />
              </WaLink>
              <a href="mailto:a.fernandez@nutricafeteria.com.mx" className="p-2.5 rounded-xl bg-stone-800 hover:bg-blue-600 text-stone-400 hover:text-white transition-all" aria-label="Email">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-black text-white text-sm mb-4 uppercase tracking-wider">Navegación</h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="text-stone-400 hover:text-emerald-400 text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick stats */}
          <div className="flex flex-col gap-3">
            <h4 className="font-black text-white text-sm uppercase tracking-wider">En números</h4>
            {[
              { emoji: '📅', text: 'Desde 2018' },
              { emoji: '🍽️', text: '+1,000,000 órdenes servidas' },
              { emoji: '⭐', text: '4.9 / 5 de satisfacción' },
              { emoji: '🧾', text: 'ERP y punto de venta propios' },
            ].map(s => (
              <div key={s.text} className="flex items-center gap-2 text-sm text-stone-400">
                <span>{s.emoji}</span> {s.text}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-stone-500 text-xs" suppressHydrationWarning>
            © {new Date().getFullYear()} Nutri Cafeterías (Nutricafeterías, S.A.) · Ciudad de México · WhatsApp +52 221 925 1954 · a.fernandez@nutricafeteria.com.mx
          </p>
          <p className="text-stone-600 text-xs">
            Hecho con ❤️ para las escuelas de México
          </p>
        </div>
      </div>
    </footer>
  )
}
