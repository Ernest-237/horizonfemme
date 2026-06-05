import { Link } from 'react-router-dom'

const HERO_IMAGE = '/assets/hf/sagco-realisations-hero.jpg' // ← Remplace par ton image

const realisations = [
  {
    id: 1,
    category: 'Dépistage',
    title: '5000 femmes dépistées en 6 mois',
    description:
      "Le Bus des Femmes a permis de dépister plus de 5000 travailleuses du sexe dans les régions du Centre et du Littoral, avec une prise en charge immédiate des cas positifs.",
    icon: '🩺',
    stats: { value: '5 000+', label: 'Femmes dépistées' },
  },
  {
    id: 2,
    category: 'Formation',
    title: '200 pairs éducatrices formées',
    description:
      "Des sessions de formation intensives ont renforcé les compétences de 200 pairs éducatrices sur la prévention du VIH, la santé sexuelle et la réponse aux VBG.",
    icon: '🎓',
    stats: { value: '200', label: 'Pairs éducatrices' },
  },
  {
    id: 3,
    category: 'Sensibilisation',
    title: '15 000 préservatifs distribués',
    description:
      "Dans le cadre des campagnes de sensibilisation porte-à-porte, plus de 15 000 préservatifs masculins et féminins ont été distribués aux bénéficiaires et à leurs clients.",
    icon: '🎗️',
    stats: { value: '15 000+', label: 'Préservatifs' },
  },
  {
    id: 4,
    category: 'Plaidoyer',
    title: '3 ateliers de plaidoyer organisés',
    description:
      "Trois ateliers multi-acteurs ont été organisés avec les autorités sanitaires, les OSC partenaires et les représentantes des TS pour lever les barrières d'accès aux soins.",
    icon: '📢',
    stats: { value: '3', label: 'Ateliers plaidoyer' },
  },
  {
    id: 5,
    category: 'Prise en charge',
    title: '120 survivantes de VBG accompagnées',
    description:
      "Le projet SAGCO a assuré une prise en charge psychosociale et médicale complète pour 120 survivantes de violences basées sur le genre.",
    icon: '🛡️',
    stats: { value: '120', label: 'Survivantes VBG' },
  },
  {
    id: 6,
    category: 'Mobilisation',
    title: '4 régions couvertes',
    description:
      "Les activités du projet sont désormais déployées dans les 4 régions cibles : Centre, Littoral, Ouest et Sud, couvrant ainsi l'ensemble du territoire camerounais prévu.",
    icon: '📍',
    stats: { value: '4/4', label: 'Régions couvertes' },
  },
]

export default function SagcoRealisationsPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#1B3F8C]">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="" className="h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3F8C] via-[#1B3F8C]/85 to-[#1B3F8C]/40" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 py-20 md:px-6 md:py-28 xl:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-200">
            <Link to="/sagco" className="hover:text-[#F4952F]">Accueil</Link>
            <span>/</span>
            <span className="text-[#F4952F]">Réalisations</span>
          </nav>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Nos <span className="text-[#F4952F]">Réalisations</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-100">
            Des résultats concrets qui témoignent de l'impact du projet SAGCO sur le terrain.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          GRILLE DES RÉALISATIONS
          ════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
              Chiffres clés
            </span>
            <h2 className="mt-4 text-3xl font-black text-[#1B3F8C] md:text-4xl">
              L'impact du projet en chiffres
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {realisations.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl border-2 border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#F4952F] hover:shadow-xl"
              >
                {/* Statistique en haut */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-4xl" aria-hidden>{item.icon}</span>
                  <div className="text-right">
                    <p className="text-3xl font-black text-[#1B3F8C]">{item.stats.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#F4952F]">
                      {item.stats.label}
                    </p>
                  </div>
                </div>

                {/* Badge catégorie */}
                <span className="inline-block rounded-full bg-[#F4952F]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#e08522]">
                  {item.category}
                </span>

                <h3 className="mt-4 text-lg font-black text-[#1B3F8C]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                {/* Trait orange en bas au hover */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#F4952F] transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CTA BAS
          ════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6 xl:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#1B3F8C] p-10 text-white shadow-2xl md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[2fr_1fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
                  Ensemble, allons plus loin
                </span>
                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  Soutenez nos actions
                </h2>
                <p className="mt-4 max-w-xl text-slate-200">
                  Chaque contribution nous aide à étendre l'impact du projet SAGCO
                  auprès des femmes les plus vulnérables du Cameroun.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <Link
                  to="/sagco/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F4952F] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#e08522]"
                >
                  Nous contacter
                </Link>
                <Link
                  to="/don"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#1B3F8C]"
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