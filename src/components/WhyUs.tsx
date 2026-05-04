const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: 'Gecertificeerd vakmanschap',
    desc: 'Onze schilders zijn gecertificeerde vakmensen met jarenlange opleiding en praktijkervaring in alle soorten schildertechnieken.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'Stipt & betrouwbaar',
    desc: 'Wij houden ons aan de afgesproken planning en budget. U wordt steeds op de hoogte gehouden van de voortgang van uw project.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
    title: 'Respect voor uw woning',
    desc: 'Wij beschermen uw meubels en vloeren zorgvuldig. Na elk project laten we de ruimte netjes en proper achter – alsof we er nooit geweest zijn.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
        />
      </svg>
    ),
    title: 'Milieuvriendelijke materialen',
    desc: 'We werken uitsluitend met A-merk verfproducten en milieuvriendelijke alternatieven. Goed voor u, uw gezin én het milieu.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: 'Transparante prijzen',
    desc: 'Geen verrassingen op de eindrekening. Onze offertes zijn gedetailleerd en volledig transparant. Wat we beloven, dat leveren we.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
    title: '5-sterren klanttevredenheid',
    desc: 'Onze klanten beoordelen ons consistent met 5 sterren. Klanttevredenheid staat centraal in alles wat we doen.',
  },
]

export default function WhyUs() {
  return (
    <section id="over-ons" className="py-24 px-6 bg-navy-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              Waarom Jan Jacobs BV?
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Meer dan 15 jaar{' '}
              <span className="text-amber-400">vertrouwen</span>{' '}
              in Antwerpen
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Jan Jacobs BV is al meer dan 15 jaar het adres voor kwaliteitsvol schilderwerk
              in Antwerpen en omgeving. We werken voor particulieren, bedrijven en
              vastgoedspelers – altijd met dezelfde inzet voor perfectie.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Ons team van gecertificeerde vakmensen staat garant voor een nauwkeurige voorbereiding,
              strakke uitvoering en nette afwerking. Van de eerste offerte tot de laatste
              verfstreek – u kunt op ons rekenen.
            </p>

            {/* Highlight boxes */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Gratis plaatsbezoek', icon: '📍' },
                { label: 'Gratis offerte', icon: '📋' },
                { label: 'Eigen vaste ploeg', icon: '👷' },
                { label: 'Nette afwerking', icon: '✨' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 bg-navy-800/50 border border-white/5 rounded-xl p-4">
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-sm text-gray-300 font-medium">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="bg-navy-800/40 border border-white/5 hover:border-amber-500/20 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-11 h-11 bg-amber-500/10 rounded-xl flex items-center justify-center text-amber-400 mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{reason.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
