import { Link } from 'react-router-dom'

const HERO_IMAGE = 'https://femme.kdllogiscargo.com/assets/images/d.jpg'

const objectives = [
  {
    number: '01',
    title: 'Autonomisation',
    description:
      'Autonomiser les TS et les gatekeepers dans la mobilisation et sensibilisation de leurs pairs et clients sur le VIH/SIDA et la santé globale.',
    color: 'from-pink-500 to-fuchsia-500',
  },
  {
    number: '02',
    title: 'Offre de Soins',
    description:
      'Assurer une offre de santé globale de proximité pour les TS, notamment via le Bus des Femmes.',
    color: 'from-fuchsia-500 to-purple-500',
  },
  {
    number: '03',
    title: 'Réponse aux VBG',
    description:
      'Améliorer la réponse aux violences basées sur le genre (VBG) en faveur des TS (prise en charge psychosociale et médicale).',
    color: 'from-purple-500 to-indigo-500',
  },
  {
    number: '04',
    title: 'Plaidoyer',
    description:
      'Documenter et responsabiliser les acteurs pour réduire les barrières d’accès aux soins et développer une stratégie de plaidoyer.',
    color: 'from-rose-500 to-pink-500',
  },
]

const partners = [
  { label: 'Organisme porteur', name: 'HORIZONS FEMMES' },
  { label: 'Mise en œuvre', name: 'MOTO ACTION CAMEROUN' },
  { label: 'Financement', name: 'EXPERTISE FRANCE' },
]

const regions = ['Centre', 'Littoral', 'Ouest', 'Sud']

export default function SagcoHomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="SAGCO"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-pink-900/60" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-4 py-24 md:px-6 md:py-32 xl:px-8 xl:py-40">
          <span className="inline-flex items-center rounded-full border border-pink-300/40 bg-pink-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-pink-200 backdrop-blur">
            Projet SAGCO
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Santé Globale des{' '}
            <span className="bg-gradient-to-r from-pink-400 to-fuchsia-300 bg-clip-text text-transparent">
              Copines
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200 md:text-xl">
            Accroître l’accès aux soins de santé des travailleuses du sexe au
            Cameroun, dans une approche participative et transformative de
            genre.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/sagco/a-propos"
              className="inline-flex items-center gap-2 rounded-full bg-pink-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-600"
            >
              Découvrir le projet
              <span aria-hidden>→</span>
            </Link>
            <Link
              to="/sagco/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
              Notre Mission
            </span>
            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">
              Un objectif général ambitieux
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500" />
            <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
              Accroître l’accès aux soins de santé des travailleuses du sexe
              (TS) du Cameroun dans une approche participative et transformative
              de genre, afin de réduire les inégalités et favoriser leur
              autonomie.
            </p>
          </div>

          {/* Objectives grid */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {objectives.map((obj) => (
              <div
                key={obj.number}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br ${obj.color} opacity-10 transition group-hover:opacity-20`}
                />
                <span
                  className={`inline-block bg-gradient-to-r ${obj.color} bg-clip-text text-3xl font-black text-transparent`}
                >
                  {obj.number}
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-900">
                  {obj.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {obj.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS & ZONES */}
      <section className="bg-slate-900 py-20 text-white md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Partners */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-pink-400">
                🤝 Nos Partenaires
              </span>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Une collaboration solide
              </h2>
              <p className="mt-4 text-slate-300">
                Le projet repose sur une synergie d’expertises engagées au
                service des bénéficiaires.
              </p>
              <ul className="mt-8 space-y-4">
                {partners.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">
                        {p.label}
                      </p>
                      <p className="mt-1 font-bold text-white">{p.name}</p>
                    </div>
                    <span
                      aria-hidden
                      className="text-2xl text-pink-400"
                    >
                      →
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Zones */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-pink-400">
                🌍 Zones d’intervention
              </span>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                4 régions stratégiques
              </h2>
              <p className="mt-4 text-slate-300">
                Le projet couvre quatre régions stratégiques du Cameroun.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {regions.map((region) => (
                  <div
                    key={region}
                    className="group rounded-2xl border border-white/10 bg-gradient-to-br from-pink-500/10 to-fuchsia-500/5 p-6 transition hover:border-pink-400/40 hover:from-pink-500/20"
                  >
                    <span className="text-3xl" aria-hidden>
                      📍
                    </span>
                    <p className="mt-3 text-lg font-bold text-white">
                      {region}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6 xl:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-pink-600 via-fuchsia-600 to-purple-700 p-10 text-white shadow-2xl md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[2fr,1fr]">
              <div>
                <h2 className="text-3xl font-black md:text-4xl">
                  Rejoignez le mouvement
                </h2>
                <p className="mt-4 max-w-xl text-pink-50">
                  Ensemble, transformons l’accès à la santé pour les femmes les
                  plus vulnérables du Cameroun.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link
                  to="/sagco/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-pink-700 transition hover:bg-pink-50"
                >
                  Nous contacter
                </Link>
                <Link
                  to="/don"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Faire un don
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}