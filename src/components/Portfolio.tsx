const projects = [
  {
    image: '/images/project1.png',
    title: 'Decoratieve living met bloemmotief',
    category: 'Binnenschilderwerk',
    tags: ['Decoratief', 'Living'],
  },
  {
    image: '/images/project2.png',
    title: 'Gevelrenovatie woning in wit',
    category: 'Buitenschilderwerk',
    tags: ['Gevel', 'Renovatie'],
  },
  {
    image: '/images/project3.png',
    title: 'Kozijnen & deuren gespoten grijs',
    category: 'Schrijnwerk',
    tags: ['Schrijnwerk', 'Buiten'],
  },
  {
    image: '/images/project4.png',
    title: 'Gevel wit geschilderd met zwarte accenten',
    category: 'Buitenschilderwerk',
    tags: ['Gevel', 'Modern'],
  },
  {
    image: '/images/project5.png',
    title: 'Badkamer – petrolblauw accent',
    category: 'Binnenschilderwerk',
    tags: ['Badkamer', 'Kleuraccent'],
  },
  {
    image: '/images/project6.png',
    title: 'Wand ecru – strak en minimalistisch',
    category: 'Binnenschilderwerk',
    tags: ['Wand', 'Minimalistisch'],
  },
  {
    image: '/images/project7.png',
    title: 'Kinderkamer blauw met witte strepen',
    category: 'Binnenschilderwerk',
    tags: ['Kinderkamer', 'Decoratief'],
  },
  {
    image: '/images/project8.png',
    title: 'Haardwand in olijfgroen',
    category: 'Binnenschilderwerk',
    tags: ['Kleuraccent', 'Living'],
  },
  {
    image: '/images/project9.png',
    title: 'Gang & traphal volledig opgefrist',
    category: 'Renovatieschilderwerk',
    tags: ['Gang', 'Renovatie'],
  },
  {
    image: '/images/project10.png',
    title: 'Toilet in mat zwart',
    category: 'Binnenschilderwerk',
    tags: ['Toilet', 'Donkere tint'],
  },
  {
    image: '/images/project11.png',
    title: 'Badkamer – grijsblauwe wand',
    category: 'Binnenschilderwerk',
    tags: ['Badkamer', 'Kleuraccent'],
  },
  {
    image: '/images/project12.png',
    title: 'Kleuraccent muur in bordeauxrood',
    category: 'Binnenschilderwerk',
    tags: ['Kleuraccent', 'Living'],
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
              className="rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all duration-300 group cursor-pointer"
            >
              <div className="h-56 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-black/40 backdrop-blur-sm text-white/90 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="bg-navy-800/60 p-5">
                <div className="text-amber-400 text-xs font-medium uppercase tracking-wider mb-1">
                  {project.category}
                </div>
                <h3 className="text-white font-semibold group-hover:text-amber-300 transition-colors text-sm">
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
