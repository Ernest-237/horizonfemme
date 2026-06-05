import { Link } from 'react-router-dom'

const HERO_IMAGE =
  'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202025-07-02%20at%2013.11.32.jpeg'

const partenairesTechniquesFinanciers = [
  { name: 'Expertise France', desc: 'Agence publique de coopération technique internationale française.' },
  { name: 'L’Initiative', desc: 'Mécanisme de financement complémentaire pour les projets de santé mondiale.' },
]

const partenairesMiseOeuvre = [
  { name: 'Moto Action Cameroun', desc: 'Partenaire opérationnel pour le déploiement terrain et la mobilisation communautaire.' },
  { name: 'MINSANTÉ', desc: 'Ministère de la Santé Publique du Cameroun.' },
  { name: 'CNLS', desc: 'Conseil National de Lutte contre le SIDA.' },
]

const partenairesStrategiques = [
  { name: 'OSC partenaires', desc: 'Organisations de la société civile collaborant sur les activités de sensibilisation et de plaidoyer.' },
  { name: 'FOSA', desc: 'Formations Sanitaires (centres de santé, hôpitaux de district).' },
  { name: 'Districts de Santé', desc: 'Structures sanitaires locales assurant la couverture des soins de premier recours.' },
  { name: 'Délégation Régionale', desc: 'Représentation régionale du Ministère de la Santé Publique.' },
]

export default function SagcoActorsPage() {
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
            <span className="text-[#F4952F]">Acteurs</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Les <span className="text-[#F4952F]">Acteurs</span> du Projet
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-100">
            Une synergie d’expertises structurée autour de trois grandes catégories de partenaires.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#techniques-financiers" className="rounded-full border-2 border-white/30 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-[#F4952F]">
              Techniques & Financiers
            </a>
            <a href="#mise-oeuvre" className="rounded-full border-2 border-white/30 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-[#F4952F]">
              Mise en œuvre
            </a>
            <a href="#strategiques" className="rounded-full border-2 border-white/30 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-[#F4952F]">
              Stratégiques
            </a>
          </div>
        </div>
      </section>

      {/* PARTENAIRES TECHNIQUES ET FINANCIERS */}
      <section id="techniques-financiers" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">Partenaires techniques et financiers</span>
          <h2 className="mt-3 text-3xl font-black text-[#1B3F8C] md:text-4xl">Ceux qui rendent le projet possible</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#F4952F]" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {partenairesTechniquesFinanciers.map((p) => (
              <div key={p.name} className="group rounded-2xl border-2 border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#F4952F]">
                <h3 className="text-xl font-black text-[#1B3F8C]">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTENAIRES DE MISE EN ŒUVRE */}
      <section id="mise-oeuvre" className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">Partenaires de mise en œuvre</span>
          <h2 className="mt-3 text-3xl font-black text-[#1B3F8C] md:text-4xl">L’action sur le terrain</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#F4952F]" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {partenairesMiseOeuvre.map((p) => (
              <div key={p.name} className="group rounded-2xl border-2 border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#F4952F]">
                <h3 className="text-xl font-black text-[#1B3F8C]">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTENAIRES STRATÉGIQUES */}
      <section id="strategiques" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">Partenaires stratégiques</span>
          <h2 className="mt-3 text-3xl font-black text-[#1B3F8C] md:text-4xl">Le réseau qui amplifie l’impact</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#F4952F]" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {partenairesStrategiques.map((p) => (
              <div key={p.name} className="group rounded-2xl border-l-4 border-[#F4952F] bg-slate-50 p-6 shadow-sm transition hover:bg-white">
                <h3 className="text-lg font-black text-[#1B3F8C]">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}