import { Link } from 'react-router-dom'
import { useSiteContent } from '../hooks/useSiteContent'

export default function Footer() {
  const content = useSiteContent()

  return (
    <footer className="mt-16 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-2xl font-black text-white">Horizons Femmes</p>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            {content.footer.description}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            {content.footer.navigation}
          </p>

          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link to="/" className="text-slate-300 hover:text-white">
              {content.nav.home}
            </Link>
            <Link to="/a-propos" className="text-slate-300 hover:text-white">
              {content.nav.about}
            </Link>
            <Link to="/actualites" className="text-slate-300 hover:text-white">
              {content.nav.news}
            </Link>
            <Link to="/initiatives" className="text-slate-300 hover:text-white">
              {content.nav.initiatives}
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            {content.footer.contact}
          </p>

          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
            {content.footer.offices.map((office) => (
              <p key={office}>{office}</p>
            ))}

            <p>{content.footer.email}</p>

            {content.footer.socials.map((social) => (
              <p key={social}>{social}</p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}