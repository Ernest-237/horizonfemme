import { Link } from 'react-router-dom'

const HERO_IMAGE =
  'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202025-07-09%20at%2017.42.26.jpeg'
const MAP_IMAGE = 'https://femme.kdllogiscargo.com/assets/images/cameroun21.gif'

const objectives = [
  {
    code: 'OS1',
    title: 'Renforcement des Capacités',
    text: 'Autonomiser les TS et les gatekeepers dans la mobilisation et sensibilisation de leurs pairs et clients sur le VIH/SIDA et la santé globale.',
  },
  {
    code: 'OS2',
    title: 'Offre de Soins de Proximité',
    text: 'Assurer une offre de santé globale de proximité pour les TS.',
  },
  {
    code: 'OS3',
    title: 'Réponse aux VBG',
    text: 'Améliorer la réponse aux violences basées sur le genre (VBG) en faveur des TS.',
  },
  {
    code: 'OS4',
    title: 'Documentation & Plaidoyer',
    text: 'Documenter et responsabiliser les pairs éducateurs et gatekeepers pour réduire les barrières d’accès aux soins et développer une stratégie de plaidoyer.',
  },
]

const zones = [
  { name: 'Région du Centre', text: 'Interventions ciblées dans la capitale Yaoundé et ses environs.' },
  { name: 'Région du Littoral', text: 'Focus sur Douala, le cœur économique.' },
  { name: 'Région de l’Ouest', text: 'Zone aux dynamiques culturelles fortes.' },
  { name: 'Région du Sud', text: 'Interventions dans les zones frontalières.' },
]

const actorsByCategory = {
  techniquesFinanciers: [
    { name: 'Expertise France', role: 'Agence publique de coopération technique internationale' },
    { name: 'Initiative', role: 'Mécanisme de financement complémentaire' },
  ],
  miseEnOeuvre: [
    { name: 'Moto Action', role: 'Partenaire opérationnel de terrain' },
    { name: 'MINSANTÉ', role: 'Ministère de la Santé Publique' },
    { name: 'CNLS', role: 'Conseil National de Lutte contre le SIDA' },
  ],
  strategiques: [
    { name: 'OSC partenaires', role: 'Organisations de la société civile' },
    { name: 'FOSA', role: 'Formations Sanitaires' },
    { name: 'Districts de Santé', role: 'Structures sanitaires locales' },
    { name: 'Délégation Régionale', role: 'Représentation régionale de la santé' },
  ],
}

export default function SagcoAboutPage() {
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
            <span className="text-[#F4952F]">À Propos</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Notre Mission & <span className="text-[#F4952F]">Vision</span>
          </h1>
        </div>
      </section>

      {/* CONTEXTE & JUSTIFICATION */}
      <section id="contexte" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">Contexte & Justification</span>
          <h2 className="mt-3 text-3xl font-black text-[#1B3F8C] md:text-4xl">Pourquoi ce projet ?</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#F4952F]" />
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-slate-700 md:text-lg">
            Les travailleuses du sexe (TS) au Cameroun restent confrontées à de multiples vulnérabilités : exposition au VIH, violences basées sur le genre, marginalisation sociale et difficultés d’accès aux soins. Le projet SAGCO s’inscrit dans une dynamique de réponse inclusive et participative, visant à améliorer durablement leur santé globale et leurs droits.
          </p>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-slate-600">
            Porté par Horizons Femmes et Moto Action, avec l’appui d’Expertise France et de l’Initiative, il s’appuie sur une approche de proximité et de mobilisation communautaire pour lever les barrières et responsabiliser les acteurs locaux.
          </p>
        </div>
      </section>

      {/* OBJECTIF GÉNÉRAL */}
      <section id="objectifs" className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6 xl:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#1B3F8C] p-8 text-white shadow-xl md:p-12">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">Objectif Général</span>
            <h2 className="mt-3 text-2xl font-black md:text-3xl">Une approche participative et transformative de genre</h2>
            <div className="mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
            <p className="mt-5 text-base leading-relaxed text-slate-100 md:text-lg">
              Accroître l’accès aux soins de santé des travailleuses du sexe (TS) du Cameroun dans une approche participative et transformative de genre, afin de réduire les inégalités et favoriser leur autonomie.
            </p>
          </div>
        </div>
      </section>

      {/* OBJECTIFS SPÉCIFIQUES */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">Objectifs Spécifiques</span>
            <h2 className="mt-4 text-3xl font-black text-[#1B3F8C] md:text-4xl">Quatre axes d’intervention</h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {objectives.map((os) => (
              <div key={os.code} className="group rounded-2xl border-2 border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#F4952F] hover:shadow-xl">
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1B3F8C] text-base font-black text-white shadow-md">
                    {os.code}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1B3F8C]">{os.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{os.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RÉSULTATS ATTENDUS */}
      <section id="resultats" className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">Résultats attendus</span>
          <h2 className="mt-3 text-3xl font-black text-[#1B3F8C] md:text-4xl">Ce que nous voulons changer</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#F4952F]" />
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Augmentation du taux de dépistage et de prise en charge des IST/VIH chez les TS.",
              "Réduction des violences basées sur le genre signalées par les TS.",
              "Renforcement des compétences de 200 pairs éducatrices et gatekeepers.",
              "Accès effectif à une offre de santé de proximité via le Bus des Femmes.",
              "Élaboration d’une stratégie de plaidoyer documentée.",
              "Amélioration de la coordination entre acteurs communautaires et sanitaires.",
            ].map((res, i) => (
              <div key={i} className="rounded-2xl border-l-4 border-[#F4952F] bg-white p-5 shadow-sm">
                <p className="text-sm font-medium text-slate-700">{res}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONES D’IMPLÉMENTATION */}
      <section id="zones" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">Zones d’implémentation</span>
          <h2 className="mt-3 text-3xl font-black text-[#1B3F8C] md:text-4xl">4 régions stratégiques du Cameroun</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#F4952F]" />
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm">
              <img src={MAP_IMAGE} alt="Carte des zones d'intervention" className="h-auto w-full rounded-xl" />
              <p className="mt-3 text-center text-xs italic text-slate-500">Carte illustrative des 4 régions cibles</p>
            </div>
            <div className="space-y-4">
              {zones.map((z) => (
                <div key={z.name} className="rounded-2xl border-2 border-slate-100 bg-white p-5 shadow-sm transition hover:border-[#F4952F]">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4952F] text-xs font-black text-white">📍</span>
                    <h3 className="text-lg font-bold text-[#1B3F8C]">{z.name}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{z.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVITÉS PHARES */}
      <section id="activites" className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">Activités phares</span>
          <h2 className="mt-3 text-3xl font-black text-[#1B3F8C] md:text-4xl">Nos actions sur le terrain</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#F4952F]" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              { title: 'Mobilisation communautaire', desc: 'Sensibilisation porte-à-porte et causeries éducatives animées par les pairs éducatrices.' },
              { title: 'Bus des Femmes', desc: 'Unité mobile offrant dépistage VIH, consultation IST, conseils en santé sexuelle et reproductive.' },
              { title: 'Renforcement des capacités', desc: 'Formations continues des TS, gatekeepers et personnels de santé sur les droits et la santé.' },
              { title: 'Plaidoyer & Documentation', desc: 'Collecte de données, rapports de capitalisation et ateliers de plaidoyer avec les autorités locales.' },
            ].map((act) => (
              <div key={act.title} className="rounded-2xl border-2 border-slate-100 bg-white p-7 shadow-sm transition hover:border-[#F4952F]">
                <h3 className="text-xl font-black text-[#1B3F8C]">{act.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTEURS DU PROJET */}
      <section id="acteurs" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">Acteurs du projet</span>
          <h2 className="mt-3 text-3xl font-black text-[#1B3F8C] md:text-4xl">Partenaires et collaboration</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#F4952F]" />
          {Object.entries(actorsByCategory).map(([category, partners]) => (
            <div key={category} className="mt-10">
              <h3 className="text-xl font-bold text-[#1B3F8C]">
                {category === 'techniquesFinanciers' && 'Partenaires techniques et financiers'}
                {category === 'miseEnOeuvre' && 'Partenaires de mise en œuvre'}
                {category === 'strategiques' && 'Partenaires stratégiques'}
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {partners.map((p) => (
                  <div key={p.name} className="rounded-2xl border-2 border-slate-100 bg-slate-50 p-5 shadow-sm transition hover:border-[#F4952F]">
                    <p className="font-black text-[#1B3F8C]">{p.name}</p>
                    <p className="mt-1 text-xs text-slate-500">{p.role}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}