import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const HF_BLUE = '#1B3F8C'
const HF_ORANGE = '#F4952F'

// Sous-onglets pour la page "À propos"
const sagcoAboutSubLinks = [
  { label: 'Contexte', anchor: 'contexte' },
  { label: 'Objectifs spécifiques', anchor: 'objectifs' },
  { label: 'Zones d\'implémentation', anchor: 'zones' },
  { label: 'Activités phares', anchor: 'activites' },
  { label: 'Acteurs du projet', anchor: 'acteurs' },
  { label: 'Résultats attendus', anchor: 'resultats' },
]

const sagcoLinks = [
  { label: 'Accueil', to: '/sagco' },
  { 
    label: 'À propos', 
    to: '/sagco/a-propos',
    hasDropdown: true,
    dropdownItems: sagcoAboutSubLinks
  },
  { label: 'Acteurs', to: '/sagco/acteurs' },
  { label: 'Actualités', to: '/sagco/actualites' },
  { label: 'Réalisations', to: '/sagco/realisations' },
  { label: 'Multimédia', to: '/sagco/multimedia' },
  { label: 'Contact', to: '/sagco/contact' },
]

function navClass({ isActive }) {
  return `relative px-1 py-2 text-sm font-semibold transition ${
    isActive
      ? 'text-[#1B3F8C]'
      : 'text-slate-700 hover:text-[#1B3F8C]'
  }`
}

export default function SagcoHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  // Fermer le dropdown au clic en dehors
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdown && !event.target.closest('.dropdown-container')) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [openDropdown])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  // Fonction pour scroller vers une ancre
  const scrollToAnchor = (anchorId) => {
    const element = document.getElementById(anchorId)
    if (element) {
      const offset = 80 // Hauteur du header fixe
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setOpenDropdown(null)
  }

  // Gérer le clic sur un lien avec ancre
  const handleAnchorClick = (e, anchorId) => {
    e.preventDefault()
    // Si on est déjà sur la page À propos, on scrolle simplement
    if (window.location.pathname === '/sagco/a-propos') {
      scrollToAnchor(anchorId)
    } else {
      // Sinon on navigue vers la page puis on scrolle après chargement
      const targetUrl = `/sagco/a-propos#${anchorId}`
      window.location.href = targetUrl
    }
    setOpenDropdown(null)
  }

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#1B3F8C]/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-4 md:px-6 xl:px-8">
        {/* Logo SAGCO */}
        <Link to="/sagco" className="flex min-w-0 shrink-0 items-center gap-3">
          <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-[3px] border-[#F4952F] bg-white shadow-sm">
            <img
              src="/assets/hf/logo-sago.png"
              alt="Logo SAGCO"
              className="h-full w-full object-contain"
            />
          </div>
          <div className="min-w-0">
            <p className="whitespace-nowrap text-lg font-black tracking-tight" style={{ color: HF_BLUE }}>
              SAGCO
            </p>
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">
              Santé Globale des Copines
            </p>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 lg:flex">
          {sagcoLinks.map((link) => (
            <div key={link.to} className="dropdown-container relative">
              {link.hasDropdown ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === link.label ? null : link.label)}
                    className={`relative flex items-center gap-1 px-1 py-2 text-sm font-semibold transition ${
                      window.location.pathname === '/sagco/a-propos'
                        ? 'text-[#1B3F8C]'
                        : 'text-slate-700 hover:text-[#1B3F8C]'
                    }`}
                  >
                    {link.label}
                    <svg 
                      className={`h-3 w-3 transition-transform duration-200 ${openDropdown === link.label ? 'rotate-180' : ''}`}
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    {window.location.pathname === '/sagco/a-propos' && (
                      <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-[#F4952F]" />
                    )}
                  </button>
                  
                  {/* Dropdown menu */}
                  {openDropdown === link.label && (
                    <div className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-slate-200 bg-white shadow-xl z-50 py-2">
                      {link.dropdownItems.map((item) => (
                        <a
                          key={item.anchor}
                          href={`#${item.anchor}`}
                          onClick={(e) => handleAnchorClick(e, item.anchor)}
                          className="block px-4 py-2.5 text-sm text-slate-700 transition hover:bg-[#F4952F]/10 hover:text-[#1B3F8C]"
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
                  to={link.to}
                  end={link.to === '/sagco'}
                  className={navClass}
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive ? (
                        <span className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full bg-[#F4952F]" />
                      ) : null}
                    </>
                  )}
                </NavLink>
              )}
            </div>
          ))}
        </nav>

        {/* Retour Horizons Femmes */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Link
            to="/"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-[#1B3F8C] bg-white px-4 py-2 text-xs font-bold text-[#1B3F8C] shadow-sm transition hover:bg-[#1B3F8C] hover:text-white"
          >
            <span aria-hidden>↩</span> Horizons Femmes
          </Link>
        </div>

        {/* Burger mobile */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-[#1B3F8C] bg-white text-[#1B3F8C] shadow-sm"
            aria-label="Ouvrir le menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu avec sous-onglets */}
      {mobileOpen ? (
        <>
          <div onClick={() => setMobileOpen(false)} className="fixed inset-0 z-40 bg-slate-950/30 lg:hidden" />
          <div className="fixed inset-x-0 top-[81px] z-50 border-t-2 border-[#F4952F] bg-white shadow-2xl lg:hidden">
            <div className="mx-auto max-h-[calc(100vh-81px)] max-w-7xl overflow-y-auto px-4 py-4 md:px-6">
              <nav className="space-y-2">
                {sagcoLinks.map((link) => (
                  <div key={link.to}>
                    {link.hasDropdown ? (
                      <div className="rounded-2xl bg-slate-50 overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-4 text-sm font-bold text-slate-800">
                          <span>{link.label}</span>
                          <span className="text-[#F4952F] text-xs">▼</span>
                        </div>
                        <div className="bg-white border-t border-slate-100 px-2 py-2">
                          {link.dropdownItems.map((item) => (
                            <a
                              key={item.anchor}
                              href={`#${item.anchor}`}
                              onClick={(e) => {
                                e.preventDefault()
                                setMobileOpen(false)
                                handleAnchorClick(e, item.anchor)
                              }}
                              className="block rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-[#F4952F]/10 hover:text-[#1B3F8C]"
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <NavLink
                        to={link.to}
                        end={link.to === '/sagco'}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          `block rounded-2xl px-4 py-4 text-sm font-bold transition ${
                            isActive
                              ? 'bg-[#1B3F8C] text-white'
                              : 'bg-slate-50 text-slate-800 hover:bg-slate-100'
                          }`
                        }
                      >
                        {link.label}
                      </NavLink>
                    )}
                  </div>
                ))}
              </nav>
              <div className="mt-5">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-full border-2 border-[#1B3F8C] bg-white px-5 py-3 text-sm font-bold text-[#1B3F8C]"
                >
                  <span aria-hidden>↩</span> Retour à Horizons Femmes
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </header>
  )
}