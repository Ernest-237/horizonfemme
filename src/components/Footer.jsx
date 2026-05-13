import { Link } from 'react-router-dom'
import { useSiteContent } from '../hooks/useSiteContent'
import SilhouetteFiligree from './sagco/SilhouetteFiligree'

const FOOTER_LOGO = '/assets/hf/logo-hf.jpeg'
const FOOTER_BG = '/assets/hf/footer-hf.jpeg'

export default function Footer() {
  const content = useSiteContent()

  return (
    <footer
      className="relative mt-16 overflow-hidden text-slate-100"
      style={{
        backgroundImage: `url(${FOOTER_BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay bleu marine (charte) */}
      <div className="absolute inset-0 bg-hf-blue/92" />

      {/* Silhouette en filigrane — élément récurrent de la charte (p. 13-19) */}
      <div className="pointer-events-none absolute -right-20 -bottom-10 h-[420px] w-[420px]">
        <SilhouetteFiligree color="#ffffff" opacity={0.07} className="h-full w-full" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8">
        {/* === Bandeau du haut : logo + slogan officiel === */}
        <div className="flex flex-col items-start gap-6 border-b-2 border-hf-orange/50 pb-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <div className="overflow-hidden  backdrop-blur-sm">
              <img
                src={FOOTER_LOGO}
                alt="Logo Horizons Femmes"
                className="h-14 w-14 object-contain md:h-16 FOOTER_LOGO"
              />
            </div>

            <div>
              <p className="text-2xl font-black text-white">Horizons Femmes</p>
              <p className="mt-0.5 text-[11px] uppercase tracking-[0.24em] text-hf-orange">
                Organisation Non Gouvernementale
              </p>
            </div>
          </div>

          {/* Slogan officiel (cf. charte p. 1 et 19) */}
          <p className="text-sm italic text-slate-200 md:text-right">
            Au service de la femme et de la jeune fille
          </p>
        </div>

        {/* === Grille principale === */}
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          {/* Colonne 1 : description + bouton SAGCO */}
          <div>
            <p className="text-sm leading-7 text-slate-200">
              {content.footer.description}
            </p>

            {/* Petit rappel vers le sous-site SAGCO */}
            <Link
              to="/sagco"
              className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-hf-orange bg-transparent px-4 py-2 text-xs font-bold text-white transition hover:bg-hf-orange"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-hf-orange" aria-hidden />
              Découvrir le projet SAGCO →
            </Link>
          </div>

          {/* Colonne 2 : Navigation */}
          <div>
            <p className="border-b-2 border-hf-orange pb-2 text-sm font-bold uppercase tracking-[0.18em] text-white">
              {content.footer.navigation}
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link to="/" className="text-slate-200 transition hover:text-hf-orange">
                {content.nav.home}
              </Link>
              <Link to="/a-propos" className="text-slate-200 transition hover:text-hf-orange">
                {content.nav.about}
              </Link>
              <Link to="/actualites" className="text-slate-200 transition hover:text-hf-orange">
                {content.nav.news}
              </Link>
              <Link to="/initiatives" className="text-slate-200 transition hover:text-hf-orange">
                {content.nav.initiatives}
              </Link>
              <Link to="/ressources" className="text-slate-200 transition hover:text-hf-orange">
                {content.nav.resources}
              </Link>
            </div>
          </div>

          {/* Colonne 3 : Contact */}
          <div>
            <p className="border-b-2 border-hf-orange pb-2 text-sm font-bold uppercase tracking-[0.18em] text-white">
              {content.footer.contact}
            </p>

            <div className="mt-4 space-y-3 text-sm leading-7 text-slate-200">
              {content.footer.offices.map((office) => (
                <p key={office}>{office}</p>
              ))}

              <p className="text-hf-orange">{content.footer.email}</p>

              <div className="space-y-1 pt-2">
                {content.footer.socials.map((social) => (
                  <p key={social} className="text-slate-300">
                    {social}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === Bas : copyright === */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/15 pt-6 text-xs text-slate-300 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Horizons Femmes — Tous droits réservés.</p>
          <p className="italic">
            Pour la promotion et la protection des droits de la femme et de la jeune fille
          </p>
        </div>
      </div>
    </footer>
  )
}