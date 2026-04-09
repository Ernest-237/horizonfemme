import { Link } from 'react-router-dom'

const HERO_IMAGE = '/assets/hf/media/media-hero.jpg'

const mediaCategories = [
  {
    title: 'Photothèque',
    text: "Découvrez les images de terrain, les événements, les ateliers et les temps forts de Horizons Femmes.",
    image: '/assets/hf/media/category-photo.jpg',
  },
  {
    title: 'Vidéothèque',
    text: "Retrouvez les vidéos institutionnelles, les capsules de sensibilisation et les interventions publiques.",
    image: '/assets/hf/media/category-video.jpg',
  },
  {
    title: 'Podcasts & audio',
    text: "Écoutez les messages, témoignages, plaidoyers et contenus sonores produits par l’organisation.",
    image: '/assets/hf/media/category-audio.jpg',
  },
]

const featuredMedia = {
  badge: 'À la une',
  title: 'Des contenus multimédias au service de la sensibilisation et de la mobilisation',
  text:
    "La médiathèque de Horizons Femmes rassemble des contenus visuels et audiovisuels qui mettent en valeur les actions de terrain, les campagnes, les activités communautaires, les événements institutionnels et les messages de plaidoyer.",
  image: '/assets/hf/media/featured-media.jpg',
}

const mediaItems = [
  {
    type: 'Photo',
    title: 'Galerie des activités communautaires',
    text:
      "Une sélection d’images illustrant les interventions de proximité, les formations, les ateliers et les actions de sensibilisation.",
    image: '/assets/hf/media/media-1.jpg',
  },
  {
    type: 'Vidéo',
    title: 'Capsules de sensibilisation',
    text:
      "Des vidéos courtes pour informer, sensibiliser et renforcer la visibilité des actions menées au sein des communautés.",
    image: '/assets/hf/media/media-2.jpg',
  },
  {
    type: 'Audio',
    title: 'Témoignages et messages audio',
    text:
      "Des contenus audio mettant en avant les voix des bénéficiaires, des équipes et des partenaires.",
    image: '/assets/hf/media/media-3.jpg',
  },
  {
    type: 'Photo',
    title: 'Événements et cérémonies',
    text:
      "Retour en images sur les rencontres, forums, campagnes institutionnelles et participations officielles.",
    image: '/assets/hf/media/media-4.jpg',
  },
  {
    type: 'Vidéo',
    title: 'Plaidoyer & communication',
    text:
      "Des supports vidéo destinés à renforcer la communication, le plaidoyer et la mobilisation autour des causes portées par Horizons Femmes.",
    image: '/assets/hf/media/media-5.jpg',
  },
  {
    type: 'Photo',
    title: 'Archives visuelles',
    text:
      "Une mémoire visuelle des projets, des bénéficiaires et des temps forts qui ont marqué l’évolution de l’organisation.",
    image: '/assets/hf/media/media-6.jpg',
  },
]

export default function MediathequePage() {
  return (
    <div className="space-y-12 pb-6 md:space-y-16">
      <section className="relative overflow-hidden">
        <div className="relative min-h-[58vh] md:min-h-[66vh]">
          <img
            src={HERO_IMAGE}
            alt="Médiathèque Horizons Femmes"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.82)_0%,rgba(2,6,23,0.72)_35%,rgba(15,23,42,0.45)_70%,rgba(15,23,42,0.30)_100%)]" />

          <div className="relative z-10 mx-auto flex min-h-[58vh] max-w-[1440px] items-end px-4 py-10 md:min-h-[66vh] md:px-6 lg:px-8">
            <div className="max-w-4xl pb-4 text-white md:pb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-200">
                Médiathèque
              </p>

              <h1 className="mt-5 text-4xl font-black leading-[0.95] tracking-tight md:text-6xl xl:text-7xl">
                Images, vidéos et contenus multimédias
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
                Explorez les contenus visuels et audiovisuels de Horizons
                Femmes : activités de terrain, événements, campagnes,
                sensibilisation, témoignages et archives institutionnelles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Nos espaces
          </p>
          <h2 className="mt-4 text-3xl font-black text-slate-900">
            Une médiathèque pensée pour valoriser l’impact
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Cette page regroupe différents formats de contenus afin de rendre
            visibles les actions, les messages et les temps forts de
            l’organisation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mediaCategories.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-black text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="h-[320px] overflow-hidden md:h-[420px]">
              <img
                src={featuredMedia.image}
                alt={featuredMedia.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex items-center p-6 md:p-8 lg:p-10">
              <div>
                <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
                  {featuredMedia.badge}
                </span>

                <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900">
                  {featuredMedia.title}
                </h2>

                <p className="mt-5 text-lg leading-8 text-slate-600">
                  {featuredMedia.text}
                </p>

                <button className="mt-6 rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white">
                  Explorer la médiathèque
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Contenus disponibles
          </p>
          <p className="mt-3 text-lg leading-8 text-slate-600">
            Parcourez une sélection de contenus visuels et multimédias à
            intégrer ou enrichir au fur et à mesure de la vie du projet.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {mediaItems.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="p-6">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-orange-700">
                  {item.type}
                </span>

                <h3 className="mt-4 text-2xl font-black leading-tight text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-slate-600">{item.text}</p>

                <button className="mt-6 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-900 hover:text-blue-900">
                  Voir plus
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-[30px] bg-blue-900 p-8 text-white md:p-10">
          <h2 className="text-3xl font-black">Valoriser nos actions autrement</h2>
          <p className="mt-4 max-w-3xl leading-8 text-blue-50">
            La médiathèque permet de rendre visibles les actions de terrain,
            les campagnes, les événements et les voix qui font vivre Horizons
            Femmes au quotidien.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/actualites"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900"
            >
              Voir les actualités
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