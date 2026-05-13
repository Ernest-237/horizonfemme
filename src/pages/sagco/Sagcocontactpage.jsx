import { Link } from 'react-router-dom'
import { useState } from 'react'


const HERO_IMAGE =
  'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202026-01-26%20at%2003.17.50.jpeg'

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.686657688646!2d11.516667!3d3.866667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309a7977%3A0x7f54d93f7f6c9b0!2sYaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2sfr!4v1625000000000!5m2!1sfr!2sfr'

export default function SagcoContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit() {
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }
    setStatus('sending')
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 900)
  }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1B3F8C]">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="" className="h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3F8C] via-[#1B3F8C]/85 to-[#1B3F8C]/40" />
        </div>
      

        <div className="relative mx-auto max-w-[1440px] px-4 py-20 md:px-6 md:py-28 xl:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-200">
            <Link to="/sagco" className="hover:text-[#F4952F]">Accueil</Link>
            <span>/</span>
            <span className="text-[#F4952F]">Contact</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Contactez-<span className="text-[#F4952F]">nous</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-100">
            Une question, un partenariat, un retour ? Nous sommes à votre
            écoute.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="grid gap-10 lg:grid-cols-[3fr,2fr]">
            {/* FORM */}
            <div className="rounded-3xl border-2 border-slate-100 bg-white p-8 shadow-sm md:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
                Envoyez-nous un message
              </span>
              <h2 className="mt-3 text-2xl font-black text-[#1B3F8C] md:text-3xl">
                Parlons ensemble
              </h2>
              <div className="mt-3 h-1 w-16 rounded-full bg-[#F4952F]" />

              <div className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#1B3F8C]">
                      Nom complet *
                    </label>
                    <input
                      id="name" name="name" type="text" value={form.name} onChange={handleChange}
                      className="mt-2 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-[#F4952F] focus:outline-none focus:ring-2 focus:ring-[#F4952F]/20"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#1B3F8C]">
                      Email *
                    </label>
                    <input
                      id="email" name="email" type="email" value={form.email} onChange={handleChange}
                      className="mt-2 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-[#F4952F] focus:outline-none focus:ring-2 focus:ring-[#F4952F]/20"
                      placeholder="vous@exemple.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#1B3F8C]">
                    Sujet
                  </label>
                  <input
                    id="subject" name="subject" type="text" value={form.subject} onChange={handleChange}
                    className="mt-2 w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-[#F4952F] focus:outline-none focus:ring-2 focus:ring-[#F4952F]/20"
                    placeholder="Sujet de votre message"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#1B3F8C]">
                    Message *
                  </label>
                  <textarea
                    id="message" name="message" rows={6} value={form.message} onChange={handleChange}
                    className="mt-2 w-full resize-none rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-[#F4952F] focus:outline-none focus:ring-2 focus:ring-[#F4952F]/20"
                    placeholder="Votre message..."
                  />
                </div>

                {status === 'sent' ? (
                  <div className="rounded-xl border-2 border-green-200 bg-green-50 px-4 py-3 text-sm font-bold text-green-700">
                    ✓ Message envoyé. Nous reviendrons vers vous rapidement.
                  </div>
                ) : null}
                {status === 'error' ? (
                  <div className="rounded-xl border-2 border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
                    Merci de remplir tous les champs obligatoires.
                  </div>
                ) : null}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 rounded-full bg-[#F4952F] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#e08522] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? 'Envoi…' : 'Envoyer le message →'}
                </button>
              </div>
            </div>

            {/* INFO */}
            <div className="space-y-5">
              {[
                { icon: '📍', title: 'Nos Bureaux', body: <>Yaoundé, Cameroun<br />Quartier Mini-ferme Melen<br />Derrière Immeuble MTN</> },
                { icon: '📧', title: 'Email', body: <a href="mailto:horizons_femmes@yahoo.fr" className="font-bold text-[#F4952F] hover:underline">horizons_femmes@yahoo.fr</a> },
                { icon: '📞', title: 'Téléphone', body: <a href="tel:+237222314302" className="font-bold text-[#F4952F] hover:underline">+237 222 31 43 02</a> },
              ].map((info) => (
                <div key={info.title} className="rounded-2xl border-2 border-slate-100 bg-white p-7 shadow-sm transition hover:border-[#F4952F]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1B3F8C] text-xl text-white shadow-md">
                    {info.icon}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-[#1B3F8C]">{info.title}</h3>
                  <div className="mt-3 text-sm text-slate-700">{info.body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-[1300px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
              Nous trouver
            </span>
            <h2 className="mt-4 text-3xl font-black text-[#1B3F8C] md:text-4xl">
              Localisation
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
          </div>
          <div className="mt-12 overflow-hidden rounded-3xl border-2 border-[#1B3F8C] bg-white shadow-sm">
            <iframe
              src={MAP_EMBED}
              title="Carte – Yaoundé, Cameroun"
              className="h-[420px] w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  )
}