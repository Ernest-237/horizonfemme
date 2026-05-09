import { Link } from 'react-router-dom'

const HERO_IMAGE =
  'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202025-07-02%20at%2013.11.32.jpeg'

const strategicPartners = [
  {
    name: 'Horizons Femmes',
    role: 'Organisme Porteur',
    desc: 'Organisation non gouvernementale œuvrant pour la santé et les droits des femmes.',
    color: 'from-pink-500 to-fuchsia-500',
  },
  {
    name: 'Moto Action Cameroun',
    role: 'Partenaire de Mise en Œuvre',
    desc: 'Partenaire opérationnel clé pour le déploiement des activités sur le terrain.',
    color: 'from-fuchsia-500 to-purple-500',
  },
  {
    name: 'Expertise France',
    role: 'Partenaire Financier',
    desc: 'Agence publique de coopération technique internationale française.',
    color: 'from-purple-500 to-indigo-500',
  },
]

const otherPartners = [
  'L’Initiative',
  'Fonds Mondial',
  'AFD',
  'ANSS Burundi',
  'Initiative France',
  'SOS SIDA RDC',
]

const beneficiaries = [
  { icon: '♀️', name: 'Travailleuses du Sexe (TS)' },
  { icon: '👥', name: 'Clients des TS' },
  { icon: '🏥', name: 'Personnel de Santé' },
  { icon: '🔑', name: 'Gatekeepers' },
]

export default function SagcoActorsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Acteurs SAGCO"
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
            <span className="text-pink-300">Acteurs</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Les{' '}
            <span className="bg-gradient-to-r from-pink-400 to-fuchsia-300 bg-clip-text text-transparent">
              Acteurs
            </span>{' '}
            du Projet
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Une synergie d’expertises pour un impact durable.
          </p>
        </div>
      </section>

      {/* STRATEGIC PARTNERS */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
              Nos Partenaires Stratégiques
            </span>
            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">
              Une collaboration étroite
            </h2>
            <p className="mt-4 text-slate-600">
              Ce projet repose sur une collaboration étroite entre des
              organisations engagées.
            </p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {strategicPartners.map((p) => (
              <div
                key={p.name}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${p.color} opacity-10 transition group-hover:opacity-20`}
                />
                <div
                  className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${p.color} text-2xl font-black text-white shadow-lg`}
                >
                  {p.name.charAt(0)}
                </div>
                <h3 className="mt-5 text-xl font-black text-slate-900">
                  {p.name}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-pink-600">
                  {p.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER PARTNERS */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
              Autres Partenaires & Soutiens
            </span>
            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">
              Nos partenaires institutionnels et financiers
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {otherPartners.map((name) => (
              <div
                key={name}
                className="flex aspect-square items-center justify-center rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:border-pink-300 hover:shadow-md"
              >
                <p className="text-sm font-bold text-slate-700">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIARIES */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
              Bénéficiaires & Cibles
            </span>
            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">
              Au cœur de nos interventions
            </h2>
            <p className="mt-4 text-slate-600">
              Les groupes clés bénéficiaires des activités du projet.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {beneficiaries.map((b) => (
              <div
                key={b.name}
                className="group flex flex-col items-center rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-pink-50 p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-4xl shadow-md">
                  <span aria-hidden>{b.icon}</span>
                </div>
                <p className="mt-5 text-base font-bold text-slate-900">
                  {b.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}