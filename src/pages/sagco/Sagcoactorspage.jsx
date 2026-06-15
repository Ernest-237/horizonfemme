import { Link } from 'react-router-dom'
import { useState } from 'react'

const HERO_IMAGE =
  'https://femme.kdllogiscargo.com/assets/images/WhatsApp%20Image%202025-07-02%20at%2013.11.32.jpeg'

// Configuration des partenaires avec liens éditables
// Pour modifier un lien, changez la valeur de 'url' pour chaque partenaire
// Mettez url: null si le partenaire n'a pas de site web

const partenairesData = {
  techniquesFinanciers: [
    { 
      name: 'Initiative', 
      desc: 'Mécanisme de financement complémentaire pour les projets de santé mondiale.',
      url: 'https://initiative.fr',
      urlEditable: true
    },
    { 
      name: 'Expertise France', 
      desc: 'Agence publique de coopération technique internationale française.',
      url: 'https://expertisefrance.fr',
      urlEditable: true
    },
  ],
  miseOeuvre: [
    { 
      name: 'Moto Action Cameroun', 
      desc: 'Partenaire opérationnel pour le déploiement terrain et la mobilisation communautaire.',
      url: 'https://www.motoaction.org',
     
      urlEditable: true
    },
  ],
  institutionnels: [
    { 
      name: 'MINSANTÉ', 
      desc: 'Ministère de la Santé Publique du Cameroun.',
      url: 'https://minsante.cm',
      urlEditable: true
    },
    { 
      name: 'MINPROFF', 
      desc: 'Ministère de la Promotion de la Femme et de la Famille.',
      url: 'https://minproff.gov.cm',
      urlEditable: true
    },
    { 
      name: 'MINAT', 
      desc: 'Ministère de l\'Administration Territoriale.',
      url: 'https://minat.gov.cm/',
      urlEditable: true
    },
    { 
      name: 'MINDDEVEL', 
      desc: 'Ministère de l\'Économie, de la Planification et de l\'Aménagement du Territoire.',
      url: 'https://minddevel.gov.cm',
      urlEditable: true
    },
    { 
      name: 'CNLS', 
      desc: 'Conseil National de Lutte contre le SIDA.',
      url: 'https://cnls.cm',
      urlEditable: true
    },
  ],
  strategiques: [
    { 
      name: 'OSC partenaires', 
      desc: 'Organisations de la société civile collaborant sur les activités de sensibilisation et de plaidoyer HD cité verte, HD Nkoldongo, CMA Mvog Betsi',
      url: 'https://minsante.cm/',
      urlEditable: true
    },
    { 
      name: 'Délégations Régionales', 
      desc: 'Représentations régionales du Ministère de la Santé Publique 1- CMA BEPANDA (DS DEIDO) HÔPITAL DDE DISTRICT DE NYLON HÔPITAL CEBEC DE BONABERI (DS BONASSAMA)',
      url: 'https://minsante.cm/',
      urlEditable: true
    },
    { 
      name: 'Districts de Santé', 
      desc: 'Structures sanitaires locales assurant la couverture des soins de premier recours E termes de DS du projet SAGCO nous en avons 7DS de Nylon DS de Deido DS de Bonassama  DS de BOKO DS de JAPOMA DS de Newbell  DS de LOGBABA',
      url: 'https://minsante.cm/',
      urlEditable: true
    },
    { 
      name: 'FOSA', 
      desc: 'Formations Sanitaires (centres de santé, hôpitaux de district).',
      url: 'https://minsante.cm/',
      urlEditable: true
    },
  ],
}

export default function SagcoActorsPage() {
  const [editMode, setEditMode] = useState(false)
  const [partenaires, setPartenaires] = useState(partenairesData)

  // Fonction pour mettre à jour un lien
  const updateUrl = (category, index, newUrl) => {
    const updatedPartenaires = { ...partenaires }
    updatedPartenaires[category][index].url = newUrl
    setPartenaires(updatedPartenaires)
  }

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
          
          {/* Mode édition toggle */}
          <div className="absolute top-20 right-4 md:top-28 md:right-8">
            <button
              onClick={() => setEditMode(!editMode)}
              className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                editMode 
                  ? 'bg-[#F4952F] text-white' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {editMode ? '✓ Mode édition' : '✎ Éditer les liens'}
            </button>
          </div>

          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Les <span className="text-[#F4952F]">Acteurs</span> du Projet
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-100">
            Une synergie d’expertises structurée autour de quatre grandes catégories de partenaires.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#techniques-financiers" className="rounded-full border-2 border-white/30 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-[#F4952F]">
              Techniques & Financiers
            </a>
            <a href="#mise-oeuvre" className="rounded-full border-2 border-white/30 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-[#F4952F]">
              Mise en œuvre
            </a>
            <a href="#institutionnels" className="rounded-full border-2 border-white/30 bg-white/10 px-5 py-2.5 text-sm font-bold text-white backdrop-blur transition hover:bg-[#F4952F]">
              Institutionnels
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
            {partenaires.techniquesFinanciers.map((p, idx) => (
              <div key={p.name} className="group rounded-2xl border-2 border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#F4952F]">
                <h3 className="text-xl font-black text-[#1B3F8C]">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                {editMode ? (
                  <div className="mt-4">
                    <input
                      type="text"
                      value={p.url || ''}
                      onChange={(e) => updateUrl('techniquesFinanciers', idx, e.target.value)}
                      placeholder="URL du site (ex: https://...)"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-[#F4952F] focus:outline-none"
                    />
                    <p className="mt-1 text-xs text-slate-400">Laissez vide si pas de site</p>
                  </div>
                ) : p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#F4952F] transition hover:gap-3 hover:text-[#1B3F8C]"
                  >
                    Visiter le site <span aria-hidden>→</span>
                  </a>
                ) : (
                  <p className="mt-4 text-xs italic text-slate-400">Lien non disponible</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTENAIRE DE MISE EN ŒUVRE */}
      <section id="mise-oeuvre" className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">Partenaire de mise en œuvre</span>
          <h2 className="mt-3 text-3xl font-black text-[#1B3F8C] md:text-4xl">L’action sur le terrain</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#F4952F]" />
          <div className="mt-10 grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {partenaires.miseOeuvre.map((p, idx) => (
              <div key={p.name} className="group rounded-2xl border-2 border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#F4952F]">
                <h3 className="text-xl font-black text-[#1B3F8C]">{p.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                {editMode ? (
                  <div className="mt-4">
                    <input
                      type="text"
                      value={p.url || ''}
                      onChange={(e) => updateUrl('miseOeuvre', idx, e.target.value)}
                      placeholder="URL du site (ex: https://...)"
                      className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 focus:border-[#F4952F] focus:outline-none"
                    />
                  </div>
                ) : p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#F4952F] transition hover:gap-3 hover:text-[#1B3F8C]"
                  >
                    Visiter le site <span aria-hidden>→</span>
                  </a>
                ) : (
                  <p className="mt-4 text-xs italic text-slate-400">Lien non disponible</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTENAIRES INSTITUTIONNELS (NOUVEAU) */}
      <section id="institutionnels" className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">Partenaires institutionnels</span>
          <h2 className="mt-3 text-3xl font-black text-[#1B3F8C] md:text-4xl">Le cadre institutionnel et politique</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#F4952F]" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partenaires.institutionnels.map((p, idx) => (
              <div key={p.name} className="group rounded-2xl border-2 border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#F4952F]">
                <h3 className="text-lg font-black text-[#1B3F8C]">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                {editMode ? (
                  <div className="mt-3">
                    <input
                      type="text"
                      value={p.url || ''}
                      onChange={(e) => updateUrl('institutionnels', idx, e.target.value)}
                      placeholder="URL du site"
                      className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-xs text-slate-700 focus:border-[#F4952F] focus:outline-none"
                    />
                  </div>
                ) : p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#F4952F] transition hover:gap-2 hover:text-[#1B3F8C]"
                  >
                    Visiter le site <span aria-hidden>→</span>
                  </a>
                ) : (
                  <p className="mt-3 text-xs italic text-slate-400">Lien non disponible</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTENAIRES STRATÉGIQUES */}
      <section id="strategiques" className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">Partenaires stratégiques</span>
          <h2 className="mt-3 text-3xl font-black text-[#1B3F8C] md:text-4xl">Le réseau qui amplifie l’impact</h2>
          <div className="mt-3 h-1 w-16 rounded-full bg-[#F4952F]" />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {partenaires.strategiques.map((p, idx) => (
              <div key={p.name} className="group rounded-2xl border-l-4 border-[#F4952F] bg-white p-6 shadow-sm transition hover:bg-white hover:shadow-md">
                <h3 className="text-lg font-black text-[#1B3F8C]">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
                {editMode ? (
                  <div className="mt-3">
                    <input
                      type="text"
                      value={p.url || ''}
                      onChange={(e) => updateUrl('strategiques', idx, e.target.value)}
                      placeholder="URL du site"
                      className="w-full rounded-lg border border-slate-300 px-2 py-1.5 text-xs text-slate-700 focus:border-[#F4952F] focus:outline-none"
                    />
                  </div>
                ) : p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#F4952F] transition hover:gap-2 hover:text-[#1B3F8C]"
                  >
                    Visiter le site <span aria-hidden>→</span>
                  </a>
                ) : (
                  <p className="mt-3 text-xs italic text-slate-400">Lien non disponible</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}