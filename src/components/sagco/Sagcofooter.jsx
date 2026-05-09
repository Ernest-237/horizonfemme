import { Link } from 'react-router-dom'

export default function SagcoFooter() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-[1440px] px-4 py-14 md:px-6 xl:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 shadow-md">
                <span className="text-lg font-black text-white">S</span>
              </div>
              <div>
                <p className="text-lg font-black text-white">SAGCO</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  Santé Globale des Copines
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Horizons Femmes pour la Promotion et la Protection des Droits de
              la Femme et de la Jeune Fille.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://facebook.com/HorizonsFemmesofficiel/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-pink-500 hover:text-pink-400"
                aria-label="Facebook"
              >
                f
              </a>
              <a
                href="https://twitter.com/Horizons_Femmes"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-pink-500 hover:text-pink-400"
                aria-label="Twitter"
              >
                t
              </a>
              <a
                href="https://linkedin.com/company/ONG-HorizonsFemmes/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-pink-500 hover:text-pink-400"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-pink-400">
                  Accueil Horizons Femmes
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-pink-400">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/initiatives" className="hover:text-pink-400">
                  Projets
                </Link>
              </li>
              <li>
                <Link to="/actualites" className="hover:text-pink-400">
                  Actualités
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-pink-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Nous contacter
            </h4>
            <div className="mt-4 space-y-4 text-sm">
              <div>
                <p className="font-semibold text-slate-200">Siège social</p>
                <p className="mt-1 text-slate-400">
                  B.P 8480 Yaoundé, Cameroun
                  <br />
                  Mini-ferme, Immeuble MTN
                </p>
              </div>
              <div>
                <p className="font-semibold text-slate-200">Téléphone</p>
                <a
                  href="tel:+237222314302"
                  className="mt-1 block text-slate-400 hover:text-pink-400"
                >
                  +237 222 314 302
                </a>
              </div>
              <div>
                <p className="font-semibold text-slate-200">Email</p>
                <a
                  href="mailto:horizons_femmes@yahoo.fr"
                  className="mt-1 block text-slate-400 hover:text-pink-400"
                >
                  horizons_femmes@yahoo.fr
                </a>
              </div>
            </div>
          </div>

          {/* Antennes */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Nos antennes
            </h4>
            <ul className="mt-4 space-y-4 text-sm">
              <li>
                <p className="font-semibold text-slate-200">Littoral</p>
                <p className="text-slate-400">
                  Douala ·{' '}
                  <a
                    href="tel:+237233373044"
                    className="hover:text-pink-400"
                  >
                    +237 233 373 044
                  </a>
                </p>
              </li>
              <li>
                <p className="font-semibold text-slate-200">Ouest</p>
                <p className="text-slate-400">
                  Bafoussam ·{' '}
                  <a
                    href="tel:+237233445996"
                    className="hover:text-pink-400"
                  >
                    +237 233 445 996
                  </a>
                </p>
              </li>
              <li>
                <p className="font-semibold text-slate-200">Sud</p>
                <p className="text-slate-400">
                  Ebolowa ·{' '}
                  <a
                    href="tel:+237698847925"
                    className="hover:text-pink-400"
                  >
                    +237 698 847 925
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Horizons Femmes. Tous droits réservés.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-pink-400">
              Politique de confidentialité
            </a>
            <a href="#" className="hover:text-pink-400">
              Conditions d'utilisation
            </a>
            <a href="#" className="hover:text-pink-400">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}