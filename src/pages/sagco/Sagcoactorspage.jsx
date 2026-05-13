import { Link } from 'react-router-dom'

const HERO_IMAGE =
  'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202025-07-02%20at%2013.11.32.jpeg'

const strategicPartners = [
  {
    name: 'Horizons Femmes',
    role: 'Organisme Porteur',
    desc: 'Organisation non gouvernementale œuvrant pour la santé et les droits des femmes.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg',
    website: 'https://horizonsfemmes.org',
  },

  {
    name: 'Moto Action Cameroun',
    role: 'Partenaire de Mise en Œuvre',
    desc: 'Partenaire opérationnel clé pour le déploiement des activités sur le terrain.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg',
    website: 'https://motoaction.org',
  },

  {
    name: 'Expertise France',
    role: 'Partenaire Financier',
    desc: 'Agence publique de coopération technique internationale française.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/5/5d/Expertise_France_logo.png',
    website: 'https://www.expertisefrance.fr',
  },
]

const otherPartners = [
  {
    name: 'L’Initiative',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg',
    website: 'https://linitiative.expertisefrance.fr',
  },

  {
    name: 'Fonds Mondial',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/0/05/The_Global_Fund_logo.svg',
    website: 'https://www.theglobalfund.org',
  },

  {
    name: 'AFD',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/8/87/Agence_Française_de_Développement_logo.svg',
    website: 'https://www.afd.fr',
  },

  {
    name: 'ANSS Burundi',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg',
    website: 'https://anss.bi',
  },

  {
    name: 'Initiative France',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg',
    website: 'https://www.initiative-france.fr',
  },

  {
    name: 'SOS SIDA RDC',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg',
    website: '#',
  },
]

const beneficiaries = [
  { icon: '♀', name: 'Travailleuses du Sexe (TS)' },
  { icon: '👥', name: 'Clients des TS' },
  { icon: '🏥', name: 'Personnel de Santé' },
  { icon: '🔑', name: 'Gatekeepers' },
]

export default function SagcoActorsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1B3F8C]">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt=""
            className="h-full w-full object-cover opacity-35"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3F8C] via-[#1B3F8C]/85 to-[#1B3F8C]/40" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 py-20 md:px-6 md:py-28 xl:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-200">
            <Link to="/sagco" className="hover:text-[#F4952F]">
              Accueil
            </Link>

            <span>/</span>

            <span className="text-[#F4952F]">Acteurs</span>
          </nav>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Les <span className="text-[#F4952F]">Acteurs</span> du Projet
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-100">
            Une synergie d’expertises pour un impact durable.
          </p>
        </div>
      </section>

      {/* STRATEGIC PARTNERS */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
              Nos Partenaires Stratégiques
            </span>

            <h2 className="mt-4 text-3xl font-black text-[#1B3F8C] md:text-4xl">
              Une collaboration étroite
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />

            <p className="mt-4 text-slate-600">
              Ce projet repose sur une collaboration étroite entre des
              organisations engagées.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {strategicPartners.map((p) => (
              <a
                key={p.name}
                href={p.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-2xl border-2 border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#F4952F] hover:shadow-xl"
              >
                <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full border-[3px] border-[#F4952F] bg-white shadow-lg">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-contain p-2"
                  />
                </div>

                <h3 className="mt-5 text-center text-xl font-black text-[#1B3F8C]">
                  {p.name}
                </h3>

                <p className="mt-1 text-center text-xs font-bold uppercase tracking-wider text-[#F4952F]">
                  {p.role}
                </p>

                <p className="mt-4 text-center text-sm leading-relaxed text-slate-600">
                  {p.desc}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER PARTNERS */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
              Autres Partenaires & Soutiens
            </span>

            <h2 className="mt-4 text-3xl font-black text-[#1B3F8C] md:text-4xl">
              Nos partenaires institutionnels et financiers
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {otherPartners.map((partner) => (
              <a
                key={partner.name}
                href={partner.website}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex aspect-square items-center justify-center rounded-2xl border-2 border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#F4952F] hover:shadow-xl"
              >
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="max-h-20 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFICIARIES */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
              Bénéficiaires & Cibles
            </span>

            <h2 className="mt-4 text-3xl font-black text-[#1B3F8C] md:text-4xl">
              Au cœur de nos interventions
            </h2>

            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {beneficiaries.map((b) => (
              <div
                key={b.name}
                className="group flex flex-col items-center rounded-2xl border-2 border-slate-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#F4952F] hover:shadow-xl"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#1B3F8C] text-3xl text-white shadow-md">
                  <span aria-hidden>{b.icon}</span>
                </div>

                <p className="mt-5 text-base font-bold text-[#1B3F8C]">
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