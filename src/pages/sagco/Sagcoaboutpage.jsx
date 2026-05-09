import { Link } from 'react-router-dom'

const HERO_IMAGE =
  'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202025-07-09%20at%2017.42.26.jpeg'
const MAP_IMAGE = 'https://femme.kdllogiscargo.com/assets/images/cameroun21.gif'

const specificObjectives = [
  {
    code: 'OS1',
    title: 'Renforcement des Capacités',
    text: 'Autonomiser les TS et les gatekeepers dans la mobilisation et sensibilisation de leurs pairs et clients sur le VIH/SIDA et la santé globale.',
    icon: '🎯',
  },
  {
    code: 'OS2',
    title: 'Offre de Soins de Proximité',
    text: 'Assurer une offre de santé globale de proximité pour les TS.',
    icon: '🚐',
  },
  {
    code: 'OS3',
    title: 'Réponse aux VBG',
    text: 'Améliorer la réponse aux violences basées sur le genre (VBG) en faveur des TS.',
    icon: '🛡️',
  },
  {
    code: 'OS4',
    title: 'Documentation & Plaidoyer',
    text: 'Documenter et responsabiliser les pairs éducateurs et gatekeepers pour réduire les barrières d’accès aux soins et développer une stratégie de plaidoyer.',
    icon: '📢',
  },
]

const zones = [
  {
    name: 'Région du Centre',
    text: 'Interventions ciblées dans la capitale Yaoundé et ses environs.',
  },
  {
    name: 'Région du Littoral',
    text: 'Focus sur Douala, le cœur économique.',
  },
  {
    name: 'Région de l’Ouest',
    text: 'Zone aux dynamiques culturelles fortes.',
  },
  {
    name: 'Région du Sud',
    text: 'Interventions dans les zones frontalières.',
  },
]

const actors = [
  {
    role: 'Organisme Porteur',
    name: 'Horizons Femmes',
    desc: 'ONG œuvrant pour la santé et les droits des femmes.',
    color: 'from-pink-500 to-fuchsia-500',
  },
  {
    role: 'Partenaire Opérationnel',
    name: 'Moto Action Cameroun',
    desc: 'Acteur clé pour le déploiement des activités sur le terrain.',
    color: 'from-fuchsia-500 to-purple-500',
  },
  {
    role: 'Financement',
    name: 'Expertise France',
    desc: 'Agence publique de coopération technique internationale française.',
    color: 'from-purple-500 to-indigo-500',
  },
]

export default function SagcoAboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="À propos de SAGCO"
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
            <span className="text-pink-300">À Propos</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Notre Mission &{' '}
            <span className="bg-gradient-to-r from-pink-400 to-fuchsia-300 bg-clip-text text-transparent">
              Vision
            </span>
          </h1>
        </div>
      </section>

      {/* GENERAL OBJECTIVE */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6 xl:px-8">
          <div className="rounded-3xl border border-pink-100 bg-gradient-to-br from-pink-50 to-fuchsia-50 p-8 shadow-sm md:p-12">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
              Objectif Général
            </span>
            <h2 className="mt-3 text-2xl font-black text-slate-900 md:text-3xl">
              Une approche participative et transformative de genre
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-700 md:text-lg">
              Accroître l’accès aux soins de santé des travailleuses du sexe
              (TS) du Cameroun dans une approche participative et transformative
              de genre, afin de réduire les inégalités et favoriser leur
              autonomie.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIFIC OBJECTIVES */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
              Nos Objectifs Spécifiques
            </span>
            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">
              Quatre axes d’intervention
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500" />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {specificObjectives.map((os) => (
              <div
                key={os.code}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 text-2xl shadow-md">
                    <span aria-hidden>{os.icon}</span>
                  </div>
                  <div>
                    <span className="inline-block rounded-full bg-pink-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-pink-700">
                      {os.code}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-slate-900">
                      {os.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {os.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
              Nos Zones d’Intervention
            </span>
            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">
              Le projet se déploie dans 4 régions stratégiques
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500" />
          </div>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <img
                src={MAP_IMAGE}
                alt="Carte des zones d'intervention au Cameroun"
                className="h-auto w-full rounded-2xl"
              />
              <p className="mt-3 text-center text-xs italic text-slate-500">
                Carte illustrative des 4 régions cibles
              </p>
            </div>
            <div className="space-y-4">
              {zones.map((z) => (
                <div
                  key={z.name}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-pink-300 hover:shadow-md"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="text-xl"
                      aria-hidden
                    >
                      📍
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">
                      {z.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{z.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* KEY ACTORS */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
              Nos Acteurs Clés
            </span>
            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">
              Une collaboration solide
            </h2>
            <p className="mt-4 text-slate-600">
              Ce projet est le fruit d’une collaboration solide entre plusieurs
              acteurs engagés.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {actors.map((a) => (
              <div
                key={a.name}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${a.color} text-2xl font-black text-white shadow-lg`}
                >
                  {a.name.charAt(0)}
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-pink-600">
                  {a.role}
                </p>
                <h3 className="mt-2 text-xl font-black text-slate-900">
                  {a.name}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}