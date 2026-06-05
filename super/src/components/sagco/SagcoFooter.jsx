import { Link } from 'react-router-dom'


export default function SagcoFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#1B3F8C] text-slate-100">
      {/* Filigrane silhouette en bas à droite */}
      

      <div className="relative mx-auto max-w-[1440px] px-4 py-14 md:px-6 xl:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#F4952F] bg-white shadow-md">
                <span className="text-base font-black text-[#1B3F8C]">S</span>
              </div>
              <div>
                <p className="text-lg font-black text-white">SAGCO</p>
                <p className="text-[11px] uppercase tracking-[0.18em] text-slate-300">
                  Santé Globale des Copines
                </p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-slate-200">
              Horizons Femmes pour la promotion et la protection des droits de
              la femme et de la jeune fille.
            </p>
            <p className="mt-3 text-xs italic text-slate-300">
              Au service de la femme et de la jeune fille
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[
                { name: 'f', href: 'https://facebook.com/HorizonsFemmesofficiel/' },
                { name: 't', href: 'https://twitter.com/Horizons_Femmes' },
                { name: 'in', href: 'https://linkedin.com/company/ONG-HorizonsFemmes/' },
              ].map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-[#F4952F] hover:bg-[#F4952F]"
                  aria-label={s.name}
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="border-b-2 border-[#F4952F] pb-2 text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                { label: 'Accueil Horizons Femmes', to: '/' },
                { label: 'À propos', to: '/a-propos' },
                { label: 'Projets', to: '/initiatives' },
                { label: 'Actualités', to: '/actualites' },
                { label: 'Contact', to: '/contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-200 transition hover:text-[#F4952F]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="border-b-2 border-[#F4952F] pb-2 text-sm font-bold uppercase tracking-wider text-white">
              Nous contacter
            </h4>
            <div className="mt-4 space-y-4 text-sm">
              <div>
                <p className="font-bold text-white">Siège social</p>
                <p className="mt-1 text-slate-200">
                  B.P 8480 Yaoundé, Cameroun
                  <br />
                  Mini-ferme Melen, Immeuble MTN
                </p>
              </div>
              <div>
                <p className="font-bold text-white">Téléphone</p>
                <a
                  href="tel:+237222314302"
                  className="mt-1 block text-slate-200 hover:text-[#F4952F]"
                >
                  +237 222 31 43 02
                </a>
              </div>
              <div>
                <p className="font-bold text-white">Email</p>
                <a
                  href="mailto:horizons_femmes@yahoo.fr"
                  className="mt-1 block text-slate-200 hover:text-[#F4952F]"
                >
                  horizons_femmes@yahoo.fr
                </a>
              </div>
            </div>
          </div>

          {/* Antennes */}
          <div>
            <h4 className="border-b-2 border-[#F4952F] pb-2 text-sm font-bold uppercase tracking-wider text-white">
              Nos antennes
            </h4>
            <ul className="mt-4 space-y-4 text-sm">
              {[
                { region: 'Littoral', city: 'Douala', tel: '+237 233 18 79 55', telHref: '+237233187955' },
                { region: 'Ouest', city: 'Bafoussam', tel: '+237 222 70 29 25', telHref: '+237222702925' },
                { region: 'Sud', city: 'Ebolowa', tel: '+237 698 84 79 25', telHref: '+237698847925' },
              ].map((a) => (
                <li key={a.region}>
                  <p className="font-bold text-white">{a.region}</p>
                  <p className="text-slate-200">
                    {a.city} ·{' '}
                    <a
                      href={`tel:${a.telHref}`}
                      className="hover:text-[#F4952F]"
                    >
                      {a.tel}
                    </a>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/20 pt-6 text-xs text-slate-300 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Horizons Femmes. Tous droits réservés.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-[#F4952F]">Politique de confidentialité</a>
            <a href="#" className="hover:text-[#F4952F]">Conditions d'utilisation</a>
            <a href="#" className="hover:text-[#F4952F]">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}