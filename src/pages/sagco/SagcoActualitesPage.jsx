import { Link } from 'react-router-dom'

const HERO_IMAGE = '/assets/hf/sagco-actus-hero.jpg' // ← Remplace par ton image

const actualites = [
  {
    id: 1,
    category: 'Santé communautaire',
    date: '15 Mai 2026',
    title: 'Lancement du Bus des Femmes dans la région du Centre',
    excerpt:
      "Le projet SAGCO a officiellement lancé son unité mobile de santé, le Bus des Femmes, pour rapprocher les services de dépistage et de prise en charge des travailleuses du sexe dans la région du Centre.",
    image: '/assets/hf/lutte.jpg', // ← Remplace par tes images
    featured: true,
  },
  {
    id: 2,
    category: 'Formation',
    date: '28 Avril 2026',
    title: 'Atelier de renforcement des capacités des pairs éducatrices',
    excerpt:
      "30 pairs éducatrices ont été formées à Douala sur les techniques de sensibilisation au VIH/SIDA, la santé sexuelle et reproductive, et la prévention des violences basées sur le genre.",
    image: '/assets/hf/act1.jpeg',
    featured: false,
  },
  {
    id: 3,
    category: 'Partenariat',
    date: '10 Avril 2026',
    title: "Signature de l'accord de collaboration avec le MINSANTÉ",
    excerpt:
      "Le Ministère de la Santé Publique a officialisé son partenariat avec le projet SAGCO pour renforcer l'accès aux soins des populations clés dans les 4 régions d'intervention.",
    image: '/assets/hf/act2.jpeg',
    featured: false,
  },
  {
    id: 4,
    category: 'Sensibilisation',
    date: '22 Mars 2026',
    title: 'Campagne de sensibilisation dans les districts de santé du Littoral',
    excerpt:
      "Les équipes de Moto Action ont sillonné les districts de santé de la région du Littoral pour une vaste campagne de sensibilisation porte-à-porte sur le VIH et les IST.",
    image: '/assets/hf/act3.jpeg',
    featured: false,
  },
  {
    id: 5,
    category: 'Plaidoyer',
    date: '5 Mars 2026',
    title: 'Atelier de plaidoyer pour la réduction des barrières d’accès aux soins',
    excerpt:
      "Un atelier multi-acteurs a réuni les autorités sanitaires, les OSC partenaires et les représentantes des TS pour élaborer une stratégie commune de plaidoyer.",
    image: '/assets/hf/lutte.jpg',
    featured: false,
  },
]

export default function SagcoActualitesPage() {
  const featuredActu = actualites.find((a) => a.featured) || actualites[0]
  const autresActus = actualites.filter((a) => a.id !== featuredActu?.id)

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
            <span className="text-[#F4952F]">Actualités</span>
          </nav>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Les <span className="text-[#F4952F]">Actualités</span> du Projet
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-100">
            Restez informés des temps forts, des activités de terrain et des avancées majeures du projet SAGCO.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          ACTUALITÉ EN VEDETTE
          ════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
              À la une
            </span>
            <h2 className="mt-4 text-3xl font-black text-[#1B3F8C] md:text-4xl">
              Actualité en vedette
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
          </div>

          <div className="mt-12 overflow-hidden rounded-3xl border-2 border-slate-100 bg-white shadow-sm">
            <div className="h-[320px] overflow-hidden md:h-[400px]">
              <img
                src={featuredActu.image}
                alt={featuredActu.title}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="p-7 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#F4952F]/15 px-3 py-1 text-sm font-bold text-[#e08522]">
                  {featuredActu.category}
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1B3F8C]">
                  {featuredActu.date}
                </span>
              </div>
              <h3 className="mt-4 text-2xl font-black leading-tight text-[#1B3F8C] md:text-3xl">
                {featuredActu.title}
              </h3>
              <p className="mt-4 text-lg leading-8 text-slate-700">
                {featuredActu.excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          AUTRES ACTUALITÉS
          ════════════════════════════════════════════════════════════ */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
              Plus d'actualités
            </span>
            <h2 className="mt-4 text-3xl font-black text-[#1B3F8C] md:text-4xl">
              Les dernières infos
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {autresActus.map((actu) => (
              <article
                key={actu.id}
                className="group grid overflow-hidden rounded-2xl border-2 border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#F4952F] hover:shadow-xl sm:grid-cols-[180px_1fr]"
              >
                <div className="overflow-hidden">
                  <img
                    src={actu.image}
                    alt={actu.title}
                    className="h-full min-h-[160px] w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 md:p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-[#F4952F]/15 px-3 py-1 text-xs font-bold text-[#e08522]">
                      {actu.category}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#1B3F8C]">
                      {actu.date}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-black leading-tight text-[#1B3F8C]">
                    {actu.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {actu.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CTA
          ════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6 xl:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#1B3F8C] p-10 text-white shadow-2xl md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[2fr_1fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
                  Restez connectés
                </span>
                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  Suivez le projet SAGCO
                </h2>
                <p className="mt-4 max-w-xl text-slate-200">
                  Pour ne rien manquer des activités du projet, suivez-nous sur nos réseaux sociaux
                  et abonnez-vous à notre newsletter.
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
                  to="/sagco/a-propos"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#1B3F8C]"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}