import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSiteContent } from '../hooks/useSiteContent'
import SilhouetteFiligree from '../components/sagco/SilhouetteFiligree'

export default function HomePage() {
  const content = useSiteContent()
  const page = content?.home || {}

  const hero = page.hero || {}
  const editorial = page.editorial || { paragraphs: [] }
  const quickLinks = page.quickLinks || []
  const impact = page.impact || { years: [] }
  const news = page.news || { items: [] }
  const partners = page.partners || { logos: [] }
  const partnerLoop = [...partners.logos, ...partners.logos]
  const stayInformed = page.stayInformed || {}

  const slides =
    hero.slides?.length > 0
      ? hero.slides
      : [
          {
            id: 'slide-1',
            label: 'Justice sociale',
            title: "Une action tournée vers la dignité et l'équité",
            text: 'Prévention, accompagnement et réponses concrètes.',
            image: hero.image || '/assets/hf/home/hero-slide-1.jpg',
          },
        ]

  const [currentSlide, setCurrentSlide] = useState(0)

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  // Défilement automatique toutes les 6,5 secondes
  useEffect(() => {
    if (slides.length <= 1) return
    const interval = setInterval(() => {
      nextSlide()
    }, 6500)
    return () => clearInterval(interval)
  }, [slides.length, currentSlide])

  const activeSlide = slides[currentSlide]

  return (
    <div className="space-y-16 pb-8 md:space-y-20">

      {/* ════════════════════════════════════════════════════════════
          HERO — Carrousel simple gauche-droite
          ════════════════════════════════════════════════════════════ */}
      <section id="hero-home" className="relative w-full">
  <div className="relative overflow-hidden">

    {/* ── Conteneur du carrousel ── */}
    <div className="relative h-[52vh] min-h-[320px] md:h-[62vh] lg:h-[68vh] bg-hf-blue">
      {/* Slides qui se déplacent */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative h-full w-full flex-shrink-0 overflow-hidden"
          >
            {/* Image en vrai <img> pour un cover parfait sans zoom */}
            <img
              src={slide.image}
              alt={slide.label}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            {/* Overlay dégradé pour lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-hf-blue/90" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(27,63,140,0.15)_0%,rgba(27,63,140,0.10)_50%,rgba(27,63,140,0.85)_100%)]" />

            {/* Filigrane silhouette (droit, très subtil) */}
            <div className="pointer-events-none absolute right-0 top-1/4 hidden h-[75%] w-[380px] lg:block">
              <SilhouetteFiligree opacity={0.07} className="h-full w-full" />
            </div>
          </div>
        ))}
      </div>

      {/* Flèches de navigation gauche/droite */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20 md:left-8"
        aria-label="Slide précédent"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white backdrop-blur transition hover:bg-white/20 md:right-8"
        aria-label="Slide suivant"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clipRule="evenodd" />
        </svg>
      </button>

      {/* Compteur en bas à droite */}
      <div className="absolute bottom-5 right-5 z-10 flex items-center gap-6 md:right-8">
        <span className="text-sm font-semibold tracking-[0.18em] text-white/70">
          {String(currentSlide + 1).padStart(2, '0')} —{' '}
          {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </div>

    {/* ── TEXTE EN BAS DES VISUELS — sur fond bleu marine ── */}
    <div className="bg-hf-blue">
      <div className="mx-auto max-w-[1440px] px-4 py-8 md:px-6 md:py-10 lg:px-8">
        <div className="grid items-end gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:gap-12">

          {/* Gauche — contenu du slide actif */}
          <div className="text-white">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-hf-orange" />
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-hf-orange">
                {activeSlide.label}
              </p>
            </div>

            <h1 className="mt-3 text-2xl font-black leading-[1.12] tracking-tight md:text-3xl lg:text-4xl">
              {activeSlide.title}
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200 md:text-base">
              {activeSlide.text}
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                to="/a-propos"
                className="inline-flex items-center gap-2 rounded-full bg-hf-orange px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-hf-orange/30 transition hover:bg-hf-orange-dark"
              >
                {hero.primaryCta || "Découvrir l'ONG"}
                <span aria-hidden>→</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/5 px-5 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-hf-blue"
              >
                Nous contacter
              </Link>
            </div>
          </div>

          {/* Droite — mini-stats institutionnelles */}
          <div className="hidden lg:block">
            <div className="rounded-2xl border border-white/15 bg-white/8 p-5 backdrop-blur">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-hf-orange">
                Au service de la femme et de la jeune fille
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/15 pt-4">
                {[
                  { value: '20+', label: 'Années' },
                  { value: '4', label: 'Régions' },
                  { value: '30+', label: 'Projets' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl font-black text-hf-orange">{stat.value}</p>
                    <p className="mt-1 text-[9px] font-bold uppercase tracking-wider text-slate-300">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
              
                <a href="#edito-home"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-white/80 transition hover:text-hf-orange"
              >
                Lire l'édito <span aria-hidden>↓</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>
      {/* ════════════════════════════════════════════════════════════
          EDITO
          ════════════════════════════════════════════════════════════ */}
      <section id="edito-home" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-[30px] border border-slate-200 shadow-sm">
            <img
              src={editorial.image}
              alt="Présidente du Conseil d'Administration — Horizons Femmes"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-hf-blue/75 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="rounded-[20px] bg-white/15 p-4 text-white backdrop-blur">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
                  {editorial.signatureLabel}
                </p>
                <p className="mt-2 text-base font-bold">{editorial.signatureName}</p>
                <p className="text-sm text-slate-100">{editorial.signatureRole}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
              {editorial.label}
            </p>
            {/* ↓ Titre changé : "Une vision engagée pour l’égalité, la justice et l’inclusion" (compte rendu p.3) */}
            <h2 className="mt-4 text-3xl font-black text-hf-blue">
              Une vision engagée pour l’égalité, la justice et l’inclusion
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-700">
              {editorial.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION "À PROPOS DE L'ONG" SUPPRIMÉE
          ════════════════════════════════════════════════════════════ */}

            {/* ════════════════════════════════════════════════════════════
          QUICK LINKS
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {quickLinks.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="group flex flex-col overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hf-blue/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-2xl font-black text-white">{item.title}</p>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="flex-1 leading-7 text-slate-600">{item.text}</p>
                {/* "Lire la suite" ajouté ici */}
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-hf-blue transition group-hover:text-hf-orange">
                  Lire la suite
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          IMPACT / TIMELINE
          ════════════════════════════════════════════════════════════ */}
      <section id="impact-home" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">{impact.label}</p>
            <h2 className="mt-4 text-3xl font-black text-hf-blue">{impact.title}</h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
            <p className="mt-4 text-lg leading-8 text-slate-700">{impact.text}</p>
          </div>
          <div className="mt-8 overflow-x-auto">
            <div className="flex min-w-max gap-4 pb-2">
              {impact.years.map((item) => (
                <div
                  key={`${item.year}-${item.title}`}
                  className="w-[290px] rounded-[24px] border-2 border-slate-100 bg-slate-50 p-5 transition hover:border-hf-orange"
                >
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">{item.year}</p>
                  <h3 className="mt-3 text-xl font-black text-hf-blue">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          ACTUALITÉS
          ════════════════════════════════════════════════════════════ */}
      <section id="actualites-home" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">{news.label}</p>
            <h2 className="mt-4 text-3xl font-black text-hf-blue">{news.title}</h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
            <p className="mt-4 text-lg leading-8 text-slate-700">{news.text}</p>
          </div>
          <Link
            to="/actualites"
            className="hidden rounded-full border-2 border-hf-blue bg-white px-5 py-3 text-sm font-bold text-hf-blue transition hover:bg-hf-blue hover:text-white lg:inline-flex"
          >
            Voir toutes les actualités
          </Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">
            <div className="h-[320px] overflow-hidden">
              <img src={news.featured?.image} alt={news.featured?.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-6 md:p-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-hf-orange/15 px-3 py-1 text-sm font-bold text-hf-orange-dark">
                  {news.featured?.category}
                </span>
                <span className="text-sm font-bold uppercase tracking-[0.18em] text-hf-blue">
                  {news.featured?.year}
                </span>
              </div>
              <h3 className="mt-4 text-3xl font-black leading-tight text-hf-blue">{news.featured?.title}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-700">{news.featured?.excerpt}</p>
            </div>
          </article>

          <div className="space-y-6">
            {news.items.map((item) => (
              <article
                key={item.title}
                className="grid gap-4 rounded-[26px] border border-slate-200 bg-white p-4 shadow-sm transition hover:border-hf-orange sm:grid-cols-[140px_1fr]"
              >
                <div className="overflow-hidden rounded-[18px]">
                  <img src={item.image} alt={item.title} className="h-full min-h-[120px] w-full object-cover" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-hf-orange/15 px-3 py-1 text-xs font-bold text-hf-orange-dark">
                      {item.category}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-hf-blue">{item.year}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-black leading-tight text-hf-blue">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SECTION "NOS INITIATIVES" SUPPRIMÉE
          ════════════════════════════════════════════════════════════ */}

      {/* ════════════════════════════════════════════════════════════
          PARTENAIRES
          ════════════════════════════════════════════════════════════ */}
      <section id="partenaires-home" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">{partners.label}</p>
            <h2 className="mt-4 text-3xl font-black text-hf-blue">{partners.title}</h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
          </div>
          <div className="relative mt-8 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-24" />
            <div className="partner-marquee-track flex w-max gap-4 md:gap-6">
              {partnerLoop.map((item, index) => (
                <div
                  key={`${item.alt}-${index}`}
                  className="flex h-28 w-[220px] shrink-0 items-center justify-center rounded-[22px] border border-slate-200 bg-slate-50 p-4 md:w-[250px]"
                >
                  <img src={item.src} alt={item.alt} className="max-h-14 w-auto object-contain md:max-h-16" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          STAY INFORMED CTA
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[30px] bg-hf-blue p-8 text-white shadow-xl md:p-10">
          <div className="pointer-events-none absolute -right-12 -bottom-12 h-[320px] w-[320px]">
            <SilhouetteFiligree opacity={0.1} className="h-full w-full" />
          </div>
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-hf-orange">
              Restez informés
            </p>
            <h2 className="mt-3 text-3xl font-black">{stayInformed.title}</h2>
            <p className="mt-4 max-w-3xl leading-8 text-slate-200">{stayInformed.text}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/actualites"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-hf-blue transition hover:bg-slate-100"
              >
                {stayInformed.primaryCta}
              </Link>
              <Link
                to="/don"
                className="rounded-full bg-hf-orange px-6 py-3 text-sm font-bold text-white transition hover:bg-hf-orange-dark"
              >
                {stayInformed.secondaryCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}