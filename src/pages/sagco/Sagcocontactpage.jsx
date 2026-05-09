import { Link } from 'react-router-dom'
import { useState } from 'react'

const HERO_IMAGE =
  'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202026-01-26%20at%2003.17.50.jpeg'

const MAP_EMBED =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.686657688646!2d11.516667!3d3.866667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcf7a309a7977%3A0x7f54d93f7f6c9b0!2sYaound%C3%A9%2C%20Cameroun!5e0!3m2!1sfr!2sfr!4v1625000000000!5m2!1sfr!2sfr'

export default function SagcoContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // 'sending' | 'sent' | 'error'

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit() {
    if (!form.name || !form.email || !form.message) {
      setStatus('error')
      return
    }
    setStatus('sending')
    // TODO : brancher sur ton endpoint backend (ex: POST /api/contact)
    // En attendant, on simule un envoi réussi
    setTimeout(() => {
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 900)
  }

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Contact SAGCO"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-pink-900/60" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-4 py-20 md:px-6 md:py-28 xl:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-300">
            <Link to="/sagco" className="hover:text-pink-300">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-pink-300">Contact</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Contactez-{' '}
            <span className="bg-gradient-to-r from-pink-400 to-fuchsia-300 bg-clip-text text-transparent">
              nous
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Une question, un partenariat, un retour ? Nous sommes à votre
            écoute.
          </p>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="grid gap-10 lg:grid-cols-[3fr,2fr]">
            {/* FORM */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
                Envoyez-nous un message
              </span>
              <h2 className="mt-3 text-2xl font-black text-slate-900 md:text-3xl">
                Parlons ensemble
              </h2>

              <div className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-600"
                    >
                      Nom complet *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-100"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-600"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-100"
                      placeholder="vous@exemple.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600"
                  >
                    Sujet
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-100"
                    placeholder="Sujet de votre message"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-600"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-100"
                    placeholder="Votre message..."
                  />
                </div>

                {status === 'sent' ? (
                  <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-semibold text-green-700">
                    ✓ Message envoyé. Nous reviendrons vers vous rapidement.
                  </div>
                ) : null}
                {status === 'error' ? (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    Merci de remplir tous les champs obligatoires.
                  </div>
                ) : null}

                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={status === 'sending'}
                  className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === 'sending' ? 'Envoi…' : 'Envoyer le message →'}
                </button>
              </div>
            </div>

            {/* INFO */}
            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="text-2xl" aria-hidden>
                  📍
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Nos Bureaux
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">
                    Siège Social :
                  </span>
                  <br />
                  Yaoundé, Cameroun
                  <br />
                  Quartier Mini-ferme, Derrière Immeuble MTN
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="text-2xl" aria-hidden>
                  📧
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">Email</h3>
                <a
                  href="mailto:horizons_femmes@yahoo.fr"
                  className="mt-3 block text-sm font-semibold text-pink-600 hover:underline"
                >
                  horizons_femmes@yahoo.fr
                </a>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <span className="text-2xl" aria-hidden>
                  📞
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  Téléphone
                </h3>
                <a
                  href="tel:+237222314302"
                  className="mt-3 block text-sm font-semibold text-pink-600 hover:underline"
                >
                  +237 222 314 302
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-[1300px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
              Nous trouver
            </span>
            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">
              Localisation
            </h2>
          </div>
          <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
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