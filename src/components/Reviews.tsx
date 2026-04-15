const reviews = [
  {
    name: 'Sofie Maes',
    location: 'Berchem, Antwerpen',
    rating: 5,
    text: 'Perfect afgewerkt tot in het kleinste detail. De mannen van Jan Jacobs zijn echte vakmensen. Ze zijn op tijd gekomen, netjes te werk gegaan en het resultaat overtrof onze verwachtingen!',
    project: 'Volledige binnenrenovatie',
  },
  {
    name: 'Thomas Verhaegen',
    location: 'Zurenborg, Antwerpen',
    rating: 5,
    text: 'Zeer professioneel team en alles netjes achtergelaten. Onze gevelschildering ziet er prachtig uit. Goede communicatie voor en tijdens het werk. Zeker voor herhaling vatbaar!',
    project: 'Gevelrenovatie',
  },
  {
    name: 'An Claes',
    location: 'Deurne, Antwerpen',
    rating: 5,
    text: 'Vriendelijke vakmannen met oog voor detail. Ze hebben onze meubels perfect beschermd en alles grondig afgedekt. Het resultaat is subliem – alsof onze woning nieuw is!',
    project: 'Binnenschilderwerk',
  },
  {
    name: 'Patrick Nijs',
    location: 'Hoboken, Antwerpen',
    rating: 5,
    text: 'Betrouwbaar, correct en prachtig resultaat. Offerte was duidelijk en er kwamen geen verrassingen. Ze houden woord, dat is zeldzaam tegenwoordig. Hartelijk aanbevolen!',
    project: 'Appartement schilderen',
  },
  {
    name: 'Laura Willems',
    location: 'Wilrijk, Antwerpen',
    rating: 5,
    text: 'Topkwaliteit schilderwerken in Antwerpen. De Venetiaanse stucco in onze living is adembenemend mooi geworden. Vakwerk van het hoogste niveau. Bedankt Jan Jacobs BV!',
    project: 'Decoratieve afwerking',
  },
  {
    name: 'Dirk Van Acker',
    location: 'Merksem, Antwerpen',
    rating: 5,
    text: 'Snelle opvolging van mijn aanvraag, correcte prijs en perfect uitvoeringswerk. Het team is efficiënt en laat geen sporen achter. Mijn kantoor is er als nieuw uit!',
    project: 'Bedrijfsschilderwerk',
  },
]

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 bg-[#0f1e2f]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium px-4 py-2 rounded-full mb-4">
            Klantenervaringen
          </div>
          <h2 className="section-title">Wat klanten zeggen</h2>
          <p className="section-subtitle">
            Meer dan 500 tevreden klanten in Antwerpen en omgeving.
            Lees wat ze over ons zeggen.
          </p>

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <span className="text-white font-bold text-xl">5.0</span>
            <span className="text-gray-400 text-sm">· 127 beoordelingen</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div key={i} className="card flex flex-col">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, j) => <StarIcon key={j} />)}
              </div>

              {/* Review text */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1 mb-5">
                "{review.text}"
              </p>

              {/* Divider */}
              <div className="border-t border-white/5 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold text-sm">{review.name}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{review.location}</div>
                  </div>
                  <span className="text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full">
                    {review.project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews badge */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-navy-800/60 border border-white/10 rounded-2xl px-6 py-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="text-left">
              <div className="text-white text-sm font-semibold">Google Reviews</div>
              <div className="text-gray-400 text-xs">Gemiddeld 5.0 ★ · Geverifieerde beoordelingen</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
