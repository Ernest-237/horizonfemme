import { useState } from 'react'
import { Link } from 'react-router-dom'
import SilhouetteFiligree from '../components/sagco/SilhouetteFiligree' 

const NEWS_HERO_IMAGE = '/assets/hf/foncier.jpeg'

const articles = [
  {
    id: 'cepu-2025',
    category: 'Droits humains',
    date: '18 juillet 2025',
    title: 'Lancement officiel du projet CEPU : renforcer le dialogue pour les droits humains au Cameroun',
    excerpt:
      "Horizons Femmes a pris part, aux côtés de Search for Common Ground, à l'atelier de lancement officiel du projet CEPU-CMR à l'Hôtel Mont Fébé. Mis en œuvre sur 36 mois et couvrant l'ensemble du territoire national, ce projet vise à renforcer le dialogue entre la société civile et les institutions publiques.",
    image: '/assets/hf/actuu.jpeg',
  },
  {
    id: 'expertise-france',
    category: 'Santé, droits, égalité',
    date: 'Actualité 1',
    title: "Horizons Femmes au centre d'initiatives stratégiques soutenues par Expertise France",
    excerpt:
      "Un nouveau programme de formation en éducation financière a été lancé dans la région du Centre, avec un impact direct sur plus de 200 femmes entrepreneures.",
    image: '/assets/hf/f.jpg',
  },
  {
    id: 'mois-vih-2024',
    category: 'VIH/SIDA',
    date: 'Actualité 2',
    title: 'Mois camerounais de lutte contre le VIH/SIDA',
    excerpt:
      "Sous le thème « Suivons le chemin des droits », Horizons Femmes a contribué à la lutte contre le VIH à travers des sensibilisations, des causeries éducatives et des accompagnements communautaires.",
    image: '/assets/hf/lutte.jpg',
  },
  {
    id: 'jomp-2024',
    category: 'Jeunesse & SSR',
    date: '29 novembre 2024',
    title: "JoMP 2024 : mobilisation et plaidoyer pour les droits des jeunes",
    excerpt:
      "La Journée de Mobilisation et de Plaidoyer pour l'accès des droits des jeunes à la santé sexuelle et reproductive s'est tenue au Club France à Yaoundé.",
    image: '/assets/hf/jeunes.jpg',
  },
  {
    id: 'forum-ssp-2024',
    category: 'Santé publique',
    date: '19–21 novembre 2024',
    title: "Horizons Femmes au 1er Forum sur les soins de santé primaires au Palais des Sports de Yaoundé",
    excerpt:
      "À l'occasion du premier Forum sur les soins de santé primaires organisé par le Ministère de la Santé Publique, Horizons Femmes a pris part aux échanges à travers un stand, une communication orale et plusieurs posters.",
    image: '/assets/hf/soin.jpeg',
  },
  {
    id: 'jm-vih',
    category: 'Commémoration',
    date: 'Actualité 5',
    title: 'Journée mondiale de lutte contre le VIH/SIDA',
    excerpt:
      "Horizons Femmes a participé activement aux marches sportives organisées à Yaoundé et Douala. L'organisation a vu son engagement reconnu à travers une attestation de mérite.",
    image: '/assets/hf/acom.jpeg',
  },
  {
    id: 'femme-foncier',
    category: 'Gouvernance & droits',
    date: 'Actualité 6',
    title: "Forum national « La femme et le foncier » au Cameroun",
    excerpt:
      "Le forum national dédié à la question foncière a réuni les principales autorités et acteurs concernés autour des enjeux d'accès, de droits et de gouvernance.",
    image: '/assets/hf/foncier.jpeg',
  },
]

/* Catégories uniques pour le filtre */
const allCategories = ['Tout voir', ...Array.from(new Set(articles.map((a) => a.category)))]

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState('Tout voir')

  const featuredArticle = articles[0]

  const filteredSecondary = (
    activeCategory === 'Tout voir'
      ? articles.slice(1)
      : articles.filter((a) => a.category === activeCategory)
  )

  return (
    <div className="space-y-16 pb-12 md:space-y-20">

      {/* ════════════════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={NEWS_HERO_IMAGE}
            alt="Actualités Horizons Femmes"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(27,63,140,0.95)_0%,rgba(27,63,140,0.82)_35%,rgba(27,63,140,0.45)_70%,rgba(27,63,140,0.15)_100%)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-hf-blue/50 via-transparent to-transparent" />
        </div>

        <div className="pointer-events-none absolute -right-20 top-0 hidden h-full w-[500px] lg:block">
          <SilhouetteFiligree opacity={0.1} className="h-full w-full" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 py-24 md:px-6 md:py-28 xl:px-8 xl:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-hf-orange" />
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-hf-orange">
                Actualités
              </p>
            </div>

            <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight text-white md:text-5xl lg:text-6xl">
              Nos dernières nouvelles
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-100 md:text-lg">
              Suivez les temps forts, les événements, les participations
              institutionnelles et les actions de terrain menées par Horizons
              Femmes au Cameroun.
            </p>

            {/* Indicateur nombre d'articles */}
            {/* <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur">
              <span className="text-2xl font-black text-hf-orange">{articles.length}</span>
              <span className="text-sm font-bold text-white">articles publiés</span> 
            </div> */}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          ARTICLE À LA UNE
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
            À la une
          </p>
          <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
            {featuredArticle.title}
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
        </div>

        <article className="overflow-hidden rounded-[28px] border-2 border-slate-100 bg-white shadow-sm transition hover:shadow-xl">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative h-[320px] overflow-hidden md:h-[420px]">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="h-full w-full object-cover transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hf-blue/50 to-transparent" />
            </div>

            <div className="flex items-center p-7 md:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-hf-orange/15 px-3 py-1 text-sm font-bold text-hf-orange-dark">
                    {featuredArticle.category}
                  </span>
                  <span className="text-sm font-bold uppercase tracking-[0.18em] text-hf-blue">
                    {featuredArticle.date}
                  </span>
                </div>

                <h3 className="mt-5 text-2xl font-black leading-tight text-hf-blue md:text-3xl">
                  {featuredArticle.title}
                </h3>

                <div className="mt-3 h-1 w-12 rounded-full bg-hf-orange" />

                <p className="mt-5 text-base leading-8 text-slate-700">
                  {featuredArticle.excerpt}
                </p>

                <button
                  type="button"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-hf-blue px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-hf-blue-dark"
                >
                  Lire la suite <span aria-hidden>→</span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* ════════════════════════════════════════════════════════════
          AUTRES ARTICLES — filtre par catégorie
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
              Plus d'actualités
            </p>
            <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
              Toutes nos nouvelles
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Retrouvez les autres informations marquantes, les événements de
              plaidoyer et les campagnes de sensibilisation.
            </p>
          </div>

          <p className="shrink-0 text-xs font-medium text-slate-400">
            {filteredSecondary.length} article{filteredSecondary.length > 1 ? 's' : ''}
          </p>
        </div>

        {/* Filtre catégories */}
        <div className="mt-8 flex flex-wrap gap-2">
          {allCategories.map((cat) => (
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

        {/* Grille articles */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredSecondary.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col overflow-hidden rounded-[24px] border-2 border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-hf-orange hover:shadow-xl"
            >
              {/* Liseré orange en haut */}
              <div className="h-1 bg-hf-orange" />

              <div className="relative h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hf-blue/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-hf-orange/15 px-3 py-1 text-xs font-bold text-hf-orange-dark">
                    {article.category}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-hf-blue">
                    {article.date}
                  </span>
                </div>

                <h3 className="mt-4 flex-1 text-xl font-black leading-tight text-hf-blue md:text-2xl">
                  {article.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {article.excerpt}
                </p>

                <button
                  type="button"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border-2 border-hf-blue bg-white px-5 py-2.5 text-sm font-bold text-hf-blue transition hover:bg-hf-blue hover:text-white"
                >
                  Lire la suite →
                </button>
              </div>
            </article>
          ))}
        </div>

        {filteredSecondary.length === 0 && (
          <div className="mt-10 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-10 text-center">
            <p className="text-base font-bold text-hf-blue">
              Aucun article dans cette catégorie pour l'instant.
            </p>
            <button
              type="button"
              onClick={() => setActiveCategory('Tout voir')}
              className="mt-4 inline-flex rounded-full bg-hf-orange px-5 py-2.5 text-sm font-bold text-white transition hover:bg-hf-orange-dark"
            >
              Voir toutes les actualités
            </button>
          </div>
        )}
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
                Suivre nos actions
              </p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Restez informés de nos engagements
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200 md:text-lg">
                Explorez les temps forts de l'organisation, nos initiatives
                communautaires et nos prises de parole institutionnelles pour
                rester au cœur de l'action.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                to="/initiatives"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-hf-blue transition hover:bg-slate-100"
              >
                Voir les initiatives
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