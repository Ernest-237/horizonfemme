import { Link, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { useSiteContent } from '../hooks/useSiteContent'

const NAVBAR_LOGO = '/assets/hf/logo-hf.png'

function navLinkClass(isActive) {
  return isActive
    ? 'text-blue-900 font-semibold'
    : 'text-slate-600 hover:text-blue-900 transition'
}

export default function Header() {
  const { locale, setLocale } = useLanguage()
  const content = useSiteContent()
  const [openDesktopMenu, setOpenDesktopMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileSection, setMobileSection] = useState(null)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const menuItems = [
    {
      label: content?.nav?.home || 'Accueil',
      path: '/',
      children: [
        { label: 'Bannière', href: '/#hero-home' },
        { label: 'Édito', href: 'assets/hf/edito.jpeg' },
        { label: "À propos de l’ONG", href: '/#about-home' },
        { label: 'Plus de 20 ans', href: '/#impact-home' },
        { label: 'Actualités', href: '/#actualites-home' },
        { label: 'Initiatives', href: '/#initiatives-home' },
        { label: 'Partenaires', href: '/#partenaires-home' },
      ],
    },
    {
      label: "À propos de l’ONG",
      path: '/a-propos',
      children: [
        { label: 'Notre histoire', href: '/a-propos#histoire' },
        { label: 'Vision', href: '/a-propos#vision' },
        { label: 'Valeurs', href: '/a-propos#values' },
        { label: 'Notre équipe', href: '/a-propos#team' },
        { label: 'Notre savoir-faire', href: '/a-propos#expertise' },
        { label: 'Distinctions honorifiques', href: '/a-propos#honors' },
      ],
    },
    {
      label: content?.nav?.news || 'Actualités',
      path: '/actualites',
    },
    {
      label: 'Nos initiatives',
      path: '/initiatives',
      children: [
        { label: 'SAGCO', href: '/initiatives#sagco' },
        { label: 'AWDF', href: '/initiatives#awdf' },
        { label: 'Proximité Plus', href: '/initiatives#proximite-plus' },
        {
          label: 'Dispensation communautaire',
          href: '/initiatives#yaounde-observance',
        },
        { label: 'COSMO', href: '/initiatives#cosmo' },
      ],
    },
    {
      label: 'Nos ressources',
      path: '/ressources',
      children: [
        { label: 'Nos productions', href: '/ressources#production' },
        { label: 'Opportunités', href: '/ressources#opportunites' },
      ],
    },
    /* {
      label: content?.nav?.testimonials || 'Témoignages',
      path: '/temoignages',
    }, */
    {
      label: 'Multimédiateque',
      path: '/mediatheque',
      children: [
        { label: 'Photothèque', href: '/mediatheque#phototheque' },
        { label: 'Vidéothèque', href: '/mediatheque#videotheque' },
      ],
    }, 

    {
      label: content?.nav?.contact || 'Contact',
      path: '/contact',
    },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-4 md:px-6 xl:px-8">
        <Link to="/" className="flex min-w-0 shrink-0 items-center gap-4">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
            <img
              src={NAVBAR_LOGO}
              alt="Logo Horizons Femmes"
              className="h-12 w-12 object-contain md:h-14 md:w-14"
            />
          </div>

          <div className="min-w-0">
            <p className="whitespace-nowrap text-xl font-black tracking-tight text-slate-900">
              Horizons Femmes
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
              ONG
            </p>
          </div>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-4 2xl:gap-6 xl:flex">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative shrink-0"
              onMouseEnter={() =>
                setOpenDesktopMenu(item.children ? item.label : null)
              }
              onMouseLeave={() => setOpenDesktopMenu(null)}
            >
              <div className="flex items-center gap-1 whitespace-nowrap">
                <NavLink
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) =>
                    `${navLinkClass(
                      isActive
                    )} whitespace-nowrap text-[15px] leading-none`
                  }
                >
                  {item.label}
                </NavLink>

                {item.children ? (
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDesktopMenu((prev) =>
                        prev === item.label ? null : item.label
                      )
                    }
                    className="shrink-0 text-[11px] text-slate-400"
                    aria-label={`Ouvrir ${item.label}`}
                  >
                    ▾
                  </button>
                ) : null}
              </div>

              {item.children && openDesktopMenu === item.label ? (
                <div className="absolute left-1/2 top-full z-30 mt-4 w-72 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
                  <div className="space-y-1">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block rounded-xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-900"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 xl:flex">
          <div className="flex rounded-full border border-slate-300 bg-white p-1">
            <button
              onClick={() => setLocale('fr')}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                locale === 'fr' ? 'bg-blue-900 text-white' : 'text-slate-600'
              }`}
            >
              FR
            </button>
            <button
              onClick={() => setLocale('en')}
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                locale === 'en' ? 'bg-blue-900 text-white' : 'text-slate-600'
              }`}
            >
              EN
            </button>
          </div>

          <Link
            to="/don"
            className="whitespace-nowrap rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            {content?.nav?.donate || 'Faire un don'}
          </Link>
        </div>

        <div className="flex items-center gap-3 xl:hidden">
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm"
            aria-label="Ouvrir le menu"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-slate-950/30 xl:hidden"
            aria-label="Fermer le menu"
          />

          <div className="fixed inset-x-0 top-[81px] z-50 border-t border-slate-200 bg-white shadow-2xl xl:hidden">
            <div className="mx-auto max-h-[calc(100vh-81px)] max-w-7xl overflow-y-auto px-4 py-4 md:px-6">
              <div className="space-y-3">
                {menuItems.map((item) => (
                  <div
                    key={item.label}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50"
                  >
                    <div className="flex items-center justify-between gap-3 px-4 py-4">
                      <Link
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className="font-semibold text-slate-800"
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
                          className="rounded-full bg-white px-3 py-1 text-sm text-slate-600 shadow-sm"
                        >
                          {mobileSection === item.label ? '−' : '+'}
                        </button>
                      ) : null}
                    </div>

                    {item.children && mobileSection === item.label ? (
                      <div className="space-y-1 border-t border-slate-200 bg-white px-4 pb-4 pt-3">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => {
                              setMobileOpen(false)
                              setMobileSection(null)
                            }}
                            className="block rounded-xl px-3 py-3 text-sm text-slate-700 hover:bg-slate-50"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between gap-4">
                <div className="flex rounded-full border border-slate-300 bg-white p-1">
                  <button
                    onClick={() => setLocale('fr')}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      locale === 'fr'
                        ? 'bg-blue-900 text-white'
                        : 'text-slate-600'
                    }`}
                  >
                    FR
                  </button>
                  <button
                    onClick={() => setLocale('en')}
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      locale === 'en'
                        ? 'bg-blue-900 text-white'
                        : 'text-slate-600'
                    }`}
                  >
                    EN
                  </button>
                </div>

                <Link
                  to="/don"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white"
                >
                  {content?.nav?.donate || 'Faire un don'}
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </header>
  )
}