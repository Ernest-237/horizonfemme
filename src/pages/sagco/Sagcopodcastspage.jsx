import { Link } from 'react-router-dom'
import SilhouetteFiligree from '../../components/sagco/SilhouetteFiligree'

const HERO_IMAGE = 'https://femme.kdllogiscargo.com/assets/images/IMG_5075.JPG'

const reasons = [
  { icon: '🎙', title: 'Inspiration', text: 'Des histoires de femmes réelles qui ont surmonté des défis et transformé leur vie.' },
  { icon: '💡', title: 'Information', text: 'Des conseils pratiques et des informations de santé partagés par des personnes qui les vivent.' },
  { icon: '🤝', title: 'Solidarité', text: 'Sentez-vous moins seule en écoutant les expériences d’autres femmes africaines.' },
]

export default function SagcoPodcastsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#1B3F8C]">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="" className="h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B3F8C] via-[#1B3F8C]/85 to-[#1B3F8C]/40" />
        </div>
        <div className="pointer-events-none absolute -right-20 top-0 h-full w-[500px]">
          <SilhouetteFiligree color="#ffffff" opacity={0.18} className="h-full w-full" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-4 py-20 md:px-6 md:py-28 xl:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-200">
            <Link to="/sagco" className="hover:text-[#F4952F]">Accueil</Link>
            <span>/</span>
            <span className="text-[#F4952F]">Podcasts</span>
          </nav>
          <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
            Voix des <span className="text-[#F4952F]">Copines</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-slate-100">
            Écoutez les histoires inspirantes de femmes africaines.
          </p>
        </div>
      </section>

      {/* COMING SOON */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
              Nos Podcasts & Témoignages
            </span>
            <h2 className="mt-4 text-3xl font-black text-[#1B3F8C] md:text-4xl">
              Histoires authentiques
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
            <p className="mt-4 text-slate-600">
              Découvrez les histoires authentiques de femmes et de jeunes filles
              qui ont transformé leur vie.
            </p>
          </div>

          <div className="relative mt-14 overflow-hidden rounded-3xl border-2 border-[#F4952F]/30 bg-[#F4952F]/5 p-10 text-center md:p-16">
            <div className="pointer-events-none absolute -right-12 -top-12 h-[260px] w-[260px]">
              <SilhouetteFiligree color="#1B3F8C" opacity={0.08} className="h-full w-full" />
            </div>
            <div className="relative">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[3px] border-[#F4952F] bg-[#1B3F8C] text-3xl shadow-lg">
                🎧
              </div>
              <h3 className="mt-6 text-2xl font-black text-[#1B3F8C] md:text-3xl">
                Bientôt disponible
              </h3>
              <p className="mx-auto mt-4 max-w-md text-slate-700">
                Nos premiers podcasts sont en cours de production. Restez
                connectés pour ne rien manquer.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/sagco/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#1B3F8C] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:bg-[#163474]"
                >
                  Être notifié·e
                </Link>
                <Link
                  to="/sagco/medias"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[#1B3F8C] bg-white px-7 py-3.5 text-sm font-bold text-[#1B3F8C] transition hover:bg-[#1B3F8C] hover:text-white"
                >
                  Voir la médiathèque
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY LISTEN */}
      <section className="bg-slate-50 py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 xl:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
              Pourquoi écouter
            </span>
            <h2 className="mt-4 text-3xl font-black text-[#1B3F8C] md:text-4xl">
              Pourquoi écouter les Voix des Copines ?
            </h2>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F4952F]" />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="group rounded-2xl border-2 border-slate-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:border-[#F4952F] hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1B3F8C] text-3xl shadow-md">
                  <span aria-hidden>{r.icon}</span>
                </div>
                <h3 className="mt-5 text-xl font-bold text-[#1B3F8C]">
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

      {/* SHARE */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6 xl:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-[#1B3F8C] p-10 text-white shadow-2xl md:p-14">
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-[280px] w-[280px]">
              <SilhouetteFiligree color="#F4952F" opacity={0.2} className="h-full w-full" />
            </div>
            <div className="relative grid items-center gap-8 md:grid-cols-[2fr,1fr]">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#F4952F]">
                  Partagez
                </span>
                <h2 className="mt-3 text-3xl font-black md:text-4xl">
                  Partagez votre histoire
                </h2>
                <p className="mt-4 max-w-xl text-slate-200">
                  Votre voix peut inspirer d’autres femmes. Contactez-nous pour
                  participer à un futur épisode des Voix des Copines.
                </p>
              </div>
              <div className="flex md:justify-end">
                <Link
                  to="/sagco/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F4952F] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#e08522]"
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