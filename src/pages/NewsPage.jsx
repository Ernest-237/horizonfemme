import { Link } from 'react-router-dom'

const NEWS_HERO_IMAGE = '/assets/hf/femme-hf.avif'

const articles = [
  {
    id: 'cepu-2025',
    category: 'Droits humains',
    date: '18 juillet 2025',
    title:
      'Lancement officiel du projet CEPU : renforcer le dialogue pour les droits humains au Cameroun',
    excerpt:
      "Horizons Femmes a pris part, aux côtés de Search for Common Ground, à l’atelier de lancement officiel du projet CEPU-CMR à l’Hôtel Mont Fébé. Mis en œuvre sur 36 mois et couvrant l’ensemble du territoire national, ce projet vise à renforcer le dialogue entre la société civile et les institutions publiques, avec un accent sur l’inclusion des femmes et des jeunes filles, la promotion des droits humains et la mise en œuvre des recommandations issues de l’Examen Périodique Universel.",
    image: '/assets/hf/logo-hf.png',
  },
  {
    id: 'expertise-france',
    category: 'Santé, droits, égalité',
    date: 'Actualité 1',
    title:
      'Horizons Femmes au centre d’initiatives stratégiques soutenues par Expertise France',
    excerpt:
      "Un nouveau programme de formation en éducation financière a été lancé dans la région du Centre, avec un impact direct sur plus de 200 femmes entrepreneures. Cette dynamique s’inscrit dans une logique de renforcement de l’autonomisation économique, de l’inclusion et du développement des capacités.",
    image: '/assets/hf/f.jpg',
  },
  {
    id: 'mois-vih-2024',
    category: 'VIH/SIDA',
    date: 'Actualité 2',
    title: 'Mois camerounais de lutte contre le VIH/SIDA',
    excerpt:
      "Sous le thème « Suivons le chemin des droits », Horizons Femmes a contribué à la lutte contre le VIH à travers des sensibilisations, des causeries éducatives et des accompagnements communautaires. Le texte transmis rappelle également la baisse des nouvelles infections et des décès liés au sida au Cameroun, ainsi que l’importance de déconstruire les idées reçues autour du VIH.",
    image: '/assets/hf/lutte.jpg',
  },
  {
    id: 'jomp-2024',
    category: 'Jeunesse & SSR',
    date: '29 novembre 2024',
    title: 'JoMP 2024 : mobilisation et plaidoyer pour les droits des jeunes',
    excerpt:
      "La Journée de Mobilisation et de Plaidoyer pour l’accès des droits des jeunes à la santé sexuelle et reproductive s’est tenue au Club France à Yaoundé. L’événement a rassemblé divers participants autour de la sensibilisation aux droits humains, à la prévention des IST, à l’éducation sexuelle, à la contraception et à l’accès aux services de santé reproductive, dans une ambiance inclusive et participative.",
    image: '/assets/hf/jeunes.jpg',
  },
  {
    id: 'forum-ssp-2024',
    category: 'Santé publique',
    date: '19–21 novembre 2024',
    title:
      'Horizons Femmes au 1er Forum sur les soins de santé primaires au Palais des Sports de Yaoundé',
    excerpt:
      "À l’occasion du premier Forum sur les soins de santé primaires organisé par le Ministère de la Santé Publique, Horizons Femmes a pris part aux échanges à travers un stand, une communication orale et plusieurs posters. Cette participation a permis de mettre en lumière les enjeux de santé communautaire, de prévention du VIH, ainsi que la nécessité d’un accès équitable aux soins pour les femmes et les jeunes filles.",
    image: '/assets/hf/logo-hf.png',
  },
  {
    id: 'jm-vih',
    category: 'Commémoration',
    date: 'Actualité 5',
    title: 'Journée mondiale de lutte contre le VIH/SIDA',
    excerpt:
      "Horizons Femmes a participé activement aux marches sportives organisées à Yaoundé et Douala dans le cadre de la Journée mondiale de lutte contre le VIH/SIDA. L’organisation a vu son engagement pour la sensibilisation et l’accompagnement des personnes vivant avec le VIH reconnu à travers une attestation de mérite.",
    image: '/assets/hf/acom.jpeg',
  },
  {
    id: 'femme-foncier',
    category: 'Gouvernance & droits',
    date: 'Actualité 6',
    title: 'Forum national « La femme et le foncier » au Cameroun',
    excerpt:
      "Le forum national dédié à la question foncière a réuni les principales autorités et acteurs concernés autour des enjeux d’accès, de droits et de gouvernance. Horizons Femmes y prend part dans une dynamique de plaidoyer en faveur d’une meilleure prise en compte des droits des femmes dans les politiques et pratiques foncières.",
    image: '/assets/hf/foncier.jpeg',
  },
]

export default function NewsPage() {
  const featuredArticle = articles[0]
  const secondaryArticles = articles.slice(1)

  return (
    <div className="space-y-12 pb-6 md:space-y-16">
      <section className="relative overflow-hidden">
        <div className="relative min-h-[58vh] md:min-h-[64vh]">
          <img
            src={NEWS_HERO_IMAGE}
            alt="Actualités Horizons Femmes"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.82)_0%,rgba(2,6,23,0.72)_35%,rgba(15,23,42,0.45)_70%,rgba(15,23,42,0.30)_100%)]" />

          <div className="relative z-10 mx-auto flex min-h-[58vh] max-w-[1440px] items-end px-4 py-10 md:min-h-[64vh] md:px-6 lg:px-8">
            <div className="max-w-4xl pb-4 text-white md:pb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-200">
                Actualités
              </p>

              <h1 className="mt-5 text-4xl font-black leading-[0.95] tracking-tight md:text-6xl xl:text-7xl">
                Nos dernières nouvelles
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
                Suivez les temps forts, les événements, les participations
                institutionnelles et les actions de terrain menées par Horizons
                Femmes au Cameroun.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            À la une
          </p>
          <h2 className="mt-4 text-3xl font-black text-slate-900">
            {featuredArticle.title}
          </h2>
        </div>

        <article className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="h-[320px] overflow-hidden md:h-[420px]">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex items-center p-6 md:p-8 lg:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
                    {featuredArticle.category}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-900">
                    {featuredArticle.date}
                  </span>
                </div>

                <h3 className="mt-5 text-3xl font-black leading-tight text-slate-900">
                  {featuredArticle.title}
                </h3>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {featuredArticle.excerpt}
                </p>

                <button className="mt-6 rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white">
                  Lire la suite
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Plus d’actualités
          </p>
          <p className="mt-3 text-lg leading-8 text-slate-600">
            Retrouvez les autres informations marquantes, les événements de
            plaidoyer, les campagnes de sensibilisation et les participations de
            Horizons Femmes aux grands rendez-vous institutionnels.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {secondaryArticles.map((article) => (
            <article
              key={article.id}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">
                    {article.category}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-900">
                    {article.date}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-black leading-tight text-slate-900">
                  {article.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  {article.excerpt}
                </p>

                <button className="mt-6 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-900 hover:text-blue-900">
                  Lire la suite
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-[30px] bg-blue-900 p-8 text-white md:p-10">
          <h2 className="text-3xl font-black">Suivre nos actions</h2>
          <p className="mt-4 max-w-3xl leading-8 text-blue-50">
            Explorez les temps forts de l’organisation, nos initiatives
            communautaires et nos prises de parole institutionnelles pour rester
            informé des actions menées sur le terrain.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/initiatives"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900"
            >
              Voir les initiatives
            </Link>

            <Link
              to="/ressources"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white"
            >
              Voir les ressources
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}