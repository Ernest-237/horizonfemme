import { useState } from 'react'
import { Link } from 'react-router-dom'
import SilhouetteFiligree from '../components/sagco/SilhouetteFiligree'

const HERO_IMAGE = '/assets/hf/comite-hf.jpg'

/* ───────────────────────────────────────────────────────────────────
   Données de la médiathèque
   Les contenus réels seront ajoutés progressivement.
   Pour ajouter une vraie ressource : remplacer comingSoon: true par
   l'URL réelle dans href, et ajouter l'image dans /public/assets/hf/media/
   ─────────────────────────────────────────────────────────────────── */

const mediaCategories = [
  {
    id: 'phototheque',
    type: 'Photo',
    title: 'Photothèque',
    text: "Découvrez les images de terrain, les événements, les ateliers et les temps forts de Horizons Femmes.",
    icon: '📷',
    count: 'Albums en préparation',
  },
  {
    id: 'videotheque',
    type: 'Vidéo',
    title: 'Vidéothèque',
    text: "Retrouvez les vidéos institutionnelles, les capsules de sensibilisation et les interventions publiques.",
    icon: '🎬',
    count: 'Capsules à venir',
  },
  {
    id: 'audiotheque',
    type: 'Audio',
    title: 'Podcasts & témoignages',
    text: "Écoutez les messages, témoignages, plaidoyers et contenus sonores produits par l'organisation.",
    icon: '🎙',
    count: 'Espace en construction',
  },
]

const featuredContent = {
  badge: 'À la une',
  title: 'Une médiathèque pour valoriser nos actions',
  text:
    "La médiathèque de Horizons Femmes rassemble des contenus visuels et audiovisuels qui mettent en valeur les actions de terrain, les campagnes, les activités communautaires, les événements institutionnels et les messages de plaidoyer.",
  intent:
    "Cet espace sera enrichi progressivement avec nos contenus authentiques au fur et à mesure des actions menées.",
}

export default function MediathequePage() {
  const [activeType, setActiveType] = useState('Tout')

  const types = ['Tout', 'Photo', 'Vidéo', 'Audio']

  const filteredCategories =
    activeType === 'Tout'
      ? mediaCategories
      : mediaCategories.filter((c) => c.type === activeType)

  return (
    <div className="space-y-16 pb-12 md:space-y-20">

      {/* ════════════════════════════════════════════════════════════
          HERO
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
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-hf-orange" />
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-hf-orange">
                Médiathèque
              </p>
            </div>

            <h1 className="mt-6 text-3xl font-black leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl xl:text-[3rem]">
              Images, vidéos et contenus multimédias
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-100 md:text-lg">
              Explorez les contenus visuels et audiovisuels de Horizons
              Femmes : activités de terrain, événements, campagnes,
              sensibilisation, témoignages et archives institutionnelles.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          INTRO + FILTRE
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
              Nos espaces
            </p>
            <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
              Une médiathèque pensée pour valoriser l'impact
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Cette page regroupe différents formats de contenus afin de rendre
              visibles les actions, les messages et les temps forts de
              l'organisation.
            </p>
          </div>

          {/* Filtre par type */}
          <div className="flex flex-wrap gap-2">
            {types.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setActiveType(type)}
                className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                  activeType === type
                    ? 'bg-hf-blue text-white shadow-md'
                    : 'border-2 border-slate-200 bg-white text-slate-700 hover:border-hf-orange'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Cards catégories */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredCategories.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="group relative flex flex-col overflow-hidden rounded-[24px] border-2 border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-hf-orange hover:shadow-xl"
            >
              {/* Liseré orange en haut */}
              <div className="h-1 bg-hf-orange" />

              {/* Visuel : grand icône + fond bleu */}
              <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-hf-blue to-hf-blue-dark">
                <div className="pointer-events-none absolute -right-8 -bottom-8 h-[180px] w-[180px]">
                  <SilhouetteFiligree color="#ffffff" opacity={0.08} className="h-full w-full" />
                </div>
                <div className="relative text-center">
                  <div className="text-5xl" aria-hidden>
                    {item.icon}
                  </div>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.2em] text-hf-orange">
                    {item.type}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-black text-hf-blue md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                    {item.count}
                  </p>
                  <span className="rounded-full bg-hf-orange/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-hf-orange-dark">
                    Bientôt
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FEATURED - À LA UNE (avec filigrane)
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-hf-blue shadow-xl">
          <div className="pointer-events-none absolute -right-10 top-0 h-full w-[400px]">
            <SilhouetteFiligree color="#F4952F" opacity={0.15} className="h-full w-full" />
          </div>

          <div className="relative grid gap-0 lg:grid-cols-[1fr_1fr]">

            {/* Côté visuel décoratif */}
            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-hf-blue-dark p-10 md:min-h-[420px]">
              <div className="pointer-events-none absolute inset-0">
                <SilhouetteFiligree color="#F4952F" opacity={0.2} className="h-full w-full" />
              </div>
              <div className="relative text-center text-white">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-hf-orange bg-hf-orange/15 backdrop-blur">
                  <span className="text-5xl" aria-hidden>📚</span>
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[0.22em] text-hf-orange">
                  Bibliothèque institutionnelle
                </p>
                <p className="mt-2 text-lg font-bold">Horizons Femmes</p>
              </div>
            </div>

            {/* Texte */}
            <div className="flex items-center p-7 text-white md:p-10 lg:p-12">
              <div>
                <span className="inline-flex rounded-full bg-hf-orange px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  {featuredContent.badge}
                </span>

                <h2 className="mt-5 text-2xl font-black leading-tight md:text-3xl lg:text-4xl">
                  {featuredContent.title}
                </h2>
                <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />

                <p className="mt-5 text-base leading-relaxed text-slate-100 md:text-lg">
                  {featuredContent.text}
                </p>

                <p className="mt-4 text-sm italic text-slate-300">
                  {featuredContent.intent}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-hf-orange px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-hf-orange-dark"
                  >
                    Nous contacter
                  </Link>
                  <Link
                    to="/ressources"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-hf-blue"
                  >
                    Voir les ressources
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          ENRICHISSEMENT EN COURS — message honnête
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-[28px] border-2 border-dashed border-hf-orange/40 bg-hf-orange/5 p-8 text-center md:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-hf-orange bg-white">
            <span className="text-2xl" aria-hidden>✨</span>
          </div>
          <p className="mt-5 text-xs font-bold uppercase tracking-[0.22em] text-hf-orange">
            En cours d'enrichissement
          </p>
          <h2 className="mt-3 text-2xl font-black text-hf-blue md:text-3xl">
            La médiathèque sera bientôt remplie de contenus authentiques
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
            Nous publions progressivement des photos d'activités terrain, des
            vidéos de sensibilisation, des témoignages et des reportages.
            Revenez régulièrement pour découvrir les nouveaux contenus !
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/actualites"
              className="inline-flex items-center gap-2 rounded-full bg-hf-blue px-6 py-3 text-sm font-bold text-white shadow transition hover:bg-hf-blue-dark"
            >
              Voir les actualités
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border-2 border-hf-blue bg-white px-6 py-3 text-sm font-bold text-hf-blue transition hover:bg-hf-blue hover:text-white"
            >
              Proposer un contenu
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CTA BAS
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-hf-blue p-8 text-white shadow-xl md:p-12">
          <div className="pointer-events-none absolute -right-12 -bottom-12 h-[280px] w-[280px]">
            <SilhouetteFiligree color="#F4952F" opacity={0.18} className="h-full w-full" />
          </div>

          <div className="relative grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-hf-orange">
                Valoriser nos actions
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Donnez de la visibilité à nos engagements
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
                La médiathèque permet de rendre visibles les actions de
                terrain, les campagnes, les événements et les voix qui font
                vivre Horizons Femmes au quotidien.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/actualites"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-hf-blue transition hover:bg-slate-100"
              >
                Voir les actualités
              </Link>
              <Link
                to="/ressources"
                className="inline-flex items-center gap-2 rounded-full bg-hf-orange px-6 py-3 text-sm font-bold text-white transition hover:bg-hf-orange-dark"
              >
                Voir les ressources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}