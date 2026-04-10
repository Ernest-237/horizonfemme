import { useMemo, useState } from 'react'
import { useSiteContent } from '../hooks/useSiteContent'

const ABOUT_HERO_IMAGE = '/assets/hf/comite-hf.jpg'
const ABOUT_LEADER_IMAGE = '/assets/hf/comite2-hf.jpg'
const ABOUT_BANNER_IMAGE = '/assets/hf/comite3-hf.jpg'
const ABOUT_MAP_IMAGE = '/assets/hf/map.jpg'

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div
      id={item.id}
      className="overflow-hidden rounded-[24px] border border-cyan-900/40 bg-slate-950/90"
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
      >
        <span className="text-xl font-medium text-white md:text-2xl">
          #{item.title}
        </span>
        <span className="text-3xl font-light text-cyan-300">
          {isOpen ? '−' : '+'}
        </span>
      </button>

      {isOpen && (
        <div className="border-t border-cyan-900/30 px-5 pb-5 pt-4 md:px-6">
          {item.content ? (
            <p className="leading-8 text-slate-300">{item.content}</p>
          ) : null}

          {item.list ? (
            <ul className="space-y-3 text-slate-300">
              {item.list.map((entry) => (
                <li key={entry} className="leading-8">
                  • {entry}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      )}
    </div>
  )
}

export default function AboutPage() {
  const content = useSiteContent()

  const firstSectionId = content.about.sections?.[0]?.id || null
  const [openSection, setOpenSection] = useState(firstSectionId)
  const [selectedHonor, setSelectedHonor] = useState(
    content.about.honors?.[0] || null
  )

  const currentHonor = useMemo(() => {
    return selectedHonor || content.about.honors?.[0]
  }, [selectedHonor, content.about.honors])

  const missionSection =
    content.about.sections?.find((item) => item.id === 'mission') || null
  const visionSection =
    content.about.sections?.find((item) => item.id === 'vision') || null
  const axesSection =
    content.about.sections?.find((item) => item.id === 'axes') || null

  const objectivesList =
    axesSection?.list?.slice(0, 3) || [
      'Renforcer la santé communautaire',
      'Promouvoir la bonne gouvernance',
      "Soutenir l'autonomisation socioéconomique",
    ]

  const partnerLogos =
    content.about?.partners?.logos || content.home?.partners?.logos || []

  return (
    <div className="space-y-12 pb-6 md:space-y-16">

      {/* ── HERO réduit ── */}
      <section className="mx-auto max-w-7xl px-4 pt-8 md:px-6 lg:px-8 lg:pt-10">
        <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#020617_0%,#0f172a_45%,#1e293b_100%)] text-white">
          <div className="grid gap-6 p-6 md:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
                {content.about.eyebrow}
              </p>

              <p className="mt-2 inline-flex w-fit rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
                {content.about.heroBadge}
              </p>

              <h1 className="mt-4 text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
                {content.about.heroTitle}
              </h1>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                {content.about.heroText}
              </p>
            </div>

            <div className="relative min-h-[260px] overflow-hidden rounded-[24px] border border-white/10 shadow-xl">
              <img
                src={ABOUT_HERO_IMAGE}
                alt="Horizons Femmes - image principale À propos"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="rounded-[18px] bg-white/10 p-3 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-200">
                    Horizons Femmes
                  </p>
                  <p className="mt-1 text-xs leading-6 text-slate-200">
                    Image principale institutionnelle de la page À propos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div
            id="mission"
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Mission
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              {missionSection?.content || content.about.description}
            </p>
          </div>

          <div
            id="objectifs"
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Objectifs
            </p>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-600">
  {objectivesList.map((item) => (
    <li key={item} className="leading-8">
      {item}
    </li>
  ))}
</ol>
          </div>

          <div
            id="vision"
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Vision
            </p>
            <p className="mt-4 leading-8 text-slate-600">
              {visionSection?.content || content.about.description}
            </p>
          </div>
        </div>
      </section>

      <section
        id="histoire"
        className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8"
      >
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              {content.about.historyTitle}
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-700">
              {content.about.historyIntro}
            </p>

            <div className="mt-5 space-y-5 text-base leading-8 text-slate-600">
              {content.about.historyBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative min-h-[360px] overflow-hidden rounded-[32px] border border-slate-200 shadow-sm">
              <img
                src={ABOUT_LEADER_IMAGE}
                alt="Photo responsable Horizons Femmes"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-900/15 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="rounded-[22px] bg-white/12 p-4 text-white backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">
                    Photo responsable
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-100">
                    Mets ici la photo de la fondatrice, de la présidente ou de la
                    Directrice Exécutive.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-200 bg-blue-900 p-6 text-white shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">
                Mise en lumière
              </p>
              <h3 className="mt-3 text-2xl font-black">
                {content.about.storySpotlight.title}
              </h3>
              <p className="mt-4 leading-8 text-blue-50">
                {content.about.storySpotlight.text}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(180deg,#020617_0%,#111827_100%)] p-6 md:p-8">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
              {content.about.interactiveTitle}
            </p>
            <p className="mt-3 max-w-3xl text-lg leading-8 text-slate-300">
              {content.about.interactiveSubtitle}
            </p>
          </div>

          <div className="space-y-4">
            {content.about.sections.map((item) => (
              <AccordionItem
                key={item.id}
                item={item}
                isOpen={openSection === item.id}
                onToggle={() =>
                  setOpenSection((prev) => (prev === item.id ? null : item.id))
                }
              />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            {content.about.governanceTitle}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {content.about.governance.map((item) => (
            <div
              key={item.title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-xl font-black text-slate-900">
                {item.title}
              </h3>
              <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] border border-slate-200 shadow-sm">
          <img
            src={ABOUT_BANNER_IMAGE}
            alt="Bannière visuelle Horizons Femmes"
            className="h-[280px] w-full object-cover md:h-[360px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-900/25 to-transparent" />

          <div className="absolute inset-y-0 left-0 flex max-w-2xl items-center p-6 md:p-10">
            <div className="rounded-[24px] bg-white/12 p-5 text-white backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-200">
                Image d'ambiance
              </p>
              <p className="mt-3 text-base leading-8 text-slate-100">
                Mets ici une image forte du terrain, d'une cérémonie, d'un
                atelier ou d'un groupe de bénéficiaires.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="honors"
        className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8"
      >
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              {content.about.honorsTitle}
            </p>
            <p className="mt-3 text-lg leading-8 text-slate-600">
              {content.about.honorsSubtitle}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {content.about.honors.map((honor) => {
              const isActive =
                currentHonor?.year === honor.year &&
                currentHonor?.title === honor.title

              return (
                <button
                  key={`${honor.year}-${honor.title}`}
                  type="button"
                  onClick={() => setSelectedHonor(honor)}
                  className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? 'bg-blue-900 text-white'
                      : 'border border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-300'
                  }`}
                >
                  {honor.year} · {honor.title}
                </button>
              )
            })}
          </div>

          <div className="mt-8 rounded-[28px] bg-slate-50 p-6 md:p-7">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
              {currentHonor?.year}
            </p>
            <h3 className="mt-3 text-2xl font-black text-slate-900">
              {currentHonor?.title}
            </h3>
            <p className="mt-4 leading-8 text-slate-600">
              {currentHonor?.text}
            </p>
          </div>
        </div>
      </section>

      {/* ── AGENCES + CARTE ── */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Carte — image couvre tout le cadre */}
          <div className="overflow-hidden rounded-[32px] border border-slate-200 shadow-sm">
            <div className="relative h-full min-h-[320px]">
              <img
                src={ABOUT_MAP_IMAGE}
                alt="Carte du Cameroun - zones d'intervention"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="rounded-[18px] bg-white/85 p-3 backdrop-blur">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
                    Carte du Cameroun
                  </p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Les zones d'intervention.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Agences — liste compacte */}
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Agences disponibles
            </p>
            <h2 className="mt-3 text-2xl font-black text-slate-900">
              Présence territoriale
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Horizons Femmes dispose de plusieurs points de présence pour
              renforcer la proximité avec les communautés et les partenaires.
            </p>

            <div className="mt-6 space-y-3">
              {content.about.offices.map((office) => (
                <div
                  key={office.id}
                  className="rounded-[20px] border border-slate-200 bg-slate-50 p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-900 text-xs font-black text-white">
                      {office.label}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-x-2">
                        <h3 className="text-base font-black text-slate-900">
                          {office.name}
                        </h3>
                        <span className="text-xs font-semibold text-blue-900">
                          {office.city} · {office.region}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        {office.address}
                      </p>
                      <p className="mt-0.5 text-xs font-semibold text-slate-600">
                        {office.phone}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
              Partenaires
            </p>
            <h2 className="mt-4 text-3xl font-black text-slate-900">
              Des partenariats qui renforcent notre action
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {partnerLogos.map((item) => (
              <div
                key={item.alt}
                className="flex h-28 items-center justify-center rounded-[22px] border border-slate-200 bg-slate-50 p-4"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="max-h-14 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="values"
        className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8"
      >
        <div className="rounded-[32px] bg-blue-900 p-8 text-white md:p-10">
          <h2 className="text-3xl font-black">
            {content.about.valuesReminderTitle}
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-blue-50">
            {content.about.valuesReminderText}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {content.about.valuesReminderList.map((value) => (
              <span
                key={value}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}