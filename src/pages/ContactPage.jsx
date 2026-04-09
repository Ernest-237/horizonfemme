import { Link } from 'react-router-dom'
export default function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Branche ici ton backend / EmailJS / Formspree plus tard
  }

  return (
    <div className="space-y-12 pb-6 md:space-y-16">
      <section className="relative overflow-hidden">
        <div className="bg-[linear-gradient(135deg,#020617_0%,#0f172a_45%,#1e293b_100%)]">
          <div className="mx-auto max-w-7xl px-4 py-16 text-white md:px-6 lg:px-8 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-300">
              Contact
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Contactez-nous
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
              Nous sommes à votre écoute pour toute question, partenariat ou
              demande d&apos;information. N&apos;hésitez pas à nous écrire ou à
              nous rendre visite.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Formulaire
            </p>

            <h2 className="mt-4 text-3xl font-black text-slate-900">
              Envoyez-nous un message
            </h2>

            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Nom complet *
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Votre nom complet"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-900"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Adresse email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="exemple@email.com"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-900"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Sujet *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Sujet de votre message"
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-900"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  required
                  placeholder="Écrivez votre message ici..."
                  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-blue-900"
                />
              </div>

              <button
                type="submit"
                className="inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Envoyer le message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Coordonnées
              </p>

              <h2 className="mt-4 text-3xl font-black text-slate-900">
                Informations de contact
              </h2>

              <div className="mt-8 space-y-5">
                <div className="rounded-[24px] bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                    Adresse
                  </p>
                  <p className="mt-3 leading-8 text-slate-600">
                    B.P 8480 Yaoundé, Cameroun
                    <br />
                    Mini-ferme, Immeuble MTN
                  </p>
                </div>

                <div className="rounded-[24px] bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                    Email
                  </p>
                  <a
                    href="mailto:horizons_femmes@yahoo.fr"
                    className="mt-3 block leading-8 text-blue-900 hover:underline"
                  >
                    horizons_femmes@yahoo.fr
                  </a>
                </div>

                <div className="rounded-[24px] bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                    Téléphone
                  </p>
                  <a
                    href="tel:+237222314302"
                    className="mt-3 block leading-8 text-blue-900 hover:underline"
                  >
                    +237 222 314 302
                  </a>
                </div>

                <div className="rounded-[24px] bg-slate-50 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                    Suivez-nous
                  </p>

                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href="#"
                      className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-900 hover:text-blue-900"
                    >
                      Facebook
                    </a>
                    <a
                      href="#"
                      className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-900 hover:text-blue-900"
                    >
                      Instagram
                    </a>
                    <a
                      href="#"
                      className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-900 hover:text-blue-900"
                    >
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                Localisation
              </p>

              <h2 className="mt-4 text-3xl font-black text-slate-900">
                Notre localisation
              </h2>

              <div className="mt-6 overflow-hidden rounded-[28px] border border-slate-200 bg-slate-100">
                <div className="flex h-[320px] items-center justify-center px-6 text-center text-slate-500">
                  Carte Google Maps sera intégrée ici
                </div>

                {/*
                  Remplace le bloc ci-dessus par ton iframe Google Maps plus tard.
                  Exemple :

                  <iframe
                    title="Localisation Horizons Femmes"
                    src="TON_LIEN_GOOGLE_MAPS_EMBED"
                    className="h-[320px] w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                */}
              </div>

              <div className="mt-5 rounded-[20px] bg-slate-50 p-4">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-orange-500">
                  Adresse
                </p>
                <p className="mt-2 text-slate-600">Yaoundé, Cameroun</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}