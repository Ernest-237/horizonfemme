import { useState } from 'react'
import { useSiteContent } from '../hooks/useSiteContent'
import SilhouetteFiligree from '../components/sagco/SilhouetteFiligree'

const ABOUT_HERO_IMAGE = '/assets/hf/comite-hf.jpg'
const ABOUT_LEADER_IMAGE = '/assets/hf/comite2-hf.jpg'
const ABOUT_BANNER_IMAGE = '/assets/hf/comite3-hf.jpg'
const ABOUT_MAP_IMAGE = '/assets/hf/map.jpg'

const services = [
  { icon: '🏥', title: 'Accueil et Prévention', desc: "Enregistrement et orientation des bénéficiaires avec attribution du Code Unique Identification CUI, suivis de la distribution du matériel de prévention Sensibilisation au port correct du préservatif et au changement de comportement" },
  { icon: '🛡️', title: 'Case management', desc: "Suivi communautaire (éducation thérapeutique, groupe de parole, visite à domicile, appels téléphoniques, recherches des perdus de vues)." },
  { icon: '💼', title: 'Infirmerie', desc: "Consultation, diagnostic primaire et prise en charge des infections sexuellement transmissibles (IST) et autres pathologies." },
  { icon: '🤝', title: 'Médecine Générale', desc: "Consultations médicales diverses,Suivi des personnes vivant avec le VIH,Initiation PrEP." },
  { icon: '🎓', title: 'Laboratoire', desc: "Prélèvement et acheminement des échantillons charge virale, créatinine, bilan urinaire." },
  { icon: '🌍', title: 'Réponses aux VBG', desc: "Promotion des droits humains (formation sur les droits humains, organisation des activités ludiques/récréatives)." },
]

export default function AboutPage() {
  const content = useSiteContent()
  const about = content.about

  // États interactifs
  const [activeFramework, setActiveFramework] = useState(0)      // index du cadre stratégique
  const [activeAxe, setActiveAxe] = useState(0)                  // index des axes
  const [activeOrgan, setActiveOrgan] = useState(0)              // index des organes
  const [activeOfficeId, setActiveOfficeId] = useState(about.offices?.[0]?.id || null)

  // Construction des items du cadre stratégique à partir des données du site
  const frameworkItems = [
    {
      id: 'histoire',
      title: 'Notre Histoire',
      content: about.historyBody?.join('\n\n') || about.historyIntro,
    },
    {
      id: 'mission',
      title: 'Notre Mission',
      content: about.sections?.find(s => s.id === 'mission')?.content || about.mission,
    },
    {
      id: 'valeurs',
      title: 'Nos Valeurs',
      content: about.sections?.find(s => s.id === 'values')?.list?.join(', ') || about.values?.join(', '),
    },
    {
      id: 'vision',
      title: 'Notre Vision',
      content: about.sections?.find(s => s.id === 'vision')?.content || about.vision,
    },
    {
      id: 'services',
      title: 'Nos Services',
      servicesList: services,   // spécial pour l'affichage des cartes
    },
    {
      id: 'expertise',
      title: 'Notre Savoir-faire',
      content: about.sections?.find(s => s.id === 'expertise')?.list?.join(', ') || about.expertise,
    },
  ]

  const axesSection = about.sections?.find(s => s.id === 'axes')
  const organs = about.governance  // contient maintenant les organes avec noteRH éventuelle
  const activeOffice = about.offices?.find(o => o.id === activeOfficeId) || about.offices?.[0]
  const partnerLogos = about?.partners?.logos || content.home?.partners?.logos || []

  return (
    <div className="space-y-16 pb-12 md:space-y-20">

      {/* ════════════ HERO ════════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={ABOUT_HERO_IMAGE} alt="" className="h-full w-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-hf-blue via-hf-blue/90 to-hf-blue/60" />
        </div>
        <div className="pointer-events-none absolute -right-20 top-0 hidden h-full w-[500px] lg:block">
          <SilhouetteFiligree opacity={0.1} className="h-full w-full" />
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
              <a href="#cadre-strategique" className="inline-flex items-center gap-2 rounded-full bg-hf-orange px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-hf-orange-dark">
                Notre cadre stratégique <span aria-hidden>↓</span>
              </a>
              <a href="#axes-strategiques" className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:border-white hover:bg-white hover:text-hf-blue">
                Nos axes stratégiques
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ CADRE STRATÉGIQUE (interactif) ════════════ */}
      <section id="cadre-strategique" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">Notre Cadre stratégique</p>
          <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">Les fondements de notre action</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Découvrez les éléments clés qui structurent l’identité et l’engagement de Horizons Femmes.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
          {/* Navigation */}
          <div className="space-y-2">
            {frameworkItems.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveFramework(idx)}
                className={`group w-full rounded-2xl p-4 text-left transition ${
                  activeFramework === idx
                    ? 'bg-hf-blue text-white shadow-md'
                    : 'border-2 border-slate-100 bg-white text-slate-700 hover:border-hf-orange'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                    activeFramework === idx ? 'bg-hf-orange text-white' : 'bg-hf-blue/10 text-hf-blue group-hover:bg-hf-orange group-hover:text-white'
                  }`}>
                    {idx + 1}
                  </span>
                  <span className="text-sm font-bold leading-5">{item.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Détail */}
          <div className="relative overflow-hidden rounded-[28px] bg-hf-blue p-8 text-white shadow-lg md:p-10">
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-[260px] w-[260px]">
              <SilhouetteFiligree opacity={0.1} className="h-full w-full" />
            </div>
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-hf-orange px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">
                {frameworkItems[activeFramework].title}
              </span>
              <div className="mt-3 h-1 w-12 rounded-full bg-hf-orange" />
              {frameworkItems[activeFramework].servicesList ? (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {frameworkItems[activeFramework].servicesList.map(srv => (
                    <div key={srv.title} className="rounded-2xl bg-white/10 p-4 backdrop-blur">
                      <div className="text-2xl">{srv.icon}</div>
                      <h4 className="mt-2 font-bold text-white">{srv.title}</h4>
                      <p className="mt-1 text-sm text-slate-200">{srv.desc}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-5 text-lg leading-9 text-slate-100 whitespace-pre-line">
                  {frameworkItems[activeFramework].content}
                </p>
              )}
              <p className="mt-8 text-xs uppercase tracking-wider text-slate-300">
                {activeFramework + 1} / {frameworkItems.length}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ AXES STRATÉGIQUES (interactif, ancre renommée) ════════════ */}
      <section id="axes-strategiques" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">Nos Axes stratégiques</p>
          <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">Les axes d'intervention et leurs objectifs</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Chaque axe est adossé à un objectif spécifique qui guide les interventions de Horizons Femmes sur le terrain.
          </p>
        </div>

        {axesSection?.list ? (
          <div className="mt-10 grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
            <div className="space-y-2">
              {axesSection.list.map((axe, idx) => {
                const title = axe.split(':')[0].trim()
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveAxe(idx)}
                    className={`group w-full rounded-2xl p-4 text-left transition ${
                      activeAxe === idx ? 'bg-hf-blue text-white shadow-md' : 'border-2 border-slate-100 bg-white text-slate-700 hover:border-hf-orange'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                        activeAxe === idx ? 'bg-hf-orange text-white' : 'bg-hf-blue/10 text-hf-blue group-hover:bg-hf-orange group-hover:text-white'
                      }`}>{idx + 1}</span>
                      <span className="text-sm font-bold leading-5">{title}</span>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="relative overflow-hidden rounded-[28px] bg-hf-blue p-8 text-white shadow-lg md:p-10">
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-[260px] w-[260px]">
                <SilhouetteFiligree opacity={0.1} className="h-full w-full" />
              </div>
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-hf-orange px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">
                  Axe {activeAxe + 1}
                </span>
                {(() => {
                  const parts = axesSection.list[activeAxe].split(':')
                  const title = parts[0].trim()
                  const body = parts.slice(1).join(':').trim()
                  return (
                    <>
                      <h3 className="mt-5 text-2xl font-black md:text-3xl">{title}</h3>
                      <div className="mt-3 h-1 w-12 rounded-full bg-hf-orange" />
                      {body ? (
                        <p className="mt-5 text-base leading-8 text-slate-100">{body}</p>
                      ) : (
                        <p className="mt-5 text-base leading-8 text-slate-100">{axesSection.list[activeAxe]}</p>
                      )}
                    </>
                  )
                })()}
                <p className="mt-8 text-xs uppercase tracking-wider text-slate-300">
                  {activeAxe + 1} / {axesSection.list.length}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </section>

      {/* ════════════ ORGANES (interactif, avec nota bene RH) ════════════ */}
      <section id="organes" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">Nos Organes</p>
          <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">Une gouvernance structurée et transparente</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.35fr_0.65fr]">
          {/* Liste des organes */}
          <div className="space-y-2">
            {organs.map((organ, idx) => (
              <button
                key={organ.title}
                type="button"
                onClick={() => setActiveOrgan(idx)}
                className={`group w-full rounded-2xl p-4 text-left transition ${
                  activeOrgan === idx ? 'bg-hf-blue text-white shadow-md' : 'border-2 border-slate-100 bg-white text-slate-700 hover:border-hf-orange'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black ${
                    activeOrgan === idx ? 'bg-hf-orange text-white' : 'bg-hf-blue/10 text-hf-blue group-hover:bg-hf-orange group-hover:text-white'
                  }`}>{idx + 1}</span>
                  <span className="text-sm font-bold leading-5">{organ.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Détail de l'organe sélectionné */}
          <div className="relative overflow-hidden rounded-[28px] bg-hf-blue p-8 text-white shadow-lg md:p-10">
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-[260px] w-[260px]">
              <SilhouetteFiligree opacity={0.1} className="h-full w-full" />
            </div>
            <div className="relative">
              <span className="inline-flex items-center gap-2 rounded-full bg-hf-orange px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white">
                {organs[activeOrgan]?.title}
              </span>
              <div className="mt-3 h-1 w-12 rounded-full bg-hf-orange" />
              <p className="mt-5 text-base leading-8 text-slate-100">
                {organs[activeOrgan]?.text}
              </p>
              {/* Nota bene RH pour Direction Exécutive */}
              {organs[activeOrgan]?.title === 'Direction Exécutive' && organs[activeOrgan]?.noteRH && (
                <div className="mt-6 rounded-2xl border border-hf-orange/30 bg-white/10 p-4 text-sm italic text-slate-200 backdrop-blur">
                  <span className="font-bold text-hf-orange">Référentiel RH – </span>
                  {organs[activeOrgan].noteRH}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ BANNIÈRE ════════════ */}
      <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] shadow-lg">
          <img src={ABOUT_BANNER_IMAGE} alt="Action de terrain Horizons Femmes" className="h-[320px] w-full object-cover md:h-[400px]" />
          <div className="absolute inset-0 bg-gradient-to-r from-hf-blue/95 via-hf-blue/70 to-hf-blue/20" />
          <div className="absolute inset-y-0 left-0 flex max-w-2xl items-center p-6 md:p-12">
            <div className="text-white">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-hf-orange">Notre engagement</p>
              <h2 className="mt-3 text-2xl font-black md:text-3xl lg:text-4xl">Présents sur le terrain depuis plus de 20 ans</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-100">
                De Yaoundé à Ebolowa, de Douala à Bafoussam, Horizons Femmes déploie ses actions au plus près des communautés.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ DISTINCTIONS HONORIFIQUES ════════════ */}
      <section id="honors" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">{about.honorsTitle}</p>
          <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">Une reconnaissance institutionnelle constante</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
          <p className="mt-4 text-base leading-relaxed text-slate-600">{about.honorsSubtitle}</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {about.honors.map((honor) => (
            <div key={honor.title} className="rounded-[28px] bg-hf-blue p-7 text-white shadow-lg transition hover:shadow-xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-hf-orange">{honor.year}</p>
              <h3 className="mt-3 text-2xl font-black">{honor.title}</h3>
              <div className="mt-3 h-1 w-12 rounded-full bg-hf-orange" />
              <p className="mt-5 text-base leading-8 text-slate-100">{honor.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ════════════ BUREAUX (carte signalétique) ════════════ */}
      <section id="carte-signaletique" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">{about.officesTitle}</p>
          <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">Une présence territoriale forte</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
          <p className="mt-4 text-base leading-relaxed text-slate-600">{about.officesSubtitle}</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Carte statique */}
          <div className="overflow-hidden rounded-[28px] border-2 border-slate-100 bg-white shadow-sm">
            <div className="h-1 bg-hf-orange" />
            <div className="relative aspect-[3/4] w-full">
              <img src={ABOUT_MAP_IMAGE} alt="Carte des antennes Horizons Femmes" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-hf-blue/5" />
            </div>
            <div className="border-t border-slate-100 bg-white px-5 py-3 text-center">
              <p className="text-[11px] font-medium text-slate-500">
                <span className="inline-block h-2 w-2 rounded-full bg-hf-orange align-middle" />{' '}
                Implantation des antennes Horizons Femmes au Cameroun
              </p>
            </div>
          </div>

          {/* Bureau actif + liste */}
          <div className="space-y-4">
            <div className="rounded-[28px] border-2 border-hf-orange bg-white p-7 shadow-lg">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-full border-[3px] border-hf-orange bg-hf-blue text-base font-black text-white shadow-md">
                  {activeOffice?.label}
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-hf-orange">{activeOffice?.region}</p>
                  <p className="text-xl font-black text-hf-blue">{activeOffice?.name}</p>
                  <p className="text-sm font-bold text-slate-600">{activeOffice?.city}</p>
                </div>
              </div>
              <div className="mt-5 space-y-3 border-t border-slate-100 pt-5 text-sm">
                <div className="flex items-start gap-2 text-slate-700">
                  <span className="text-hf-orange">📍</span>
                  <span className="leading-6">{activeOffice?.address}</span>
                </div>
                <div className="flex items-start gap-2 text-slate-700">
                  <span className="text-hf-orange">📞</span>
                  <a href={`tel:${activeOffice?.phone?.replace(/\s/g, '')}`} className="font-bold text-hf-blue hover:text-hf-orange">{activeOffice?.phone}</a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {about.offices.filter(o => o.id !== activeOffice?.id).map(office => (
                <button
                  key={office.id}
                  type="button"
                  onClick={() => setActiveOfficeId(office.id)}
                  className="group rounded-2xl border-2 border-slate-100 bg-white p-4 text-left shadow-sm transition hover:border-hf-orange hover:shadow-md"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-hf-blue text-xs font-black text-white group-hover:bg-hf-orange">{office.label}</span>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-wider text-hf-orange">{office.region}</p>
                  <p className="mt-1 text-sm font-bold text-hf-blue">{office.city}</p>
                  <p className="mt-0.5 text-[10px] text-slate-500">{office.short}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════ PARTENAIRES ════════════ */}
      {partnerLogos.length > 0 && (
        <section id="partenaires-about" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-hf-orange">Partenaires</p>
              <h2 className="mt-3 text-3xl font-black text-hf-blue md:text-4xl">Des partenariats qui renforcent notre action</h2>
              <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
            </div>

            <div className="relative mt-8 overflow-hidden">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-24" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-24" />
              <div className="partner-marquee-track flex w-max gap-4 md:gap-6">
                {[...partnerLogos, ...partnerLogos].map((item, index) => (
                  <div key={`${item.alt}-${index}`} className="flex h-28 w-[220px] shrink-0 items-center justify-center rounded-[22px] border border-slate-200 bg-slate-50 p-4 transition hover:border-hf-orange md:w-[250px]">
                    <img src={item.src} alt={item.alt} className="max-h-14 w-auto object-contain md:max-h-16" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ════════════ VALEURS (agrandie) ════════════ */}
      <section id="values" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[28px] bg-hf-blue p-10 text-white shadow-xl md:p-14">
          <div className="pointer-events-none absolute -right-12 -bottom-12 h-[320px] w-[320px]">
            <SilhouetteFiligree opacity={0.1} className="h-full w-full" />
          </div>
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-hf-orange">Nos valeurs</p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">{about.valuesReminderTitle}</h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-hf-orange" />
            <p className="mt-6 max-w-3xl text-lg leading-9 text-slate-200 md:text-xl">
              {about.valuesReminderText}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {about.valuesReminderList.map((value) => (
                <span key={value} className="rounded-full border-2 border-hf-orange/40 bg-white/10 px-6 py-3 text-base font-bold text-white backdrop-blur">
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