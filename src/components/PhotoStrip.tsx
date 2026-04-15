export default function PhotoStrip() {
  return (
    <section className="py-16 px-6 bg-[#0f1e2f]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-5">
          {[
            {
              src: '/images/project1.png',
              title: 'Decoratieve wand met bloemenmotief',
              sub: 'Living – Antwerpen',
            },
            {
              src: '/images/project2.png',
              title: 'Gevelrenovatie in wit',
              sub: 'Woonhuis – omgeving Antwerpen',
            },
            {
              src: '/images/project3.png',
              title: 'Kozijnen & deuren gespoten',
              sub: 'Schrijnwerk – omgeving Antwerpen',
            },
          ].map((photo) => (
            <div key={photo.src} className="group relative rounded-2xl overflow-hidden border border-white/5 hover:border-amber-500/30 transition-all duration-300">
              <img
                src={photo.src}
                alt={photo.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-white font-semibold text-sm">{photo.title}</div>
                <div className="text-amber-400 text-xs mt-0.5">{photo.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust bar */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 py-6 border-t border-white/5">
          {[
            { icon: '⭐', text: '5.0 op Google · 30 beoordelingen' },
            { icon: '🛡️', text: '2 jaar garantie op elk project' },
            { icon: '📋', text: 'Gratis offerte & plaatsbezoek' },
            { icon: '✅', text: 'Erkend vakman · BTW-plichtig' },
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-2 text-gray-400 text-sm">
              <span>{item.icon}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
