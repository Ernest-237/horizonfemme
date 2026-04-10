import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSiteContent } from '../hooks/useSiteContent'

export default function HomePage() {
  const content = useSiteContent()
  const page = content?.home || {}

  const hero = page.hero || {}
  const editorial = page.editorial || { paragraphs: [] }
  const aboutSection = page.aboutSection || { points: [] }
  const quickLinks = page.quickLinks || []
  const impact = page.impact || { years: [] }
  const news = page.news || { items: [] }
  const projectsPreview = page.projectsPreview || { items: [] }
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

  useEffect(() => {
    if (slides.length <= 1) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5500)
    return () => clearInterval(interval)
  }, [slides.length])

  const activeSlide = slides[currentSlide]

  return (
    <div className="space-y-10 pb-6 md:space-y-14">

      {/* ── HERO — pleine hauteur, éléments centrés ── */}
      <section id="hero-home" className="relative w-full">
        <div className="relative min-h-screen overflow-hidden">

          {/* Fond */}
          <div className="absolute inset-0">
            {slides.map((slide, index) => (
              <img
                key={slide.id}
                src={slide.image}
                alt={slide.title}
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ${
                  index === currentSlide ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.88)_0%,rgba(2,6,23,0.78)_30%,rgba(15,23,42,0.52)_65%,rgba(15,23,42,0.35)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.14),transparent_25%)]" />
          </div>

          {/* Contenu — centré verticalement */}
          <div className="relative z-10 mx-auto flex min-h-screen max-w-[1440px] items-center px-4 py-20 md:px-6 lg:px-8">
            <div className="grid w-full items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">

              {/* Gauche — texte */}
              <div className="max-w-3xl text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">
                  {hero.eyebrow}
                </p>

                <h1 className="mt-3 text-2xl font-black leading-[1.08] tracking-tight md:text-3xl lg:text-4xl">
                  {hero.title}
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-100">
                  {hero.description}
                </p>

                <p className="mt-2 max-w-xl text-sm leading-7 text-slate-200">
                  {hero.secondaryDescription}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <Link
                    to="/a-propos"
                    className="rounded-full bg-orange-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-600"
                  >
                    {hero.primaryCta}
                  </Link>
                  <Link
                    to="/initiatives"
                    className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
                  >
                    {hero.secondaryCta}
                  </Link>
                </div>
              </div>

              {/* Droite — carte */}
              <div className="lg:justify-self-end">
                <div className="w-full max-w-sm rounded-[24px] border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
                    {hero.cardTitle}
                  </p>

                  <p className="mt-2 text-xs leading-6 text-blue-50">
                    {hero.cardText}
                  </p>

                  <div className="mt-3 rounded-[18px] border border-white/10 bg-white/8 p-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
                      {activeSlide.label}
                    </p>
                    <h2 className="mt-1.5 text-base font-black leading-snug">
                      {activeSlide.title}
                    </h2>
                    <p className="mt-1.5 text-xs leading-6 text-slate-100">
                      {activeSlide.text}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-4">
                    <div className="flex gap-2">
                      {slides.map((slide, index) => (
                        <button
                          key={slide.id}
                          type="button"
                          onClick={() => setCurrentSlide(index)}
                          className={`h-2.5 rounded-full transition ${
                            index === currentSlide ? 'w-8 bg-orange-400' : 'w-2.5 bg-white/40'
                          }`}
                          aria-label={`Aller au slide ${index + 1}`}
                        />
                      ))}
                    </div>
                    <p className="text-xs font-medium text-slate-200">
                      {String(currentSlide + 1).padStart(2, '0')} /{' '}
                      {String(slides.length).padStart(2, '0')}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section id="edito-home" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <div className="relative min-h-[360px] overflow-hidden rounded-[30px] border border-slate-200 shadow-sm">
            <img
              src={editorial.image}
              alt="Photo PCA Horizons Femmes"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="rounded-[20px] bg-white/12 p-4 text-white backdrop-blur">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">
                  {editorial.signatureLabel}
                </p>
                <p className="mt-2 text-base font-semibold">{editorial.signatureName}</p>
                <p className="text-sm text-slate-100">{editorial.signatureRole}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              {editorial.label}
            </p>
            <h2 className="mt-4 text-3xl font-black text-slate-900">{editorial.title}</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
              {editorial.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="about-home" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              {aboutSection.label}
            </p>
            <h2 className="mt-4 text-3xl font-black text-slate-900">{aboutSection.title}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{aboutSection.text}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {aboutSection.points.map((item) => (
                <div key={item} className="rounded-[18px] bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-7">
              <Link to="/a-propos" className="inline-flex rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white">
                Découvrir l'ONG
              </Link>
            </div>
          </div>

          <div className="relative min-h-[340px] overflow-hidden rounded-[30px] border border-slate-200 shadow-sm">
            <img
              src={aboutSection.image}
              alt="Aperçu de l'ONG Horizons Femmes"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {quickLinks.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-2xl font-black text-white">{item.title}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="leading-7 text-slate-600">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section id="impact-home" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">{impact.label}</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900">{impact.title}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{impact.text}</p>
          </div>
          <div className="mt-8 overflow-x-auto">
            <div className="flex min-w-max gap-4 pb-2">
              {impact.years.map((item) => (
                <div key={`${item.year}-${item.title}`} className="w-[290px] rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">{item.year}</p>
                  <h3 className="mt-3 text-xl font-black text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="actualites-home" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">{news.label}</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900">{news.title}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{news.text}</p>
          </div>
          <Link to="/actualites" className="hidden rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 lg:inline-flex">
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
                <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">{news.featured?.category}</span>
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-900">{news.featured?.year}</span>
              </div>
              <h3 className="mt-4 text-3xl font-black leading-tight text-slate-900">{news.featured?.title}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">{news.featured?.excerpt}</p>
            </div>
          </article>

          <div className="space-y-6">
            {news.items.map((item) => (
              <article key={item.title} className="grid gap-4 rounded-[26px] border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[140px_1fr]">
                <div className="overflow-hidden rounded-[18px]">
                  <img src={item.image} alt={item.title} className="h-full min-h-[120px] w-full object-cover" />
                </div>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">{item.category}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-900">{item.year}</span>
                  </div>
                  <h3 className="mt-3 text-xl font-black leading-tight text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="initiatives-home" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">{projectsPreview.label}</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900">{projectsPreview.title}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{projectsPreview.text}</p>
          </div>
          <Link to="/initiatives" className="hidden rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 lg:inline-flex">
            Voir les initiatives
          </Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-sm">
            <div className="h-[320px] overflow-hidden">
              <img src={projectsPreview.featured?.image} alt={projectsPreview.featured?.title} className="h-full w-full object-cover" />
            </div>
            <div className="p-6 md:p-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">{projectsPreview.featured?.badge}</span>
              </div>
              <h3 className="mt-4 text-3xl font-black leading-tight text-slate-900">{projectsPreview.featured?.title}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">{projectsPreview.featured?.text}</p>
              <Link to="/initiatives" className="mt-6 inline-flex rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white">
                {projectsPreview.featured?.cta}
              </Link>
            </div>
          </article>

          <div className="grid gap-6 md:grid-cols-2">
            {projectsPreview.items.map((item) => (
              <article key={item.title} className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm">
                <div className="h-44 overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">{item.badge}</p>
                  <h3 className="mt-3 text-2xl font-black leading-tight text-slate-900">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="partenaires-home" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">{partners.label}</p>
            <h2 className="mt-4 text-3xl font-black text-slate-900">{partners.title}</h2>
          </div>
          <div className="relative mt-8 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-24" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-24" />
            <div className="partner-marquee-track flex w-max gap-4 md:gap-6">
              {partnerLoop.map((item, index) => (
                <div key={`${item.alt}-${index}`} className="flex h-28 w-[220px] shrink-0 items-center justify-center rounded-[22px] border border-slate-200 bg-slate-50 p-4 md:w-[250px]">
                  <img src={item.src} alt={item.alt} className="max-h-14 w-auto object-contain md:max-h-16" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-[30px] bg-blue-900 p-8 text-white md:p-10">
          <h2 className="text-3xl font-black">{stayInformed.title}</h2>
          <p className="mt-4 max-w-3xl leading-8 text-blue-50">{stayInformed.text}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/actualites" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-900">
              {stayInformed.primaryCta}
            </Link>
            <Link to="/don" className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white">
              {stayInformed.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}