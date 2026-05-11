import { Link } from 'react-router-dom'
import SilhouetteFiligree from '../../components/sagco/SilhouetteFiligree'

const HERO_IMAGE =
  'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202025-07-09%20at%2017.42.26.jpeg'
const MAP_IMAGE = 'https://femme.kdllogiscargo.com/assets/images/cameroun21.gif'

const specificObjectives = [
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

const actors = [
  { role: 'Organisme Porteur', name: 'Horizons Femmes', desc: 'ONG œuvrant pour la santé et les droits des femmes.' },
  { role: 'Partenaire Opérationnel', name: 'Moto Action Cameroun', desc: 'Acteur clé pour le déploiement des activités sur le terrain.' },
  { role: 'Financement', name: 'Expertise France', desc: 'Agence publique de coopération technique internationale française.' },
]

export default function SagcoAboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1B3F8C]">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="" className="h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3F8C] via-[#1B3F8C]/85 to-[#1B3F8C]/40" />
        </div>
        <div className="pointer-events-none absolute -right-20 top-0 h-full w-[500px]">
          <SilhouetteFiligree color="#ffffff" opacity={0.18} className="h-full w-full" />
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

      {/* OBJECTIF GÉNÉRAL — cartouche bleu marine avec filigrane orange (cf. charte) */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6 xl:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#1B3F8C] p-8 text-white shadow-xl md:p-12">
            <div className="pointer-events-none absolute -right-12 -bottom-12 h-[260px] w-[260px]">
              <SilhouetteFiligree color="#F4952F" opacity={0.2} className="h-full w-full" />
            </div>
            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
                Objectif Général
              </span>
              <h2 className="mt-3 text-2xl font-black md:text-3xl">
                Une approche participative et transformative de genre
              </h2>
              <div className="mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
              <p className="mt-5 text-base leading-relaxed text-slate-100 md:text-lg">
                Accroître l’accès aux soins de santé des travailleuses du sexe
                (TS) du Cameroun dans une approche participative et
                transformative de genre, afin de réduire les inégalités et
                favoriser leur autonomie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIFS SPÉCIFIQUES */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
              Nos Objectifs Spécifiques
            </span>
            <h2 className="mt-4 text-3xl font-black text-[#1B3F8C] md:text-4xl">
              Quatre axes d’intervention
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {specificObjectives.map((os) => (
              <div
                key={os.code}
                className="group rounded-2xl border-2 border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#F4952F] hover:shadow-xl"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#1B3F8C] text-base font-black text-white shadow-md">
                    {os.code}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1B3F8C]">
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
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
              Nos Zones d’Intervention
            </span>
            <h2 className="mt-4 text-3xl font-black text-[#1B3F8C] md:text-4xl">
              4 régions stratégiques du Cameroun
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
          </div>

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-sm">
              <img src={MAP_IMAGE} alt="Carte des zones d'intervention au Cameroun" className="h-auto w-full rounded-xl" />
              <p className="mt-3 text-center text-xs italic text-slate-500">
                Carte illustrative des 4 régions cibles
              </p>
            </div>
            <div className="space-y-4">
              {zones.map((z) => (
                <div
                  key={z.name}
                  className="rounded-2xl border-2 border-slate-100 bg-white p-5 shadow-sm transition hover:border-[#F4952F]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F4952F] text-xs font-black text-white">
                      📍
                    </span>
                    <h3 className="text-lg font-bold text-[#1B3F8C]">{z.name}</h3>
                  </div>
                  <p className="mt-2 text-sm text-slate-600">{z.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACTEURS CLÉS */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
              Nos Acteurs Clés
            </span>
            <h2 className="mt-4 text-3xl font-black text-[#1B3F8C] md:text-4xl">
              Une collaboration solide
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {actors.map((a) => (
              <div
                key={a.name}
                className="group overflow-hidden rounded-2xl border-2 border-slate-100 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:border-[#F4952F] hover:shadow-xl"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[#F4952F] bg-[#1B3F8C] text-2xl font-black text-white shadow-lg">
                  {a.name.charAt(0)}
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-wider text-[#F4952F]">
                  {a.role}
                </p>
                <h3 className="mt-2 text-xl font-black text-[#1B3F8C]">
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