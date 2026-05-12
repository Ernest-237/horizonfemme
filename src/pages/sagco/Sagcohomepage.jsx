import { Link } from 'react-router-dom'
import SilhouetteFiligree from '../../components/sagco/SilhouetteFiligree'

const HERO_IMAGE = '../../public/assets/hf/sagco-p.png'

const objectives = [
  {
    number: '01',
    title: 'Autonomisation',
    description:
      'Autonomiser les TS et les gatekeepers dans la mobilisation et sensibilisation de leurs pairs et clients sur le VIH/SIDA et la santé globale.',
  },
  {
    number: '02',
    title: 'Offre de Soins',
    description:
      'Assurer une offre de santé globale de proximité pour les TS, notamment via le Bus des Femmes.',
  },
  {
    number: '03',
    title: 'Réponse aux VBG',
    description:
      'Améliorer la réponse aux violences basées sur le genre (VBG) en faveur des TS (prise en charge psychosociale et médicale).',
  },
  {
    number: '04',
    title: 'Plaidoyer',
    description:
      'Documenter et responsabiliser les acteurs pour réduire les barrières d’accès aux soins et développer une stratégie de plaidoyer.',
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
      {/* HERO — fond bleu marine + photo + filigrane silhouette (cf. charte p. 13) */}
      <section className="relative overflow-hidden bg-[#1B3F8C]">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt=""
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3F8C] via-[#1B3F8C]/85 to-[#1B3F8C]/40" />
        </div>
        {/* Filigrane silhouette (15-20% opacity comme demandé par la charte) */}
        <div className="pointer-events-none absolute -right-20 top-0 h-full w-[500px]">
          <SilhouetteFiligree color="#ffffff" opacity={0.18} className="h-full w-full" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 py-24 md:px-6 md:py-32 xl:px-8 xl:py-40">
          <span className="inline-flex items-center rounded-full border-2 border-[#F4952F] bg-[#F4952F]/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#F4952F]">
            Projet SAGCO
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Santé Globale des{' '}
            <span className="text-[#F4952F]">Copines</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-100 md:text-xl">
            Accroître l’accès aux soins de santé des travailleuses du sexe au
            Cameroun, dans une approche participative et transformative de
            genre.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/sagco/a-propos"
              className="inline-flex items-center gap-2 rounded-full bg-[#F4952F] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#e08522]"
            >
              Découvrir le projet <span aria-hidden>→</span>
            </Link>
            <Link
              to="/sagco/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white bg-white/0 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#1B3F8C]"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
              Notre Mission
            </span>
            <h2 className="mt-4 text-3xl font-black text-[#1B3F8C] md:text-4xl">
              Un objectif général ambitieux
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
            <p className="mt-6 text-base leading-relaxed text-slate-700 md:text-lg">
              Accroître l’accès aux soins de santé des travailleuses du sexe
              (TS) du Cameroun dans une approche participative et transformative
              de genre, afin de réduire les inégalités et favoriser leur
              autonomie.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {objectives.map((obj) => (
              <div
                key={obj.number}
                className="group relative overflow-hidden rounded-2xl border-2 border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#F4952F] hover:shadow-xl"
              >
                <span className="block text-4xl font-black text-[#1B3F8C]/15 transition group-hover:text-[#F4952F]/30">
                  {obj.number}
                </span>
                <h3 className="mt-2 text-lg font-bold text-[#1B3F8C]">
                  {obj.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {obj.description}
                </p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F4952F] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS & ZONES — fond bleu marine avec filigrane */}
      <section className="relative overflow-hidden bg-[#1B3F8C] py-20 text-white md:py-24">
        <div className="pointer-events-none absolute -left-32 top-1/2 h-[600px] w-[600px] -translate-y-1/2">
          <SilhouetteFiligree color="#ffffff" opacity={0.06} className="h-full w-full" />
        </div>

        <div className="relative mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Partners */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
                Nos Partenaires
              </span>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Une collaboration solide
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
              <p className="mt-4 text-slate-200">
                Le projet repose sur une synergie d’expertises engagées au
                service des bénéficiaires.
              </p>
              <ul className="mt-8 space-y-4">
                {partners.map((p) => (
                  <li
                    key={p.name}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur transition hover:border-[#F4952F]/60 hover:bg-white/10"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[#F4952F]">
                        {p.label}
                      </p>
                      <p className="mt-1 font-bold text-white">{p.name}</p>
                    </div>
                    <span aria-hidden className="text-2xl text-[#F4952F]">
                      →
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Zones */}
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
                Zones d’intervention
              </span>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                4 régions stratégiques
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
              <p className="mt-4 text-slate-200">
                Le projet couvre quatre régions stratégiques du Cameroun.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {regions.map((region) => (
                  <div
                    key={region}
                    className="group rounded-2xl border-2 border-white/15 bg-white/5 p-6 backdrop-blur transition hover:border-[#F4952F] hover:bg-[#F4952F]/10"
                  >
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#F4952F] text-base font-black text-white"
                    >
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

      {/* CTA — cartouche orange (cf. charte p. 14-15) */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6 xl:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#1B3F8C] p-10 text-white shadow-2xl md:p-14">
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-[280px] w-[280px]">
              <SilhouetteFiligree color="#F4952F" opacity={0.2} className="h-full w-full" />
            </div>
            <div className="relative grid items-center gap-8 md:grid-cols-[2fr,1fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
                  Engagement
                </span>
                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  Rejoignez le mouvement
                </h2>
                <p className="mt-4 max-w-xl text-slate-200">
                  Ensemble, transformons l’accès à la santé pour les femmes les
                  plus vulnérables du Cameroun.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link
                  to="/sagco/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F4952F] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#e08522]"
                >
                  Nous contacter
                </Link>
                <Link
                  to="/don"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-[#1B3F8C]"
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