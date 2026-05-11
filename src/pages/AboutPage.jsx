import { useState } from 'react'
import { useSiteContent } from '../hooks/useSiteContent'
import SilhouetteFiligree from '../components/sagco/SilhouetteFiligree'

const ABOUT_HERO_IMAGE = '/assets/hf/comite-hf.jpg'
const ABOUT_LEADER_IMAGE = '/assets/hf/comite2-hf.jpg'
const ABOUT_BANNER_IMAGE = '/assets/hf/comite3-hf.jpg'
const ABOUT_MAP_IMAGE = '/assets/hf/map.jpg'

export default function AboutPage() {
  const content = useSiteContent()
  const about = content.about

  const firstSectionId = about.sections?.[0]?.id || null
  const [activeTab, setActiveTab] = useState(firstSectionId)
  const [activeHonorIdx, setActiveHonorIdx] = useState(0)
  const [activeOfficeId, setActiveOfficeId] = useState(
    about.offices?.[0]?.id || null
  )

  const activeSection =
    about.sections?.find((s) => s.id === activeTab) || about.sections?.[0]
  const activeHonor = about.honors?.[activeHonorIdx]
  const activeOffice =
    about.offices?.find((o) => o.id === activeOfficeId) || about.offices?.[0]

  const partnerLogos =
    about?.partners?.logos || content.home?.partners?.logos || []

  return (
    <div className="space-y-16 pb-12 md:space-y-20">

      {/* ════════════════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={ABOUT_HERO_IMAGE}
            alt=""
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hf-blue via-hf-blue/90 to-hf-blue/60" />
        </div>

        <div className="pointer-events-none absolute -right-20 top-0 hidden h-full w-[500px] lg:block">
          <SilhouetteFiligree color="#ffffff" opacity={0.1} className="h-full w-full" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 py-20 md:px-6 md:py-24 xl:px-8 xl:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-10 bg-hf-orange" />
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-hf-orange">
                {about.eyebrow}
              </p>
            </div>

            <p className="mt-6 inline-flex w-fit rounded-full border-2 border-hf-orange/40 bg-white/5 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
              {about.heroBadge}
            </p>

            <h1 className="mt-6 text-3xl font-black leading-[1.1] tracking-tight text-white md:text-4xl lg:text-5xl xl:text-[3.2rem]">
              {about.heroTitle}
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-100 md:text-lg">
              {about.heroText}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#histoire"
                className="inline-flex items-center gap-2 rounded-full bg-hf-orange px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-hf-orange-dark"
              >
                Notre histoire <span aria-hidden>↓</span>
              </a>
              <a
                href="#values"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-hf-blue"
              >
                Nos valeurs
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          HISTOIRE
          ════════════════════════════════════════════════════════════ */}
      <section id="histoire" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* Texte */}
          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
              {about.historyTitle}
            </p>
            <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
              Une trajectoire de plus de 20 ans
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />

            <p className="mt-6 text-lg leading-8 text-slate-700">
              {about.historyIntro}
            </p>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              {about.historyBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Image + spotlight */}
          <div className="space-y-6">
            <div className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-slate-200 shadow-sm">
              <img
                src={ABOUT_LEADER_IMAGE}
                alt="Direction Horizons Femmes"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-hf-blue/80 via-hf-blue/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="rounded-2xl bg-white/15 p-4 text-white backdrop-blur">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-hf-orange">
                    Leadership
                  </p>
                  <p className="mt-2 text-sm font-bold">
                    Un engagement porté par des femmes pionnières
                  </p>
                </div>
              </div>
            </div>

            {/* Cartouche spotlight bleu marine */}
            <div className="relative overflow-hidden rounded-[28px] bg-hf-blue p-7 text-white shadow-lg">
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-[200px] w-[200px]">
                <SilhouetteFiligree color="#F4952F" opacity={0.18} className="h-full w-full" />
              </div>
              <div className="relative">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-hf-orange">
                  Mise en lumière
                </p>
                <h3 className="mt-3 text-2xl font-black">
                  {about.storySpotlight.title}
                </h3>
                <p className="mt-4 leading-8 text-slate-200">
                  {about.storySpotlight.text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          INFORMATIONS CLÉS — Tabs interactifs (Vision, Mission, Valeurs, Axes, Expertise)
          ════════════════════════════════════════════════════════════ */}
      <section id="vision" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
            {about.interactiveTitle}
          </p>
          <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
            Les fondements de l'organisation
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-hf-orange" />
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {about.interactiveSubtitle}
          </p>
        </div>

        {/* Onglets */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {about.sections.map((section) => (
            <button
              key={section.id}
              id={section.id === 'values' ? undefined : section.id}
              type="button"
              onClick={() => setActiveTab(section.id)}
              className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
                activeTab === section.id
                  ? 'bg-hf-blue text-white shadow-md'
                  : 'border-2 border-slate-200 bg-white text-slate-700 hover:border-hf-orange'
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Contenu de l'onglet actif */}
        <div className="mt-8 overflow-hidden rounded-[28px] border-2 border-slate-100 bg-white shadow-sm">
          {/* Liseré orange */}
          <div className="h-1 bg-hf-orange" />

          <div className="p-7 md:p-10">
            <h3 className="text-2xl font-black text-hf-blue md:text-3xl">
              {activeSection?.title}
            </h3>
            <div className="mt-3 h-0.5 w-12 rounded-full bg-hf-orange" />

            {activeSection?.content ? (
              <p className="mt-6 text-lg leading-8 text-slate-700">
                {activeSection.content}
              </p>
            ) : null}

            {activeSection?.list ? (
              <ul className="mt-6 grid gap-3 md:grid-cols-2">
                {activeSection.list.map((entry, index) => (
                  <li
                    key={entry}
                    className="flex items-start gap-3 rounded-2xl border-l-4 border-hf-orange bg-slate-50 px-4 py-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-hf-blue text-xs font-black text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm leading-7 text-slate-700">{entry}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          GOUVERNANCE
          ════════════════════════════════════════════════════════════ */}
      <section id="team" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
            {about.governanceTitle}
          </p>
          <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
            Une gouvernance structurée et transparente
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {about.governance.map((item, index) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[24px] border-2 border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-hf-orange hover:shadow-xl"
            >
              <span className="block text-4xl font-black text-hf-blue/15 transition group-hover:text-hf-orange/30">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-lg font-black text-hf-blue">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-hf-orange transition-all duration-500 group-hover:w-full" />
            </div>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          BANNIÈRE INSPIRATIONNELLE
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] shadow-lg">
          <img
            src={ABOUT_BANNER_IMAGE}
            alt="Action de terrain Horizons Femmes"
            className="h-[320px] w-full object-cover md:h-[400px]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-hf-blue/95 via-hf-blue/70 to-hf-blue/20" />

          <div className="pointer-events-none absolute -right-10 top-0 h-full w-[400px]">
            <SilhouetteFiligree color="#ffffff" opacity={0.08} className="h-full w-full" />
          </div>

          <div className="absolute inset-y-0 left-0 flex max-w-2xl items-center p-6 md:p-12">
            <div className="text-white">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-hf-orange">
                Notre engagement
              </p>
              <h2 className="mt-3 text-2xl font-black md:text-3xl lg:text-4xl">
                Présents sur le terrain depuis plus de 20 ans
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-100">
                De Yaoundé à Ebolowa, de Douala à Bafoussam, Horizons Femmes
                déploie ses actions au plus près des communautés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          DISTINCTIONS HONORIFIQUES — Timeline interactive
          ════════════════════════════════════════════════════════════ */}
      <section id="honors" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
            {about.honorsTitle}
          </p>
          <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
            Une reconnaissance institutionnelle constante
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {about.honorsSubtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.4fr_0.6fr]">

          {/* Liste navigable */}
          <div className="rounded-[28px] border-2 border-slate-100 bg-white shadow-sm">
            <div className="h-1 rounded-t-[28px] bg-hf-orange" />
            <div className="max-h-[520px] overflow-y-auto p-3">
              {about.honors.map((honor, idx) => {
                const isActive = idx === activeHonorIdx
                return (
                  <button
                    key={`${honor.year}-${honor.title}-${idx}`}
                    type="button"
                    onClick={() => setActiveHonorIdx(idx)}
                    className={`group flex w-full items-start gap-4 rounded-2xl px-4 py-3 text-left transition ${
                      isActive ? 'bg-hf-blue text-white' : 'hover:bg-slate-50'
                    }`}
                  >
                    <span
                      className={`mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[11px] font-black ${
                        isActive
                          ? 'bg-hf-orange text-white'
                          : 'bg-hf-orange/15 text-hf-orange-dark group-hover:bg-hf-orange group-hover:text-white'
                      }`}
                    >
                      {honor.year}
                    </span>
                    <span
                      className={`flex-1 text-sm font-semibold leading-6 ${
                        isActive ? 'text-white' : 'text-slate-700'
                      }`}
                    >
                      {honor.title}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Détail de la distinction sélectionnée */}
          <div className="relative overflow-hidden rounded-[28px] bg-hf-blue p-7 text-white shadow-lg md:p-10">
            <div className="pointer-events-none absolute -right-12 -bottom-12 h-[280px] w-[280px]">
              <SilhouetteFiligree color="#F4952F" opacity={0.18} className="h-full w-full" />
            </div>

            <div className="relative">
              <div className="inline-flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-hf-orange bg-hf-orange text-sm font-black text-white">
                  ★
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-hf-orange">
                    Distinction {activeHonor?.year}
                  </p>
                  <p className="text-sm font-medium text-slate-200">
                    Reconnaissance institutionnelle
                  </p>
                </div>
              </div>

              <h3 className="mt-7 text-2xl font-black leading-tight md:text-3xl">
                {activeHonor?.title}
              </h3>
              <div className="mt-3 h-1 w-12 rounded-full bg-hf-orange" />

              <p className="mt-5 text-base leading-8 text-slate-100">
                {activeHonor?.text}
              </p>

              <p className="mt-8 text-xs uppercase tracking-wider text-slate-300">
                {activeHonorIdx + 1} / {about.honors.length}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          BUREAUX — Carte interactive du Cameroun
          ════════════════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
            {about.officesTitle}
          </p>
          <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
            Une présence territoriale forte
          </h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {about.officesSubtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">

          {/* Carte interactive avec markers */}
          <div className="relative overflow-hidden rounded-[28px] border-2 border-slate-100 bg-slate-50 shadow-sm">
            <div className="relative aspect-[4/5] w-full">
              <img
                src={ABOUT_MAP_IMAGE}
                alt="Carte des bureaux Horizons Femmes au Cameroun"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Markers positionnés selon x/y de siteContent.js */}
              {about.offices.map((office) => {
                const isActive = office.id === activeOffice?.id
                return (
                  <button
                    key={office.id}
                    type="button"
                    onClick={() => setActiveOfficeId(office.id)}
                    className="absolute -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${office.x}%`, top: `${office.y}%` }}
                    aria-label={`${office.name} - ${office.city}`}
                  >
                    {/* Pulse ring (actif uniquement) */}
                    {isActive ? (
                      <span className="absolute inset-0 -m-2 animate-ping rounded-full bg-hf-orange/40" />
                    ) : null}
                    {/* Marker */}
                    <span
                      className={`relative flex h-9 w-9 items-center justify-center rounded-full border-[3px] border-white text-xs font-black shadow-lg transition ${
                        isActive
                          ? 'scale-125 bg-hf-orange text-white'
                          : 'bg-hf-blue text-white hover:scale-110 hover:bg-hf-orange'
                      }`}
                    >
                      {office.label}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Légende */}
            <div className="border-t border-slate-200 bg-white p-4 text-center">
              <p className="text-xs font-medium text-slate-500">
                <span className="inline-block h-2 w-2 rounded-full bg-hf-orange align-middle" />{' '}
                Cliquez sur les marqueurs pour découvrir nos bureaux
              </p>
            </div>
          </div>

          {/* Détail du bureau sélectionné + liste */}
          <div className="space-y-4">
            {/* Bureau sélectionné — carte highlight */}
            <div className="relative overflow-hidden rounded-[28px] border-2 border-hf-orange bg-white p-7 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-hf-orange bg-hf-blue text-sm font-black text-white">
                  {activeOffice?.label}
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-hf-orange">
                    {activeOffice?.region}
                  </p>
                  <p className="text-lg font-black text-hf-blue">
                    {activeOffice?.name}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3 border-t border-slate-100 pt-5 text-sm">
                <div className="flex items-start gap-2 text-slate-700">
                  <span className="text-hf-orange" aria-hidden>
                    📍
                  </span>
                  <span className="leading-6">{activeOffice?.address}</span>
                </div>
                <div className="flex items-start gap-2 text-slate-700">
                  <span className="text-hf-orange" aria-hidden>
                    📞
                  </span>
                  <a
                    href={`tel:${activeOffice?.phone?.replace(/\s/g, '')}`}
                    className="font-bold text-hf-blue hover:text-hf-orange"
                  >
                    {activeOffice?.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Liste compacte des autres bureaux */}
            <div className="grid grid-cols-2 gap-3">
              {about.offices
                .filter((o) => o.id !== activeOffice?.id)
                .map((office) => (
                  <button
                    key={office.id}
                    type="button"
                    onClick={() => setActiveOfficeId(office.id)}
                    className="group rounded-2xl border-2 border-slate-100 bg-white p-4 text-left shadow-sm transition hover:border-hf-orange hover:shadow-md"
                  >
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-hf-blue text-xs font-black text-white group-hover:bg-hf-orange">
                        {office.label}
                      </span>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-hf-orange">
                        {office.region}
                      </p>
                    </div>
                    <p className="mt-2 text-sm font-bold text-hf-blue">
                      {office.city}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{office.short}</p>
                  </button>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          PARTENAIRES
          ════════════════════════════════════════════════════════════ */}
      {partnerLogos.length > 0 ? (
        <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">
                Partenaires
              </p>
              <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">
                Des partenariats qui renforcent notre action
              </h2>
              <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
              {partnerLogos.map((item) => (
                <div
                  key={item.alt}
                  className="flex h-28 items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-hf-orange"
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
      ) : null}

      {/* ════════════════════════════════════════════════════════════
          VALEURS REMINDER CTA
          ════════════════════════════════════════════════════════════ */}
      <section id="values" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-hf-blue p-8 text-white shadow-xl md:p-12">
          <div className="pointer-events-none absolute -right-12 -bottom-12 h-[320px] w-[320px]">
            <SilhouetteFiligree color="#F4952F" opacity={0.18} className="h-full w-full" />
          </div>

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-hf-orange">
              Nos valeurs
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              {about.valuesReminderTitle}
            </h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
              {about.valuesReminderText}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {about.valuesReminderList.map((value) => (
                <span
                  key={value}
                  className="rounded-full border-2 border-hf-orange/40 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur"
                >
                  {value}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}