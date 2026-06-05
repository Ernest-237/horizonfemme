import { Link } from 'react-router-dom'
import { useState } from 'react'

const HERO_IMAGE = '/assets/hf/sagco-multimedia-hero.jpg' // ← Remplace par ton image

const tabs = [
  { id: 'photos', label: 'Photos', icon: '📸' },
  { id: 'videos', label: 'Vidéos', icon: '🎬' },
  { id: 'podcasts', label: 'Podcasts', icon: '🎙️' },
]

const photos = [
  { id: 1, title: 'Lancement du Bus des Femmes', date: 'Mai 2026', image: '/assets/hf/sagco-photo-1.jpg' },
  { id: 2, title: 'Formation des pairs éducatrices', date: 'Avril 2026', image: '/assets/hf/sagco-photo-2.jpg' },
  { id: 3, title: 'Campagne de sensibilisation Douala', date: 'Mars 2026', image: '/assets/hf/sagco-photo-3.jpg' },
  { id: 4, title: 'Atelier de plaidoyer MINSANTÉ', date: 'Mars 2026', image: '/assets/hf/sagco-photo-4.jpg' },
  { id: 5, title: 'Distribution de préservatifs', date: 'Février 2026', image: '/assets/hf/sagco-photo-5.jpg' },
  { id: 6, title: 'Visite des districts de santé', date: 'Janvier 2026', image: '/assets/hf/sagco-photo-6.jpg' },
]

const videos = [
  {
    id: 1,
    title: 'Témoignage d\'une bénéficiaire du Bus des Femmes',
    date: 'Mai 2026',
    thumbnail: '/assets/hf/lutte.jpg',
    url: '#',
  },
  {
    id: 2,
    title: 'Reportage : le projet SAGCO sur le terrain',
    date: 'Avril 2026',
    thumbnail: '/assets/hf/lutte.jpg',
    url: '#',
  },
  {
    id: 3,
    title: 'Interview de la coordinatrice du projet',
    date: 'Mars 2026',
    thumbnail: '/assets/hf/lutte.jpg',
    url: '#',
  },
]

const podcasts = [
  {
    id: 1,
    title: 'Épisode 1 — La santé des TS au Cameroun : état des lieux',
    date: 'Mai 2026',
    duree: '24 min',
  },
  {
    id: 2,
    title: 'Épisode 2 — Comment le Bus des Femmes change des vies',
    date: 'Avril 2026',
    duree: '18 min',
  },
  {
    id: 3,
    title: 'Épisode 3 — Plaidoyer et droits humains : le combat continue',
    date: 'Mars 2026',
    duree: '22 min',
  },
]

export default function SagcoMultimediaPage() {
  const [activeTab, setActiveTab] = useState('photos')

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
            <span className="text-[#F4952F]">Multimédia</span>
          </nav>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            <span className="text-[#F4952F]">Multimédia</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-100">
            Photos, vidéos et podcasts : plongez au cœur des activités du projet SAGCO.
          </p>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          TABS DE NAVIGATION
          ════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-10">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition ${
                  activeTab === tab.id
                    ? 'bg-[#1B3F8C] text-white shadow-md'
                    : 'border-2 border-slate-200 bg-white text-slate-700 hover:border-[#F4952F]'
                }`}
              >
                <span aria-hidden>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          CONTENU PHOTOS
          ════════════════════════════════════════════════════════════ */}
      {activeTab === 'photos' && (
        <section className="bg-slate-50 py-20 md:py-24">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
                Galerie photo
              </span>
              <h2 className="mt-4 text-3xl font-black text-[#1B3F8C] md:text-4xl">
                Le projet en images
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {photos.map((photo) => (
                <div
                  key={photo.id}
                  className="group relative overflow-hidden rounded-2xl border-2 border-slate-100 bg-white shadow-sm transition hover:border-[#F4952F]"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={photo.image}
                      alt={photo.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B3F8C]/80 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white translate-y-4 transition duration-300 group-hover:translate-y-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#F4952F]">
                      {photo.date}
                    </p>
                    <p className="mt-1 text-sm font-bold">{photo.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════════
          CONTENU VIDÉOS
          ════════════════════════════════════════════════════════════ */}
      {activeTab === 'videos' && (
        <section className="bg-slate-50 py-20 md:py-24">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
                Vidéothèque
              </span>
              <h2 className="mt-4 text-3xl font-black text-[#1B3F8C] md:text-4xl">
                Nos vidéos
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {videos.map((video) => (
                <div
                  key={video.id}
                  className="group overflow-hidden rounded-2xl border-2 border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:border-[#F4952F]"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-[#1B3F8C]/20 transition group-hover:bg-[#1B3F8C]/40">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#F4952F] text-2xl text-white shadow-lg transition group-hover:scale-110">
                        ▶
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#F4952F]">
                      {video.date}
                    </p>
                    <h3 className="mt-2 text-lg font-black text-[#1B3F8C]">
                      {video.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════════
          CONTENU PODCASTS
          ════════════════════════════════════════════════════════════ */}
      {activeTab === 'podcasts' && (
        <section className="bg-slate-50 py-20 md:py-24">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
                Podcasts
              </span>
              <h2 className="mt-4 text-3xl font-black text-[#1B3F8C] md:text-4xl">
                À écouter
              </h2>
              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
            </div>

            <div className="mt-12 mx-auto max-w-3xl space-y-4">
              {podcasts.map((podcast) => (
                <div
                  key={podcast.id}
                  className="group flex items-center gap-5 rounded-2xl border-2 border-slate-100 bg-white p-6 shadow-sm transition hover:border-[#F4952F]"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1B3F8C] text-2xl text-white shadow-md group-hover:bg-[#F4952F]">
                    🎙️
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-black text-[#1B3F8C]">
                      {podcast.title}
                    </h3>
                    <div className="mt-2 flex items-center gap-4 text-xs text-slate-500">
                      <span>{podcast.date}</span>
                      <span className="flex items-center gap-1">⏱ {podcast.duree}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#1B3F8C] text-[#1B3F8C] transition hover:bg-[#F4952F] hover:border-[#F4952F] hover:text-white"
                    aria-label="Écouter le podcast"
                  >
                    ▶
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════════════════════════════════════════════════
          CTA BAS
          ════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6 xl:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#1B3F8C] p-10 text-white shadow-2xl md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[2fr_1fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
                  Suivez-nous
                </span>
                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  Restez connectés
                </h2>
                <p className="mt-4 max-w-xl text-slate-200">
                  Pour ne rien manquer des actualités, des photos et des vidéos du projet SAGCO,
                  suivez-nous sur nos réseaux sociaux.
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
                  to="/sagco/actualites"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#1B3F8C]"
                >
                  Voir les actualités
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}