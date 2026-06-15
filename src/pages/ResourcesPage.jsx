import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSiteContent } from '../hooks/useSiteContent'
import SilhouetteFiligree from '../components/sagco/SilhouetteFiligree'

const categories = [
  {
    id: 'rapports',
    label: 'Rapports',
    icon: '📊',
    title: 'Rapports institutionnels',
    desc: "Rapports annuels, rapports d'activités, comptes-rendus de projets et documents de capitalisation.",
    subTabs: [
      {
        id: 'rapport-annuel',
        label: 'Rapport annuel',
        items: [
          {
            title: "Rapport d'activités annuel 2023",
            desc: "Bilan annuel des interventions, des projets et des résultats obtenus sur le terrain en 2023.",
            meta: 'PDF · Rapport annuel · 2023',
            path: null,
            comingSoon: true,
          },
          {
            title: "Rapport d'activités annuel 2022",
            desc: "Bilan annuel des interventions, des projets et des résultats obtenus sur le terrain en 2022.",
            meta: 'PDF · Rapport annuel · 2022',
            path: null,
            comingSoon: true,
          },
        ],
      },
      {
        id: 'rapport-projets',
        label: 'Rapports des projets',
        items: [
          {
            title: "Rapport de capitalisation Life Center",
            desc: "Document de capitalisation du Drop-In Center Life Center Yaoundé, élaboré avec Sidaction.",
            meta: 'PDF · Capitalisation · Sidaction',
            path: null,
            comingSoon: true,
          },
          {
            title: "Rapport Projet État Civil",
            desc: "Rapport final du projet de promotion de l'accès aux actes d'état civil pour les populations vulnérables.",
            meta: 'PDF · Rapport projet',
            path: null,
            comingSoon: true,
          },
        ],
      },
      {
        id: 'rapport-activites',
        label: "Rapports d'activités",
        items: [
          {
            title: "Guide de formation des pairs éducateurs",
            desc: "Module de formation couvrant le leadership communautaire, le VIH/SIDA, la tuberculose et la santé sexuelle et reproductive.",
            meta: 'PDF · Formation · Horizons Femmes',
            path: '/assets/hf/doc1.pdf',
            comingSoon: false,
          },
          {
            title: "Rapport semestriel d'activités",
            desc: "Synthèse des activités menées sur le terrain au cours du premier semestre.",
            meta: 'PDF · Rapport semestriel',
            path: null,
            comingSoon: true,
          },
        ],
      },
    ],
  },
  {
    id: 'guides',
    label: 'Guides',
    icon: '📖',
    title: 'Guides pratiques',
    desc: "Guides pratiques à destination des acteurs communautaires, des bénéficiaires et des partenaires.",
    subTabs: null,
    items: [],
  },
  {
    id: 'manuels',
    label: 'Manuels',
    icon: '📚',
    title: 'Manuels de formation',
    desc: "Manuels structurés pour le renforcement des capacités des équipes, des pairs éducateurs et des partenaires.",
    subTabs: null,
    items: [],
  },
  {
    id: 'plaidoyer',
    label: 'Plaidoyer',
    icon: '📢',
    title: 'Documents de plaidoyer',
    desc: "Positions institutionnelles, notes de plaidoyer et supports de mobilisation pour les droits des femmes et des communautés.",
    subTabs: null,
    items: [],
  },
]

export default function ResourcesPage() {
  const content = useSiteContent()
  const page = content.resourcesPage
  // CHANGEMENT: Initialiser à null (aucune catégorie ouverte)
  const [activeCategory, setActiveCategory] = useState(null)
  const [activeSubTab, setActiveSubTab] = useState('rapport-annuel')

  // Fonction pour gérer le clic sur une catégorie (toggle)
  const handleCategoryClick = (categoryId) => {
    // Si on clique sur la catégorie déjà active, on la ferme (set à null)
    // Sinon, on ouvre la nouvelle catégorie
    setActiveCategory(activeCategory === categoryId ? null : categoryId)
  }

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash && categories.some((cat) => cat.id === hash)) {
      setActiveCategory(hash)
    }
  }, [])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '')
      if (hash && categories.some((cat) => cat.id === hash)) {
        setActiveCategory(hash)
      }
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  // Réinitialiser le sous-onglet quand on change de catégorie (ou quand on ferme)
  useEffect(() => {
    if (activeCategory) {
      const current = categories.find((c) => c.id === activeCategory)
      if (current?.subTabs?.length > 0) {
        setActiveSubTab(current.subTabs[0].id)
      }
    }
  }, [activeCategory])

  const current = activeCategory 
    ? categories.find((c) => c.id === activeCategory) || categories[0]
    : null

  const displayedItems = current?.subTabs
    ? current.subTabs.find((t) => t.id === activeSubTab)?.items || []
    : current?.items || []

  if (!page) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">Ressources</p>
        <h1 className="mt-4 text-4xl font-black text-hf-blue">Contenu indisponible</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          La clé <code>resourcesPage</code> est absente dans <code>siteContent.js</code>.
        </p>
      </section>
    )
  }

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
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            {/* Left column: title and description */}
            <div>
              <div className="inline-flex items-center gap-3">
                <span className="h-px w-10 bg-hf-orange" />
                <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-hf-orange">
                  {page.eyebrow}
                </p>
              </div>
              <h1 className="mt-6 text-3xl font-black leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl">
                {page.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-100 md:text-lg">
                {page.description}
              </p>
            </div>

            {/* Right column: mini navigation with categories and sub-tabs (ACCORDÉON TOGGLE) */}
            <div className="rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-md">
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-hf-orange">
                4 sous-rubriques disponibles
              </p>
              <div className="mt-4 space-y-2">
                {categories.map((cat) => (
                  <div key={cat.id} className="relative">
                    {/* Main category button avec toggle */}
                    <button
                      type="button"
                      onClick={() => handleCategoryClick(cat.id)}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-bold transition-all duration-200 ${
                        activeCategory === cat.id
                          ? 'bg-hf-orange text-white'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span aria-hidden>{cat.icon}</span>
                      {cat.label}
                      {/* Chevron qui tourne à l'ouverture/fermeture */}
                      {cat.subTabs && (
                        <span
                          className={`ml-auto text-xs transition-transform duration-300 ease-in-out ${
                            activeCategory === cat.id ? 'rotate-90' : 'rotate-0'
                          }`}
                        >
                          ›
                        </span>
                      )}
                    </button>

                    {/* Sub-tabs avec animation d'expansion/rétraction */}
                    {cat.subTabs && (
                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          activeCategory === cat.id
                            ? 'max-h-96 opacity-100 visible mt-2'
                            : 'max-h-0 opacity-0 invisible'
                        }`}
                        style={{
                          overflow: 'hidden',
                          visibility: activeCategory === cat.id ? 'visible' : 'hidden',
                        }}
                      >
                        <div className="ml-6 space-y-1 border-l border-white/20 pl-3">
                          {cat.subTabs.map((tab) => (
                            <button
                              key={tab.id}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation()
                                setActiveSubTab(tab.id)
                              }}
                              className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-bold transition-all duration-200 ${
                                activeSubTab === tab.id
                                  ? 'bg-white/20 text-white'
                                  : 'text-white/60 hover:bg-white/10 hover:text-white'
                              }`}
                            >
                              <span
                                className={`h-1.5 w-1.5 rounded-full transition-all duration-200 ${
                                  activeSubTab === tab.id ? 'bg-hf-orange scale-125' : 'bg-white/40 scale-100'
                                }`}
                              />
                              {tab.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          NAVIGATION TABS PRINCIPAUX
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              onClick={(e) => {
                e.preventDefault()
                handleCategoryClick(cat.id)
                window.history.replaceState(null, '', `#${cat.id}`)
              }}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold transition ${
                activeCategory === cat.id
                  ? 'bg-hf-blue text-white shadow-md'
                  : 'border-2 border-slate-200 bg-white text-slate-700 hover:border-hf-orange'
              }`}
            >
              <span aria-hidden>{cat.icon}</span>
              {cat.label}
            </a>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CONTENU DE LA CATÉGORIE ACTIVE
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        {current ? (
          <>
            {/* En-tête de catégorie */}
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <div className="inline-flex items-center gap-3">
                  <span className="text-3xl" aria-hidden>{current.icon}</span>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
                    {current.label}
                  </p>
                </div>
                <h2 className="mt-2 text-3xl font-black text-hf-blue md:text-4xl">
                  {current.title}
                </h2>
                <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
                  {current.desc}
                </p>
              </div>
              <p className="shrink-0 text-xs font-medium text-slate-400">
                {displayedItems.length} ressource{displayedItems.length > 1 ? 's' : ''}
              </p>
            </div>

            {/* Sous-onglets slider (uniquement pour Rapports) */}
            {current.subTabs && (
              <div className="mt-8 overflow-x-auto pb-1">
                <div className="flex min-w-max gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-1.5">
                  {current.subTabs.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveSubTab(tab.id)}
                      className={`whitespace-nowrap rounded-xl px-5 py-2.5 text-sm font-bold transition-all duration-200 ${
                        activeSubTab === tab.id
                          ? 'bg-hf-blue text-white shadow-md'
                          : 'text-slate-600 hover:bg-white hover:text-hf-blue hover:shadow-sm'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Grille de ressources ou état vide */}
            {displayedItems.length === 0 ? (
              <div className="mt-10 flex flex-col items-center justify-center rounded-[28px] border-2 border-dashed border-slate-200 bg-slate-50 py-20 text-center">
                <p className="text-5xl">📭</p>
                <h3 className="mt-6 text-2xl font-black text-hf-blue">Aucun contenu pour le moment</h3>
                <p className="mt-2 max-w-md text-base leading-7 text-slate-500">
                  Cette section est en cours d'alimentation. Revenez bientôt ou contactez-nous pour une demande spécifique.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-hf-orange px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-hf-orange-dark"
                >
                  Nous contacter <span aria-hidden>→</span>
                </Link>
              </div>
            ) : (
              <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {displayedItems.map((item) => (
                  <div
                    key={item.title}
                    className="group relative flex flex-col overflow-hidden rounded-[24px] border-2 border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-hf-orange hover:shadow-xl"
                  >
                    <div className="h-1 bg-hf-orange" />
                    <div className="flex flex-1 flex-col p-7">
                      <div className="flex items-center justify-between gap-2">
                        <span className="rounded-full bg-hf-orange/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-hf-orange-dark">
                          {current.label}
                        </span>
                        {item.comingSoon ? (
                          <span className="rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                            À venir
                          </span>
                        ) : (
                          <span className="rounded-full bg-green-100 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-green-700">
                            Disponible
                          </span>
                        )}
                      </div>
                      <h3 className="mt-5 text-xl font-black leading-tight text-hf-blue">
                        {item.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                        {item.desc}
                      </p>
                      <p className="mt-4 text-[11px] font-medium text-slate-400">
                        {item.meta}
                      </p>
                      <div className="mt-5 border-t border-slate-100 pt-5">
                        {!item.comingSoon && item.path ? (
                          <a
                            href={item.path}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-full bg-hf-blue px-5 py-2.5 text-sm font-bold text-white transition hover:bg-hf-blue-dark"
                          >
                            Télécharger <span aria-hidden>↓</span>
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-2 rounded-full border-2 border-dashed border-slate-300 px-5 py-2.5 text-sm font-bold text-slate-400">
                            🕐 Bientôt disponible
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="mt-10 flex flex-col items-center justify-center rounded-[28px] border-2 border-dashed border-slate-200 bg-slate-50 py-20 text-center">
            <p className="text-5xl">👆</p>
            <h3 className="mt-6 text-2xl font-black text-hf-blue">Sélectionnez une catégorie</h3>
            <p className="mt-2 max-w-md text-base leading-7 text-slate-500">
              Cliquez sur une des catégories ci-dessus pour découvrir nos ressources.
            </p>
          </div>
        )}
      </section>

      {/* ════════════════════════════════════════════════════════════
          COMMENT UTILISER CES RESSOURCES
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
            Utilisation
          </p>
          <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
            {page.usageTitle}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-600">
            {page.usageText}
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  handleCategoryClick(cat.id)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                className="group flex flex-col items-center gap-3 rounded-2xl border-2 border-slate-100 bg-slate-50 p-5 text-center transition hover:border-hf-orange hover:bg-white hover:shadow-md"
              >
                <span className="text-3xl" aria-hidden>{cat.icon}</span>
                <p className="text-sm font-bold text-hf-blue">{cat.label}</p>
              </button>
            ))}
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
                Vous ne trouvez pas ce que vous cherchez ?
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Demandez une ressource
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
                Notre bibliothèque est en cours d'enrichissement. Contactez-nous
                pour obtenir un document spécifique, un rapport ou tout autre
                contenu de capitalisation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-hf-blue transition hover:bg-slate-100"
              >
                Nous contacter
              </Link>
              <a
                href="mailto:horizons_femmes@yahoo.fr"
                className="inline-flex items-center gap-2 rounded-full bg-hf-orange px-6 py-3 text-sm font-bold text-white transition hover:bg-hf-orange-dark"
              >
                Écrire un email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}