type Project = {
  title: string
  category: string
  tags: string[]
  image?: string
  color?: string
  accent?: string
}

const projects: Project[] = [
  {
    title: 'Decoratieve living – Antwerpen',
    category: 'Binnenschilderwerk',
    image: '/images/project1.png',
    tags: ['Binnenschilderwerk', 'Decoratief'],
  },
  {
    title: 'Gevelrenovatie woning',
    category: 'Buitenschilderwerk',
    image: '/images/project2.png',
    tags: ['Gevel', 'Renovatie'],
  },
  {
    title: 'Kozijnen & deuren – schrijnwerk',
    category: 'Houtwerk & schrijnwerk',
    image: '/images/project3.png',
    tags: ['Schrijnwerk', 'Buiten'],
  },
  {
    title: 'Villa renovatie – Berchem',
    category: 'Binnen & buiten',
    color: 'from-slate-700 to-slate-900',
    accent: '#94a3b8',
    tags: ['Binnenschilderwerk', 'Gevel'],
  },
  {
    title: 'Kantoorgebouw – Antwerpen',
    category: 'Bedrijfsschilderwerk',
    color: 'from-blue-900 to-navy-900',
    accent: '#60a5fa',
    tags: ['Bedrijf', 'Groot project'],
  },
  {
    title: 'Appartementencomplex – Linkeroever',
    category: 'Buitenschilderwerk',
    color: 'from-zinc-700 to-zinc-900',
    accent: '#a3a3a3',
    tags: ['Gevel', 'Renovatie'],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-[#0f1e2f]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
            Ons werk
          </div>
          <h2 className="section-title">Portfolio</h2>
          <p className="section-subtitle">
            Een greep uit onze gerealiseerde projecten in Antwerpen en omgeving.
            Elk project afgewerkt met de uiterste zorg en vakmanschap.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div
              key={i}
              className="portfolio-item rounded-2xl overflow-hidden border border-white/5 hover:border-white/15 transition-all duration-300 group cursor-pointer"
            >
              {/* Image or gradient placeholder */}
              <div className="h-56 relative overflow-hidden">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient overlay + tags */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-xs bg-black/40 backdrop-blur-sm text-white/90 px-2.5 py-1 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.color} relative flex items-end p-5`}>
                    <div className="absolute inset-0 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 300 220" preserveAspectRatio="none">
                        <path
                          d={`M0,${80 + i * 10} Q${75 + i * 15},${20 + i * 8} 150,${60 + i * 12} T300,${40 + i * 10}`}
                          fill="none"
                          stroke={project.accent}
                          strokeWidth="40"
                          strokeLinecap="round"
                          opacity="0.4"
                        />
                        <path
                          d={`M0,${150 + i * 5} Q${100 + i * 10},${110 + i * 8} 200,${140 + i * 6} T300,${130}`}
                          fill="none"
                          stroke={project.accent}
                          strokeWidth="25"
                          strokeLinecap="round"
                          opacity="0.25"
                        />
                      </svg>
                    </div>
                    <div className="absolute top-4 right-4 opacity-30">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                        <rect x="2" y="3" width="14" height="7" rx="2"/>
                        <path d="M15 6.5h2a2 2 0 010 4H15"/>
                        <path d="M12 10v8"/>
                        <path d="M10 18h4"/>
                      </svg>
                    </div>
                    <div className="relative flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-black/30 backdrop-blur-sm text-white/80 px-2.5 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="bg-navy-800/60 p-5">
                <div className="text-amber-400 text-xs font-medium uppercase tracking-wider mb-1">
                  {project.category}
                </div>
                <h3 className="text-white font-semibold group-hover:text-amber-300 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            Bespreek uw project
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
