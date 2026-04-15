import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    dienst: '',
    bericht: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 px-6 bg-navy-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: info */}
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium px-4 py-2 rounded-full mb-6">
              Contacteer ons
            </div>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Klaar voor een{' '}
              <span className="text-amber-400">gratis offerte</span>?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-10">
              Neem contact met ons op voor een vrijblijvende offerte.
              Wij komen graag bij u langs voor een plaatsbezoek en stellen
              een gedetailleerde offerte op maat op.
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  ),
                  label: 'Telefoon',
                  value: '+32 03 000 00 00',
                  href: 'tel:+3203000000',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  ),
                  label: 'E-mail',
                  value: 'info@janjacobsbv.be',
                  href: 'mailto:info@janjacobsbv.be',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: 'Werkgebied',
                  value: 'Antwerpen & omgeving',
                  href: null,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ),
                  label: 'Openingstijden',
                  value: 'Ma–Vr: 8:00–18:00',
                  href: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500/10 border border-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-white font-medium hover:text-amber-400 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-white font-medium">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency CTA */}
            <div className="mt-10 p-5 bg-amber-500/10 border border-amber-500/20 rounded-2xl">
              <div className="text-amber-400 font-semibold mb-1">Dringende klus?</div>
              <p className="text-gray-400 text-sm mb-4">Bel ons direct voor snelle opvolging.</p>
              <a
                href="tel:+3203000000"
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-950 font-semibold px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Bel nu: +32 03 000 00 00
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-navy-800/50 border border-white/5 rounded-3xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Aanvraag ontvangen!</h3>
                <p className="text-gray-400">
                  Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op,
                  gewoonlijk binnen de 24 uur.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Naam *</label>
                  <input
                    type="text"
                    name="naam"
                    required
                    value={formData.naam}
                    onChange={handleChange}
                    placeholder="Uw volledige naam"
                    className="form-input"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">E-mail *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="uw@email.be"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Telefoon</label>
                    <input
                      type="tel"
                      name="telefoon"
                      value={formData.telefoon}
                      onChange={handleChange}
                      placeholder="+32 04 ..."
                      className="form-input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Gewenste dienst</label>
                  <select
                    name="dienst"
                    value={formData.dienst}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="" className="bg-navy-900">Kies een dienst...</option>
                    <option value="binnen" className="bg-navy-900">Binnenschilderwerk</option>
                    <option value="buiten" className="bg-navy-900">Buitenschilderwerk</option>
                    <option value="decoratief" className="bg-navy-900">Decoratieve afwerking</option>
                    <option value="renovatie" className="bg-navy-900">Renovatieschilderwerk</option>
                    <option value="vastgoed" className="bg-navy-900">Vastgoedoplevering</option>
                    <option value="bedrijf" className="bg-navy-900">Bedrijfsschilderwerk</option>
                    <option value="anders" className="bg-navy-900">Anders / meerdere diensten</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Uw bericht *</label>
                  <textarea
                    name="bericht"
                    required
                    value={formData.bericht}
                    onChange={handleChange}
                    placeholder="Beschrijf uw project: welke ruimtes, oppervlakte, gewenste kleur, timing..."
                    rows={5}
                    className="form-input resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-center text-base"
                >
                  Verstuur aanvraag
                </button>

                <p className="text-gray-600 text-xs text-center">
                  Wij antwoorden gewoonlijk binnen 24 uur. Geen spam, nooit.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
