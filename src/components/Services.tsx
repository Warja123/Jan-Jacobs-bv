const services = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: 'Binnenschilderwerk',
    desc: 'Professionele afwerking van uw muren, plafonds en houtwerk. Wij zorgen voor een vlekkeloze eindresultaat met de verf naar uw keuze.',
    features: ['Muren & plafonds', 'Deuren & raamkozijnen', 'Radiatoren & plinten'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: 'Buitenschilderwerk',
    desc: 'Bescherm uw gevel tegen wind, regen en vorst. Wij renoveren en schilderen uw buitenkant met duurzame, weersbestendige verfproducten.',
    features: ['Gevelbekleding', 'Dakranden & lijstwerk', 'Pergola\'s & tuinhuis'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    title: 'Decoratieve afwerkingen',
    desc: 'Unieke technieken voor een stijlvol interieur. Van betonlook tot Venetiaanse stucco – wij brengen karakter in elke ruimte.',
    features: ['Venetiaanse stucco', 'Betonlook afwerking', 'Structuurverf'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    title: 'Renovatieschilderwerk',
    desc: 'Verhuis of renovatie? Wij brengen uw pand terug in topconditie. Grondige voorbereiding en nette uitvoering zijn onze standaard.',
    features: ['Volledige renovaties', 'Vochtbehandeling', 'Scheurherstellingen'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
        />
      </svg>
    ),
    title: 'Vastgoedoplevering',
    desc: 'Klaar voor verhuur of verkoop? Wij zorgen voor een perfecte afwerking die uw vastgoed in de best mogelijke staat presenteert.',
    features: ['Oplevering verhuur', 'Verkoop styling', 'Snel & efficiënt'],
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Bedrijfsschilderwerk',
    desc: 'Van kantoren tot magazijnen – wij realiseren professionele schilderwerken voor bedrijven in de Antwerpse regio, ook buiten werkuren.',
    features: ['Kantoren & showrooms', 'Industriële ruimtes', 'Buiten werktijd'],
  },
]

export default function Services() {
  return (
    <section id="diensten" className="py-24 px-6 bg-navy-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
            Onze expertise
          </div>
          <h2 className="section-title">Onze diensten</h2>
          <p className="section-subtitle">
            Van interieur tot exterieur – wij leveren vakkundig schilderwerk
            voor particulieren en bedrijven in Antwerpen en omgeving.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div key={i} className="card group hover:-translate-y-1 transition-all duration-300">
              <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 mb-5 group-hover:bg-amber-500/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.desc}</p>
              <ul className="space-y-1.5">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-gray-400 text-sm">
                    <span className="w-1.5 h-1.5 bg-amber-400 rounded-full flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
