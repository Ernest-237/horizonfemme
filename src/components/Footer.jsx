import { Link } from 'react-router-dom'
import { useSiteContent } from '../hooks/useSiteContent'

const FOOTER_LOGO = '/assets/hf/logo-hf.png'
const FOOTER_BG = '/assets/hf/footer-hf.jpeg'

export default function Footer() {
  const content = useSiteContent()

  return (
    <footer
      className="relative mt-16 overflow-hidden text-slate-200"
      style={{
        backgroundImage: `url(${FOOTER_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-slate-950/80" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1.1fr_0.8fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-4">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
              <img
                src={FOOTER_LOGO}
                alt="Logo Horizons Femmes"
                className="h-14 w-14 object-contain md:h-16 md:w-16"
              />
            </div>

            <div>
              <p className="text-2xl font-black text-white">Horizons Femmes</p>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                ONG
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-7 text-slate-300">
            {content.footer.description}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            {content.footer.navigation}
          </p>

          <div className="mt-4 flex flex-col gap-3 text-sm">
            <Link to="/" className="text-slate-200 hover:text-white">
              {content.nav.home}
            </Link>
            <Link to="/a-propos" className="text-slate-200 hover:text-white">
              {content.nav.about}
            </Link>
            <Link to="/actualites" className="text-slate-200 hover:text-white">
              {content.nav.news}
            </Link>
            <Link to="/initiatives" className="text-slate-200 hover:text-white">
              {content.nav.initiatives}
            </Link>
            <Link to="/ressources" className="text-slate-200 hover:text-white">
              {content.nav.resources}
            </Link>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            {content.footer.contact}
          </p>

          <div className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
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