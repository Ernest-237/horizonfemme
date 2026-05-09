import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'

const HERO_IMAGE =
  'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202025-11-26%20at%2015.07.20.jpeg'

const photos = [
  {
    src: 'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202025-11-26%20at%2015.07.20.jpeg',
    title: 'Campagne de sensibilisation',
    category: 'Sensibilisation',
  },
  {
    src: 'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202025-11-26%20at%2015.07.32.jpeg',
    title: 'Consultation Mobile',
    category: 'Terrain',
  },
  {
    src: 'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202026-01-26%20at%2003.27.05.jpeg',
    title: 'Formation des Pairs',
    category: 'Formations',
  },
  {
    src: 'https://femme.kdllogiscargo.com/assets/images/IMG_5075.JPG',
    title: 'Équipe Terrain',
    category: 'Terrain',
  },
  {
    src: 'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202026-01-26%20at%2003.17.50.jpeg',
    title: 'Distribution de Kits',
    category: 'Sensibilisation',
  },
  {
    src: 'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202026-01-26%20at%2003.30.11.jpeg',
    title: 'Formation PE',
    category: 'Formations',
  },
  {
    src: 'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202026-01-26%20at%2003.17.49.jpeg',
    title: 'Sensibilisation Communautaire',
    category: 'Sensibilisation',
  },
  {
    src: 'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202026-01-26%20at%2003.42.31.jpeg',
    title: 'Atelier Formation',
    category: 'Formations',
  },
  {
    src: 'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202026-01-26%20at%2003.44.51.jpeg',
    title: 'Visite à Domicile',
    category: 'Terrain',
  },
]

const categories = ['Tout voir', 'Sensibilisation', 'Formations', 'Terrain']

const videos = [
  { title: 'Vidéo 1 : Présentation', desc: 'Description de la vidéo à ajouter.' },
  { title: 'Vidéo 2 : Témoignages', desc: 'Description de la vidéo à ajouter.' },
  { title: 'Vidéo 3 : Activités Terrain', desc: 'Description de la vidéo à ajouter.' },
  { title: 'Vidéo 4 : Événements', desc: 'Description de la vidéo à ajouter.' },
]

export default function SagcoMediasPage() {
  const [activeCategory, setActiveCategory] = useState('Tout voir')
  const [lightbox, setLightbox] = useState(null)

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'Tout voir') return photos
    return photos.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Médias SAGCO"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-pink-900/60" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-4 py-20 md:px-6 md:py-28 xl:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-300">
            <Link to="/sagco" className="hover:text-pink-300">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-pink-300">Médias</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Notre{' '}
            <span className="bg-gradient-to-r from-pink-400 to-fuchsia-300 bg-clip-text text-transparent">
              Médiathèque
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Retour en images sur nos actions terrain.
          </p>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1300px] px-4 md:px-6 xl:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
                Galerie Photos
              </span>
              <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
                Moments forts du projet
              </h2>
              <p className="mt-3 max-w-2xl text-slate-600">
                Découvrez les moments forts de nos campagnes de sensibilisation,
                nos formations et le déploiement du Bus des Femmes sur le
                terrain.
              </p>
            </div>
            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                    activeCategory === cat
                      ? 'bg-pink-600 text-white shadow-md shadow-pink-500/30'
                      : 'border border-slate-200 bg-white text-slate-700 hover:border-pink-300'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPhotos.map((photo) => (
              <button
                key={photo.title + photo.src}
                type="button"
                onClick={() => setLightbox(photo)}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent p-5 opacity-0 transition group-hover:opacity-100">
                  <div className="text-left">
                    <span className="rounded-full bg-pink-500/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                      {photo.category}
                    </span>
                    <p className="mt-2 text-base font-bold text-white">
                      {photo.title}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS */}
      <section className="bg-slate-900 py-20 text-white md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-pink-400">
              Vidéos & Reportages
            </span>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Plongez dans l’action
            </h2>
            <p className="mt-4 text-slate-300">
              Retrouvez bientôt nos reportages vidéo. (Espace en préparation)
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {videos.map((v) => (
              <div
                key={v.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-pink-500/10 to-fuchsia-500/5 p-6 backdrop-blur"
              >
                <div className="flex aspect-video items-center justify-center rounded-2xl border border-white/10 bg-slate-950/40">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-pink-500/90 text-3xl text-white shadow-lg">
                    ▶
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-bold text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6 xl:px-8">
          <div className="rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-50 to-fuchsia-50 p-10 text-center md:p-14">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
              Espace Presse
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-4xl">
              Nos communiqués officiels
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Retrouvez ici toutes nos annonces officielles et communiqués de
              presse. Cet espace sera enrichi prochainement.
            </p>
            <Link
              to="/sagco/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-pink-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-700"
            >
              Demander un dossier de presse →
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 p-4 backdrop-blur"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
            aria-label="Fermer"
          >
            ✕
          </button>
          <div
            className="max-h-[90vh] max-w-5xl overflow-hidden rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="h-auto max-h-[80vh] w-auto object-contain"
            />
            <div className="bg-slate-950/80 p-5 text-center text-white backdrop-blur">
              <p className="text-base font-bold">{lightbox.title}</p>
              <p className="mt-1 text-xs text-pink-300">{lightbox.category}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}