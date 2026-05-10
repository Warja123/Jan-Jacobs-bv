export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#08121e] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="inline-block mb-5">
              <img
                src="/images/logo.png"
                alt="Jan Jacobs – Schilder & Decoratie"
                className="h-16 object-contain"
                style={{ mixBlendMode: 'screen' }}
              />
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Professionele schilderwerken in Antwerpen en omgeving.
              Meer dan 15 jaar ervaring. Kwaliteit, precisie en betrouwbaarheid.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigatie</h4>
            <ul className="space-y-3">
              {[
                { label: 'Onze diensten', href: '#diensten' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Over ons', href: '#over-ons' },
                { label: 'Reviews', href: '#reviews' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-500 hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:+32485647840" className="text-gray-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  0485 64 78 40
                </a>
              </li>
              <li>
                <a href="mailto:janjacobsschilderwerken@outlook.com" className="text-gray-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-2">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  janjacobsschilderwerken@outlook.com
                </a>
              </li>
              <li className="text-gray-500 text-sm flex items-start gap-2">
                <svg className="w-3.5 h-3.5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Antwerpen & omgeving
              </li>
              <li className="text-gray-500 text-sm flex items-start gap-2">
                <svg className="w-3.5 h-3.5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Ma–Vr: 8:00–18:00 · Za: 10:00–15:00
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="Jan Jacobs – Schilder & Decoratie"
              className="h-8 object-contain opacity-70"
              style={{ mixBlendMode: 'screen' }}
            />
            <div className="text-gray-600 text-xs">
              © {currentYear} Jan Jacobs BV — BTW BE 0759501486 — Alle rechten voorbehouden
            </div>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              Privacybeleid
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">
              Algemene voorwaarden
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
