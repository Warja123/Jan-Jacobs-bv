export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient noise-overlay overflow-hidden">
      {/* Decorative paint brush strokes */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-navy-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Paint roller icon decoration */}
      <div className="absolute top-1/2 right-8 md:right-24 -translate-y-1/2 opacity-5 pointer-events-none select-none hidden md:block">
        <svg width="320" height="400" viewBox="0 0 200 250" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="140" height="60" rx="12" fill="white" stroke="white" strokeWidth="2"/>
          <rect x="30" y="30" width="120" height="40" rx="8" fill="white"/>
          <rect x="140" y="40" width="30" height="20" rx="4" fill="white"/>
          <line x1="155" y1="60" x2="155" y2="130" stroke="white" strokeWidth="8" strokeLinecap="round"/>
          <rect x="130" y="130" width="50" height="80" rx="6" fill="white"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-medium px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            15+ jaar ervaring in Antwerpen
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
            Vakkundig{' '}
            <span className="text-amber-400">schilderwerk</span>
            {' '}in Antwerpen
          </h1>

          <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
            Jan Jacobs BV staat voor kwaliteit, precisie en betrouwbaarheid.
            Van binnenschilderwerk tot gevelrenovatie – wij leveren altijd
            een uitmuntende afwerking.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-16">
            <a href="#contact" className="btn-primary text-base">
              Gratis offerte aanvragen
            </a>
            <a href="tel:+32485647840" className="btn-secondary text-base flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              Bel ons nu
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-lg">
            {[
              { value: '15+', label: 'Jaar ervaring' },
              { value: '5.0★', label: '30 Google reviews' },
              { value: '100%', label: 'Tevredenheid' },
            ].map((stat) => (
              <div key={stat.label} className="stat-item">
                <div className="text-3xl font-bold text-amber-400">{stat.value}</div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
