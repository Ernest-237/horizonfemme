import { Link, NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSiteContent } from '../hooks/useSiteContent'

const NAVBAR_LOGO = '/assets/hf/logo-hf.jpeg'

/* Icône chevron propre */
function ChevronDown({ className = '' }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  )
}

/* Icône téléphone */
function PhoneIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  )
}

/* Icône email */
function MailIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  )
}

/* Icône cœur (pour le bouton don) */
function HeartIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function ChildLink({ child, onClick, className }) {
  const isRoute = child.isRoute === true
  if (isRoute) {
    return (
      <Link to={child.href} onClick={onClick} className={className}>
        {child.label}
      </Link>
    )
  }
  return (
    <a href={child.href} onClick={onClick} className={className}>
      {child.label}
    </a>
  )
}

export default function Header() {
  const { locale, setLocale } = useLanguage()
  const content = useSiteContent()
  const [openDesktopMenu, setOpenDesktopMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)

  const closeTimerRef = useRef(null)

  function handleMenuEnter(label, hasChildren) {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
    setOpenDesktopMenu(hasChildren ? label : null)
  }

  function handleMenuLeave() {
    closeTimerRef.current = setTimeout(() => {
      setOpenDesktopMenu(null)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  /* Labels raccourcis pour une nav pro */
  const menuItems = [
    {
      label: 'Accueil',
      path: '/',
    },
    {
      label: 'À propos',
      path: '/a-propos',
      children: [
        { label: 'Notre histoire', href: '/a-propos#histoire' },
        { label: 'Vision & valeurs', href: '/a-propos#values' },
        { label: 'Notre équipe', href: '/a-propos#team' },
        { label: 'Notre savoir-faire', href: '/a-propos#expertise' },
        { label: 'Distinctions honorifiques', href: '/a-propos#honors' },
      ],
    },
    {
      label: 'Actualités',
      path: '/actualites',
    },
    {
      label: 'Initiatives',
      path: '/initiatives',
      children: [
        { label: 'Proximité Plus', href: '/initiatives#proximite-plus' },
        { label: 'COSMO', href: '/initiatives#cosmo' },
        { label: 'CHILL', href: '/initiatives#chill' },
        { label: 'PASEPRO', href: '/initiatives#pasepro' },
        { label: 'Toutes les initiatives', href: '/initiatives', isRoute: true },
      ],
    },
    {
      label: 'Ressources',
      path: '/ressources',
      children: [
        { label: 'Productions', href: '/ressources#production' },
        { label: 'Multimédia', href: '/ressources#multimedia' },
      ],
    },
    {
      label: 'Médiathèque',
      path: '/mediatheque',
    },
    {
      label: 'Contact',
      path: '/contact',
    },
  ]

  return (
    <header className="sticky top-0 z-50">

      {/* ═══════════════════════════════════════════════════════════════
          TOP UTILITY BAR — bleu marine, infos contact + SAGCO + langues
          ═══════════════════════════════════════════════════════════════ */}
      <div className="hidden bg-hf-blue text-white lg:block">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-4 py-2 md:px-6 xl:px-8">

          {/* Contact rapide */}
          <div className="flex items-center gap-6 text-[12px]">
            <a
              href="tel:+237222314302"
              className="inline-flex items-center gap-1.5 text-slate-100 transition hover:text-hf-orange"
            >
              <PhoneIcon className="h-3.5 w-3.5" />
              <span>+237 222 31 43 02</span>
            </a>
            <a
              href="mailto:horizons_femmes@yahoo.fr"
              className="hidden items-center gap-1.5 text-slate-100 transition hover:text-hf-orange md:inline-flex"
            >
              <MailIcon className="h-3.5 w-3.5" />
              <span>horizons_femmes@yahoo.fr</span>
            </a>
          </div>

          {/* SAGCO + langues */}
          <div className="flex items-center gap-5">
            <NavLink
              to="/sagco"
              className={({ isActive }) =>
                `group inline-flex items-center gap-2 rounded-full border px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider transition ${
                  isActive
                    ? 'border-hf-orange bg-hf-orange text-white'
                    : 'border-hf-orange/40 bg-white/5 text-white hover:border-hf-orange hover:bg-hf-orange'
                }`
              }
            >
              <span className="h-1 w-1 rounded-full bg-hf-orange transition group-hover:bg-white" aria-hidden />
              <span>Projet SAGCO</span>
            </NavLink>

            <div className="flex items-center divide-x divide-white/20">
              <button
                onClick={() => setLocale('fr')}
                className={`px-2 text-[11px] font-bold transition ${
                  locale === 'fr' ? 'text-hf-orange' : 'text-slate-200 hover:text-white'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLocale('en')}
                className={`px-2 text-[11px] font-bold transition ${
                  locale === 'en' ? 'text-hf-orange' : 'text-slate-200 hover:text-white'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MAIN NAVBAR — blanc, logo + items + bouton Don
          ═══════════════════════════════════════════════════════════════ */}
      <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-4 py-3.5 md:px-6 xl:px-8">

          {/* Logo + brand */}
          <Link to="/" className="flex min-w-0 shrink-0 items-center gap-3">
            <div className="overflow-hidden rounded-xl bg-white">
              <img
                src={NAVBAR_LOGO}
                alt="Logo Horizons Femmes"
                className="h-11 w-11 object-contain md:h-12 md:w-12"
              />
            </div>
            <div className="hidden min-w-0 sm:block">
              <p className="whitespace-nowrap text-lg font-black leading-tight tracking-tight text-hf-blue md:text-xl">
                Horizons Femmes
              </p>
              <p className="text-[9.5px] font-medium uppercase tracking-[0.2em] text-slate-500">
                Organisation Non Gouvernementale
              </p>
            </div>
          </Link>

          {/* Nav items — desktop */}
          <nav className="hidden flex-1 items-center justify-center gap-0.5 xl:flex">
            {menuItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMenuEnter(item.label, !!item.children)}
                onMouseLeave={handleMenuLeave}
              >
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className="group relative flex items-center gap-1 whitespace-nowrap px-3 py-2.5 text-[14px] font-semibold transition"
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={
                          isActive
                            ? 'text-hf-blue'
                            : 'text-slate-700 transition group-hover:text-hf-blue'
                        }
                      >
                        {item.label}
                      </span>
                      {item.children ? (
                        <ChevronDown
                          className={`h-3 w-3 transition ${
                            isActive ? 'text-hf-blue' : 'text-slate-400 group-hover:text-hf-blue'
                          } ${openDesktopMenu === item.label ? 'rotate-180' : ''}`}
                        />
                      ) : null}
                      {/* Trait orange (actif ou hover) */}
                      <span
                        className={`pointer-events-none absolute -bottom-px left-3 right-3 h-0.5 rounded-full bg-hf-orange transition ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                        }`}
                      />
                    </>
                  )}
                </NavLink>

                {/* Dropdown */}
                {item.children && openDesktopMenu === item.label ? (
                  <div className="absolute left-1/2 top-full z-30 w-72 -translate-x-1/2 pt-3">
                    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl">
                      <div className="h-1 bg-hf-orange" />
                      <div className="p-2">
                        {item.children.map((child) => (
                          <ChildLink
                            key={child.label}
                            child={child}
                            className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-hf-blue"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            ))}
          </nav>

          {/* CTA Don — desktop */}
          <div className="hidden shrink-0 xl:block">
            <Link
              to="/don"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-hf-orange px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-hf-orange-dark hover:shadow-lg"
            >
              <HeartIcon className="h-4 w-4" />
              <span>{content?.nav?.donate || 'Faire un don'}</span>
            </Link>
          </div>

          {/* Burger mobile */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-hf-blue shadow-sm xl:hidden"
            aria-label="Ouvrir le menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* ═══════════════════════════════════════════════════════════════
          MOBILE MENU
          ═══════════════════════════════════════════════════════════════ */}
      {mobileOpen ? (
        <>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-slate-950/40 xl:hidden"
            aria-label="Fermer le menu"
          />

          <div className="fixed inset-x-0 top-[68px] z-50 border-t border-slate-200 bg-white shadow-2xl xl:hidden">
            <div className="mx-auto max-h-[calc(100vh-68px)] max-w-7xl overflow-y-auto px-4 py-5 md:px-6">

              {/* SAGCO en haut */}
              <Link
                to="/sagco"
                onClick={() => setMobileOpen(false)}
                className="mb-5 flex items-center justify-between gap-3 rounded-xl border-2 border-hf-orange bg-hf-blue px-5 py-3.5 text-white shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-hf-orange bg-white text-sm font-black text-hf-blue"
                    aria-hidden
                  >
                    S
                  </span>
                  <div>
                    <p className="text-sm font-black">Projet SAGCO</p>
                    <p className="text-[11px] text-slate-200">Santé Globale des Copines</p>
                  </div>
                </div>
                <span aria-hidden>→</span>
              </Link>

              {/* Items */}
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <div
                    key={item.label}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50"
                  >
                    <div className="flex items-center justify-between gap-3 px-4 py-3.5">
                      <Link
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className="text-sm font-bold text-slate-800"
                      >
                        {item.label}
                      </Link>

                      {item.children ? (
                        <button
                          type="button"
                          onClick={() =>
                            setMobileSection((prev) =>
                              prev === item.label ? null : item.label
                            )
                          }
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm font-bold text-hf-blue shadow-sm"
                          aria-label={`Ouvrir ${item.label}`}
                        >
                          {mobileSection === item.label ? '−' : '+'}
                        </button>
                      ) : null}
                    </div>

                    {item.children && mobileSection === item.label ? (
                      <div className="space-y-0.5 border-t border-slate-200 bg-white px-2 pb-2 pt-2">
                        {item.children.map((child) => (
                          <ChildLink
                            key={child.label}
                            child={child}
                            onClick={() => {
                              setMobileOpen(false)
                              setMobileSection(null)
                            }}
                            className="block rounded-lg px-3 py-2.5 text-sm text-slate-700 transition hover:bg-slate-50"
                          />
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              {/* Bas : langues + Don */}
              <div className="mt-6 flex items-center justify-between gap-4">
                <div className="flex items-center divide-x divide-slate-300 rounded-full border border-slate-300 bg-white">
                  <button
                    onClick={() => setLocale('fr')}
                    className={`px-4 py-2 text-xs font-bold ${
                      locale === 'fr' ? 'text-hf-blue' : 'text-slate-500'
                    }`}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => setLocale('en')}
                    className={`px-4 py-2 text-xs font-bold ${
                      locale === 'en' ? 'text-hf-blue' : 'text-slate-500'
                    }`}
                  >
                    EN
                  </button>
                </div>

                <Link
                  to="/don"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full bg-hf-orange px-5 py-3 text-sm font-bold text-white shadow"
                >
                  <HeartIcon className="h-4 w-4" />
                  <span>{content?.nav?.donate || 'Faire un don'}</span>
                </Link>
              </div>

              {/* Contact rapide en bas */}
              <div className="mt-6 space-y-2 border-t border-slate-200 pt-5 text-xs text-slate-600">
                <a href="tel:+237222314302" className="inline-flex items-center gap-2">
                  <PhoneIcon className="h-3.5 w-3.5 text-hf-orange" />
                  +237 222 31 43 02
                </a>
                <a href="mailto:horizons_femmes@yahoo.fr" className="flex items-center gap-2">
                  <MailIcon className="h-3.5 w-3.5 text-hf-orange" />
                  horizons_femmes@yahoo.fr
                </a>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </header>
  )
}