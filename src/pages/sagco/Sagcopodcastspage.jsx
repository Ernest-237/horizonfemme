import { Link } from 'react-router-dom'

const HERO_IMAGE = 'https://femme.kdllogiscargo.com/assets/images/IMG_5075.JPG'

const reasons = [
  {
    icon: '🎙️',
    title: 'Inspiration',
    text: 'Des histoires de femmes réelles qui ont surmonté des défis et transformé leur vie.',
  },
  {
    icon: '💡',
    title: 'Information',
    text: 'Des conseils pratiques et des informations de santé partagés par des personnes qui les vivent.',
  },
  {
    icon: '🤝',
    title: 'Solidarité',
    text: 'Sentez-vous moins seule en écoutant les expériences d’autres femmes africaines.',
  },
]

export default function SagcoPodcastsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={HERO_IMAGE}
            alt="Voix des Copines"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/70 to-pink-900/60" />
        </div>
        <div className="relative mx-auto max-w-[1440px] px-4 py-20 md:px-6 md:py-28 xl:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-300">
            <Link to="/sagco" className="hover:text-pink-300">
              Accueil
            </Link>
            <span>/</span>
            <span className="text-pink-300">Podcasts</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Voix des{' '}
            <span className="bg-gradient-to-r from-pink-400 to-fuchsia-300 bg-clip-text text-transparent">
              Copines
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-200">
            Écoutez les histoires inspirantes de femmes africaines.
          </p>
        </div>
      </section>

      {/* PODCASTS / COMING SOON */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
              Nos Podcasts & Témoignages
            </span>
            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">
              Histoires authentiques
            </h2>
            <p className="mt-4 text-slate-600">
              Découvrez les histoires authentiques de femmes et de jeunes filles
              qui ont transformé leur vie. Écoutez leurs témoignages, leurs
              conseils, et trouvez de l’inspiration.
            </p>
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl border border-pink-200 bg-gradient-to-br from-pink-50 via-fuchsia-50 to-purple-50 p-10 text-center shadow-sm md:p-16">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-600 text-3xl shadow-lg shadow-pink-500/30">
              🎧
            </div>
            <h3 className="mt-6 text-2xl font-black text-slate-900 md:text-3xl">
              Bientôt disponible
            </h3>
            <p className="mx-auto mt-4 max-w-md text-slate-600">
              Nos premiers podcasts sont en cours de production. Restez
              connectés pour ne rien manquer.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/sagco/contact"
                className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-700"
              >
                Être notifié·e
              </Link>
              <Link
                to="/sagco/medias"
                className="inline-flex items-center gap-2 rounded-full border border-pink-300 bg-white px-7 py-3.5 text-sm font-bold text-pink-700 transition hover:bg-pink-50"
              >
                Voir la médiathèque
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY LISTEN */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-pink-600">
              Pourquoi écouter
            </span>
            <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">
              Pourquoi écouter les Voix des Copines ?
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500" />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-pink-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-500 text-3xl shadow-md">
                  <span aria-hidden>{r.icon}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {r.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {r.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHARE YOUR STORY */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6 xl:px-8">
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-pink-600 via-fuchsia-600 to-purple-700 p-10 text-white shadow-2xl md:p-14">
            <div className="grid items-center gap-8 md:grid-cols-[2fr,1fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-pink-200">
                  Partagez
                </span>
                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  Partagez votre histoire
                </h2>
                <p className="mt-4 max-w-xl text-pink-50">
                  Votre voix peut inspirer d’autres femmes. Contactez-nous pour
                  participer à un futur épisode des Voix des Copines.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link
                  to="/sagco/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-pink-700 transition hover:bg-pink-50"
                >
                  Me proposer →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}