import { Link } from 'react-router-dom'
import { useMemo, useState } from 'react'


const HERO_IMAGE =
  'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202025-11-26%20at%2015.07.20.jpeg'

const photos = [
  { src: 'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202025-11-26%20at%2015.07.20.jpeg', title: 'Campagne de sensibilisation', category: 'Sensibilisation' },
  { src: 'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202025-11-26%20at%2015.07.32.jpeg', title: 'Consultation Mobile', category: 'Terrain' },
  { src: 'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202026-01-26%20at%2003.27.05.jpeg', title: 'Formation des Pairs', category: 'Formations' },
  { src: 'https://femme.kdllogiscargo.com/assets/images/IMG_5075.JPG', title: 'Équipe Terrain', category: 'Terrain' },
  { src: 'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202026-01-26%20at%2003.17.50.jpeg', title: 'Distribution de Kits', category: 'Sensibilisation' },
  { src: 'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202026-01-26%20at%2003.30.11.jpeg', title: 'Formation PE', category: 'Formations' },
  { src: 'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202026-01-26%20at%2003.17.49.jpeg', title: 'Sensibilisation Communautaire', category: 'Sensibilisation' },
  { src: 'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202026-01-26%20at%2003.42.31.jpeg', title: 'Atelier Formation', category: 'Formations' },
  { src: 'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202026-01-26%20at%2003.44.51.jpeg', title: 'Visite à Domicile', category: 'Terrain' },
]

const categories = ['Tout voir', 'Sensibilisation', 'Formations', 'Terrain']

/*
  ─────────────────────────────────────────────────────────────────
  COMMENT AJOUTER UN LIEN VIDÉO :

  1. Va sur la vidéo YouTube → Partager → Intégrer
  2. Dans le <iframe>, copie uniquement le contenu de src="..."
     Exemple : src="https://www.youtube.com/embed/IDENTIFIANT"
  3. Colle ce lien dans le champ `src` ci-dessous

  Si tu n'as pas encore de vidéo → laisse src: null
  La card affichera un placeholder élégant au lieu d'un player vide.

  Tu peux aussi mettre un lien Vimeo :
  https://player.vimeo.com/video/IDENTIFIANT
  ─────────────────────────────────────────────────────────────────
*/
const videos = [
  {
    title: 'Présentation du projet SAGCO',
    desc: "Découvrez les objectifs, les partenaires et l'approche du projet.",
    badge: 'Présentation',
    src: "https://youtu.be/Zez0_Q0ocZ8?si=Z4Fi4AoJ7A33uU7E", // ← Remplace null par ton lien embed YouTube
  },
  {
    title: 'Témoignages de terrain',
    desc: 'Les voix des bénéficiaires et des pairs éducateurs engagés dans le projet.',
    badge: 'Témoignages',
    src: "https://youtu.be/-YL-6DFm0Gg?si=J0AAmCfjYD5kF-eT", // ← Remplace null par ton lien embed YouTube
  },
  {
    title: 'Activités terrain',
    desc: 'Campagnes de sensibilisation, consultations mobiles et distribution de kits.',
    badge: 'Terrain',
    src: null, // ← Remplace null par ton lien embed YouTube
  },
  {
    title: 'Événements & formations',
    desc: 'Ateliers de formation des pairs éducateurs et rencontres institutionnelles.',
    badge: 'Événements',
    src: null, // ← Remplace null par ton lien embed YouTube
  },
]

/* ─── Composant VideoCard ────────────────────────────────────────
   - Si src fourni → <iframe> YouTube/Vimeo embed direct
   - Si src null   → placeholder élégant avec badge "Bientôt"
   ─────────────────────────────────────────────────────────────── */
function VideoCard({ video, large = false }) {
  const [playing, setPlaying] = useState(false)

  const aspectClass = large ? 'aspect-video' : 'aspect-video'

  return (
    <div className="group overflow-hidden rounded-2xl border-2 border-white/15 bg-white/5 backdrop-blur transition hover:border-[#F4952F]/60 hover:shadow-lg hover:shadow-[#F4952F]/10">

      {/* Zone vidéo */}
      <div className={`relative ${aspectClass} overflow-hidden`}>
        {video.src && playing ? (
          /* ── Player embed actif ── */
          <iframe
            src={`${video.src}?autoplay=1&rel=0&modestbranding=1`}
            title={video.title}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : video.src ? (
          /* ── Thumbnail cliquable (vidéo dispo mais pas encore lancée) ── */
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex w-full items-center justify-center bg-[#1B3F8C]/80"
            aria-label={`Lire ${video.title}`}
          >
            {/* Thumbnail YouTube auto si on peut la déduire */}
            <div className="group-hover/btn flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/80 bg-[#F4952F] text-white shadow-2xl transition hover:scale-110 hover:bg-[#e08522]">
              <span className="ml-1 text-3xl">▶</span>
            </div>
          </button>
        ) : (
          /* ── Placeholder élégant (pas encore de vidéo) ── */
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#1B3F8C]/60 p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/30 bg-white/10 text-4xl">
              🎬
            </div>
            <span className="rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white/80 backdrop-blur">
              Bientôt disponible
            </span>
          </div>
        )}
      </div>

      {/* Métadonnées */}
      <div className="p-5">
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-[#F4952F]/25 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#F4952F]">
            {video.badge}
          </span>
          {!video.src && (
            <span className="rounded-full bg-white/10 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white/50">
              En préparation
            </span>
          )}
        </div>
        <h3 className={`mt-3 font-black text-white ${large ? 'text-xl' : 'text-base'}`}>
          {video.title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          {video.desc}
        </p>
      </div>
    </div>
  )
}

export default function SagcoMediasPage() {
  const [activeCategory, setActiveCategory] = useState('Tout voir')
  const [lightbox, setLightbox] = useState(null)

  const filteredPhotos = useMemo(() => {
    if (activeCategory === 'Tout voir') return photos
    return photos.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  // Sépare les 2 premières (grandes) des 2 suivantes (petites)
  const [featuredVideos, secondaryVideos] = [videos.slice(0, 2), videos.slice(2)]

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1B3F8C]">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="" className="h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3F8C] via-[#1B3F8C]/85 to-[#1B3F8C]/40" />
        </div>
      

        <div className="relative mx-auto max-w-[1440px] px-4 py-20 md:px-6 md:py-28 xl:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-200">
            <Link to="/sagco" className="hover:text-[#F4952F]">Accueil</Link>
            <span>/</span>
            <span className="text-[#F4952F]">Médias</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Notre <span className="text-[#F4952F]">Médiathèque</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-100">
            Retour en images et en vidéos sur nos actions terrain.
          </p>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1300px] px-4 md:px-6 xl:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
                Galerie Photos
              </span>
              <h2 className="mt-3 text-3xl font-black text-[#1B3F8C] md:text-4xl">
                Moments forts du projet
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
              <p className="mt-3 max-w-2xl text-slate-600">
                Découvrez les moments forts de nos campagnes de sensibilisation,
                nos formations et le déploiement du Bus des Femmes sur le terrain.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    activeCategory === cat
                      ? 'bg-[#1B3F8C] text-white shadow-md'
                      : 'border-2 border-slate-200 bg-white text-slate-700 hover:border-[#F4952F]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPhotos.map((photo) => (
              <button
                key={photo.title + photo.src}
                type="button"
                onClick={() => setLightbox(photo)}
                className="group relative overflow-hidden rounded-2xl border-2 border-slate-100 bg-white shadow-sm transition hover:border-[#F4952F] hover:shadow-xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#1B3F8C]/90 via-[#1B3F8C]/20 to-transparent p-5 opacity-0 transition group-hover:opacity-100">
                  <div className="text-left">
                    <span className="rounded-full bg-[#F4952F] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
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

      {/* ════════════════════════════════════════════════════════════
          VIDÉOS — Layout repensé : 2 grandes + 2 petites
          ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-[#1B3F8C] py-20 text-white md:py-24">
       

        <div className="relative mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          {/* En-tête section */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
              Vidéos & Reportages
            </span>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Plongez dans l'action
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
            <p className="mt-4 text-slate-200">
              Pour ajouter une vidéo, remplace{' '}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-[#F4952F]">
                src: null
              </code>{' '}
              par un lien embed YouTube dans le tableau{' '}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-[#F4952F]">
                videos
              </code>
              .
            </p>
          </div>

          {/* 2 grandes vidéos */}
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {featuredVideos.map((v) => (
              <VideoCard key={v.title} video={v} large />
            ))}
          </div>

          {/* 2 petites vidéos */}
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {secondaryVideos.map((v) => (
              <VideoCard key={v.title} video={v} />
            ))}
          </div>

          {/* Tip contextuel */}
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur">
            <p className="text-sm text-slate-300">
              💡 <strong className="text-white">Pour ajouter une vidéo YouTube</strong> :
              sur la vidéo → <em>Partager → Intégrer</em> → copie l'URL dans{' '}
              <code className="rounded bg-white/10 px-1.5 py-0.5 text-[#F4952F]">src</code>{' '}
              du tableau <code className="rounded bg-white/10 px-1.5 py-0.5 text-[#F4952F]">videos</code>.
            </p>
          </div>
        </div>
      </section>

      {/* PRESS */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6 xl:px-8">
          <div className="rounded-3xl border-2 border-[#F4952F]/30 bg-[#F4952F]/5 p-10 text-center md:p-14">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
              Espace Presse
            </span>
            <h2 className="mt-3 text-3xl font-black text-[#1B3F8C] md:text-4xl">
              Nos communiqués officiels
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
            <p className="mx-auto mt-4 max-w-xl text-slate-600">
              Retrouvez ici toutes nos annonces officielles et communiqués de
              presse. Cet espace sera enrichi prochainement.
            </p>
            <Link
              to="/sagco/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1B3F8C] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#163474]"
            >
              Demander un dossier de presse →
            </Link>
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox ? (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-[#1B3F8C]/95 p-4 backdrop-blur"
          onClick={() => setLightbox(null)}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={() => setLightbox(null)}
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#F4952F] bg-[#F4952F] text-white transition hover:bg-[#e08522]"
            aria-label="Fermer"
          >
            ✕
          </button>
          <div
            className="max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={lightbox.src}
              alt={lightbox.title}
              className="h-auto max-h-[80vh] w-auto object-contain"
            />
            <div className="bg-[#1B3F8C] p-5 text-center text-white">
              <p className="text-base font-bold">{lightbox.title}</p>
              <p className="mt-1 text-xs text-[#F4952F]">{lightbox.category}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}