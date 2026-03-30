import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useSiteContent } from '../hooks/useSiteContent'

const NAVBAR_LOGO = '/assets/hf/logo-hf.png' // <- remplace l'image ici si besoin

function getNavLinkClass(isActive) {
  return isActive
    ? 'text-blue-900 font-semibold'
    : 'text-slate-600 hover:text-blue-900 transition'
}

export default function Header() {
  const { locale, setLocale } = useLanguage()
  const content = useSiteContent()

  const navItems = [
    { label: content.nav.home, path: '/' },
    { label: content.nav.about, path: '/a-propos' },
    { label: content.nav.news, path: '/actualites' },
    { label: content.nav.initiatives, path: '/initiatives' },
    { label: content.nav.resources, path: '/ressources' },
    { label: content.nav.testimonials, path: '/temoignages' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-4">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
            <img
              src={NAVBAR_LOGO}
              alt="Logo Horizons Femmes"
              className="h-12 w-12 object-contain md:h-14 md:w-14"
            />
          </div>

          <div>
            <p className="text-lg font-extrabold tracking-tight text-slate-900 md:text-xl">
              Horizons Femmes
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
              ONG
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) => getNavLinkClass(isActive)}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
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
            className="rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            {content.nav.donate}
          </Link>
        </div>
      </div>
    </header>
  )
}