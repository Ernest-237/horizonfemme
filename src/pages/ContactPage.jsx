import { useState } from 'react'
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from 'react-icons/fa6'
import SilhouetteFiligree from '../components/sagco/SilhouetteFiligree'

/* ─────────────────────────────────────────────────────────────────
   Bureaux + liens d'embed Google Maps pour chaque antenne.
   Remplace les chaînes vides par tes propres liens.
   ───────────────────────────────────────────────────────────────── */
const offices = [
  {
    id: 'yaounde',
    label: '01',
    name: 'Siège social',
    city: 'Yaoundé',
    region: 'Centre',
    address: 'B.P 8480 — Mini-ferme Melen, Immeuble MTN',
    phone: '(+237) 622 548 642',
    mapEmbedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.7412665674997!2d11.494032774471131!3d3.865590948332014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfd32c22780b%3A0x6adad99b0755901f!2sHorizons%20Femmes%20Life%20Centre!5e0!3m2!1sfr!2sca!4v1781484901234!5m2!1sfr!2sca',
       
    },
  {
    id: 'douala',
    label: '02',
    name: 'Antenne Littoral',
    city: 'Douala',
    region: 'Littoral',
    address: 'Elf axe-lourd, Carrefour Nelson Mandela, Immeuble Beteumen',
    phone: '(+237) 622 548 641',
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.0522095392785!2d9.729587824471405!3d4.009687447261407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10610d52daf74dab%3A0x6eb3f4acdc4fd72d!2sCarrefour%20Nelson%20Mandela!5e0!3m2!1sfr!2sca!4v1779417199766!5m2!1sfr!2sca', // ← à remplacer par le lien d'embed Google Maps de Douala
  },
  {
    id: 'bafoussam',
    label: '03',
    name: 'Antenne Ouest',
    city: 'Bafoussam',
    region: 'Ouest',
    address: 'Carrefour Auberge',
    phone: '(+237) 622 548 638',
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15886.291434576868!2d10.40808028715819!3d5.481559600000022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105f9b0017d55f81%3A0x55ca3d8aaca0e5c4!2sCarrefour%20auberge!5e0!3m2!1sfr!2sca!4v1779417403955!5m2!1sfr!2sca', // ← à remplacer
  },
  {
    id: 'ebolowa',
    label: '04',
    name: 'Antenne Sud',
    city: 'Ebolowa',
    region: 'Sud',
    address: 'Carrefour an 2000, descente Brasseries',
    phone: '(+237) 622 548 639',
    mapEmbedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.638327305673!2d11.150429674470388!3d2.919931454519979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10884f0047692e53%3A0x36a431f4c26f8eb7!2sDescente%20Brasseries!5e0!3m2!1sfr!2sca!4v1779417478897!5m2!1sfr!2sca', // ← à remplacer
  },
]

const socials = [
  { label: 'Facebook', href: 'https://facebook.com/HorizonsFemmesofficiel/', Icon: FaFacebookF },
  { label: 'Twitter / X', href: 'https://twitter.com/Horizons_Femmes', Icon: FaXTwitter },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/ONG-HorizonsFemmes/', Icon: FaLinkedinIn },
  { label: 'YouTube', href: '#', Icon: FaYoutube },
  { label: 'TikTok', href: '#', Icon: FaTiktok },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'
  const [selectedOfficeId, setSelectedOfficeId] = useState('yaounde')

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    // TODO : brancher ton backend / EmailJS / Formspree ici
    setTimeout(() => {
      setStatus('sent')
      setForm({ fullName: '', email: '', subject: '', message: '' })
    }, 900)
  }

  const activeOffice = offices.find((o) => o.id === selectedOfficeId) || offices[0]

  return (
    <div className="space-y-16 pb-12 md:space-y-20">

      {/* ════════════════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-hf-blue">
        <div className="pointer-events-none absolute -right-20 top-0 hidden h-full w-[500px] lg:block">
          <SilhouetteFiligree opacity={0.1} className="h-full w-full" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 py-20 md:px-6 md:py-24 xl:px-8 xl:py-28">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-10 bg-hf-orange" />
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-hf-orange">
              Contact
            </p>
          </div>

          <h1 className="mt-6 max-w-3xl text-3xl font-black leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl xl:text-[3rem]">
            Nous sommes à votre écoute
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-100 md:text-lg">
            Pour toute question, partenariat, demande d'information ou
            opportunité de collaboration, n'hésitez pas à nous écrire ou à
            nous rendre visite dans l'un de nos bureaux.
          </p>

          {/* Infos rapides en ligne */}
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="tel:+237222314302"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:border-hf-orange hover:bg-hf-orange"
            >
              📞 +237 222 314 302
            </a>
            <a
              href="mailto:horizons_femmes@yahoo.fr"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:border-hf-orange hover:bg-hf-orange"
            >
              ✉ horizons_femmes@yahoo.fr
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FORMULAIRE + COORDONNÉES
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">

          {/* ── Formulaire ── */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
              Formulaire de contact
            </p>
            <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
              Envoyez-nous un message
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fullName"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-hf-blue"
                  >
                    Nom complet *
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Votre nom complet"
                    className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-hf-orange focus:ring-2 focus:ring-hf-orange/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-bold uppercase tracking-wider text-hf-blue"
                  >
                    Adresse email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="exemple@email.com"
                    className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-hf-orange focus:ring-2 focus:ring-hf-orange/20"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-hf-blue"
                >
                  Objet *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Objet de votre message"
                  className="w-full rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-hf-orange focus:ring-2 focus:ring-hf-orange/20"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-hf-blue"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Écrivez votre message ici..."
                  className="w-full resize-none rounded-xl border-2 border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-hf-orange focus:ring-2 focus:ring-hf-orange/20"
                />
              </div>

              {/* Feedback */}
              {status === 'sent' ? (
                <div className="rounded-xl border-2 border-green-200 bg-green-50 px-4 py-3 text-sm font-bold text-green-700">
                  ✓ Message envoyé avec succès. Nous vous répondrons rapidement.
                </div>
              ) : null}
              {status === 'error' ? (
                <div className="rounded-xl border-2 border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">
                  Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.
                </div>
              ) : null}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex items-center gap-2 rounded-full bg-hf-orange px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-hf-orange/30 transition hover:bg-hf-orange-dark disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Envoi en cours…
                  </>
                ) : (
                  'Envoyer le message →'
                )}
              </button>
            </form>
          </div>

          {/* ── Coordonnées + réseaux ── */}
          <div className="space-y-6">

            {/* Infos de contact */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
                Coordonnées
              </p>
              <h2 className="mt-3 text-2xl font-black text-hf-blue md:text-3xl">
                Informations de contact
              </h2>
              <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />

              <div className="mt-6 space-y-4">

                {/* Email */}
                <div className="flex items-start gap-4 rounded-2xl border-2 border-slate-100 bg-slate-50 p-4 transition hover:border-hf-orange">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-hf-blue text-base text-white shadow-sm">
                    ✉
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-hf-orange">
                      Email
                    </p>
                    <a
                      href="mailto:horizons_femmes@yahoo.fr"
                      className="mt-1 block text-sm font-bold text-hf-blue hover:underline"
                    >
                      horizons_femmes@yahoo.fr
                    </a>
                  </div>
                </div>

                {/* Téléphone siège */}
                <div className="flex items-start gap-4 rounded-2xl border-2 border-slate-100 bg-slate-50 p-4 transition hover:border-hf-orange">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-hf-blue text-base text-white shadow-sm">
                    📞
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-hf-orange">
                      Siège social — Yaoundé
                    </p>
                    <a
                      href="tel:(+237) 622 548 642"
                      className="mt-1 block text-sm font-bold text-hf-blue hover:underline"
                    >
                      (+237) 622 548 642
                    </a>
                  </div>
                </div>

                {/* Adresse */}
                <div className="flex items-start gap-4 rounded-2xl border-2 border-slate-100 bg-slate-50 p-4 transition hover:border-hf-orange">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-hf-blue text-base text-white shadow-sm">
                    📍
                  </div>
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-hf-orange">
                      Adresse
                    </p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      B.P 8480 Yaoundé, Cameroun
                      <br />
                      Mini-ferme Melen, Immeuble MTN
                    </p>
                  </div>
                </div>

                {/* Réseaux sociaux */}
                <div className="rounded-2xl border-2 border-slate-100 bg-slate-50 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-hf-orange">
                    Suivez-nous
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {socials.map(({ label, href, Icon }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-700 transition hover:border-hf-orange hover:bg-hf-orange hover:text-white"
                      >
                        <Icon className="text-base" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          NOS BUREAUX — grille compacte + clic pour changer la carte
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
            Nos antennes
          </p>
          <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
            Une présence dans 4 régions
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
          <p className="mt-4 text-base text-slate-600">
            Cliquez sur une antenne pour voir sa localisation sur la carte.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {offices.map((office) => (
            <button
              key={office.id}
              type="button"
              onClick={() => setSelectedOfficeId(office.id)}
              className={`group relative overflow-hidden rounded-[24px] border-2 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                selectedOfficeId === office.id
                  ? 'border-hf-orange ring-2 ring-hf-orange/30'
                  : 'border-slate-100 hover:border-hf-orange'
              }`}
            >
              {/* Numéro en filigrane */}
              <span className="block text-5xl font-black text-hf-blue/10 transition group-hover:text-hf-orange/20">
                {office.label}
              </span>

              <div className="-mt-2 text-left">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-hf-orange">
                  {office.region}
                </p>
                <h3 className="mt-1 text-lg font-black text-hf-blue">
                  {office.name}
                </h3>
                <p className="mt-1 text-sm font-bold text-slate-700">
                  {office.city}
                </p>
                <p className="mt-3 text-xs leading-5 text-slate-500">
                  {office.address}
                </p>
                <a
                  href={`tel:${office.phone.replace(/\s/g, '')}`}
                  className="mt-3 block text-xs font-bold text-hf-blue transition hover:text-hf-orange"
                  onClick={(e) => e.stopPropagation()} // empêche le clic de changer la carte quand on appelle
                >
                  {office.phone}
                </a>
              </div>

              {/* Trait orange en bas */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-hf-orange transition-all duration-500 group-hover:w-full" />
            </button>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CARTE GOOGLE MAPS — change selon l'antenne sélectionnée
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
            Localisation
          </p>
          <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
            Trouvez-nous sur la carte
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
          <p className="mt-4 text-base text-slate-600">
            {activeOffice.name} · {activeOffice.city} — {activeOffice.address}
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-[28px] border-2 border-slate-100 bg-white shadow-sm">
          {/* Liseré orange en haut */}
          <div className="h-1 bg-hf-orange" />

          {/* ─── Carte Google Maps ─── */}
          {activeOffice.mapEmbedSrc ? (
            <iframe
              title={`Localisation Horizons Femmes — ${activeOffice.name} ${activeOffice.city}`}
              src={activeOffice.mapEmbedSrc}
              className="h-[440px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="flex h-[440px] w-full items-center justify-center bg-slate-100 text-center">
              <div>
                <p className="text-5xl">🗺️</p>
                <p className="mt-4 text-lg font-bold text-slate-600">
                  Carte bientôt disponible
                </p>
                <p className="mt-2 text-sm text-slate-500">
                  L'emplacement de l'{activeOffice.name} à {activeOffice.city} sera affiché ici prochainement.
                </p>
              </div>
            </div>
          )}

          {/* Lien externe vers Google Maps */}
          <div className="flex items-center justify-between gap-4 border-t border-slate-100 px-6 py-4">
            <p className="text-sm text-slate-600">
              <span className="font-bold text-hf-blue">{activeOffice.name}</span> ·
              {activeOffice.city}, Cameroun
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                activeOffice.name + ' ' + activeOffice.city + ' Cameroun'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full border-2 border-hf-blue bg-white px-4 py-2 text-xs font-bold text-hf-blue transition hover:bg-hf-blue hover:text-white"
            >
              Ouvrir dans Maps →
            </a>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CTA BAS
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-hf-blue p-8 text-white shadow-xl md:p-12">
          <div className="pointer-events-none absolute -right-12 -bottom-12 h-[280px] w-[280px]">
            <SilhouetteFiligree opacity={0.1} className="h-full w-full" />
          </div>

          <div className="relative grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-hf-orange">
                Ensemble pour un impact durable
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Engagez-vous à nos côtés
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
                Partenariat, bénévolat, don ou simple soutien moral — chaque
                forme d'engagement compte pour faire avancer la mission
                d'Horizons Femmes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <a
                href="mailto:horizons_femmes@yahoo.fr"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-hf-blue transition hover:bg-slate-100"
              >
                ✉ Écrire un email
              </a>
              <a
                href="tel:(+237) 622 548 642"
                className="inline-flex items-center gap-2 rounded-full bg-hf-orange px-6 py-3 text-sm font-bold text-white transition hover:bg-hf-orange-dark"
              >
                📞 Appeler le siège
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}