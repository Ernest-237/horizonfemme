import { Link, NavLink } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

const HF_BLUE = '#1B3F8C'
const HF_ORANGE = '#F4952F'

const sagcoLinks = [
  { label: 'Accueil', to: '/sagco' },
  { label: 'À Propos', to: '/sagco/a-propos' },
  { label: 'Acteurs', to: '/sagco/acteurs' },
  { label: 'Médias', to: '/sagco/medias' },
  { label: 'Podcasts', to: '/sagco/podcasts' },
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
  const closeTimerRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) clearTimeout(closeTimerRef.current)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[#1B3F8C]/10 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-4 md:px-6 xl:px-8">
        {/* Logo SAGCO — respecte la charte (couleurs officielles) */}
        <Link to="/sagco" className="flex min-w-0 shrink-0 items-center gap-3">
         <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-full border-[3px] border-[#F4952F] bg-white shadow-sm">
  <img
    src="./public/assets/hf/logo-sago.png"
    alt="Logo SAGCO"
    className=""
  />
</div>
          <div className="min-w-0">
            <p
              className="whitespace-nowrap text-lg font-black tracking-tight"
              style={{ color: HF_BLUE }}
            >
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
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/sagco'}
              className={navClass}
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive ? (
                    <span
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: HF_ORANGE }}
                    />
                  ) : null}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Return to Horizons Femmes */}
        <div className="hidden shrink-0 items-center gap-3 lg:flex">
          <Link
            to="/"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border-2 border-[#1B3F8C] bg-white px-4 py-2 text-xs font-bold text-[#1B3F8C] shadow-sm transition hover:bg-[#1B3F8C] hover:text-white"
          >
            <span aria-hidden>↩</span> Horizons Femmes
          </Link>
        </div>

        {/* Mobile burger */}
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

      {/* Mobile menu */}
      {mobileOpen ? (
        <>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-slate-950/30 lg:hidden"
            aria-label="Fermer le menu"
          />
          <div className="fixed inset-x-0 top-[81px] z-50 border-t-2 border-[#F4952F] bg-white shadow-2xl lg:hidden">
            <div className="mx-auto max-h-[calc(100vh-81px)] max-w-7xl overflow-y-auto px-4 py-4 md:px-6">
              <nav className="space-y-2">
                {sagcoLinks.map((link) => (
                  <NavLink
                    key={link.to}
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