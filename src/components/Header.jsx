import { Link, NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSiteContent } from '../hooks/useSiteContent'

const NAVBAR_LOGO = '/assets/hf/logo-hf.jpeg'

function ChevronDown({ className = '' }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
    </svg>
  )
}

function ChevronRight({ className = '' }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.06 10 7.23 6.29a.75.75 0 111.04-1.08l4.39 4.25a.75.75 0 010 1.08l-4.39 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
    </svg>
  )
}

function PhoneIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  )
}

function MailIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  )
}

function HeartIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
    </svg>
  )
}

function ChildLink({ child, onClick, className }) {
  const isRoute = child.isRoute === true
  if (isRoute) {
    return <Link to={child.href} onClick={onClick} className={className}>{child.label}</Link>
  }
  return <a href={child.href} onClick={onClick} className={className}>{child.label}</a>
}

export default function Header() {
  const { locale, setLocale } = useLanguage()
  const content = useSiteContent()
  const [openDesktopMenu, setOpenDesktopMenu] = useState(null)   // label du menu principal ouvert
  const [openDesktopSubMenu, setOpenDesktopSubMenu] = useState(null) // label de l'enfant avec sous‑menu
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)
  const [mobileSubSection, setMobileSubSection] = useState(null) // sous‑niveau mobile
  const closeTimerRef = useRef(null)

  function handleMenuEnter(label, hasChildren) {
    if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null }
    if (!hasChildren) {
      setOpenDesktopMenu(null)
      setOpenDesktopSubMenu(null)
    }
  }

  function handleMenuLeave() {
    closeTimerRef.current = setTimeout(() => {
      setOpenDesktopMenu(null)
      setOpenDesktopSubMenu(null)
    }, 150)
  }

  function handleSubMenuEnter(childLabel) {
    if (closeTimerRef.current) { clearTimeout(closeTimerRef.current); closeTimerRef.current = null }
    setOpenDesktopSubMenu(childLabel)
  }

  function handleSubMenuLeave() {
    closeTimerRef.current = setTimeout(() => {
      setOpenDesktopSubMenu(null)
    }, 150)
  }

  useEffect(() => () => { if (closeTimerRef.current) clearTimeout(closeTimerRef.current) }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const menuItems = [
    { label: 'Accueil', path: '/' },
    {
      label: 'À propos',
      path: '/a-propos',
      children: [
        {
          label: 'Notre Cadre stratégique',
          children: [
            { label: 'Notre Histoire', href: '/a-propos#cadre-strategique' },
            { label: 'Notre Mission', href: '/a-propos#cadre-strategique' },
            { label: 'Nos Valeurs', href: '/a-propos#cadre-strategique' },
            { label: 'Notre Vision', href: '/a-propos#cadre-strategique' },
            { label: 'Nos Services', href: '/a-propos#cadre-strategique' },
            { label: 'Notre Savoir-faire', href: '/a-propos#cadre-strategique' },
          ],
        },
        { label: 'Nos Axes stratégiques', href: '/a-propos#axes-strategiques' },
        { label: 'Nos Organes', href: '/a-propos#organes' },
        { label: 'Nos Bureaux', href: '/a-propos#carte-signaletique' },
        { label: 'Nos Distinctions honorifiques', href: '/a-propos#honors' },
      ],
    },
    { label: 'Actualités', path: '/actualites' },
    { label: 'Initiatives', path: '/initiatives' },
    {
      label: 'Ressources',
      path: '/ressources',
      children: [
        { label: 'Rapports d’activités', href: '/ressources#rapports' },
        { label: 'Documents de capitalisation', href: '/ressources#guides' },
        { label: 'Rapports d’études', href: '/ressources#manuels' },
        { label: 'Rapports annuels', href: '/ressources#plaidoyer' },
        { label: 'Rapports des projets', href: '/ressources#documentaires' },
      ],
    },
    { label: 'Médiathèque', path: '/mediatheque' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-hf-blue text-white lg:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-1 md:px-6 xl:px-8">
          {/* ... identique à l'original ... */}
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-5 px-4 py-2.5 md:px-6 xl:px-8">
          <Link to="/" className="flex min-w-0 shrink-0 items-center gap-4">
            {/* logo et marque */}
          </Link>

          {/* Desktop nav */}
          <nav className="hidden flex-1 items-center justify-center gap-0 xl:flex">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  handleMenuEnter(item.label, !!item.children)
                  if (item.children) setOpenDesktopMenu(item.label)
                }}
                onMouseLeave={handleMenuLeave}
              >
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className="group relative flex items-center gap-0.5 whitespace-nowrap px-2.5 py-2 text-[13px] font-semibold transition"
                >
                  {({ isActive }) => (
                    <>
                      <span className={isActive ? 'text-hf-blue' : 'text-slate-700 transition group-hover:text-hf-blue'}>
                        {item.label}
                      </span>
                      {item.children ? (
                        <ChevronDown className={`h-3 w-3 transition ${isActive ? 'text-hf-blue' : 'text-slate-400 group-hover:text-hf-blue'} ${openDesktopMenu === item.label ? 'rotate-180' : ''}`} />
                      ) : null}
                      <span className={`pointer-events-none absolute -bottom-px left-2.5 right-2.5 h-0.5 rounded-full bg-hf-orange transition ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'}`} />
                    </>
                  )}
                </NavLink>

                {item.children && openDesktopMenu === item.label ? (
                  <div className="absolute left-1/2 top-full z-30 w-64 -translate-x-1/2 pt-2">
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
                      <div className="h-1 bg-hf-orange" />
                      <div className="p-1.5">
                        {item.children.map((child) => {
                          if (child.children) {
                            // Cet enfant a lui‑même un sous‑menu
                            return (
                              <div
                                key={child.label}
                                className="relative"
                                onMouseEnter={() => handleSubMenuEnter(child.label)}
                                onMouseLeave={handleSubMenuLeave}
                              >
                                <button
                                  type="button"
                                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-hf-blue"
                                >
                                  <span>{child.label}</span>
                                  <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                                </button>
                                {openDesktopSubMenu === child.label && (
                                  <div className="absolute left-full top-0 z-40 ml-1 w-56 -translate-y-2">
                                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
                                      <div className="h-1 bg-hf-orange" />
                                      <div className="p-1.5">
                                        {child.children.map((sub) => (
                                          <ChildLink
                                            key={sub.label}
                                            child={sub}
                                            onClick={() => {
                                              setOpenDesktopMenu(null)
                                              setOpenDesktopSubMenu(null)
                                            }}
                                            className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-hf-blue"
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            )
                          }
                          return (
                            <ChildLink
                              key={child.label}
                              child={child}
                              onClick={() => {
                                setOpenDesktopMenu(null)
                                setOpenDesktopSubMenu(null)
                              }}
                              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-hf-blue"
                            />
                          )
                        })}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          {/* CTA Don */}
          <div className="hidden shrink-0 xl:block">
            <Link
              to="/don"
              className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-hf-orange px-4 py-2 text-[13px] font-bold text-white shadow transition hover:bg-hf-orange-dark"
            >
              <HeartIcon className="h-3.5 w-3.5" />
              <span>{content?.nav?.donate || 'Faire un don'}</span>
            </Link>
          </div>

          {/* Burger mobile */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-hf-blue shadow-sm xl:hidden"
            aria-label="Ouvrir le menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen ? (
        <>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-slate-950/40 xl:hidden"
            aria-label="Fermer le menu"
          />

          <div className="fixed inset-x-0 top-[60px] z-50 border-t border-slate-200 bg-white shadow-2xl xl:hidden">
            <div className="mx-auto max-h-[calc(100vh-60px)] max-w-7xl overflow-y-auto px-4 py-4 md:px-6">
              {/* SAGCO link */}
              <Link
                to="/sagco"
                onClick={() => setMobileOpen(false)}
                className="mb-4 flex items-center justify-between gap-3 rounded-xl border-2 border-hf-orange bg-hf-blue px-5 py-3 text-white shadow"
              >
                {/* ... */}
              </Link>

              <div className="space-y-2">
                {menuItems.map((item) => (
                  <div key={item.label} className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50">
                    <div className="flex items-center justify-between gap-3 px-4 py-3">
                      <Link to={item.path} onClick={() => setMobileOpen(false)} className="text-sm font-bold text-slate-800">
                        {item.label}
                      </Link>
                      {item.children ? (
                        <button
                          type="button"
                          onClick={() => setMobileSection((prev) => (prev === item.label ? null : item.label))}
                          className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold text-hf-blue shadow-sm"
                        >
                          {mobileSection === item.label ? '−' : '+'}
                        </button>
                      ) : null}
                    </div>
                    {item.children && mobileSection === item.label ? (
                      <div className="space-y-0.5 border-t border-slate-200 bg-white px-2 pb-2 pt-1">
                        {item.children.map((child) => {
                          if (child.children) {
                            return (
                              <div key={child.label} className="space-y-0.5">
                                <div className="flex items-center justify-between rounded-lg px-3 py-2">
                                  <span className="text-sm font-medium text-slate-700">{child.label}</span>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      setMobileSubSection((prev) => (prev === child.label ? null : child.label))
                                    }
                                    className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-xs font-bold text-hf-blue"
                                  >
                                    {mobileSubSection === child.label ? '−' : '+'}
                                  </button>
                                </div>
                                {mobileSubSection === child.label && (
                                  <div className="ml-4 space-y-0.5">
                                    {child.children.map((sub) => (
                                      <ChildLink
                                        key={sub.label}
                                        child={sub}
                                        onClick={() => setMobileOpen(false)}
                                        className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                                      />
                                    ))}
                                  </div>
                                )}
                              </div>
                            )
                          }
                          return (
                            <ChildLink
                              key={child.label}
                              child={child}
                              onClick={() => setMobileOpen(false)}
                              className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
                            />
                          )
                        })}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              {/* Langues + Don */}
              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="flex items-center divide-x divide-slate-300 rounded-full border border-slate-300 bg-white">
                  <button onClick={() => setLocale('fr')} className={`px-4 py-2 text-xs font-bold ${locale === 'fr' ? 'text-hf-blue' : 'text-slate-500'}`}>FR</button>
                  <button onClick={() => setLocale('en')} className={`px-4 py-2 text-xs font-bold ${locale === 'en' ? 'text-hf-blue' : 'text-slate-500'}`}>EN</button>
                </div>
                <Link to="/don" onClick={() => setMobileOpen(false)} className="inline-flex items-center gap-2 rounded-full bg-hf-orange px-5 py-2.5 text-sm font-bold text-white shadow">
                  <HeartIcon className="h-4 w-4" />
                  <span>{content?.nav?.donate || 'Faire un don'}</span>
                </Link>
              </div>
              {/* Contact */}
              <div className="mt-5 space-y-1.5 border-t border-slate-200 pt-4 text-xs text-slate-600">
                <a href="tel:+237222314302" className="inline-flex items-center gap-2"><PhoneIcon className="h-3 w-3 text-hf-orange" />+237 222 31 43 02</a>
                <a href="mailto:horizons_femmes@yahoo.fr" className="flex items-center gap-2"><MailIcon className="h-3 w-3 text-hf-orange" />horizons_femmes@yahoo.fr</a>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </header>
  )
}