import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSiteContent } from '../hooks/useSiteContent'
import SilhouetteFiligree from '../components/sagco/SilhouetteFiligree'

const HERO_IMAGE = '/assets/hf/comite-hf.jpg'

export default function ProjectsPage() {
  const content = useSiteContent()
  const page = content?.initiativesPage

  const [activeCategory, setActiveCategory] = useState('Toutes')

  // Liste des catégories uniques + "Toutes" en premier
  const categories = useMemo(() => {
    if (!page?.projects) return ['Toutes']
    const unique = Array.from(new Set(page.projects.map((p) => p.category)))
    return ['Toutes', ...unique]
  }, [page?.projects])

  const filteredProjects = useMemo(() => {
    if (!page?.projects) return []
    if (activeCategory === 'Toutes') return page.projects
    return page.projects.filter((p) => p.category === activeCategory)
  }, [page?.projects, activeCategory])

  if (!page) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
          Initiatives
        </p>
        <h1 className="mt-4 text-4xl font-black text-hf-blue">
          Contenu indisponible
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          La clé <code>initiativesPage</code> est absente ou mal placée dans{' '}
          <code>siteContent.js</code>.
        </p>
      </section>
    )
  }

  return (
    <div className="space-y-16 pb-12 md:space-y-20">

      {/* ════════════════════════════════════════════════════════════
          HERO + STATS
          ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt=""
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hf-blue via-hf-blue/90 to-hf-blue/55" />
        </div>

        <div className="pointer-events-none absolute -right-20 top-0 hidden h-full w-[500px] lg:block">
          <SilhouetteFiligree color="#ffffff" opacity={0.1} className="h-full w-full" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 py-20 md:px-6 md:py-24 xl:px-8 xl:py-28">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">

            {/* Texte */}
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

            {/* Stats card */}
            <div className="rounded-2xl border border-white/15 bg-white/8 p-6 backdrop-blur-md">
              <div className="flex items-center gap-2">
                <span className="h-px w-6 bg-hf-orange" />
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-hf-orange">
                  En un coup d'œil
                </p>
              </div>

              <div className="mt-5 space-y-3">
                {page.heroStats?.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-hf-orange/40"
                  >
                    <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-hf-orange">
                      {item.label}
                    </p>
                    <p className="mt-2 text-base font-bold text-white">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          PROJET VEDETTE — SAGCO
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-hf-blue p-8 text-white shadow-xl md:p-12">
          <div className="pointer-events-none absolute -right-12 -bottom-12 h-[320px] w-[320px]">
            <SilhouetteFiligree color="#F4952F" opacity={0.18} className="h-full w-full" />
          </div>

          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border-2 border-hf-orange bg-hf-orange px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
                  ★ Projet vedette
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-hf-orange">
                  Santé · VBG · Plaidoyer
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-black md:text-4xl lg:text-5xl">
                SAGCO
              </h2>
              <p className="text-base font-bold italic text-hf-orange md:text-lg">
                Santé Globale des Copines
              </p>

              <div className="mt-4 h-1 w-16 rounded-full bg-hf-orange" />

              <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-100 md:text-lg">
                Accroître l'accès aux soins de santé des travailleuses du sexe
                au Cameroun dans une approche participative et transformative
                de genre. Un projet emblématique mené avec Moto Action et
                Expertise France.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/sagco"
                  className="inline-flex items-center gap-2 rounded-full bg-hf-orange px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-hf-orange-dark"
                >
                  Découvrir le sous-site SAGCO <span aria-hidden>→</span>
                </Link>
                <Link
                  to="/sagco/a-propos"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-hf-blue"
                >
                  Le projet en détail
                </Link>
              </div>
            </div>

            {/* Mini stats SAGCO */}
            <div className="hidden grid-cols-2 gap-3 lg:grid">
              {[
                { value: '4', label: 'Régions' },
                { value: '4', label: 'Objectifs' },
                { value: '100%', label: 'Communautaire' },
                { value: 'Multi', label: 'Partenaires' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/15 bg-white/5 p-5 text-center backdrop-blur"
                >
                  <p className="text-2xl font-black text-hf-orange">{stat.value}</p>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-200">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          AUTRES PROJETS — Filtre par catégorie
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
              {page.featuredTitle}
            </p>
            <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
              {page.projects.length} projets emblématiques
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              {page.featuredText}
            </p>
          </div>

          <p className="text-xs font-medium text-slate-500">
            {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} affiché
            {filteredProjects.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Filtre par catégorie */}
        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                activeCategory === cat
                  ? 'bg-hf-blue text-white shadow-md'
                  : 'border-2 border-slate-200 bg-white text-slate-700 hover:border-hf-orange'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille de projets */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="group flex flex-col overflow-hidden rounded-[24px] border-2 border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-hf-orange hover:shadow-xl"
            >
              {/* Liseré orange en haut */}
              <div className="h-1 bg-hf-orange" />

              <div className="flex flex-1 flex-col p-7 md:p-8">
                {/* Métadonnées */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-hf-orange/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-hf-orange-dark">
                    {project.category}
                  </span>
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                    {project.year}
                  </span>
                </div>

                {/* Titre */}
                <h3 className="mt-5 text-xl font-black leading-tight text-hf-blue md:text-2xl">
                  {project.title}
                </h3>

                {/* Localisation */}
                <p className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-hf-orange">
                  <span aria-hidden>📍</span>
                  {project.location}
                </p>

                {/* Résumé */}
                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {project.summary}
                </p>

                {/* Highlights en checklist */}
                {project.highlights?.length > 0 ? (
                  <div className="mt-6">
                    <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-hf-blue">
                      Points clés
                    </p>
                    <ul className="mt-3 space-y-2">
                      {project.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-700"
                        >
                          <span
                            className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-hf-orange text-[10px] font-black text-white"
                            aria-hidden
                          >
                            ✓
                          </span>
                          <span className="leading-6">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* Impact en cartouche bleu marine */}
                <div className="mt-6 mt-auto rounded-2xl bg-hf-blue/5 p-5 border-l-4 border-hf-blue">
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-hf-orange">
                    Impact
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-700">
                    {project.impact}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 ? (
          <div className="mt-10 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-10 text-center">
            <p className="text-base font-bold text-hf-blue">
              Aucun projet dans cette catégorie pour l'instant.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory('Toutes')}
              className="mt-4 inline-flex rounded-full bg-hf-orange px-5 py-2.5 text-sm font-bold text-white transition hover:bg-hf-orange-dark"
            >
              Voir tous les projets
            </button>
          </div>
        ) : null}
      </section>

      {/* ════════════════════════════════════════════════════════════
          NOTRE APPROCHE
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm md:p-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
              {page.approachTitle}
            </p>
            <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
              Une méthode éprouvée sur le terrain
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              {page.approachText}
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {page.approachItems?.map((item, index) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border-2 border-slate-100 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-hf-orange hover:bg-white hover:shadow-md"
              >
                <span className="block text-4xl font-black text-hf-blue/15 transition group-hover:text-hf-orange/40">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-3 text-lg font-black text-hf-blue">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-hf-orange transition-all duration-500 group-hover:w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CTA bas
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-hf-blue p-8 text-white shadow-xl md:p-12">
          <div className="pointer-events-none absolute -right-12 -bottom-12 h-[280px] w-[280px]">
            <SilhouetteFiligree color="#F4952F" opacity={0.18} className="h-full w-full" />
          </div>

          <div className="relative grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-hf-orange">
                Soutenez nos projets
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Devenez partenaire de nos initiatives
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
                Chaque projet est le fruit d'une collaboration entre nos
                équipes, nos partenaires techniques et financiers, et les
                communautés. Rejoignez-nous.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-hf-blue transition hover:bg-slate-100"
              >
                Nous contacter
              </Link>
              <Link
                to="/don"
                className="inline-flex items-center gap-2 rounded-full bg-hf-orange px-6 py-3 text-sm font-bold text-white transition hover:bg-hf-orange-dark"
              >
                Faire un don
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}