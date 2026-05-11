import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSiteContent } from '../hooks/useSiteContent'
import SilhouetteFiligree from '../components/sagco/SilhouetteFiligree'

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
    }, 6500)
    return () => clearInterval(interval)
  }, [slides.length])

  const activeSlide = slides[currentSlide]

  return (
    <div className="space-y-16 pb-8 md:space-y-20">

      {/* ════════════════════════════════════════════════════════════
          HERO — design pro : slide content à gauche, carte stats à droite
          ════════════════════════════════════════════════════════════ */}
      <section id="hero-home" className="relative w-full">
        <div className="relative min-h-[640px] overflow-hidden md:min-h-[720px] lg:min-h-[calc(100vh-120px)]">

          {/* Fond images (crossfade) */}
          <div className="absolute inset-0">
            {slides.map((slide, index) => (
              <img
                key={slide.id}
                src={slide.image}
                alt=""
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1600ms] ease-out ${
                  index === currentSlide ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                }`}
              />
            ))}

            {/* Overlay asymétrique : très sombre à gauche pour lisibilité, transparent à droite pour voir la photo */}
            <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(27,63,140,0.96)_0%,rgba(27,63,140,0.85)_35%,rgba(27,63,140,0.45)_70%,rgba(27,63,140,0.15)_100%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-hf-blue/40 via-transparent to-transparent" />
          </div>

          {/* Filigrane silhouette charte (côté droit, très subtil) */}
          <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[80%] w-[480px] -translate-y-1/2 lg:block">
            <SilhouetteFiligree color="#ffffff" opacity={0.08} className="h-full w-full" />
          </div>

          {/* Contenu */}
          <div className="relative z-10 mx-auto flex min-h-[640px] max-w-[1440px] items-center px-4 py-16 md:min-h-[720px] md:px-6 lg:min-h-[calc(100vh-120px)] lg:px-8">
            <div className="grid w-full items-center gap-10 lg:grid-cols-[1.3fr_0.7fr] lg:gap-14">

              {/* ── GAUCHE : Contenu rotatif basé sur les slides ── */}
              <div className="text-white">

                {/* Eyebrow : slogan charte officielle (court, propre) */}
                <div className="inline-flex items-center gap-3">
                  <span className="h-px w-10 bg-hf-orange" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-hf-orange">
                    Au service de la femme et de la jeune fille
                  </p>
                </div>

                {/* Catégorie du slide (rotative) */}
                <p className="mt-7 text-sm font-bold uppercase tracking-[0.18em] text-white/80">
                  {activeSlide.label}
                </p>

                {/* H1 = titre du slide (court et punchy) */}
                <h1 className="mt-3 text-3xl font-black leading-[1.1] tracking-tight md:text-4xl lg:text-5xl xl:text-[3.4rem]">
                  {activeSlide.title}
                </h1>

                {/* Description = texte du slide (court) */}
                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-100 md:text-lg">
                  {activeSlide.text}
                </p>

                {/* CTAs */}
                <div className="mt-9 flex flex-wrap gap-3">
                  <Link
                    to="/a-propos"
                    className="inline-flex items-center gap-2 rounded-full bg-hf-orange px-6 py-3 text-sm font-bold text-white shadow-lg shadow-hf-orange/30 transition hover:bg-hf-orange-dark hover:shadow-xl"
                  >
                    {hero.primaryCta || "Découvrir l'ONG"}
                    <span aria-hidden>→</span>
                  </Link>
                  <Link
                    to="/initiatives"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-hf-blue"
                  >
                    {hero.secondaryCta || 'Voir les initiatives'}
                  </Link>
                </div>

                {/* Indicateurs slides + compteur */}
                <div className="mt-12 flex items-center gap-6">
                  <div className="flex gap-2">
                    {slides.map((slide, index) => (
                      <button
                        key={slide.id}
                        type="button"
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1 rounded-full transition-all ${
                          index === currentSlide
                            ? 'w-10 bg-hf-orange'
                            : 'w-5 bg-white/40 hover:bg-white/70'
                        }`}
                        aria-label={`Aller au slide ${index + 1}`}
                      />
                    ))}
                  </div>
                  <span className="text-xs font-semibold tracking-[0.18em] text-white/70">
                    {String(currentSlide + 1).padStart(2, '0')} —{' '}
                    {String(slides.length).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* ── DROITE : Carte institutionnelle "Notre engagement" ── */}
              <div className="hidden lg:block">
                <div className="relative">

                  {/* Petit accent décoratif charte */}
                  <div className="pointer-events-none absolute -right-3 -top-3 h-16 w-16 rounded-full border-2 border-hf-orange/40" />

                  {/* Carte principale */}
                  <div className="relative rounded-2xl border border-white/15 bg-white/8 p-7 backdrop-blur-md">
                    <div className="flex items-center gap-2">
                      <span className="h-px w-6 bg-hf-orange" />
                      <p className="text-[10.5px] font-bold uppercase tracking-[0.22em] text-hf-orange">
                        Notre engagement
                      </p>
                    </div>

                    <h3 className="mt-4 text-xl font-black leading-tight text-white">
                      Plus de 20 ans au service des femmes et des filles
                    </h3>

                    <p className="mt-3 text-[13px] leading-relaxed text-slate-100">
                      Une trajectoire bâtie sur la confiance des partenaires,
                      l'ancrage communautaire et un savoir-faire éprouvé en
                      santé, protection et autonomisation.
                    </p>

                    {/* Stats institutionnelles */}
                    <div className="mt-6 grid grid-cols-3 gap-2 border-t border-white/15 pt-5">
                      <div>
                        <p className="text-3xl font-black leading-none text-hf-orange">
                          20<span className="text-xl">+</span>
                        </p>
                        <p className="mt-1.5 text-[9.5px] font-medium uppercase tracking-wider text-slate-200">
                          Années
                        </p>
                      </div>
                      <div>
                        <p className="text-3xl font-black leading-none text-hf-orange">4</p>
                        <p className="mt-1.5 text-[9.5px] font-medium uppercase tracking-wider text-slate-200">
                          Régions
                        </p>
                      </div>
                      <div>
                        <p className="text-3xl font-black leading-none text-hf-orange">
                          30<span className="text-xl">+</span>
                        </p>
                        <p className="mt-1.5 text-[9.5px] font-medium uppercase tracking-wider text-slate-200">
                          Projets
                        </p>
                      </div>
                    </div>

                    {/* Lien vers l'édito */}
                    <a
                      href="#edito-home"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-hf-orange"
                    >
                      Lire l'édito complet
                      <span aria-hidden>↓</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Indicateur de scroll en bas — très discret */}
          <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:block">
            <div className="flex flex-col items-center gap-2 text-white/50">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
                Découvrir
              </span>
              <span className="h-8 w-px animate-pulse bg-white/50" />
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
              alt="Photo PCA Horizons Femmes"
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
            <h2 className="mt-4 text-3xl font-black text-hf-blue">{editorial.title}</h2>
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
          À PROPOS
          ════════════════════════════════════════════════════════════ */}
      <section id="about-home" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr]">
          <div className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
              {aboutSection.label}
            </p>
            <h2 className="mt-4 text-3xl font-black text-hf-blue">{aboutSection.title}</h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
            <p className="mt-5 text-lg leading-8 text-slate-700">{aboutSection.text}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {aboutSection.points.map((item) => (
                <div
                  key={item}
                  className="rounded-[18px] border-l-4 border-hf-orange bg-slate-50 px-4 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-7">
              <Link
                to="/a-propos"
                className="inline-flex rounded-full bg-hf-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-hf-blue-dark"
              >
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
            <div className="absolute inset-0 bg-gradient-to-t from-hf-blue/65 to-transparent" />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          QUICK LINKS
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {quickLinks.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="group overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
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
              <div className="p-5">
                <p className="leading-7 text-slate-600">{item.text}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          IMPACT
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
          INITIATIVES
          ════════════════════════════════════════════════════════════ */}
      <section id="initiatives-home" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">{projectsPreview.label}</p>
            <h2 className="mt-4 text-3xl font-black text-hf-blue">{projectsPreview.title}</h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
            <p className="mt-4 text-lg leading-8 text-slate-700">{projectsPreview.text}</p>
          </div>
          <Link
            to="/initiatives"
            className="hidden rounded-full border-2 border-hf-blue bg-white px-5 py-3 text-sm font-bold text-hf-blue transition hover:bg-hf-blue hover:text-white lg:inline-flex"
          >
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
                <span className="rounded-full bg-hf-orange/15 px-3 py-1 text-sm font-bold text-hf-orange-dark">
                  {projectsPreview.featured?.badge}
                </span>
              </div>
              <h3 className="mt-4 text-3xl font-black leading-tight text-hf-blue">{projectsPreview.featured?.title}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-700">{projectsPreview.featured?.text}</p>
              <Link
                to="/sagco"
                className="mt-6 inline-flex rounded-full bg-hf-blue px-6 py-3 text-sm font-bold text-white transition hover:bg-hf-blue-dark"
              >
                {projectsPreview.featured?.cta}
              </Link>
            </div>
          </article>

          <div className="grid gap-6 md:grid-cols-2">
            {projectsPreview.items.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm transition hover:border-hf-orange hover:shadow-md"
              >
                <div className="h-44 overflow-hidden">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">{item.badge}</p>
                  <h3 className="mt-3 text-2xl font-black leading-tight text-hf-blue">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

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
            <SilhouetteFiligree color="#F4952F" opacity={0.18} className="h-full w-full" />
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